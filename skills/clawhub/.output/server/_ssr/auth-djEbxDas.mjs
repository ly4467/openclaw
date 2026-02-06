import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { c as useAuthStatus, q as useAuthActions, b as useMutation, a as api, r as Route$1 } from "./router-yCxIimTd.mjs";
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
function CliAuth() {
  const {
    isAuthenticated,
    me
  } = useAuthStatus();
  const {
    signIn
  } = useAuthActions();
  const createToken = useMutation(api.tokens.create);
  const search = Route$1.useSearch();
  const [status, setStatus] = reactExports.useState("Preparing…");
  const [token, setToken] = reactExports.useState(null);
  const hasRun = reactExports.useRef(false);
  const redirectUri = search.redirect_uri ?? "";
  const label = (decodeLabel(search.label_b64) ?? search.label ?? "CLI token").trim() || "CLI token";
  const state = typeof search.state === "string" ? search.state.trim() : "";
  const safeRedirect = reactExports.useMemo(() => isAllowedRedirectUri(redirectUri), [redirectUri]);
  reactExports.useEffect(() => {
    if (hasRun.current) return;
    if (!safeRedirect) return;
    if (!state) return;
    return;
  }, [createToken, isAuthenticated, label, me, redirectUri, safeRedirect, state]);
  if (!safeRedirect) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", style: {
        marginTop: 0
      }, children: "CLI login" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Invalid redirect URL." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", style: {
        marginBottom: 0
      }, children: "Run the CLI again to start a fresh login." })
    ] }) });
  }
  if (!state) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", style: {
        marginTop: 0
      }, children: "CLI login" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Missing state." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", style: {
        marginBottom: 0
      }, children: "Run the CLI again to start a fresh login." })
    ] }) });
  }
  {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "Missing VITE_CONVEX_SITE_URL configuration." }) });
  }
}
function isAllowedRedirectUri(value) {
  if (!value) return false;
  let url;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  if (url.protocol !== "http:") return false;
  const host = url.hostname.toLowerCase();
  return host === "127.0.0.1" || host === "localhost" || host === "::1" || host === "[::1]";
}
function decodeLabel(value) {
  if (!value) return null;
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    const decoded = new TextDecoder().decode(bytes);
    const label = decoded.trim();
    if (!label) return null;
    return label.slice(0, 80);
  } catch {
    return null;
  }
}
export {
  CliAuth as component
};
