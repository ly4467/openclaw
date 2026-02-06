import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { c as useAuthStatus, R as Route$a, i as isModerator, d as isAdmin, u as useQuery, a as api, b as useMutation, e as isSkillHighlighted, f as isSkillOfficial, h as isSkillDeprecated, j as getSkillBadges } from "./router-yCxIimTd.mjs";
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
function resolveOwnerParam(handle, ownerId) {
  return handle?.trim() || (ownerId ? String(ownerId) : "unknown");
}
function Management() {
  const {
    me
  } = useAuthStatus();
  const search = Route$a.useSearch();
  const staff = isModerator(me);
  const admin = isAdmin(me);
  const selectedSlug = search.skill?.trim();
  const selectedSkill = useQuery(api.skills.getBySlugForStaff, staff && selectedSlug ? {
    slug: selectedSlug
  } : "skip");
  const recentVersions = useQuery(api.skills.listRecentVersions, staff ? {
    limit: 20
  } : "skip");
  const reportedSkills = useQuery(api.skills.listReportedSkills, staff ? {
    limit: 25
  } : "skip");
  const duplicateCandidates = useQuery(api.skills.listDuplicateCandidates, staff ? {
    limit: 20
  } : "skip");
  const setRole = useMutation(api.users.setRole);
  const banUser = useMutation(api.users.banUser);
  const setBatch = useMutation(api.skills.setBatch);
  const setSoftDeleted = useMutation(api.skills.setSoftDeleted);
  const hardDelete = useMutation(api.skills.hardDelete);
  const changeOwner = useMutation(api.skills.changeOwner);
  const setDuplicate = useMutation(api.skills.setDuplicate);
  const setOfficialBadge = useMutation(api.skills.setOfficialBadge);
  const setDeprecatedBadge = useMutation(api.skills.setDeprecatedBadge);
  const [selectedDuplicate, setSelectedDuplicate] = reactExports.useState("");
  const [selectedOwner, setSelectedOwner] = reactExports.useState("");
  const [reportSearch, setReportSearch] = reactExports.useState("");
  const [reportSearchDebounced, setReportSearchDebounced] = reactExports.useState("");
  const [userSearch, setUserSearch] = reactExports.useState("");
  const [userSearchDebounced, setUserSearchDebounced] = reactExports.useState("");
  const userQuery = userSearchDebounced.trim();
  const userResult = useQuery(api.users.list, admin ? {
    limit: 200,
    search: userQuery || void 0
  } : "skip");
  const selectedSkillId = selectedSkill?.skill?._id ?? null;
  const selectedOwnerUserId = selectedSkill?.skill?.ownerUserId ?? null;
  const selectedCanonicalSlug = selectedSkill?.canonical?.skill?.slug ?? "";
  reactExports.useEffect(() => {
    if (!selectedSkillId || !selectedOwnerUserId) return;
    setSelectedDuplicate(selectedCanonicalSlug);
    setSelectedOwner(String(selectedOwnerUserId));
  }, [selectedCanonicalSlug, selectedOwnerUserId, selectedSkillId]);
  reactExports.useEffect(() => {
    const handle = setTimeout(() => setReportSearchDebounced(reportSearch), 250);
    return () => clearTimeout(handle);
  }, [reportSearch]);
  reactExports.useEffect(() => {
    const handle = setTimeout(() => setUserSearchDebounced(userSearch), 250);
    return () => clearTimeout(handle);
  }, [userSearch]);
  if (!staff) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "Management only." }) });
  }
  if (!recentVersions || !reportedSkills || !duplicateCandidates) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "Loading management console…" }) });
  }
  const reportQuery = reportSearchDebounced.trim().toLowerCase();
  const filteredReportedSkills = reportQuery ? reportedSkills.filter((entry) => {
    const reportReasons = (entry.reports ?? []).map((report) => report.reason).join(" ");
    const reporterHandles = (entry.reports ?? []).map((report) => report.reporterHandle).filter(Boolean).join(" ");
    const haystack = [entry.skill.displayName, entry.skill.slug, entry.owner?.handle, entry.owner?.name, reportReasons, reporterHandles].filter(Boolean).join(" ").toLowerCase();
    return haystack.includes(reportQuery);
  }) : reportedSkills;
  const reportCountLabel = filteredReportedSkills.length === 0 && reportedSkills.length > 0 ? "No matching reports." : "No reports yet.";
  const reportSummary = `Showing ${filteredReportedSkills.length} of ${reportedSkills.length}`;
  const filteredUsers = userResult?.items ?? [];
  const userTotal = userResult?.total ?? 0;
  const userSummary = userResult ? `Showing ${filteredUsers.length} of ${userTotal}` : "Loading users…";
  const userEmptyLabel = userResult ? filteredUsers.length === 0 ? userQuery ? "No matching users." : "No users yet." : "" : "Loading users…";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", children: "Management console" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", children: "Moderation, curation, and ownership tools." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.2rem",
        margin: 0
      }, children: "Reported skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-controls", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-control management-search", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono", children: "Filter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "search", placeholder: "Search reported skills", value: reportSearch, onChange: (event) => setReportSearch(event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-count", children: reportSummary })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-list", children: filteredReportedSkills.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: reportCountLabel }) : filteredReportedSkills.map((entry) => {
        const {
          skill,
          latestVersion,
          owner,
          reports
        } = entry;
        const ownerParam = resolveOwnerParam(owner?.handle ?? null, owner?._id ?? skill.ownerUserId);
        const reportEntries = reports ?? [];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item-main", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$owner/$slug", params: {
              owner: ownerParam,
              slug: skill.slug
            }, children: skill.displayName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-subtitle", style: {
              margin: 0
            }, children: [
              "@",
              owner?.handle ?? owner?.name ?? "user",
              " · v",
              latestVersion?.version ?? "—",
              " ·",
              skill.reportCount ?? 0,
              " report",
              (skill.reportCount ?? 0) === 1 ? "" : "s",
              skill.lastReportedAt ? ` · last ${formatTimestamp(skill.lastReportedAt)}` : ""
            ] }),
            reportEntries.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-sublist", children: reportEntries.map((report) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-report-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "management-report-meta", children: [
                formatTimestamp(report.createdAt),
                report.reporterHandle ? ` · @${report.reporterHandle}` : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: report.reason })
            ] }, `${report.reporterId}-${report.createdAt}`)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-subtitle", style: {
              margin: 0
            }, children: "No report reasons yet." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void setSoftDeleted({
              skillId: skill._id,
              deleted: !skill.softDeletedAt
            }), children: skill.softDeletedAt ? "Restore" : "Hide" }),
            admin ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => {
              if (!window.confirm(`Hard delete ${skill.displayName}?`)) return;
              void hardDelete({
                skillId: skill._id
              });
            }, children: "Hard delete" }) : null
          ] })
        ] }, skill._id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
      marginTop: 20
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.2rem",
        margin: 0
      }, children: "Skill tools" }),
      selectedSlug ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-subtitle", style: {
        marginTop: 8
      }, children: [
        'Managing "',
        selectedSlug,
        '" ·',
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/management", search: {
          skill: void 0
        }, children: "Clear selection" })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-list", children: !selectedSlug ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Use the Manage button on a skill to open tooling here." }) : selectedSkill === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Loading skill…" }) : !selectedSkill?.skill ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
        'No skill found for "',
        selectedSlug,
        '".'
      ] }) : (() => {
        const {
          skill,
          latestVersion,
          owner,
          canonical
        } = selectedSkill;
        const ownerParam = resolveOwnerParam(owner?.handle ?? null, owner?._id ?? skill.ownerUserId);
        const moderationStatus = skill.moderationStatus ?? (skill.softDeletedAt ? "hidden" : "active");
        const isHighlighted = isSkillHighlighted(skill);
        const isOfficial = isSkillOfficial(skill);
        const isDeprecated = isSkillDeprecated(skill);
        const badges = getSkillBadges(skill);
        const ownerUserId = skill.ownerUserId ?? selectedOwnerUserId;
        const ownerHandle = owner?.handle ?? owner?.name ?? "user";
        const isOwnerAdmin = owner?.role === "admin";
        const canBanOwner = staff && ownerUserId && ownerUserId !== me?._id && (admin || !isOwnerAdmin);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item-main", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$owner/$slug", params: {
              owner: ownerParam,
              slug: skill.slug
            }, children: skill.displayName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-subtitle", style: {
              margin: 0
            }, children: [
              "@",
              owner?.handle ?? owner?.name ?? "user",
              " · v",
              latestVersion?.version ?? "—",
              " · updated ",
              formatTimestamp(skill.updatedAt),
              " · ",
              moderationStatus,
              badges.length ? ` · ${badges.join(", ").toLowerCase()}` : ""
            ] }),
            skill.moderationFlags?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-tags", children: skill.moderationFlags.map((flag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: flag }, flag)) }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-controls", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "management-control", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono", children: "duplicate of" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "search-input", value: selectedDuplicate, onChange: (event) => setSelectedDuplicate(event.target.value), placeholder: canonical?.skill?.slug ?? "canonical slug" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void setDuplicate({
                skillId: skill._id,
                canonicalSlug: selectedDuplicate.trim() || void 0
              }), children: "Set duplicate" }),
              admin ? /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "management-control", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono", children: "owner" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedOwner, onChange: (event) => setSelectedOwner(event.target.value), children: filteredUsers.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: user._id, children: [
                  "@",
                  user.handle ?? user.name ?? "user"
                ] }, user._id)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void changeOwner({
                  skillId: skill._id,
                  ownerUserId: selectedOwner
                }), children: "Change owner" })
              ] }) : null
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn", to: "/$owner/$slug", params: {
              owner: ownerParam,
              slug: skill.slug
            }, children: "View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void setSoftDeleted({
              skillId: skill._id,
              deleted: !skill.softDeletedAt
            }), children: skill.softDeletedAt ? "Restore" : "Hide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void setBatch({
              skillId: skill._id,
              batch: isHighlighted ? void 0 : "highlighted"
            }), children: isHighlighted ? "Unhighlight" : "Highlight" }),
            admin ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => {
              if (!window.confirm(`Hard delete ${skill.displayName}?`)) return;
              void hardDelete({
                skillId: skill._id
              });
            }, children: "Hard delete" }) : null,
            staff ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", disabled: !canBanOwner, onClick: () => {
              if (!ownerUserId || ownerUserId === me?._id) return;
              if (!window.confirm(`Ban @${ownerHandle} and delete their skills?`)) {
                return;
              }
              void banUser({
                userId: ownerUserId
              });
            }, children: "Ban user" }) : null,
            admin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void setOfficialBadge({
                skillId: skill._id,
                official: !isOfficial
              }), children: isOfficial ? "Remove official" : "Mark official" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void setDeprecatedBadge({
                skillId: skill._id,
                deprecated: !isDeprecated
              }), children: isDeprecated ? "Remove deprecated" : "Mark deprecated" })
            ] }) : null
          ] })
        ] }, skill._id);
      })() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
      marginTop: 20
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.2rem",
        margin: 0
      }, children: "Duplicate candidates" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-list", children: duplicateCandidates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "No duplicate candidates." }) : duplicateCandidates.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item-main", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$owner/$slug", params: {
            owner: resolveOwnerParam(entry.owner?.handle ?? null, entry.owner?._id ?? entry.skill.ownerUserId),
            slug: entry.skill.slug
          }, children: entry.skill.displayName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-subtitle", style: {
            margin: 0
          }, children: [
            "@",
            entry.owner?.handle ?? entry.owner?.name ?? "user",
            " · v",
            entry.latestVersion?.version ?? "—",
            " · fingerprint",
            " ",
            entry.fingerprint?.slice(0, 8)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-sublist", children: entry.matches.map((match) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-subitem", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: match.skill.displayName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-subtitle", style: {
                margin: 0
              }, children: [
                "@",
                match.owner?.handle ?? match.owner?.name ?? "user",
                " ·",
                " ",
                match.skill.slug
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-actions", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn", to: "/$owner/$slug", params: {
                owner: resolveOwnerParam(match.owner?.handle ?? null, match.owner?._id ?? match.skill.ownerUserId),
                slug: match.skill.slug
              }, children: "View" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => void setDuplicate({
                skillId: entry.skill._id,
                canonicalSlug: match.skill.slug
              }), children: "Mark duplicate" })
            ] })
          ] }, match.skill._id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn", to: "/$owner/$slug", params: {
          owner: resolveOwnerParam(entry.owner?.handle ?? null, entry.owner?._id ?? entry.skill.ownerUserId),
          slug: entry.skill.slug
        }, children: "View" }) })
      ] }, entry.skill._id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
      marginTop: 20
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.2rem",
        margin: 0
      }, children: "Recent pushes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-list", children: recentVersions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "No recent versions." }) : recentVersions.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item-main", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: entry.skill?.displayName ?? "Unknown skill" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-subtitle", style: {
            margin: 0
          }, children: [
            "v",
            entry.version.version,
            " · @",
            entry.owner?.handle ?? entry.owner?.name ?? "user"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-actions", children: entry.skill ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn", to: "/$owner/$slug", params: {
          owner: resolveOwnerParam(entry.owner?.handle ?? null, entry.owner?._id ?? entry.skill.ownerUserId),
          slug: entry.skill.slug
        }, children: "View" }) : null })
      ] }, entry.version._id)) })
    ] }),
    admin ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
      marginTop: 20
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: {
        fontSize: "1.2rem",
        margin: 0
      }, children: "Users" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-controls", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-control management-search", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono", children: "Filter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "search", placeholder: "Search users", value: userSearch, onChange: (event) => setUserSearch(event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-count", children: userSummary })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-list", children: filteredUsers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: userEmptyLabel }) : filteredUsers.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "management-item-main", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mono", children: [
          "@",
          user.handle ?? user.name ?? "user"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "management-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: user.role ?? "user", onChange: (event) => {
            const value = event.target.value;
            if (value === "admin" || value === "moderator" || value === "user") {
              void setRole({
                userId: user._id,
                role: value
              });
            }
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "user", children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "moderator", children: "Moderator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "admin", children: "Admin" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", disabled: user._id === me?._id, onClick: () => {
            if (user._id === me?._id) return;
            if (!window.confirm(`Ban @${user.handle ?? user.name ?? "user"} and delete their skills?`)) {
              return;
            }
            void banUser({
              userId: user._id
            });
          }, children: "Ban user" })
        ] })
      ] }, user._id)) })
    ] }) : null
  ] });
}
function formatTimestamp(value) {
  return new Date(value).toLocaleString();
}
export {
  Management as component
};
