# Auro BuildTech Project Overview

## Purpose

This project is the marketing and lead-generation website for Auro BuildTech, positioned around:

- Real estate consulting
- Project sales for plots, flats, and villas
- Construction services
- Interior solutions
- Home automation

The current app is a single-page React website with route-based sections for discovery, service exploration, property browsing, and contact capture.

## Tech Summary

- Framework: React 19 with Vite
- Routing: `react-router-dom`
- Animation: `framer-motion`
- SEO metadata: `react-helmet-async`
- Styling: Bootstrap plus custom CSS files
- Assets: Local image-heavy content under `src/assets`

## App Flow

### Entry

- [src/main.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/main.jsx)
- Wraps the app with `BrowserRouter` and `HelmetProvider`
- Loads global theme styles plus Bootstrap CSS, JS, and Bootstrap Icons

### App Shell

- [src/App.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/App.jsx)
- Shared layout includes:
  - Header
  - Footer
  - Main route outlet
  - Cursor effect

### Routing

- [src/routes/AppRoutes.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/routes/AppRoutes.jsx)
- Uses lazy loading for page modules
- Shows a splash screen for the first 2.5 seconds
- Injects floating CTA widgets globally:
  - WhatsApp float
  - Property hub float
- Defines the public routes:
  - `/`
  - `/services`
  - `/services/:serviceId`
  - `/projects`
  - `/projects/:location`
  - `/projects/:location/:projectSlug`
  - `/about`
  - `/contact`

## Page-by-Page Summary

### Home

- [src/pages/Home/Home.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/Home/Home.jsx)
- Built from lazily loaded sections:
  - Hero quote
  - Stats counter
  - Hero carousel
  - Testimonials video
  - Video highlights
  - Project CTA
  - Clients strip
  - Auto popup modal
- Includes SEO metadata for the homepage

### Services

- [src/pages/services/Services.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/services/Services.jsx)
- Uses [src/pages/services/ServiceSingle.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/services/ServiceSingle.jsx) as the main renderer
- Service content is driven from [src/pages/services/servicesMap.js](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/services/servicesMap.js)
- Core service areas currently represented:
  - Layout Development
  - Sale of Properties
  - Constructions
  - Interior Solutions
  - Home Automation
- Financial Services appears in navigation as a future or disabled item

### Projects

- [src/pages/Projects/ProjectsPage.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/Projects/ProjectsPage.jsx)
- Project records are data-driven from [src/pages/Projects/data/projectsData.js](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/Projects/data/projectsData.js)
- Supports region filtering:
  - `bangalore`
  - `goa`
- Supports category filtering:
  - All
  - Plots
  - Flats
  - Villas
- Includes a project detail route for deep links

### About

- [src/pages/About/About.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/About/About.jsx)
- Built from reusable sections:
  - About hero
  - Stats
  - Our process
  - Safety first
  - Safety protocols
  - Clients strip

### Contact

- [src/pages/contact/Contact.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/contact/Contact.jsx)
- Includes a lead form with:
  - Name
  - Email
  - Phone
  - Project type
  - Budget
  - Timeline
  - Project details
  - File upload field
- Current submission behavior is front-end only:
  - Logs form data in the console
  - Shows an alert
- No backend/API integration is present for storing or sending leads

## Shared UI and Feature Areas

### Header and Navigation

- [src/components/Header/Header.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/Header/Header.jsx)
- Navigation supports:
  - Main page links
  - Services dropdown
  - Projects dropdown
  - Theme toggle
  - Consultation CTA

### Footer

- [src/components/Footer/Footer.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/Footer/Footer.jsx)
- Presents company summary, services, company links, contact details, and social icons

### Floating Lead Widgets

- [src/components/buttons/WhatsAppFloat.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/buttons/WhatsAppFloat.jsx)
- [src/components/floating/PropertyHubFloat.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/floating/PropertyHubFloat.jsx)
- These are key conversion elements guiding users toward contact and project exploration

### Motion and Lazy Loading

