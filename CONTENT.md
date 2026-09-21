# CONTENT

## 1. Purpose

This document defines the content strategy for the artistdipalisingh website.

The website represents a single artist:

**Artist:** Dipali Singh

**Brand / Website:** artistdipalisingh

The content should communicate:

* artistic identity
* artwork
* craftsmanship
* originality
* commissioned artwork
* purchasing information
* contact options
* social presence

The website should feel like a curated contemporary art space rather than a generic ecommerce store.

---

# 2. Content Accuracy Rule

The website must never invent personal or professional information about the artist.

Do not invent:

* biography
* age
* education
* location
* years of experience
* exhibitions
* awards
* galleries
* clients
* collections
* achievements
* artistic credentials
* testimonials
* press mentions
* social media accounts
* WhatsApp number
* email address

If information has not been provided or verified, it should remain a clearly marked placeholder or be omitted.

Accuracy is more important than making the website appear artificially complete.

---

# 3. Brand Name

Primary brand name:

**artistdipalisingh**

Artist name:

**Dipali Singh**

The brand should be displayed consistently across:

* header
* footer
* page titles
* metadata
* social references
* contact sections

The exact visual treatment will be determined during frontend implementation.

---

# 4. Brand Voice

The website's written voice should be:

* refined
* calm
* artistic
* confident
* contemporary
* human
* concise

Avoid:

* exaggerated luxury language
* aggressive sales language
* generic motivational language
* corporate jargon
* artificial storytelling
* excessive adjectives
* meaningless phrases such as "world-class masterpiece" unless genuinely justified

The artwork should create the emotional impact.

The text should support it rather than compete with it.

---

# 5. Homepage Content

The homepage should introduce the artist and artwork without overwhelming visitors.

Primary sections may include:

1. Hero
2. Selected artwork
3. Artist introduction
4. Commission/custom artwork section
5. Social/contact section
6. Footer

---

## 5.1 Hero

The hero should communicate the core identity of the website quickly.

Potential content structure:

Eyebrow:

`ARTIST • ORIGINAL WORKS`

Main heading:

A refined statement about the artist or artwork.

Supporting text:

A short introduction to Dipali Singh and the artistic work.

Primary action:

`Explore Artwork`

Secondary action:

`Commission Artwork`

The final copy will be written after the artist's actual content and preferred positioning are confirmed.

Do not invent a biography inside the hero.

---

# 6. Artwork Content

Artwork is the primary content of the website.

Each artwork may contain:

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

Example conceptual artwork:

Title:

`Artwork Title`

Artist:

`Dipali Singh`

Medium:

`[Actual medium]`

Size:

`[Actual dimensions]`

Edition:

`Original`

Price:

`₹[Price]`

Availability:

`Available`

Description:

`[Actual artwork description]`

These are placeholders until real artwork information is supplied.

---

# 7. Artwork Descriptions

Artwork descriptions should be written carefully.

Descriptions may discuss:

* visual character
* medium
* texture
* composition
* subject
* artistic process
* mood
* inspiration

Do not fabricate the meaning or inspiration behind an artwork.

If the artist has not provided an interpretation, use neutral factual information instead.

For example:

Instead of inventing:

"This painting represents Dipali's lifelong connection with nature."

Use factual information such as:

"Original artwork created using [medium], measuring [size]."

Artist-provided interpretation may be added later.

---

# 8. Shop / Gallery Content

The shop should feel like a gallery.

Preferred terminology may include:

* `Explore Works`
* `Selected Works`
* `Original Works`
* `Available Works`
* `Artwork`
* `View Artwork`

Avoid excessive ecommerce language such as:

* `BUY NOW!!!`
* `BEST SELLER`
* `LIMITED TIME`
* `HOT DEAL`
* `SALE`
* `SHOP NOW` repeated throughout the site

The visual experience should communicate value without resorting to retail pressure.

---

# 9. Artwork Availability

Possible states:

### Available

The artwork can currently be purchased.

Display:

`Available`

### Sold

