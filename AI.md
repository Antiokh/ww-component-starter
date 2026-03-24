# AI Instructions

Use the local docs before changing the starter component.

First open:

1. [AGENT_START_HERE.md](./AGENT_START_HERE.md)
2. [AGENT_SYSTEM_PROMPT.md](./AGENT_SYSTEM_PROMPT.md)

Official reference components are not inside this repository.

They are stored in:

- `https://github.com/weweb-assets`

When the docs mention reference components, inspect them there.

Required reading order:

1. [AGENT_START_HERE.md](./AGENT_START_HERE.md)
2. [AGENT_SYSTEM_PROMPT.md](./AGENT_SYSTEM_PROMPT.md)
3. [docs/README_AGENT_PACK.md](./docs/README_AGENT_PACK.md)
4. [docs/WEWEB_COMPONENTS_MASTER_GUIDE.md](./docs/WEWEB_COMPONENTS_MASTER_GUIDE.md)
5. [docs/WWLIB_API_MASTER_GUIDE.md](./docs/WWLIB_API_MASTER_GUIDE.md)
6. [docs/WWLIB_OFFICIAL_USAGE_INDEX.md](./docs/WWLIB_OFFICIAL_USAGE_INDEX.md)
7. [docs/SYSTEM_PROMPT_WEWEB_WWLIB.md](./docs/SYSTEM_PROMPT_WEWEB_WWLIB.md)

Rules:

- treat this as a WeWeb component repo, not generic Vue
- prefer `wwLib` APIs proven by official component usage
- prefer namespaced APIs for new code unless the existing component family uses legacy aliases
- use `wwLib.getFrontDocument()` and `wwLib.getFrontWindow()` instead of raw global DOM objects
- use `wwLib.wwVariable.useComponentVariable(...)` when runtime-visible component state is needed
- use `wwLib.wwLang.getText(...)` for multilingual content
- use `wwLib.wwElement.useLink()` for linkable components

