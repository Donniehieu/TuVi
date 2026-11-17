/* lasotheme.js — giao diện bàn lá số giống bản Unity + xóa dữ liệu lá số cũ.
 * - xoaLasoCu(): gọi đầu mỗi lần bấm "Xem tử vi": xóa laso_data, ảnh bàn lá số và các nhãn vẽ thêm của lá số trước.
 * - apDungGiaoDienLaSo(): gọi sau khi đã an sao: đánh dấu cung Mệnh, màu tên cung theo hành, dấu âm dương + hành, sao lưu in nghiêng.
 */
function xoaLasoCu() {
    try { localStorage.removeItem('laso_data'); } catch (e) { }
    try { localStorage.removeItem('anhBanLaSo'); } catch (e) { }
    document.querySelectorAll('.tuan-border, .triet-border, .tam-hop-line, .tam-hop-dot').forEach(function (e) { e.remove(); });
    document.querySelectorAll('.laso-cell').forEach(function (c) { c.classList.remove('cell-menh'); });
}

function apDungGiaoDienLaSo() {
    try { apDungHangDuoiVaDoSang(); } catch (e) { if (window.console) console.warn('Giao diện lá số:', e); }
    var CAN_DUONG = { 'G.': 1, 'B.': 1, 'M.': 1, 'C.': 1, 'N.': 1 };
    var TEN_HANH = { 'hanh-kim': 'Kim', 'hanh-moc': 'Mộc', 'hanh-thuy': 'Thủy', 'hanh-hoa': 'Hỏa', 'hanh-tho': 'Thổ' };
    document.querySelectorAll('.laso-cell:not(.center)').forEach(function (cell) {
        var ten = cell.querySelector('.ten-cung');
        var chiEl = cell.querySelector('.chi-cung');
        if (!ten || !chiEl) return;
        var hanh = ['hanh-kim', 'hanh-moc', 'hanh-thuy', 'hanh-hoa', 'hanh-tho'].filter(function (h) { return chiEl.classList.contains(h); })[0];
        var laMenh = /^\s*Mệnh/.test(ten.textContent);
        cell.classList.toggle('cell-menh', laMenh);
        if (hanh && !laMenh) ten.classList.add(hanh);
        // dấu âm dương của can + hành của chi, như bản Unity (ví dụ "+Thổ")
        if (hanh && !cell.querySelector('.am-duong-hanh')) {
            var can = chiEl.textContent.trim().split(/\s+/)[0];
            var d = document.createElement('div');
            d.className = 'am-duong-hanh ' + hanh;
            d.textContent = (CAN_DUONG[can] ? '+' : '−') + TEN_HANH[hanh];
            cell.appendChild(d);
        }
        // sao lưu / sao đại vận in nghiêng
        cell.querySelectorAll('.phu-tinh, .sao-tot, .sao-xau, .tu-hoa').forEach(function (n) {
            if (n.children.length) return;
            var t = n.textContent.trim();
            if (/^\(?L\./.test(t) || /ĐV/.test(t)) n.classList.add('sao-luu-ngang');
        });
    });
}

/* ---- Hàng dưới "ĐV." / "LN.", thẻ Đại hạn / Tiểu hạn, độ sáng chính tinh (như bản Unity) ---- */
var DO_SANG_WEB = (function () {
    var rows = [
        'Tử Vi|M:Tỵ,Ngọ,Dần,Thân;V:Thìn,Tuất;Đ:Sửu,Mùi;B:Hợi,Tý,Mão,Dậu',
        'Liêm Trinh|M:Thìn,Tuất;V:Tý,Ngọ,Dần,Thân;Đ:Sửu,Mùi;H:Tỵ,Hợi,Mão,Dậu',
        'Thiên Đồng|M:Dần,Thân;V:Tý;Đ:Mão,Tỵ,Hợi;H:Ngọ,Dậu,Thìn,Tuất,Sửu,Mùi',
        'Vũ Khúc|M:Thìn,Tuất,Sửu,Mùi;V:Dần,Thân,Tý,Ngọ;Đ:Mão,Dậu;H:Tỵ,Hợi',
        'Thái Dương|M:Tỵ,Ngọ;V:Dần,Mão,Thìn;Đ:Sửu,Mùi;H:Thân,Dậu,Tuất,Hợi,Tý',
        'Thiên Cơ|M:Thìn,Tuất,Mão,Dậu;V:Tỵ,Thân;Đ:Tý,Ngọ,Sửu,Mùi;H:Dần,Hợi',
        'Thiên Phủ|M:Dần,Thân,Tý,Ngọ;V:Thìn,Tuất;Đ:Tỵ,Hợi,Mùi;B:Mão,Dậu,Sửu',
        'Thái Âm|M:Dậu,Tuất,Hợi;V:Thân,Tý;Đ:Sửu,Mùi;H:Dần,Mão,Thìn,Tỵ,Ngọ',
        'Tham Lang|M:Sửu,Mùi;V:Thìn,Tuất;Đ:Dần,Thân;H:Tỵ,Hợi,Tý,Ngọ,Mão,Dậu',
        'Cự Môn|M:Mão,Dậu;V:Tý,Ngọ,Dần;Đ:Thân,Hợi;H:Thìn,Tuất,Sửu,Mùi,Tỵ',
        'Thiên Tướng|M:Dần,Thân;V:Thìn,Tuất,Tý,Ngọ;Đ:Sửu,Mùi,Tỵ,Hợi;H:Mão,Dậu',
        'Thiên Lương|M:Ngọ,Thìn,Tuất;V:Tý,Mão,Dần,Thân;Đ:Sửu,Mùi;H:Dậu,Tỵ,Hợi',
        'Thất Sát|M:Dần,Thân,Tý,Ngọ;V:Tỵ,Hợi;Đ:Sửu,Mùi;H:Mão,Dậu,Thìn,Tuất',
        'Phá Quân|M:Tý,Ngọ;V:Sửu,Mùi;Đ:Thìn,Tuất;H:Mão,Dậu,Dần,Thân,Tỵ,Hợi'
    ];
    var all = {};
    rows.forEach(function (r) {
        var parts = r.split('|'), map = {};
        parts[1].split(';').forEach(function (g) { var kv = g.split(':'); kv[1].split(',').forEach(function (chi) { map[chi] = kv[0]; }); });
        all[parts[0]] = map;
    });
    return all;
})();
var TEN_NGAN_WEB = { 'Mệnh': 'MỆNH', 'Phụ Mẫu': 'PHỤ', 'Phúc Đức': 'PHÚC', 'Điền Trạch': 'ĐIỀN', 'Quan Lộc': 'QUAN', 'Nô Bộc': 'NÔ', 'Thiên Di': 'DI', 'Tật Ách': 'TẬT', 'Tài Bạch': 'TÀI', 'Tử Tức': 'TỬ', 'Phu Thê': 'PHỐI', 'Huynh Đệ': 'HUYNH' };
var TEN_CUNG_THEO_THU_TU = ['Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc', 'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ'];

function apDungHangDuoiVaDoSang() {
    var d = {};
    try { d = JSON.parse(localStorage.getItem('laso_data')) || {}; } catch (e) { d = {}; }
    var ob = d.lasoOb || [];
    var nam = d.gioitinh === 'Nam';
    function ngan(ten) { return ten === 'Phu Thê' ? (nam ? 'THÊ' : 'PHU') : (TEN_NGAN_WEB[ten] || ten.toUpperCase()); }
    var thuTu = {}; TEN_CUNG_THEO_THU_TU.forEach(function (t, i) { thuTu[t] = i; });
    var dv = d.tenCungDaiVan in thuTu ? thuTu[d.tenCungDaiVan] : -1;
    var ln = -1;
    ob.forEach(function (c, i) { if ((c.sao || []).some(function (s) { return s.ten === 'L. Thái Tuế'; })) ln = i; });
    document.querySelectorAll('.laso-cell:not(.center)').forEach(function (cell) {
        var tenEl = cell.querySelector('.ten-cung'), chiEl = cell.querySelector('.chi-cung');
        if (!tenEl || !chiEl) return;
        var ten = tenEl.textContent.replace(/\(Thân\)/, '').trim();
        var chi = chiEl.textContent.trim().split(/\s+/)[1];
        var n = thuTu[ten];
        cell.querySelectorAll('.ln-dv, .ln-ln, .pill-han').forEach(function (e) { e.remove(); });
        if (n === undefined) return;
        // hàng dưới: ĐV.xxx | tràng sinh | LN.xxx
        if (dv >= 0) { var a = document.createElement('div'); a.className = 'ln-dv'; a.textContent = 'ĐV.' + ngan(TEN_CUNG_THEO_THU_TU[((n - dv) % 12 + 12) % 12]); cell.appendChild(a); }
        if (ln >= 0) { var b = document.createElement('div'); b.className = 'ln-ln'; b.textContent = 'LN.' + ngan(TEN_CUNG_THEO_THU_TU[((n - ln) % 12 + 12) % 12]); cell.appendChild(b); }
        // thẻ Đại hạn / Tiểu hạn đang xem
        var px = 6;
        if (n === dv) { var p1 = document.createElement('div'); p1.className = 'pill-han'; p1.style.left = px + 'px'; p1.textContent = 'Đại hạn'; cell.appendChild(p1); px += 54; }
        if (ten === d.tenCungTieuHan) { var p2 = document.createElement('div'); p2.className = 'pill-han'; p2.style.left = px + 'px'; p2.textContent = 'Tiểu hạn'; cell.appendChild(p2); }
        // độ sáng chính tinh: ghi vào thuộc tính, hiển thị bằng CSS (không đổi nội dung chữ để thẻ cung vẫn đọc đúng tên sao)
        cell.querySelectorAll('.chinh-tinh-group div[class^="hanh-"]').forEach(function (n2) {
            var t = n2.textContent.trim(), m = DO_SANG_WEB[t];
            if (m && m[chi]) n2.setAttribute('data-ds', m[chi]); else n2.removeAttribute('data-ds');
        });
    });
}
