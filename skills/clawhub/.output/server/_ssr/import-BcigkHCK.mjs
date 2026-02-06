import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { d as useNavigate } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { c as useAuthStatus, k as useAction, a as api } from "./router-yCxIimTd.mjs";
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
function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit += 1;
  }
  return `${size.toFixed(size < 10 && unit > 0 ? 1 : 0)} ${units[unit]}`;
}
function ImportGitHub() {
  const {
    isAuthenticated,
    isLoading,
    me
  } = useAuthStatus();
  const previewImport = useAction(api.githubImport.previewGitHubImport);
  const previewCandidate = useAction(api.githubImport.previewGitHubImportCandidate);
  const importSkill = useAction(api.githubImport.importGitHubSkill);
  const navigate = useNavigate();
  const [url, setUrl] = reactExports.useState("");
  const [candidates, setCandidates] = reactExports.useState([]);
  const [selectedCandidatePath, setSelectedCandidatePath] = reactExports.useState(null);
  const [preview, setPreview] = reactExports.useState(null);
  const [selected, setSelected] = reactExports.useState({});
  const [slug, setSlug] = reactExports.useState("");
  const [displayName, setDisplayName] = reactExports.useState("");
  const [version, setVersion] = reactExports.useState("0.1.0");
  const [tags, setTags] = reactExports.useState("latest");
  const [status, setStatus] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [isBusy, setIsBusy] = reactExports.useState(false);
  const selectedCount = reactExports.useMemo(() => Object.values(selected).filter(Boolean).length, [selected]);
  const selectedBytes = reactExports.useMemo(() => {
    if (!preview) return 0;
    let total = 0;
    for (const file of preview.files) {
      if (selected[file.path]) total += file.size;
    }
    return total;
  }, [preview, selected]);
  const detect = async () => {
    setError(null);
    setStatus(null);
    setPreview(null);
    setCandidates([]);
    setSelectedCandidatePath(null);
    setSelected({});
    setIsBusy(true);
    try {
      const result = await previewImport({
        url: url.trim()
      });
      const items = result.candidates ?? [];
      setCandidates(items);
      if (items.length === 1) {
        const only = items[0];
        if (only) await loadCandidate(only.path);
      } else {
        setStatus(`Found ${items.length} skills. Pick one.`);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Preview failed");
    } finally {
      setIsBusy(false);
    }
  };
  const loadCandidate = async (candidatePath) => {
    setError(null);
    setStatus(null);
    setPreview(null);
    setSelected({});
    setSelectedCandidatePath(candidatePath);
    setIsBusy(true);
    try {
      const result = await previewCandidate({
        url: url.trim(),
        candidatePath
      });
      setPreview(result);
      setSlug(result.defaults.slug);
      setDisplayName(result.defaults.displayName);
      setVersion(result.defaults.version);
      setTags((result.defaults.tags ?? ["latest"]).join(","));
      const nextSelected = {};
      for (const file of result.files) nextSelected[file.path] = file.defaultSelected;
      setSelected(nextSelected);
      setStatus("Ready to import.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Preview failed");
    } finally {
      setIsBusy(false);
    }
  };
  const applyDefaultSelection = () => {
    if (!preview) return;
    const set = new Set(preview.defaults.selectedPaths);
    const next = {};
    for (const file of preview.files) next[file.path] = set.has(file.path);
    setSelected(next);
  };
  const selectAll = () => {
    if (!preview) return;
    const next = {};
    for (const file of preview.files) next[file.path] = true;
    setSelected(next);
  };
  const clearAll = () => {
    if (!preview) return;
    const next = {};
    for (const file of preview.files) next[file.path] = false;
    setSelected(next);
  };
  const doImport = async () => {
    if (!preview) return;
    setIsBusy(true);
    setError(null);
    setStatus("Importing…");
    try {
      const selectedPaths = preview.files.map((file) => file.path).filter((path) => selected[path]);
      const tagList = tags.split(",").map((tag) => tag.trim()).filter(Boolean);
      const result = await importSkill({
        url: url.trim(),
        commit: preview.resolved.commit,
        candidatePath: preview.candidate.path,
        selectedPaths,
        slug: slug.trim(),
        displayName: displayName.trim(),
        version: version.trim(),
        tags: tagList
      });
      const nextSlug = result.slug;
      setStatus("Imported.");
      const ownerParam = me?.handle ?? (me?._id ? String(me._id) : "unknown");
      await navigate({
        to: "/$owner/$slug",
        params: {
          owner: ownerParam,
          slug: nextSlug
        }
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Import failed");
      setStatus(null);
    } finally {
      setIsBusy(false);
    }
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: isLoading ? "Loading…" : "Sign in to import and publish skills." }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section upload-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-kicker", children: "GitHub import" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "upload-title", children: "Import from GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "upload-subtitle", children: "Public repos only. Detects SKILL.md automatically." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-badge", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Public only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-badge-sub", children: "Commit pinned" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-fields", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "upload-field", htmlFor: "github-url", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-field-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "GitHub URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "upload-field-hint", children: "Repo, tree path, or blob" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "github-url", className: "upload-input", value: url, onChange: (e) => setUrl(e.target.value), placeholder: "https://github.com/owner/repo", autoCapitalize: "none", autoCorrect: "off", spellCheck: false })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-footer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", type: "button", disabled: !url.trim() || isBusy, onClick: () => void detect(), children: "Detect" }),
        status ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "upload-muted", children: status }) : null
      ] }),
      error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-validation", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-validation-item upload-error", children: error }) }) : null
    ] }),
    candidates.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        margin: 0
      }, children: "Pick a skill" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-filelist", children: candidates.map((candidate) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "upload-file", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "candidate", checked: selectedCandidatePath === candidate.path, onChange: () => void loadCandidate(candidate.path), disabled: isBusy }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono", children: candidate.path || "(repo root)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: candidate.name ? candidate.name : candidate.description ? candidate.description : "" })
      ] }, candidate.path)) })
    ] }) : null,
    preview ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-fields", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "upload-field", htmlFor: "slug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-field-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Slug" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "upload-field-hint", children: "Unique, lowercase" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "slug", className: "upload-input", value: slug, onChange: (e) => setSlug(e.target.value), autoCapitalize: "none", autoCorrect: "off", spellCheck: false })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "upload-field", htmlFor: "name", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-field-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Display name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "upload-field-hint", children: "Shown in listings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", className: "upload-input", value: displayName, onChange: (e) => setDisplayName(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "upload-field", htmlFor: "version", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-field-header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Version" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "upload-field-hint", children: "Semver" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "version", className: "upload-input", value: version, onChange: (e) => setVersion(e.target.value), autoCapitalize: "none", autoCorrect: "off", spellCheck: false })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "upload-field", htmlFor: "tags", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-field-header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tags" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "upload-field-hint", children: "Comma-separated" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "tags", className: "upload-input", value: tags, onChange: (e) => setTags(e.target.value), autoCapitalize: "none", autoCorrect: "off", spellCheck: false })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "upload-side", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-summary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-requirement ok", children: "Commit pinned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-muted", children: [
            preview.resolved.owner,
            "/",
            preview.resolved.repo,
            "@",
            preview.resolved.commit.slice(0, 7)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-muted mono", children: preview.candidate.path || "repo root" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            margin: 0
          }, children: "Files" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            gap: 10,
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", disabled: isBusy, onClick: applyDefaultSelection, children: "Select referenced" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", disabled: isBusy, onClick: selectAll, children: "Select all" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", disabled: isBusy, onClick: clearAll, children: "Clear" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-muted", children: [
          "Selected: ",
          selectedCount,
          "/",
          preview.files.length,
          " • ",
          formatBytes(selectedBytes)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "file-list", children: preview.files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "file-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: Boolean(selected[file.path]), onChange: () => setSelected((prev) => ({
            ...prev,
            [file.path]: !prev[file.path]
          })), disabled: isBusy }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono file-path", children: file.path }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "file-meta", children: formatBytes(file.size) })
        ] }, file.path)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", type: "button", disabled: isBusy || !slug.trim() || !displayName.trim() || !version.trim() || selectedCount === 0, onClick: () => void doImport(), children: "Import + publish" }) })
      ] })
    ] }) : null
  ] });
}
export {
  ImportGitHub as component
};
