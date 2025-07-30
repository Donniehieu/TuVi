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

// Tổ hợp chính tinh với chính tinh (728 tổ hợp, có thứ tự)
function toHopChinhVoiChinhCoThuTu() {
  const result = [];
  for (let i = 0; i < chinhTinh.length; i++) {
    for (let j = 0; j < chinhTinh.length; j++) {
      if (i !== j) {
        for (let tt1 of trangThai) {
          for (let tt2 of trangThai) {
            result.push([
              `${chinhTinh[i]} ${tt1} toạ thủ tại Mệnh gặp ${chinhTinh[j]} ở Nô Bộc ${tt2}`
            ]);
          }
        }
      }
    }
  }
  return result;
}

// Tổ hợp chính tinh với sát tinh (392 tổ hợp)
function toHopChinhVoiSat() {
  const result = [];
  for (let i = 0; i < chinhTinh.length; i++) {
    for (let j = 0; j < satTinh.length; j++) {
      for (let tt1 of trangThai) {
        for (let tt2 of trangThai) {
          result.push([
            `${chinhTinh[i]} ${tt1} toạ thủ tại Mệnh gặp ${satTinh[j]} ở Nô Bộc ${tt2}`
          ]);
        }
      }
    }
  }
  return result;
}

// Tổ hợp sát tinh với sát tinh (60 tổ hợp, có thứ tự)
function toHopSatVoiSatCoThuTu() {
  const result = [];
  for (let i = 0; i < satTinh.length; i++) {
    for (let j = 0; j < satTinh.length; j++) {
      if (i !== j) {
        for (let tt1 of trangThai) {
          for (let tt2 of trangThai) {
            result.push([
              `${satTinh[i]} ${tt1} toạ thủ tại Mệnh gặp ${satTinh[j]} ở Nô Bộc ${tt2}`
            ]);
          }
        }
      }
    }
  }
  return result;
}

function exportExcel() {
  const chinhChinh = toHopChinhVoiChinhCoThuTu();
  const chinhSat = toHopChinhVoiSat();
  const satSat = toHopSatVoiSatCoThuTu();

  const wb = XLSX.utils.book_new();
  const ws1 = XLSX.utils.aoa_to_sheet([["Tổ hợp chính tinh với chính tinh"]].concat(chinhChinh));
  const ws2 = XLSX.utils.aoa_to_sheet([["Tổ hợp chính tinh với sát tinh"]].concat(chinhSat));
  const ws3 = XLSX.utils.aoa_to_sheet([["Tổ hợp sát tinh với sát tinh"]].concat(satSat));

  XLSX.utils.book_append_sheet(wb, ws1, "ChinhTinh_ChinhTinh");
  XLSX.utils.book_append_sheet(wb, ws2, "ChinhTinh_SatTinh");
  XLSX.utils.book_append_sheet(wb, ws3, "SatTinh_SatTinh");

  XLSX.writeFile(wb, "tohop_sao_full.xlsx");
  
}

exportExcel();