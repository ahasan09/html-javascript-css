# Improvement Plan: html-javascript-css

## Overview
Seven standalone static mini-projects. No tests, no build pipeline, and no shared code across projects despite likely overlapping patterns.

## Improvements

### Testing
- Add Playwright visual regression tests for each project to detect unintended UI changes
- Add Axe accessibility audits via Playwright to catch WCAG violations automatically

### Code Quality
- Add ESLint (for JS) and Stylelint (for CSS) with a shared config at the root
- Add Prettier for consistent formatting across all projects
- Add a root `package.json` wiring `npm run lint` across all subfolders

### Accessibility
- Audit each project with axe DevTools or Lighthouse and fix all WCAG AA violations
- Ensure proper semantic HTML (headings hierarchy, landmark regions, form labels)
- Add keyboard navigation support to any interactive elements

### Modernization
- Convert JavaScript to ES modules (`import`/`export`) and use a bundler (Vite) for consistent module loading
- Replace CSS floats/tables (if any) with Flexbox/Grid
- Add CSS custom properties (`--color-primary`, `--spacing-md`) for a shared design system

### Shared Infrastructure
- Extract a shared `style-guide/` folder with CSS reset, typography, and color variables reused across projects
- Add a root `index.html` gallery page linking to all mini-projects

### DevOps
- Add GitHub Actions CI: lint + accessibility audit on every push
- Deploy all projects to GitHub Pages with subdirectory routing
