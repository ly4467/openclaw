import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { u as useQuery, a as api, b as useMutation, g as gravatarUrl } from "./router-yCxIimTd.mjs";
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
function Settings() {
  const me = useQuery(api.users.me);
  const updateProfile = useMutation(api.users.updateProfile);
  const deleteAccount = useMutation(api.users.deleteAccount);
  const tokens = useQuery(api.tokens.listMine);
  const createToken = useMutation(api.tokens.create);
  const revokeToken = useMutation(api.tokens.revoke);
  const [displayName, setDisplayName] = reactExports.useState("");
  const [bio, setBio] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState(null);
  const [tokenLabel, setTokenLabel] = reactExports.useState("CLI token");
  const [newToken, setNewToken] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!me) return;
    setDisplayName(me.displayName ?? "");
    setBio(me.bio ?? "");
  }, [me]);
  if (!me) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "Sign in to access settings." }) });
  }
  const avatar = me.image ?? (me.email ? gravatarUrl(me.email, 160) : void 0);
  const identityName = me.displayName ?? me.name ?? me.handle ?? "Profile";
  const handle = me.handle ?? (me.email ? me.email.split("@")[0] : void 0);
  async function onSave(event) {
    event.preventDefault();
    await updateProfile({
      displayName,
      bio
    });
    setStatus("Saved.");
  }
  async function onDelete() {
    const ok = window.confirm("Soft delete your account? This cannot be undone.");
    if (!ok) return;
    await deleteAccount();
  }
  async function onCreateToken() {
    const label = tokenLabel.trim() || "CLI token";
    const result = await createToken({
      label
    });
    setNewToken(result.token);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section settings-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", children: "Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card settings-profile", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "settings-avatar", children: avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatar, alt: identityName }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: identityName[0]?.toUpperCase() ?? "U" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-profile-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "settings-name", children: identityName }),
        handle ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-handle", children: [
          "@",
          handle
        ] }) : null,
        me.email ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "settings-email", children: me.email }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "card settings-card", onSubmit: onSave, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "settings-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Display name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "settings-input", value: displayName, onChange: (event) => setDisplayName(event.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "settings-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "settings-input", rows: 5, value: bio, onChange: (event) => setBio(event.target.value), placeholder: "Tell people what you're building." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary settings-save", type: "submit", children: "Save" }),
        status ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: status }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card settings-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title danger-title", style: {
        marginTop: 0
      }, children: "API tokens" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Use these tokens for the `clawhub` CLI. Tokens are shown once on creation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Label" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "settings-input", value: tokenLabel, onChange: (event) => setTokenLabel(event.target.value), placeholder: "CLI token" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary settings-save", type: "button", onClick: () => void onCreateToken(), children: "Create token" }),
        newToken ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", style: {
          overflowX: "auto"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            marginBottom: 8
          }, children: "Copy this token now:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: newToken })
        ] }) : null
      ] }),
      (tokens ?? []).length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gap: 10,
        marginTop: 16
      }, children: (tokens ?? []).map((token) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: token.label }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
              opacity: 0.7
            }, children: [
              "(",
              token.prefix,
              "…)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            opacity: 0.7
          }, children: [
            "Created ",
            formatDate(token.createdAt),
            token.lastUsedAt ? ` · Used ${formatDate(token.lastUsedAt)}` : "",
            token.revokedAt ? ` · Revoked ${formatDate(token.revokedAt)}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", disabled: Boolean(token.revokedAt), onClick: () => void revokeToken({
          tokenId: token._id
        }), children: token.revokedAt ? "Revoked" : "Revoke" }) })
      ] }, token._id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", style: {
        marginTop: 16
      }, children: "No tokens yet." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card danger-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title danger-title", children: "Danger zone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Soft delete your account. Skills remain public." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-danger", type: "button", onClick: () => void onDelete(), children: "Delete account" })
    ] })
  ] });
}
function formatDate(value) {
  try {
    return new Date(value).toLocaleString();
  } catch {
    return String(value);
  }
}
export {
  Settings as component
};
