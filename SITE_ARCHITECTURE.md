# SITE ARCHITECTURE

## 1. Purpose

This document defines the technical architecture of the artistdipalisingh website.

The goal is to create a frontend architecture that is:

* simple
* maintainable
* responsive
* fast
* scalable
* easy to understand
* compatible with Vercel
* ready for a future Supabase backend

The project will be developed in stages.

The frontend will be completed and tested before introducing backend complexity.

---

# 2. Architecture Philosophy

The website should follow this principle:

> Keep the architecture as simple as possible until the project actually needs more complexity.

The current frontend should not contain unnecessary backend systems, authentication, databases, API routes, analytics systems, or third-party services.

The architecture should make it possible to add those systems later without rebuilding the entire website.

### Current priority

Frontend → visual quality → responsiveness → usability → performance → testing → backend

Not:

Frontend + database + authentication + admin + analytics + payment + everything simultaneously.

---

# 3. Current Development Stage

The current project is in:

**Phase 0: Planning and Architecture**

The next stages are:

1. Phase 0 — Documentation
2. Phase 1 — Visual exploration
3. Phase 2 — Frontend foundation
4. Phase 3 — Complete frontend
5. Phase 4 — Frontend testing
6. Phase 5 — Backend architecture
7. Phase 6 — Supabase implementation
8. Phase 7 — Frontend/backend integration
9. Phase 8 — Admin system
10. Phase 9 — Production testing and launch

### Important rule

Do not build backend features before they are required.

---

# 4. Technology Stack

## Frontend

* Next.js
* React
* TypeScript
* Next.js App Router
* CSS
* next/image
* next/font
* Vercel

## Future backend

* Next.js Server/API functionality where appropriate
* Supabase PostgreSQL
* Supabase Storage
* Supabase Auth

## Future deployment

* GitHub
* Vercel
* Supabase

The architecture should avoid technologies that lock the project into a specific platform.

---

# 5. High-Level Architecture

The application will eventually have four major layers.

## Layer 1: Presentation

Responsible for:

* pages
* layouts
* navigation
* artwork displays
* buttons
* forms
* responsive design
* animations
* visual presentation

Examples:

`app/`

`components/`

`globals.css`

---

## Layer 2: Local/Application Data

During frontend development, artwork and site content will come from local TypeScript data.

Examples:

`data/artworks.ts`

`data/site.ts`

This allows the complete frontend to be developed without a database.

---

## Layer 3: Application Logic

Reusable logic will live separately from visual components.

Examples:

* cart calculations
* formatting
* validation
* configuration
* future order handling

Examples:

`lib/`

---

## Layer 4: Backend

This will be introduced later.

It will eventually handle:

* artwork storage
* artwork management
* orders
* admin authentication
* image uploads
* database operations
* server-side validation
* analytics where required

Backend systems must never be mixed unnecessarily into presentational components.

---

# 6. Proposed Project Structure

The initial frontend structure should remain relatively small.

artistdipalisingh/

├── app/

│   ├── layout.tsx

│   ├── page.tsx

│   ├── globals.css

│   │

│   ├── shop/

│   │   └── page.tsx

│   │

│   ├── artwork/

│   │   └── [id]/

│   │       └── page.tsx

│   │

│   ├── about/

│   │   └── page.tsx

│   │

│   ├── commission/

│   │   └── page.tsx

│   │

│   ├── cart/

│   │   └── page.tsx

│   │

│   ├── checkout/

│   │   └── page.tsx

│   │

│   └── order-success/

│       └── page.tsx

│

├── components/

│   ├── layout/

│   ├── navigation/

│   ├── artwork/

│   ├── home/

│   ├── commission/

│   ├── checkout/

│   ├── cart/

│   ├── ui/

│   └── providers/

│

├── data/

│   ├── artworks.ts

│   └── site.ts

│

├── lib/

│   ├── types.ts

│   ├── utils.ts

│   └── config.ts

│

├── public/

│   └── images/

│

├── PROJECT_INSTRUCTIONS.md

├── PRD.md

├── DESIGN_SYSTEM.md

├── SITE_ARCHITECTURE.md

└── package.json

This structure is intentionally small.

New folders should only be created when they solve a real problem.

---

# 7. App Router Structure

Next.js App Router will define the public URL structure.

## Home

`/`

File:

`app/page.tsx`

Purpose:

* brand introduction
* featured artwork
* artist introduction
* commission invitation
* selected visual sections
* social/contact direction

---

## Shop / Gallery

`/shop`

File:

`app/shop/page.tsx`

Purpose:

