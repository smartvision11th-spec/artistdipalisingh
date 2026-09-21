# artistdipalisingh — Project Instructions

## 1. Project Identity

**Project:** artistdipalisingh
**Artist:** Dipali Singh
**Website type:** Single-artist contemporary art website
**Primary purpose:** Showcase, sell, and generate custom artwork/commission requests.

This is **not** a marketplace.

The website represents one artist and should feel like:

* A high-end contemporary art gallery
* An editorial art magazine
* A private artist studio
* A premium fashion/editorial website

The experience must place the artwork and artist before the technology or commerce.

---

# 2. Core Product Principle

The project follows this hierarchy:

**Art first.**
**Experience second.**
**Commerce third.**
**Technology underneath everything.**

The technology should be largely invisible to visitors.

Visitors should remember:

* The artwork
* The artist
* The atmosphere
* The craftsmanship
* The possibility of commissioning personal artwork

---

# 3. Development Philosophy

The project is built in controlled phases.

### Phase 0

Project documentation and architecture.

### Phase 1

Visual exploration and design direction.

### Phase 2

Clean frontend foundation.

### Phase 3

Complete public frontend using local mock data.

### Phase 4

Frontend testing and refinement.

### Phase 5

Backend architecture and database design.

### Phase 6

Supabase implementation.

### Phase 7

Frontend/backend integration.

### Phase 8

Admin system.

### Phase 9

Production testing and deployment.

## Critical Rule

**Frontend first. Backend second.**

Do not introduce Supabase merely because it is available.

The public frontend must first work independently using local data.

---

# 4. Technology Stack

## Frontend

* Next.js
* React
* TypeScript
* Next.js App Router
* CSS
* `next/image`
* `next/font`

## Deployment

* Vercel

## Backend

To be implemented later:

* Next.js server/API routes
* Supabase PostgreSQL
* Supabase Storage
* Supabase Auth

Avoid unnecessary libraries and frameworks.

A dependency should only be added when it provides a meaningful benefit that cannot be achieved cleanly with the existing stack.

---

# 5. Frontend Architecture Principle

The frontend should be independent from the backend during the initial development stages.

Initial data source:

`data/artworks.ts`

Later:

`Supabase → server/API layer → frontend`

The frontend components should not be tightly coupled to Supabase.

The eventual backend should provide data to an already-designed interface rather than forcing the interface to change around the backend.

---

# 6. Design Direction

The visual identity should communicate:

* Sophistication
* Artistic confidence
* Exclusivity
* Calm luxury
* Craftsmanship
* Contemporary creativity

The design should rely primarily on:

* Composition
* Typography
* Whitespace
* Image treatment
* Hierarchy
* Asymmetry
* Editorial presentation
* Subtle motion

Luxury must not depend on excessive gold, black backgrounds, rounded cards, or decorative effects.

---

# 7. Visual Restrictions

Avoid:

* Generic SaaS layouts
* Startup landing-page aesthetics
* Shopify-style storefronts
* Generic portfolio templates
* AI-generated portfolio aesthetics
* Excessive cards
* Repetitive rounded rectangles
* Excessive shadows
* Excessive glassmorphism
* Neon gradients
* Rainbow gradients
* Childish pink
* Overly saturated colors
* Excessive gold
* Generic beige luxury
* Busy interfaces
* Excessive animation
* Gimmicky cursor effects
* Unnecessary parallax
* Decorative elements that compete with artwork

The website should feel curated rather than assembled.

---

# 8. Color System

Preferred visual palette:

* Warm ivory
* Soft cream
* Deep charcoal
* Soft black
* Blush pink
* Dusty rose
* Muted mauve
* Pale rose
* Soft champagne

Pink may appear through subtle gradients inspired by:

* Silk
* Rose glass
* Painted pigment
* Atmospheric light
* Soft daylight
* Color diffusion

Pink must remain sophisticated and restrained.

Gold should be used extremely sparingly.

The design must remain premium without gold.

---

# 9. Typography

Preferred typography direction:

