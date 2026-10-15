# Anish Manchanda — Portfolio

My portfolio, simulating macOS: log in, open Bear for my profile and projects, poke around the Terminal (`help`, `ls`, `cat about/bio.txt`), Safari for my links, and Launchpad for live projects.

Built on [playground-macos](https://github.com/Renovamen/playground-macos) by [Renovamen](https://github.com/Renovamen) (MIT, see `LICENSE`), with React, Zustand and UnoCSS. Self-hosted on my home server.

## Where the content lives

| What | File |
|---|---|
| Name, avatar | `src/configs/user.ts` |
| Bear notes (profile + projects) | `src/configs/bear.tsx` → `public/markdown/**/*.md` |
| Terminal files | `src/configs/terminal.tsx` |
| Safari links | `src/configs/websites.ts` |
| Launchpad | `src/configs/launchpad.ts` |
| Control Center music (generated brown noise) | `src/configs/music.ts`, `public/music/` |
| Résumé | `public/resume.pdf` |

## Develop

```bash
pnpm install
pnpm dev        # dev server
pnpm build      # static site in dist/
pnpm serve      # preview the build
```

## Deploy

`pnpm build` produces a static site in `dist/`. Serve that folder with any web server (Caddy, Nginx).
