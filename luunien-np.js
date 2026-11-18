/* luunien-np.js — đồng nhất với LuuNienNP.cs (Unity).
 * Tử Vi Nam Phái: sao lưu niên (12 tuế tinh, 12 tướng tinh), Hỷ Thần và quy tắc lưu niên / lưu nguyệt
 * (Mệnh Lý Thiên Cơ, chương III mục 41, 63, 80-101 và chương 4). Điều kiện viết bằng DSL nhỏ trong NamPhai_Luu.json. */
var LuuNienNP = (function () {
    'use strict';
    var TUE = ['Tuế Kiến', 'Hối Khí', 'Tang Môn', 'Quán Sách', 'Quan Phù', 'Tiểu Hao', 'Đại Hao', 'Long Đức', 'Bạch Hổ', 'Thiên Đức', 'Điếu Khách', 'Bệnh Phù'];
    var TUONG = ['Tướng Tinh', 'Phán An', 'Tuế Dịch', 'Tức Thần', 'Hoa Cái', 'Kiếp Sát', 'Tai Sát', 'Thiên Sát', 'Chỉ Bối', 'Hàm Trì', 'Nguyệt Sát', 'Vong Thần'];
    var CHI12 = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
    var CUNG_CHI = ['Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu'];
    var TEN_CUNG = ['Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc', 'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ'];
    var SAT6 = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'], TUSAT = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'];
    var CAT = ['Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt', 'Lộc Tồn', 'Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'];
    function alias(s) { return s === 'Thiên Diêu' ? 'Thiên Riêu' : s === 'Hàm Trì' ? 'Đào Hoa' : s === 'Hóa Kị' ? 'Hóa Kỵ' : s; }
    function nhom(s) { return s === 'SAT6' ? SAT6 : s === 'TUSAT' ? TUSAT : s === 'CAT' ? CAT : [alias(s)]; }
    function chuan(t) {
        if (t.indexOf('L. ') === 0) t = t.slice(3);
        if (t.slice(-5) === ' (ĐV)') t = t.slice(0, -5);
        if (t[0] === '(' && t.slice(-6) === ' - ĐV)') t = t.slice(1, -6);
        return t;
    }
    function ten(c) { var h = {}; (c.sao || []).forEach(function (s) { h[chuan(s.ten)] = 1; }); return h; }
    function idxChi(chi) { return CUNG_CHI.indexOf(chi); }
    function luuCung(c, ln) { return TEN_CUNG[((idxChi(c.chi) - ln) % 12 + 12) % 12]; }
    function coDu(set, arg, tatCa) {
        if (tatCa) return arg.split('+').every(function (term) { return term.split('/').some(function (a) { return nhom(a).some(function (n) { return set[n]; }); }); });
        return arg.split('/').some(function (a) { return nhom(a).some(function (n) { return set[n]; }); });
    }
    var CAN10 = ['G.', 'Ấ.', 'B.', 'Đ.', 'M.', 'K.', 'C.', 'T.', 'N.', 'Q.'];
    var HOA4 = [['Liêm Trinh', 'Phá Quân', 'Vũ Khúc', 'Thái Dương'], ['Thiên Cơ', 'Thiên Lương', 'Tử Vi', 'Thái Âm'], ['Thiên Đồng', 'Thiên Cơ', 'Văn Xương', 'Liêm Trinh'],
        ['Thái Âm', 'Thiên Đồng', 'Thiên Cơ', 'Cự Môn'], ['Tham Lang', 'Thái Âm', 'Hữu Bật', 'Thiên Cơ'], ['Vũ Khúc', 'Tham Lang', 'Thiên Lương', 'Văn Khúc'],
        ['Thái Dương', 'Vũ Khúc', 'Thái Âm', 'Thiên Đồng'], ['Cự Môn', 'Thái Dương', 'Văn Khúc', 'Văn Xương'], ['Thiên Lương', 'Tử Vi', 'Tả Phù', 'Vũ Khúc'], ['Phá Quân', 'Cự Môn', 'Thái Âm', 'Tham Lang']];
    function dem(set, list) { var seen = {}, n = 0; list.split('/').forEach(function (a) { nhom(a).forEach(function (s) { if (!seen[s]) { seen[s] = 1; if (set[s]) n++; } }); }); return n; }
    /* can của cung (ngũ hổ độn): cung Dần lấy can theo can năm sinh, các cung sau tăng dần */
    function canCung(d, c) {
        var cn = CAN10.indexOf(d.canNam); if (cn < 0) return -1;
        return ([2, 4, 6, 8, 0][cn % 5] + idxChi(c.chi)) % 10;
    }
    function fei(d, ob, v, tamPhuong) {
        var a = v.split(':'), ft = a[0].split('>');
        var tu = ob.filter(function (c) { return c.tenCung === ft[0]; })[0];
        if (!tu) return false;
        var ci = canCung(d, tu); if (ci < 0) return false;
        var sao = {}; a[1].split('/').forEach(function (hn) { sao[HOA4[ci][hn === 'Hóa Lộc' ? 0 : hn === 'Hóa Quyền' ? 1 : hn === 'Hóa Khoa' ? 2 : 3]] = 1; });
        return ft[1].split('/').some(function (dn) {
            var i = -1; ob.forEach(function (c, k) { if (c.tenCung === dn) i = k; });
            if (i < 0) return false;
            var vung = tamPhuong ? [0, 4, 6, 8].map(function (o) { return ob[(i + o) % 12]; }) : [ob[i]];
            return vung.some(function (cg) { var t = ten(cg); for (var k in sao) if (t[k]) return true; return false; });
        });
    }
    function atom(a, x) {
        a = a.trim(); var neg = false;
        if (a.indexOf('NOT ') === 0) { neg = true; a = a.slice(4).trim(); }
        var i = a.indexOf(':'), k = a.slice(0, i), v = a.slice(i + 1), r;
        switch (k) {
            case 'T': r = coDu(x.own, v, true); break;
            case 'TA': r = coDu(x.own, v, false); break;
            case 'H': r = coDu(x.tam, v, true); break;
            case 'HA': r = coDu(x.tam, v, false); break;
            case 'SANG': r = v.split('/').some(function (s) { return x.own[s] && KhoaHienThi.laSang(KhoaHienThi.ma(s, x.c.chi)); }); break;
            case 'HAM': r = v.split('/').some(function (s) { return x.own[s] && KhoaHienThi.ma(s, x.c.chi) === 'H'; }); break;
            case 'LC': r = v.split('/').indexOf(luuCung(x.c, x.ln)) >= 0; break;
            case 'NC': r = v.split('/').some(function (n) { return n === 'Thân' ? x.d.cungCu === x.c.tenCung : n === x.c.tenCung; }); break;
            case 'CHI': r = v.split('/').indexOf(x.c.chi) >= 0; break;
            case 'R': r = x.ring === v; break;
            case 'D': r = v.split('/').some(function (a) { return nhom(a).some(function (n) { return x.doi[n]; }); }); break;
            case 'CTSANG': r = x.ct.length > 0 && x.ct.every(function (s) { return KhoaHienThi.laSang(KhoaHienThi.ma(s, x.c.chi)); }); break;
            case 'CNT': { var pr = v.split(/:(.+)/); r = dem(x.own, pr[1]) >= parseInt(pr[0], 10); break; }
            case 'HCNT': { var pr2 = v.split(/:(.+)/); r = dem(x.tam, pr2[1]) >= parseInt(pr2[0], 10); break; }
            case 'FEI': r = fei(x.d, x.ob, v, false); break;
            case 'FEIT': r = fei(x.d, x.ob, v, true); break;
            case 'GT': r = x.d.gioitinh === v; break;
            case 'CANC': { var q2 = v.indexOf(':'), cn2 = v.slice(0, q2), cg2 = x.ob.filter(function (c) { return c.tenCung === cn2; })[0]; r = !!cg2 && canCung(x.d, cg2) >= 0 && v.slice(q2 + 1).split('/').indexOf(CAN10[canCung(x.d, cg2)]) >= 0; break; }
            case 'GIAP': {
                var ab = v.split('+'), idx = x.ob.indexOf(x.c), truoc = ten(x.ob[(idx + 11) % 12]), sau = ten(x.ob[(idx + 1) % 12]);
                function co(hs, g) { return g.split('/').some(function (a) { return nhom(a).some(function (n) { return hs[n]; }); }); }
                r = (co(truoc, ab[0]) && co(sau, ab[1])) || (co(truoc, ab[1]) && co(sau, ab[0])); break;
            }
            case 'AT': {
                var q = v.indexOf(':'), cns = v.slice(0, q).split('/'), con = v.slice(q + 1);
                r = x.ob.some(function (c, i) { return cns.indexOf(c.tenCung) >= 0 && atom(con, ctx(x.d, x.ob, i, x.ln, null)); }); break;
            }
            default: r = false;
        }
        return neg ? !r : r;
    }
    function dat(c, x) { return c.split(' & ').every(function (a) { return atom(a, x); }); }
    function ctx(d, ob, i, ln, ring) {
        var c = ob[i], tam = {};
        [0, 4, 6, 8].forEach(function (o) { var t = ten(ob[(i + o) % 12]); for (var k in t) tam[k] = 1; });
        var ct = (c.sao || []).filter(function (s) { return /chinh-tinh/.test(s.class || '') && !(s.ten.indexOf('L. ') === 0); }).map(function (s) { return s.ten; });
        return { d: d, ob: ob, c: c, ln: ln, ring: ring, own: ten(c), tam: tam, doi: ten(ob[(i + 6) % 12]), ct: ct };
    }
    function tieu(r, c, ln, m) {
        return r.t.replace('{chi}', c.chi).replace('{lc}', luuCung(c, ln)).replace('{nc}', c.tenCung).replace('{m}', m);
    }
    function gon(t) { var i = t.indexOf(': '); return i >= 0 ? t.slice(i + 2) : t; }
    /* rules: mảng quy tắc (NamPhai_Luu.json .r); d: laso_data (cần chiNamXemHan, namXemHan, thangsinh, giosinh, lasoOb) */
    function chay(rules, d) {
        var kq = [], ob = d.lasoOb || [];
        if (!rules || ob.length !== 12 || !d.chiNamXemHan) return kq;
        var yi = CHI12.indexOf(d.chiNamXemHan), ln = idxChi(d.chiNamXemHan);
        if (yi < 0 || ln < 0) return kq;
        var byChi = {}; ob.forEach(function (c, i) { byChi[c.chi] = i; });
        var ring = {};
        for (var k = 0; k < 12; k++) ring[TUE[k]] = byChi[CHI12[(yi + k) % 12]];
        var khoi = {}; [['Dần', 'Ngọ', 'Tuất', 'Ngọ'], ['Hợi', 'Mão', 'Mùi', 'Mão'], ['Thân', 'Tý', 'Thìn', 'Tý'], ['Tỵ', 'Dậu', 'Sửu', 'Dậu']].forEach(function (g) { for (var j = 0; j < 3; j++) khoi[g[j]] = g[3]; });
        var ts = CHI12.indexOf(khoi[d.chiNamXemHan]);
        for (k = 0; k < 12; k++) ring[TUONG[k]] = byChi[CHI12[(ts + k) % 12]];
        var thang = parseInt(d.thangsinh, 10) || 1, gio = Math.max(0, CHI12.indexOf(d.giosinh));
        var lnPos = idxChi(d.chiNamXemHan);   // chỉ số theo thứ tự cung Dần..Sửu
        var dq = (((lnPos - (thang - 1) + gio) % 12) + 12) % 12;
        // ob[] theo thứ tự Mệnh..Huynh Đệ; đổi sang chỉ số theo chi để duyệt vòng
        var byPos = []; ob.forEach(function (c) { byPos[idxChi(c.chi)] = byChi[c.chi]; });
        function pos(i) { return byPos[((i % 12) + 12) % 12]; }
        rules.forEach(function (r) {
            var m, i, c;
            if (r.p === 'R') {
                var sao = r.c.split(' & ').filter(function (a) { return a.indexOf('R:') === 0; }).map(function (a) { return a.slice(2); })[0];
                if (!sao || ring[sao] === undefined) return;
                i = ring[sao]; c = ob[i];
                if (dat(r.c, ctx(d, ob, i, ln, sao))) kq.push({ loai: r.p, tieu: tieu(r, c, ln, 0), luan: r.l, cung: c.tenCung });
            } else if (r.p === 'G') {
                i = 0; c = ob[0];
                if (dat(r.c, ctx(d, ob, i, ln, null))) kq.push({ loai: r.p, tieu: r.t, luan: r.l, cung: c.tenCung });
            } else if (r.p === 'M' || r.p === 'ML') {
                var ds = [['cung Mệnh', 0]];
                if (r.p === 'ML') {
                    ds.push(['cung lưu niên ' + d.namXemHan, pos(lnPos)]);
                    ob.forEach(function (cc, ii) { if (cc.tenCung === d.tenCungDaiVan) ds.push(['cung đại hạn', ii]); if (cc.tenCung === d.tenCungTieuHan) ds.push(['cung tiểu hạn', ii]); });
                }
                ds.forEach(function (e) {
                    var cc = ob[e[1]];
                    if (dat(r.c, ctx(d, ob, e[1], ln, null))) kq.push({ loai: r.p, tieu: r.t.replace('{lbl}', e[0] + ' (' + cc.chi + ')'), luan: r.l, cung: cc.tenCung });
                });
            } else if (r.p === 'C') {
                ob.forEach(function (cc, ii) { if (dat(r.c, ctx(d, ob, ii, ln, null))) kq.push({ loai: r.p, tieu: tieu(r, cc, ln, 0), luan: r.l.replace('{nc}', cc.tenCung), cung: cc.tenCung }); });
            } else {
                if (r.p === 'N' || r.p === 'YN') {
                    i = pos(lnPos); c = ob[i];
                    if (dat(r.c, ctx(d, ob, i, ln, null))) kq.push({ loai: r.p, tieu: r.p === 'N' ? tieu(r, c, ln, 0) : 'Lưu niên ' + d.namXemHan + ' (' + c.chi + '): ' + gon(r.t), luan: r.l, cung: c.tenCung });
                }
                if (r.p === 'Y' || r.p === 'YN') {
                    for (m = 1; m <= 12; m++) {
                        i = pos(dq + m - 1); c = ob[i];
                        if (dat(r.c, ctx(d, ob, i, ln, null))) kq.push({ loai: r.p, tieu: r.p === 'Y' ? tieu(r, c, ln, m) : 'Lưu nguyệt ' + m + ' (' + c.chi + '): ' + gon(r.t), luan: r.l, cung: c.tenCung });
                    }
                }
            }
        });
        return kq;
    }
    return { chay: chay };
})();
if (typeof window !== 'undefined') window.LuuNienNP = LuuNienNP;
