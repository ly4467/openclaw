import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
function SoulCard({ soul, summaryFallback, meta }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/souls/$slug", params: { slug: soul.slug }, className: "card skill-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "skill-card-title", children: soul.displayName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "skill-card-summary", children: soul.summary ?? summaryFallback }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skill-card-footer", children: meta })
  ] });
}
export {
  SoulCard as S
};
