# artistdipalisingh — Product Requirements Document

## 1. Product Overview

**Product name:** artistdipalisingh
**Artist:** Dipali Singh
**Product type:** Single-artist art gallery and e-commerce website

The website will present Dipali Singh's artwork through a premium digital gallery experience while allowing visitors to purchase available artwork and contact the artist for commissioned/custom artwork.

The website is not a marketplace and does not represent multiple artists.

---

# 2. Product Vision

Create a digital experience that feels closer to entering a contemporary artist's private gallery than visiting a conventional online store.

The website should combine:

* Contemporary art gallery
* Editorial art publication
* Artist portfolio
* Private studio atmosphere
* E-commerce functionality

The technology should remain secondary to the artistic experience.

---

# 3. Primary Goals

## Goal 1 — Present the Artwork

Visitors should immediately understand that the artwork is the primary focus of the website.

The interface must give artwork enough:

* Space
* Scale
* Visual prominence
* Context
* Detail

to feel like an exhibition rather than a product catalog.

---

## Goal 2 — Establish the Artist's Brand

The website should communicate:

* Who Dipali Singh is
* Her artistic identity
* Her creative approach
* Her work
* Her studio/process where information and imagery are available

Only verified information should be used.

---

## Goal 3 — Enable Artwork Purchases

Visitors should eventually be able to:

1. Discover artwork
2. Open artwork details
3. Understand the artwork
4. Check availability
5. Add artwork to cart
6. Proceed to checkout
7. Provide delivery information
8. Select Cash on Delivery where available
9. Place an order
10. Receive confirmation

---

## Goal 4 — Generate Commission Requests

Visitors should be able to discover that Dipali Singh accepts:

* Custom artwork
* Commissioned artwork
* On-demand artwork

The primary conversion path should be:

**Discover → Understand → Request → WhatsApp**

The commission experience should feel personal rather than transactional.

---

## Goal 5 — Build Trust

The website should provide enough information for visitors to feel confident about:

* The artist
* The artwork
* The purchase process
* The commission process
* Contacting the artist

Trust should come from clarity and authenticity, not invented testimonials or fabricated credentials.

---

# 4. Target Users

## User Type 1 — Art Buyer

A visitor interested in purchasing an existing artwork.

Typical journey:

Home
↓
Selected Artwork
↓
Artwork Detail
↓
Add to Cart
↓
Checkout
↓
Order Confirmation

---

## User Type 2 — Commission Client

A visitor who wants a personalized artwork.

Typical journey:

Home
↓
Custom Artwork
↓
Commission Information
↓
Request a Custom Artwork
↓
WhatsApp
↓
Discussion with Artist

---

## User Type 3 — Art Explorer

A visitor primarily interested in viewing the artist's work.

Typical journey:

Home
↓
Gallery
↓
Artwork Detail
↓
About Artist
↓
Social Media

This visitor may never purchase anything.

The website must therefore work as an art experience even without commerce.

---

## User Type 4 — Returning Visitor

A visitor who already knows the artist and wants to:

* View new artwork
* Purchase a piece
* Contact the artist
* Explore social media
* Request a commission

The site should make these actions easy without forcing the user through unnecessary steps.

---

# 5. Core User Journeys

## Journey A — Discover Artwork

1. Visitor enters homepage.
2. Hero establishes artist identity.
3. Visitor sees selected artwork.
4. Visitor opens Gallery.
5. Visitor explores artwork.
6. Visitor opens an artwork detail page.

Success condition:

The visitor can move naturally from visual discovery to detailed artwork information.

---

## Journey B — Purchase Artwork

1. Visitor discovers artwork.
2. Opens artwork detail.
3. Reviews:

   * Title
   * Price
   * Medium
   * Size
   * Edition/original status
   * Description
   * Availability
4. Adds artwork to cart.
5. Opens cart.
6. Reviews order.
7. Proceeds to checkout.
8. Enters customer and delivery information.
9. Selects available payment method.
10. Places order.
11. Receives order confirmation and order ID.

