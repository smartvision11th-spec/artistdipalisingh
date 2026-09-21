# artistdipalisingh — Design System

## 1. Purpose

This document defines the visual language for **artistdipalisingh**.

The design system exists to keep the website visually consistent across:

* Homepage
* Gallery
* Artwork detail
* About
* Commission
* Cart
* Checkout
* Order success
* Future admin interface

The visual identity should feel like:

**Luxury contemporary art gallery + editorial art magazine + private artist studio + high-end fashion editorial**

The artwork remains the primary visual element.

---

# 2. Design Principles

## 2.1 Art First

Artwork should receive the strongest visual attention.

The interface must support the artwork rather than compete with it.

Avoid decorative UI that becomes more noticeable than the artwork.

---

## 2.2 Editorial Rather Than Commercial

The website should feel curated.

Prefer:

* Large images
* Strong typography
* Asymmetrical layouts
* White space
* Editorial compositions
* Carefully selected content

Avoid:

* Dense product grids
* Repetitive cards
* Excessive badges
* Sales-oriented visual clutter

---

## 2.3 Calm Luxury

Luxury should come from restraint.

Use:

* Space
* Typography
* Proportion
* Material-inspired colors
* Subtle borders
* Carefully controlled motion

Do not rely on:

* Excessive gold
* Heavy shadows
* Decorative gradients everywhere
* Glossy effects
* Glassmorphism

---

## 2.4 Human and Artistic

The website should feel connected to an individual artist.

It should not feel like:

* A SaaS product
* A marketplace
* A generic online store
* An AI-generated portfolio

---

## 2.5 Functional Minimalism

Every visual element should have a purpose.

If an element does not improve:

* Understanding
* Navigation
* Artwork presentation
* Conversion
* Atmosphere

it should probably not exist.

---

# 3. Color System

The color system uses warm neutrals with restrained rose/pink accents.

## Primary Background

**Warm Ivory**

Approximate development value:

`#F6F1EA`

Use for:

* Main page background
* Gallery background
* Editorial sections

---

## Secondary Background

**Soft Cream**

Approximate:

`#FBF8F4`

Use for:

* Alternating sections
* Cards where cards are actually necessary
* Forms
* Subtle content separation

---

## Primary Text

**Deep Charcoal**

Approximate:

`#242220`

Use for:

* Headings
* Body text
* Primary navigation
* Important UI elements

Avoid pure black for large areas unless the composition specifically requires it.

---

## Secondary Text

**Muted Charcoal**

Approximate:

`#6E6863`

Use for:

* Supporting text
* Metadata
* Captions
* Secondary navigation

---

## Soft Black

Approximate:

`#171615`

Use sparingly for:

* Strong contrast sections
* Footer
* Special editorial compositions
* High-impact CTA areas

---

## Blush Rose

Approximate:

`#D9A8A9`

Use for:

* Small accents
* Hover states
* Decorative details
* Subtle gradient components

Do not use as a dominant page color.

---

## Dusty Rose

Approximate:

`#B98287`

Use sparingly for:

* Secondary accents
* Small labels
* Selected states

---

## Muted Mauve

Approximate:

`#A9939A`

Use for:

* Subtle supporting elements
* Editorial accents
* Background gradients

---

## Champagne

Approximate:

`#D8C6A4`

Use extremely sparingly.

Champagne should never become the site's primary identity.

---

# 4. Color Usage Rules

Recommended visual ratio:

### Dominant

Warm ivory / cream / neutral tones

### Supporting

Deep charcoal / soft black

### Accent

Blush / dusty rose / muted mauve

### Rare accent

Champagne

The website should remain visually sophisticated even if all accent colors are removed.

---

# 5. Gradients

Gradients may be used when they feel inspired by:

* Silk
* Pigment
* Rose glass
* Atmospheric light
* Soft daylight

Gradients should be:

* Subtle
* Low contrast
* Large and diffused
* Supporting rather than dominating

Avoid:

* Neon gradients
* Rainbow gradients
* Strong startup-style gradients
* Highly saturated pink
* Obvious AI-generated gradient backgrounds

