# Local Reference Setup Example

This file is public-safe and contains no machine-specific paths.

If you want local-only reference material for an AI agent:

1. create `AGENT_LOCAL_REFERENCE.md` in the repo root
2. place your machine-specific paths there
3. optionally clone official WeWeb component repos into `reference-components/`

Official source for the reference repos:

- `https://github.com/weweb-assets`

You can clone the repos you care about from there into:

- `./reference-components/`

Suggested local structure:

```text
ww-component-starter/
  reference-components/
    ww-input-select/
    ww-calendar/
    ww-chat/
    ...
```

Suggested local-only guidance:

- where your reference component mirror lives
- whether `reference-components/` contains cloned WeWeb repos
- which component families to inspect first

Suggested `AGENT_LOCAL_REFERENCE.md` content:

```md
# Local Agent Reference

Primary local reference mirror:
- <your-local-path-or-mirror>

Optional cloned repos folder:
- ./reference-components/

Official upstream:
- https://github.com/weweb-assets
```

Notes:

- `AGENT_LOCAL_REFERENCE.md` is gitignored
- `reference-components/` is gitignored
- this keeps local paths and local mirrors out of the public repository
