# Next.js Migration Analysis & Notes

## 1. Project Overview

- **Type:** React-based educational web app (Vite or CRA, TypeScript)
- **Structure:** Modular, with clear separation of components, pages, hooks, data, and services.
- **Styling:** Tailwind CSS (`tailwind.config.ts`, `postcss.config.js`, `index.css`, `App.css`).
- **Assets:** Static assets in `public/` (images, redirects, robots.txt, etc.).
- **Routing:** Likely handled by React Router (pages/ directory, no explicit Next.js routing).
- **State/Logic:** Custom hooks, service layer for metrics, and data files for content.
- **UI Components:** Custom UI library in `src/components/ui/`.

---

## 2. Key Migration Considerations

### A. Routing & Pages
- **Current:** Pages in `src/pages/` (e.g., `Home.tsx`, `DocPage.tsx`).
- **Next.js:** Move each page to `pages/` (or `app/` for App Router). File-based routing replaces React Router.
  - Convert dynamic routes (e.g., `/docs/[id].tsx`).
  - Remove or refactor any React Router usage.

### B. Static Assets
- **Current:** All assets in `public/`.
- **Next.js:** Place static files in the `public/` directory (same as now).
  - Update asset references if pathing changes.

### C. Styling
- **Tailwind CSS:** Supported natively in Next.js.
  - Migrate `tailwind.config.ts`, `postcss.config.js`, and CSS files.
  - Update imports in `_app.tsx` or `layout.tsx`.

### D. Components
- **Current:** `src/components/` and `src/components/ui/`.
- **Next.js:** Move to `components/` at the root or inside `src/`.
  - No major changes needed unless using client/server components (App Router).

### E. Data Fetching
- **Current:** Static data in `src/data/`.
- **Next.js:** Use static imports for static data, or migrate to `getStaticProps`/`getServerSideProps` for dynamic data.
  - For App Router, use `fetch`/`async` in server components.

### F. Hooks
- **Current:** Custom hooks in `src/hooks/`.
- **Next.js:** Move to `hooks/` or keep in `src/hooks/`.
  - Ensure hooks are only used in client components.

### G. Services
- **Current:** `src/services/metricsService.ts`.
- **Next.js:** Move to `lib/` or `services/`.
  - For API calls, consider using Next.js API routes (`pages/api/` or `app/api/`).

### H. TypeScript
- **Current:** TypeScript throughout, with type definitions in `src/types/`.
- **Next.js:** Fully supported. Move types to `types/` or keep in `src/types/`.

### I. Entry Point
- **Current:** `src/main.tsx`, `index.html`.
- **Next.js:** No `index.html` or manual entry point; Next.js handles this.
  - Move global providers to `_app.tsx` or `layout.tsx`.

### J. SEO & Metadata
- **Current:** `public/robots.txt`, `sitemap.xml`, `JsonLD.tsx`.
- **Next.js:** Place static files in `public/`. Use Next.js Head component or metadata API for dynamic SEO.

### K. Redirects & Vercel
- **Current:** `public/_redirects`, `vercel.json`.
- **Next.js:** Use `next.config.js` for redirects and rewrites. Vercel config can be migrated as needed.

---

## 3. Migration Steps Checklist

1. **Create a new Next.js app** (with TypeScript and Tailwind).
2. **Move static assets** to the new `public/` directory.
3. **Migrate components** to `components/` (and `ui/`).
4. **Move pages** to `pages/` (or `app/` for App Router), converting routes as needed.
5. **Migrate hooks, services, and data** to appropriate directories.
6. **Set up Tailwind CSS** using your existing config.
7. **Move global styles** to `styles/globals.css` or similar.
8. **Refactor routing logic** (remove React Router, use Next.js routing).
9. **Update data fetching** to use Next.js methods if needed.
10. **Set up API routes** for backend logic (metrics, etc.).
11. **Migrate SEO logic** to Next.js Head/metadata.
12. **Test thoroughly** (pages, navigation, data, SEO, etc.).
13. **Update deployment config** for Vercel or your host.

---

## 4. Potential Challenges

- **Dynamic Routing:** Converting React Router dynamic routes to Next.js file-based routes.
- **Client/Server Components:** If using the App Router, decide which components are client/server.
- **API Integration:** Refactoring service calls to use Next.js API routes if needed.
- **Global State/Providers:** Move to `_app.tsx` or `layout.tsx`.
- **SSR/SSG:** Decide which pages need server-side rendering or static generation.

---

## 5. References

- [Next.js Migration Guide](https://nextjs.org/docs/pages/building-your-application/upgrading/cra-migration)
- [Next.js with Tailwind CSS](https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css)
- [File-based Routing](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) 