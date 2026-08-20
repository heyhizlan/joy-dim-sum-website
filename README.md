# JOY Dim Sum Website

The official website for JOY Dim Sum, serving dim sum, pau and more in Sentul and Kepong, Kuala Lumpur. The current outlets are JOY Dim Sum Sentul Point and the upcoming JOY Dim Sum Kiara Bay, Kepong.

## Local development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/` in a browser.

## Production checks

```bash
npm run lint
npm run build
npm run preview
```

## Deployment

Every push to `main` automatically builds and deploys the website to GitHub Pages through the workflow in `.github/workflows/deploy-pages.yml`.

The deployment currently uses `/joy-dim-sum-website/` as its Vite base path. When a custom domain is connected, change `VITE_BASE_PATH` in the workflow to `/`.