---

# 6. Typography

## Display Typeface

Preferred:

**Bodoni Moda**

Purpose:

* Hero headlines
* Major page titles
* Editorial statements
* Artwork titles where appropriate

Characteristics:

* High contrast
* Elegant
* Fashion/editorial feel

---

## Body Typeface

Preferred:

**Hanken Grotesk**

Purpose:

* Body text
* Navigation
* Buttons
* Metadata
* Forms
* Supporting content

Characteristics:

* Clean
* Modern
* Highly readable

---

# 7. Typography Hierarchy

The exact sizes will be tuned during implementation, but the conceptual hierarchy is:

### Display XL

Very large editorial statements.

Use only for major moments.

Example:

Homepage hero.

---

### Display L

Major page titles.

Example:

Gallery title.

---

### Heading L

Major section headings.

---

### Heading M

Subsections.

---

### Heading S

Small content sections.

---

### Body L

Important introductory text.

---

### Body M

Default body copy.

---

### Body S

Supporting information.

---

### Caption

Small descriptive information.

---

### Eyebrow

Small uppercase editorial labels.

Example:

`SELECTED WORKS`

or

`COMMISSIONED ART`

---

# 8. Typography Rules

Use typography to create visual hierarchy.

Preferred techniques:

* Serif/sans contrast
* Italic serif emphasis
* Uppercase micro-labels
* Large whitespace around headings
* Controlled line lengths
* Strong hierarchy between title and metadata

Avoid:

* Using serif for everything
* Using sans-serif for everything
* Excessive font weights
* Huge text in every section
* Long paragraphs without structure

---

# 9. Italic Typography

Italic serif text can be used for:

* Artistic statements
* Emotional emphasis
* Short editorial phrases
* Selected headings

It should remain occasional.

If every sentence is italic, nothing is emphasized.

---

# 10. Spacing System

Use a consistent spacing scale.

Suggested base unit:

`4px`

Preferred scale:

* 4px
* 8px
* 12px
* 16px
* 24px
* 32px
* 48px
* 64px
* 80px
* 96px
* 128px
* 160px

Large spacing should be used generously in major editorial sections.

---

# 11. Whitespace

Whitespace is a major part of the brand.

Do not attempt to fill every empty area.

Whitespace should:

* Separate ideas
* Frame artwork
* Create rhythm
* Increase perceived quality
* Give typography room to breathe

An empty area can be intentional.

---

# 12. Grid System

The website should use a flexible editorial grid.

Desktop:

* Large content area
* Multiple columns when useful
* Asymmetrical artwork placement

Tablet:

* Reduced columns
* Preserved hierarchy

Mobile:

* Primarily single-column
* Occasional offset or asymmetric composition
* Intentional spacing

Do not force every page into a symmetrical grid.

---

# 13. Page Width

Use a responsive maximum content width.

Large artwork sections may break outside the standard content container.

General content should remain comfortably readable.

Avoid extremely wide text lines.

---

# 14. Asymmetry

Asymmetry is encouraged when it improves the composition.

Examples:

* Artwork positioned off-center
* Text aligned differently from image
* Unequal grid columns
* Offset captions
* Large image next to smaller supporting image

Asymmetry must feel intentional.

Do not create random misalignment simply to appear artistic.

---

# 15. Artwork Image Treatment

Artwork should generally be displayed without unnecessary cropping.

Preferred:

`object-fit: contain`

when preserving the full artwork is important.

Cropping may be used when:

* The artwork composition allows it
* The section is intentionally editorial
* The original artwork remains accessible in detail view

Never crop artwork merely because a card component requires a fixed ratio.

---

# 16. Artwork Grid

The Gallery should not automatically become:

`image + title + price`

repeated twenty times.

Possible presentation patterns:

### Editorial Grid

Large artwork beside smaller artwork.

### Feature + Supporting Works

One dominant artwork followed by smaller pieces.

### Asymmetric Grid

Different image sizes and positions.

### Full-Width Feature

