const XLSX = require('xlsx');

// 14 chính tinh
const chinhTinh = [
  "Tử Vi", "Thiên Cơ", "Thái Dương", "Vũ Khúc", "Thiên Đồng", "Liêm Trinh",
  "Thất Sát", "Phá Quân", "Thiên Tướng", "Thái Âm", "Thiên Lương",
  "Cự Môn", "Thiên Phủ", "Tham Lang"
];
// 6 sát tinh
const satTinh = [
  "Kình Dương", "Đà La", "Linh Tinh", "Hỏa Tinh", "Thiên Hình", "Thiên Không"
];
const trangThai = ["sao sáng", "sao tối"];

// Tổ hợp chính tinh với chính tinh
function toHopChinhVoiChinh() {
  const result = [];
  for (let i = 0; i < chinhTinh.length - 1; i++) {
    for (let j = i + 1; j < chinhTinh.length; j++) {
      for (let tt1 of trangThai) {
        for (let tt2 of trangThai) {
          // Đúng cấu trúc: Sao 1 [trạng thái] toạ thủ tại Mệnh gặp Sao 2 ở Nô Bộc [trạng thái]
          result.push([
            `${chinhTinh[i]} ${tt1} toạ thủ tại Mệnh gặp ${chinhTinh[j]} ở Nô Bộc ${tt2}`
          ]);
        }
      }
    }
  }
  return result;
}

// Tổ hợp chính tinh với sát tinh
function toHopChinhVoiSat() {
  const result = [];
  for (let i = 0; i < chinhTinh.length; i++) {
    for (let j = 0; j < satTinh.length; j++) {
      for (let tt1 of trangThai) {
        for (let tt2 of trangThai) {
          // Đúng cấu trúc: Chính tinh [trạng thái] toạ thủ tại Mệnh gặp Sát tinh ở Nô Bộc [trạng thái]
          result.push([
            `${chinhTinh[i]} ${tt1} toạ thủ tại Mệnh gặp ${satTinh[j]} ở Nô Bộc ${tt2}`
          ]);
        }
      }
    }
  }
  return result;
}

function exportExcel() {
  const chinhChinh = toHopChinhVoiChinh();
  const chinhSat = toHopChinhVoiSat();

  const wb = XLSX.utils.book_new();
  const ws1 = XLSX.utils.aoa_to_sheet([["Tổ hợp chính tinh với chính tinh"]].concat(chinhChinh));
  const ws2 = XLSX.utils.aoa_to_sheet([["Tổ hợp chính tinh với sát tinh"]].concat(chinhSat));

  XLSX.utils.book_append_sheet(wb, ws1, "ChinhTinh_ChinhTinh");
  XLSX.utils.book_append_sheet(wb, ws2, "ChinhTinh_SatTinh");

  XLSX.writeFile(wb, "tohop_sao.xlsx");
  
}

exportExcel();