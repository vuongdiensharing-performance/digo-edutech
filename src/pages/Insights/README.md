# 📄 BẢN MẪU README: MODULE DIGO INSIGHTS (BLOG ARCHIVE & INBOUND CRO)

## • Tên dự án (Project Title)

**DIGO EduTech | DIGO Insights - Trung tâm Tri thức Thực chiến & Inbound Lead Gen**

## • Giới thiệu/Tóm tắt (Description)

**Triết lý hành động:** *"Measure Ruthlessly. Build What You Teach. Scale Monopolies."*

Module này thuộc hệ sinh thái công nghệ đào tạo & kiến trúc tăng trưởng B2B2C của DIGO. Dự án tập trung giải quyết bài toán **Xây dựng thẩm quyền học thuật E-E-A-T, Tối ưu chuyển đổi Inbound Lead Magnet và Chuẩn hóa SEO Topic Clusters**, phục vụ trực tiếp cho cả 3 nhánh **DIGO Academy / DIGO Growth / DIGO Infra & Trust**.

## • Hình ảnh minh họa (Visuals)

*(Chèn ảnh chụp màn hình UI trang InsightsPage 2 cột 70/30, ArticleDetailPage hoặc Smart Sidebar tại đây)*

> **Yêu cầu UI:** Giao diện hiển thị tuân thủ nghiêm ngặt **Kiến trúc UX/UI Bento** (Thẻ bo góc lớn 24px - 32px, nút bấm bo tròn tuyệt đối 9999px) và bảng màu phong thủy Hỏa - Thổ của DIGO:
> - Trắng Đất Sét Ngà (`#F7F5F0`)
> - Đen Đá Bazan (`#0F0E0E`)
> - Đỏ Đế Chế (`#D91B24` - Bắt buộc cho CTA)
> - Vàng Hổ Phách (`#C88A32`)

## • Điều kiện tiên quyết (Prerequisites)

Để chạy dự án này, môi trường phát triển cần đảm bảo:

* Node.js (Phiên bản >= 18.x)
* Trình quản lý gói: `npm` hoặc `bun`
* Truy cập vào kho lưu trữ mã nguồn của DIGO và các biến môi trường (API Keys) liên quan.

## • Cách sử dụng (Usage)

Khởi chạy máy chủ phát triển (Development Server):

```bash
npm run dev
```

Truy cập `http://localhost:3000/#insights` trên trình duyệt.

* **Cấu trúc File trong Module Insights (`src/pages/Insights/`):**
  * `src/pages/Insights/InsightsPage.tsx`: Trang danh sách bài viết cấu trúc 2 cột (70% Main Content Grid 2 cột / 30% Smart Sidebar 5 Widgets).
  * `src/pages/Insights/ArticleDetailPage.tsx`: Trang bài viết chi tiết với Sticky Table of Contents (`320px 1fr`), Inline CTA và hồ sơ tác giả E-E-A-T.
  * `src/pages/Insights/index.ts`: Barrel export chuẩn Component-based.
  * `src/pages/Insights/README.md`: Tài liệu định hướng kỹ thuật & Brand Governance của module Insights.
  * Các Component bổ trợ liên kết: `src/components/TableOfContents.tsx`, `src/components/AuthorBio.tsx`, `src/components/InlineCTA.tsx`.

## • Cách đóng góp (Contributing)

Mọi đóng góp (Pull Request) đều phải trải qua quá trình kiểm duyệt khắt khe dựa trên **Brand Governance** và **Execution Guardrails** của DIGO:

1. **Màu sắc:** Phải sử dụng chuẩn xác 4 mã màu: Trắng Đất Sét Ngà (`#F7F5F0`), Đen Đá Bazan (`#0F0E0E`), Đỏ Đế Chế (`#D91B24` - Bắt buộc cho CTA), Vàng Hổ Phách (`#C88A32`).
2. **Logo:** Không dùng hiệu ứng AI, gradient hay phát sáng. Luôn giữ trục ngang 0 độ, không đặt nghiêng.
3. **Thông điệp (Copywriting):** Tuyệt đối không dùng các từ "Cam kết bùng nổ", "Giá tin nhắn siêu rẻ". Bắt buộc dùng thuật ngữ chuẩn: "Tối ưu CPQL", "Đối soát 1:1", "Trang đích <1.2s".

## • Giấy phép (License)

Dự án áp dụng **CAM KẾT BẢO MẬT (NDA) - An Ninh Dữ Liệu Tuyệt Đối**. Mọi dữ liệu đối tác, mã nguồn và kiến trúc hệ thống được bảo vệ theo chuẩn Zero-Trust. Không được phép sao chép hay phân phối ra bên ngoài khi chưa có sự chấp thuận của Ban Lãnh Đạo DIGO EduTech. Xem chi tiết toàn văn pháp lý tại [`LICENSE.md`](../../../LICENSE.md).

## • Thông tin liên lạc / Tác giả (Credits / Contact)

Được định hướng và xây dựng bởi Đội ngũ Lãnh đạo DIGO EduTech:

* **Nguyễn Hoàng Vương Điền (CEO / CMO):** Phụ trách Kiến trúc tăng trưởng & Hạ tầng công nghệ.
* **Lê Thị Thanh Gô (CAO / CPO):** Phụ trách Chất lượng học thuật & Phương pháp sư phạm.
