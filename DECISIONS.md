# DECISIONS

## 1. Purpose

This document records important decisions made during the development of the artistdipalisingh website.

The purpose is to:

* preserve architectural reasoning
* prevent unnecessary reversals
* keep development consistent
* document important trade-offs
* make future changes easier to understand

Not every small coding decision belongs here.

This document is for decisions that materially affect the project.

---

# 2. Project Identity

### Decision

The website is being built specifically for one artist:

**Dipali Singh**

Brand / website name:

**artistdipalisingh**

### Reason

The website is intended to represent the artist as an individual creative brand rather than a multi-vendor marketplace or generic art platform.

### Status

Accepted.

---

# 3. Frontend-First Development

### Decision

The project will be developed frontend-first.

The visual experience and public pages will be completed before implementing the production backend.

### Reason

The website's primary challenge is creating a strong artistic presentation and user experience.

Building the database and admin system before the frontend is stable would add complexity before the actual requirements are proven.

### Status

Accepted.

---

# 4. Next.js App Router

### Decision

The project will use Next.js with the App Router.

### Reason

The App Router provides:

* file-based routing
* Server Components
* Client Components where required
* layouts
* metadata support
* server-side functionality
* Vercel compatibility

It also provides a clean path from the frontend stage to the future backend stage.

### Status

Accepted.

---

# 5. TypeScript

### Decision

The project will use TypeScript.

### Reason

The website contains structured information such as artwork, cart items, orders, and configuration.

TypeScript can help detect incorrect data structures before they become runtime problems.

### Status

Accepted.

---

# 6. Local Mock Data Before Database

### Decision

Frontend development will initially use local TypeScript mock data.

Primary artwork data will live in:

`data/artworks.ts`

### Reason

This allows the frontend to be built and tested without:

* Supabase
* database configuration
* authentication
* API routes
* storage configuration

The frontend can later be connected to Supabase without redesigning the public UI.

### Status

Accepted.

---

# 7. Supabase For Future Backend

### Decision

Supabase will be used for the production backend after the frontend is stable.

Potential responsibilities:

* PostgreSQL database
* artwork data
* orders
* authentication
* image storage
* future backend functionality

### Reason

Supabase provides the required database, storage, and authentication capabilities while working well with a Next.js/Vercel architecture.

### Status

Accepted for future implementation.

---

# 8. No Supabase During Initial Frontend Phase

### Decision

Supabase will not be connected during the initial frontend implementation.

### Reason

The project does not need a database to prove the visual experience.

Introducing Supabase too early would increase setup and debugging complexity.

### Status

Accepted.

---

# 9. Vercel Deployment

### Decision

Vercel will be the primary deployment platform.

### Reason

The project uses Next.js and should have a straightforward deployment workflow through GitHub and Vercel.

### Status

Accepted.

---

# 10. GitHub As Source Repository

### Decision

The entire project will live in one GitHub repository:

`artistdipalisingh`

### Reason

Using one repository keeps:

* source code
* documentation
* version history
* frontend
* future backend

together.

### Status

Accepted.

---

# 11. No Reuse Of The Old Art Website Architecture

### Decision

The new artistdipalisingh project will not reuse the previous project's messy frontend architecture or CSS.

### Reason

The new website has a different design direction and a cleaner technical starting point is preferable.

Lessons from the previous project may be used.

Code and architectural clutter should not be copied.

### Status

Accepted.

---

# 12. Design Direction

### Decision

The website will follow a high-end contemporary editorial art direction.

The experience should combine:

* contemporary gallery
* editorial art magazine
* private artist studio
* high-end fashion/editorial visual language

### Reason

The goal is to create an experience centered around the artwork rather than a conventional ecommerce storefront.

### Status

Accepted.

---

# 13. Visual Restraint

### Decision

The design will avoid unnecessary visual effects.

Avoid:

* excessive shadows
* glassmorphism
* neon gradients
* excessive rounded cards
* gimmicky cursor effects
* excessive animation
* childish decorative elements
* excessive gold
* generic ecommerce layouts

### Reason

