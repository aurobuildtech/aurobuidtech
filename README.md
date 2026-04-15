# Auro BuildTech

Auro BuildTech is a React + Vite website for a real estate consulting and construction company. The app presents the brand, services, project listings, and contact experience for users exploring construction, interiors, smart home automation, plotted developments, flats, and villas.

## Stack

- React 19
- Vite 7
- React Router DOM 7
- Framer Motion
- React Helmet Async
- Bootstrap 5 and Bootstrap Icons

## Project Structure

```text
src/
  assets/        Images and project media
  components/    Shared UI, animation, floating CTAs, modals
  pages/         Route-level pages for Home, Services, Projects, About, Contact
  routes/        App route configuration
  styles/        Global theme styles
```

## Main Routes

- `/` Home page
- `/services` Services overview
- `/services/:serviceId` Service detail pages
- `/projects` Bangalore projects by default
- `/projects/:location` Region-specific project listing
- `/projects/:location/:projectSlug` Project details
- `/about` About page
- `/contact` Contact page

## Run Locally

```bash
npm install
npm run dev
```

Other available scripts:

```bash
npm run build
npm run lint
npm run preview
```

## Documentation

See [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) for a fuller codebase walkthrough, architecture notes, and current cleanup observations.
