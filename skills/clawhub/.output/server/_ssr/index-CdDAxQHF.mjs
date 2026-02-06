import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { l as getSiteMode, m as Route$6, k as useAction, a as api, u as useQuery, S as SkillCard, j as getSkillBadges } from "./router-yCxIimTd.mjs";
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
const PACKAGE_MANAGERS = [
  { id: "npm", label: "npm" },
  { id: "pnpm", label: "pnpm" },
  { id: "bun", label: "bun" }
];
function InstallSwitcher({ exampleSlug = "sonoscli" }) {
  const [pm, setPm] = reactExports.useState("npm");
  const command = reactExports.useMemo(() => {
    switch (pm) {
      case "npm":
        return `npx clawhub@latest install ${exampleSlug}`;
      case "pnpm":
        return `pnpm dlx clawhub@latest install ${exampleSlug}`;
      case "bun":
        return `bunx clawhub@latest install ${exampleSlug}`;
    }
  }, [exampleSlug, pm]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "install-switcher", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "install-switcher-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Install any skill folder in one shot:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "install-switcher-toggle", role: "tablist", "aria-label": "Install command", children: PACKAGE_MANAGERS.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: pm === entry.id ? "install-switcher-pill is-active" : "install-switcher-pill",
          role: "tab",
          "aria-selected": pm === entry.id,
          onClick: () => setPm(entry.id),
          children: entry.label
        },
        entry.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-install-code mono", children: command })
  ] });
}
function Home() {
  const mode = getSiteMode();
  return mode === "souls" ? /* @__PURE__ */ jsxRuntimeExports.jsx(OnlyCrabsHome, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsHome, {});
}
function SkillsHome() {
  const highlighted = useQuery(api.skills.list, {
    batch: "highlighted",
    limit: 6
  }) ?? [];
  const latest = useQuery(api.skills.list, {
    limit: 12
  }) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-copy fade-up", "data-delay": "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero-badge", children: "Lobster-light. Agent-right." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-title", children: "ClawHub, the skill dock for sharp agents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle", children: "Upload AgentSkills bundles, version them like npm, and make them searchable with vectors. No gatekeeping, just signal." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 12,
          marginTop: 20
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", search: {
            updateSlug: void 0
          }, className: "btn btn-primary", children: "Publish a skill" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/skills", search: {
            q: void 0,
            sort: void 0,
            dir: void 0,
            highlighted: void 0,
            view: void 0,
            focus: void 0
          }, className: "btn", children: "Browse skills" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-card hero-search-card fade-up", "data-delay": "2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-install", style: {
        marginTop: 18
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Search skills. Versioned, rollback-ready." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InstallSwitcher, { exampleSlug: "sonoscli" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Highlighted skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Curated signal — highlighted for quick trust." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: highlighted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No highlighted skills yet." }) : highlighted.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillCard, { skill, badge: getSkillBadges(skill), summaryFallback: "A fresh skill bundle.", meta: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
        "⭐ ",
        skill.stats.stars,
        " · ⤓ ",
        skill.stats.downloads,
        " · ⤒",
        " ",
        skill.stats.installsAllTime ?? 0
      ] }) }, skill._id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Latest drops" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Newest uploads across the registry." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: latest.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No skills yet. Be the first." }) : latest.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillCard, { skill, summaryFallback: "Agent-ready skill pack.", meta: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
        skill.stats.versions,
        " versions · ⤓ ",
        skill.stats.downloads,
        " · ⤒",
        " ",
        skill.stats.installsAllTime ?? 0
      ] }) }, skill._id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/skills", search: {
        q: void 0,
        sort: void 0,
        dir: void 0,
        highlighted: void 0,
        view: void 0,
        focus: void 0
      }, className: "btn", children: "See all skills" }) })
    ] })
  ] });
}
function OnlyCrabsHome() {
  const navigate = Route$6.useNavigate();
  const ensureSoulSeeds = useAction(api.seed.ensureSoulSeeds);
  const latest = useQuery(api.souls.list, {
    limit: 12
  }) ?? [];
  const [query, setQuery] = reactExports.useState("");
  const seedEnsuredRef = reactExports.useRef(false);
  const trimmedQuery = reactExports.useMemo(() => query.trim(), [query]);
  reactExports.useEffect(() => {
    if (seedEnsuredRef.current) return;
    seedEnsuredRef.current = true;
    void ensureSoulSeeds({});
  }, [ensureSoulSeeds]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-copy fade-up", "data-delay": "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero-badge", children: "SOUL.md, shared." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-title", children: "SoulHub, where system lore lives." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle", children: "Share SOUL.md bundles, version them like docs, and keep personal system lore in one public place." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 12,
          marginTop: 20
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", search: {
            updateSlug: void 0
          }, className: "btn btn-primary", children: "Publish a soul" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/souls", search: {
            q: void 0,
            sort: void 0,
            dir: void 0,
            view: void 0,
            focus: void 0
          }, className: "btn", children: "Browse souls" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-card hero-search-card fade-up", "data-delay": "2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "search-bar", onSubmit: (event) => {
          event.preventDefault();
          void navigate({
            to: "/souls",
            search: {
              q: trimmedQuery || void 0,
              sort: void 0,
              dir: void 0,
              view: void 0,
              focus: void 0
            }
          });
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "search-input", placeholder: "Search souls, prompts, or lore", value: query, onChange: (event) => setQuery(event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-install", style: {
          marginTop: 18
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Search souls. Versioned, readable, easy to remix." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Latest souls" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Newest SOUL.md bundles across the hub." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: latest.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No souls yet. Be the first." }) : latest.map((soul) => /* @__PURE__ */ jsxRuntimeExports.jsx(SoulCard, { soul, summaryFallback: "A SOUL.md bundle.", meta: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
        "⭐ ",
        soul.stats.stars,
        " · ⤓ ",
        soul.stats.downloads,
        " · ",
        soul.stats.versions,
        " v"
      ] }) }, soul._id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/souls", search: {
        q: void 0,
        sort: void 0,
        dir: void 0,
        view: void 0,
        focus: void 0
      }, className: "btn", children: "See all souls" }) })
    ] })
  ] });
}
export {
  Home as component
};