These patterns can reduce the perceived sophistication of the artwork and make the website look like a template.

### Status

Accepted.

---

# 14. Artwork Is The Primary Visual Element

### Decision

Artwork should receive the strongest visual emphasis.

### Reason

The website exists to present and sell the artist's work.

Interface elements should support the artwork instead of competing with it.

### Status

Accepted.

---

# 15. Artwork Cropping

### Decision

Artwork should not be aggressively cropped simply to create uniform card dimensions.

### Reason

Artwork composition is more important than forcing every image into the same shape.

Images should preserve their intended proportions wherever possible.

### Status

Accepted.

---

# 16. Typography

### Decision

The design will use a high-contrast editorial serif for display typography and a clean sans-serif for interface/body text.

Initial direction:

Display:

**Bodoni Moda**

Body/UI:

**Hanken Grotesk**

### Reason

The combination supports the intended contemporary editorial aesthetic.

Final font implementation may change if licensing, performance, or visual testing provides a strong reason.

### Status

Accepted.

---

# 17. Color Direction

### Decision

The primary visual palette will use:

* warm ivory
* soft cream
* deep charcoal
* soft black
* blush rose
* dusty rose
* muted mauve
* pale champagne

Gold will be used extremely sparingly.

### Reason

The palette creates warmth and sophistication without relying on the common black-and-gold luxury template.

### Status

Accepted.

---

# 18. CSS-First Styling

### Decision

The project will primarily use CSS rather than introducing a large UI component framework.

### Reason

The website requires a highly customized visual identity.

A large UI framework may introduce unnecessary styling constraints and dependencies.

### Status

Accepted.

---

# 19. Minimal Dependencies

### Decision

New npm packages should only be added when there is a real requirement.

### Reason

Every dependency adds:

* maintenance
* bundle weight
* potential conflicts
* security considerations
* upgrade work

Native Next.js, React, and CSS capabilities should be preferred when sufficient.

### Status

Accepted.

---

# 20. Server Components By Default

### Decision

Next.js Server Components will be preferred by default.

Client Components will be introduced only where browser-side interactivity is actually required.

### Reason

This keeps client-side JavaScript smaller and preserves the benefits of the App Router architecture.

### Status

Accepted.

---

# 21. Cart During Frontend Development

### Decision

The frontend cart will initially be client-side.

A simple React-based state solution may be used.

LocalStorage may be used to preserve cart state between page refreshes.

### Reason

A database is unnecessary for proving the cart experience during frontend development.

### Important limitation

The frontend cart is not the trusted source of order information.

Production checkout will revalidate the cart on the server.

### Status

Accepted.

---

# 22. Mock Checkout

### Decision

Checkout will initially operate as a frontend simulation.

### Reason

The purpose of the frontend phase is to build and test the customer experience.

No real order should be created until the backend exists.

### Important rule

The UI must not falsely claim that a real order was created during development.

### Status

Accepted.

---

# 23. Cash On Delivery

### Decision

Cash on Delivery will be the initial checkout payment method.

### Reason

COD is part of the initial product requirements and avoids introducing payment gateway complexity during the MVP stage.

### Status

Accepted.

---

# 24. WhatsApp For Commission Requests

### Decision

Commission/custom artwork inquiries will be directed toward WhatsApp.

### Reason

The artist accepts custom/on-demand artwork requests and WhatsApp provides a direct communication channel.

### Important rule

The actual WhatsApp link must be supplied before production.

No fake number or placeholder URL should be deployed.

### Status

Accepted.

---

# 25. Social Media Links

### Decision

The website will display official artist social accounts once the actual links are supplied.

### Reason

Social profiles can provide additional artwork visibility and artist discovery.

### Important rule

No social usernames or URLs will be invented.

### Status

Accepted.

---

# 26. No Invented Artist Information

### Decision

The website will not invent biographical or professional information.

### This includes

* awards
* exhibitions
* galleries
* education
* clients
* years of experience
* location
* testimonials
* achievements
* press mentions

### Reason

The website represents a real artist.

Fictional credibility is still fiction, regardless of how expensive the typography looks.

