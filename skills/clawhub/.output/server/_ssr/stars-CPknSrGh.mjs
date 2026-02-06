import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { u as useQuery, a as api, b as useMutation } from "./router-yCxIimTd.mjs";
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
function Stars() {
  const me = useQuery(api.users.me);
  const skills = useQuery(api.stars.listByUser, me ? {
    userId: me._id,
    limit: 50
  } : "skip") ?? [];
  const toggleStar = useMutation(api.stars.toggle);
  if (!me) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "Sign in to see your highlights." }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", children: "Your highlights" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Skills you’ve starred for quick access." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: skills.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No stars yet." }) : skills.map((skill) => {
      const owner = encodeURIComponent(String(skill.ownerUserId));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card skill-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$owner/$slug", params: {
          owner,
          slug: skill.slug
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "skill-card-title", children: skill.displayName }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skill-card-footer skill-card-footer-inline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "stat", children: [
            "⭐ ",
            skill.stats.stars
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "star-toggle is-active", type: "button", onClick: async () => {
            try {
              await toggleStar({
                skillId: skill._id
              });
            } catch (error) {
              console.error("Failed to unstar skill:", error);
              window.alert("Unable to unstar this skill. Please try again.");
            }
          }, "aria-label": `Unstar ${skill.displayName}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "★" }) })
        ] })
      ] }, skill._id);
    }) })
  ] });
}
export {
  Stars as component
};
