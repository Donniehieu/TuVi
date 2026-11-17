/* Tự sinh bởi scripts/phu17/gen_gop.py (đồng nhất với OldGop.cs).
 * Gộp các khóa đã tách của cùng một quy tắc (OldMeta.json) thành một mục: xét cùng lúc mọi sao có mặt, luận hiện một lần. */
var GopKhoaCu = (function () {
    'use strict';
    let meta = null;
    function nap() {
        if (meta || typeof fetch !== 'function') return;
        try { fetch('OldMeta.json').then(function (r) { return r.json(); }).then(function (m) { meta = m; }).catch(function () { }); } catch (e) { }
    }
    nap();
    function dien(tpl, slots) {
        return tpl.replace(/\{(\d+)\}/g, function (m, i) { const v = slots[+i]; return v && v.length ? v.join(', ') : m; });
    }
    /* results: [{key, values}] -> cùng dạng, các khóa cùng quy tắc gộp thành một mục (giữ thứ tự xuất hiện đầu tiên) */
    function gop(results) {
        if (!meta || !meta.k) return results;
        const nhom = [], idx = {};
        results.forEach(function (r) {
            const m = meta.k[r.key];
            if (!m) { nhom.push({ r: r, rid: null }); return; }
            const rid = m[0];
            if (idx[rid] === undefined) { idx[rid] = nhom.length; nhom.push({ r: r, rid: rid, slots: [] }); }
            const g = nhom[idx[rid]];
            m[1].forEach(function (v, i) { g.slots[i] = g.slots[i] || []; if (g.slots[i].indexOf(v) < 0) g.slots[i].push(v); });
        });
        return nhom.map(function (g) {
            if (!g.rid || !meta.t[g.rid]) return g.r;
            const o = {}; for (const k in g.r) o[k] = g.r[k];
            o.key = dien(meta.t[g.rid], g.slots);
            return o;
        });
    }
    return { gop: gop, dat: function (m) { meta = m; } };
})();
