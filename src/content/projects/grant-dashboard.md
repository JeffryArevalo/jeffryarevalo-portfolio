---
title: "GrantDesk: Grant Management Dashboard"
description: "A full-featured web dashboard for tracking federal and non-federal funding awards, compliance deadlines, and budget utilization across an active grant portfolio."
date: 2026-03-01
category: "Data Visualization"
tools: ["HTML5", "CSS3", "Chart.js", "JavaScript", "localStorage"]
links:
  github: "https://github.com/JeffryArevalo/grant-dashboard"
  live: "https://jeffryarevalo.github.io/grant-dashboard/"
image: "/images/project-grant-dashboard.png"
featured: true
order: 1
---

## Overview

GrantDesk is a browser-based grant management dashboard for tracking federal and non-federal funding awards, compliance deadlines, and budget utilization across fiscal years 2025 and 2026.

## Key Features

The dashboard calculates five core metrics in real time: active grant count, total awarded, total spent, average burn rate, and urgent compliance deadlines.

Three main views organize the data:

**Dashboard** — Active grant roster with compliance deadline tracking and spending visualization by program area.

**Budget Analysis** — Charts comparing awarded versus actual expenditures, monthly spend trends, and utilization rates across the full portfolio.

**Archive** — Historical records of completed grants, which auto-migrate 30 days after closeout.

## What It Tracks

Each grant entry records award amounts, year-to-date spending, burn rate, project timelines, funder agency, CFDA codes, match requirements, assigned project manager, and status classification (Active, Reporting, Closeout, Pending).

## Technical Details

Built entirely in the browser with no backend dependencies. Chart.js 4.4.1 powers the bar, line, doughnut, and horizontal bar visualizations. Grant records are persisted via localStorage, and the interface supports add, edit, delete, and archive operations through modal forms with an expandable row-level detail drawer.
