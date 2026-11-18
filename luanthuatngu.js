/* Tự sinh bởi scripts/phu17/gen_thuatngu.py (đồng nhất với ThuatNguLaso.cs) - giải nghĩa thuật ngữ nhóm của tab cũ theo chính lá số. */
var GhiChuThuatNgu = (function () {
    'use strict';
    const CAT = ["Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Lộc Tồn", "Quốc Ấn", "Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Long Trì", "Phượng Các", "Thanh Long", "Thiên Quan", "Thiên Phúc", "Ân Quang", "Thiên Quý", "Tam Thai", "Bát Tọa", "Thiên Giải", "Địa Giải"];
    const SANG = {"Tử Vi": ["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Ngọ", "Dần", "Thân"], "Liêm Trinh": ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân"], "Thiên Phủ": ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Tỵ", "Hợi", "Mùi"], "Vũ Khúc": ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], "Thiên Tướng": ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"], "Thất Sát": ["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], "Phá Quân": ["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], "Tham Lang": ["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], "Cự Môn": ["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], "Thái Dương": ["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], "Thiên Cơ": ["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], "Thái Âm": ["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], "Thiên Đồng": ["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"], "Thiên Lương": ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"]};
    const TERMS = [
        { re: /tứ sát|tứ hung|tam sát/i, ten: "tứ sát (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh)", sao: ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"] },
        { re: /lục sát|sát tinh|ác sát|gặp sát|thêm sát|có sát/i, ten: "lục sát tinh (Kình, Đà, Hỏa, Linh, Không, Kiếp)", sao: ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp"] },
        { re: /Không,? Kiếp|Không Kiếp/i, ten: "Địa Không, Địa Kiếp", sao: ["Địa Không", "Địa Kiếp"] },
        { re: /Hỏa,? Linh|Hỏa Linh/i, ten: "Hỏa Tinh, Linh Tinh", sao: ["Hỏa Tinh", "Linh Tinh"] },
        { re: /Kình,? Đà|Dương,? Đà/i, ten: "Kình Dương, Đà La", sao: ["Kình Dương", "Đà La"] },
        { re: /song hao|Đại Hao,? Tiểu Hao/i, ten: "Song Hao (Đại Hao, Tiểu Hao)", sao: ["Đại Hao", "Tiểu Hao"] },
        { re: /tang hổ|Tang Môn,? Bạch Hổ/i, ten: "Tang Hổ (Tang Môn, Bạch Hổ)", sao: ["Tang Môn", "Bạch Hổ"] },
        { re: /khốc hư|Thiên Khốc,? Thiên Hư/i, ten: "Khốc Hư (Thiên Khốc, Thiên Hư)", sao: ["Thiên Khốc", "Thiên Hư"] },
        { re: /lục bại|bại tinh/i, ten: "lục bại tinh (Song Hao, Tang Hổ, Khốc Hư)", sao: ["Đại Hao", "Tiểu Hao", "Tang Môn", "Bạch Hổ", "Thiên Khốc", "Thiên Hư"] },
        { re: /lục cát/i, ten: "lục cát tinh", sao: ["Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt"] },
        { re: /\bcát tinh|sao tốt|cát diệu|sao sáng/i, ten: "cát tinh (sao tốt gồm Quyền, Khoa, Lộc và chính tinh miếu vượng đắc địa)", sao: "CAT" },
        { re: /không vong|Tuần,? Triệt|Tuần hoặc Triệt/i, ten: "không vong (Tuần, Triệt)", sao: "TT" },
    ];
    const TENOFF = { 0: "đồng cung", 4: "cung tam hợp-", 8: "cung tam hợp-", 6: "cung đối-" };
    function ob() { let d = {}; try { d = JSON.parse(localStorage.getItem("laso_data")) || {}; } catch (e) { d = {}; } return d.lasoOb || []; }
    function laNatal(t) { return !(t.indexOf("L. ") === 0 || t.indexOf("(") === 0 || t.slice(-4) === "(ĐV)"); }
    function viTri(o, i, pred) {
        const out = [];
        [0, 4, 6, 8].forEach(off => {
            const c = o[(i + off) % 12];
            (c.sao || []).forEach(s => { const t = s.ten; if (laNatal(t) && pred(t, c, s)) out.push(t + " (" + (off === 0 ? "đồng cung" : TENOFF[off] + c.tenCung) + ")"); });
        });
        const dong = out.filter(x => /\(đồng cung\)$/.test(x)).map(x => x.replace(/ \(đồng cung\)$/, ''));
        if (!dong.length) return out;
        return [dong.join(', ') + ' đồng cung'].concat(out.filter(x => !/\(đồng cung\)$/.test(x)));
    }
    function ttCung(o, i) {
        const out = [];
        [0, 4, 6, 8].forEach(off => {
            const c = o[(i + off) % 12]; const t = [];
            try { if (isCungCoTuan(c.tenCung)) t.push("Tuần"); if (isCungCoTriet(c.tenCung)) t.push("Triệt"); } catch (e) { }
            if (t.length) out.push(t.join(" và ") + " (" + (off === 0 ? "đồng cung" : TENOFF[off] + c.tenCung) + ")");
        });
        return out;
    }
    return function (text, tenCung) {
        const o = ob(); const i = o.findIndex(c => c.tenCung === tenCung);
        if (i < 0) return [];
        const res = [];
        TERMS.forEach(t => {
            if (!t.re.test(text)) return;
            let r;
            if (t.sao === "TT") r = ttCung(o, i);
            else if (t.sao === "CAT") r = viTri(o, i, (n, c, s) => CAT.indexOf(n) >= 0 || (SANG[n] && SANG[n].indexOf(c.chi) >= 0 && /chinh-tinh/.test(s.class || "")));
            else r = viTri(o, i, n => t.sao.indexOf(n) >= 0);
            if (r.length) res.push(t.ten + " trong tam phương tứ chính của cung " + tenCung + ": " + r.join(", "));
        });
        return res;
    };
})();
