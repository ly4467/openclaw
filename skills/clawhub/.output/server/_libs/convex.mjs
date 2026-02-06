import { r as reactExports, W as We } from "../_chunks/_libs/react.mjs";
var lookup = [];
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(
      encodeChunk(
        uint8,
        i,
        i + maxChunkLength > len2 ? len2 : i + maxChunkLength
      )
    );
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
    );
  }
  return parts.join("");
}
function isSimpleObject(value) {
  const isObject = typeof value === "object";
  const prototype = Object.getPrototypeOf(value);
  const isSimple = prototype === null || prototype === Object.prototype || // Objects generated from other contexts (e.g. across Node.js `vm` modules) will not satisfy the previous
  // conditions but are still simple objects.
  prototype?.constructor?.name === "Object";
  return isObject && isSimple;
}
const LITTLE_ENDIAN = true;
const MIN_INT64 = BigInt("-9223372036854775808");
const MAX_INT64 = BigInt("9223372036854775807");
const ZERO = BigInt("0");
const EIGHT = BigInt("8");
BigInt("256");
function isSpecial(n) {
  return Number.isNaN(n) || !Number.isFinite(n) || Object.is(n, -0);
}
function slowBigIntToBase64(value) {
  if (value < ZERO) {
    value -= MIN_INT64 + MIN_INT64;
  }
  let hex = value.toString(16);
  if (hex.length % 2 === 1) hex = "0" + hex;
  const bytes = new Uint8Array(new ArrayBuffer(8));
  let i = 0;
  for (const hexByte of hex.match(/.{2}/g).reverse()) {
    bytes.set([parseInt(hexByte, 16)], i++);
    value >>= EIGHT;
  }
  return fromByteArray(bytes);
}
function modernBigIntToBase64(value) {
  if (value < MIN_INT64 || MAX_INT64 < value) {
    throw new Error(
      `BigInt ${value} does not fit into a 64-bit signed integer.`
    );
  }
  const buffer = new ArrayBuffer(8);
  new DataView(buffer).setBigInt64(0, value, true);
  return fromByteArray(new Uint8Array(buffer));
}
const bigIntToBase64 = DataView.prototype.setBigInt64 ? modernBigIntToBase64 : slowBigIntToBase64;
const MAX_IDENTIFIER_LEN = 1024;
function validateObjectField(k) {
  if (k.length > MAX_IDENTIFIER_LEN) {
    throw new Error(
      `Field name ${k} exceeds maximum field name length ${MAX_IDENTIFIER_LEN}.`
    );
  }
  if (k.startsWith("$")) {
    throw new Error(`Field name ${k} starts with a '$', which is reserved.`);
  }
  for (let i = 0; i < k.length; i += 1) {
    const charCode = k.charCodeAt(i);
    if (charCode < 32 || charCode >= 127) {
      throw new Error(
        `Field name ${k} has invalid character '${k[i]}': Field names can only contain non-control ASCII characters`
      );
    }
  }
}
const MAX_VALUE_FOR_ERROR_LEN = 16384;
function stringifyValueForError(value) {
  const str = JSON.stringify(value, (_key, value2) => {
    if (value2 === void 0) {
      return "undefined";
    }
    if (typeof value2 === "bigint") {
      return `${value2.toString()}n`;
    }
    return value2;
  });
  if (str.length > MAX_VALUE_FOR_ERROR_LEN) {
    const rest = "[...truncated]";
    let truncateAt = MAX_VALUE_FOR_ERROR_LEN - rest.length;
    const codePoint = str.codePointAt(truncateAt - 1);
    if (codePoint !== void 0 && codePoint > 65535) {
      truncateAt -= 1;
    }
    return str.substring(0, truncateAt) + rest;
  }
  return str;
}
function convexToJsonInternal(value, originalValue, context, includeTopLevelUndefined) {
  if (value === void 0) {
    const contextText = context && ` (present at path ${context} in original object ${stringifyValueForError(
      originalValue
    )})`;
    throw new Error(
      `undefined is not a valid Convex value${contextText}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  }
  if (value === null) {
    return value;
  }
  if (typeof value === "bigint") {
    if (value < MIN_INT64 || MAX_INT64 < value) {
      throw new Error(
        `BigInt ${value} does not fit into a 64-bit signed integer.`
      );
    }
    return { $integer: bigIntToBase64(value) };
  }
  if (typeof value === "number") {
    if (isSpecial(value)) {
      const buffer = new ArrayBuffer(8);
      new DataView(buffer).setFloat64(0, value, LITTLE_ENDIAN);
      return { $float: fromByteArray(new Uint8Array(buffer)) };
    } else {
      return value;
    }
  }
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    return value;
  }
  if (value instanceof ArrayBuffer) {
    return { $bytes: fromByteArray(new Uint8Array(value)) };
  }
  if (Array.isArray(value)) {
    return value.map(
      (value2, i) => convexToJsonInternal(value2, originalValue, context + `[${i}]`)
    );
  }
  if (value instanceof Set) {
    throw new Error(
      errorMessageForUnsupportedType(context, "Set", [...value], originalValue)
    );
  }
  if (value instanceof Map) {
    throw new Error(
      errorMessageForUnsupportedType(context, "Map", [...value], originalValue)
    );
  }
  if (!isSimpleObject(value)) {
    const theType = value?.constructor?.name;
    const typeName = theType ? `${theType} ` : "";
    throw new Error(
      errorMessageForUnsupportedType(context, typeName, value, originalValue)
    );
  }
  const out = {};
  const entries = Object.entries(value);
  entries.sort(([k1, _v1], [k2, _v2]) => k1 === k2 ? 0 : k1 < k2 ? -1 : 1);
  for (const [k, v] of entries) {
    if (v !== void 0) {
      validateObjectField(k);
      out[k] = convexToJsonInternal(v, originalValue, context + `.${k}`);
    }
  }
  return out;
}
function errorMessageForUnsupportedType(context, typeName, value, originalValue) {
  if (context) {
    return `${typeName}${stringifyValueForError(
      value
    )} is not a supported Convex type (present at path ${context} in original object ${stringifyValueForError(
      originalValue
    )}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`;
  } else {
    return `${typeName}${stringifyValueForError(
      value
    )} is not a supported Convex type.`;
  }
}
function convexToJson(value) {
  return convexToJsonInternal(value, value, "");
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
const IDENTIFYING_FIELD = /* @__PURE__ */ Symbol.for("ConvexError");
class ConvexError extends (_b = Error, _a = IDENTIFYING_FIELD, _b) {
  constructor(data) {
    super(typeof data === "string" ? data : stringifyValueForError(data));
    __publicField$1(this, "name", "ConvexError");
    __publicField$1(this, "data");
    __publicField$1(this, _a, true);
    this.data = data;
  }
}
const functionName = /* @__PURE__ */ Symbol.for("functionName");
const toReferencePath = /* @__PURE__ */ Symbol.for("toReferencePath");
function extractReferencePath(reference) {
  return reference[toReferencePath] ?? null;
}
function isFunctionHandle(s) {
  return s.startsWith("function://");
}
function getFunctionAddress(functionReference) {
  let functionAddress;
  if (typeof functionReference === "string") {
    if (isFunctionHandle(functionReference)) {
      functionAddress = { functionHandle: functionReference };
    } else {
      functionAddress = { name: functionReference };
    }
  } else if (functionReference[functionName]) {
    functionAddress = { name: functionReference[functionName] };
  } else {
    const referencePath = extractReferencePath(functionReference);
    if (!referencePath) {
      throw new Error(`${functionReference} is not a functionReference`);
    }
    functionAddress = { reference: referencePath };
  }
  return functionAddress;
}
function getFunctionName(functionReference) {
  const address = getFunctionAddress(functionReference);
  if (address.name === void 0) {
    if (address.functionHandle !== void 0) {
      throw new Error(
        `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${address.functionHandle}`
      );
    } else if (address.reference !== void 0) {
      throw new Error(
        `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${address.reference}`
      );
    }
    throw new Error(
      `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(address)}`
    );
  }
  if (typeof functionReference === "string") return functionReference;
  const name = functionReference[functionName];
  if (!name) {
    throw new Error(`${functionReference} is not a functionReference`);
  }
  return name;
}
function createApi(pathParts = []) {
  const handler = {
    get(_, prop) {
      if (typeof prop === "string") {
        const newParts = [...pathParts, prop];
        return createApi(newParts);
      } else if (prop === functionName) {
        if (pathParts.length < 2) {
          const found = ["api", ...pathParts].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${found}\``
          );
        }
        const path = pathParts.slice(0, -1).join("/");
        const exportName = pathParts[pathParts.length - 1];
        if (exportName === "default") {
          return path;
        } else {
          return path + ":" + exportName;
        }
      } else if (prop === Symbol.toStringTag) {
        return "FunctionReference";
      } else {
        return void 0;
      }
    }
  };
  return new Proxy({}, handler);
}
const anyApi = createApi();
function createChildComponents(root, pathParts) {
  const handler = {
    get(_, prop) {
      if (typeof prop === "string") {
        const newParts = [...pathParts, prop];
        return createChildComponents(root, newParts);
      } else if (prop === toReferencePath) {
        if (pathParts.length < 1) {
          const found = [root, ...pathParts].join(".");
          throw new Error(
            `API path is expected to be of the form \`${root}.childComponent.functionName\`. Found: \`${found}\``
          );
        }
        return `_reference/childComponent/` + pathParts.join("/");
      } else {
        return void 0;
      }
    }
  };
  return new Proxy({}, handler);
}
const componentsGeneric = () => createChildComponents("components", []);
function useSubscription({
  // (Synchronously) returns the current value of our subscription.
  getCurrentValue,
  // This function is passed an event handler to attach to the subscription.
  // It should return an unsubscribe function that removes the handler.
  subscribe
}) {
  const [state, setState] = reactExports.useState(() => ({
    getCurrentValue,
    subscribe,
    value: getCurrentValue()
  }));
  let valueToReturn = state.value;
  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue,
      subscribe,
      value: valueToReturn
    });
  }
  reactExports.useEffect(() => {
    let didUnsubscribe = false;
    const checkForUpdates = () => {
      if (didUnsubscribe) {
        return;
      }
      setState((prevState) => {
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        }
        const value = getCurrentValue();
        if (prevState.value === value) {
          return prevState;
        }
        return { ...prevState, value };
      });
    };
    const unsubscribe = subscribe(checkForUpdates);
    checkForUpdates();
    return () => {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]);
  return valueToReturn;
}
if (typeof We === "undefined") {
  throw new Error("Required dependency 'react' not found");
}
const ConvexContext = We.createContext(
  void 0
  // in the future this will be a mocked client for testing
);
function useConvex() {
  return reactExports.useContext(ConvexContext);
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class QueriesObserver {
  constructor(createWatch) {
    __publicField(this, "createWatch");
    __publicField(this, "queries");
    __publicField(this, "listeners");
    this.createWatch = createWatch;
    this.queries = {};
    this.listeners = /* @__PURE__ */ new Set();
  }
  setQueries(newQueries) {
    for (const identifier of Object.keys(newQueries)) {
      const { query, args, paginationOptions } = newQueries[identifier];
      getFunctionName(query);
      if (this.queries[identifier] === void 0) {
        this.addQuery(
          identifier,
          query,
          args,
          paginationOptions ? { paginationOptions } : {}
        );
      } else {
        const existingInfo = this.queries[identifier];
        if (getFunctionName(query) !== getFunctionName(existingInfo.query) || JSON.stringify(convexToJson(args)) !== JSON.stringify(convexToJson(existingInfo.args)) || JSON.stringify(paginationOptions) !== JSON.stringify(existingInfo.paginationOptions)) {
          this.removeQuery(identifier);
          this.addQuery(
            identifier,
            query,
            args,
            paginationOptions ? { paginationOptions } : {}
          );
        }
      }
    }
    for (const identifier of Object.keys(this.queries)) {
      if (newQueries[identifier] === void 0) {
        this.removeQuery(identifier);
      }
    }
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  getLocalResults(queries) {
    const result = {};
    for (const identifier of Object.keys(queries)) {
      const { query, args } = queries[identifier];
      const paginationOptions = queries[identifier].paginationOptions;
      getFunctionName(query);
      const watch = this.createWatch(
        query,
        args,
        paginationOptions ? { paginationOptions } : {}
      );
      let value;
      try {
        value = watch.localQueryResult();
      } catch (e) {
        if (e instanceof Error) {
          value = e;
        } else {
          throw e;
        }
      }
      result[identifier] = value;
    }
    return result;
  }
  setCreateWatch(createWatch) {
    this.createWatch = createWatch;
    for (const identifier of Object.keys(this.queries)) {
      const { query, args, watch, paginationOptions } = this.queries[identifier];
      const journal = "journal" in watch ? watch.journal() : void 0;
      this.removeQuery(identifier);
      this.addQuery(identifier, query, args, {
        ...journal ? { journal } : [],
        ...paginationOptions ? { paginationOptions } : {}
      });
    }
  }
  destroy() {
    for (const identifier of Object.keys(this.queries)) {
      this.removeQuery(identifier);
    }
    this.listeners = /* @__PURE__ */ new Set();
  }
  addQuery(identifier, query, args, {
    paginationOptions,
    journal
  }) {
    if (this.queries[identifier] !== void 0) {
      throw new Error(
        `Tried to add a new query with identifier ${identifier} when it already exists.`
      );
    }
    const watch = this.createWatch(query, args, {
      ...journal ? { journal } : [],
      ...paginationOptions ? { paginationOptions } : {}
    });
    const unsubscribe = watch.onUpdate(() => this.notifyListeners());
    this.queries[identifier] = {
      query,
      args,
      watch,
      unsubscribe,
      ...paginationOptions ? { paginationOptions } : {}
    };
  }
  removeQuery(identifier) {
    const info = this.queries[identifier];
    if (info === void 0) {
      throw new Error(`No query found with identifier ${identifier}.`);
    }
    info.unsubscribe();
    delete this.queries[identifier];
  }
  notifyListeners() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}
function useQueries(queries) {
  const convex = useConvex();
  if (convex === void 0) {
    throw new Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  }
  const createWatch = reactExports.useMemo(() => {
    return (query, args, {
      journal,
      paginationOptions
    }) => {
      if (paginationOptions) {
        return convex.watchPaginatedQuery(query, args, paginationOptions);
      } else {
        return convex.watchQuery(query, args, journal ? { journal } : {});
      }
    };
  }, [convex]);
  return useQueriesHelper(queries, createWatch);
}
function useQueriesHelper(queries, createWatch) {
  const [observer] = reactExports.useState(() => new QueriesObserver(createWatch));
  if (observer.createWatch !== createWatch) {
    observer.setCreateWatch(createWatch);
  }
  reactExports.useEffect(() => () => observer.destroy(), [observer]);
  const subscription = reactExports.useMemo(
    () => ({
      getCurrentValue: () => {
        return observer.getLocalResults(queries);
      },
      subscribe: (callback) => {
        observer.setQueries(queries);
        return observer.subscribe(callback);
      }
    }),
    [observer, queries]
  );
  return useSubscription(subscription);
}
export {
  ConvexError as C,
  useQueries as a,
  anyApi as b,
  convexToJson as c,
  componentsGeneric as d,
  getFunctionName as g,
  useConvex as u
};