The artwork is no longer available for purchase.

Display:

`Sold`

### Reserved

The artwork has been temporarily reserved.

Display:

`Reserved`

### Commission Only

The artwork is an example/reference and is not directly purchasable.

Display:

`Commission Available`

Availability should come from the actual artwork data in production.

---

# 10. About Page

The About page should explain who Dipali Singh is and how she approaches her work.

Potential sections:

* artist introduction
* artistic practice
* creative philosophy
* working process
* selected background information
* social/contact links

However, all personal and professional claims must be supplied or verified.

Until the artist provides the information, use a temporary content state rather than fabricated biography.

---

# 11. Commission Page

The artist accepts commissioned/custom/on-demand artwork requests.

This is an important business function of the website.

The commission page should explain the basic process.

Possible structure:

### 01 — Share Your Idea

The visitor explains what kind of artwork they are looking for.

### 02 — Discuss the Artwork

The artist and client discuss the concept, size, medium, and requirements.

### 03 — Create

The artwork is developed according to the agreed requirements.

### 04 — Finalize

The finished artwork is reviewed and delivery/purchase arrangements are completed.

The exact process may be changed after discussing it with the artist.

---

# 12. Commission Call To Action

Primary CTA:

`Request a Commission`

Secondary CTA where appropriate:

`Contact the Artist`

The final CTA should direct the visitor to WhatsApp once the real WhatsApp contact information is provided.

Do not use:

`href="#"`

Do not create a fake WhatsApp number.

---

# 13. WhatsApp Content

WhatsApp is the primary contact channel for commission requests.

The production website should eventually contain a real WhatsApp link.

Required information:

* actual WhatsApp number
* preferred opening message
* whether the artist wants commission requests, general inquiries, or both

Until supplied:

`WHATSAPP_LINK_PENDING`

This placeholder must not be used as a clickable production link.

---

# 14. Social Media Content

The website should include the artist's actual social media accounts once supplied.

Potential platforms may include:

* Instagram
* Facebook
* Pinterest
* YouTube
* other artist-provided platforms

Only platforms actually used by the artist should be displayed.

Do not invent usernames.

Temporary state:

`SOCIAL_LINKS_PENDING`

No fake social links should be added.

---

# 15. Footer Content

The footer may contain:

* artist name
* website/brand name
* navigation
* artwork link
* commission link
* social links
* WhatsApp contact
* copyright information

The footer should remain visually quiet.

It should not become another giant navigation system.

---

# 16. Cart Content

Cart interface should clearly communicate:

* artwork title
* artwork image
* price
* quantity
* subtotal
* total
* remove action
* checkout action

Possible empty-cart message:

`Your collection is currently empty.`

Primary action:

`Explore Artwork`

The final wording may be refined during UI implementation.

---

# 17. Checkout Content

Checkout should use clear and direct language.

Required information may include:

* full name
* phone number
* address
* city
* state
* postal code
* optional notes

Payment method for MVP:

`Cash on Delivery`

The checkout should clearly communicate that the order is being placed.

Avoid misleading payment language.

During frontend development, the checkout is a simulation and must not imply that a real order has been stored.

---

# 18. Order Success Content

The production order-success page should communicate:

* order confirmation
* order reference
* customer information where appropriate
* ordered artwork
* total
* next steps
* contact information

During frontend development, a clearly simulated order reference may be used.

Example:

`DEMO-ORDER-001`

This must not be presented as a real production order.

---

# 19. Error Content

Error messages should be:

* clear
* calm
* useful
* non-technical

Avoid exposing:

* database errors
* API stack traces
* server implementation details
* internal identifiers

Example:

Instead of:

`Postgres insert failed: relation orders does not exist`

Use:

`We couldn't complete your request. Please try again.`

Technical details should remain in developer logs.

---

# 20. Loading Content

Loading states should communicate that content is being prepared.

Examples:

`Loading artwork...`

`Preparing your collection...`

`Loading...`

Loading states should not become overly animated or decorative.

---

