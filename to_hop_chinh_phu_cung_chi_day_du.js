const fs = require('fs');

// 12 cung Bắc phái
const CUNG = [
  "Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch",
  "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách",
  "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"
];

// 12 địa chi
const CHI = [
  "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ",
  "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"
];

// 14 chính tinh Bắc phái
const CHINH_TINH = [
  "Tử Vi", "Thiên Cơ", "Thái Dương", "Vũ Khúc", "Thiên Đồng", "Liêm Trinh",
  "Thiên Phủ", "Thái Âm", "Tham Lang", "Cự Môn", "Thiên Tướng", "Thiên Lương",
  "Thất Sát", "Phá Quân"
];

// phụ tinh Bắc phái
const PHU_TINH = [
  "Thiên Giải", "Thiên Mã", "Thiên Tài", "Thiên Thọ", "Hóa Lộc", "L. Hóa Quyền", "Đại Hao", "Tang Môn", "Cô Thần", "L. Đà La",
  "Thiên Khôi (ĐV)", "Tam Thai", "Thiếu Âm", "Hồng Loan", "L. Lộc Tồn", "Thiên Hình", "Phục Binh", "Hữu Bật", "Văn Xương", "Long Trì",
  "Hoa Cái", "Hóa Khoa", "Linh Tinh", "Đà La", "Thiên La", "Quan Phủ", "Quan Phù", "L. Kình Dương", "Thiên Việt (ĐV)", "Lộc Tồn", 
  "Bác Sĩ", "Thiên Quan", "Nguyệt Đức", "Địa Kiếp", "Địa Không", "Tử Phù", "Kiếp Sát", "Phá Toái", "L. Thái Tuế", "Thiên Quý",
  "Lực Sĩ", "Hóa Quyền", "L. Hóa Lộc", "Kình Dương", "Tuế Phá", "Thiên Hư", "Thiên Khốc", "Thiên Y", "Thanh Long", "Long Đức",
  "L. Hóa Khoa", "(Hóa Lộc - ĐV)", "Thiên Riêu", "Thiên Thương", "Lưu Hà", "L. Tang Môn", "Phong Cáo", "Ân Quang", "Văn Tinh",
  "Hỏa Tinh", "Tiểu Hao", "Bạch Hổ", "Tướng Quân", "Thiên Việt", "Phúc Đức", "Thiên Đức", "Đào Hoa", "Thiên Hỷ", "Thiên Sứ",
  "Tả Phù", "Văn Khúc", "Tấu Thư", "Đường Phù", "Phượng Các", "Giải Thần", "(Hóa Khoa - ĐV)", "Địa Võng", "Điếu Khách",
  "Quả Tú", "L. Hóa Kỵ", "Thiên Mã (ĐV)", "Bát Tọa", "Thiên Khôi", "L. Thiên Mã", "Đà La (ĐV)", "Phi Liêm", "Trực Phù",
  "Hóa Kỵ", "L. Thiên Hư", "(Hóa Kỵ - ĐV)", "Lộc Tồn (ĐV)", "Thai Phụ", "Hỷ Thần", "Thiên Trù", "Thiên Phúc", "(Hóa Quyền - ĐV)",
  "Thái Tuế", "Đẩu Quân", "Địa Giải", "Quốc Ấn", "Thiếu Dương", "Kình Dương (ĐV)", "Bệnh Phù", "Thiên Không", "L. Bạch Hổ", "L. Thiên Khốc"
];
// Sinh tổ hợp 2 chính tinh không trùng (không xét thứ tự)
function sinhCapChinhTinh(arr) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}

// Chuẩn bị dữ liệu CSV
let rows = [];
rows.push(['Type', 'Sao', 'Cung', 'Chi', 'Text']); // Header

// 1. Phụ tinh: mỗi phụ tinh/cung/chi
for (const pt of PHU_TINH) {
  for (const cung of CUNG) {
    for (const chi of CHI) {
      rows.push(['Phụ tinh', pt, cung, chi, `${pt} tọa thủ tại ${cung}`]);
    }
  }
}

// 2. Chính tinh đơn: mỗi chính tinh/cung/chi
for (const ct of CHINH_TINH) {
  for (const cung of CUNG) {
    for (const chi of CHI) {
      rows.push(['Chính tinh', ct, cung, chi, `${ct} tọa thủ tại ${chi}`]);
    }
  }
}

// 3. Chính tinh đồng cung: mỗi cặp/cung/chi
const capChinhTinh = sinhCapChinhTinh(CHINH_TINH);
for (const [ct1, ct2] of capChinhTinh) {
  for (const cung of CUNG) {
    for (const chi of CHI) {
      rows.push(['Chính tinh', `${ct1} + ${ct2}`, cung, chi, `${ct1} và ${ct2} đồng cung tại ${chi}`]);
    }
  }
}

// 4. Vô Chính Diệu: mỗi cung/chi
for (const cung of CUNG) {
  for (const chi of CHI) {
    rows.push(['Chính tinh', '', cung, chi, `${cung} Vô Chính Diệu`]);
  }
}

// Ghi file CSV UTF-8 BOM
const BOM = '\uFEFF';
const csv = BOM + rows.map(row =>
  row.map(cell =>
    `"${String(cell).replace(/"/g, '""')}"`
  ).join(',')
).join('\n');

fs.writeFileSync('to_hop_chinh_phu_cung_chi_day_du.csv', csv, 'utf8');