### Status

Accepted.

---

# 27. Admin System Delayed

### Decision

The admin dashboard will be implemented after the public website and backend foundations are stable.

### Reason

The public customer experience is the immediate priority.

Building an admin dashboard before the data model and workflows are stable would create unnecessary rework.

### Status

Accepted.

---

# 28. Real Analytics Only

### Decision

The production admin dashboard must use real data.

### Reason

Fake metrics create a misleading business dashboard.

Development mock metrics may be used temporarily but must be clearly identified as mock data.

### Status

Accepted.

---

# 29. Server-Side Price Validation

### Decision

Production orders will calculate and validate prices on the server.

### Reason

The browser cannot be trusted to determine the final price of an order.

A customer could modify client-side values.

### Status

Accepted for backend phase.

---

# 30. Database Security

### Decision

Supabase Row Level Security will be used where appropriate.

### Reason

Public and admin operations require different permissions.

Visitors should not be able to modify protected data simply because an endpoint exists.

### Status

Accepted for backend phase.

---

# 31. Service Role Key

### Decision

The Supabase service-role key must never be exposed to the browser.

### Reason

The service-role key has elevated permissions and must remain server-side.

### Status

Accepted.

---

# 32. SEO After Core UI

### Decision

SEO optimization will be completed after the main page structure and visual system are stable.

### Reason

SEO metadata depends on finalized routes, content, artwork structure, and page hierarchy.

### Status

Accepted.

---

# 33. Accessibility

### Decision

Accessibility is part of the architecture rather than a final optional polish step.

The project will consider:

* semantic HTML
* keyboard navigation
* focus states
* accessible forms
* sufficient contrast
* useful alt text
* reduced motion
* touch-friendly controls

### Reason

A premium website should also be usable.

### Status

Accepted.

---

# 34. Performance

### Decision

Performance will be treated as a design constraint.

Priorities:

* optimized images
* limited client-side JavaScript
* appropriate font loading
* minimal dependencies
* stable layouts
* responsive images

### Reason

Large artwork images can easily become one of the biggest performance problems on an art website.

### Status

Accepted.

---

# 35. Mobile-First Thinking

### Decision

Mobile will be deliberately designed rather than treated as a smaller desktop version.

### Reason

Visitors may discover artwork through mobile social platforms.

The mobile experience must therefore be treated as a primary experience.

### Status

Accepted.

---

# 36. Documentation

### Decision

Important project documentation will remain inside the repository.

Current documentation:

* `PROJECT_INSTRUCTIONS.md`
* `PRD.md`
* `DESIGN_SYSTEM.md`
* `SITE_ARCHITECTURE.md`
* `CONTENT.md`
* `DECISIONS.md`
* `CHANGELOG.md`

### Reason

Documentation preserves project context and reduces accidental architectural drift.

### Status

Accepted.

---

# 37. Architecture Change Process

When a major decision needs to change:

1. identify the problem
2. explain the reason for the change
3. evaluate alternatives
4. choose the simplest suitable solution
5. update this document
6. update related documentation
7. record the change in `CHANGELOG.md`

### Status

Accepted.

---

# 38. Current Decisions Summary

At the current stage:

### Confirmed

* Next.js
* React
* TypeScript
* App Router
* CSS-first styling
* Vercel
* GitHub
* local mock data
* frontend-first development
* editorial art direction
* mobile-first thinking
* COD as initial payment method
* WhatsApp for commission inquiries

### Future

* Supabase
* PostgreSQL
* Supabase Storage
* Supabase Auth
* production orders
* admin dashboard
* real analytics
* backend APIs

### Not currently planned

* unnecessary UI frameworks
* unnecessary animation libraries
* fake analytics
* fake testimonials
* invented artist credentials
* premature backend complexity

---

# 39. Decision Principle

The central architectural principle is:

> Prefer the simplest solution that satisfies the real requirement without limiting future growth.

A decision should improve one or more of:

* user experience
* maintainability
* security
* performance
* scalability
* development clarity

If it does none of these, it probably does not belong in the project.
