/* khoahienthi.js — đồng nhất với KhoaHienThi.cs / DoSangSao.cs / TrietTuanLuan.cs của bản Unity.
 * Viết lại TÊN KHÓA và vế luận theo đúng lá số đang xem:
 *  - sao "sáng (miếu, vượng, đắc địa)" -> độ sáng thật của sao trong lá số (miếu địa / vượng địa / đắc địa); sao "tối" -> hãm địa;
 *  - "A đồng cung B" -> "A, B đồng cung";  "cung tam hợp X / cung đối X / giáp X" -> có dấu gạch ngang trước tên cung;
 *  - khóa lộ mã nội bộ (tuple) được đọc thành tiếng Việt; chính tả hiển thị (Cyrillic lẫn chữ, từ dính liền, dấu thanh cũ);
 *  - câu luận tự xét vị trí sao ("A không nên hãm ở cung này") được đổi thành kết luận cho đúng lá số;
 *  - luận Triệt / Tuần của từng cung (sao tốt bị giảm sáng, sao xấu bớt xấu, cung vô chính diệu đỡ xấu). */
var KhoaHienThi = (function () {
    'use strict';
    // ---------------- độ sáng (Tân Biên 3.1-3.21) ----------------
    var DS_ROWS = [
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
        'Phá Quân|M:Tý,Ngọ;V:Sửu,Mùi;Đ:Thìn,Tuất;H:Mão,Dậu,Dần,Thân,Tỵ,Hợi',
        'Hỏa Tinh|Đ:Dần,Mão,Thìn,Tỵ,Ngọ;H:Tý,Sửu,Mùi,Thân,Dậu,Tuất,Hợi',
        'Linh Tinh|Đ:Dần,Mão,Thìn,Tỵ,Ngọ;H:Tý,Sửu,Mùi,Thân,Dậu,Tuất,Hợi',
        'Kình Dương|M:Thìn,Tuất,Sửu,Mùi;H:Dần,Mão,Tỵ,Ngọ,Thân,Dậu,Hợi,Tý',
        'Đà La|M:Thìn,Tuất,Sửu,Mùi;H:Dần,Mão,Tỵ,Ngọ,Thân,Dậu,Hợi,Tý',
        'Địa Không|Đ:Dần,Thân,Tỵ,Hợi;H:Tý,Sửu,Mão,Thìn,Ngọ,Mùi,Dậu,Tuất',
        'Địa Kiếp|Đ:Dần,Thân,Tỵ,Hợi;H:Tý,Sửu,Mão,Thìn,Ngọ,Mùi,Dậu,Tuất',
        'Văn Xương|Đ:Thìn,Tuất,Sửu,Mùi,Tỵ,Hợi;H:Dần,Mão,Ngọ,Thân,Dậu,Tý',
        'Văn Khúc|Đ:Thìn,Tuất,Sửu,Mùi,Tỵ,Hợi;H:Dần,Mão,Ngọ,Thân,Dậu,Tý'];
    var DS = {};
    DS_ROWS.forEach(function (r) {
        var p = r.split('|'), m = {};
        p[1].split(';').forEach(function (g) { var kv = g.split(':'); kv[1].split(',').forEach(function (c) { m[c] = kv[0]; }); });
        DS[p[0]] = m;
    });
    var TEN_DAY = { M: 'miếu địa', V: 'vượng địa', 'Đ': 'đắc địa', B: 'bình hòa', H: 'hãm địa' };
    function ma(sao, chi) { return (DS[sao] && DS[sao][chi]) || ''; }
    function laSang(m) { return m === 'M' || m === 'V' || m === 'Đ'; }

    // ---------------- danh sách tên ----------------
    var SAO = ['Tử Vi', 'Thiên Cơ', 'Thái Dương', 'Vũ Khúc', 'Thiên Đồng', 'Liêm Trinh', 'Thiên Phủ', 'Thái Âm', 'Tham Lang', 'Cự Môn', 'Thiên Tướng', 'Thiên Lương', 'Thất Sát', 'Phá Quân',
        'Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt', 'Lộc Tồn', 'Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp',
        'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa', 'Hóa Kỵ', 'Thiên Mã', 'Đào Hoa', 'Hồng Loan', 'Thiên Hỷ', 'Thiên Hình', 'Thiên Riêu', 'Thiên Y', 'Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư',
        'Đại Hao', 'Tiểu Hao', 'Thái Tuế', 'Quan Phù', 'Long Đức', 'Phúc Đức', 'Thiên Đức', 'Nguyệt Đức', 'Thanh Long', 'Quốc Ấn', 'Đường Phù', 'Phượng Các', 'Long Trì', 'Cô Thần', 'Quả Tú',
        'Thiên Quan', 'Thiên Phúc', 'Ân Quang', 'Thiên Quý', 'Tam Thai', 'Bát Tọa', 'Thiên Giải', 'Địa Giải', 'Thiên Không', 'Thiên Thương', 'Thiên Sứ', 'Phi Liêm', 'Hoa Cái', 'Phục Binh',
        'Quan Đới', 'Bệnh Phù', 'Tử Phù', 'Điếu Khách', 'Trực Phù', 'Lực Sĩ', 'Tấu Thư', 'Bác Sĩ', 'Kiếp Sát', 'Thiên Tài', 'Thiên Thọ', 'Thiên La', 'Địa Võng', 'Hàm Trì', 'Thiên Trù', 'Lưu Hà', 'Phá Toái',
        'Đẩu Quân', 'Giải Thần', 'Thiên Vu', 'Thiên Nguyệt', 'Âm Sát', 'Hỷ Thần', 'Tướng Quân', 'Tuần', 'Triệt'];
    var NHOM = { 'Kình Đà Hỏa Linh': ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'], 'Kình Đà': ['Kình Dương', 'Đà La'], 'Hỏa Linh': ['Hỏa Tinh', 'Linh Tinh'], 'Không Kiếp': ['Địa Không', 'Địa Kiếp'] };
    var CUNG = ['Phu Thê', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc', 'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Huynh Đệ', 'Mệnh', 'Thân', 'Phu', 'Thê'];
    var CHI = '(?:Tý|Sửu|Dần|Mão|Thìn|Tỵ|Ngọ|Mùi|Thân|Dậu|Tuất|Hợi)';
    function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
    function alt(l) { return '(?:' + l.slice().sort(function (a, b) { return b.length - a.length; }).map(esc).join('|') + ')'; }
    var STAR = '(?:L\\. )?' + alt(SAO.concat(Object.keys(NHOM)));
    var CUNGRX = alt(CUNG);
    var LIST = STAR + '(?:(?:, | và | )' + STAR + ')*';
    var MID = '(?: (?:ở|tại) (?:cung )?' + CUNGRX + '| tọa thủ cung (?:đại hạn|tiểu hạn|' + CUNGRX + ')(?: ở ' + CHI + ')?)?';
    var NB = '(?<![\\p{L}])';
    var RX_SANG = new RegExp(NB + '(' + LIST + ')(' + MID + ')(?: sao)?(?: ở (?:vị trí|thế))? (sáng sủa|sáng|tối|hãm(?! địa))(?: \\((?:miếu, vượng, đắc địa|hãm)\\))?', 'gu');
    var RX_DC2 = new RegExp(NB + '(' + LIST + ')(?: tọa thủ cung (' + CUNGRX + ')(?: ở (' + CHI + '))?)? đồng cung(?: với)? (' + LIST + ')', 'gu');
    var RX_DC1 = new RegExp(NB + '(' + LIST + ') đồng cung(?! với)(?! ' + STAR + ')', 'gu');
    var RX_DC_TAI = new RegExp('đồng cung (?=' + CUNGRX + '(?![\\p{L}]))', 'gu');
    var RX_GACH = new RegExp(NB + '(tam hợp|đối|giáp) (' + CUNG.slice().sort(function (a, b) { return b.length - a.length; }).map(esc).join('|') + ')(?![\\p{L}])', 'gu');
    var RX_THUA = / \((?:miếu, vượng, đắc địa|hãm)\)/g;
    var RX_STAR = new RegExp(STAR, 'gu');

    // ---------------- tra cứu sao trong lá số ----------------
    var cacheKey = null, cacheInf = null;
    function natal(t) { return !(t.indexOf('L. ') === 0 || t.indexOf('(') === 0 || t.slice(-4) === '(ĐV)'); }
    function lay(d) {
        var ob = (d && d.lasoOb) || [];
        if (cacheKey === ob && cacheInf) return cacheInf;
        var inf = { cung: {}, tenCung: {} };
        ob.forEach(function (c) {
            inf.tenCung[c.tenCung] = c;
            (c.sao || []).forEach(function (s) { if (natal(s.ten) && !inf.cung[s.ten]) inf.cung[s.ten] = c; });
        });
        cacheKey = ob; cacheInf = inf; return inf;
    }
    function tachSao(list) {
        var kq = [], m; RX_STAR.lastIndex = 0;
        while ((m = RX_STAR.exec(list))) { if (NHOM[m[0]]) kq = kq.concat(NHOM[m[0]]); else kq.push(m[0]); }
        return kq;
    }
    function nhomDoSang(inf, names, toi) {
        var seg = [];
        names.forEach(function (n) {
            var t;
            if (toi) t = 'hãm địa';
            else { var c = inf.cung[n]; var m = c ? ma(n, c.chi) : ''; t = laSang(m) ? TEN_DAY[m] : 'sáng'; }
            if (seg.length && seg[seg.length - 1].t === t) seg[seg.length - 1].n.push(n); else seg.push({ n: [n], t: t });
        });
        return seg.map(function (x) { return x.n.join(', ') + ' ' + x.t; }).join(', ');
    }

    // ---------------- chính tả hiển thị ----------------
    var TONE = { 'toạ': 'tọa', 'hoá': 'hóa', 'hoả': 'hỏa', 'hoạ': 'họa', 'hoà': 'hòa', 'toả': 'tỏa', 'toà': 'tòa', 'thuỷ': 'thủy', 'luỹ': 'lũy', 'khoẻ': 'khỏe', 'qúy': 'quý', 'quí': 'quý', 'huỷ': 'hủy', 'nguỵ': 'ngụy', 'tuý': 'túy', 'suý': 'súy', 'hoè': 'hòe', 'doạ': 'dọa' };
    var DINH = { 'hưởngphú': 'hưởng phú', 'tuổikỷ': 'tuổi Kỷ', 'tuổimậu': 'tuổi Mậu', 'hànhg': 'hành', 'tínhh': 'tính', 'bạnphải': 'bạn phải', 'ngườikính': 'người kính', 'ngườithích': 'người thích', 'ngườicó': 'người có', 'túlại': 'Tú lại', 'tthì': 'thì', 'nhauhay': 'nhau hay', 'cũngđược': 'cũng được', 'nhanhlên': 'nhanh lên', 'cáchlưu': 'cách lưu', 'saunày': 'sau này', 'cug': 'cung', 'dồnứ': 'dồn ứ', 'linhtinh': 'Linh Tinh', 'tanghổ': 'Tang Hổ', 'xétxem': 'xét xem', 'cùnf': 'cùng', 'hìnhkhông': 'Hình Không' };
    var HOA_DAU = { 'tuổikỷ': 1, 'tuổimậu': 1, 'túlại': 1, 'linhtinh': 1 };
    var CYR_A = 'сарехуіо', CYR_B = 'capexyio';
    function hoaThuong(src, dst) {
        if (src.length > 1 && src === src.toUpperCase()) return dst.toUpperCase();
        return src[0] !== src[0].toLowerCase() && dst[0] === dst[0].toLowerCase() ? dst[0].toUpperCase() + dst.slice(1) : dst;
    }
    function chinhTa(s) {
        if (!s) return s;
        s = String(s).normalize('NFC').replace(/[Ѐ-ӿ]/g, function (c) { var i = CYR_A.indexOf(c); return i >= 0 ? CYR_B[i] : c; });
        return s.replace(/\p{L}+/gu, function (w) {
            var l = w.toLowerCase();
            if (DINH[l] !== undefined) return HOA_DAU[l] ? (w[0] !== w[0].toLowerCase() ? DINH[l][0].toUpperCase() + DINH[l].slice(1) : DINH[l]) : hoaThuong(w, DINH[l]);
            if (TONE[l] !== undefined) return hoaThuong(w, TONE[l]);
            return w;
        });
    }

    // ---------------- khóa lộ tuple: không ('or', ('hanstar', 'A/B:toi'), ('hantt',)) ----------------
    function docTuple(s, st) {
        var i = st.i + 1, l = [];
        while (i < s.length) {
            var ch = s[i];
            if (ch === ')') { st.i = i + 1; return l; }
            if (ch === ',' || ch === ' ') { i++; continue; }
            if (ch === '(') { st.i = i; l.push(docTuple(s, st)); i = st.i; continue; }
            if (ch === "'") { var e = s.indexOf("'", i + 1); if (e < 0) e = s.length - 1; l.push(s.slice(i + 1, e)); i = e + 1; continue; }
            var b = i; while (i < s.length && s[i] !== ',' && s[i] !== ')') i++;
            var t = s.slice(b, i).trim(); l.push(/^-?\d+$/.test(t) ? parseInt(t, 10) : t);
        }
        st.i = i; return l;
    }
    function dsSao(v) { return String(v).split('/').join(', '); }
    function coNeu(t) {
        var k = t[0];
        switch (k) {
            case 'hanstar': { var p = String(t[1]).split(':'); return 'sao ' + (p[1] === 'toi' ? 'hãm địa' : 'sáng') + ' trong nhóm ' + dsSao(p[0]); }
            case 'hantt': return 'Tuần hoặc Triệt';
            case 'hansat': return typeof t[1] === 'number' && t[1] > 1 ? 'từ ' + t[1] + ' sát tinh trở lên' : 'sát tinh';
            case 'hanhoi': return dsSao(t[1]) + ' hội chiếu';
            case 'hoi': return dsSao(t[1]) + ' (đồng cung hoặc hội chiếu)';
            case 'doi': return dsSao(t[1]) + ' ở cung đối';
            case 'cungown': return dsSao(t[2]) + ' ở cung ' + t[1];
            case 'or': return t.slice(1).filter(Array.isArray).map(coNeu).join(' hoặc ');
            case 'and': return t.slice(1).filter(Array.isArray).map(coNeu).join(' và ');
        }
        return t.map(function (x) { return typeof x === 'string' ? x : ''; }).join(' ');
    }
    function khongTuple(t, han) {
        var k = t[0], con = t.slice(1).filter(Array.isArray), noi = han ? ' trong ' + han : '';
        if (k === 'or') return con.map(function (x) { return 'không có ' + coNeu(x); }).join(', ') + noi;
        if (k === 'and') return 'không đồng thời có ' + con.map(coNeu).join(' và ');
        if (k === 'doi') return 'cung đối không có ' + dsSao(t[1]);
        if (k === 'cungown') return 'cung ' + t[1] + ' không có ' + dsSao(t[2]);
        return 'không có ' + coNeu(t);
    }
    function suaTuple(s) {
        var i0 = s.indexOf("không ('");
        if (i0 < 0) return s;
        var st = { i: i0 + 6 }, t = docTuple(s, st);
        if (!t.length) return s;
        var han = s.indexOf('Tiểu hạn') >= 0 ? 'cung tiểu hạn' : s.indexOf('Đại hạn') >= 0 ? 'cung đại hạn' : '';
        return s.slice(0, i0) + khongTuple(t, han) + s.slice(st.i);
    }
    var RX_CUNG_NGOAC = new RegExp(NB + '(tam hợp|đối|giáp) \\((' + CUNG.slice().sort(function (a, b) { return b.length - a.length; }).map(esc).join('|') + ')\\)', 'gu');
    function lamSach(s) {
        s = s.replace(/\s{2,}/g, ' ').replace(/ ,/g, ',').replace(/ :/g, ':').trim();
        s = s.replace(RX_CUNG_NGOAC, '$1-$2');
        s = s.replace(/:\s*([^:]+)$/, function (m, l) {
            var seen = {}, out = [];
            l.split(', ').forEach(function (x) { x = x.trim(); if (!seen[x]) { seen[x] = 1; out.push(x); } });
            return ': ' + out.join(', ');
        });
        return s;
    }
    function gachNgang(s) { return String(s || '').replace(RX_GACH, '$1-$2'); }

    // ---------------- viết lại tên khóa ----------------
    function viet(title, d) {
        if (!title) return title;
        var inf = lay(d);
        var s = lamSach(suaTuple(chinhTa(title)));
        s = s.replace(RX_SANG, function (all, l, mid, st) {
            var names = tachSao(l).filter(function (n) { return inf.cung[n]; });
            if (!names.length) return all;
            return nhomDoSang(inf, names, st === 'tối' || st.indexOf('hãm') === 0) + mid;
        });
        s = s.replace(RX_DC2, function (all, a, c, h, b) {
            var arr = tachSao(a); tachSao(b).forEach(function (n) { if (arr.indexOf(n) < 0) arr.push(n); });
            var r = arr.join(', ') + ' đồng cung';
            if (c) r += ' tại ' + c + (h ? ' ở ' + h : '');
            return r;
        });
        s = s.replace(RX_DC1, function (all, a) { return tachSao(a).join(', ') + ' đồng cung'; });
        s = s.replace(RX_DC_TAI, 'đồng cung tại ');
        s = gachNgang(s);
        return s.replace(RX_THUA, '');
    }

    // ---------------- nhóm sao trong lời luận -> sao CỤ THỂ trong lá số (đồng nhất với KhoaHienThi.GiaiNhom của Unity) ----------------
    var SAT6 = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'], TUSAT = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'];
    var LUCCAT = ['Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'], TAMHOA = ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'];
    var CAT_CU = ['Hóa Khoa', 'Hóa Quyền', 'Hóa Lộc', 'Lộc Tồn', 'Quốc Ấn', 'Tả Phù', 'Hữu Bật', 'Văn Xương', 'Văn Khúc', 'Thiên Khôi', 'Thiên Việt', 'Long Trì', 'Phượng Các', 'Thanh Long', 'Thiên Quan', 'Thiên Phúc', 'Ân Quang', 'Thiên Quý', 'Tam Thai', 'Bát Tọa', 'Thiên Giải', 'Địa Giải'];
    function nhomChung(np) {
        var l = [
            { re: 'tứ sát|tứ hung|tam sát', sao: TUSAT }, { re: 'lục sát|(?:gặp |thêm |có )?sát tinh|ác sát|(?:gặp|thêm|có) sát(?! tinh)', sao: SAT6 },
            { re: 'Không,? Kiếp|Không Kiếp', sao: ['Địa Không', 'Địa Kiếp'] }, { re: 'Hỏa,? Linh|Hỏa Linh', sao: ['Hỏa Tinh', 'Linh Tinh'] },
            { re: 'Kình,? Đà|Dương,? Đà', sao: ['Kình Dương', 'Đà La'] }, { re: 'song hao|Đại Hao,? Tiểu Hao', sao: ['Đại Hao', 'Tiểu Hao'] },
            { re: 'tang hổ|Tang Môn,? Bạch Hổ', sao: ['Tang Môn', 'Bạch Hổ'] }];
        if (!np) l.push({ re: 'khốc hư|Thiên Khốc,? Thiên Hư', sao: ['Thiên Khốc', 'Thiên Hư'] });
        l.push({ re: 'lục bại|bại tinh', sao: ['Đại Hao', 'Tiểu Hao', 'Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư'] });
        l.push({ re: 'lục cát', sao: LUCCAT });
        if (np) {
            l.push({ re: 'thất cát', sao: LUCCAT.concat(['Lộc Tồn']) }); l.push({ re: 'tam cát hóa|tam hóa', sao: TAMHOA });
            l.push({ re: '(?<![\\p{L}])cát tinh', sao: LUCCAT.concat(['Lộc Tồn'], TAMHOA) }); l.push({ re: 'văn tinh', sao: ['Văn Xương', 'Văn Khúc'] });
            l.push({ re: 'phò tá', sao: ['Tả Phù', 'Hữu Bật'] });
        } else l.push({ re: '(?<![\\p{L}])cát tinh|sao tốt|cát diệu|sao sáng', sao: CAT_CU, cat: true });
        l.push({ re: 'không vong|Tuần,? Triệt|Tuần hoặc Triệt', tt: true });
        return l;
    }
    function gopRx(nh) { return new RegExp(nh.map(function (n, i) { return '(?<n' + i + '>' + n.re + ')'; }).join('|'), 'giu'); }
    var NH = { cu: nhomChung(false), np: nhomChung(true) };
    var RX_NH = { cu: gopRx(NH.cu), np: gopRx(NH.np) };
    var RX_PHUDINH = /(không|chưa|chẳng|miễn|tránh|hết|thiếu)\s*(?:(?:có|gặp|bị|thêm|còn)\s*)?(?:(?:các|nhiều)\s*)?$/i;
    var RX_CUNGKHAC = new RegExp('cung\\s+(?:' + CUNG.map(esc).join('|') + '|đại hạn|tiểu hạn|đối|tam hợp)[^,;:.]{0,14}$', 'iu');
    var RX_TRICH = /\s*\((?:[^()]*?(?:tr\.|trang)[^()]*)\)\s*\.?\s*$/;
    var RX_MENHDE = /^(?:nếu|khi|còn|mà|miễn|gặp|thêm|có|không|dù|hễ|nhưng nếu)(?![\p{L}])/iu;
    var RX_NGUON = /tr\.|mục|Đại Toàn|Phú Giải|Tân Biên|Hàm Số|Lý Thiên Cơ/;
    function viTriNgan(off, ten) { return off === 0 ? 'đồng cung' : (off === 6 ? 'cung đối-' : 'cung tam hợp-') + ten; }
    function timSao(d, tenCung, n, np, text) {
        var ob = d.lasoOb || [], i0 = -1; ob.forEach(function (c, i) { if (c.tenCung === tenCung) i0 = i; });
        if (i0 < 0) return null;
        var kq = [], dong = [];
        [0, 4, 6, 8].forEach(function (off) {
            var c = ob[(i0 + off) % 12];
            if (n.tt) {
                var t = []; if (coTuan(c)) t.push('Tuần'); if (coTriet(c)) t.push('Triệt');
                if (t.length) { if (off === 0) dong = dong.concat(t); else kq.push(t.join(' và ') + ' (' + viTriNgan(off, c.tenCung) + ')'); }
                return;
            }
            (c.sao || []).forEach(function (s) {
                var ten = s.ten; if (!natal(ten)) return;
                var ok = n.sao.indexOf(ten) >= 0;
                if (!ok && n.cat && !np && /chinh-tinh/.test(s.class || '')) ok = laSang(ma(ten, c.chi));
                if (!ok || text.indexOf(ten) >= 0) return;   // sao đã nêu tên trong câu thì không liệt kê lại
                if (off === 0) dong.push(ten); else kq.push(ten + ' (' + viTriNgan(off, c.tenCung) + ')');
            });
        });
        if (dong.length) kq.unshift(dong.join(', ') + ' đồng cung');
        return kq;
    }
    function timNhom(text, d, tenCung, np) {
        var kq = [], rx = RX_NH[np ? 'np' : 'cu'], nh = NH[np ? 'np' : 'cu'], m;
        rx.lastIndex = 0;
        while ((m = rx.exec(text))) {
            if (!m[0]) { rx.lastIndex++; continue; }
            var gi = -1; for (var i = 0; i < nh.length; i++) if (m.groups['n' + i] !== undefined) { gi = i; break; }
            if (gi < 0) continue;
            var mt = { start: m.index, len: m[0].length, n: nh[gi], neg: false, skip: false };
            var cs = m.index; while (cs > 0 && ',;:.'.indexOf(text[cs - 1]) < 0) cs--;
            var before = text.slice(cs, m.index);
            mt.neg = RX_PHUDINH.test(before);
            mt.skip = RX_CUNGKHAC.test(before);
            var lp = text.lastIndexOf('(', m.index);
            if (lp >= 0) { var rp = text.indexOf(')', lp); if ((rp < 0 || rp > m.index) && RX_NGUON.test(text.substr(lp, 120))) mt.skip = true; }
            mt.found = timSao(d, tenCung, mt.n, np, text);
            if (!mt.found) mt.skip = true;
            kq.push(mt);
        }
        return kq;
    }
    function giaiThich(m, goc) {
        var ds = m.found.join(', ');
        if (!m.neg) return m.found.length ? goc + ' (cụ thể: ' + ds + ')' : goc + ' (lá số này không có sao nào của nhóm này)';
        return m.found.length ? goc + ' (nhưng lá số này có ' + ds + ')' : goc + ' (đúng với lá số: không có sao nào của nhóm)';
    }
    function giaiNhom(luan, d, tenCung) {
        if (!luan || !tenCung) return luan;
        var np = !!KhoaHienThi.np, trich = '', than = luan, mt0 = RX_TRICH.exec(luan);
        if (mt0) { trich = mt0[0].trim().replace(/\.+$/, ''); than = luan.slice(0, mt0.index); }
        var mds = than.split(/(?<=[;.])\s+/).filter(function (x) { return x.trim().length > 0; });
        var tam = [], giu = 0, doi = false;
        mds.forEach(function (md) {
            var ms = timNhom(md, d, tenCung, np).filter(function (x) { return !x.skip; }), loai = false, kqmd = md;
            if (ms.length) {
                doi = true;
                var bat = RX_MENHDE.test(md.replace(/^\s+/, ''));
                loai = mds.length > 1 && bat && ms.some(function (x) { return (!x.neg && !x.found.length) || (x.neg && x.found.length); });
                var out = '', pos = 0;
                ms.sort(function (a, b) { return a.start - b.start; }).forEach(function (x) {
                    if (x.start < pos) return;
                    out += md.slice(pos, x.start) + giaiThich(x, md.substr(x.start, x.len)); pos = x.start + x.len;
                });
                kqmd = out + md.slice(pos);
            }
            tam.push({ t: kqmd, loai: loai }); if (!loai) giu++;
        });
        if (!doi) return luan;
        var r = tam.filter(function (t) { return !t.loai || giu === 0; }).map(function (t) { return t.t; }).join(' ').trim();
        if (trich) r = r.replace(/[. ]+$/, '') + ' ' + trich + '.';
        return r;
    }

    // ---------------- viết lại vế luận ----------------
    var RX_KNH = new RegExp('(' + STAR + ') không nên hãm ở cung này', 'gu');
    var RX_CANCU = new RegExp('cần căn cứ vào trạng thái vượng hoặc hãm của (' + STAR + ') để định cát hung', 'gu');
    var RX_NHATLA = new RegExp('nhất là khi (' + STAR + ') ở vị trí miếu vượng', 'gu');
    var RX_NHAPMIEU = new RegExp('(' + STAR + ')( (?:(?:phải|chỉ|cần|nên) )?nhập miếu)(?! \\(trong lá số)', 'gu');
    var RX_HOAVUONG = /Trong cung không nên có sao hỏa vượng \(hỏa khắc kim\), nếu không (khi đại tiểu hạn hoặc lưu niên trùng phùng thì bị tước bỏ chức vụ)/g;
    function chiSao(inf, s) { return inf.cung[s] ? inf.cung[s].chi : ''; }
    function vietLuan(luan, d, cung) {
        if (!luan) return luan;
        var inf = lay(d), s = giaiNhom(chinhTa(luan), d, cung);
        s = s.replace(RX_KNH, function (all, sao) {
            var chi = chiSao(inf, sao); if (!chi) return all; var m = ma(sao, chi);
            if (m === 'H') return sao + ' lại hãm địa tại ' + chi + ' nên phần tốt đẹp nói trên bị giảm sút';
            if (laSang(m)) return sao + ' ' + TEN_DAY[m] + ' tại ' + chi + ', không bị hãm nên giữ được phần tốt đẹp nói trên';
            return sao + ' ở ' + chi + ', không rơi vào thế hãm nên phần tốt đẹp nói trên vẫn còn';
        });
        s = s.replace(RX_CANCU, function (all, sao) {
            var chi = chiSao(inf, sao); if (!chi) return all; var m = ma(sao, chi);
            return sao + (m ? ' ' + TEN_DAY[m] : '') + ' tại ' + chi + ', ' + (laSang(m) ? 'thiên về cát' : m === 'H' ? 'thiên về hung' : 'cát hung ở mức trung bình');
        });
        s = s.replace(RX_NHATLA, function (all, sao) {
            var chi = chiSao(inf, sao); if (!chi) return all; var m = ma(sao, chi);
            if (m === 'M' || m === 'V') return 'nhất là khi ' + sao + ' ở vị trí miếu vượng (trong lá số này ' + sao + ' ' + TEN_DAY[m] + ' tại ' + chi + ', nên điều này càng rõ)';
            return 'điều này nặng nhất khi ' + sao + ' ở vị trí miếu vượng, còn trong lá số này ' + sao + (m ? ' ' + TEN_DAY[m] : '') + ' tại ' + chi + ' nên mức độ nhẹ hơn';
        });
        s = s.replace(RX_NHAPMIEU, function (all, sao, p) {
            var chi = chiSao(inf, sao); if (!chi) return all; var m = ma(sao, chi);
            return all + ' (trong lá số này ' + sao + (m ? ' ' + TEN_DAY[m] : '') + ' tại ' + chi + ', ' + (laSang(m) ? 'đạt điều kiện này' : 'chưa đạt điều kiện này') + ')';
        });
        s = s.replace(RX_HOAVUONG, function (all, r) {
            var c = inf.tenCung[cung]; if (!cung || !c) return all;
            var hoa = ['Hỏa Tinh', 'Linh Tinh'].filter(function (h) { return (c.sao || []).some(function (x) { return x.ten === h; }); });
            if (!hoa.length) return 'Trong cung này không có sao hỏa vượng nên chưa phạm điều bất lợi này; chỉ cần đề phòng khi đại tiểu hạn hoặc lưu niên đưa sao hỏa vượng vào cung thì ' + r.slice(r.indexOf('thì ') + 4);
            var sang = hoa.filter(function (h) { return laSang(ma(h, c.chi)); });
            var ten = hoa.map(function (h) { return h + ' ' + TEN_DAY[ma(h, c.chi)]; }).join(', ');
            if (sang.length) return 'Trong cung này có ' + ten + ' (hỏa vượng, hỏa khắc kim) nên ' + r;
            return 'Trong cung này có ' + ten + ' nên hỏa không vượng, mức hại giảm bớt; tuy vậy ' + r.replace('khi ', 'nếu ').replace(' thì bị', ' vẫn cần đề phòng bị');
        });
        return s;
    }

    // ---------------- luận Triệt / Tuần ----------------
    var RX_LIENQUAN = /Triệt|Tuần|không vong|Không Vong|Tam Không|án ngữ/;
    function lienQuan(t) { return !!t && RX_LIENQUAN.test(t); }
    function coTuan(c) { try { return !!isCungCoTuan(c.tenCung); } catch (e) { return false; } }
    function coTriet(c) { try { return !!isCungCoTriet(c.tenCung); } catch (e) { return false; } }
    function nhanTT(c) { var tu = coTuan(c), tr = coTriet(c); return tu && tr ? 'Triệt và Tuần' : tr ? 'Triệt' : tu ? 'Tuần' : ''; }
    var TOT_W = ['giàu', 'sang', 'quý', 'phú', 'hiển', 'thọ', 'thông minh', 'tốt', 'phúc', 'phát', 'hưởng', 'công danh', 'thành đạt', 'vinh', 'may mắn', 'hanh thông', 'thuận lợi', 'uy quyền', 'lừng lẫy', 'thịnh', 'tài giỏi', 'xuất chúng', 'hòa thuận', 'êm ấm', 'bền vững', 'danh giá'];
    var XAU_W = ['nghèo', 'khổ', 'yểu', 'bệnh', 'tai ', 'họa', 'hại', 'xấu', 'hung', 'bại', 'phá', 'tán', 'cô đơn', 'hình khắc', 'ly tán', 'tù', 'kiện', 'chết', 'tử ', 'mất', 'thất ', 'trắc trở', 'gian', 'dâm', 'bất hạnh', 'vất vả', 'lao đao', 'cực', 'hèn', 'tật', 'thị phi', 'ly biệt'];
    function dem(l, ws) { return ws.reduce(function (a, w) { return a + (l.split(w).length - 1); }, 0); }
    function phanLoai(luan) {
        if (!luan) return 0; var l = luan.toLowerCase(), t = dem(l, TOT_W), x = dem(l, XAU_W);
        return t > x ? 1 : x > t ? -1 : 0;
    }
    function dsVN(a) { return a.length === 1 ? a[0] : a.slice(0, -1).join(', ') + ' và ' + a[a.length - 1]; }
    /* cach: [{ten, luan}] */
    function cauTT(c, cach) {
        var tt = nhanTT(c), kq = [];
        if (!tt) return kq;
        var tot = [], xau = [];
        (c.sao || []).forEach(function (s) {
            var t = s.ten; if (!natal(t) || t === 'Tuần' || t === 'Triệt') return;
            var cl = s.class || '';
            if (/chinh-tinh/.test(cl)) { var m = ma(t, c.chi); if (laSang(m)) tot.push(t + ' ' + TEN_DAY[m]); else if (m === 'H') xau.push(t + ' hãm địa'); }
            else if (/sao-xau/.test(cl)) xau.push(t);
            else tot.push(t);
        });
        (cach || []).forEach(function (h) {
            if (h.luan && h.luan.indexOf('chỉ nêu tên') >= 0) return;
            var p = phanLoai(h.luan), ten = 'cách cục ' + h.ten;
            if (p > 0 && tot.indexOf(ten) < 0) tot.push(ten); else if (p < 0 && xau.indexOf(ten) < 0) xau.push(ten);
        });
        var vcd = !(c.sao || []).some(function (s) { return /chinh-tinh/.test(s.class || '') && natal(s.ten); });
        if (vcd) kq.push('Cung ' + c.tenCung + ' không có chính tinh (vô chính diệu): cung đỡ xấu, vững vàng hơn nhờ ' + tt + ' án ngữ.');
        if (tot.length) kq.push(tt + ' làm giảm độ sáng và độ tốt của ' + dsVN(tot) + '.');
        if (xau.length) kq.push(tt + ' làm cho ' + dsVN(xau) + ' bớt độ xấu, nguy hại.');
        if (!kq.length) kq.push('Cung ' + c.tenCung + ' có ' + tt + ' án ngữ nhưng không có sao nào đáng kể bị ảnh hưởng.');
        return kq;
    }
    return { np: false, viet: viet, vietLuan: vietLuan, chinhTa: chinhTa, gachNgang: gachNgang, ma: ma, tenDay: TEN_DAY, laSang: laSang, lienQuan: lienQuan, nhanTT: nhanTT, cauTT: cauTT, phanLoai: phanLoai };
})();
if (typeof window !== 'undefined') window.KhoaHienThi = KhoaHienThi;