* browse artwork
* filtering where required
* artwork previews
* artwork availability
* navigation to artwork details

---

## Artwork Detail

`/artwork/[id]`

File:

`app/artwork/[id]/page.tsx`

Purpose:

* artwork image
* title
* artist
* price
* medium
* dimensions
* edition
* description
* availability
* add to cart
* commission/custom artwork direction where relevant

The dynamic `[id]` route allows each artwork to have its own page.

---

## About

`/about`

File:

`app/about/page.tsx`

Purpose:

* artist introduction
* artistic approach
* verified information only
* social links

No biography details should be invented.

---

## Commission

`/commission`

File:

`app/commission/page.tsx`

Purpose:

* explain custom artwork requests
* show the request process
* provide artwork inspiration
* direct visitors to WhatsApp

The actual WhatsApp number/link must be supplied before production.

---

## Cart

`/cart`

File:

`app/cart/page.tsx`

Purpose:

* display selected artworks
* change quantity where applicable
* remove artwork
* calculate subtotal
* continue to checkout

---

## Checkout

`/checkout`

File:

`app/checkout/page.tsx`

Purpose:

* collect customer information
* collect delivery information
* display order summary
* provide COD checkout

During frontend development this will be a mock checkout.

It must not pretend that a real order has been created.

---

## Order Success

`/order-success`

File:

`app/order-success/page.tsx`

Purpose:

* display successful mock order information during frontend development
* provide next navigation options

The production version will receive real order information from the backend.

---

# 8. Component Architecture

Pages should not become giant files containing every visual element.

Reusable UI should be moved into components.

## Layout components

Examples:

* `Header`
* `Footer`
* `PageContainer`
* `Section`
* `MobileNavigation`

Location:

`components/layout/`

---

## Navigation components

Examples:

* `DesktopNav`
* `MobileMenu`
* `NavLinks`

Location:

`components/navigation/`

---

## Artwork components

Examples:

* `ArtworkCard`
* `ArtworkGrid`
* `ArtworkImage`
* `ArtworkMeta`
* `ArtworkPrice`
* `ArtworkAvailability`
* `ArtworkGallery`

Location:

`components/artwork/`

These components should be reusable across the homepage, shop, and artwork detail pages.

---

## Home components

Examples:

* `Hero`
* `FeaturedWorks`
* `ArtistIntro`
* `CommissionPreview`
* `SocialPreview`

Location:

`components/home/`

Only create a component when the section has enough complexity or reuse to justify it.

---

## Cart components

Examples:

* `CartItem`
* `CartSummary`
* `EmptyCart`

Location:

`components/cart/`

---

## Checkout components

Examples:

* `CheckoutForm`
* `OrderSummary`
* `DeliveryForm`

Location:

`components/checkout/`

---

## UI components

Small reusable interface elements may live in:

`components/ui/`

Examples:

* buttons
* links
* separators
* labels
* loading indicators

Do not turn every HTML element into a component.

That creates architecture theatre rather than useful architecture.

---

# 9. Local Mock Data

During frontend development, the application will use local TypeScript data.

Primary file:

`data/artworks.ts`

The artwork model should contain fields such as:

* id
* title
* artist
* price
* category
* medium
* size
* edition
* description
* image
* availability

Example conceptual structure:

Artwork

* `id`: unique string
* `title`: artwork title
* `artist`: artist name
* `price`: numeric price
* `category`: artwork category
* `medium`: material/technique
* `size`: artwork dimensions
* `edition`: original/limited edition/etc.
* `description`: artwork description
* `image`: image path
* `availability`: availability status

The exact TypeScript interface should be defined separately in:

`lib/types.ts`

This prevents different parts of the application from inventing different artwork structures.

---

# 10. Site Configuration

Site-wide information should not be scattered throughout components.

Use:

`data/site.ts`

for content such as:

* artist name
* website/brand name
* WhatsApp configuration
* social media links
* navigation labels
* contact information when supplied

Example conceptual categories:

* site identity
* navigation
* contact
* social links

Actual artist information must only be added after it is provided or verified.

Placeholder links must never silently become fake production links.

---

# 11. Configuration and Environment Variables

Public configuration that is safe to expose may eventually use environment variables where appropriate.

Sensitive secrets must never be placed inside:

* React components
* public files
* client-side JavaScript
* GitHub repository
* `NEXT_PUBLIC_*` variables

Future environment variables may include:

* Supabase project URL
* Supabase public/anon key
* server-only Supabase service key
* other server-side credentials

The service-role key must remain server-side only.

The `.env.local` file must never be committed to GitHub.