### Display

**Bodoni Moda** or another sophisticated high-contrast editorial serif.

### Interface/body

**Hanken Grotesk** or another clean modern sans-serif.

Typography should use:

* Editorial hierarchy
* Oversized headlines where appropriate
* Italic serif emphasis
* Small uppercase labels
* Generous line spacing
* Intentional scale relationships

Not every heading should be oversized.

Typography must support composition rather than become decoration.

---

# 10. Layout Rules

Preferred layout characteristics:

* Asymmetry
* Large whitespace
* Full-bleed artwork
* Editorial grids
* Oversized typography
* Layered compositions
* Thin borders
* Strong negative space
* Intentional visual rhythm
* Large artwork presentation

Avoid making every section look like a collection of cards.

Artwork should remain visually dominant.

---

# 11. Artwork Presentation

Artwork is the most important content.

Images must preserve the artist's work rather than aggressively crop it.

Use:

* `contain` where artwork preservation is important
* Carefully controlled cropping only when appropriate
* Large editorial image sections
* Large artwork previews
* Detailed artwork views

Images should feel exhibited rather than listed.

---

# 12. Animation

Animation must be subtle.

Acceptable patterns include:

* Slow image reveals
* Subtle image scaling
* Elegant hover effects
* Refined underline transitions
* Fade/slide transitions
* Smooth transitions where useful

Avoid:

* Bouncing elements
* Excessive parallax
* Gimmicky cursor effects
* Flashy animations
* Animation on every element
* Excessive blur

Animation should support the artwork.

---

# 13. Responsive Design

Mobile is a deliberate design target.

Do not simply stack the desktop layout vertically.

Mobile design must preserve:

* Editorial typography
* Artwork prominence
* Intentional spacing
* Elegant navigation
* Visual impact
* Usable CTAs

Desktop and mobile may use different compositions while maintaining the same visual identity.

---

# 14. Required Public Pages

The public frontend will eventually contain:

1. Home
2. Gallery / Shop
3. Artwork Detail
4. About Artist
5. Custom Artwork / Commission
6. Cart
7. Checkout
8. Order Success

An admin area will be developed later.

---

# 15. Home Page

The homepage should introduce the artist and establish the visual identity.

Potential sections:

* Hero
* Selected Works
* Artist introduction
* Custom Artwork / Commission
* Studio/process
* Featured artwork
* Social presence
* Final CTA
* Footer

The homepage should not become an overloaded collection of every possible feature.

---

# 16. Gallery / Shop

The gallery should allow visitors to:

* Browse artworks
* View artwork previews
* See title
* See price where applicable
* See category
* Open artwork details

The presentation should remain editorial and curated.

Commerce should not make the page feel like a generic online store.

---

# 17. Artwork Detail

Each artwork should eventually support:

* Large artwork image
* Title
* Artist
* Price
* Category
* Medium
* Size
* Edition/original status
* Description
* Availability
* Add to cart
* Purchase CTA

Optional future content:

* Artwork story
* Close-up image
* Related works

---

# 18. About Artist

The About page may contain:

* Artist identity
* Artistic philosophy
* Background
* Creative process
* Artistic interests
* Studio/process imagery
* Social links

## Content Rule

Never invent:

* Awards
* Exhibitions
* Education
* Location
* Years of experience
* Clients
* Galleries
* Achievements
* Qualifications
* Testimonials
* Social accounts

Only verified information supplied by the artist/client may become production content.

Missing information should use an explicitly marked placeholder during development.

---

# 19. Commission / Custom Artwork

Commissioned and on-demand artwork is a major business feature.

The experience should feel personal and premium.

Primary flow:

Visitor discovers custom artwork.

↓

Visitor learns about the commission process.

↓

Visitor selects **Request a Custom Artwork**.

↓

Visitor is directed to WhatsApp.

↓

Visitor discusses their requirements directly with the artist.

The commission page should not feel like a generic contact form.

---

# 20. WhatsApp Rules

WhatsApp is an important conversion channel.