# 21. Empty States

Examples:

### No artwork

`No artworks are currently available.`

### Empty cart

`Your collection is currently empty.`

### No search/filter results

`No artworks match your current selection.`

Empty states should always provide a sensible next action when appropriate.

---

# 22. Navigation Labels

Initial navigation:

* Home
* Artwork
* About
* Commission
* Cart

Possible shorter mobile labels may be used if needed.

Navigation should remain simple.

Do not add links merely to fill empty space.

---

# 23. Button Language

Buttons should describe the action.

Preferred:

* `Explore Artwork`
* `View Artwork`
* `View Details`
* `Add to Cart`
* `Request a Commission`
* `Contact the Artist`
* `Continue to Checkout`
* `Place Order`
* `Return to Artwork`

Avoid vague buttons such as:

* `Click Here`
* `Learn More` everywhere
* `Submit`
* `Go`
* `Continue` without context

---

# 24. SEO Content

SEO content will be finalized after the visual and structural implementation is stable.

Potential metadata will include:

* site title
* page title
* description
* artwork-specific metadata
* Open Graph information
* canonical URLs

SEO text must accurately describe the actual artist and website.

Do not keyword-stuff artist pages.

---

# 25. Image Alt Text

Artwork images should have meaningful alt text.

Preferred structure:

`[Artwork title] by Dipali Singh`

Where useful, additional factual information may be included.

Do not write promotional descriptions as alt text.

Alt text should describe the image's purpose, not act as an advertisement.

---

# 26. Content Placeholders

The following information is currently pending and must be supplied before production:

### Artist

* official biography
* artistic statement
* preferred introduction
* artistic process
* verified background information

### Contact

* WhatsApp number/link
* email if required

### Social

* Instagram URL
* Facebook URL if used
* other official social links

### Artwork

* real artwork images
* titles
* prices
* medium
* dimensions
* descriptions
* availability
* edition information

### Business

* shipping information
* delivery policy
* return/refund policy if applicable
* COD conditions
* commission process
* commission pricing information if applicable

---

# 27. Content Rules For Development

Developers should not silently invent missing content.

If content is missing:

1. use a clearly named placeholder
2. continue building the UI
3. record the missing information
4. replace the placeholder when the real content is supplied

Examples:

`BIO_PENDING`

`WHATSAPP_LINK_PENDING`

`SOCIAL_LINKS_PENDING`

`ARTWORK_DESCRIPTION_PENDING`

These placeholders are temporary development markers.

They must not accidentally reach the final production website.

---

# 28. Content Hierarchy

The website should prioritize content in this order:

1. Artwork
2. Artist identity
3. Commission/custom artwork
4. Purchase information
5. Contact/social presence
6. Supporting information

The artwork should remain the visual and informational center of the experience.

---

# 29. Content Style

Keep text concise.

Use:

* short paragraphs
* strong headings
* clear labels
* generous whitespace
* meaningful CTA text

Avoid:

* giant blocks of biography text
* repetitive descriptions
* excessive marketing copy
* unnecessary explanations
* fake scarcity
* exaggerated claims

The website should feel confident enough not to shout.

---

# 30. Production Content Standard

Before launch, all production content must satisfy these requirements:

* factually accurate
* supplied or verified
* grammatically clean
* consistent in terminology
* consistent in artist naming
* free of development placeholders
* free of fake links
* free of fake testimonials
* free of invented achievements
* suitable for mobile reading
* accessible

The final website should present the artist honestly and professionally.

---

# 31. Current Content Status

Current status:

**Content structure defined.**

Actual artist-specific content is still being collected.

The frontend can proceed using controlled mock content where necessary, but mock content must be clearly treated as development content and replaced before production.

The website must never accidentally launch with fictional artwork information or fictional artist credentials.

---

# 32. Content Principle

The central content principle is:

> Make the website feel premium through presentation, curation, typography, imagery, and restraint, not through invented claims.

The artist's actual work should provide the credibility.

The website's job is to present it exceptionally well.
