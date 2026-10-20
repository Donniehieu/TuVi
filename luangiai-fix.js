/* luangiai-fix.js — nạp SAU luangiai.js (và các file luận giải khác).
 * Sửa lỗi của luangiai.js bằng cách ghi đè đúng các hàm bị lỗi, không đụng tới logic luận giải:
 *  1. DS_CACH_CUC có mục gõ nhầm "Key" (viết hoa) -> cách cục "Đào Hồng Hỷ" bị hiện chữ "undefined".
 *     Ngoài ra nhiều cách cục bị trùng hoàn toàn nên hiển thị lặp -> lọc trùng.
 *  2. TraSao: nhánh lời khuyên gán nhầm vào comboLuanDaiVanData (copy-paste) -> sửa đúng biến.
 *  3. loadComboExcel: trước đây mỗi cung/đại vận tải lại cùng một file Excel (12 lần) -> chỉ tải 1 lần,
 *     và báo lỗi rõ ràng nếu không tải được (trước đây trang kẹt mãi ở "Đang tải...").
 *  4. setLasoData: sửa CSS gõ sai "max-width:700 px", cho phép chạm vào ảnh để phóng to.
 *  5. LuanGiaiLaso: bỏ setTimeout(setLasoData(), 200) (gọi hàm ngay rồi truyền undefined);
 *     mỗi phần luận giải chạy độc lập, lỗi ở một phần không làm trắng cả trang.
 */
