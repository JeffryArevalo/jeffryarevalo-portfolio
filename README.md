# Jeffry Arevalo — Personal Portfolio

Data journalist, analyst, and builder. Built with Astro 5, deployed on Netlify, live at jeffryarevalo.com.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
```

---

## Adding Content

### New project

Create `src/content/projects/your-project-name.md`:

```markdown
---
title: "Project Title"
description: "One sentence description."
date: 2026-05-01
category: "Data Visualization"   # Data Analysis | Data Visualization | AI / Automation | Software
tools: ["Python", "Tableau"]
featured: true
order: 5
links:
  github: "https://github.com/jeffryarevalo/repo"
  live: "https://live-url.com"
---

Content here in Markdown.
```

### New publication

Create `src/content/blog/your-publication-name.md`:

```markdown
---
title: "Publication Title"
description: "One sentence summary."
pubDate: 2026-05-01
tags: ["Data Journalism", "AI"]
externalUrl: "https://jeffryarevalo.github.io/investigation/"
---
```

Push to GitHub — Netlify rebuilds in ~60 seconds.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro 5 |
| Hosting | Netlify (free) |
| Domain | Namecheap → jeffryarevalo.com |
| SSL | Netlify (auto) |
| Content | Markdown files |
| Fonts | Google Fonts |
