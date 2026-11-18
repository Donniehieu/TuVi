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
            default: r = false;
        }
        return neg ? !r : r;
    }
    function dat(c, x) { return c.split(' & ').every(function (a) { return atom(a, x); }); }
    function ctx(d, ob, i, ln, ring) {
        var c = ob[i], tam = {};
        [0, 4, 6, 8].forEach(function (o) { var t = ten(ob[(i + o) % 12]); for (var k in t) tam[k] = 1; });
        return { d: d, c: c, ln: ln, ring: ring, own: ten(c), tam: tam };
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
            } else if (r.p === 'C') {
                ob.forEach(function (cc, ii) { if (dat(r.c, ctx(d, ob, ii, ln, null))) kq.push({ loai: r.p, tieu: tieu(r, cc, ln, 0), luan: r.l, cung: cc.tenCung }); });
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
