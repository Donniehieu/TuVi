﻿
function chupVaShowBanLaSo() {
    const node = document.getElementById('lasoGrid');
    if (!node) {
        alert('Không tìm thấy bàn lá số!');
        return;
    }
    setTimeout(function () {
        html2canvas(node, {
            scale: 3,
            useCORS: true,
            backgroundColor: "#fff"
        }).then(canvas => {
            // Ẩn bàn lá số HTML SAU khi chụp
            node.style.display = "none";
            // Hiển thị ra thẻ <img>
            const dataURL = canvas.toDataURL('image/png');
            document.getElementById('screenshotResult').innerHTML =
                '<h5>Ảnh bàn lá số</h5><img src="' + dataURL + '" style="max-width:100%;border:1px solid #888"/>';

            // Lưu dataURL vào localStorage, cùng các dữ liệu khác
            // Giả sử bạn đã có object lasoData chứa các trường general, cung, advice
            
            localStorage.setItem('anhBanLaSo', dataURL); // PHẢI có dòng này
        });
    }, 200); // Chờ 200ms để DOM vẽ xong
}