- Animations are centralized through:
  - [src/components/animations/PageTransition.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/animations/PageTransition.jsx)
  - [src/components/animations/Reveal.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/animations/Reveal.jsx)
- Lazy wrappers:
  - [src/components/lazy/LazySection.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/lazy/LazySection.jsx)
  - [src/components/lazy/LazyMotionSection.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/lazy/LazyMotionSection.jsx)

## Data Model Notes

### Services Content

`servicesMap.js` is acting as a local CMS-style content source. It stores:

- Service IDs
- Titles and descriptions
- Banner/media images
- Offer lists
- Process steps
- Highlights
- CTA text

This is a good direction because it keeps service page content centralized, but the file is becoming large and would benefit from splitting by service or by content type.

### Projects Content

`projectsData.js` stores:

- Region
- Category
- Slug
- Title
- Location
- Price
- Status
- Image
- Highlights
- CTA labels
- Contact number
- Optional map or video URLs

This structure is already useful for driving listings and detail pages. It could scale further if moved to JSON or CMS-backed content later.

## Design and UX Direction

The current website strongly leans into:

- Conversion-focused marketing
- Motion-rich sections
- Visual-first real estate presentation
- Region-based project discovery
- SEO-conscious route metadata

The brand feel is much closer to a modern sales website than a plain corporate brochure, which suits real estate discovery well.

## Verified Issues and Cleanup Notes

I ran project checks locally and found a few important cleanup points.

### Lint status

`npm run lint` currently fails with 22 errors.

Key problem groups:

- Hook order issue in [src/pages/services/ServiceSingle.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/services/ServiceSingle.jsx)
- Duplicate object keys in [src/pages/services/ServiceIcons.js](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/services/ServiceIcons.js)
- Multiple `setState` calls directly inside effects, including:
  - [src/components/floating/PropertyHubFloat.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/floating/PropertyHubFloat.jsx)
  - [src/components/lazy/LazySection.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/lazy/LazySection.jsx)
  - [src/components/offer/FestiveOfferModal.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/components/offer/FestiveOfferModal.jsx)
  - [src/pages/Projects/ProjectsPage.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/Projects/ProjectsPage.jsx)
  - [src/pages/Projects/components/ProjectCarousel.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/Projects/components/ProjectCarousel.jsx)
  - [src/pages/services/details/ServiceDetails.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/services/details/ServiceDetails.jsx)
- Inline component declaration warning in [src/pages/contact/Contact.jsx](/abs/c:/Users/valib/Downloads/auro-constructions/auro-constructions/src/pages/contact/Contact.jsx)
- Unused import or variable warnings in several files

### Encoding artifacts

There are multiple visible mojibake characters in UI strings, for example:

- `âœ…`
- `â€“`
- `Â©`
- `â‚¹`

These appear in several source files and should be normalized to clean UTF-8 text so the UI displays correctly.

### Contact form limitation

The contact page currently does not submit to a backend or third-party lead service. For a business website, this is one of the highest-value improvements.

### README mismatch

The repo originally still had the default Vite README, which did not describe the actual product. That has now been replaced with project-specific documentation.

## Build Check

`npm run build` could not complete in this sandbox because the environment blocked the process with `spawn EPERM` while loading the Vite config. That result looks environment-related rather than a confirmed application build failure.

## Suggested Next Improvements

### Highest priority

- Fix the lint errors and React hook issues
- Clean up all broken encoded text in UI copy
- Connect the contact form to email, CRM, WhatsApp API, or a backend endpoint
- Add real social/profile links instead of placeholder `#` links

### Good next step

- Split large data files into smaller modules
- Add a proper project detail SEO image strategy
- Add form validation and success/error UI states
- Add analytics for lead funnels and CTA clicks

### Nice to have

- Replace hardcoded project and service content with a CMS or admin-managed source
- Add testimonials or case studies with richer proof points
- Add automated tests for routes and critical UI states

## Bottom Line

The project already has a strong marketing-site foundation: clear route structure, reusable sections, data-driven project content, and a conversion-friendly layout. The main work now is code cleanup, text cleanup, and lead capture integration so the site is easier to maintain and stronger for real business use.