(function () {
    'use strict';

    function baoLoi(file) {
      var el = document.getElementById('load-error');
      if (el) {
        el.textContent = 'Không tải được dữ liệu luận giải "' + file + '.xlsx". Hãy kiểm tra kết nối mạng, mở trang qua GitHub Pages (không mở trực tiếp file) rồi tải lại trang.';
        el.classList.remove('d-none');
      }
    }

    /* 1. Sửa DS_CACH_CUC */
    if (typeof DS_CACH_CUC !== 'undefined' && Array.isArray(DS_CACH_CUC)) {
      DS_CACH_CUC.forEach(function (c) {
          if (!c.key && c.Key) { c.key = c.Key; delete c.Key; }
      });
    }
    window.findCachCuc = function (saoArr) {
      var found = [];
      var daCo = {};
      DS_CACH_CUC.forEach(function (cach) {
          if (!cach.key || daCo[cach.key]) return;
          if (cach.need.every(function (sao) { return saoArr.indexOf(sao) !== -1; })) {
            daCo[cach.key] = true;
            found.push(cach.key);
          }
      });
      return found;
    };

    /* 3. Tải Excel một lần cho mỗi file */
    var excelCache = {};
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
            for (var i = 0; i < rows.length; ++i) {
              var row = rows[i];
              if (!row[0]) continue;
              arr.push({
                  keyNorm: row[0].toString().trim(),
                  keyRaw: row[0].toString().trim(),
                  values: row.slice(1).filter(Boolean).map(function (x) { return x.toString().trim(); })
              });
            }
            return arr;
        });
        excelCache[file] = p;
        p.catch(function () { delete excelCache[file]; }); // cho phép thử lại lần sau
      }
      p.then(
        function (arr) { if (cb) cb(arr); },
        function (err) {
          if (window.console) console.warn('Không tải được ' + file + '.xlsx', err);
          baoLoi(file);
        }
      );
    };

    /* 2. TraSao */
    window.TraSao = function (comboData, file, idClass, keyArr) {
      function chay(arr) {
        hienThiKetQuaNhieuBoSao(traCuuNhieuBoSao(keyArr, arr), idClass);
      }
      if (comboData && comboData.length) { chay(comboData); return; }
      loadComboExcel(file, function (arr) {
          if (file === fileLuangiaiChung) comboLuanChungData = arr;
          if (file === fileLuangiaiDaiVan) comboLuanDaiVanData = arr;
          if (file === fileLoiKhuyen) comboLoiKhuyenData = arr; // trước đây gán nhầm vào comboLuanDaiVanData
          chay(arr);
      });
    };

    /* 4. Ảnh bàn lá số: chạm để phóng to */
    function moAnhLonDanh(src) {
      var box = document.createElement('div');
      box.className = 'lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', 'Ảnh bàn lá số phóng to');
      var bar = document.createElement('div');
      bar.className = 'lightbox-bar';
      var dong = document.createElement('button');
      dong.type = 'button';
      dong.className = 'lightbox-close';
      dong.textContent = 'Đóng ✕';
      var tai = document.createElement('a');
      tai.className = 'lightbox-save';
      tai.href = src;
      tai.download = 'la-so-tu-vi.jpg';
      tai.textContent = 'Tải ảnh';
      bar.appendChild(tai);
      bar.appendChild(dong);
      var scroller = document.createElement('div');
      scroller.className = 'lightbox-scroll';
      var im = new Image();
      im.src = src;
      im.alt = 'Bàn lá số';
      scroller.appendChild(im);
      box.appendChild(bar);
      box.appendChild(scroller);
      function thoat() { box.remove(); document.body.classList.remove('no-scroll'); document.removeEventListener('keydown', phim); }
      function phim(e) { if (e.key === 'Escape') thoat(); }
      dong.addEventListener('click', thoat);
      document.addEventListener('keydown', phim);
      document.body.classList.add('no-scroll');
      document.body.appendChild(box);
    }

    window.setLasoData = function () {
      var general = GetThongTinChung();
      var cung = getCungData();
      var advice = getAdviceData();
      var anh = null;
      try { anh = localStorage.getItem('anhBanLaSo'); } catch (e) { anh = null; }

      var holder = document.getElementById('svg-holder');
      holder.textContent = '';
      if (anh) {
        var im = new Image();
        im.src = anh;
        im.alt = 'Ảnh bàn lá số';
        im.className = 'laso-img';
        im.addEventListener('click', function () { moAnhLonDanh(anh); });
        holder.appendChild(im);
        var goiY = document.createElement('p');
        goiY.className = 'hint';
        goiY.textContent = 'Chạm vào ảnh để phóng to.';
        holder.appendChild(goiY);
      } else {
        var em = document.createElement('em');
        em.textContent = 'Không tìm thấy ảnh bàn lá số. Hãy quay lại trang chủ và lập lá số lại.';
        holder.appendChild(em);
      }

      document.getElementById('general-content').innerHTML =
      general && (Array.isArray(general) ? renderLines(general) : renderLines([general]));

      if (Array.isArray(cung) && cung.length > 0) {
        document.getElementById('cung-content').innerHTML =
        cung.map(function (item) {
            return '<div class="cung-item"><b>' + item.tenCung + ':</b> <br><span>' + renderLines(item.luandai) + '</span></div>';
        }).join('');
      }

      document.getElementById('advice-content').innerHTML =
      advice && (Array.isArray(advice) ? renderLines(advice) : renderLines([advice]));
    };

    /* 5. Hàm chính */
    function chayAnToan(ten, fn) {
      try { fn(); } catch (e) { if (window.console) console.warn('Luận giải - lỗi ở phần "' + ten + '":', e); }
    }
    window.LuanGiaiLaso = function () {
      chayAnToan('ảnh & khung', function () { setLasoData(); });
      chayAnToan('tổng quan', function () { TraSao(comboLuanChungData, fileLuangiaiChung, classluangiaiChung, luanGiaiChung); });
      chayAnToan('lời khuyên', function () { TraSao(comboLoiKhuyenData, fileLoiKhuyen, classLoiKhuyen, luanGiaiLoiKhuyen); });
      chayAnToan('nhận xét đại vận', function () { HienThiNhanXetDaiVan(); });
      chayAnToan('luận chung', function () { LuanGiaiChung(); });
      chayAnToan('đại vận', function () { LuanGiaiDaiVan(); });
      chayAnToan('từng cung', function () { LuanGiaiCacCungVaHienThi(); });
    };

    /* Bấm tiêu đề cung để mở rộng / thu gọn (trên điện thoại các thẻ cung được thu gọn) */
    document.addEventListener('click', function (e) {
        var t = e.target.closest ? e.target.closest('.cung-title') : null;
        if (t && t.parentNode) t.parentNode.classList.toggle('open');
    });
})();
