---
title: "RFP Tracker — Proposal Pipeline Dashboard"
description: "A browser-based dashboard for managing Request for Proposal pipelines, tracking opportunities from submission through award across the full proposal lifecycle."
date: 2026-04-28
category: "Data Visualization"
tools: ["HTML5", "CSS3", "JavaScript", "localStorage"]
links:
  github: "https://github.com/jeffryarevalo/RFP-Tracker"
  live: "https://jeffryarevalo.github.io/RFP-Tracker/"
image: "/images/project-rfp-tracker.png"
featured: true
order: 3
---

## Overview

RFP Tracker is a lightweight, browser-based dashboard for managing Request for Proposal pipelines. It provides a centralized view of proposal opportunities and tracks each entry through its full lifecycle — from active pursuit to award or archive.

## Key Features

**Pipeline Dashboard** — A clear, organized view of all active RFPs with status tracking across proposal stages.

**Accordion Detail Rows** — Each entry expands inline to reveal full proposal details without leaving the dashboard view.

**Auto-Archiving** — Completed or expired entries migrate automatically to an archive, keeping the active pipeline clean and current.

**Persistent Storage** — All data is saved to localStorage, so the pipeline persists between sessions with no backend or login required.

## Technical Details

Built as a single-file solution with no build step or external dependencies. Runs directly in the browser, making it immediately deployable and usable in any environment.
