# Chain Brief

> Crypto made clear — from first principles to the latest signals.

**Domain**: [chainbrief.com](https://chainbrief.com)

## Setup

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- npm

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at <http://localhost:4321>

### Build

```bash
npm run build
```

Static output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

## Deployment

This site deploys automatically via [Railway](https://railway.app) on every push to `main`.

**Live URL**: [https://chain-brief-site-production.up.railway.app](https://chain-brief-site-production.up.railway.app)

**Target domain**: [chainbrief.com](https://chainbrief.com)

The Railway deployment uses the `Dockerfile` at the repo root, which builds the Astro site and serves it with nginx. The `railway.json` configuration file defines the build and start settings.

To deploy: push to `main`. Railway will pick up the change and redeploy automatically.

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Railway](https://railway.app) — hosting and CI/CD
- [nginx](https://nginx.org) — static file serving (via Docker)

## Content

Articles live in `src/content/articles/` as Markdown files with frontmatter. Only articles with `status: live` appear on the site.

```
src/content/articles/
  what-is-a-blockchain.md
  what-is-a-crypto-wallet.md
  what-is-defi.md
  ethereum-roadmap-2026.md
  why-bitcoin-hit-100k.md
  week-in-crypto-march-17-21-2026.md
```

### Content schema

```typescript
title: string
description: string
category: 'Market Brief' | 'Deep Dive' | 'Chain 101' | 'Tutorial' | 'Analysis'
publishedDate: string  // YYYY-MM-DD
status: 'draft' | 'live'
author?: string
```

