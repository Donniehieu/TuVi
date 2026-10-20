# Tử Vi — Lập lá số & luận giải

Ứng dụng web thuần HTML/CSS/JavaScript, chạy trên GitHub Pages.

## Cách dùng
1. Mở trang chủ (`index.html`), nhập họ tên, ngày giờ sinh dương lịch, giới tính và năm xem hạn.
2. Bấm **Xem tử vi** để lập lá số. Kết quả có 3 màn hình:
   - **Bàn lá số**: tự co vừa màn hình, có nút phóng to / thu nhỏ, toàn màn hình và tải ảnh.
   - **Từng cung**: mỗi cung là một thẻ dễ đọc trên điện thoại.
   - **Thông tin**: ngày âm lịch, mệnh, cục, các giờ phạm.
3. Bấm **Xem luận giải** để sang `luangiai.html`.

## Cấu trúc chính
| File | Vai trò |
|---|---|
| `index.html`, `style.css`, `ui.js` | Giao diện trang lập lá số (responsive) |
| `laplaso.js`, `ansao*.js`, `tinhdaitieuvan.js`, ... | Logic an sao (giữ nguyên) |
| `amlich-convert.js` | Đổi dương lịch sang âm lịch, can chi |
| `chuplaso.js` | Chụp ảnh bàn lá số cho trang luận giải và nút "Tải ảnh" |
| `luangiai.html`, `styleluangiai.css`, `luangiai.js`, `luangiai-fix.js` | Trang luận giải |
| `*.xlsx` | Dữ liệu luận giải (tra theo bộ sao) |

## Lưu ý khi phát triển
- Bàn lá số có kích thước thiết kế cố định **900 × 1170 px** (các vị trí sao được căn bằng px). Việc vừa khít màn hình do `ui.js` co giãn bằng CSS `transform`. Đừng đổi sang đơn vị `vh`/`vw`.
- `drawTamHopByMenhIdx` đo bằng `getBoundingClientRect`, nên phải vẽ đường tam hợp **trước** khi áp dụng co giãn (đã được bố trí sẵn trong `chuplaso.js` → `TuViUI.onChartReady`).
- Trang luận giải cần mở qua http(s) (GitHub Pages hoặc server cục bộ) vì đọc file `.xlsx` bằng `fetch`.
