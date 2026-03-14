/**
 * Local API server for redirect v1 (dev only)
 * Simulates Vercel's /api/redirect
 */
import express from 'express';

const ALLOWED_URLS = [
  'https://yithemes.com',
  'https://be.elementor.com/',
  'https://elementor.com/',
];

const DEFAULT_REDIRECT = 'https://be.elementor.com/visit/?bta=204253&brand=elementor';

function isValidRedirectUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return ALLOWED_URLS.some((allowed) => u.href.startsWith(allowed));
  } catch {
    return false;
  }
}

function stripTrackingParams(url: string): string {
  try {
    const u = new URL(url);
    u.searchParams.delete('gclid');
    u.searchParams.delete('gad_source');
    u.searchParams.delete('gd_source');
    return u.toString();
  } catch {
    return url;
  }
}

const HOMEPAGE = 'http://localhost:3000/';
const REDIRECT_PAUSED = true; // Khớp với api/redirect.ts

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post('/api/redirect', (req, res) => {
  if (REDIRECT_PAUSED) return res.redirect(302, HOMEPAGE);
  const url = req.body?.url;
  const gclid = req.body?.gclid;
  if (!gclid) return res.redirect(302, HOMEPAGE);
  let redirectUrl = url && isValidRedirectUrl(url) ? url : DEFAULT_REDIRECT;
  redirectUrl = stripTrackingParams(redirectUrl);
  res.redirect(302, redirectUrl);
});

app.get('/api/redirect', (req, res) => {
  if (REDIRECT_PAUSED) return res.redirect(302, HOMEPAGE);
  const target = req.query?.url as string;
  const gclid = (req.query?.gclid || req.query?.gad_source || req.query?.gd_source) as string;
  if (!gclid) return res.redirect(302, HOMEPAGE);
  let redirectUrl = target && isValidRedirectUrl(target) ? target : DEFAULT_REDIRECT;
  redirectUrl = stripTrackingParams(redirectUrl);
  res.redirect(302, redirectUrl);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`[redirect API] http://localhost:${PORT}/api/redirect`);
});
