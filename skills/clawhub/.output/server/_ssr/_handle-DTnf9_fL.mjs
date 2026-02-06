import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { o as Route$3, u as useQuery, a as api, S as SkillCard, j as getSkillBadges, b as useMutation } from "./router-yCxIimTd.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_chunks/_libs/@tanstack/react-router.mjs";
import "../_libs/tiny-warning.mjs";
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
function UserProfile() {
  const {
    handle
  } = Route$3.useParams();
  const me = useQuery(api.users.me);
  const user = useQuery(api.users.getByHandle, {
    handle
  });
  const publishedSkills = useQuery(api.skills.list, user ? {
    ownerUserId: user._id,
    limit: 50
  } : "skip");
  const starredSkills = useQuery(api.stars.listByUser, user ? {
    userId: user._id,
    limit: 50
  } : "skip");
  const isSelf = Boolean(me && user && me._id === user._id);
  const [tab, setTab] = reactExports.useState("stars");
  const [includeRemoved, setIncludeRemoved] = reactExports.useState(false);
  const installed = useQuery(api.telemetry.getMyInstalled, isSelf && tab === "installed" ? {
    includeRemoved
  } : "skip");
  reactExports.useEffect(() => {
    if (!isSelf && tab === "installed") setTab("stars");
  }, [isSelf, tab]);
  if (user === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-indicator", children: "Loading user…" }) }) });
  }
  if (user === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "User not found." }) });
  }
  const avatar = user.image;
  const displayName = user.displayName ?? user.name ?? user.handle ?? "User";
  const displayHandle = user.handle ?? user.name ?? handle;
  const initial = displayName.charAt(0).toUpperCase();
  const isLoadingSkills = starredSkills === void 0;
  const skills = starredSkills ?? [];
  const isLoadingPublished = publishedSkills === void 0;
  const published = publishedSkills ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card settings-profile", style: {
      marginBottom: 22
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "settings-avatar", "aria-hidden": "true", children: avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatar, alt: "" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: initial }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-profile-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "settings-name", children: displayName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-handle", children: [
          "@",
          displayHandle
        ] })
      ] })
    ] }),
    isSelf ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-tabs", role: "tablist", "aria-label": "Profile tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: tab === "stars" ? "profile-tab is-active" : "profile-tab", type: "button", role: "tab", "aria-selected": tab === "stars", onClick: () => setTab("stars"), children: "Stars" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: tab === "installed" ? "profile-tab is-active" : "profile-tab", type: "button", role: "tab", "aria-selected": tab === "installed", onClick: () => setTab("installed"), children: "Installed" })
    ] }) : null,
    tab === "installed" && isSelf ? /* @__PURE__ */ jsxRuntimeExports.jsx(InstalledSection, { includeRemoved, onToggleRemoved: () => setIncludeRemoved((value) => !value), data: installed }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.3rem"
      }, children: "Published" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Skills published by this user." }),
      isLoadingPublished ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-indicator", children: "Loading published skills…" }) }) : published.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", style: {
        marginBottom: 18
      }, children: published.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillCard, { skill, badge: getSkillBadges(skill), summaryFallback: "Agent-ready skill pack.", meta: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
        "⭐ ",
        skill.stats.stars,
        " · ⤓ ",
        skill.stats.downloads,
        " · ⤒",
        " ",
        skill.stats.installsAllTime ?? 0
      ] }) }, skill._id)) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.3rem"
      }, children: "Stars" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Skills this user has starred." }),
      isLoadingSkills ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-indicator", children: "Loading stars…" }) }) : skills.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No stars yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillCard, { skill, badge: getSkillBadges(skill), summaryFallback: "Agent-ready skill pack.", meta: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
        "⭐ ",
        skill.stats.stars,
        " · ⤓ ",
        skill.stats.downloads,
        " · ⤒",
        " ",
        skill.stats.installsAllTime ?? 0
      ] }) }, skill._id)) })
    ] })
  ] });
}
function InstalledSection(props) {
  const clearTelemetry = useMutation(api.telemetry.clearMyTelemetry);
  const [showRaw, setShowRaw] = reactExports.useState(false);
  const data = props.data;
  if (data === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.3rem"
      }, children: "Installed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-indicator", children: "Loading telemetry…" }) })
    ] });
  }
  if (data === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.3rem"
      }, children: "Installed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "Sign in to view your installed skills." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
      fontSize: "1.3rem"
    }, children: "Installed" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", style: {
      maxWidth: 760
    }, children: "Private view. Only you can see your folders/roots. Everyone else only sees aggregated install counts per skill." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: props.onToggleRemoved, children: props.includeRemoved ? "Hide removed" : "Show removed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => setShowRaw((value) => !value), children: showRaw ? "Hide JSON" : "Show JSON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => {
        if (!window.confirm("Delete all telemetry data?")) return;
        void clearTelemetry();
      }, children: "Delete telemetry" })
    ] }),
    showRaw ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card telemetry-json", style: {
      marginBottom: 18
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mono", style: {
      margin: 0,
      whiteSpace: "pre-wrap"
    }, children: JSON.stringify(data, null, 2) }) }) : null,
    data.roots.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No telemetry yet. Run `clawhub sync` from the CLI." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gap: 16
    }, children: data.roots.map((root) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card telemetry-root", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "telemetry-root-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "telemetry-root-title", children: root.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "telemetry-root-meta", children: [
            "Last sync ",
            new Date(root.lastSeenAt).toLocaleString(),
            root.expiredAt ? " · stale" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag", children: [
          root.skills.length,
          " skills"
        ] })
      ] }),
      root.skills.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "No skills found in this root." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "telemetry-skill-list", children: root.skills.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "telemetry-skill-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "telemetry-skill-link", href: `/${encodeURIComponent(String(entry.skill.ownerUserId))}/${entry.skill.slug}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: entry.skill.displayName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "telemetry-skill-slug", children: [
            "/",
            entry.skill.slug
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "telemetry-skill-meta mono", children: [
          entry.lastVersion ? `v${entry.lastVersion}` : "v?",
          " ",
          entry.removedAt ? "· removed" : ""
        ] })
      ] }, `${root.rootId}:${entry.skill.slug}`)) })
    ] }, root.rootId)) })
  ] });
}
export {
  UserProfile as component
};
