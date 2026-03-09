// REDIRECT v1 - Form POST redirect handler (Vercel Serverless)
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

export async function POST(request: Request) {
  let url: string | null = null;
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const text = await request.text();
    const params = new URLSearchParams(text);
    url = params.get('url');
  } else if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    url = formData.get('url') as string | null;
  }

  const redirectUrl = url && isValidRedirectUrl(url) ? url : 'https://be.elementor.com/visit/?bta=204253&brand=elementor';

  return Response.redirect(redirectUrl, 302);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const target = url.searchParams.get('url');
  const redirectUrl = target && isValidRedirectUrl(target) ? target : 'https://be.elementor.com/visit/?bta=204253&brand=elementor';
  return Response.redirect(redirectUrl, 302);
}
