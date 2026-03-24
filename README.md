# ww-component-starter

Starter repository for a WeWeb custom component.

What is included:

- a minimal dummy component scaffold
- a full local documentation pack in [docs](./docs)
- agent-oriented prompts and `wwLib` references
- an explicit agent entrypoint in [AGENT_START_HERE.md](./AGENT_START_HERE.md)
- a root-level prompt in [AGENT_SYSTEM_PROMPT.md](./AGENT_SYSTEM_PROMPT.md)

## Where the official reference components live

This repository contains a starter and local documentation.

The official reference components are not stored here.

They live in the official WeWeb assets organization:

- `https://github.com/weweb-assets`

Use that repository when you need to inspect real production patterns from official WeWeb components.

## Repository layout

- [ww-config.js](./ww-config.js): component schema and editor metadata
- [src/wwElement.vue](./src/wwElement.vue): runtime component implementation
- [AI.md](./AI.md): short instructions for an AI agent working in this repo
- [AGENT_START_HERE.md](./AGENT_START_HERE.md): the first file an AI agent should open
- [AGENT_SYSTEM_PROMPT.md](./AGENT_SYSTEM_PROMPT.md): short system prompt for an AI agent
- [docs/README_AGENT_PACK.md](./docs/README_AGENT_PACK.md): entrypoint into the documentation set

## Read first

For a human or AI agent new to WeWeb:

1. [AGENT_START_HERE.md](./AGENT_START_HERE.md)
2. [AGENT_SYSTEM_PROMPT.md](./AGENT_SYSTEM_PROMPT.md)
3. [docs/README_AGENT_PACK.md](./docs/README_AGENT_PACK.md)
4. [docs/WEWEB_COMPONENTS_MASTER_GUIDE.md](./docs/WEWEB_COMPONENTS_MASTER_GUIDE.md)
5. [docs/WWLIB_API_MASTER_GUIDE.md](./docs/WWLIB_API_MASTER_GUIDE.md)
6. [docs/WWLIB_OFFICIAL_USAGE_INDEX.md](./docs/WWLIB_OFFICIAL_USAGE_INDEX.md)

When the docs mention official reference components such as `ww-input-select`, `ww-calendar`, `ww-chat`, or `ww-datagrid-ag`, open them in:

- `https://github.com/weweb-assets`

## Videos

| Video | Why watch it |
| --- | --- |
| [![Idea to Custom WeWeb Component with AI (Using Cursor)](https://img.youtube.com/vi/ktfzzYCT6fk/hqdefault.jpg)](https://www.youtube.com/watch?v=ktfzzYCT6fk)<br>[Idea to Custom WeWeb Component with AI (Using Cursor)](https://www.youtube.com/watch?v=ktfzzYCT6fk) | Good starting walkthrough for turning an idea into a custom WeWeb component with AI assistance. |
| [![Using Cursor To Build Custom Coded Components](https://img.youtube.com/vi/1A8wdH5Sb0o/hqdefault.jpg)](https://www.youtube.com/watch?v=1A8wdH5Sb0o)<br>[Using Cursor To Build Custom Coded Components](https://www.youtube.com/watch?v=1A8wdH5Sb0o) | Useful if you want a Cursor-oriented workflow for building coded components faster. |
| [![Using Claude Code To Build Custom Coded Components](https://img.youtube.com/vi/s9HwpkSKONM/hqdefault.jpg)](https://www.youtube.com/watch?v=s9HwpkSKONM)<br>[Using Claude Code To Build Custom Coded Components](https://www.youtube.com/watch?v=s9HwpkSKONM) | Shows the same general component workflow through Claude Code rather than Cursor. |
| [![Develop custom components for WeWeb](https://img.youtube.com/vi/fkH56RGEUTc/hqdefault.jpg)](https://www.youtube.com/watch?v=fkH56RGEUTc)<br>[Develop custom components for WeWeb](https://www.youtube.com/watch?v=fkH56RGEUTc) | A more direct WeWeb-focused component development walkthrough. |
| [![How to Develop a Custom VueJS Component for WeWeb](https://img.youtube.com/vi/erhzQbhBvJI/hqdefault.jpg)](https://www.youtube.com/watch?v=erhzQbhBvJI)<br>[How to Develop a Custom VueJS Component for WeWeb](https://www.youtube.com/watch?v=erhzQbhBvJI) | Useful when you want the Vue-centric framing of how a custom WeWeb component is built. |

## Official WeWeb Docs

Official developer docs:

- [WeWeb Developer Docs](https://developer.weweb.io/)
- [Introduction](https://developer.weweb.io/)
- [Development process](https://developer.weweb.io/development-process.html)
- [Component anatomy](https://developer.weweb.io/component-anatomy.html)
- [Custom editor interface](https://developer.weweb.io/custom-editor-interface.html)
- [Use element state](https://developer.weweb.io/use-element-state.html)

Relevant official references:

- [Guide](https://developer.weweb.io/)
- [API](https://developer.weweb.io/api/)
- [Community](https://community.weweb.io/)
- [User docs](https://docs.weweb.io/)

## Starter intent

This repo is intentionally minimal.

It gives you:

- a safe starting shape for a component
- WeWeb-aware patterns like `wwElement.useLink()` and `wwLang.getText()`
- local docs for both component architecture and `wwLib`

It does not try to guess your final component behavior.