Never use:

`href="#"`

Never scatter the WhatsApp number throughout multiple components.

Until the real number is supplied, keep it in a centralized configuration/content location.

Example development concept:

`siteConfig.whatsapp`

The final production website must use the real WhatsApp information supplied by the artist.

---

# 21. Social Media Rules

Social links must be centralized.

Do not invent URLs.

Do not use fake social accounts.

Until actual links are provided, use clearly identified development placeholders.

Production deployment must contain verified social URLs only.

---

# 22. Local Mock Data

During frontend development, artwork information must come from local mock data.

Recommended location:

`data/artworks.ts`

Mock data exists only to build and test the interface.

Mock artist names, descriptions, prices, and other development content must never accidentally become production content.

The data structure should be compatible with the eventual Supabase model.

---

# 23. Cart Rules

The frontend cart should eventually support:

* Add artwork
* Remove artwork
* Change quantity where applicable
* Subtotal
* Continue shopping
* Checkout

Inventory and availability will eventually be enforced by the backend.

Client-side values must not be trusted for final order totals.

---

# 24. Checkout Rules

The eventual checkout should collect appropriate information such as:

* Customer name
* Phone number
* Email where required
* Address
* City
* State
* Pincode
* Ordered items
* Total
* Payment method

Initial payment method:

**Cash on Delivery**

Payment gateways may be added later.

The server must eventually calculate and validate the final order total.

---

# 25. Admin Rules

Admin development occurs only after the public frontend and backend foundations are stable.

The eventual admin system may include:

### Artwork

* Add
* Edit
* Delete
* Upload image
* Price
* Category
* Medium
* Size
* Edition
* Description
* Availability

### Orders

* View orders
* View customer information
* View ordered artworks
* View total
* Update order status

### Dashboard

Possible real metrics:

* Total artworks
* Orders
* Revenue
* Visitors

No fake metrics are permitted.

---

# 26. Backend Rules

Backend development occurs after frontend stabilization.

Expected architecture:

`Frontend → Next.js server/API layer → Supabase`

Potential database tables:

* `artworks`
* `orders`
* `admin_users`
* `site_settings`
* Visitor/analytics tables only if there is a genuine requirement and reliable data source

Potential storage:

* Supabase Storage

Authentication:

* Supabase Auth

---

# 27. Security Rules

Production backend must:

* Require authentication for admin operations
* Configure Row Level Security correctly
* Keep service-role keys server-side
* Never expose service-role credentials to the browser
* Validate user input
* Validate uploaded files
* Validate order contents
* Calculate order totals server-side
* Verify artwork availability server-side
* Never trust client-provided prices
* Restrict administrative operations appropriately

Security decisions must be documented before implementation.

---

# 28. Environment Variables

Secrets and configuration must use environment variables.

Never commit:

* Supabase service-role keys
* Private credentials
* Authentication secrets
* Sensitive production configuration

Public configuration may use appropriate `NEXT_PUBLIC_` variables when genuinely required.

---

# 29. Component Architecture

Components should be:

* Small enough to understand
* Reusable where reuse is meaningful
* Named clearly
* Responsible for one coherent concern

Avoid:

* Giant page components
* Giant universal components
* Excessive abstraction
* Repeated markup
* Unnecessary component fragmentation

Do not create abstractions merely because abstraction is possible.

---

# 30. CSS Architecture

CSS must remain deliberate and maintainable.

Avoid another massive legacy stylesheet.

Prefer:

* CSS variables/design tokens
* Clearly organized global styles
* Component-level styles where appropriate
* Reusable utility patterns only when useful
* Consistent spacing variables
* Consistent typography variables

Do not scatter arbitrary values throughout the project without reason.

---

# 31. Performance

The website should prioritize:

* Fast initial load
* Optimized images
* Minimal JavaScript
* Minimal dependencies
* Responsive interaction
* Good Core Web Vitals
* Smooth mobile performance

Prefer:

* `next/image`
* `next/font`
* Correct image sizing
* Responsive image loading
* Lazy loading where appropriate

