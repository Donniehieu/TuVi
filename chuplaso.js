// Chụp bàn lá số thành ảnh để (1) lưu cho trang luận giải, (2) cho nút "Tải ảnh".
// [Cập nhật]
//  - Chụp đúng kích thước thiết kế dù bàn lá số đang được thu/phóng bằng CSS transform.
//  - Lưu JPEG nén + thử các mức nhỏ hơn nếu localStorage đầy (trước đây PNG scale 3 có thể vượt hạn mức
//    và gây lỗi im lặng, trang luận giải không có ảnh).
//  - Không còn ẩn bàn lá số HTML sau khi chụp, không còn alert.
//  - Xóa ảnh cũ trước khi chụp để trang luận giải không hiện nhầm lá số của người khác.

function luuAnhBanLaSo(canvas) {
  var muc = [{ w: 1800, q: 0.88 }, { w: 1200, q: 0.8 }, { w: 800, q: 0.75 }];
  for (var i = 0; i < muc.length; i++) {
    try {
      var c = canvas;
      if (canvas.width > muc[i].w) {
        var tyLe = muc[i].w / canvas.width;
        c = document.createElement('canvas');
        c.width = muc[i].w;
        c.height = Math.round(canvas.height * tyLe);
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(canvas, 0, 0, c.width, c.height);
      }
      localStorage.setItem('anhBanLaSo', c.toDataURL('image/jpeg', muc[i].q));
      return true;
    } catch (e) { /* thử mức nhỏ hơn */ }
  }
  try { localStorage.removeItem('anhBanLaSo'); } catch (e) { }
  return false;
}

function chupVaShowBanLaSo() {
  var node = document.getElementById('lasoGrid');
  if (!node) {
    if (window.console) console.warn('Không tìm thấy bàn lá số (#lasoGrid).');
    return;
  }
  try { localStorage.removeItem('anhBanLaSo'); } catch (e) { }

  var job = null;
  if (typeof html2canvas === 'function') {
    try {
      // Phải gọi html2canvas TRƯỚC khi giao diện thu/phóng bàn lá số (TuViUI.onChartReady bên dưới).
      job = html2canvas(node, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
          windowWidth: 1000,
          windowHeight: 1400,
          onclone: function (doc) {
            // Bỏ thu/phóng trong bản sao để ảnh luôn đủ 900x1170 px
            var s = doc.getElementById('board-scaler');
            if (s) s.style.transform = 'none';
          }
      });
    } catch (e) { job = null; }
  }

  if (window.TuViUI && typeof window.TuViUI.onChartReady === 'function') {
    window.TuViUI.onChartReady();
  }

  if (job) {
    job.then(function (canvas) {
        if (window.TuViUI && typeof window.TuViUI.setCanvas === 'function') window.TuViUI.setCanvas(canvas);
        if (!luuAnhBanLaSo(canvas) && window.TuViUI && window.TuViUI.toast) {
          window.TuViUI.toast('Không lưu được ảnh cho trang luận giải. Bạn vẫn có thể bấm "Tải ảnh".');
        }
    }).catch(function (err) {
        if (window.console) console.warn('Không chụp được ảnh bàn lá số:', err);
    });
  }
}
