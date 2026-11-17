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
