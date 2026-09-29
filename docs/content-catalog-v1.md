# LOGILEE Content Catalog V1

`assets/content-catalog-v1.json` is the repository-controlled catalog of published LOGILEE content. `Berryandyoung/logilee` on `main` is authoritative. Draft databases and local Automation Foundation databases are not published-content authorities.

## Identity

Existing entries use `lc_<language>_<24 hex>` where the digest is SHA-256 of `LOGILEE_CONTENT_V1|<language>|<initial admitted path>`. The ID survives title and description changes. A later slug/path change retains the admitted ID and records the new URL; it is not re-derived. Future Julian content reserves the same shape from its canonical workflow content identity plus language before CMS handoff, then retains that ID through publication.

## Kinds and relationships

`contentKind` is one of `ARTICLE`, `EVERGREEN`, `DICTIONARY`, `TOOL`, `TEMPLATE`, or `UNRESOLVED`, matching the existing Pre-Draft special kinds without adding a broad taxonomy.

- `topicIdentity`, `regulationIdentity`, and `eventIdentity` are optional stable identifiers. They are assertions, not similarity scores.
- `counterpartContentId` is an optional reciprocal one-to-one cross-language relationship.
- `updateTargetContentId` is an optional directed relationship to the stable item that an update extends.
- `lineage.parentContentId` is an optional acyclic predecessor link. `rootContentId` identifies the lineage root. Relationship is `ORIGIN`, `UPDATE`, `FOLLOW_UP`, or `UNRESOLVED`.
- `null` means unknown and not asserted. It never means “no relationship exists.”

Relationships may be admitted only from explicit repository evidence or human-reviewed metadata. Similar titles are never evidence. Bootstrap counterpart links are admitted only when both HTML pages contain reciprocal `hreflang` alternates.

## Conservative Pre-Draft use

The catalog can be transformed to the existing JF-4 row shape: `contentId` to `id`, `canonicalUrl` and identity fields to metadata, and `contentKind` unchanged. A relationship-dependent decision must stop as `BLOCKED` when the relevant identity or target is unresolved. The adapter must not default such a case to `NEW`. `SKIP` remains appropriate for insufficient evidence or an explicitly current duplicate.

## Admission lifecycle

Candidate identity → workflow/CMS draft → successful publication → repository files admitted → catalog entry/update prepared → `node tools/content-catalog-v1.mjs test` → same repository change admitted to `main`.

Drafts, failed publications, and partial repository writes cannot enter the catalog as `PUBLISHED`. Catalog and manifest changes must pass together.
