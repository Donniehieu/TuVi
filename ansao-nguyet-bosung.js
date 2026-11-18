/* Tử Vi phổ biến: bổ sung Thiên Vu, Thiên Nguyệt, Âm Sát (hệ sao nguyệt, bảng 13 sách Mệnh Lý Thiên Cơ) - các sao này Nam Phái có mà app thường chưa có.
 * Nạp SAU ansaophutinh.js. Giống TuViEngine.cs (Unity). */
(function () {
    'use strict';
    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const HANH = { thuy: "hanh-thuy" };
    const THIEN_VU = ["Tỵ", "Thân", "Dần", "Hợi", "Tỵ", "Thân", "Dần", "Hợi", "Tỵ", "Thân", "Dần", "Hợi"];
    const THIEN_NGUYET = ["Tuất", "Tỵ", "Thìn", "Dần", "Mùi", "Mão", "Hợi", "Mùi", "Dần", "Ngọ", "Tuất", "Dần"];
    const AM_SAT = ["Dần", "Tý", "Tuất", "Thân", "Ngọ", "Thìn", "Dần", "Tý", "Tuất", "Thân", "Ngọ", "Thìn"];
    function put(chi, ten) {
        const c = CUNG_CELLS.find(x => x.chi === chi); if (!c) return;
        const cell = document.querySelector('.cell' + c.cell); if (!cell) return;
        cell.insertAdjacentHTML('beforeend', '<div class="phutinhthem-label sao-xau ' + HANH.thuy + ' phu-tinh">' + ten + '</div>');
    }
    const org = window.anSaoTheoThangSinh;
    window.anSaoTheoThangSinh = function (thang_am, menhIdx) {
        const r = org(thang_am, menhIdx);
        const m = ((thang_am - 1) % 12 + 12) % 12;
        put(THIEN_VU[m], "Thiên Vu"); put(THIEN_NGUYET[m], "Thiên Nguyệt"); put(AM_SAT[m], "Âm Sát");
        return r;
    };
})();
