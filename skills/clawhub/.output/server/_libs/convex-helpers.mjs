import { r as reactExports } from "../_chunks/_libs/react.mjs";
import { g as getFunctionName, c as convexToJson, u as useConvex, a as useQueries, C as ConvexError } from "./convex.mjs";
function usePaginatedQuery(query, args, options) {
  if (typeof options?.initialNumItems !== "number" || options.initialNumItems <= 0) {
    throw new Error(`\`options.initialNumItems\` must be a positive number. Received \`${options?.initialNumItems}\`.`);
  }
  const skip = args === "skip";
  const argsObject = skip ? {} : args;
  const queryName = getFunctionName(query);
  const createInitialState = reactExports.useMemo(() => {
    return () => {
      return {
        query,
        args: argsObject,
        nextPageKey: 1,
        pageKeys: skip ? [] : [0],
        queries: skip ? {} : {
          0: {
            query,
            args: {
              ...argsObject,
              paginationOpts: {
                numItems: options.initialNumItems,
                cursor: null
              }
            }
          }
        },
        ongoingSplits: {},
        skip
      };
    };
  }, [
    JSON.stringify(convexToJson(argsObject)),
    queryName,
    options.initialNumItems,
    skip
  ]);
  const [state, setState] = reactExports.useState(createInitialState);
  let currState = state;
  if (skip !== state.skip || getFunctionName(query) !== getFunctionName(state.query) || JSON.stringify(convexToJson(argsObject)) !== JSON.stringify(convexToJson(state.args))) {
    currState = createInitialState();
    setState(currState);
  }
  const convexClient = useConvex();
  const logger = convexClient.logger;
  const resultsObject = useQueries(currState.queries);
  const [results, maybeLastResult] = reactExports.useMemo(() => {
    let currResult = void 0;
    const allItems = [];
    for (const pageKey of currState.pageKeys) {
      currResult = resultsObject[pageKey];
      if (currResult === void 0) {
        break;
      }
      if (currResult instanceof Error) {
        if (currResult.message.includes("InvalidCursor") || currResult instanceof ConvexError && typeof currResult.data === "object" && currResult.data?.isConvexSystemError === true && currResult.data?.paginationError === "InvalidCursor") {
          logger.warn("usePaginatedQuery hit error, resetting pagination state: " + currResult.message);
          setState(createInitialState);
          return [[], void 0];
        } else {
          throw currResult;
        }
      }
      const ongoingSplit = currState.ongoingSplits[pageKey];
      if (ongoingSplit !== void 0) {
        if (resultsObject[ongoingSplit[0]] !== void 0 && resultsObject[ongoingSplit[1]] !== void 0) {
          setState(completeSplitQuery(pageKey));
        }
      } else if (currResult.splitCursor && (currResult.pageStatus === "SplitRecommended" || currResult.pageStatus === "SplitRequired" || // For custom pagination, we eagerly split the page when it grows.
      currResult.page.length > options.initialNumItems)) {
        setState(splitQuery(pageKey, currResult.splitCursor, currResult.continueCursor));
      }
      if (currResult.pageStatus === "SplitRequired") {
        return [allItems, void 0];
      }
      allItems.push(...currResult.page);
    }
    return [allItems, currResult];
  }, [
    resultsObject,
    currState.pageKeys,
    currState.ongoingSplits,
    options.initialNumItems,
    createInitialState,
    logger
  ]);
  const statusObject = reactExports.useMemo(() => {
    if (maybeLastResult === void 0 && currState.pageKeys.length <= 1) {
      return {
        status: "LoadingFirstPage",
        isLoading: true,
        loadMore: (_numItems) => {
        }
      };
    } else if (maybeLastResult === void 0 || // The last page (which isn't the first page) is splitting, which is how
    // we model loading more in this helper
    currState.ongoingSplits[currState.pageKeys.at(-1)] !== void 0) {
      return {
        status: "LoadingMore",
        isLoading: true,
        loadMore: (_numItems) => {
        }
      };
    }
    if (maybeLastResult.isDone) {
      return {
        status: "Exhausted",
        isLoading: false,
        loadMore: (_numItems) => {
        }
      };
    }
    const continueCursor = maybeLastResult.continueCursor;
    let alreadyLoadingMore = false;
    return {
      status: "CanLoadMore",
      isLoading: false,
      loadMore: (numItems) => {
        if (!alreadyLoadingMore) {
          alreadyLoadingMore = true;
          setState((prevState) => {
            let nextPageKey = prevState.nextPageKey;
            const queries = { ...prevState.queries };
            let ongoingSplits = prevState.ongoingSplits;
            const lastPageKey = prevState.pageKeys.at(-1);
            const boundLastPageKey = nextPageKey;
            queries[boundLastPageKey] = {
              query: prevState.query,
              args: {
                ...prevState.args,
                paginationOpts: {
                  ...queries[lastPageKey].args.paginationOpts,
                  endCursor: continueCursor
                }
              }
            };
            nextPageKey++;
            ongoingSplits = {
              ...ongoingSplits,
              [lastPageKey]: [boundLastPageKey, nextPageKey]
            };
            queries[nextPageKey] = {
              query: prevState.query,
              args: {
                ...prevState.args,
                paginationOpts: {
                  numItems,
                  cursor: continueCursor
                }
              }
            };
            nextPageKey++;
            return {
              ...prevState,
              nextPageKey,
              queries,
              ongoingSplits
            };
          });
        }
      }
    };
  }, [maybeLastResult, currState.nextPageKey]);
  return {
    results,
    ...statusObject
  };
}
function splitQuery(key, splitCursor, continueCursor) {
  return (prevState) => {
    const queries = { ...prevState.queries };
    const splitKey1 = prevState.nextPageKey;
    const splitKey2 = prevState.nextPageKey + 1;
    const nextPageKey = prevState.nextPageKey + 2;
    queries[splitKey1] = {
      query: prevState.query,
      args: {
        ...prevState.args,
        paginationOpts: {
          ...prevState.queries[key].args.paginationOpts,
          endCursor: splitCursor
        }
      }
    };
    queries[splitKey2] = {
      query: prevState.query,
      args: {
        ...prevState.args,
        paginationOpts: {
          ...prevState.queries[key].args.paginationOpts,
          cursor: splitCursor,
          endCursor: continueCursor
        }
      }
    };
    const ongoingSplits = { ...prevState.ongoingSplits };
    ongoingSplits[key] = [splitKey1, splitKey2];
    return {
      ...prevState,
      nextPageKey,
      queries,
      ongoingSplits
    };
  };
}
function completeSplitQuery(key) {
  return (prevState) => {
    const completedSplit = prevState.ongoingSplits[key];
    if (completedSplit === void 0) {
      return prevState;
    }
    const queries = { ...prevState.queries };
    delete queries[key];
    const ongoingSplits = { ...prevState.ongoingSplits };
    delete ongoingSplits[key];
    let pageKeys = prevState.pageKeys.slice();
    const pageIndex = prevState.pageKeys.findIndex((v) => v === key);
    if (pageIndex >= 0) {
      pageKeys = [
        ...prevState.pageKeys.slice(0, pageIndex),
        ...completedSplit,
        ...prevState.pageKeys.slice(pageIndex + 1)
      ];
    }
    return {
      ...prevState,
      queries,
      pageKeys,
      ongoingSplits
    };
  };
}
export {
  usePaginatedQuery as u
};
