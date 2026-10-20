/* ui.js — lớp giao diện cho trang lập lá số (index.html)
 *  - Form: mặc định năm xem hạn, chọn giới tính, nhớ dữ liệu khi bấm "Sửa thông tin"
 *  - Bàn lá số: tự co vừa màn hình (điện thoại / máy tính bảng / máy tính), phóng to - thu nhỏ, toàn màn hình
 *  - Đa màn hình: tab "Bàn lá số" | "Từng cung" (dạng thẻ) | "Thông tin"
 *  - Tải ảnh lá số, quay lại sửa thông tin
 * Không sửa logic an sao; chỉ đọc kết quả từ DOM sau khi lá số được vẽ xong.
 */
(function () {
    'use strict';

    // Kích thước thiết kế của bàn lá số (khớp với .laso-wrapper trong style.css)
    var DESIGN_W = 900, DESIGN_H = 1170;
    var MAX_SCALE = 2;
    var state = { fit: 1, scale: 1, shown: 1, canvas: null, full: false, submitting: false, toastTimer: 0 };

    function $(sel, root) { return (root || document).querySelector(sel); }
    function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
    function mk(tag, cls, text) {
      var e = document.createElement(tag);
      if (cls) e.className = cls;
      if (text != null) e.textContent = text;
      return e;
    }
    function clean(s) { return (s || '').replace(/\s+/g, ' ').trim(); }

    /* ---------- Thông báo nhỏ ---------- */
    function toast(msg, ms) {
      var t = $('#toast');
      if (!t) return;
      t.textContent = msg;
      t.classList.add('show');
      clearTimeout(state.toastTimer);
      state.toastTimer = setTimeout(function () { t.classList.remove('show'); }, ms || 3200);
    }

    /* ---------- Form ---------- */
    var FORM_FIELDS = ['hoten', 'ngay', 'thang', 'nam', 'namxemhan', 'gio', 'gioitinh'];

    function saveForm() {
      try {
        var o = {};
        FORM_FIELDS.forEach(function (id) { var f = document.getElementById(id); if (f) o[id] = f.value; });
        sessionStorage.setItem('tuvi_form', JSON.stringify(o));
      } catch (e) { /* bỏ qua */ }
    }

    function syncGender() {
      var v = $('#gioitinh').value;
      $$('.seg').forEach(function (b) {
          var on = b.getAttribute('data-value') === v;
          b.classList.toggle('is-on', on);
          b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
    }

    function initForm() {
      var form = $('#form_tuvi');
      if (!form) return;

      var saved = null;
      try { saved = JSON.parse(sessionStorage.getItem('tuvi_form') || 'null'); } catch (e) { saved = null; }
      if (saved) {
        FORM_FIELDS.forEach(function (id) {
            var f = document.getElementById(id);
            if (f && saved[id] != null) f.value = saved[id];
        });
      }
      var yr = $('#namxemhan');
      if (yr && !yr.value) yr.value = new Date().getFullYear();

      // Họ tên được đưa vào HTML của lá số: bỏ các ký tự đặc biệt để tránh chèn mã HTML
      var ten = $('#hoten');
      if (ten) ten.addEventListener('input', function () {
          var v = this.value.replace(/[<>&"'\u0060]/g, '');
          if (v !== this.value) this.value = v;
      });

      $$('.seg').forEach(function (b) {
          b.addEventListener('click', function () {
              $('#gioitinh').value = b.getAttribute('data-value');
              syncGender();
          });
      });
      syncGender();

      if (typeof validateDateInput === 'function') validateDateInput();
    }

    /* ---------- Bàn lá số: co giãn ---------- */
    function viewportBox() {
      var vp = $('#board-viewport');
      return vp ? { w: vp.clientWidth, h: vp.clientHeight } : { w: 0, h: 0 };
    }

    function computeFit() {
      var b = viewportBox();
      if (!b.w) return state.fit;
      var f = Math.min(1, b.w / DESIGN_W);
      if (state.full && b.h) f = Math.min(f, b.h / DESIGN_H);
      return f;
    }

    function updateZoomLabel() {
      var l = $('#zoom-label');
      if (l) l.textContent = Math.round((state.scale / state.fit) * 100) + '%';
    }

    function applyScale(keepCenter) {
      var vp = $('#board-viewport'), sizer = $('#board-sizer'), scaler = $('#board-scaler');
      if (!vp || !sizer || !scaler) return;
      var prev = state.shown || 1;
      var cx = (vp.scrollLeft + vp.clientWidth / 2) / prev;
      var cy = (vp.scrollTop + vp.clientHeight / 2) / prev;

      state.scale = Math.max(state.fit, Math.min(MAX_SCALE, state.scale));
      scaler.style.transform = 'scale(' + state.scale + ')';
      sizer.style.width = Math.round(DESIGN_W * state.scale) + 'px';
      sizer.style.height = Math.round(DESIGN_H * state.scale) + 'px';
      vp.classList.toggle('is-zoomed', state.scale > state.fit * 1.001);

      if (keepCenter) {
        vp.scrollLeft = cx * state.scale - vp.clientWidth / 2;
        vp.scrollTop = cy * state.scale - vp.clientHeight / 2;
      }
      state.shown = state.scale;
      updateZoomLabel();
    }

    function fitBoard() {
      state.fit = computeFit();
      state.scale = state.fit;
      applyScale(false);
      var vp = $('#board-viewport');
      if (vp) { vp.scrollLeft = 0; vp.scrollTop = 0; }
    }

    // Giữ nguyên mức phóng khi đổi kích thước cửa sổ / xoay màn hình
    function refit() {
      var vp = $('#board-viewport');
      if (!vp || !vp.clientWidth) return;
      var zoom = state.fit ? state.scale / state.fit : 1;
      state.fit = computeFit();
      state.scale = state.fit * zoom;
      applyScale(false);
    }

    function zoomBy(factor) {
      state.scale = Math.max(state.fit, Math.min(MAX_SCALE, state.scale * factor));
      applyScale(true);
    }

    function toggleFull(on) {
      state.full = (typeof on === 'boolean') ? on : !state.full;
      document.body.classList.toggle('board-full', state.full);
      var pane = $('#pane-board');
      if (pane) pane.classList.toggle('is-full', state.full);
      var b = $('#btn-full');
      if (b) b.setAttribute('aria-pressed', state.full ? 'true' : 'false');
      requestAnimationFrame(function () { fitBoard(); });
    }

    /* ---------- Tải ảnh ---------- */
    function slug(s) {
      return (s || 'la-so').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'la-so';
    }

    function downloadImage() {
      var c = state.canvas;
      if (!c) { toast('Ảnh đang được tạo, vui lòng thử lại sau vài giây…'); return; }
      var name = 'tu-vi-' + slug(clean(($('#hoten') || {}).value)) + '.png';
      c.toBlob(function (blob) {
          if (!blob) { toast('Không tạo được ảnh để tải.'); return; }
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url; a.download = name;
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
        }, 'image/png');
    }

    function setCanvas(canvas) {
      state.canvas = canvas;
      var b = $('#btn-download');
      if (b) { b.disabled = false; b.removeAttribute('aria-busy'); }
    }

    /* ---------- Tabs ---------- */
    function showTab(name) {
      $$('.tab').forEach(function (t) {
          var on = t.getAttribute('data-tab') === name;
          t.classList.toggle('is-on', on);
          t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      $$('.pane').forEach(function (p) { p.classList.toggle('d-none', p.id !== 'pane-' + name); });
      if (name !== 'board' && state.full) toggleFull(false);
      if (name === 'board') requestAnimationFrame(function () { refit(); });
    }

    /* ---------- Đọc dữ liệu 12 cung từ bàn lá số ---------- */
    function readCell(cell) {
      var info = { chinh: [], hoa: [], tot: [], xau: [], luu: [], khac: [], triet: false, tuan: false };
      var seen = {};
      function push(list, node, text) {
        text = clean(text);
        if (!text || seen[text]) return;
        seen[text] = true;
        list.push({ text: text, color: window.getComputedStyle(node).color });
      }

      // Chính tinh: các phần tử lá nằm trong .chinh-tinh
      $$('.chinh-tinh', cell).forEach(function (g) {
          var leaves = $$('div,span', g).filter(function (n) { return !n.children.length; });
          if (!leaves.length) leaves = [g];
          leaves.forEach(function (n) {
              n.textContent.split(',').forEach(function (part) { push(info.chinh, n, part); });
          });
      });

      // Phụ tinh / tứ hóa / sao lưu / sao đại vận
      $$('.phu-tinh, .sao-tot, .sao-xau, .tu-hoa', cell).forEach(function (n) {
          if (n.closest('.chinh-tinh')) return;
          if (n.querySelector('.phu-tinh, .sao-tot, .sao-xau, .tu-hoa')) return; // bỏ qua phần tử bọc ngoài
          var t = clean(n.textContent);
          if (!t) return;
          var list;
          if (/^\(?\s*(L\.|Lưu)/i.test(t) || /ĐV/.test(t)) list = info.luu;
          else if (n.classList.contains('tu-hoa') || /^Hóa /.test(t)) list = info.hoa;
          else if (n.classList.contains('sao-xau')) list = info.xau;
          else if (n.classList.contains('sao-tot')) list = info.tot;
          else list = info.khac;
          push(list, n, t);
      });

      info.triet = !!cell.querySelector('.triet-border');
      info.tuan = !!cell.querySelector('.tuan-border');
      return info;
    }

    function metaText(cell, sel) {
      var e = cell.querySelector(sel);
      return e ? clean(e.textContent) : '';
    }

    function addGroup(card, title, items, extraCls) {
      if (!items.length) return;
      var g = mk('div', 'cc-group');
      g.appendChild(mk('h4', null, title));
      var chips = mk('div', 'chips');
      items.forEach(function (s) {
          var c = mk('span', 'chip' + (extraCls ? ' ' + extraCls : ''));
          var dot = mk('i', 'dot');
          dot.style.background = s.color;
          c.appendChild(dot);
          c.appendChild(document.createTextNode(s.text));
          chips.appendChild(c);
      });
      g.appendChild(chips);
      card.appendChild(g);
    }

    function buildCards() {
      var host = $('#cards');
      if (!host) return;
      host.textContent = '';
      if (typeof CUNG_CELLS === 'undefined') return;
      var menh = (typeof IDCungMenh === 'number') ? IDCungMenh : 0;

      for (var i = 0; i < 12; i++) {
        var cc = CUNG_CELLS[(menh + i) % 12];
        var cell = $('.cell' + cc.cell);
        if (!cell) continue;
        var info = readCell(cell);

        var rawName = metaText(cell, '.ten-cung');
        var coThan = /\(Thân\)/.test(rawName);
        var name = clean(rawName.replace(/\(Thân\)/, ''));

        var card = mk('article', 'cung-card' + (i === 0 ? ' is-menh' : ''));
        var head = mk('div', 'cc-head');
        var left = mk('div', 'cc-title');
        left.appendChild(mk('span', 'cc-name', name || ('Cung ' + (i + 1))));
        if (coThan) left.appendChild(mk('span', 'cc-badge', 'Thân'));
        if (info.triet) left.appendChild(mk('span', 'cc-badge warn', 'Triệt'));
        if (info.tuan) left.appendChild(mk('span', 'cc-badge warn', 'Tuần'));
        head.appendChild(left);
        head.appendChild(mk('span', 'cc-chi', metaText(cell, '.chi-cung')));
        card.appendChild(head);

        var meta = mk('div', 'cc-meta');
        var dv = metaText(cell, '.dai-van');
        var th = metaText(cell, '.tieu-han').replace(/\(T\.H\)/, '').trim();
        var nh = metaText(cell, '.nguyet-han');
        var ts = metaText(cell, '.sao-trang-sinh');
        if (dv) meta.appendChild(mk('span', 'pill', 'Đại vận ' + dv));
        if (th) meta.appendChild(mk('span', 'pill', 'Tiểu hạn ' + th));
        if (nh) meta.appendChild(mk('span', 'pill', 'Nguyệt hạn ' + nh));
        if (ts) meta.appendChild(mk('span', 'pill', 'Trường sinh: ' + ts));
        if (meta.children.length) card.appendChild(meta);

        if (!info.chinh.length) card.appendChild(mk('p', 'cc-empty', 'Vô chính diệu'));
        addGroup(card, 'Chính tinh', info.chinh, 'chinh');
        addGroup(card, 'Tứ hóa', info.hoa);
        addGroup(card, 'Sao tốt', info.tot);
        addGroup(card, 'Sao xấu', info.xau);
        addGroup(card, 'Lưu & đại vận', info.luu);
        addGroup(card, 'Sao khác', info.khac);
        host.appendChild(card);
      }
    }

    function buildInfo() {
      var src = $('#cungGop'), host = $('#info-card');
      if (src && host) host.innerHTML = src.innerHTML;
    }

    function buildHeader() {
      var name = clean(($('#hoten') || {}).value);
      var h = $('#result-name');
      if (h) h.textContent = name ? 'Lá số của ' + name : 'Lá số Tử Vi';
      var parts = [];
      var gt = ($('#gioitinh') || {}).value;
      if (gt) parts.push(gt);
      var n = ($('#ngay') || {}).value, t = ($('#thang') || {}).value, y = ($('#nam') || {}).value;
      if (n && t && y) parts.push('sinh ' + n + '/' + t + '/' + y);
      var g = ($('#gio') || {}).value;
      if (g) parts.push('giờ ' + g);
      var xh = ($('#namxemhan') || {}).value;
      if (xh) parts.push('xem hạn ' + xh);
      var s = $('#result-meta');
      if (s) s.textContent = parts.join(' · ');
    }

    /* ---------- Điểm vào: được chuplaso.js gọi khi lá số đã vẽ xong ---------- */
    function onChartReady() {
      state.canvas = null;
      var d = $('#btn-download');
      if (d) { d.disabled = true; d.setAttribute('aria-busy', 'true'); }
      state.submitting = false;
      try { buildHeader(); buildInfo(); buildCards(); }
      catch (e) { if (window.console) console.warn('Tử Vi UI:', e); }
      showTab('board');
      requestAnimationFrame(function () { fitBoard(); });
      window.scrollTo(0, 0);
    }

    function backToForm() {
      saveForm();
      location.reload();
    }

    function goLuanGiai() {
      saveForm();
      window.location.href = 'luangiai.html';
    }

    /* ---------- Gắn sự kiện ---------- */
    function bind() {
      $$('.tab').forEach(function (t) {
          t.addEventListener('click', function () { showTab(t.getAttribute('data-tab')); });
      });
      function on(id, fn) { var e = document.getElementById(id); if (e) e.addEventListener('click', fn); }
      on('btn-zoom-in', function () { zoomBy(1.4); });
      on('btn-zoom-out', function () { zoomBy(1 / 1.4); });
      on('btn-fit', fitBoard);
      on('btn-full', function () { toggleFull(); });
      on('btn-download', downloadImage);
      on('btn-back-form', backToForm);
      on('btn-xem-luan-giai', goLuanGiai);

      document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && state.full) toggleFull(false);
      });

      var timer = 0;
      window.addEventListener('resize', function () {
          clearTimeout(timer);
          timer = setTimeout(refit, 120);
      });
      window.addEventListener('orientationchange', function () {
          setTimeout(refit, 250);
      });

      // Theo dõi lúc bấm "Xem tử vi" để báo lỗi dễ hiểu nếu việc an sao bị lỗi
      document.addEventListener('submit', function () {
          state.submitting = true;
          setTimeout(function () { state.submitting = false; }, 5000);
        }, true);
      window.addEventListener('error', function () {
          if (!state.submitting) return;
          state.submitting = false;
          toast('Không lập được lá số. Vui lòng kiểm tra lại thông tin hoặc tải lại trang.', 5000);
      });
    }

    window.TuViUI = { onChartReady: onChartReady, setCanvas: setCanvas, toast: toast };

    initForm();
    bind();
})();
