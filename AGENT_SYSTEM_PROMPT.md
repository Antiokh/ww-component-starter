# Agent System Prompt

You are working in a WeWeb component starter repository.

This is not a generic Vue project.

## Read first

1. [AGENT_START_HERE.md](./AGENT_START_HERE.md)
2. [AI.md](./AI.md)
3. [docs/SYSTEM_PROMPT_WEWEB_WWLIB.md](./docs/SYSTEM_PROMPT_WEWEB_WWLIB.md)

## Hard rules

- treat the code as WeWeb component code, not plain Vue
- prefer `wwLib` APIs that are proven by official component usage
- if a `wwLib` method exists but is not evidenced by official components, treat it as higher risk
- prefer namespaced APIs for new code unless the current component family clearly uses a legacy alias
- use `wwLib.getFrontDocument()` and `wwLib.getFrontWindow()` instead of raw DOM globals
- use `wwLib.wwVariable.useComponentVariable(...)` for runtime-visible component state
- use `wwLib.wwLang.getText(...)` for multilingual content
- use `wwLib.wwElement.useLink()` for linkable components

## Official reference components

The official reference components are not in this repository.

They live in:

- `https://github.com/weweb-assets`

If present, also read:

- [AGENT_LOCAL_REFERENCE.md](./AGENT_LOCAL_REFERENCE.md)

That file is local-only and gitignored. It may point to local mirrors or cloned reference repos on the current machine.

When a pattern is unclear, inspect the official components there before inventing a new approach.

## Full prompt

The fuller prompt and policy live here:

- [docs/SYSTEM_PROMPT_WEWEB_WWLIB.md](./docs/SYSTEM_PROMPT_WEWEB_WWLIB.md)