---

## Journey C — Request Custom Artwork

1. Visitor sees custom artwork section.
2. Opens Commission page.
3. Learns about the commission process.
4. Understands that the artist handles custom requests personally.
5. Clicks Request a Custom Artwork.
6. WhatsApp opens.
7. Visitor discusses requirements directly with the artist.

The website should not create unnecessary friction between the visitor and artist.

---

## Journey D — Learn About Artist

1. Visitor opens About.
2. Reads verified artist information.
3. Views artistic process/content where available.
4. Visits social media if desired.
5. Returns to artwork or commission journey.

---

# 6. Information Architecture

Initial public structure:

Home
`/`

Gallery
`/shop`

Artwork
`/artwork/[id]`

About
`/about`

Commission
`/commission`

Cart
`/cart`

Checkout
`/checkout`

Order Success
`/order-success`

Admin will be developed later and may use a separate route structure.

---

# 7. Homepage Requirements

The homepage must establish the visual identity immediately.

## Section 1 — Hero

Purpose:

* Introduce artist
* Establish atmosphere
* Present a strong artwork or artistic image
* Provide primary navigation toward artwork

Potential content:

* Artist name
* Short verified statement
* Selected artwork
* Gallery CTA
* Commission CTA

Exact copy will be defined later in `CONTENT.md`.

---

## Section 2 — Selected Works

Display a curated selection of artwork.

Requirements:

* Strong visual hierarchy
* Varied image presentation
* Artwork titles
* Appropriate metadata
* Links to detail pages

Avoid turning this into a repetitive card grid.

---

## Section 3 — Artist Introduction

Brief introduction to Dipali Singh.

Purpose:

* Establish human connection
* Encourage visitors to explore About
* Reinforce artistic identity

Only verified information may be used.

---

## Section 4 — Custom Artwork

Introduce commissioned/on-demand artwork.

Primary CTA:

**Request a Custom Artwork**

The CTA should eventually open WhatsApp.

---

## Section 5 — Studio / Process

Optional section depending on available real content.

Possible content:

* Studio imagery
* Work-in-progress images
* Process photographs
* Short verified statements

No fabricated studio stories.

---

## Section 6 — Featured Artwork

A larger editorial artwork presentation may be used.

Purpose:

Create a strong visual pause and highlight a significant piece.

---

## Section 7 — Social Presence

Introduce the artist's actual social platforms.

Only verified links may be used.

---

## Section 8 — Final CTA

Possible actions:

* Explore Artwork
* Request Custom Artwork

The final CTA should be visually strong but restrained.

---

# 8. Gallery / Shop Requirements

The Gallery must function as both:

**Art exhibition**

and

**Artwork catalog**

Visitors should be able to:

* Browse artworks
* Open artwork details
* See title
* See price where appropriate
* See category
* Identify availability

Potential future filtering:

* Category
* Medium
* Availability
* Price

Filtering should only be added if the number of artworks justifies it.

Do not create complicated filters for a small collection.

---

# 9. Artwork Detail Requirements

Every artwork detail page should provide enough information for a visitor to understand and evaluate the work.

Required information:

* Artwork image
* Title
* Artist
* Price
* Category
* Medium
* Size
* Edition/original status
* Description
* Availability

Purchase functionality:

* Add to Cart
* Purchase CTA where appropriate

Potential future content:

* Artwork story
* Additional images
* Close-up
* Related works

---

# 10. Cart Requirements

The cart should allow visitors to:

* View selected artwork
* View quantity
* Remove artwork
* Change quantity where applicable
* View subtotal
* Continue shopping
* Proceed to checkout

The cart must handle empty-cart state clearly.

The design should remain consistent with the editorial visual language.

It should not suddenly look like a generic shopping cart application.

---

# 11. Checkout Requirements

The initial checkout should support Cash on Delivery where applicable.

