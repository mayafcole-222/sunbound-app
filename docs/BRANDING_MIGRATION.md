# Sunbound branding migration

Public-facing UI, metadata, product documentation, demo instructions, and package metadata now use Sunbound. Former feature branding is Daily Brief and Departure Check. Ordinary uses of “ready” as a state or verb remain.

## Repository rename

The existing repository has been renamed to **sunbound-app**, preserving its repository ID and history.

```bash
git remote set-url origin https://github.com/mayafcole-222/sunbound-app.git
git remote -v
```

Review deployment/source-repository bindings before changing them; `.openai/hosting.json` identifies an existing Sites deployment and must retain its project ID.

## Intentionally preserved internal contracts

- `NEXT_PUBLIC_READY_RUNTIME_MODE`, `NEXT_PUBLIC_READY_CALENDAR_MODE`, and `NEXT_PUBLIC_READY_WEATHER_MODE`: existing local/hosted configuration depends on these names.
- `ReadyApp`, `ReadyEvent`, `ReadyContext`, provider types, helpers, and `ready-*` filenames: these are code contracts, not visible branding.
- `ready-*` browser storage keys, cookies, custom events, and CSS classes: changing them could discard saved preferences or break integration/session behavior.
- Routes and API payload keys: unchanged to preserve clients and integrations.
- The existing public demo hostname: retained because it is a working deployment; changing it is a separate hosting migration.

These are compatibility debt. A later internal rename should include a storage/cookie migration, environment updates on every deployment, full tests, and integration validation.

## Portfolio handoff

At the Sunbound hero, add **DESIGNED + BUILT**, and these links with new-tab behavior using the existing portfolio link style:

- **View Live Prototype ↗** → https://ready-palantir-demo.mayafcole.chatgpt.site/?demo=1&reset=1
- **View on GitHub ↗** → https://github.com/mayafcole-222/sunbound-app

Add **GITHUB** → https://github.com/mayafcole-222 beside the existing footer contact links. Preserve existing navigation, spacing, and responsive breakpoints. Do not publish the Framer portfolio without the owner's request.
