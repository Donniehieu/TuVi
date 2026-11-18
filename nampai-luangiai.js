/* Luận giải Tử Vi Nam Phái: CHỈ dùng các khóa của sách "Mệnh Lý Thiên Cơ" (nampai-luan.js + NamPhai_Luan.json).
 * Không nạp và không gọi bất kỳ hàm luận giải cũ nào (luanmenh.js, luan<cung>.js ...).
 * Các thuật ngữ nhóm (sát tinh, cát tinh, tứ sát, lục bại, Không Kiếp, Hỏa Linh, Song Hao, không vong ...) được GIẢI NGHĨA
 * theo chính lá số đang xem: nêu rõ sao nào đang có mặt, ở cung nào, là đồng cung / tam hợp / đối cung. */
(function () {
    'use strict';
    const SLUG = { "Huynh Đệ": "hd", "Phu Thê": "pt", "Tử Tức": "tn", "Tài Bạch": "tb", "Tật Ách": "ta", "Thiên Di": "td", "Nô Bộc": "nb", "Quan Lộc": "ql", "Điền Trạch": "dt", "Phúc Đức": "pd", "Phụ Mẫu": "pm" };
    const OFFTEN = { 0: 'đồng cung', 4: 'cung tam hợp-', 8: 'cung tam hợp-', 6: 'cung đối-' };

    const SAT6 = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'];
    const LUCCAT = ['Văn Xương', 'Văn Khúc', 'Tả Phù', 'Hữu Bật', 'Thiên Khôi', 'Thiên Việt'];
    const TAMHOA = ['Hóa Lộc', 'Hóa Quyền', 'Hóa Khoa'];
    // Thuật ngữ nhóm -> {ten, sao}. Định nghĩa theo bảng thuật ngữ sách MLTC (tr.90-91) và Tử Vi Đẩu Số Tân Biên (Lục Bại).
    const THUATNGU = [
        { re: /tứ sát|tứ hung|tam sát/i, ten: 'tứ sát (tứ hung tinh)', sao: ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'] },
        { re: /lục sát|sát tinh|ác sát|gặp sát|thêm sát|có sát/i, ten: 'lục sát tinh', sao: SAT6 },
        { re: /Không,? Kiếp|Không Kiếp/i, ten: 'Địa Không, Địa Kiếp', sao: ['Địa Không', 'Địa Kiếp'] },
        { re: /Hỏa,? Linh|Hỏa Linh/i, ten: 'Hỏa Tinh, Linh Tinh', sao: ['Hỏa Tinh', 'Linh Tinh'] },
        { re: /Kình,? Đà|Dương,? Đà/i, ten: 'Kình Dương, Đà La', sao: ['Kình Dương', 'Đà La'] },
        { re: /song hao|Đại Hao,? Tiểu Hao/i, ten: 'Song Hao', sao: ['Đại Hao', 'Tiểu Hao'] },
        { re: /tang hổ|Tang Môn,? Bạch Hổ/i, ten: 'Tang Hổ', sao: ['Tang Môn', 'Bạch Hổ'] },
        { re: /lục bại|bại tinh/i, ten: 'lục bại tinh (Đại Hao, Tiểu Hao, Tang Môn, Bạch Hổ, Thiên Khốc, Thiên Hư)', sao: ['Đại Hao', 'Tiểu Hao', 'Tang Môn', 'Bạch Hổ', 'Thiên Khốc', 'Thiên Hư'] },
        { re: /lục cát/i, ten: 'lục cát tinh', sao: LUCCAT },
        { re: /thất cát/i, ten: 'thất cát tinh', sao: LUCCAT.concat(['Lộc Tồn']) },
        { re: /tam cát hóa|tam hóa/i, ten: 'tam cát hóa', sao: TAMHOA },
        { re: /\bcát tinh/i, ten: 'cát tinh (lục cát, Lộc Tồn, tam cát hóa)', sao: LUCCAT.concat(['Lộc Tồn'], TAMHOA) },
        { re: /văn tinh/i, ten: 'văn tinh', sao: ['Văn Xương', 'Văn Khúc'] },
        { re: /phò tá/i, ten: 'sao phò tá', sao: ['Tả Phù', 'Hữu Bật'] },
        { re: /không vong|Tuần,? Triệt|Tuần hoặc Triệt/i, ten: 'không vong (Tuần, Triệt)', tt: true },
    ];

    function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
    function tieuDe(key) {
        return String(key).replace(/^(Sao nhập .+? TC\d+ - |Cách cục TC\d+ - |Sách vận hạn \d+ - (Đại hạn|Tiểu hạn) - )/, '');
    }
    function cungCuaKhoa(key, data) {
        let m = /^Sao nhập (.+?) TC/.exec(key);
        if (m) return m[1];
        if (/^Cách cục TC|^Sao nhập Mệnh/.test(key)) return 'Mệnh';
        if (/Đại hạn - /.test(key)) return data.tenCungDaiVan;
        if (/Tiểu hạn - /.test(key)) return data.tenCungTieuHan;
        return 'Mệnh';
    }
    function viTri(ob, anc, sao, offs) {
        const i = ob.findIndex(c => c.tenCung === anc);
        if (i < 0) return [];
        const kq = [];
        offs.forEach(o => {
            const c = ob[(i + o) % 12];
            if ((c.sao || []).some(s => s.ten === sao)) kq.push({ cung: c.tenCung, o: o });
        });
        return kq;
    }
    function moTa(v) { return v.o === 0 ? 'đồng cung' : (OFFTEN[v.o] + v.cung); }
    function lietKe(ob, anc, ds, offs) {
        const out = [];
        const dong = [];
        ds.forEach(s => viTri(ob, anc, s, offs).forEach(v => { if (v.o === 0) dong.push(s); else out.push(s + ' (' + moTa(v) + ')'); }));
        return dong.length ? [dong.join(', ') + ' đồng cung'].concat(out) : out;
    }
    function ttCung(ob, anc, offs) {
        const i = ob.findIndex(c => c.tenCung === anc);
        const out = [];
        offs.forEach(o => {
            const c = ob[(i + o) % 12];
            let t = [];
            try { if (isCungCoTuan(c.tenCung)) t.push('Tuần'); if (isCungCoTriet(c.tenCung)) t.push('Triệt'); } catch (e) { }
            if (t.length) out.push(t.join(' và ') + ' (' + (o === 0 ? 'đồng cung' : OFFTEN[o] + c.tenCung) + ')');
        });
        return out;
    }
    const CATL = LUCCAT.concat(['Lộc Tồn'], TAMHOA), TUSAT = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh'];
    function nhomTen(lst) {
        const k = x => x.slice().sort().join('|');
        const m = [[SAT6, 'sát tinh'], [TUSAT, 'tứ sát'], [LUCCAT, 'lục cát tinh'], [CATL, 'cát tinh']].find(e => k(e[0]) === k(lst));
        return m ? m[1] : null;
    }
    function ds(l) { return l.length === 1 ? l[0] : l.slice(0, -1).join(', ') + ' và ' + l[l.length - 1]; }
    function viTriText(v) { return v.o === 0 ? 'đồng cung' : (v.o === 6 ? 'ở cung đối-' : 'ở cung tam hợp-') + v.cung; }
    const CAN_FULL = { 'G.': 'Giáp', 'Ấ.': 'Ất', 'B.': 'Bính', 'Đ.': 'Đinh', 'M.': 'Mậu', 'K.': 'Kỷ', 'C.': 'Canh', 'T.': 'Tân', 'N.': 'Nhâm', 'Q.': 'Quý' };
    const OFF = { own: [0], doi: [6], tamhop: [4, 8], chieu: [4, 6, 8], hoi: [0, 4, 6, 8] };
    function coMat(ob, anc, val, offs) {   // mọi sao của vế "A/B;C" thực sự có mặt, kèm vị trí
        const out = [];
        String(val).split(';').forEach(it => it.split('/').forEach(s => viTri(ob, anc, s, offs).forEach(v => { if (!out.some(x => x.s === s && x.v.o === v.o)) out.push({ s: s, v: v }); })));
        return out;
    }
    /* Dựng điều kiện THỰC TẾ của một quy tắc theo lá số đang xem: gộp mọi sao có mặt (nhóm "cát tinh", "sát tinh" ... được thay bằng đúng các sao đang gặp),
       nên một quy tắc chỉ hiện MỘT lần dù khớp bằng nhiều sao. atoms = nguyên tử gốc của quy tắc (chưa tách "hoặc"). */
    function thucTe(atoms, anc, ob, data) {
        if (atoms.some(a => a[0] === 'or' || a[0] === 'and')) return null;
        const own = [];
        atoms.forEach(a => { if (a[0] === 'own') coMat(ob, anc, a[1], OFF.own).forEach(x => { if (own.indexOf(x.s) < 0) own.push(x.s); }); });
        // sao ở cung đối / tam hợp / hội chiếu mà thực ra đồng cung thì gộp vào nhóm "A, B đồng cung"
        atoms.forEach(a => {
            if (a[0] === 'doi' || a[0] === 'tamhop' || a[0] === 'chieu' || a[0] === 'hoi') coMat(ob, anc, a[1], OFF[a[0]]).forEach(x => { if (x.v.o === 0 && own.indexOf(x.s) < 0) own.push(x.s); });
            if (a[0] === 'hoin') a[1].split('/').forEach(s => viTri(ob, anc, s, OFF.hoi).forEach(v => { if (v.o === 0 && own.indexOf(s) < 0) own.push(s); }));
        });
        const parts = [own.length ? (own.length === 1 ? own[0] + ' tại ' + anc : own.join(', ') + ' đồng cung tại ' + anc) : 'cung ' + anc];
        const ci = ob.findIndex(c => c.tenCung === anc);
        const gap = [], chiP = [];
        atoms.forEach(a => {
            const k = a[0];
            if (k === 'chi') {
                const v = a[1];
                chiP.push(v.startsWith('DAC:') || v.startsWith('DAM:') ? doSangThucTe(ob, v.slice(4), v.startsWith('DAM:')) : 'ở ' + ob[ci].chi);
            } else if (k === 'doi' || k === 'tamhop' || k === 'chieu' || k === 'hoi') {
                coMat(ob, anc, a[1], OFF[k]).filter(x => x.v.o !== 0).forEach(x => { const t = x.s + ' (' + viTriText(x.v) + ')'; if (gap.indexOf(t) < 0) gap.push(t); });
            } else if (k === 'hoin') {
                const f = [];
                a[1].split('/').forEach(s => viTri(ob, anc, s, OFF.hoi).forEach(v => { if (v.o !== 0) f.push(s + ' (' + viTriText(v) + ')'); }));
                if (f.length) f.forEach(t => { if (gap.indexOf(t) < 0) gap.push(t); });
                else if (!a[1].split('/').some(x => own.indexOf(x) >= 0)) parts.push('gặp nhóm sao này');
            } else if (k === 'nohoi') {
                const l = a[1].replace(/;/g, '/').split('/'); parts.push('không gặp ' + (nhomTen(l) || l.join(', ')));
            } else if (k === 'not') {
                const b = a[1];
                if (b[0] === 'hoin' || b[0] === 'hoi' || b[0] === 'own') { const l = String(b[1]).split('/'); parts.push('không có ' + (nhomTen(l) || l.join(', ')) + (b[0] === 'own' ? ' cùng cung' : '')); }
                else if (b[0] === 'chi') parts.push('không ở ' + b[1]);
            } else if (k === 'can') parts.push('sinh năm ' + (CAN_FULL[data.canNam] || a[1]));
            else if (k === 'tuoi') parts.push('tuổi ' + data.chiNam);
            else if (k === 'ad') parts.push(a[1] === 'Dương Nam,Âm Nam' ? 'nam mạng' : a[1] === 'Dương Nữ,Âm Nữ' ? 'nữ mạng' : data.amduong);
            else if (k === 'ngay') parts.push('sinh ban ngày');
            else if (k === 'dem') parts.push('sinh ban đêm');
            else if (k === 'vcd') parts.push('cung vô chính diệu');
            else if (k === 'tuan' || k === 'triet' || k === 'tt') { const r = ttCung(ob, anc, [0]); if (r.length) parts.push(r.join(', ')); }
            else if (k === 'giap') parts.push(a[1] + ' và ' + a[2] + ' kẹp hai bên cung');
            else if (k === 'cungown') { const cu = a[1] === 'THÂN' ? data.cungCu : a[1]; const f = coMat(ob, cu, a[2], [0]).map(x => x.s); parts.push('cung ' + cu + ' có ' + (f.length ? ds(f) : a[2])); }
            else if (k === 'cungchi') { const c = ob.find(x => x.tenCung === a[1]); parts.push('cung ' + a[1] + ' ở ' + (c ? c.chi : a[2])); }
            else if (k === 'thanchi') { const c = ob.find(x => x.tenCung === data.cungCu); parts.push('cung Thân ở ' + (c ? c.chi : a[1])); }
            else if (k === 'hoichi' || k === 'starchi') { const c = ob.find(x => (x.sao || []).some(s => s.ten === a[1])); parts.push(a[1] + ' ở ' + (c ? c.chi : a[2])); }
            else if (k === 'amhop') parts.push('cung lục hợp có ' + a[1]);
            else if (k === 'ring') parts.push('Tràng Sinh ở ' + a[1]);
            else if (k === 'th') parts.push('tam hợp có ' + a[1].replace(/;/g, ' và '));
        });
        // thứ tự: cụm đầu, vị trí / độ sáng của sao, "gặp ..." (không có vị trí thì nối thẳng: "A, B đồng cung tại X gặp C (...)"), điều kiện còn lại
        const kq = [parts[0]].concat(chiP);
        if (gap.length) { const g = 'gặp ' + gap.join(', '); if (!chiP.length) kq[0] += ' ' + g; else kq.push(g); }
        return kq.concat(parts.slice(1)).join(', ');
    }
    /* Vận hạn: quy tắc gốc gồm các nguyên tử tuổi/can/tháng/giờ/chi cung hạn/sao tọa thủ cung hạn */
    function thucTeHan(atoms, anc, loai, ob, data) {
        const H = loai === 'd' ? 'cung đại hạn' : 'cung tiểu hạn';
        const parts = [], stars = [];
        const ci = ob.findIndex(c => c.tenCung === anc);
        for (const a of atoms) {
            const k = a[0];
            if (k === 'hanown') {
                a[1].split('/').forEach(s => {
                    const nm = [s, s + ' (ĐV)', '(' + s + ' - ĐV)', 'L. ' + s];
                    if ((ob[ci].sao || []).some(x => nm.indexOf(x.ten) >= 0) && stars.indexOf(s) < 0) stars.push(s);
                });
            } else if (k === 'tuoi') parts.push('người tuổi ' + data.chiNam);
            else if (k === 'can') parts.push('người sinh năm ' + (CAN_FULL[data.canNam] || a[1]));
            else if (k === 'thang') parts.push('sinh tháng ' + data.thangsinh + ' âm lịch');
            else if (k === 'gio') parts.push('sinh giờ ' + data.giosinh);
            else if (k === 'hanchi') parts.push(H + ' ở ' + ob[ci].chi);
            else return null;
        }
        if (stars.length) parts.unshift(ds(stars) + ' tọa thủ ' + H);
        return parts.join(', ');
    }
    function doSangThucTe(ob, saoList, toi) {
        const seg = [];
        saoList.split('/').forEach(n => {
            const c = ob.find(x => (x.sao || []).some(s => s.ten === n));
            const m = c ? KhoaHienThi.ma(n, c.chi) : '';
            const t = toi ? 'hãm địa' : (KhoaHienThi.laSang(m) ? KhoaHienThi.tenDay[m] : 'ở vị trí sáng');
            if (seg.length && seg[seg.length - 1].t === t) seg[seg.length - 1].n.push(n); else seg.push({ n: [n], t: t });
        });
        return seg.map(x => x.n.join(', ') + ' ' + x.t).join(', ');
    }
    function tenCach(key) {
        const m = /^Cách cục TC\d+ - (.+?): /.exec(key);
        return m ? m[1] : null;
    }
    /* Với các thuật ngữ nhóm xuất hiện trong lời luận: chỉ nêu những sao thực sự có trong lá số (không liệt kê cái không có) */
    function ghiChuLuan(luanTxt, anc, ob) {
        const out = [];
        THUATNGU.forEach(t => {
            if (!t.re.test(luanTxt)) return;
            if (t.tt) { const r = ttCung(ob, anc, [0, 4, 6, 8]); if (r.length) out.push(t.ten + ': ' + r.join(', ')); return; }
            const r = lietKe(ob, anc, t.sao, [0, 4, 6, 8]);
            if (r.length) out.push(t.ten + ' trong lá số: ' + r.join(', '));
        });
        return out;
    }
    /* Gom các khóa đã tách của cùng một quy tắc thành MỘT mục; dựng điều kiện thực tế theo lá số. Trả về [{tieu, luan, gn}] (dùng chung với bản C#). */
    function gomMuc(keys, luan, metaAll, data) {
        const ob = data.lasoOb;
        const K = metaAll.k || {}, R = metaAll.r || {};
        const nhom = [], idx = {};
        keys.forEach(k => {
            const rid = K[k] || k;
            if (idx[rid] === undefined) { idx[rid] = nhom.length; nhom.push({ rid: rid, keys: [] }); }
            nhom[idx[rid]].keys.push(k);
        });
        return nhom.map(g => {
            const k = g.keys[0];
            const anc = cungCuaKhoa(k, data);
            let tieu = tieuDe(k), gn = [];
            try {
                const at = R[g.rid];
                if (at && at.length) {
                    const t = /^H/.test(g.rid) ? thucTeHan(at, anc, g.rid.slice(-1), ob, data) : thucTe(at, anc, ob, data);
                    if (t) { const tc = tenCach(k); tieu = (tc ? tc + ': ' : '') + t; }
                }
                gn = ghiChuLuan(luan[k] || '', anc, ob);
            } catch (e) { if (window.console) console.warn(e); }
            return { tieu: tieu, luan: luan[k] || '', gn: gn, cach: tenCach(k) };
        });
    }
    window.NamPhaiGom = gomMuc;
    function render(keys, luan, metaAll, data, cungTT, cungTen) {
        KhoaHienThi.np = true;
        const items = keys.length ? gomMuc(keys, luan, metaAll, data).map(m => ({ m: m, ten: KhoaHienThi.viet(m.tieu, data), luan: KhoaHienThi.vietLuan(m.luan, data, cungTT ? cungTT.tenCung : cungTen) })) : [];
        let tt = '', list = items;
        if (cungTT && KhoaHienThi.nhanTT(cungTT)) {
            const cach = items.filter(i => i.m.cach).map(i => ({ ten: i.m.cach, luan: i.luan }));
            tt = `<div class="np-key"><b style="color:#8a4fd0">${esc(KhoaHienThi.nhanTT(cungTT))} án ngữ cung ${esc(cungTT.tenCung)}</b>` + KhoaHienThi.cauTT(cungTT, cach).map(x => `<span>• ${esc(x)}</span>`).join('') + '</div>';
            const lq = i => KhoaHienThi.lienQuan(i.ten + ' ' + i.luan);
            list = items.filter(lq).concat(items.filter(i => !lq(i)));
        }
        if (!list.length && !tt) return '<p class="np-empty">Không có điều kiện nào trong sách khớp với lá số này.</p>';
        return tt + list.map(i => {
            const gn = '';
            return `<div class="np-key"><b>${esc(i.ten)}</b><span>${esc(i.luan)}</span>${gn}</div>`;
        }).join('');
    }
    function chay(fn, ...args) {
        const keys = [];
        try { if (typeof window[fn] === 'function') window[fn](keys, ...args); } catch (e) { if (window.console) console.warn(fn, e); }
        return Array.from(new Set(keys));
    }

    window.NamPhaiLuanGiai = async function () {
        let luan = {}, metaAll = {}, luuRules = [];
        try {
            luan = await (await fetch('NamPhai_Luan.json')).json();
            try { metaAll = await (await fetch('NamPhai_Meta.json')).json(); } catch (e) { metaAll = {}; }
        } catch (e) {
            const el = document.getElementById('load-error');
            el.textContent = 'Không nạp được dữ liệu luận Nam Phái (NamPhai_Luan.json). Hãy mở trang qua máy chủ web.';
            el.classList.remove('d-none');
            return;
        }
        try { luuRules = (await (await fetch('NamPhai_Luu.json')).json()).r || []; } catch (e) { luuRules = []; }
        const data = JSON.parse(localStorage.getItem('laso_data'));
        const anh = localStorage.getItem('anhBanLaSo');
        document.getElementById('svg-holder').innerHTML = anh
            ? `<img src="${anh}" alt="Ảnh bàn lá số" style="max-width:700px;width:100%;border-radius:12px;border:1.5px solid #bce3dd;">`
            : '<em>(Không có ảnh bàn lá số)</em>';

        document.getElementById('menh-content').innerHTML = render(chay('LuanCachThienCo22'), luan, metaAll, data, data.lasoOb.find(c => c.tenCung === 'Mệnh'));

        const dai = chay('LuanVanHanNamPhai', 'dai'), tieu = chay('LuanVanHanNamPhai', 'tieu');
        document.getElementById('vanhan-content').innerHTML =
            `<h3>Đại hạn hiện tại: cung ${esc(data.tenCungDaiVan || '')}</h3>${render(dai, luan, metaAll, data, null, data.tenCungDaiVan)}` +
            `<h3>Tiểu hạn năm xem: cung ${esc(data.tenCungTieuHan || '')}</h3>${render(tieu, luan, metaAll, data, null, data.tenCungTieuHan)}`;

        // sao lưu niên (12 tuế tinh, 12 tướng tinh) và quy tắc lưu niên / lưu nguyệt (chương 4)
        const luu = (typeof LuuNienNP !== 'undefined') ? LuuNienNP.chay(luuRules, data) : [];
        const muc = x => `<div class="np-key"><b>${esc(KhoaHienThi.viet(x.tieu, data))}</b><span>${esc(KhoaHienThi.vietLuan(x.luan, data, x.cung, true))}</span></div>`;
        document.getElementById('vanhan-content').innerHTML +=
            `<h3>Lưu niên ${esc(data.namXemHan || '')} (sao lưu niên, quy tắc lưu niên, lưu nguyệt và thi cử, sự nghiệp)</h3>` +
            (luu.filter(x => x.loai !== 'C' && x.tieu.indexOf('Phi tinh:') !== 0).map(muc).join('') || '<p class="np-empty">Không có điều kiện nào trong sách khớp với lưu niên này.</p>') +
            (luu.some(x => x.tieu.indexOf('Phi tinh:') === 0) ? '<h3>Tứ hóa phi tinh của lá số (chương 5, mục 2.7)</h3>' + luu.filter(x => x.tieu.indexOf('Phi tinh:') === 0).map(muc).join('') : '');
        let html = '';
        data.lasoOb.forEach(c => {
            const sl = SLUG[c.tenCung];
            if (!sl) return;
            const keys = chay('LuanSaoCungTC_' + sl);
            html += `<details class="np-cung"${keys.length ? ' open' : ''}><summary>${esc(c.tenCung)} (${esc(c.chi)}) · ${keys.length} điều</summary>${render(keys, luan, metaAll, data, c)}${luu.filter(x => x.loai === 'C' && x.cung === c.tenCung).map(muc).join('')}</details>`;
        });
        document.getElementById('cung-content').innerHTML = html;
    };
})();
