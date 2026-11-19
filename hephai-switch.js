/* Nút đổi hệ phái (Tử Vi phổ biến / Tử Vi Nam Phái) ngay trong khung nhập dữ liệu.
 * Chuyển trang giữa index.html và nampai.html và mang theo các ô đã nhập (qua query string). */
(function () {
    'use strict';
    var FIELDS = ['hoten', 'ngay', 'thang', 'nam', 'gio', 'gioitinh', 'namxemhan'];
    var laNP = /nampai\.html/i.test(location.pathname);
    function $(id) { return document.getElementById(id); }
    function url(dich) {
        var q = [];
        FIELDS.forEach(function (f) { var e = $(f); if (e && e.value !== '') q.push(f + '=' + encodeURIComponent(e.value)); });
        return dich + (q.length ? '?' + q.join('&') : '');
    }
    function chen() {
        var card = document.querySelector('.form-card'); if (!card || $('hephai-switch')) return;
        var box = document.createElement('div');
        box.className = 'field'; box.id = 'hephai-switch';
        box.innerHTML = '<span class="label" id="hephai-label">Hệ phái</span>' +
            '<div class="segmented" role="radiogroup" aria-labelledby="hephai-label">' +
            '<button type="button" class="seg' + (laNP ? '' : ' is-on') + '" role="radio" aria-checked="' + (!laNP) + '" data-hp="index.html">Tử Vi phổ biến</button>' +
            '<button type="button" class="seg' + (laNP ? ' is-on' : '') + '" role="radio" aria-checked="' + laNP + '" data-hp="nampai.html">Tử Vi Nam Phái</button></div>';
        var form = $('form_tuvi'); card.insertBefore(box, form || card.firstChild);
        box.addEventListener('click', function (ev) {
            var b = ev.target.closest('button[data-hp]'); if (!b) return;
            var dich = b.getAttribute('data-hp');
            if ((dich === 'nampai.html') === laNP) return;
            location.href = url(dich);
        });
    }
    function dienSan() {
        var p = new URLSearchParams(location.search), co = false;
        FIELDS.forEach(function (f) {
            if (!p.has(f)) return; var e = $(f); if (!e) return; co = true;
            if (f === 'gioitinh') {
                var v = p.get(f); e.value = v;
                document.querySelectorAll('.segmented .seg[data-value]').forEach(function (b) { var on = b.getAttribute('data-value') === v; b.classList.toggle('is-on', on); b.setAttribute('aria-checked', on); });
            } else e.value = p.get(f);
            e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true }));
        });
        if (co && history.replaceState) history.replaceState(null, '', location.pathname);
    }
    function chay() { chen(); setTimeout(dienSan, 0); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', chay); else chay();
})();
