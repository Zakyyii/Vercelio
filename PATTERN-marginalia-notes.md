---
name: "Marginalia Notes"
description: "A narrow left margin carries mono caps section numbers, dates, and inline footnotes alongside a wide reading column. Inspired by scholarly typesetting — perfect for documentation, case studies, and long-form essays."
tags: [layout, docs, "long-read", editorial]
type: pattern
container: centered
content_max_width: 1080px
page_padding: 64px
grid:
  columns:     2
  max_columns: 2
  line_color:  "rgba(15, 15, 15, 0.06)"
  line_width:  1px
  line_style:  solid
  edge_lines:  false
sections:
  padding_y:      72px
  divider_color:  "rgba(15, 15, 15, 0.06)"
  divider_width:  1px
  divider_style:  solid
intersections:
  style: none
  color: "rgba(15, 15, 15, 0.10)"
  size:  4px
design:
  colors:
    ink:      "#1c1815"
    surface:  "#f5efe4"
    accent:   "#9a3a1a"
    muted:    "#7a7068"
    hairline: "#ddd4c5"
  fonts:
    display: "Source Serif 4"
    body:    "Source Serif 4"
    mono:    "JetBrains Mono"
  radius: 2px
  google_fonts_url: "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap"
---

# Marginalia Notes

## AI Build Instructions

> **Read this section before writing any code.** The rules below
> are non-negotiable. Every value used in the UI must come from this
> file's frontmatter — never substitute, approximate, or invent new
> colors, fonts, radii, or shadows. If a value is missing, ask the
> user before adding one.

### 1 · Your role

You are building UI for a project that has adopted **Marginalia Notes** as its
design system. Treat `PATTERN.md` as the single source of truth.
Your job is to translate the user's product requirements into
components and pages that look like they were designed by the same
person who authored this file.

### 2 · Token compliance

- Pull every color, font family, radius, shadow, and spacing value
  from the frontmatter at the top of this file.
- Use semantic roles (e.g. `primary`, `accent`, `muted`) — never
  hard-code hex values that bypass the system.
- When a token can be expressed as a CSS variable, declare it once
  in your global stylesheet and reference it everywhere downstream.
- The Google Fonts `<link>` is provided in the Typography section.
  Add it to `<head>` before any component renders.

### 3 · Build recipes

#### Page skeleton (the layout contract)

- Container: `centered`
- Content max-width: `1080px` (typography respects this even when the page is full-bleed).
- Vertical grid: **2 column hairlines** (capped at 2 on wide viewports), drawn with `1px solid rgba(15, 15, 15, 0.06)`.
- Section padding: `72px` top + bottom inside every section.
- Section divider: `1px solid rgba(15, 15, 15, 0.06)` between sections.

#### Primary CTA

Exactly **one** primary CTA per page or section. The pattern's discipline depends on this.

- Background: `#1c1815` · Color: `#f5efe4`
- Padding: `10px 20px` · Weight: `500`
- Shape: `rounded` (radius: `2px`)

#### Headlines

- Family: `Source Serif 4` · Size: `clamp(2rem, 3.5vw, 2.75rem)` · Leading: `1.12` · Weight: `600`
- Tracking: `-0.015em`
- The pattern's signature: split the headline so the **second clause is italic in the accent color**. Example: "A clearer way to *say less.*"

#### Body copy

- Family: `Source Serif 4` · Size: `1rem` · Leading: `1.7` · Color: `#7a7068`
- Max line length: 60–66 characters. Never let prose stretch the full content width.

#### Eyebrows / metadata

- Family: `JetBrains Mono` · Size: `0.6875rem` · Letter-spacing: `0.14em`
- Uppercased. Color: `#9a3a1a`.

### 4 · Hard constraints

Never do any of the following without explicit instruction from the user:

- Introduce a new color, font, radius, or shadow that isn't declared above.
- Mix this system with another (e.g. don't paste in Material or Bootstrap defaults).
- Use generic gradient defaults (purple→blue, peach→pink) — they break the system's voice.
- Reach for emoji icons. Use a consistent icon library and size icons in line with body type.
- Add motion that exceeds the system's restraint — keep transitions short (≤200ms) and subtle.
- Break the layout contract: the column count, divider rhythm, and content max-width are part of the pattern.

### 5 · Before you finish — verify

Run through this checklist for every screen you produce:

- [ ] Every color used appears in the Colors table above.
- [ ] Headlines use the display font; body copy uses the body font.
- [ ] Buttons match one of the declared variants exactly (shape, padding, weight).
- [ ] Border-radius values come from `radius.sm` / `radius.md` / `radius.lg` / `radius.pill`.
- [ ] Cards and dividers use the declared border + shadow tokens.
- [ ] The page respects the pattern's grid (column count + content max-width).
- [ ] Section dividers use the declared color, width, and style.
- [ ] Exactly one primary CTA per section — never duplicate.
- [ ] No values were invented; if you needed something missing, you stopped and asked.

---

## Overview

Marginalia Notes borrows from scholarly typesetting: a narrow column on the
left carries mono caps section numbers, dates, source references, and short
inline footnotes; the wide column on the right carries the reading material.
The two columns share a baseline grid so that every margin annotation aligns
to the heading or paragraph it annotates.

Unlike the Asymmetric Split, this pattern has no hairline between columns —
the separation is purely typographic. The mono caps in the margin do all the
work; they read as instrument labels next to the prose.

## When to use it

- Documentation pages, technical references, API docs.
- Long-form essays and case studies where source citations and side notes
  belong next to the paragraph rather than at the end.
- Changelogs where each entry needs a date stamp in the margin.
- Brand stories and manifestos that benefit from a "studied" feel.

## When to avoid it

- Marketing landing pages where the lead needs the full width.
- Pages without a strong reason to use the margin — empty marginalia reads as
  a layout mistake.
- Mobile views below 768px. Collapse to a single column and inline the margin
  notes as small caps eyebrows above each paragraph.

## Do

- Use mono caps at 0.10–0.12em tracking for every margin label. The caps voice
  is the entire visual signature.
- Keep the reading column line length between 60–75ch. The pattern only works
  if the prose is comfortable to read.
- Align margin notes to the top of the paragraph they reference, never
  centered vertically.
- Use margin labels for: section numbers (01, 02), dates, source refs,
  glossary terms, footnote markers.

## Don't

- Don't put paragraphs of body copy in the margin. Maximum 2 lines per note.
- Don't draw a hairline between the columns. The separation is typographic.
- Don't mix mono caps with sans caps in the margin — pick one and hold it.
- Don't let the margin column exceed 220px. Past that, the wide column
  narrows past comfortable reading width.

## Notes

- Pair with a serif body face for the strongest scholarly register, or with a
  modern sans for documentation feel.
- The mono in the margin should be the same family used everywhere else mono
  appears in the system — consistency is what makes the marginalia read as
  intentional rather than decorative.
- The pattern composes with any color system; use foreground at ~50% alpha
  for the margin labels so they recede from the prose.

---

## Tokens

> Generated from the same source the live preview renders from.
> Treat the values below as the contract — never substitute approximations.

### Container

| Property | Value |
|----------|-------|
| container | `centered` |
| contentMaxWidth | `1080px` |
| pagePadding | `64px` |

### Vertical Grid

| Property | Value |
|----------|-------|
| columns | `2` |
| maxColumns | `2` |
| lineColor | `rgba(15, 15, 15, 0.06)` |
| lineWidth | `1px` |
| lineStyle | `solid` |
| edgeLines | `false` |

### Section Dividers

| Property | Value |
|----------|-------|
| paddingY | `72px` |
| dividerColor | `rgba(15, 15, 15, 0.06)` |
| dividerWidth | `1px` |
| dividerStyle | `solid` |

### Intersections

| Property | Value |
|----------|-------|
| style | `none` |
| color | `rgba(15, 15, 15, 0.10)` |
| size | `4px` |

## Design Identity

> This pattern ships with its own typography, color, and CTA tokens.
> Use the values below verbatim — they are the system, not a starting point.

### Colors

| Token | Value |
|-------|-------|
| ink (primary text) | `#1c1815` |
| surface (page background) | `#f5efe4` |
| accent (single moment per page) | `#9a3a1a` |
| muted (metadata, captions) | `#7a7068` |
| hairline (rules and dividers) | `#ddd4c5` |

### Typography

Load via Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Role | Family |
|------|--------|
| display (headlines) | `Source Serif 4` |
| body (prose) | `Source Serif 4` |
| mono (metadata, numerals) | `JetBrains Mono` |

### Type Scale

| Role | Size | Leading | Weight | Tracking |
|------|------|---------|--------|----------|
| Hero / H1 | `clamp(2rem, 3.5vw, 2.75rem)` | `1.12` | `600` | `-0.015em` |
| Body | `1rem` | `1.7` | `400` | — |
| Eyebrow | `0.6875rem` | — | `500` | `0.14em` |

> The hero pairs roman + italic — split the headline so the secondary clause renders italic in the accent color.

### Primary CTA

| Property | Value |
|----------|-------|
| shape | `rounded` |
| background | `#1c1815` |
| color | `#f5efe4` |
| padding | `10px 20px` |
| fontWeight | `500` |
| radius | `2px` |

> One CTA per page. The pattern's discipline depends on this — never duplicate.

---

## Reference Implementation

Copy-paste-ready HTML + CSS that renders this pattern with the exact token
values declared above. Theme the colors against your system's hairline tone.

### HTML

```html
<article class="doc">
  <section class="block">
    <aside class="margin">
      <p class="label">01 — Intro</p>
      <p class="date">Apr 2026</p>
    </aside>
    <div class="prose">
      <h1>The reading column carries the lead.</h1>
      <p>Body paragraphs stay between 60 and 75 characters per line. The margin
      column on the left carries section numbers, dates, and short inline
      footnotes that align to the paragraph they annotate.</p>
    </div>
  </section>

  <section class="block">
    <aside class="margin">
      <p class="label">02 — Detail</p>
      <p class="note">See: §3.4 of the spec for the canonical algorithm.</p>
    </aside>
    <div class="prose">
      <h2>Subsection heading.</h2>
      <p>Margin notes never exceed two short lines. Anything longer belongs in
      the prose itself.</p>
    </div>
  </section>
</article>
```

### CSS

```css
:root {
  --content-max: 1080px;
  --margin-w:    180px;
  --gap:         48px;
  --divider:     rgba(15, 15, 15, 0.06);
  --margin-fg:   rgba(15, 15, 15, 0.55);
}

.doc {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 64px 32px;
}

/* Two-column block: narrow margin + wide prose. No hairline between them. */
.block {
  display: grid;
  grid-template-columns: var(--margin-w) 1fr;
  column-gap: var(--gap);
  padding: 72px 0;
  border-bottom: 1px solid var(--divider);
}

/* Margin column — mono caps voice for every label. */
.margin {
  font-family: ui-monospace, "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: var(--margin-fg);
  line-height: 1.5;
}
.margin .label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
}
.margin .date,
.margin .note {
  font-size: 0.6875rem;
}

/* Reading column — comfortable line length. */
.prose {
  max-width: 65ch;
}
.prose h1 { font-size: clamp(2rem, 3.5vw, 3rem); line-height: 1.1; }
.prose h2 { font-size: 1.5rem; line-height: 1.3; }
.prose p  { line-height: 1.7; }

/* Mobile: collapse to single column, margin labels become eyebrows. */
@media (max-width: 768px) {
  .block {
    grid-template-columns: 1fr;
    row-gap: 12px;
    padding: 48px 0;
  }
  .margin .date,
  .margin .note { display: none; }
}
```