Potential customer fields:

* Name
* Phone
* Email
* Address
* City
* State
* Pincode

Order information:

* Artwork items
* Quantities
* Subtotal
* Final total
* Payment method

Validation should eventually occur both client-side and server-side.

The server must not trust totals or prices sent by the browser.

---

# 12. Order Success Requirements

After successful order creation, display:

* Confirmation message
* Order ID
* Order summary
* Relevant next steps
* Contact option

The page should reassure the visitor that their order was successfully recorded without unnecessary visual clutter.

---

# 13. Commission Page Requirements

The commission page is a major conversion page.

It should explain:

* That custom artwork is available
* What the visitor can discuss with the artist
* How the process works
* How to contact the artist

Possible process structure:

### 01 — Share Your Idea

Visitor explains what they want.

### 02 — Discuss the Artwork

Artist and client discuss requirements, style, size, etc.

### 03 — Create

The artist produces the commissioned artwork.

### 04 — Complete

Final details and delivery are arranged.

These descriptions must eventually be adapted to the artist's actual process.

Do not claim specific timelines, pricing, materials, or procedures until verified.

Primary CTA:

**Request a Custom Artwork**

---

# 14. About Page Requirements

The About page should feel editorial rather than like a résumé.

Potential sections:

* Artist introduction
* Artistic philosophy
* Background
* Creative process
* Artistic interests
* Studio imagery
* Social links

Content must come from verified artist information.

---

# 15. Navigation Requirements

Navigation should remain minimal.

Potential primary navigation:

* Home
* Gallery
* About
* Commission
* Cart

The exact navigation can change during visual exploration.

Requirements:

* Clear
* Responsive
* Keyboard accessible
* Mobile-friendly
* Visually consistent
* Easy to understand

Avoid excessive navigation links.

---

# 16. Footer Requirements

Footer may include:

* Artist/brand name
* Short verified statement
* Navigation
* Social links
* Commission CTA
* WhatsApp contact
* Copyright information

Only real contact/social information may appear in production.

---

# 17. Content Requirements

The website must never invent artist information.

Forbidden without verified source:

* Awards
* Exhibitions
* Education
* Qualifications
* Galleries
* Clients
* Locations
* Years of experience
* Achievements
* Testimonials
* Reviews
* Social accounts
* Contact information

Development placeholders must be clearly marked.

---

# 18. Artwork Data Requirements

Initial local mock artwork objects should support fields such as:

* `id`
* `title`
* `artist`
* `price`
* `category`
* `medium`
* `size`
* `edition`
* `description`
* `image`
* `available`

Additional fields may be added if required by the design.

The structure should remain compatible with the future Supabase database.

---

# 19. Backend Requirements

Backend is intentionally excluded from the initial frontend phase.

Later backend requirements include:

### Artwork

* Create
* Read
* Update
* Delete
* Image upload
* Availability

### Orders

* Create
* Read
* Update status

### Admin

* Authentication
* Authorization

### Storage

* Artwork image storage

### Database

* PostgreSQL via Supabase

---

# 20. Admin Requirements

Admin is a later-phase feature.

The admin system should eventually provide:

### Dashboard

Only genuine data:

* Artwork count
* Orders
* Revenue
* Visitors if real analytics exist

### Artwork Management

* Create artwork
* Edit artwork
* Delete artwork
* Upload image
* Update metadata
* Update availability

### Order Management

* View orders
* View customer details
* View ordered artworks
* View total
* Update order status

---

# 21. Analytics Requirements

Analytics should not be simulated.

If visitor statistics are eventually displayed, there must be a real data source.

Possible future implementation may track:

* Page views
* Artwork views
* Unique visitors where technically appropriate
* Conversion events

Analytics implementation should occur only after the core website is stable.

---

# 22. SEO Requirements

Eventually implement:

* Page titles
* Meta descriptions
* Open Graph metadata
* Semantic URLs
* Alt text
* Sitemap
* robots.txt
* Structured data where appropriate

