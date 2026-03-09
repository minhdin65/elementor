// REDIRECT v1 | Revert to v0: see REDIRECT_VERSIONS.md
// Allowed redirect destinations (whitelist for security)
const ALLOWED_URLS = [
  'https://be.elementor.com/',
  'https://elementor.com/',
];

function isValidRedirectUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return ALLOWED_URLS.some(allowed => u.href.startsWith(allowed));
  } catch {
    return false;
  }
}

const HOMEPAGE = 'https://elementorpro.vercel.app/';

export async function POST(request: Request) {
  let url: string | null = null;
  let gclid: string | null = null;
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const text = await request.text();
    const params = new URLSearchParams(text);
    url = params.get('url');
    gclid = params.get('gclid');
  } else if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    url = formData.get('url') as string | null;
    gclid = formData.get('gclid') as string | null;
  }

  // Chỉ redirect sang Elementor khi có gclid (Google Ads). Không gclid → về trang chủ.
  if (!gclid) {
    return Response.redirect(HOMEPAGE, 302);
  }
  const redirectUrl = url && isValidRedirectUrl(url) ? url : 'https://be.elementor.com/visit/?bta=204253&brand=elementor';
  return Response.redirect(redirectUrl, 302);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const target = url.searchParams.get('url');
  const gclid = url.searchParams.get('gclid');
  if (!gclid) return Response.redirect(HOMEPAGE, 302);
  const redirectUrl = target && isValidRedirectUrl(target) ? target : 'https://be.elementor.com/visit/?bta=204253&brand=elementor';
  return Response.redirect(redirectUrl, 302);
}
