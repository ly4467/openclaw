import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { n as Route$5, u as useQuery, a as api, k as useAction } from "./router-yCxIimTd.mjs";
import { S as SoulCard } from "./SoulCard-DEIKNAiG.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_chunks/_libs/@vercel/analytics.mjs";
import "../_chunks/_libs/@radix-ui/react-dropdown-menu.mjs";
import "../_chunks/_libs/@radix-ui/primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_chunks/_libs/@radix-ui/react-context.mjs";
import "../_chunks/_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_chunks/_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_chunks/_libs/@radix-ui/react-primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-slot.mjs";
import "../_chunks/_libs/@radix-ui/react-menu.mjs";
import "../_chunks/_libs/@radix-ui/react-collection.mjs";
import "../_chunks/_libs/@radix-ui/react-direction.mjs";
import "../_chunks/_libs/@radix-ui/react-dismissable-layer.mjs";
import "../_chunks/_libs/@radix-ui/react-use-callback-ref.mjs";
import "../_chunks/_libs/@radix-ui/react-use-escape-keydown.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-guards.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-scope.mjs";
import "../_chunks/_libs/@radix-ui/react-popper.mjs";
import "../_chunks/_libs/@floating-ui/react-dom.mjs";
import "../_chunks/_libs/@floating-ui/dom.mjs";
import "../_chunks/_libs/@floating-ui/core.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@radix-ui/react-arrow.mjs";
import "../_chunks/_libs/@radix-ui/react-use-size.mjs";
import "../_chunks/_libs/@radix-ui/react-portal.mjs";
import "../_chunks/_libs/@radix-ui/react-presence.mjs";
import "../_chunks/_libs/@radix-ui/react-roving-focus.mjs";
import "../_chunks/_libs/@radix-ui/react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/tslib.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_chunks/_libs/@radix-ui/react-toggle-group.mjs";
import "../_chunks/_libs/@radix-ui/react-toggle.mjs";
import "../_libs/semver.mjs";
import "../_libs/fflate.mjs";
import "module";
import "../_libs/convex-helpers.mjs";
import "../_libs/convex.mjs";
import "../_libs/lucide-react.mjs";
const sortKeys = ["newest", "downloads", "stars", "name", "updated"];
function parseSort(value) {
  if (typeof value !== "string") return "newest";
  if (sortKeys.includes(value)) return value;
  return "newest";
}
function parseDir(value, sort) {
  if (value === "asc" || value === "desc") return value;
  return sort === "name" ? "asc" : "desc";
}
function SoulsIndex() {
  const navigate = Route$5.useNavigate();
  const search = Route$5.useSearch();
  const sort = search.sort ?? "newest";
  const dir = parseDir(search.dir, sort);
  const view = search.view ?? "list";
  const [query, setQuery] = reactExports.useState(search.q ?? "");
  const souls = useQuery(api.souls.list, {
    limit: 500
  });
  const ensureSoulSeeds = useAction(api.seed.ensureSoulSeeds);
  const seedEnsuredRef = reactExports.useRef(false);
  const searchInputRef = reactExports.useRef(null);
  const isLoadingSouls = souls === void 0;
  reactExports.useEffect(() => {
    setQuery(search.q ?? "");
  }, [search.q]);
  reactExports.useEffect(() => {
    if (search.focus === "search" && searchInputRef.current) {
      searchInputRef.current.focus();
      void navigate({
        search: (prev) => ({
          ...prev,
          focus: void 0
        }),
        replace: true
      });
    }
  }, [search.focus, navigate]);
  reactExports.useEffect(() => {
    if (seedEnsuredRef.current) return;
    seedEnsuredRef.current = true;
    void ensureSoulSeeds({});
  }, [ensureSoulSeeds]);
  const filtered = reactExports.useMemo(() => {
    const value = query.trim().toLowerCase();
    const all = souls ?? [];
    if (!value) return all;
    return all.filter((soul) => {
      if (soul.slug.toLowerCase().includes(value)) return true;
      if (soul.displayName.toLowerCase().includes(value)) return true;
      return (soul.summary ?? "").toLowerCase().includes(value);
    });
  }, [query, souls]);
  const sorted = reactExports.useMemo(() => {
    const multiplier = dir === "asc" ? 1 : -1;
    const results = [...filtered];
    results.sort((a, b) => {
      switch (sort) {
        case "downloads":
          return (a.stats.downloads - b.stats.downloads) * multiplier;
        case "stars":
          return (a.stats.stars - b.stats.stars) * multiplier;
        case "updated":
          return (a.updatedAt - b.updatedAt) * multiplier;
        case "name":
          return (a.displayName.localeCompare(b.displayName) || a.slug.localeCompare(b.slug)) * multiplier;
        default:
          return (a.createdAt - b.createdAt) * multiplier;
      }
    });
    return results;
  }, [dir, filtered, sort]);
  const showing = sorted.length;
  const total = souls?.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "skills-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", style: {
          marginBottom: 8
        }, children: "Souls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", style: {
          marginBottom: 0
        }, children: isLoadingSouls ? "Loading souls…" : `${showing}${typeof total === "number" ? ` of ${total}` : ""} souls.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-toolbar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-search", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: searchInputRef, className: "skills-search-input", value: query, onChange: (event) => {
          const next = event.target.value;
          const trimmed = next.trim();
          setQuery(next);
          void navigate({
            search: (prev) => ({
              ...prev,
              q: trimmed ? next : void 0
            }),
            replace: true
          });
        }, placeholder: "Filter by name, slug, or summary…" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-toolbar-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "skills-sort", value: sort, onChange: (event) => {
            const sort2 = parseSort(event.target.value);
            void navigate({
              search: (prev) => ({
                ...prev,
                sort: sort2,
                dir: parseDir(prev.dir, sort2)
              }),
              replace: true
            });
          }, "aria-label": "Sort souls", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Newest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "updated", children: "Recently updated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "downloads", children: "Downloads" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "stars", children: "Stars" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "skills-dir", type: "button", "aria-label": `Sort direction ${dir}`, onClick: () => {
            void navigate({
              search: (prev) => ({
                ...prev,
                dir: parseDir(prev.dir, sort) === "asc" ? "desc" : "asc"
              }),
              replace: true
            });
          }, children: dir === "asc" ? "↑" : "↓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `skills-view${view === "cards" ? " is-active" : ""}`, type: "button", onClick: () => {
            void navigate({
              search: (prev) => ({
                ...prev,
                view: prev.view === "cards" ? void 0 : "cards"
              }),
              replace: true
            });
          }, children: view === "cards" ? "List" : "Cards" })
        ] })
      ] })
    ] }),
    isLoadingSouls ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-indicator", children: "Loading souls…" }) }) : showing === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No souls match that filter." }) : view === "cards" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: sorted.map((soul) => /* @__PURE__ */ jsxRuntimeExports.jsx(SoulCard, { soul, summaryFallback: "A SOUL.md bundle.", meta: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
      "⭐ ",
      soul.stats.stars,
      " · ⤓ ",
      soul.stats.downloads,
      " · ",
      soul.stats.versions,
      " v"
    ] }) }, soul._id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-list", children: sorted.map((soul) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "skills-row", to: "/souls/$slug", params: {
      slug: soul.slug
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-row-main", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-row-title", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: soul.displayName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "skills-row-slug", children: [
            "/",
            soul.slug
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-row-summary", children: soul.summary ?? "SOUL.md bundle." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-row-metrics", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "⤓ ",
          soul.stats.downloads
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "★ ",
          soul.stats.stars
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          soul.stats.versions,
          " v"
        ] })
      ] })
    ] }, soul._id)) })
  ] });
}
export {
  SoulsIndex as component
};