Avoid unnecessarily large client-side bundles.

---

# 32. SEO

SEO will be implemented after the visual foundation is stable.

Eventually include:

* Page titles
* Meta descriptions
* Open Graph metadata
* Meaningful URLs
* Semantic HTML
* Image alt text
* Sitemap
* robots.txt
* Structured metadata where appropriate

SEO must not unnecessarily complicate the initial frontend build.

---

# 33. Accessibility

The production website should include:

* Semantic HTML
* Keyboard-friendly navigation
* Appropriate contrast
* Descriptive alt text
* Accessible buttons
* Accessible forms
* Visible focus states
* Reasonable motion preferences

Visual sophistication must never require poor usability.

---

# 34. Testing

Before backend integration, test:

### Desktop

* Home
* Gallery
* Artwork Detail
* About
* Commission
* Cart
* Checkout
* Order Success

### Mobile

All of the above.

Also test:

* Navigation
* Buttons
* Links
* Images
* Typography
* Spacing
* Overflow
* Scrolling
* Cart functionality
* Checkout flow
* Accessibility

After backend integration additionally test:

* Authentication
* Database
* CRUD
* Storage
* RLS
* Orders
* Order validation
* Admin permissions
* Security

---

# 35. Code Delivery Rules

When providing code:

1. Prefer complete files when practical.
2. Clearly state the file path.
3. Explain where the file belongs.
4. Explain important sections.
5. Do not assume advanced backend knowledge.
6. Avoid unexplained jargon.
7. Do not silently change unrelated files.
8. Do not introduce frameworks without justification.
9. Do not overwrite working functionality without explaining why.
10. Keep frontend and backend concerns separated.
11. Test the logic conceptually before moving forward.
12. Prefer stable solutions over clever solutions.

---

# 36. Architectural Change Rule

Before any major architectural change, explain:

1. What is changing.
2. Why it is necessary.
3. What files/components are affected.
4. What the benefit is.
5. What tradeoffs or risks exist.

Do not repeatedly restart the architecture without a concrete reason.

---

# 37. Project Documentation

The project maintains:

* `PROJECT_INSTRUCTIONS.md`
* `PRD.md`
* `DESIGN_SYSTEM.md`
* `SITE_ARCHITECTURE.md`
* `CONTENT.md`
* `DECISIONS.md`
* `CHANGELOG.md`

These documents should remain consistent with the actual implementation.

If an architectural decision changes, update the relevant documentation.

---

# 38. Decision Making

When multiple technically valid approaches exist:

1. Compare the relevant options briefly.
2. Identify the major tradeoff.
3. Recommend the option that best fits this project.
4. Document significant decisions.

Recommendations should prioritize:

* Simplicity
* Maintainability
* Performance
* Security
* User experience
* Vercel compatibility
* Beginner-friendly development

---

# 39. Old Project Policy

The previous Caffeine/Next.js/Supabase project is **not the foundation of this project**.

Its code should not be copied merely for convenience.

It may only be consulted for:

* Lessons learned
* Feature requirements
* Previous backend behavior
* Previous bugs that should be avoided

The new project should have a clean architecture.

---

# 40. Final Quality Standard

The website must not merely function.

It must feel like a real premium artist brand.

The final experience should communicate:

**Artist → Artwork → Atmosphere → Trust → Commission/Purchase**

rather than:

**Template → Cards → Product → Checkout**

Technology should disappear behind the experience.

---

# 41. Current Project Stage

**Current stage: Phase 0 — Project Foundation**

Completed:

* Master project specification
* Development philosophy
* Technical direction
* Design direction

Next:

1. Create `PRD.md`
2. Create `DESIGN_SYSTEM.md`
3. Create `SITE_ARCHITECTURE.md`
4. Create `CONTENT.md`
5. Create `DECISIONS.md`
6. Create `CHANGELOG.md`
7. Begin visual exploration
8. Only then create the Next.js project

**Do not begin Supabase development yet.**
