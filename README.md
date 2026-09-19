# Konstantin Bykadorov — Portfolio

Personal CV site for Frontend Engineer / Middle Frontend Developer roles.

## Requirements

- Node.js 20.9 or newer (Next.js 16)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site is available in English and Russian:

- [http://localhost:3000/en](http://localhost:3000/en)
- [http://localhost:3000/ru](http://localhost:3000/ru)

## Production build

```bash
npm run build
npm start
```

## Deploy

The site has no backend. Deploy on Vercel (or similar). Canonical, Open Graph, sitemap, and JSON-LD use `NEXT_PUBLIC_SITE_URL` when it is set. On Vercel, the deployment URL is used automatically if that variable is empty.

Do not use `localhost` in production metadata.

Resume file: `public/resume.pdf`.
