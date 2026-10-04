# Trang Tin Tức - Truyền Hình Công Thương

Dự án giao diện website tin tức hiện đại cho **Truyền Hình Công Thương - Bộ Công Thương Việt Nam**, được thiết kế theo phong cách tạp chí báo chí quốc tế cao cấp (editorial magazine layout).

---

## 🚀 Công Nghệ Sử Dụng

- **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter) (nhẹ & tối ưu)
- **Quản lý gói**: [pnpm](https://pnpm.io/) (Monorepo Workspace)

---

## 📋 Yêu Cầu Môi Trường

Trước khi bắt đầu, hãy đảm bảo máy tính đã cài đặt:
1. **Node.js**: Phiên bản **18.x** hoặc **20.x+** trở lên ([Tải tại nodejs.org](https://nodejs.org/))
2. **pnpm**: Nếu chưa có, cài đặt bằng lệnh:
   ```bash
   npm install -g pnpm
   ```

---

## 🛠️ Hướng Dẫn Cài Đặt & Chạy Project

### Cách 1: Chạy từ thư mục gốc `Vietnamese-News-Website` (Khuyên dùng)

1. Mở terminal tại thư mục `Vietnamese-News-Website`:
   ```bash
   cd Vietnamese-News-Website
   ```

2. Cài đặt các thư viện phụ thuộc:
   ```bash
   pnpm install
   ```

3. Khởi động môi trường phát triển (Development Server):
   ```bash
   pnpm dev
   ```

4. Mở trình duyệt web và truy cập:
   ```text
   http://localhost:3000
   ```

---

### Cách 2: Chạy trực tiếp từ thư mục `artifacts/ban-tin-moi`

Nếu bạn muốn vào thẳng thư mục chứa mã nguồn ứng dụng web:

1. Di chuyển vào thư mục ứng dụng:
   ```bash
   cd Vietnamese-News-Website/artifacts/ban-tin-moi
   ```

2. Cài đặt thư viện (nếu chưa cài):
   ```bash
   pnpm install
   ```

3. Chạy dev server:
   ```bash
   pnpm dev
   ```

---

## 📦 Các Lệnh Khác

| Lệnh | Mô tả |
| :--- | :--- |
| `pnpm dev` | Chạy dev server tại `http://localhost:3000` (hỗ trợ Hot Module Replacement - cập nhật ngay khi sửa code) |
| `pnpm build` | Biên dịch & tối ưu hóa mã nguồn cho bản production vào thư mục `dist/public` |
| `pnpm serve` *(trong `artifacts/ban-tin-moi`)* | Chạy thử bản production build ở local |

---

## 📂 Cấu Trúc Thư Mục Chính

```text
Vietnamese-News-Website/
├── artifacts/
│   └── ban-tin-moi/               # Mã nguồn chính của website
│       ├── public/                # Tài nguyên tĩnh (favicon, logo, icons)
│       ├── src/
│       │   ├── assets/            # Hình ảnh banner (EVFTA, ảnh bài viết, logo)
│       │   ├── App.tsx            # Toàn bộ components & layout (Header, Footer, HomePage, ArticlePage, CategoryPage, ...)
│       │   ├── data.ts            # Dữ liệu mẫu (Tin tức, chuyên mục, video)
│       │   ├── index.css          # Cấu hình màu sắc, typography & animation
│       │   └── main.tsx           # Điểm khởi chạy React
│       ├── index.html             # File HTML gốc
│       ├── package.json           # Danh sách thư viện frontend
│       └── vite.config.ts         # Cấu hình Vite & cấu hình cổng 3000
├── package.json                   # Cấu hình workspace gốc
├── pnpm-workspace.yaml            # Cấu hình pnpm monorepo
└── README.md                      # Tài liệu hướng dẫn dự án
```

---

## ✨ Tính Năng Nổi Bật

- **Trang chủ (HomePage)**:
  - Header mang nhận diện thương hiệu Truyền Hình Công Thương với logo và menu chuyên mục đa tầng.
  - Bản tin buổi sáng: Bài viết trọng tâm kèm 04 câu chuyện mới nhất.
  - Lưới chuyên mục Matrix 2 hàng x 3 cột (`Khám phá theo chuyên mục`).
  - Cột Xu hướng (Trending Stories) và Banner tài trợ bên phải.
  - Băng chuyền Video đa phương tiện (Video Slider Section) ở chân trang với nút điều hướng lùi/tiến 2 bên.
- **Trang bài viết chi tiết (ArticlePage)**:
  - Tự động hiển thị khung phát Video chuẩn Full HD khi xem bài viết thuộc định dạng Video phóng sự.
  - Thanh công cụ chia sẻ đa kênh: Facebook, Zalo, X/Twitter, Sao chép liên kết (kèm thông báo), In bài viết.
  - Tin tức liên quan cùng chuyên mục.
  - Hệ thống Ý kiến bạn đọc (gửi bình luận và xem ý kiến độc giả).
  - Cột bài viết mới nhất kèm Sticky Banner Hiệp định Việt Nam - EU bám dính khi cuộn trang.
