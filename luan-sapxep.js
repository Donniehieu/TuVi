/* Sắp xếp và gom nhóm các điều luận của một cung (dùng chung cho tab phổ biến và Nam Phái).
 * Thứ tự: (0) vô chính diệu -> khóa chính tinh cung đối; (1) cách cục chính tinh; (2) luận từng chính tinh;
 *         (3) cách cục phụ tinh; (4) phụ tinh lẻ không thành cách (luận sau cùng).
 * Trong mỗi bước, các điều cùng chủ điểm nội dung (tính cách, tài lộc, sự nghiệp, tình duyên, gia đạo, sức khỏe, khác) xếp cạnh nhau. */
var LuanSapXep = (function () {
    'use strict';
    var CHINH = ['Tử Vi', 'Thiên Cơ', 'Thái Dương', 'Vũ Khúc', 'Thiên Đồng', 'Liêm Trinh', 'Thiên Phủ', 'Thái Âm', 'Tham Lang', 'Cự Môn', 'Thiên Tướng', 'Thiên Lương', 'Thất Sát', 'Phá Quân'];
    var PHU = ['Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Lộc Tồn', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp', 'Thiên Mã',
        'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Hóa Kỵ', 'Hóa Kị', 'Hồng Loan', 'Thiên Hỷ', 'Thiên Hỉ', 'Đào Hoa', 'Hàm Trì', 'Thiên Riêu', 'Thiên Diêu', 'Thiên Hình', 'Thiên Khốc', 'Thiên Hư', 'Long Trì', 'Phượng Các',
        'Tam Thai', 'Bát Tọa', 'Ân Quang', 'Thiên Quý', 'Thiên Quan', 'Thiên Phúc', 'Thiên Thọ', 'Thiên Tài', 'Thiên Thương', 'Thiên Sứ', 'Thiên Không', 'Cô Thần', 'Quả Tú', 'Đại Hao', 'Tiểu Hao', 'Tang Môn', 'Bạch Hổ',
        'Thiên Đức', 'Nguyệt Đức', 'Phúc Đức', 'Long Đức', 'Quan Phù', 'Phi Liêm', 'Phục Binh', 'Quan Phủ', 'Tuế Kiến', 'Thái Tuế', 'Hoa Cái', 'Kiếp Sát', 'Lực Sĩ', 'Thanh Long', 'Tấu Thư', 'Bác Sĩ', 'Hỷ Thần', 'Lưu Hà',
        'Phá Toái', 'Âm Sát', 'Thiên La', 'Địa Võng', 'Triệt', 'Tuần', 'Tuế Dịch', 'Tướng Quân', 'Quốc Ấn', 'Đường Phù', 'Đẩu Quân', 'Giải Thần', 'Thiên Y', 'Thiên Giải', 'Địa Giải', 'Thai Phụ', 'Phong Cáo', 'Bệnh Phù', 'Điếu Khách', 'Trực Phù'];
    var CACH = /cách|giáp|hội chiếu|đồng cung|song |tam hợp|tam phương|xung chiếu|củng|kẹp|chiếu mệnh|gặp/i;
    var CACH_MANH = /cách|giáp|đồng cung|song |kẹp/i;
    var TOPICS = [
        ['Tình duyên, hôn nhân', /hôn nhân|vợ|chồng|phu thê|tình duyên|tình cảm|đào hoa|ly hôn|ngoại tình|kết hôn|yêu|hoa đào/i],
        ['Sức khỏe, tai nạn', /bệnh|sức khỏe|tai nạn|đau|tật|phẫu thuật|thương tích|chết|yểu|ốm|tang/i],
        ['Tài lộc', /tiền|tài lộc|tài vận|tài sản|giàu|của cải|phá sản|nghèo|kinh doanh|làm ăn|lương|phát tài/i],
        ['Sự nghiệp, công danh', /sự nghiệp|công danh|quan chức|quan lộc|thăng chức|nghề|chức vụ|thi cử|học vấn|đỗ đạt|khoa bảng|quyền/i],
        ['Gia đạo, con cái, người thân', /cha|mẹ|con cái|anh em|huynh đệ|gia đình|gia đạo|ruộng|nhà cửa|điền trạch|bạn bè|người thân|họ hàng|tử tức/i],
        ['Tính cách, con người', /tính|người này|thông minh|nóng|hiền|nhút|cô độc|phiêu bạt|tướng mạo|dáng|thân hình|đức|tâm/i]
    ];
    var ORDER = ['Tính cách, con người', 'Tài lộc', 'Sự nghiệp, công danh', 'Tình duyên, hôn nhân', 'Gia đạo, con cái, người thân', 'Sức khỏe, tai nạn', 'Khác'];
    var TIERS = [
        ['0', 'Chính tinh cung đối (cung vô chính diệu)'],
        ['1', 'Cách cục chính tinh'],
        ['2', 'Luận từng chính tinh'],
        ['3', 'Cách cục phụ tinh'],
        ['4', 'Phụ tinh lẻ, không thành cách cục']
    ];
    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function dem(ten, ds) { var n = 0, seen = {}; ds.forEach(function (s) { if (ten.indexOf(s) >= 0 && !seen[s]) { seen[s] = 1; n++; } }); return n; }
    function chuDiem(ten, luan) {
        var t = String(ten), l = String(luan || '');
        for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i][1].test(t)) return TOPICS[i][0];
        for (var j = 0; j < TOPICS.length; j++) if (TOPICS[j][1].test(l)) return TOPICS[j][0];
        return 'Khác';
    }
    function bac(it, voChinh) {
        var t = String(it.ten);
        if (voChinh && /cung đối|vô chính diệu/i.test(t)) return 0;
        var nc = dem(t, CHINH), np = dem(t, PHU);
        if (nc >= 2 || (nc >= 1 && CACH_MANH.test(t)) || it.cach) return nc >= 1 ? 1 : 3;
        if (nc === 1) return 2;
        if (np >= 2 || CACH.test(t)) return np >= 1 ? 3 : 4;
        return 4;
    }
    /* items: [{ten, luan: chuỗi hoặc mảng chuỗi, cach?: bool}] -> các bước đã xếp */
    function sapXep(items, opts) {
        opts = opts || {};
        var buckets = [[], [], [], [], []];
        items.forEach(function (it, i) { it._i = i; buckets[bac(it, opts.voChinh)].push(it); });
        return buckets.map(function (b, k) {
            var g = {};
            b.forEach(function (it) {
                var lines = Array.isArray(it.luan) ? it.luan.join(' ') : it.luan;
                var c = chuDiem(it.ten, lines); (g[c] = g[c] || []).push(it);
            });
            var topics = ORDER.filter(function (c) { return g[c]; }).map(function (c) { return { chuDiem: c, items: g[c].sort(function (a, b) { return a._i - b._i; }) }; });
            return { bac: k, ten: TIERS[k][1], topics: topics, soDieu: b.length };
        }).filter(function (t) { return t.soDieu > 0; });
    }
    function itemHtml(it) {
        var luan = Array.isArray(it.luan) ? it.luan : [it.luan];
        return '<div class="lsx-it"><b class="lsx-khoa">' + esc(it.ten) + '</b>' + luan.filter(Boolean).map(function (v) { return '<span class="lsx-luan">' + esc(v) + '</span>'; }).join('') + (it.extra || '') + '</div>';
    }
    function html(items, opts) {
        opts = opts || {};
        var buoc = sapXep(items, opts), out = '', n = 0;
        if (opts.voChinh && opts.doiCung) out += '<div class="lsx-note">Cung không có chính tinh: luận khóa chính tinh cung đối' + (opts.doiCung.ten ? ' (' + esc(opts.doiCung.ten) + (opts.doiCung.chinhTinh && opts.doiCung.chinhTinh.length ? ': ' + esc(opts.doiCung.chinhTinh.join(', ')) : '') + ')' : '') + ' trước.</div>';
        buoc.forEach(function (b) {
            n++;
            out += '<div class="lsx-st"><b>' + n + '</b>' + esc(b.ten) + '</div>';
            b.topics.forEach(function (t) {
                out += '<div class="lsx-grp"><div class="lsx-gh' + (b.bac === 3 ? ' w' : b.bac === 4 ? ' l' : '') + '">' + esc(t.chuDiem) + '<span>' + t.items.length + '</span></div>' + t.items.map(itemHtml).join('') + '</div>';
            });
        });
        return out;
    }
    function chinhTinhCua(c) {
        return (c && c.sao || []).filter(function (s) { return /chinh-tinh/.test(s.class || '') && String(s.ten).indexOf('L. ') !== 0; }).map(function (s) { return String(s.ten).replace(/\s*\(.*\)\s*$/, ''); });
    }
    /* data: laso_data; trả {voChinh, doiCung:{ten, chinhTinh}} cho cung có tên tenCung */
    function thongTinCung(data, tenCung) {
        var ob = (data && data.lasoOb) || [], i = -1;
        ob.forEach(function (c, k) { if (c.tenCung === tenCung) i = k; });
        if (i < 0) return {};
        var ct = chinhTinhCua(ob[i]), d = ob[(i + 6) % 12];
        return { voChinh: ct.length === 0, chinhTinh: ct, doiCung: { ten: d ? d.tenCung : '', chinhTinh: chinhTinhCua(d) } };
    }
    return { sapXep: sapXep, html: html, thongTinCung: thongTinCung, CHINH: CHINH, PHU: PHU };
})();
if (typeof window !== 'undefined') window.LuanSapXep = LuanSapXep;
