# 📄 BẢN MẪU README: [TÊN HẠNG MỤC / MODULE]

## • Tên dự án (Project Title)

**DIGO EduTech | [Tên Module - Ví dụ: Infra & Trust - Server-side CAPI]**

## • Giới thiệu/Tóm tắt (Description)

**Triết lý hành động:** *"Measure Ruthlessly. Build What You Teach. Scale Monopolies."*

Module này thuộc hệ sinh thái công nghệ đào tạo & kiến trúc tăng trưởng B2B2C của DIGO. Dự án tập trung giải quyết bài toán [nhập mục tiêu cốt lõi, VD: Tự động hóa tuyển sinh / Đo lường 1:1 / Tối ưu trang đích <1.2s], phục vụ trực tiếp cho nhánh **[Chọn 1: DIGO Academy / DIGO Growth / DIGO Infra & Trust]**.

## • Hình ảnh minh họa (Visuals)

*(Chèn ảnh chụp màn hình UI, biểu đồ dòng chảy dữ liệu hoặc video demo tại đây)*

> **Yêu cầu UI:** Giao diện hiển thị tuân thủ nghiêm ngặt **Kiến trúc UX/UI Bento** (Thẻ bo góc lớn 24px - 32px, nút bấm bo tròn tuyệt đối 9999px) và bảng màu phong thủy Hỏa - Thổ của DIGO.

## • Điều kiện tiên quyết (Prerequisites)

Để chạy dự án này, môi trường phát triển cần đảm bảo:

* Node.js (Phiên bản >= 18.x)
* Trình quản lý gói: `npm` hoặc `bun`
* Truy cập vào kho lưu trữ mã nguồn của DIGO và các biến môi trường (API Keys) liên quan.

## • Cách cài đặt (Installation)

Thực hiện các bước sau để thiết lập môi trường local:

1. **Clone mã nguồn:**
```bash
git clone https://github.com/vuongdiensharing-performance/digo-edutech.git
cd digo-edutech/[thư-mục-module]
```

2. **Cài đặt thư viện (Dependencies):**
```bash
npm install
# hoặc dùng bun install
```

3. **Thiết lập môi trường:** Copy file `.env.example` thành `.env.local` và điền các thông số bảo mật theo chuẩn Zero-Trust của dự án.

## • Cách sử dụng (Usage)

Khởi chạy máy chủ phát triển (Development Server):

```bash
npm run dev
```

Truy cập `http://localhost:3000` trên trình duyệt.
*(Bổ sung thêm: Cú pháp gọi API, luồng sử dụng hoặc cách check dữ liệu trên dashboard nội bộ).*

## • Khắc phục sự cố (Troubleshooting / FAQ)

* **Lỗi 403 Forbidden trên trình duyệt:** Kiểm tra lại file cấu hình (ví dụ `vite.config.ts`), đảm bảo đã cấp phép `allowedHosts` cho môi trường phát triển.
* **Lỗi font chữ tiếng Việt:** Đảm bảo hệ thống đang gọi đúng font **Be Vietnam Pro** cho Body text và **Plus Jakarta Sans** cho Headings.
* **Thất thoát dữ liệu đo lường:** Kiểm tra lại kết nối Hạ tầng CAPI & CRM để đảm bảo kiểm soát trọn vẹn từ Lead đến Doanh thu.

## • Cách đóng góp (Contributing)

Mọi đóng góp (Pull Request) đều phải trải qua quá trình kiểm duyệt khắt khe dựa trên **Brand Governance** và **Execution Guardrails** của DIGO:

1. **Màu sắc:** Phải sử dụng chuẩn xác 4 mã màu: Trắng Đất Sét Ngà (`#F7F5F0`), Đen Đá Bazan (`#0F0E0E`), Đỏ Đế Chế (`#D91B24` - Bắt buộc cho CTA), Vàng Hổ Phách (`#C88A32`).
2. **Logo:** Không dùng hiệu ứng AI, gradient hay phát sáng. Luôn giữ trục ngang 0 độ, không đặt nghiêng.
3. **Thông điệp (Copywriting):** Tuyệt đối không dùng các từ "Cam kết bùng nổ", "Giá tin nhắn siêu rẻ". Bắt buộc dùng thuật ngữ chuẩn: "Tối ưu CPQL", "Đối soát 1:1", "Trang đích <1.2s".

## • Giấy phép (License)

Dự án áp dụng **CAM KẾT BẢO MẬT (NDA) - An Ninh Dữ Liệu Tuyệt Đối**. Mọi dữ liệu đối tác, mã nguồn và kiến trúc hệ thống được bảo vệ theo chuẩn Zero-Trust. Không được phép sao chép hay phân phối ra bên ngoài khi chưa có sự chấp thuận của Ban Lãnh Đạo DIGO EduTech. Xem chi tiết toàn văn pháp lý tại [`LICENSE.md`](../LICENSE.md).

## • Thông tin liên lạc / Tác giả (Credits / Contact)

Được định hướng và xây dựng bởi Đội ngũ Lãnh đạo DIGO EduTech:

* **Nguyễn Hoàng Vương Điền (CEO / CMO):** Phụ trách Kiến trúc tăng trưởng & Hạ tầng công nghệ.
* **Lê Thị Thanh Gô (CAO / CPO):** Phụ trách Chất lượng học thuật & Phương pháp sư phạm.
