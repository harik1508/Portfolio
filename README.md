# Muthyam Harish Kumar — Portfolio

A React + Tailwind CSS single-page portfolio, built with [Vite](https://vitejs.dev/).

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── image.png        ← profile photo (referenced as /image.png in App.jsx)
└── src/
    ├── main.jsx          ← React entry point
    ├── App.jsx           ← the portfolio page (all sections)
    └── index.css         ← Tailwind directives
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/` — plain HTML/CSS/JS, deployable anywhere that serves static files.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy so the link is always live and public

Any of these work well for a static Vite/React site; all three offer a free tier with an always-on public URL and HTTPS.

### Option A — Vercel (recommended, easiest)
1. Push this folder to a GitHub repo (steps above).
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`. Click **Deploy**.
4. You get a permanent URL like `your-portfolio.vercel.app`. Every future `git push` to `main` auto-redeploys it.

### Option B — Netlify
1. Push to GitHub.
2. Go to https://app.netlify.com → **Add new site → Import an existing project** → pick the repo.
3. Build command: `npm run build`, Publish directory: `dist`. Click **Deploy site**.
4. You get a URL like `your-portfolio.netlify.app`, with auto-redeploy on every push.

### Option C — GitHub Pages
1. Push to GitHub.
2. Install the gh-pages helper: `npm install --save-dev gh-pages`
3. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. In `vite.config.js`, set `base: "/<your-repo>/"` inside `defineConfig`.
5. Run `npm run deploy`. Enable Pages in the repo's Settings → Pages → source: `gh-pages` branch.

**Recommendation:** use Vercel — zero config for Vite, generous free tier, custom domains supported, and it stays live indefinitely with no server to maintain.

## Custom domain (optional)
All three platforms let you attach a custom domain (e.g. `harishkumar.dev`) for free — just add the domain in the project's dashboard and point your DNS (usually a CNAME or A record) as instructed.
