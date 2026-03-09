# Redirect versions

## Chạy thử redirect ở localhost

1. Chạy `npm run dev` (sẽ khởi động cả Vite + API server)
2. Mở http://localhost:3000/register.html (hoặc port mà Vite báo)
3. Form sẽ POST tới `/api/redirect` → redirect tới Elementor

**Lưu ý:** API chạy trên port 3001, Vite proxy `/api` tới đó. Nếu 3000/3001 đang dùng, Vite sẽ dùng port khác (vd: 3002).

---

## v0 – Không dùng redirect (trạng thái gốc)

- Không có trang redirect
- Tất cả link affiliate trỏ trực tiếp tới `https://be.elementor.com/visit/...`
- Không có API `/api/redirect`

---

## v1 – Form POST redirect (hiện tại)

- `public/register.html` – Form chỉ submit khi URL có `gclid` (Google Ads)
- `api/redirect.ts` – Chỉ redirect sang Elementor khi có `gclid`; không có → về trang chủ
- **Tránh bot:** Googlebot truy cập trực tiếp (không gclid) → chuyển về `/`, không thấy redirect

---

## Chuyển đổi giữa các phiên bản

### Quay lại v0 (tắt redirect)

1. Xóa `public/register.html`
2. Xóa thư mục `api/`
3. Cập nhật link trên site từ `/register.html` về affiliate link trực tiếp
4. Commit và deploy

### Bật lại v1 (dùng redirect)

1. Sao chép `_versions/redirect-v1/public/register.html` → `public/register.html`
2. Sao chép `_versions/redirect-v1/api/redirect.ts` → `api/redirect.ts`
3. Cập nhật link trên site trỏ tới `/register.html` (nếu cần)
4. Commit và deploy