An `.env.example` file may later document required variables without containing real secrets.

---

# 12. Server and Client Components

Next.js App Router supports both Server Components and Client Components.

The default should be:

> Use Server Components unless the component actually needs browser interactivity.

Server Components should handle:

* static page content
* artwork rendering
* layouts
* server-safe data access
* SEO-related page structure

Client Components should be used when required for:

* cart state
* localStorage
* menus
* interactive filters
* interactive forms
* animations requiring browser state
* other browser APIs

Do not add `"use client"` to entire pages simply because one small component needs interactivity.

Keep client-side JavaScript limited.

---

# 13. Cart Architecture

During the frontend phase, the cart will be client-side.

A simple React context/provider may manage:

* adding artwork
* removing artwork
* quantity
* subtotal
* clearing cart

LocalStorage may be used so the cart survives a browser refresh during development.

The cart is only a frontend simulation at this stage.

Later, the production checkout system will validate:

* artwork availability
* prices
* quantities
* order totals

on the server.

The browser must never be trusted as the source of truth for final order pricing.

---

# 14. Checkout Architecture

Frontend phase:

Customer enters:

* name
* phone
* address
* city
* state
* postal code
* optional notes

The frontend displays:

* selected artwork
* quantities
* subtotal
* delivery information
* total

The frontend then simulates order completion.

Production phase:

1. Customer submits checkout.
2. Server validates the submitted data.
3. Server retrieves current artwork information.
4. Server verifies availability.
5. Server calculates the final total.
6. Server creates the order.
7. Database stores the order.
8. Customer receives an order confirmation.
9. Admin can view the order.

Client-side totals are for display only.

---

# 15. Future Supabase Architecture

Supabase will be introduced only after the frontend is stable.

Future responsibilities:

## PostgreSQL

Stores structured application data.

Potential tables:

* `artworks`
* `orders`
* `order_items`
* `admin_users`
* `site_settings`

Additional tables should only be created when a real requirement exists.

---

# 16. Database Relationships

Conceptually:

`artworks`

↓

`order_items`

↓

`orders`

One order may contain multiple order items.

An order item references an artwork.

The artwork price should be captured appropriately for the order so that historical orders do not change when the artwork's current price changes.

The exact production schema will be finalized during Phase 5.

---

# 17. Authentication Architecture

Admin authentication will be implemented later using Supabase Auth.

The public website does not require user accounts for the initial product.

Admin access will be separate from normal visitor access.

The admin system must not rely only on hiding an admin URL.

Authentication and authorization must be enforced server-side.

---

# 18. Row Level Security

Supabase Row Level Security will be enabled where appropriate.

Public visitors may eventually be allowed to:

* read publicly available artwork information

Public visitors should not be allowed to:

* modify artwork
* delete artwork
* access admin information
* modify orders
* access private customer information

Admin operations require authenticated and authorized access.

Security rules will be designed during the backend phase rather than guessed during frontend development.

---

# 19. Image Storage Architecture

During frontend development:

Artwork images may be stored locally in:

`public/images/`

Example:

`public/images/artwork-name.jpg`

Later:

Supabase Storage will hold production artwork images.

The database will store the appropriate image path/reference.

Images should be optimized before production.

Next.js `next/image` should be used for artwork where practical.

Artwork proportions should be preserved.

The website should never aggressively crop artwork merely to make a grid look uniform.

---

# 20. Font Architecture

Typography will use the selected display and body font direction from `DESIGN_SYSTEM.md`.

Preferred implementation:

`next/font`

This provides optimized font loading and avoids unnecessary external font-loading code.

Fonts should not be manually loaded through random CSS URLs unless there is a specific reason.

---

# 21. Styling Architecture

The project will primarily use:

* CSS
* CSS custom properties
* component classes
* responsive media queries

Global design tokens should live in:

`app/globals.css`

Examples:

* colors
* typography variables
* spacing
* borders
* transitions
* layout values

The design system should be implemented consistently instead of creating slightly different values for every component.

---

# 22. Responsive Architecture

The website will be designed for:

* mobile
* tablet
* laptop
* desktop
* large desktop screens

Mobile is not simply the desktop layout stacked vertically.

Important mobile considerations:

* navigation
* artwork proportions
* typography
* spacing
* touch targets
* cart controls
* checkout forms
* image loading
* horizontal overflow

The layout should be tested at multiple viewport sizes before backend development begins.

---

# 23. Animation Architecture

Animation should remain CSS-first where possible.

Preferred techniques:

* opacity transitions
* transform
* scale
* underline transitions
* subtle reveals

