/* luanvanhan-web.js — nạp SAU luangiai-fix.js.
 * Đồng bộ bản web với bản Unity (dữ liệu V3):
 *  1. loadComboExcel: chuẩn hóa khóa Excel (cùng quy tắc scripts/post_v3.py và LuanGiaiEngine.ChuanHoaKhoa),
 *     bỏ hàng chỉ lặp lại khóa (chưa có luận), gộp khóa chỉ khác cách đặt dấu, thay {XH}/{xh} và tên cung Phu/Thê.
 *  2. traCuuNhieuBoSao: chuẩn hóa khóa do engine sinh ra trước khi tra.
 *  3. Mục "Luận giải vận hạn": tương quan chi, vận hạn theo sách, sao nhập hạn (đại hạn và tiểu hạn).
 */
(function () {
    'use strict';

    function docLaso() {
        try { return JSON.parse(localStorage.getItem('laso_data')) || {}; } catch (e) { return {}; }
    }

    /* ---- chuẩn hóa khóa (port LuanGiaiEngine.ChinhTa / ChuanHoaKhoa) ---- */
    function chinhTa(k) {
        return k.replace(/toạ/g, 'tọa').replace(/Hoả/g, 'Hỏa').replace(/hoả/g, 'hỏa').replace(/Hoá/g, 'Hóa').replace(/hoá/g, 'hóa');
    }
    function chuanHoaKhoa(k) {
        if (k === null || k === undefined) return '';
        k = chinhTa(String(k));
        var o = k;
        k = k.replace(/^Quý Anh(?![\p{L}\p{N}_])/u, 'Nam');
        k = k.replace(/^Quý Chị(?![\p{L}\p{N}_])/u, 'Nữ');
        k = k.replace(/^Bạn (?=\S)/, '');
        if (k !== o && o.indexOf('Bạn ') === 0 && k.length > 0) k = k.charAt(0).toUpperCase() + k.substring(1);
        k = k.replace(/tuổi(?=[A-ZÂĐÀ-Ỹ])/g, 'tuổi ');
        return k.trim();
    }

    /* ---- xưng hô (port XungHo.cs): dưới 20 Cháu; 20-49 Quý Anh/Quý Chị; từ 50 Quý Ông/Quý Bà ---- */
    function thongTinNguoiXem() {
        var d = docLaso();
        var tuoi = Math.max(0, (parseInt(d.tuoiAm, 10) || 1) - 1); // tuoiAm = năm xem hạn - năm sinh + 1
        return { tuoi: tuoi, nam: d.gioitinh === 'Nam' };
    }
    function xungHo(tuoi, nam) {
        if (tuoi < 20) return 'Cháu';
        if (tuoi < 50) return nam ? 'Quý Anh' : 'Quý Chị';
        return nam ? 'Quý Ông' : 'Quý Bà';
    }
    function renderXungHo(text) {
        if (typeof text !== 'string') return text;
        var nx = thongTinNguoiXem();
        var xh = xungHo(nx.tuoi, nx.nam);
        var thuong = xh.charAt(0).toLowerCase() + xh.substring(1);
        var pt = nx.nam ? 'Thê' : 'Phu';
        text = text.split('{XH}').join(xh).split('{xh}').join(thuong);
        return text.replace(/(?<![\p{L}])([Pp])hu [Tt]hê(?![\p{L}])/gu, function (m, c) { return c === 'P' ? pt : pt.toLowerCase(); });
    }
    window.renderXungHo = renderXungHo;
    window.chuanHoaKhoaV3 = chuanHoaKhoa;

    /* ---- 1. tải Excel V3 ---- */
    var excelCache = {};
    function baoLoi(file) {
        var el = document.getElementById('load-error');
        if (el) {
            el.textContent = 'Không tải được dữ liệu luận giải "' + file + '.xlsx". Hãy kiểm tra kết nối mạng hoặc mở trang qua máy chủ web.';
            el.classList.remove('d-none');
        }
    }
    window.loadComboExcel = function (file, cb) {
        var p = excelCache[file];
        if (!p) {
            p = fetch(file + '.xlsx')
                .then(function (res) {
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    return res.arrayBuffer();
                })
                .then(function (data) {
                    var workbook = XLSX.read(data, { type: 'array' });
                    var sheet = workbook.Sheets[workbook.SheetNames[0]];
                    var rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                    var arr = [];
                    var map = {};
                    for (var i = 0; i < rows.length; ++i) {
                        var row = rows[i];
                        if (!row[0] || typeof row[0] !== 'string') continue;
                        var kRaw = row[0].trim();
                        var vals = row.slice(1).filter(function (x) { return typeof x === 'string' && x.trim() && x.trim() !== kRaw; })
                            .map(function (x) { return renderXungHo(x.trim()); });
                        if (!vals.length) continue;
                        var key = chinhTa(kRaw);
                        var old = map[key];
                        if (!old) {
                            old = { keyNorm: key, keyRaw: kRaw, values: [] };
                            map[key] = old; arr.push(old);
                        }
                        vals.forEach(function (v) { if (old.values.indexOf(v) < 0) old.values.push(v); });
                    }
                    arr._map = map;
                    return arr;
                });
            excelCache[file] = p;
            p.catch(function () { delete excelCache[file]; });
        }
        p.then(
            function (arr) { if (cb) cb(arr); },
            function (err) {
                if (window.console) console.warn('Không tải được ' + file + '.xlsx', err);
                baoLoi(file);
            }
        );
    };

    /* ---- 2. tra khóa ---- */
    window.traCuuNhieuBoSao = function (keysToFind, comboData) {
        var map = comboData && comboData._map;
        if (!map) { map = {}; (comboData || []).forEach(function (it) { map[it.keyNorm] = it; }); }
        return keysToFind.map(function (rawKey) {
            var key = chuanHoaKhoa(rawKey);
            var found = map[key];
            return { key: key, found: !!found, values: found ? found.values : [] };
        });
    };

    /* ---- 3. mục vận hạn ---- */
    var CHI12 = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
    function khoaTuongQuan(d, tenCungHan) {
        var ob = d.lasoOb || [];
        var a = null;
        ob.forEach(function (c) { if (c.tenCung === tenCungHan) a = c; });
        var keys = [];
        if (!a) return keys;
        var ia = CHI12.indexOf(a.chi);
        ob.forEach(function (b) {
            if (b.tenCung === a.tenCung) return;
            var ib = CHI12.indexOf(b.chi);
            var diff = ((ia - ib) % 12 + 12) % 12;
            var rels = [];
            if (diff === 6) rels.push('xung chiếu');
            if (diff === 4 || diff === 8) rels.push('tam chiếu');
            if ((ia + ib) % 12 === 1) rels.push('nhị hợp');
            rels.forEach(function (r) {
                keys.push('Hạn tại cung ' + a.tenCung + ' ở ' + a.chi + ' ' + r + ' cung ' + b.tenCung + ' ở ' + b.chi);
            });
        });
        return keys;
    }
    function layKhoa(fn, loai) {
        var keys = [];
        try { if (typeof window[fn] === 'function') window[fn](keys, loai); } catch (e) { if (window.console) console.warn(fn, e); }
        return Array.from(new Set(keys.filter(Boolean)));
    }
    function thoat(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
    /* Thuật ngữ nhóm (cát tinh, sát tinh, lục bại, Không Kiếp, Hỏa Linh, Song Hao ...) được giải nghĩa bằng chính các sao có trong lá số (luanthuatngu.js) */
    function ghiChuHtml() { return ''; }   // luận đã nêu cụ thể sao trong lá số (khoahienthi.js) nên không còn ghi chú "Theo lá số này"

    /* Tên khóa hiển thị: bỏ số thứ tự nội bộ của các khóa do công cụ sinh ("Sách vận hạn 12 - Đại hạn - ", "Tam Không 03 - Mệnh - ", "Ví dụ lá số 15 - Phu Thê - ") */
    function tenKhoaHienThi(key) {
        return String(key).replace(/^(Sách vận hạn \d+ - (Đại hạn|Tiểu hạn) - |Tam Không \d+ - [^-]+ - |Ví dụ lá số \d+ - [^-]+ - )/, '');
    }
    window.tenKhoaHienThi = tenKhoaHienThi;

    /* Hiển thị luận theo cung và các phần tổng quan/lời khuyên: dùng tenKhoaHienThi cho tiêu đề khóa */
    function KH() { return (typeof KhoaHienThi !== 'undefined') ? KhoaHienThi : null; }
    function vietKhoa(key, d) { var k = KH(); return k ? k.viet(tenKhoaHienThi(key), d) : tenKhoaHienThi(key); }
    function vietLuan(v, d, cung) { var k = KH(); return k ? k.vietLuan(v, d, cung) : v; }
    function ttBlock(d, tenCung, items) {
        var k = KH(); if (!k) return '';
        var c = (d.lasoOb || []).filter(function (x) { return x.tenCung === tenCung; })[0];
        if (!c || !k.nhanTT(c)) return '';
        var cach = items.filter(function (it) { return it.values.length && /^Cách/.test(it.values[0]); }).map(function (it) { return { ten: it.ten, luan: it.values.join(' ') }; });
        return '<div class="bo-sao-group tt-block"><b style="color:#8a4fd0">' + thoat(k.nhanTT(c)) + ' án ngữ cung ' + thoat(tenCung) + '</b>' +
            k.cauTT(c, cach).map(function (x) { return '<div>• ' + thoat(x) + '</div>'; }).join('') + '</div>';
    }
    /* Hiển thị luận theo cung: tên khóa và vế luận viết theo đúng lá số; cung có Triệt/Tuần thì luận Triệt/Tuần và các khóa liên quan được xếp trước */
    window.traCuuVaHienThiChoCung = function (item, comboData, keyArr) {
        var results = traCuuNhieuBoSao(keyArr, comboData);
        var divId = 'cung-' + item.tenCung.replace(/\s/g, '').toLowerCase();
        var excelDiv = document.querySelector('#' + divId + ' .bo-sao-excel');
        if (!excelDiv) return;
        var d = docLaso();
        var found = results.filter(function (r) { return r.found && r.values.length > 0; });
        if (typeof GopKhoaCu !== 'undefined') found = GopKhoaCu.gop(found);   // gộp các khóa đã tách của cùng một quy tắc
        var items = found.map(function (r) { return { r: r, ten: vietKhoa(r.key, d), values: r.values.map(function (v) { return vietLuan(v, d, item.tenCung); }) }; });
        var tt = ttBlock(d, item.tenCung, items);
        if (tt) {
            var lq = function (it) { return KH().lienQuan(it.ten + ' ' + it.values.join(' ')); };
            items = items.filter(lq).concat(items.filter(function (it) { return !lq(it); }));
        }
        if ((items.length > 0 || tt) && typeof LuanSapXep !== 'undefined') {
            // chính tinh trước (cách cục rồi từng sao), phụ tinh sau, phụ tinh lẻ cuối cùng; các điều cùng chủ điểm xếp cạnh nhau
            excelDiv.innerHTML = tt + LuanSapXep.html(items.map(function (it) { return { ten: it.ten, luan: it.values, tt: !!tt && KH().lienQuan(it.ten + ' ' + it.values.join(' ')) }; }), LuanSapXep.thongTinCung(d, item.tenCung));
            var tieuDe = document.querySelector('#' + divId + ' .cung-title');
            if (tieuDe && !tieuDe.querySelector('small')) tieuDe.insertAdjacentHTML('beforeend', '<small>' + items.length + ' điều</small>');
        } else if (items.length > 0 || tt) {
            excelDiv.innerHTML = tt + items.map(function (it) {
                return '<div class="bo-sao-group"><b>' + thoat(it.ten) + ':</b>' +
                    it.values.map(function (v) { return '<div>• ' + thoat(v) + '</div>'; }).join('') + ghiChuHtml(it.r, item.tenCung) + '</div>';
            }).join('');
        } else {
            excelDiv.innerHTML = '<em>Không có thông tin tra cứu từ Excel</em>';
        }
    };
    /* Các năm dương lịch kèm tuổi của đại hạn / tiểu hạn đang xét: "2021 (23 tuổi), 2022 (24 tuổi)..." */
    function namVanHan(tieuDe) {
        if (typeof LuanSapXep === 'undefined') return '';
        var d = docLaso(), cuc = parseInt(d.cucSo, 10) || 0, tuoi = parseInt(d.tuoiAm, 10) || 1;
        if (/Đại hạn hiện tại/.test(tieuDe)) { var khoi = tuoi >= cuc ? Math.min(Math.floor((tuoi - cuc) / 10), 11) : 0; return LuanSapXep.namTuoi(d, cuc + khoi * 10, cuc + khoi * 10 + 9); }
        if (/Tiểu hạn năm xem/.test(tieuDe)) return LuanSapXep.namTuoi(d, tuoi, tuoi);
        return '';
    }
    function khoiHtml(tieuDe, ketQua, tenCung) {
        var tim = ketQua.filter(function (r) { return r.found && r.values.length; });
        if (typeof GopKhoaCu !== 'undefined') tim = GopKhoaCu.gop(tim);
        var html = '<div class="cung-item vanhan-khoi"><b>' + thoat(tieuDe) + '</b>';
        var nam = namVanHan(tieuDe); if (nam) html += '<div class="lsx-nam">Năm dương lịch: ' + thoat(nam) + '</div>';
        if (!tim.length) html += '<div><em>Không có dữ liệu cho phần này.</em></div>';
        tim.forEach(function (r) {
            var dd = docLaso();
            html += '<div class="bo-sao-group"><b>' + thoat(vietKhoa(r.key, dd)) + ':</b>' +
                r.values.map(function (v) { return '<div>• ' + thoat(vietLuan(v, dd, tenCung)) + '</div>'; }).join('') + ghiChuHtml(r, tenCung) + '</div>';
        });
        return html + '</div>';
    }
    function dungKhoi(file, tieuDe, keys, el, thuTu, tenCung) {
        loadComboExcel(file, function (arr) {
            el.slots[thuTu] = khoiHtml(tieuDe, traCuuNhieuBoSao(keys, arr), tenCung);
            el.node.innerHTML = el.slots.join('');
        });
    }
    window.LuanVanHanVaHienThi = function () {
        var node = document.getElementById('vanhan-content');
        if (!node) return;
        var d = docLaso();
        var cuc = parseInt(d.cucSo, 10) || 0;
        var tuoiAm = parseInt(d.tuoiAm, 10) || 1;
        var khoi = tuoiAm >= cuc ? Math.min(Math.floor((tuoiAm - cuc) / 10), 11) : 0;
        var dv = d.tenCungDaiVan, th = d.tenCungTieuHan;
        var el = { node: node, slots: [] };
        node.innerHTML = '';
        var tenDai = 'Đại hạn hiện tại: cung ' + dv + ' (tuổi ' + (cuc + khoi * 10) + '–' + (cuc + khoi * 10 + 9) + ')';
        var tenTieu = 'Tiểu hạn năm xem: cung ' + th;
        var n = 0;
        var viec = [
            ['LuanVanHan_TuongQuanChi', tenDai + ' - tương quan chi (xung chiếu, tam chiếu, nhị hợp)', khoaTuongQuan(d, dv), dv],
            ['LuanVanHan_TuongQuanChi', tenTieu + ' - tương quan chi (xung chiếu, tam chiếu, nhị hợp)', khoaTuongQuan(d, th), th],
            ['LuanVanHan_Sach', 'Vận hạn theo sách - ' + tenDai, layKhoa('LuanVanHanSach', 'dai'), dv],
            ['LuanVanHan_Sach', 'Vận hạn theo sách - ' + tenTieu, layKhoa('LuanVanHanSach', 'tieu'), th],
            ['LuanVanHan_SaoNhapHan', 'Sao nhập hạn (Tân Biên mục 3.2) - ' + tenDai, layKhoa('LuanSaoNhapHan', 'dai'), dv],
            ['LuanVanHan_SaoNhapHan', 'Sao nhập hạn (Tân Biên mục 3.2) - ' + tenTieu, layKhoa('LuanSaoNhapHan', 'tieu'), th]
        ];
        viec.forEach(function (v, i) { el.slots[i] = ''; dungKhoi(v[0], v[1], v[2], el, i, v[3]); });
    };

    /* gắn vào hàm chính (luangiai-fix.js đã định nghĩa LuanGiaiLaso) */
    var goc = window.LuanGiaiLaso;
    window.LuanGiaiLaso = function () {
        if (typeof goc === 'function') goc();
        try { window.LuanVanHanVaHienThi(); } catch (e) { if (window.console) console.warn('Luận giải - lỗi ở phần "vận hạn":', e); }
    };
})();