SEO is a later implementation phase.

---

# 23. Accessibility Requirements

The final product should support:

* Semantic HTML
* Keyboard navigation
* Focus states
* Accessible forms
* Descriptive image alt text
* Appropriate contrast
* Reduced-motion considerations

Accessibility must be considered during development rather than added as an afterthought.

---

# 24. Performance Requirements

The website should prioritize:

* Fast page loading
* Optimized artwork images
* Responsive image delivery
* Minimal JavaScript
* Minimal dependencies
* Good mobile performance
* Good Core Web Vitals

Large artwork files must be optimized appropriately.

---

# 25. Responsive Requirements

All public pages must be designed and tested for:

* Desktop
* Tablet
* Mobile

Mobile layouts may use different compositions instead of simply stacking desktop elements.

Important mobile requirements:

* Navigation must remain usable
* Artwork must remain visually dominant
* Text must remain readable
* CTAs must be easy to tap
* No horizontal overflow
* Cart and checkout must remain usable

---

# 26. Frontend-First Requirement

Before backend integration, the following must work using local data:

* Home
* Gallery
* Artwork detail
* About
* Commission
* Cart
* Checkout
* Order success

The frontend should be visually stable before Supabase is introduced.

---

# 27. Testing Requirements

## Functional testing

Verify:

* Navigation
* Artwork links
* Cart
* Add/remove artwork
* Quantity behavior
* Checkout
* Form validation
* Empty states
* Commission CTA
* Social links

## Responsive testing

Verify:

* Desktop
* Tablet
* Mobile

## Visual testing

Verify:

* Typography
* Spacing
* Artwork proportions
* Image quality
* Layout consistency
* Hover states
* Focus states
* Animations

## Performance testing

Verify:

* Image loading
* Initial page load
* JavaScript usage
* Mobile performance

---

# 28. Success Criteria

The project will be considered successful when:

### Brand

The site clearly feels like a premium artist brand.

### Artwork

Artwork remains the visual focus.

### Experience

Visitors can explore naturally without feeling like they are navigating a generic store.

### Commerce

Visitors can purchase available artwork through a clear flow.

### Commission

Visitors can easily contact the artist for custom artwork.

### Technology

The site is fast, responsive, maintainable and deployable on Vercel.

### Content

No unverified artist information is presented as fact.

### Architecture

Frontend and backend remain cleanly separated.

---

# 29. MVP Definition

The first frontend MVP consists of:

* Home
* Gallery
* Artwork detail
* About
* Commission
* Cart
* Checkout
* Order success
* Responsive design
* Local artwork data
* Working frontend interactions

The first MVP does **not** require:

* Supabase
* Authentication
* Admin dashboard
* Real image uploads
* Payment gateway
* Analytics dashboard
* Production order database

These belong to later phases.

---

# 30. Future Enhancements

Possible future features:

* Payment gateway
* Wishlist
* Advanced artwork filtering
* Related artwork recommendations
* Artwork collections
* Artwork stories
* Multiple artwork images
* Customer accounts
* Order tracking
* Advanced analytics
* Newsletter
* SEO structured data
* CMS-like content management

These must not complicate the initial build unless a genuine requirement appears.

---

# 31. Product Priorities

When tradeoffs occur, use this priority order:

1. Artwork presentation
2. User experience
3. Brand identity
4. Performance
5. Accessibility
6. Commerce functionality
7. Backend complexity
8. Additional features

A feature should not be added merely because it is technically possible.

---

# 32. Current Status

**Phase:** 0 — Project Foundation

Completed:

* Project Instructions
* Product vision
* Initial requirements

Next documentation:

1. `DESIGN_SYSTEM.md`
2. `SITE_ARCHITECTURE.md`
3. `CONTENT.md`
4. `DECISIONS.md`
5. `CHANGELOG.md`

After documentation:

**Visual exploration → Next.js foundation → Complete frontend**
