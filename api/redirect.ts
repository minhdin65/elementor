// REDIRECT v1 | Revert to v0: see REDIRECT_VERSIONS.md
// Allowed redirect destinations (whitelist for security)
const ALLOWED_URLS = [
  'https://yithemes.com',
  'https://be.elementor.com/',
  'https://elementor.com/',
];

const DEFAULT_REDIRECT = 'https://yithemes.com?refer_id=1170528';

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

  // Chỉ redirect khi có gclid/gad (Google Ads). Không gclid → về trang chủ.
  if (!gclid) {
    return Response.redirect(HOMEPAGE, 302);
  }
  let redirectUrl = url && isValidRedirectUrl(url) ? url : DEFAULT_REDIRECT;
  // Loại bỏ gclid khỏi URL đích → traffic hiển thị "không xác định"
  try {
    const u = new URL(redirectUrl);
    u.searchParams.delete('gclid');
    u.searchParams.delete('gad_source');
    u.searchParams.delete('gd_source');
    redirectUrl = u.toString();
  } catch {}
  // Dùng HTML với link rel=noreferrer để không gửi Referer (Origin)
  return new Response(
    `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><a id="r" href="${redirectUrl.replace(/"/g, '&quot;')}" rel="noreferrer noopener"></a><script>document.getElementById("r").click();</script></body></html>`,
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const target = url.searchParams.get('url');
  const gclid = url.searchParams.get('gclid') || url.searchParams.get('gad_source') || url.searchParams.get('gd_source');
  if (!gclid) return Response.redirect(HOMEPAGE, 302);
  let redirectUrl = target && isValidRedirectUrl(target) ? target : DEFAULT_REDIRECT;
  try {
    const u = new URL(redirectUrl);
    u.searchParams.delete('gclid');
    u.searchParams.delete('gad_source');
    u.searchParams.delete('gd_source');
    redirectUrl = u.toString();
  } catch {}
  return new Response(
    `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><a id="r" href="${redirectUrl.replace(/"/g, '&quot;')}" rel="noreferrer noopener"></a><script>document.getElementById("r").click();</script></body></html>`,
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}
