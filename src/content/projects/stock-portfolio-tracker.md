---
title: "Stock Portfolio Tracker"
description: "A browser-based investment portfolio dashboard that tracks holdings, monitors real-time performance, and benchmarks returns against the S&P 500."
date: 2026-04-29
category: "Data Visualization"
tools: ["TypeScript", "JavaScript", "HTML5", "CSS3", "localStorage"]
links:
  github: "https://github.com/JeffryArevalo/stock-portfolio-tracker"
  live: "https://jeffryarevalo.github.io/stock-portfolio-tracker/"
featured: true
order: 4
---

## Overview

Stock Portfolio Tracker is a personal investment dashboard that runs entirely in the browser. It monitors stock holdings and surfaces the metrics that matter — gain and loss, daily movement, dividend yield, and long-term return — all without requiring an account or a backend.

## Key Features

**Portfolio Summary** — At a glance: total invested, current portfolio value, day change, and overall gain or loss in dollars and percentage.

**Holdings Table** — A detailed breakdown of every position showing ticker, share count, average cost, current price, daily change, dividend yield, invested amount, current value, and total gain.

**Benchmark Comparison** — Compares portfolio performance against the S&P 500 (VOO) across six timeframes: 1 month, 3 months, 6 months, 1 year, 2 years, and 5 years.

**Allocation View** — A visual breakdown of how the portfolio is distributed across holdings by current value.

**Auto-Refresh** — Configurable refresh intervals (10 seconds, 30 seconds, 1, 2, and 5 minutes) keep prices current without manual reloading.

## Technical Details

Built in TypeScript with no server dependencies. All holdings are persisted in localStorage so the portfolio survives browser sessions without requiring a login or external database.
