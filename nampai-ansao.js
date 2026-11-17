/* Tử Vi Nam Phái: quy tắc an sao theo Chương I sách "Mệnh Lý Thiên Cơ" (Lê Quang Lăng).
 * Nạp SAU ansaophutinh.js để thay các hàm an sao khác với app thường:
 *  - Hỏa Tinh, Linh Tinh: chỉ đếm thuận theo giờ (không đảo chiều theo âm dương nam nữ);
 *  - Thiên Mã, Giải Thần: an theo THÁNG sinh (hệ sao nguyệt), không theo năm;
 *  - Thiên Vu, Thiên Nguyệt, Âm Sát: hệ sao nguyệt (bảng 13);
 *  - Thiên Quý: từ Văn Khúc đếm thuận tới ngày sinh rồi lùi 1 cung;
 *  - Thiên Khôi, Thiên Việt: tuổi Canh an ở Sửu, Mùi (bảng 15).
 * Các sao còn lại giữ cách an của app (đã khớp bảng của sách).
 */
(function () {
    'use strict';
    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const HANH = { kim: "hanh-kim", moc: "hanh-moc", thuy: "hanh-thuy", hoa: "hanh-hoa", tho: "hanh-tho" };

    function cellOfChi(chi) {
        const c = CUNG_CELLS.find(x => x.chi === chi);
        return c ? document.querySelector('.cell' + c.cell) : null;
    }
    function putStar(chi, ten, className, loai, hanh) {
        const cell = cellOfChi(chi);
        if (!cell) return;
        cell.insertAdjacentHTML('beforeend',
            `<div class="${className} ${loai === 'xau' ? 'sao-xau' : 'sao-tot'} ${HANH[hanh] || ''} phu-tinh">${ten}</div>`);
    }
    function chiAt(startChi, buoc) { return CHI12[(CHI12.indexOf(startChi) + buoc % 12 + 12) % 12]; }

    // ---- Hỏa Tinh, Linh Tinh (bảng 12): đếm thuận theo giờ sinh từ cung khởi theo nhóm chi năm
    window.anSaoHoaLinhTinh = function (chiNam, gioitinh, canNam, gio_sinh_chi) {
        document.querySelectorAll('.laso-cell').forEach(cell => {
            cell.querySelectorAll('.sao-hoa-tinh, .sao-linh-tinh').forEach(e => e.remove());
        });
        const nhom = [["Dần", "Ngọ", "Tuất"], ["Thân", "Tý", "Thìn"], ["Tỵ", "Dậu", "Sửu"], ["Hợi", "Mão", "Mùi"]];
        const khoiHoa = ["Sửu", "Dần", "Mão", "Dậu"];
        const khoiLinh = ["Mão", "Tuất", "Tuất", "Tuất"];
        const g = nhom.findIndex(n => n.includes(chiNam));
        const gio = CHI12.indexOf(gio_sinh_chi);
        if (g < 0 || gio < 0) return;
        putStar(chiAt(khoiHoa[g], gio), "Hỏa Tinh", "sao-hoa-tinh", "xau", "hoa");
        putStar(chiAt(khoiLinh[g], gio), "Linh Tinh", "sao-linh-tinh", "xau", "hoa");
    };

    // ---- Thiên Khôi, Thiên Việt (bảng 15) + Lưu Hà, Thiên Trù, Thiên Quan, Thiên Phúc như app
    const orgKhoiViet = window.anSaoThienKhoiVietLuuHa;
    window.anSaoThienKhoiVietLuuHa = function (canNam) {
        orgKhoiViet(canNam);
        if (canNam === "C.") {   // Canh: sách an Khôi ở Sửu, Việt ở Mùi (app thường an ở Ngọ, Dần)
            document.querySelectorAll('.laso-cell').forEach(cell => {
                cell.querySelectorAll('.sao-thien-khoi, .sao-thien-viet').forEach(e => e.remove());
            });
            putStar("Sửu", "Thiên Khôi", "sao-thien-khoi", "tot", "hoa");
            putStar("Mùi", "Thiên Việt", "sao-thien-viet", "tot", "hoa");
        }
    };

    // ---- Thiên Mã theo năm (app thường) bị bỏ: Nam Phái an Thiên Mã theo tháng sinh
    const orgHoaCai = window.anHoaCaiDaoHoaThienMaKiepSat;
    window.anHoaCaiDaoHoaThienMaKiepSat = function (chiNam) {
        orgHoaCai(chiNam);
        document.querySelectorAll('.laso-cell').forEach(cell => {
            cell.querySelectorAll('.sao-thien-ma').forEach(e => e.remove());
        });
    };
    // ---- Giải Thần theo năm (app thường) bị bỏ: Nam Phái an Giải Thần theo tháng sinh
    const orgHongLoan = window.anHongLoanThienHyPhuongCacGiaiThan;
    window.anHongLoanThienHyPhuongCacGiaiThan = function (chiNam) {
        orgHongLoan(chiNam);
        document.querySelectorAll('.laso-cell').forEach(cell => {
            cell.querySelectorAll('.sao-giai-than').forEach(e => e.remove());
        });
    };

    // ---- Hệ sao nguyệt bổ sung (bảng 13): Thiên Mã, Giải Thần, Thiên Vu, Thiên Nguyệt, Âm Sát
    const THIEN_MA = ["Thân", "Tỵ", "Dần", "Hợi", "Thân", "Tỵ", "Dần", "Hợi", "Thân", "Tỵ", "Dần", "Hợi"];
    const GIAI_THAN = ["Thân", "Thân", "Tuất", "Tuất", "Tý", "Tý", "Dần", "Dần", "Thìn", "Thìn", "Ngọ", "Ngọ"];
    const THIEN_VU = ["Tỵ", "Thân", "Dần", "Hợi", "Tỵ", "Thân", "Dần", "Hợi", "Tỵ", "Thân", "Dần", "Hợi"];
    const THIEN_NGUYET = ["Tuất", "Tỵ", "Thìn", "Dần", "Mùi", "Mão", "Hợi", "Mùi", "Dần", "Ngọ", "Tuất", "Dần"];
    const AM_SAT = ["Dần", "Tý", "Tuất", "Thân", "Ngọ", "Thìn", "Dần", "Tý", "Tuất", "Thân", "Ngọ", "Thìn"];
    const orgThang = window.anSaoTheoThangSinh;
    window.anSaoTheoThangSinh = function (thang_am, menhIdx) {
        const r = orgThang(thang_am, menhIdx);   // hàm gốc xóa các nhãn 'phutinhthem-label' cũ rồi an lại
        const m = ((thang_am - 1) % 12 + 12) % 12;
        const them = [
            [THIEN_MA[m], "Thiên Mã", "tot", "hoa"],
            [GIAI_THAN[m], "Giải Thần", "tot", "moc"],
            [THIEN_VU[m], "Thiên Vu", "xau", "thuy"],
            [THIEN_NGUYET[m], "Thiên Nguyệt", "xau", "thuy"],
            [AM_SAT[m], "Âm Sát", "xau", "thuy"],
        ];
        them.forEach(t => putStar(t[0], t[1], "phutinhthem-label", t[2], t[3]));
        return r;
    };

    // ---- Thiên Quý (bảng 14): từ Văn Khúc đếm THUẬN tới ngày sinh, rồi lùi 1 cung
    const orgNgay = window.anSaoTheoNgaySinh;
    window.anSaoTheoNgaySinh = function (ngay_am, saoThangSinhIdx, saoGioSinhIdx) {
        orgNgay(ngay_am, saoThangSinhIdx, saoGioSinhIdx);
        document.querySelectorAll('.laso-cell').forEach(cell => {
            cell.querySelectorAll('.sao-thien-quy').forEach(e => e.remove());
        });
        if (saoGioSinhIdx && typeof saoGioSinhIdx.vanKhuc === 'number') {
            const idx = ((saoGioSinhIdx.vanKhuc + (ngay_am - 2)) % 12 + 12) % 12;
            const cell = document.querySelector('.cell' + CUNG_CELLS[idx].cell);
            if (cell) cell.insertAdjacentHTML('beforeend', '<div class="sao-thien-quy sao-tot hanh-tho phu-tinh">Thiên Quý</div>');
        }
    };
})();