A single artwork receives a large visual section.

The final combination depends on the actual artwork collection.

---

# 17. Artwork Cards

Cards should be used carefully.

If a card is required:

* Keep it visually minimal
* Avoid heavy shadows
* Avoid excessive rounded corners
* Keep metadata restrained
* Let the artwork dominate

Possible radius:

Small or none.

The default visual language should not depend on cards.

---

# 18. Borders

Use thin borders for subtle separation.

Preferred:

* Fine neutral borders
* Low contrast
* Editorial dividers

Avoid thick decorative borders.

---

# 19. Border Radius

The website should not be dominated by rounded rectangles.

Recommended:

* Artwork containers: minimal or none
* Buttons: subtle radius or restrained pill shape depending on design
* Forms: modest radius
* Cards: minimal radius

The exact radius will be determined during visual implementation.

---

# 20. Buttons

Buttons should feel refined and editorial.

Primary button:

* Strong contrast
* Clear label
* Moderate padding
* Minimal decoration

Secondary button:

* Outline or understated text treatment

Text links:

* Underline or subtle animated underline

Avoid:

* Huge pill buttons everywhere
* Excessive shadows
* Gradient buttons
* Glossy effects
* Emoji inside buttons

---

# 21. Button Hierarchy

### Primary CTA

Used for the most important action.

Examples:

* Explore Artwork
* Request a Custom Artwork
* Add to Cart

### Secondary CTA

Used for supporting actions.

Examples:

* About the Artist
* Continue Shopping

### Text Link

Used for low-priority navigation.

Example:

`View All Works`

---

# 22. Navigation

Navigation should be minimal.

Potential structure:

**artistdipalisingh**

Home
Gallery
About
Commission
Cart

The final arrangement will be determined during visual exploration.

Desktop navigation may use:

* Horizontal layout
* Generous spacing
* Small typography
* Subtle hover effects

Mobile navigation may use:

* Compact header
* Menu trigger
* Full-screen or elegant drawer navigation if necessary

---

# 23. Header

The header should not visually compete with the artwork.

Possible approaches:

* Transparent over hero
* Minimal ivory background
* Floating editorial navigation
* Sticky navigation where useful

The final approach should be chosen during Phase 1 visual exploration.

---

# 24. Footer

The footer can provide stronger contrast than the main site.

Potential design:

* Deep charcoal or soft black
* Ivory typography
* Minimal navigation
* Social links
* Commission CTA
* Contact information

The footer should remain elegant rather than becoming a sitemap dump.

---

# 25. Forms

Forms should be:

* Minimal
* Spacious
* Clearly labeled
* Easy to understand
* Accessible

Use:

* Visible labels
* Clear focus states
* Helpful validation
* Adequate input height

Avoid:

* Tiny fields
* Excessive decoration
* Placeholder-only labels
* Complex multi-step forms unless necessary

---

# 26. Checkout Design

Checkout should feel like part of the same gallery experience.

Do not suddenly switch to a generic payment-dashboard aesthetic.

Use:

* Same typography
* Same spacing
* Same color system
* Same buttons
* Same visual restraint

Commerce should feel integrated into the brand.

---

# 27. Empty States

Empty states should remain calm and useful.

Example:

Empty cart:

* Short message
* Clear visual hierarchy
* Continue Shopping CTA

Avoid exaggerated illustrations or playful UI that conflicts with the brand.

---

# 28. Loading States

Loading states should be subtle.

Preferred:

* Soft fades
* Skeletons where useful
* Simple transitions

Avoid:

* Spinners everywhere
* Flashy loaders
* Large animations

---

# 29. Error States

Error messages should be:

* Clear
* Human-readable
* Short
* Actionable

Avoid exposing technical errors to visitors.

Do not show messages such as:

`Supabase query failed`

to customers.

---

# 30. Motion System

Motion should feel slow and intentional.

Possible duration range:

* Fast interaction: ~150–200ms
* Standard interaction: ~250–400ms
* Editorial reveal: ~500–900ms

