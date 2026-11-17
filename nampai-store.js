/* Tab Tử Vi Nam Phái: dùng kho lưu riêng để không đè dữ liệu lá số của tab cũ.
 * Mọi khóa localStorage/sessionStorage của trang Nam Phái được thêm hậu tố "_np" (code dùng chung vẫn gọi 'laso_data'). */
(function () {
    'use strict';
    var SUF = '_np';
    function wrap(proto) {
        var g = proto.getItem, s = proto.setItem, r = proto.removeItem;
        proto.getItem = function (k) { return g.call(this, String(k) + SUF); };
        proto.setItem = function (k, v) { return s.call(this, String(k) + SUF, v); };
        proto.removeItem = function (k) { return r.call(this, String(k) + SUF); };
    }
    try { wrap(Storage.prototype); } catch (e) { }
})();
