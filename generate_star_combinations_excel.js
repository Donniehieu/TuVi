// Cần cài đặt thư viện 'xlsx' để xuất file Excel: npm install xlsx
const XLSX = require('xlsx');
const fs = require('fs');

// Danh sách chính tinh
const chinh_tinh = [
  "Tử Vi", "Thiên Cơ", "Thái Dương", "Vũ Khúc", "Thiên Đồng", "Liêm Trinh",
  "Thiên Phủ", "Thái Âm", "Tham Lang", "Cự Môn", "Thiên Tướng", "Thiên Lương",
  "Thất Sát", "Phá Quân"
];

// Danh sách sát tinh
const sat_tinh = [
  "Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp"
];

// Trạng thái sáng/tối
const trang_thai = ["sao sáng", "sao tối"];

function sinhTruongHop() {
  const results = [];
  chinh_tinh.forEach(ct => {
    sat_tinh.forEach(st => {
      trang_thai.forEach(tt1 => {
        trang_thai.forEach(tt2 => {
          results.push({
            "Cấu trúc": `${ct} ${tt1} toạ thủ cung Quan Lộc gặp ${st} ${tt2}`
          });
        });
      });
    });
  });
  return results;
}

function xuatExcel(filename = "cac_truong_hop_sao.xlsx") {
  const cases = sinhTruongHop();
  const worksheet = XLSX.utils.json_to_sheet(cases);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Trường hợp sao");
  XLSX.writeFile(workbook, filename);

}

xuatExcel();