Avoid adding animation libraries unless the project actually requires them.

Animation should never:

* delay essential content
* create layout instability
* interfere with navigation
* make the website difficult to use
* become the main visual attraction

The artwork remains the attraction.

---

# 24. Backend/API Architecture

No API routes are required during the initial frontend stage unless a specific frontend requirement genuinely needs one.

Later, server/API functionality may be organized under:

`app/api/`

Potential future routes:

`app/api/artworks/`

`app/api/orders/`

`app/api/admin/`

However, API routes should not be created simply because the folder exists.

The backend should expose only the operations actually required by the application.

---

# 25. Separation of Responsibilities

The following separation should be maintained:

### Pages

Responsible for:

* page composition
* route-level metadata
* connecting major sections

### Components

Responsible for:

* visual presentation
* reusable interaction

### Data

Responsible for:

* local mock content
* site configuration

### Lib

Responsible for:

* shared logic
* types
* utilities
* future service logic

### API/Server

Responsible for:

* trusted operations
* database access
* validation
* authentication
* sensitive logic

This separation makes future changes safer.

---

# 26. Testing Architecture

Testing will happen in stages.

## Frontend testing

Check:

* all routes
* navigation
* buttons
* artwork images
* typography
* spacing
* responsive behavior
* cart
* checkout
* forms
* links
* mobile layout
* desktop layout
* keyboard navigation
* focus states
* reduced motion
* image loading
* broken states

## Backend testing

Later check:

* authentication
* database permissions
* RLS
* artwork CRUD
* image uploads
* order creation
* server-side pricing
* order validation
* unauthorized access
* invalid input
* admin permissions

---

# 27. Deployment Architecture

Development flow:

GitHub repository

↓

Next.js application

↓

Vercel deployment

Later:

Next.js/Vercel

↓

Supabase

Production architecture:

Visitor

↓

Vercel / Next.js

↓

Public website

↓

Server-side application logic

↓

Supabase PostgreSQL / Storage / Auth

Sensitive credentials remain server-side.

---

# 28. Dependency Rules

Before adding a package, ask:

1. Is it actually necessary?
2. Can Next.js already do this?
3. Can CSS solve it?
4. Can a small reusable function solve it?
5. Does the dependency increase bundle size?
6. Does it create unnecessary maintenance?
7. Does it create platform lock-in?

A dependency should be added because it solves a real problem, not because a tutorial used it.

---

# 29. Architectural Change Rules

Before changing the architecture:

1. Identify the problem.
2. Determine whether the current architecture can solve it.
3. Consider the simplest solution.
4. Check whether the change affects existing routes/components.
5. Update documentation if the architectural decision is significant.
6. Test the affected area.

Large architectural changes should not be made casually after implementation has started.

---

# 30. Things NOT to Build Yet

The following are intentionally postponed:

* Supabase database
* Supabase Storage
* Supabase Auth
* admin dashboard
* real analytics
* production order API
* payment gateway
* advanced search backend
* complex recommendation system
* unnecessary state-management libraries
* unnecessary animation libraries
* unnecessary UI libraries

These may be introduced later when the requirements justify them.

---

# 31. Frontend-First Boundary

The frontend phase should prove that the following work correctly before backend development begins:

* visual identity
* navigation
* all public routes
* artwork browsing
* artwork detail pages
* commission page
* cart
* checkout UI
* order-success UI
* responsive behavior
* typography
* image treatment
* accessibility basics
* performance basics

Only after these are stable should backend implementation begin.

---

# 32. Future Backend Boundary

Backend development begins when:

* frontend structure is stable
* artwork data model is stable
* checkout requirements are clear
* admin requirements are clear
* database relationships are understood
* security requirements are documented

At that point, local mock data can be replaced gradually with Supabase-backed data.

The frontend should not need a complete redesign simply because the data source changes.

---

# 33. Architecture Principle

The final architecture should follow this rule:

> Simple on the surface, structured underneath, and only as complex as the actual requirements demand.

The website should feel sophisticated to visitors without requiring an unnecessarily sophisticated codebase.

The technical architecture exists to support the artwork, artist, customer experience, and business.

It should never become the product itself.

---

# 34. Current Implementation Rule

At the current stage:

DO:

* complete documentation
* establish visual direction
* prepare frontend architecture
* use local mock data
* keep components reusable
* keep the project simple

DO NOT:

* connect Supabase
* create admin authentication
* create production API routes
* build database tables
* add payment systems
* build fake analytics
* add unnecessary dependencies

The next implementation phase begins only after the required Phase 0 documentation is complete.
