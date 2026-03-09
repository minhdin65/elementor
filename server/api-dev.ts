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

const DEFAULT_REDIRECT = 'https://yithemes.com?refer_id=1170528';

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

function sendNoreferrerRedirect(res: express.Response, redirectUrl: string) {
  const safe = redirectUrl.replace(/"/g, '&quot;');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><a id="r" href="${safe}" rel="noreferrer noopener"></a><script>document.getElementById("r").click();</script></body></html>`);
}

const HOMEPAGE = 'http://localhost:3000/';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post('/api/redirect', (req, res) => {
  const url = req.body?.url;
  const gclid = req.body?.gclid;
  if (!gclid) return res.redirect(302, HOMEPAGE);
  let redirectUrl = url && isValidRedirectUrl(url) ? url : DEFAULT_REDIRECT;
  redirectUrl = stripTrackingParams(redirectUrl);
  sendNoreferrerRedirect(res, redirectUrl);
});

app.get('/api/redirect', (req, res) => {
  const target = req.query?.url as string;
  const gclid = (req.query?.gclid || req.query?.gad_source || req.query?.gd_source) as string;
  if (!gclid) return res.redirect(302, HOMEPAGE);
  let redirectUrl = target && isValidRedirectUrl(target) ? target : DEFAULT_REDIRECT;
  redirectUrl = stripTrackingParams(redirectUrl);
  sendNoreferrerRedirect(res, redirectUrl);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`[redirect API] http://localhost:${PORT}/api/redirect`);
});
