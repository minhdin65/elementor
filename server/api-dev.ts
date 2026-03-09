/**
 * Local API server for redirect v1 (dev only)
 * Simulates Vercel's /api/redirect
 */
import express from 'express';

const ALLOWED_URLS = [
  'https://be.elementor.com/',
  'https://elementor.com/',
];

function isValidRedirectUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return ALLOWED_URLS.some((allowed) => u.href.startsWith(allowed));
  } catch {
    return false;
  }
}

const HOMEPAGE = 'http://localhost:3000/';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post('/api/redirect', (req, res) => {
  const url = req.body?.url;
  const gclid = req.body?.gclid;
  if (!gclid) return res.redirect(302, HOMEPAGE);
  const redirectUrl =
    url && isValidRedirectUrl(url)
      ? url
      : 'https://be.elementor.com/visit/?bta=204253&brand=elementor';
  res.redirect(302, redirectUrl);
});

app.get('/api/redirect', (req, res) => {
  const target = req.query?.url as string;
  const gclid = req.query?.gclid as string;
  if (!gclid) return res.redirect(302, HOMEPAGE);
  const redirectUrl =
    target && isValidRedirectUrl(target)
      ? target
      : 'https://be.elementor.com/visit/?bta=204253&brand=elementor';
  res.redirect(302, redirectUrl);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`[redirect API] http://localhost:${PORT}/api/redirect`);
});
