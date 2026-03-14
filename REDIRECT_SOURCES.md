# Kiểm tra nguồn chuyển hướng

## Đã vô hiệu hóa trong code

| Nguồn | File | Trạng thái |
|-------|------|------------|
| gtag_report_conversion callback | index.html | Đã bỏ `event_callback` → không còn redirect qua gtag |
| API /api/redirect | api/redirect.ts | REDIRECT_PAUSED=true → redirect về homepage |
| Static /register/ | public/register/index.html | REDIRECT_ENABLED=false → redirect về / |
| Link affiliate (React) | Home.tsx, Register.tsx | REDIRECT_PAUSED=true → href='/' |
| Hero CTAs | landingData.hero.ctas | getAffiliateLink() → '/' khi pause |

## Cần kiểm tra trên Google Ads

**1. Final URL của quảng cáo**
- Vào Campaign → Ads → chỉnh sửa
- **Final URL** phải là: `https://elementorpro.vercel.app/` hoặc `/register`
- Nếu để `https://be.elementor.com/...` → user sẽ vào thẳng Elementor (redirect từ Google)

**2. Conversion Action**
- Vào Tools → Conversions
- Mở conversion `iP97CM_e_b8ZEOiImcU9`
- Kiểm tra có thiết lập "Thank you page" hoặc redirect URL không
- Nếu có → tắt hoặc đổi sang trang của bạn

**3. Google Tag (gtag)**
- Conversion tag chỉ ghi nhận event, không redirect
- Đã bỏ event_callback trong code

## Bật lại redirect khi cần

1. `src/data/landing-content.ts` → REDIRECT_PAUSED = false
2. `api/redirect.ts` → REDIRECT_PAUSED = false
3. `public/register/index.html` → REDIRECT_ENABLED = true
