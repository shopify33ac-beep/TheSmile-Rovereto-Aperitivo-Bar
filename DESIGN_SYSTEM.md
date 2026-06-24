# The Smile UI Design System

## Brand Feel

Contemporary Italian aperitivo, modern cafe culture, warm hospitality, social atmosphere, and minimal editorial composition. The interface should feel premium but lived-in: restrained surfaces, tactile color, generous rhythm, and confident typography.

## Typography

- Display: `font-display`, used for hero and section titles.
- Body: `font-body`, used for readable content and controls.
- Eyebrow: `text-eyebrow ds-eyebrow`, uppercase section labels.
- Large heading: `ds-heading-xl`, hero-scale editorial type.
- Section heading: `ds-heading-lg`, page section titles.
- Lead copy: `ds-lead`, warm descriptive paragraphs.

## Color Tokens

- `cream`: warm page background, `#F8F5F0`.
- `porcelain`: elevated surfaces, `#FFFDF8`.
- `ink`: primary text, `#1A1A1A`.
- `espresso`: deep hover/dark accent, `#2D1E17`.
- `terracotta`: primary CTA, `#C47A5A`.
- `wine`: rich CTA hover, `#733F34`.
- `olive`: editorial labels and quiet accents, `#7D8B6A`.
- `beige`: borders and soft dividers, `#D9C7AE`.
- `prosecco`: hero/footer highlight, `#F4D6A6`.

## Spacing

- Page container: `ds-container`.
- Section rhythm: `ds-section`, with `py-24` on mobile and `lg:py-32` on large screens.
- Component gap: use `gap-4`, `gap-6`, `gap-8`, and `gap-10` consistently.
- Editorial blocks: keep text width around `max-w-3xl`.

## Buttons

- Base: `ds-button`.
- Primary: `ds-button-primary` for reservations and main CTAs.
- Secondary: `ds-button-secondary` for menu, gallery, and supporting actions.
- Ghost: translucent controls over imagery or dark surfaces.
- Dark: high-contrast social/contact actions.

Hover behavior: subtle lift, warmer border, richer fill, and smooth `duration-300` transitions.

## Cards

- Base: `ds-card`.
- Interactive: `ds-card-hover`.
- Radius: `rounded-card` for menu/content cards and `rounded-panel` for large reservation/map panels.
- Use `border-beige/25`, `bg-porcelain`, `shadow-soft`, and hover `shadow-lift`.

## Forms

- Input base: `ds-input`.
- Label base: `ds-label`.
- Layout: two-column grids on desktop, single-column on mobile.
- Focus: terracotta border with a soft translucent ring.

## Navbar

Use a floating transparent bar over the hero:

- Fixed top placement.
- Dark translucent background over imagery.
- Rounded pill controls.
- White text with `prosecco` hover accents.
- Reserve CTA visible on larger screens.

## Footer

Use a dark `ink` surface with:

- Prosecco brand label.
- Beige text links.
- Ghost reservation button.
- Three-column desktop layout collapsing to stacked mobile content.

## Breakpoints

- `xs`: 420px.
- Tailwind defaults: `sm`, `md`, `lg`, `xl`, `2xl`.
- Compose mobile first. Use `sm:` for button rows, `lg:` for editorial grids, and `max-w-7xl` for broad page layout.