These are starting guidelines, not rigid rules.

Motion should be adjusted based on actual visual testing.

---

# 31. Hover States

Hover effects may include:

* Slight image scale
* Underline reveal
* Opacity change
* Small translation
* Subtle color transition

Hover effects must not alter artwork in a distracting way.

---

# 32. Reduced Motion

Respect users who prefer reduced motion.

Where appropriate:

`prefers-reduced-motion`

should reduce or disable non-essential animations.

---

# 33. Mobile Design System

Mobile is not simply a smaller desktop.

Mobile priorities:

1. Artwork
2. Artist identity
3. Navigation
4. CTA
5. Supporting content

Mobile typography should remain editorial without becoming oversized.

---

# 34. Mobile Spacing

Use generous but practical spacing.

Avoid:

* Extremely tight sections
* Huge empty spaces that make the page unnecessarily long
* Tiny text
* Edge-to-edge text without margins

Images may extend closer to screen edges when compositionally appropriate.

---

# 35. Mobile Navigation

Requirements:

* Easy to open
* Easy to close
* Large enough tap targets
* Clear current location
* No accidental interaction

The navigation should feel like part of the brand rather than a generic mobile menu.

---

# 36. Accessibility

The design system must support:

* Readable contrast
* Keyboard focus
* Visible focus indicators
* Semantic buttons
* Accessible forms
* Meaningful link text
* Descriptive artwork alt text
* Reduced-motion preferences

Accessibility is part of the design, not a later patch.

---

# 37. Iconography

Use icons sparingly.

Icons should be:

* Simple
* Minimal
* Consistent
* Visually quiet

Avoid icon overload.

Text should be used when an icon alone is ambiguous.

---

# 38. Photography / Studio Images

If real studio or artist photography is provided:

* Preserve natural appearance
* Avoid excessive filters
* Use editorial cropping where appropriate
* Maintain consistent visual treatment

Do not fabricate studio imagery.

---

# 39. Social Media Visuals

Social media links should visually match the design system.

Avoid large collections of social icons dominating the page.

The purpose is to provide access, not advertise the social platforms more strongly than the artist.

---

# 40. Content Density

The site should favor quality over quantity.

A section with one excellent artwork may be stronger than a section with twelve small artworks.

Avoid filling pages simply because there is available space.

---

# 41. Visual Rhythm

Pages should alternate between:

* Large artwork
* Typography
* Whitespace
* Supporting information
* Smaller details
* Strong visual moments

This creates an editorial rhythm.

Do not make every section equally visually loud.

---

# 42. Premium Design Test

Before approving a component, ask:

1. Does it improve the artwork experience?
2. Does it look intentional?
3. Does it feel consistent with the rest of the website?
4. Does it require unnecessary decoration?
5. Does it work on mobile?
6. Does it feel like an artist's brand rather than a template?
7. Does it remain fast?

If the answer is no to several of these, redesign it.

---

# 43. Anti-Patterns

Do not introduce:

* Excessive rounded cards
* Generic dashboard components
* Bright gradients
* Huge shadows
* Excessive glass effects
* Decorative gold borders everywhere
* Generic stock photography
* Artificial testimonials
* Fake awards
* Fake statistics
* Fake social followers
* Excessive badges
* Overly animated pages
* Unnecessary popups

---

# 44. Design Evolution

This design system defines the foundation, not every pixel.

During visual exploration, specific decisions may change.

When a major design decision changes:

1. Record the decision in `DECISIONS.md`.
2. Update this document if the change becomes part of the permanent system.
3. Keep the system internally consistent.

---

# 45. Current Design Stage

Current status:

**Foundation defined.**

Still required:

* Stitch/design exploration
* Homepage visual exploration
* Gallery visual exploration
* Artwork detail exploration
* Commission page exploration
* About page exploration
* Mobile compositions

Only after these are sufficiently defined should the production frontend be built.

---

# 46. Core Visual Rule

The website should feel like:

**A curated exhibition that happens to support commerce.**

It should never feel like:

**An online store that happens to sell art.**
