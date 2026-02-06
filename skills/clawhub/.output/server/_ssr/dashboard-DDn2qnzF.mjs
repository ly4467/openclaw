import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { u as useQuery, a as api } from "./router-yCxIimTd.mjs";
import { P as Plus, c as Package, U as Upload, C as Clock } from "../_libs/lucide-react.mjs";
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
function Dashboard() {
  const me = useQuery(api.users.me);
  const mySkills = useQuery(api.skills.list, me?._id ? {
    ownerUserId: me._id,
    limit: 100
  } : "skip");
  if (!me) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "Sign in to access your dashboard." }) });
  }
  const skills = mySkills ?? [];
  const ownerHandle = me.handle ?? me.name ?? me.displayName ?? me._id;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", style: {
        margin: 0
      }, children: "My Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/upload", search: {
        updateSlug: void 0
      }, className: "btn btn-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "aria-hidden": "true" }),
        "Upload New Skill"
      ] })
    ] }),
    skills.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card dashboard-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "dashboard-empty-icon", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "No skills yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Upload your first skill to share it with the community." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/upload", search: {
        updateSlug: void 0
      }, className: "btn btn-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4", "aria-hidden": "true" }),
        "Upload a Skill"
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dashboard-grid", children: skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillCard, { skill, ownerHandle }, skill._id)) })
  ] });
}
function SkillCard({
  skill,
  ownerHandle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-skill-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-skill-info", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$owner/$slug", params: {
          owner: ownerHandle ?? "unknown",
          slug: skill.slug
        }, className: "dashboard-skill-name", children: skill.displayName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dashboard-skill-slug", children: [
          "/",
          skill.slug
        ] }),
        skill.pendingReview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag tag-pending", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "aria-hidden": "true" }),
          "Scanning"
        ] }) : null
      ] }),
      skill.summary && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dashboard-skill-description", children: skill.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-skill-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "⤓ ",
          skill.stats.downloads
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "★ ",
          skill.stats.stars
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          skill.stats.versions,
          " v"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-skill-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/upload", search: {
        updateSlug: skill.slug
      }, className: "btn btn-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3 w-3", "aria-hidden": "true" }),
        "New Version"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$owner/$slug", params: {
        owner: ownerHandle ?? "unknown",
        slug: skill.slug
      }, className: "btn btn-ghost btn-sm", children: "View" })
    ] })
  ] });
}
export {
  Dashboard as component
};
