# Your Name — Personal Portfolio & Content Platform

Built with [Astro 5](https://astro.build), hosted free on [Netlify](https://netlify.com).

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open `http://localhost:4321` in your browser.

### 3. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── pages/
│   │   ├── index.astro          ← Homepage (dashboard)
│   │   ├── projects/
│   │   │   ├── index.astro      ← All projects
│   │   │   └── [slug].astro     ← Individual project page
│   │   ├── publications/
│   │   │   ├── index.astro      ← All blog posts
│   │   │   └── [slug].astro     ← Individual post page
│   │   ├── content.astro        ← YouTube + Instagram page
│   │   ├── about.astro          ← About page
│   │   └── contact.astro        ← Contact page
│   ├── content/
│   │   ├── blog/                ← Add .md files here for new posts
│   │   └── projects/            ← Add .md files here for new projects
│   ├── layouts/
│   │   └── Base.astro           ← Nav + footer wrapper
│   └── styles/
│       └── global.css           ← All styles
├── public/                      ← Static assets (images, resume PDF)
├── astro.config.mjs
├── src/content.config.ts        ← Content schema definitions
└── netlify.toml
```

---

## ✍️ Adding Content

### New Blog Post

Create a file in `src/content/blog/my-post-title.md`:

```markdown
---
title: "Your Post Title"
description: "One sentence description for previews and SEO."
pubDate: 2025-05-01
tags: ["Data", "AI", "Tutorial"]
draft: false
---

Your post content here in Markdown...
```

The URL will be: `yourdomain.com/publications/my-post-title`

### New Project

Create a file in `src/content/projects/my-project.md`:

```markdown
---
title: "Project Title"
description: "One sentence description."
category: "AI / Automation"   # Options: Data Analysis | Data Visualization | AI / Automation | Software
tools: ["Python", "SQL", "Tableau"]
featured: true                 # Shows on homepage
order: 4                       # Lower = appears first
links:
  github: "https://github.com/..."
  tableau: "https://public.tableau.com/..."
  demo: "https://..."
  live: "https://..."
---

## Problem

...

## Solution

...

## Impact

...
```

---

## 🔧 Customization Checklist

Search for `Your Name` / `yourdomain.com` / `yourhandle` / `yourusername` and replace throughout:

| File | What to update |
|------|---------------|
| `src/layouts/Base.astro` | Name in nav logo + footer |
| `src/pages/index.astro` | Hero intro text, YouTube/Instagram links |
| `src/pages/about.astro` | Bio, skills, all links |
| `src/pages/contact.astro` | Email, LinkedIn, GitHub |
| `src/pages/content.astro` | YouTube video IDs, channel/handle links |
| `astro.config.mjs` | Your domain |

---

## 🌐 Deploy Free on Netlify

### One-time setup

1. Push this project to a GitHub repo
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo
4. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy**

### Connect your custom domain

1. In Netlify: **Site settings** → **Domain management** → **Add custom domain**
2. Enter your domain and follow the DNS instructions
3. Netlify provides a free SSL certificate automatically

### Auto-deploy on new content

Every time you push a new `.md` file to GitHub, Netlify rebuilds and deploys in ~30 seconds. No manual steps.

---

## 🔗 Integrations

### GitHub
Link projects directly in their `.md` file via the `links.github` field.

### Tableau
Embed dashboards by adding an `<iframe>` inside any project `.md` file, or link via `links.tableau`.

### LinkedIn
Each blog post has a LinkedIn share link at the bottom. Update the URL in `src/pages/publications/[slug].astro`.

### YouTube
Update video IDs in `src/pages/content.astro`. Each ID is the part after `?v=` in the YouTube URL.

### Instagram
Update `@yourhandle` links in `src/pages/content.astro` and `src/pages/index.astro`.

---

## 📦 Tech Stack

| Layer | Tool | Cost |
|-------|------|------|
| Framework | Astro 5 | Free |
| Hosting | Netlify | Free |
| Domain | Your registrar | ~$10-15/yr |
| SSL | Netlify | Free |
| Content | Markdown files | Free |
| Fonts | Google Fonts | Free |

**Total monthly cost: $0** (domain is annual)
