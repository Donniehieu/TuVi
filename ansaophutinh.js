function viTriLocTon(canNam) {

    const CAN_MAP = {
        "G.": 0, "K.": 4, // Giáp-> dần, Kỷ -> ngọ
        "Ấ.": 1, "C.": 6, // Ất-> mão, Canh -> thân
        "B.": 3, "T.": 7, // Bính-> tỵ, Tân -> dậu
        "Đ.": 4, "N.": 9, // Đinh-> ngọ, Nhâm -> hợi
        "M.": 3, "Q.": 10  // Mậu- tỵ, Quý -> Tý
    };
    return CAN_MAP[canNam] ?? 0;
}


function viTriKinhDuongDaLa(locTonIdx) {
    // Kình Dương: từ Lộc Tồn tiến 1 cung thuận chiều (kim đồng hồ)
    // Đà La: từ Lộc Tồn tiến 1 cung ngược chiều (ngược kim đồng hồ)
    const kinhDuongIdx = (locTonIdx + 1) % 12;
    const daLaIdx = (locTonIdx + 11) % 12;
    return { kinhDuongIdx, daLaIdx };
}

function hienThiLocTonKinhDuongDaLa(menhIdx, canNam) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-loc-ton, .sao-kinh-duong, .sao-da-la').forEach(e => e.remove());
    });
    // An vị trí Lộc Tồn
    const locTonIdx = viTriLocTon(canNam);
    const { kinhDuongIdx, daLaIdx } = viTriKinhDuongDaLa(locTonIdx);

    // Hiển thị Lộc Tồn (sao tốt, hành thổ)
    const cellLocTon = document.querySelector('.cell' + CUNG_CELLS[locTonIdx].cell);
    if (cellLocTon) {
        cellLocTon.insertAdjacentHTML('beforeend',
            `<div class="sao-loc-ton sao-tot hanh-tho phu-tinh" >
                                                                                Lộc Tồn
                                                                            </div>`);
    }
    // Hiển thị Kình Dương (sao xấu, hành kim)
    const cellKinhDuong = document.querySelector('.cell' + CUNG_CELLS[kinhDuongIdx].cell);
    if (cellKinhDuong) {
        cellKinhDuong.insertAdjacentHTML('beforeend',
            `<div class="sao-kinh-duong sao-xau hanh-kim phu-tinh" >
                                                                                Kình Dương
                                                                            </div>`);
    }
    // Hiển thị Đà La (sao xấu, hành kim)
    const cellDaLa = document.querySelector('.cell' + CUNG_CELLS[daLaIdx].cell);
    if (cellDaLa) {
        cellDaLa.insertAdjacentHTML('beforeend',
            `<div class="sao-da-la sao-xau hanh-kim phu-tinh">
                                                                                Đà La
                                                                            </div>`);
    }
}
// ====== AN 12 SAO VÒNG LỘC TỒN & VĂN TINH, ĐƯỜNG PHÙ, QUỐC ẤN ======

// Danh sách 12 sao vòng Lộc Tồn, theo thứ tự an thuận/ nghịch
const SAO_LOC_TON_VONG = [
    { ten: "Bác Sĩ", loai: "tot", hanh: "thuy" },
    { ten: "Lực Sĩ", loai: "tot", hanh: "hoa" },
    { ten: "Thanh Long", loai: "tot", hanh: "thuy" },
    { ten: "Tiểu Hao", loai: "xau", hanh: "hoa" },
    { ten: "Tướng Quân", loai: "tot", hanh: "moc" },
    { ten: "Tấu Thư", loai: "tot", hanh: "kim" },
    { ten: "Phi Liêm", loai: "xau", hanh: "hoa" },
    { ten: "Hỷ Thần", loai: "tot", hanh: "hoa" },
    { ten: "Bệnh Phù", loai: "xau", hanh: "tho" },
    { ten: "Đại Hao", loai: "xau", hanh: "hoa" },
    { ten: "Phục Binh", loai: "xau", hanh: "hoa" },
    { ten: "Quan Phủ", loai: "xau", hanh: "hoa" }
];

// Map hành sang class màu


function anVongLocTon12Sao(locTonIdx, amduong, CUNG_CELLS) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-vong-locton').forEach(e => e.remove());
    });
    const HANH_MAU = {
        "kim": "hanh-kim",
        "moc": "hanh-moc",
        "thuy": "hanh-thuy",
        "hoa": "hanh-hoa",
        "tho": "hanh-tho"
    };

    // Chiều an sao: thuận (dương nam, âm nữ), nghịch (âm nam, dương nữ)
    const isThuan = (amduong === "Dương Nam" || amduong === "Âm Nữ");

    for (let i = 0; i < 12; ++i) {
        // Vị trí sao: locTonIdx + i (thuận), locTonIdx - i (nghịch)
        let idx = isThuan
            ? (locTonIdx + i) % 12
            : (locTonIdx - i + 12 * 2) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            const sao = SAO_LOC_TON_VONG[i];
            let loaiClass = sao.loai === "xau" ? "sao-xau" : "sao-tot";
            let hanhClass = HANH_MAU[sao.hanh] || "";
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-vong-locton ${loaiClass} ${hanhClass} phu-tinh">
                                                                                    ${sao.ten}
                                                                                </div>`);
        }
    }
}
function anVanTinhDuongPhuQuocAn(locTonIdx, CUNG_CELLS) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-van-tinh, .sao-duong-phu, .sao-quoc-an').forEach(e => e.remove());
    });

    // Lưu Niên Văn Tinh (sao tốt, hành kim)
    let vanTinhIdx = (locTonIdx + 3) % 12;
    let cellVanTinh = document.querySelector('.cell' + CUNG_CELLS[vanTinhIdx].cell);
    if (cellVanTinh) {
        cellVanTinh.insertAdjacentHTML('beforeend',
            `<div class="sao-van-tinh sao-tot hanh-kim phu-tinh" >
                                                                                Văn Tinh
                                                                            </div>`);
    }

    // Đường Phù (sao tốt, hành mộc)
    let duongPhuIdx = (locTonIdx + 5) % 12;
    let cellDuongPhu = document.querySelector('.cell' + CUNG_CELLS[duongPhuIdx].cell);
    if (cellDuongPhu) {
        cellDuongPhu.insertAdjacentHTML('beforeend',
            `<div class="sao-duong-phu sao-tot hanh-moc phu-tinh" >
                                                                                Đường Phù
                                                                            </div>`);
    }

    // Quốc Ấn (sao tốt, hành thổ)
    let quocAnIdx = (locTonIdx + 8) % 12;
    let cellQuocAn = document.querySelector('.cell' + CUNG_CELLS[quocAnIdx].cell);
    if (cellQuocAn) {
        cellQuocAn.insertAdjacentHTML('beforeend',
            `<div class="sao-quoc-an sao-tot hanh-tho phu-tinh">
                                                                                Quốc Ấn
                                                                            </div>`);
    }
}
function anSaoThienKhoiVietLuuHa(canNam) {
    // Xóa nhãn cũ nếu có
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-thien-khoi, .sao-thien-viet, .sao-luu-ha, .sao-thien-tru, .sao-thien-quan, .sao-thien-phuc').forEach(e => e.remove());
    });

    // Bản đồ an sao theo thiên can
    const MAP = {
        "G.": { khoi: "Sửu", viet: "Mùi", luuha: "Dậu", thientru: "Tỵ", thienquan: "Mùi", thienphuc: "Dậu" },    // Giáp
        "Ấ.": { khoi: "Tý", viet: "Thân", luuha: "Tuất", thientru: "Ngọ", thienquan: "Thìn", thienphuc: "Thân" },   // Ất
        "B.": { khoi: "Hợi", viet: "Dậu", luuha: "Mùi", thientru: "Tý", thienquan: "Tỵ", thienphuc: "Tý" },    // Bính
        "Đ.": { khoi: "Hợi", viet: "Dậu", luuha: "Thân", thientru: "Tỵ", thienquan: "Dần", thienphuc: "Hợi" },   // Đinh
        "M.": { khoi: "Sửu", viet: "Mùi", luuha: "Tỵ", thientru: "Ngọ", thienquan: "Mão", thienphuc: "Mão" },     // Mậu
        "K.": { khoi: "Tý", viet: "Thân", luuha: "Ngọ", thientru: "Thân", thienquan: "Dậu", thienphuc: "Dần" },    // Kỷ
        "C.": { khoi: "Ngọ", viet: "Dần", luuha: "Mão", thientru: "Dần", thienquan: "Hợi", thienphuc: "Ngọ" },    // Canh
        "T.": { khoi: "Ngọ", viet: "Dần", luuha: "Thìn", thientru: "Ngọ", thienquan: "Dậu", thienphuc: "Tỵ" },   // Tân
        "N.": { khoi: "Mão", viet: "Tỵ", luuha: "Hợi", thientru: "Dậu", thienquan: "Tuất", thienphuc: "Ngọ" },     // Nhâm
        "Q.": { khoi: "Mão", viet: "Tỵ", luuha: "Dần", thientru: "Tuất", thienquan: "Ngọ", thienphuc: "Tỵ" },     // Quý
    };

    const data = MAP[canNam];
    if (!data) return;

    // Danh sách thông tin sao, loại, hành, class, top
    const SAO = [
        { ten: "Thiên Khôi", chi: data.khoi, className: "sao-thien-khoi", loai: "tot", hanh: "hoa" },
        { ten: "Thiên Việt", chi: data.viet, className: "sao-thien-viet", loai: "tot", hanh: "hoa" },
        { ten: "Lưu Hà", chi: data.luuha, className: "sao-luu-ha", loai: "xau", hanh: "thuy" },
        { ten: "Thiên Trù", chi: data.thientru, className: "sao-thien-tru", loai: "tot", hanh: "tho" },
        { ten: "Thiên Quan", chi: data.thienquan, className: "sao-thien-quan", loai: "tot", hanh: "hoa" },
        { ten: "Thiên Phúc", chi: data.thienphuc, className: "sao-thien-phuc", loai: "tot", hanh: "tho" }
    ];

    // Map hành sang class
    const HANH_MAU = {
        "kim": "hanh-kim",
        "moc": "hanh-moc",
        "thuy": "hanh-thuy",
        "hoa": "hanh-hoa",
        "tho": "hanh-tho"
    };

    for (const sao of SAO) {
        const idx = CUNG_CELLS.findIndex(c => c.chi === sao.chi);
        if (idx !== -1) {
            const cell = document.querySelector('.cell' + CUNG_CELLS[idx].cell);
            if (cell) {
                let loaiClass = sao.loai === "xau" ? "sao-xau" : "sao-tot";
                let hanhClass = HANH_MAU[sao.hanh] || "";
                cell.insertAdjacentHTML('beforeend',
                    `<div class="${sao.className} ${loaiClass} ${hanhClass} phu-tinh">
                                                                                        ${sao.ten}
                                                                                    </div>`);
            }
        }
    }
}
const SAO_VONG_THAI_TUE = [
    // tên, class, loại (tot/xau), hành (nếu có thể xác định ở đây)
    { ten: "Thái Tuế", className: "sao-thai-tue", loai: "xau", hanh: "hoa" },    // hành theo năm xem hạn
    { ten: "Thiếu Dương", className: "sao-thieu-duong", loai: "tot", hanh: "hoa" },
    { ten: "Tang Môn", className: "sao-tang-mon", loai: "xau", hanh: "moc" },
    { ten: "Thiếu Âm", className: "sao-thieu-am", loai: "tot", hanh: "thuy" },
    { ten: "Quan Phù", className: "sao-quan-phu", loai: "xau", hanh: "hoa" },    // hành theo năm xem hạn
    { ten: "Tử Phù", className: "sao-tu-phu", loai: "xau", hanh: "hoa" },        // hành theo năm xem hạn
    { ten: "Tuế Phá", className: "sao-tue-pha", loai: "xau", hanh: "hoa" },     // hành theo năm xem hạn
    { ten: "Long Đức", className: "sao-long-duc", loai: "tot", hanh: "thuy" },
    { ten: "Bạch Hổ", className: "sao-bach-ho", loai: "xau", hanh: "kim" },
    { ten: "Phúc Đức", className: "sao-phuc-duc", loai: "tot", hanh: "tho" },
    { ten: "Điếu Khách", className: "sao-dieu-khach", loai: "xau", hanh: "hoa" },
    { ten: "Trực Phù", className: "sao-truc-phu", loai: "xau", hanh: "hoa" }
];

// Các sao đi kèm vòng Thái Tuế (tên, class, tốt/xấu, hành)
const KEM_VONG_THAI_TUE = {
    "Thiếu Dương": { ten: "Thiên Không", loai: "xau", hanh: "hoa" },
    "Quan Phù": { ten: "Long Trì", loai: "tot", hanh: "thuy" },
    "Tử Phù": { ten: "Nguyệt Đức", loai: "tot", hanh: "hoa" },
    "Tuế Phá": { ten: "Thiên Hư", loai: "xau", hanh: "thuy" },
    "Phúc Đức": { ten: "Thiên Đức", loai: "tot", hanh: "hoa" }
};

// Các sao xấu không trong mảng chính, cần xác định vị trí khi an
// (Nếu có vị trí hiển thị đặc biệt, bạn bổ sung xử lý riêng)



function anVongThaiTueVaKem(chiNam) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-thai-tue, .sao-tang-mon, .sao-thieu-duong, .sao-thieu-am, .sao-quan-phu, .sao-tu-phu, .sao-tue-pha, .sao-long-duc, .sao-bach-ho, .sao-phuc-duc, .sao-dieu-khach, .sao-truc-phu, .sao-thien-khong, .sao-long-tri, .sao-nguyet-duc, .sao-thien-hu, .sao-thien-duc, .sao-thien-khoc').forEach(e => e.remove());
    });
    const HANH_MAU = {
        "kim": "hanh-kim",
        "moc": "hanh-moc",
        "thuy": "hanh-thuy",
        "hoa": "hanh-hoa",
        "tho": "hanh-tho"
        // "nam": "" // hành của năm, cần xử lý riêng nếu muốn màu động
    };
    // Vị trí chi năm sinh trong CUNG_CELLS
    const idxStart = CUNG_CELLS.findIndex(c => c.chi === chiNam);
    for (let i = 0; i < 12; ++i) {
        const idx = (idxStart + i) % 12;
        const cell = document.querySelector('.cell' + CUNG_CELLS[idx].cell);
        if (!cell) continue;
        const sao = SAO_VONG_THAI_TUE[i];
        let loaiClass = sao.loai === "xau" ? "sao-xau" : "sao-tot";
        let hanhClass = HANH_MAU[sao.hanh] || (sao.hanh === "nam" ? "" : "");

        cell.insertAdjacentHTML('beforeend',
            `<div class="${sao.className} ${loaiClass} ${hanhClass} phu-tinh">
                                                                                ${sao.ten}
                                                                            </div>`);
        // Sao đi kèm
        if (KEM_VONG_THAI_TUE[sao.ten]) {
            const kem = KEM_VONG_THAI_TUE[sao.ten];
            let kemLoaiClass = kem.loai === "xau" ? "sao-xau" : "sao-tot";
            let kemHanhClass = HANH_MAU[kem.hanh] || "";
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-${kem.ten.toLowerCase().replace(/\s/g, "-")} ${kemLoaiClass} ${kemHanhClass} phu-tinh" >
                                                                                    ${kem.ten}
                                                                                </div>`);
        }
    }
    // Gợi ý: nếu muốn an thêm "Thiên Khốc" (xấu, hành kim) ở vị trí đặc biệt, xử lý ở đây.
}

function anSaoThienKhoc(chiNam) {
    // Xóa nhãn cũ nếu có
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-thien-khoc').forEach(e => e.remove());
    });

    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const idxNgo = CUNG_CELLS.findIndex(c => c.chi === "Ngọ"); // Vị trí xuất phát cung Ngọ
    const idxChiNamTrongCHI12 = CHI12.indexOf(chiNam); // 0~11


    if (idxNgo === -1 || idxChiNamTrongCHI12 === -1) return;
    // Lùi nghịch idxNgo - steps (modulo 12)
    let idxKhoc = (idxNgo - idxChiNamTrongCHI12 + 12) % 12;
    const cell = document.querySelector('.cell' + CUNG_CELLS[idxKhoc].cell);

    if (cell) {
        cell.insertAdjacentHTML('beforeend',
            `<div class="sao-thien-khoc hanh-thuy sao-xau phu-tinh">
                                                                                Thiên Khốc
                                                                            </div>`);
    }
}

function anHoaCaiDaoHoaThienMaKiepSat(chiNam) {
    // Xoá nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-hoa-cai, .sao-dao-hoa, .sao-thien-ma, .sao-kiep-sat').forEach(e => e.remove());
    });

    // Quy tắc nhóm chi
    const nhom = [
        { list: ["Dần", "Ngọ", "Tuất"], hoacai: "Tuất", daohoa: "Mão", thienma: "Thân", kiepsat: "Hợi" },
        { list: ["Thân", "Tý", "Thìn"], hoacai: "Thìn", daohoa: "Dậu", thienma: "Dần", kiepsat: "Tỵ" },
        { list: ["Tỵ", "Dậu", "Sửu"], hoacai: "Sửu", daohoa: "Ngọ", thienma: "Hợi", kiepsat: "Dần" },
        { list: ["Hợi", "Mão", "Mùi"], hoacai: "Mùi", daohoa: "Tý", thienma: "Tỵ", kiepsat: "Thân" }
    ];
    let found = nhom.find(g => g.list.includes(chiNam));
    if (!found) return;


    // Map hành sang class màu
    const HANH_MAU = {
        "kim": "hanh-kim",
        "moc": "hanh-moc",
        "thuy": "hanh-thuy",
        "hoa": "hanh-hoa",
        "tho": "hanh-tho"
    };

    // Danh sách sao, bổ sung loại, hành (trừ Thiên Mã xử lý riêng)
    const saoList = [
        { ten: "Hoa Cái", chi: found.hoacai, className: "sao-hoa-cai", loai: "tot", hanh: "kim" },
        { ten: "Đào Hoa", chi: found.daohoa, className: "sao-dao-hoa", loai: "tot", hanh: "moc" },
        // Thiên Mã sẽ xử lý hành riêng bên dưới
        { ten: "Kiếp Sát", chi: found.kiepsat, className: "sao-kiep-sat", loai: "xau", hanh: "hoa" },
        { ten: "Thiên Mã", chi: found.thienma, className: "sao-thien-ma", loai: "tot", hanh: "hoa" }
    ];

    saoList.forEach(sao => {
        const idx = CUNG_CELLS.findIndex(c => c.chi === sao.chi);
        if (idx !== -1) {
            const cell = document.querySelector('.cell' + CUNG_CELLS[idx].cell);
            if (cell) {
                let loaiClass = sao.loai === "xau" ? "sao-xau" : "sao-tot";
                let hanhClass = HANH_MAU[sao.hanh] || "";
                cell.insertAdjacentHTML('beforeend',
                    `<div class="${sao.className} ${loaiClass} ${hanhClass} phu-tinh " >
                                                                                        ${sao.ten}
                                                                                    </div>`);
            }
        }
    });



}








function anHongLoanThienHyPhuongCacGiaiThan(chiNam) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-hong-loan, .sao-thien-hy, .sao-phuong-cac, .sao-giai-than').forEach(e => e.remove());
    });

    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

    function idxFrom(startChi) {
        const idxStart = CUNG_CELLS.findIndex(c => c.chi === startChi);
        const idxNam = CHI12.indexOf(chiNam);
        return (idxStart - idxNam + 12) % 12;
    }

    // Hồng Loan: hành Thủy, Thiên Hỷ: hành Thủy, Phượng Các/Giải Thần: hành Mộc
    const saoList = [
        { ten: "Hồng Loan", className: "sao-hong-loan", hanh: "hanh-thuy", chi: CUNG_CELLS[idxFrom("Mão")].chi, cell: CUNG_CELLS[idxFrom("Mão")].cell },
        { ten: "Thiên Hỷ", className: "sao-thien-hy", hanh: "hanh-thuy", chi: CUNG_CELLS[idxFrom("Dậu")].chi, cell: CUNG_CELLS[idxFrom("Dậu")].cell },
        { ten: "Phượng Các", className: "sao-phuong-cac", hanh: "hanh-moc", chi: CUNG_CELLS[idxFrom("Tuất")].chi, cell: CUNG_CELLS[idxFrom("Tuất")].cell },
        { ten: "Giải Thần", className: "sao-giai-than", hanh: "hanh-moc", chi: CUNG_CELLS[idxFrom("Tuất")].chi, cell: CUNG_CELLS[idxFrom("Tuất")].cell }
    ];
    saoList.forEach(sao => {
        const cell = document.querySelector('.cell' + sao.cell);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="${sao.className} sao-tot ${sao.hanh} phu-tinh">
                                                                                    ${sao.ten}
                                                                                </div>`);
        }
    });
}
/**
* An Sao Cô Thần – Quả Tú theo Tam Hội tuổi.
* @param {string} chiNam - Chi năm sinh ("Tý", "Sửu", ..., "Hợi")
*/

function anCoThanQuaTu(chiNam) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-co-than, .sao-qua-tu').forEach(e => e.remove());
    });

    // Quy tắc nhóm chi
    const nhom = [
        { list: ["Hợi", "Tý", "Sửu"], cothan: "Dần", quatu: "Tuất" },
        { list: ["Mão", "Dần", "Thìn"], cothan: "Tỵ", quatu: "Sửu" },
        { list: ["Tỵ", "Ngọ", "Mùi"], cothan: "Thân", quatu: "Thìn" },
        { list: ["Thân", "Dậu", "Tuất"], cothan: "Hợi", quatu: "Mùi" }
    ];
    let found = nhom.find(g => g.list.includes(chiNam));
    if (!found) return;

    // Cô Thần, Quả Tú đều là sao xấu, hành Thổ
    const saoList = [
        { ten: "Cô Thần", chi: found.cothan, className: "sao-co-than", hanh: "hanh-tho" },
        { ten: "Quả Tú", chi: found.quatu, className: "sao-qua-tu", hanh: "hanh-tho" }
    ];
    saoList.forEach(sao => {
        const idx = CUNG_CELLS.findIndex(c => c.chi === sao.chi);
        if (idx !== -1) {
            const cell = document.querySelector('.cell' + CUNG_CELLS[idx].cell);
            if (cell) {
                cell.insertAdjacentHTML('beforeend',
                    `<div class="${sao.className} sao-xau ${sao.hanh} phu-tinh">
                                                                                        ${sao.ten}
                                                                                    </div>`);
            }
        }
    });
}

                                                                        /**
* An sao Phá Toái theo quy tắc Tam Hợp tuổi
* @param {string} chiNam - Chi năm sinh ("Tý", "Sửu", ..., "Hợi")
*/function anPhaToai(chiNam) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-pha-toai').forEach(e => e.remove());
    });

    // Quy tắc nhóm chi
    const nhom = [
        { list: ["Dần", "Thân", "Tỵ", "Hợi"], phatoai: "Dậu" },
        { list: ["Tý", "Ngọ", "Mão", "Dậu"], phatoai: "Tỵ" },
        { list: ["Thìn", "Tuất", "Sửu", "Mùi"], phatoai: "Sửu" }
    ];
    let found = nhom.find(g => g.list.includes(chiNam));
    if (!found) return;

    const idx = CUNG_CELLS.findIndex(c => c.chi === found.phatoai);
    if (idx !== -1) {
        const cell = document.querySelector('.cell' + CUNG_CELLS[idx].cell);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-pha-toai sao-xau hanh-hoa phu-tinh">
                                                                                    Phá Toái
                                                                                </div>`);
        }
    }
}
/**
* An sao Thiên Tài, Thiên Thọ theo quy tắc:
* - Thiên Tài: từ cung Mệnh (coi đó là năm Tý) đi thuận chiều kim đồng hồ tới chi năm sinh
* - Thiên Thọ: từ cung an Thân (vị trí cung an thân, không phải chi Thân) coi là năm Tý, đi thuận chiều kim đồng hồ tới chi năm sinh
* @param {string} chiNam - Chi năm sinh ("Tý", "Sửu", ..., "Hợi")
* @param {string} menhChi - Chi tại cung Mệnh ("Tý",..., "Hợi")
* @param {string} thanChi - Chi tại cung an Thân ("Tý",..., "Hợi")
*/
function anThienTaiThienTho(chiNam, menhChi, thanChi) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-thien-tai, .sao-thien-tho').forEach(e => e.remove());
    });

    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

    // Tìm vị trí cung Mệnh và cung an Thân trong bàn
    const idxMenh = CUNG_CELLS.findIndex(c => c.chi === menhChi);
    const idxThan = CUNG_CELLS.findIndex(c => c.chi === thanChi);
    const idxNam = CHI12.indexOf(chiNam);

    // Thiên Tài: từ cung Mệnh là năm Tý, tính thuận tới chi năm sinh
    let idxThienTai = (idxMenh + idxNam) % 12;
    // Thiên Thọ: từ cung an Thân là năm Tý, tính thuận tới chi năm sinh
    let idxThienTho = (idxThan + idxNam) % 12;

    // An sao Thiên Tài
    let cellThienTai = document.querySelector('.cell' + CUNG_CELLS[idxThienTai].cell);
    if (cellThienTai) {
        cellThienTai.insertAdjacentHTML('beforeend',
            `<div class="sao-thien-tai sao-tot hanh-tho phu-tinh" >
                                                                                Thiên Tài
                                                                            </div>`);
    }
    // An sao Thiên Thọ
    let cellThienTho = document.querySelector('.cell' + CUNG_CELLS[idxThienTho].cell);
    if (cellThienTho) {
        cellThienTho.insertAdjacentHTML('beforeend',
            `<div class="sao-thien-tho sao-tot hanh-tho phu-tinh">
                                                                                Thiên Thọ
                                                                            </div>`);
    }
}
/**
* An sao Đẩu Quân theo quy tắc:
* - Sinh năm nào thì từ vị trí cung đó làm tháng 1 (Giả sử chi năm sinh là cung bắt đầu = tháng 1)
* - Đi ngược chiều kim đồng hồ tới tháng sinh (âm lịch)
* - Từ vị trí đó coi là giờ Tý, đi thuận chiều kim đồng hồ tới giờ sinh (chi)
* => Đặt sao Đẩu Quân ở đó
* @param {string} chiNam - Chi năm sinh ("Tý",..., "Hợi")
* @param {number} thangAm - Tháng sinh âm lịch (1-12)
* @param {string} gioChi - Chi giờ sinh ("Tý",..., "Hợi")
*/
function anDauQuan(chiNam, thangAm, gioChi) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-dau-quan').forEach(e => e.remove());
    });

    // Tìm index xuất phát (năm sinh) trong CUNG_CELLS
    const idxStart = CUNG_CELLS.findIndex(c => c.chi === chiNam);
    if (idxStart === -1) return;

    // Đi ngược chiều kim đồng hồ tới tháng sinh âm lịch (tháng 1 là xuất phát, tháng 2 lùi 1, ...)
    // Vị trí tháng sinh trên bàn
    let idxThang = (idxStart - (thangAm - 1) + 12) % 12;

    // Từ đó coi là giờ Tý, đi thuận tới giờ sinh
    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const idxGio = CHI12.indexOf(gioChi);
    if (idxGio === -1) return;

    let idxDauQuan = (idxThang + idxGio) % 12;
    const cell = document.querySelector('.cell' + CUNG_CELLS[idxDauQuan].cell);
    if (cell) {
        cell.insertAdjacentHTML('beforeend',
            `<div class="sao-dau-quan sao-xau hanh-hoa phu-tinh">
                                                                                Đẩu Quân
                                                                            </div>`);
    }
}
/**
* An vòng Tràng Sinh cho 12 cung tử vi
* @param {string} tenCuc - Tên cục ("Thủy nhị cục", "Mộc tam cục", "Kim tứ cục", "Thổ ngũ cục", "Hỏa lục cục")
* @param {string} amduong - "Dương Nam", "Dương Nữ", "Âm Nam", "Âm Nữ"
*/
function anVongTrangSinh(tenCuc, amduong) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-trang-sinh').forEach(e => e.remove());
    });

    // Xác định chiều an sao
    const isThuan = (amduong === "Dương Nam" || amduong === "Âm Nữ") ? 1 : -1;

    // Vị trí khởi vòng Tràng Sinh theo cục
    const khoiMap = {
        "Thủy nhị cục": "Thân",
        "Mộc tam cục": "Hợi",
        "Kim tứ cục": "Tỵ",
        "Thổ ngũ cục": "Thân",
        "Hỏa lục cục": "Dần"
    };
    const viTriKhoiChi = khoiMap[tenCuc];
    if (!viTriKhoiChi) return;

    // Thứ tự 12 sao vòng Tràng Sinh
    const SAO_TRANG_SINH = [
        "Tràng Sinh", "Mộc Dục", "Quan Đới", "Lâm Quan", "Đế Vượng", "Suy",
        "Bệnh", "Tử", "Mộ", "Tuyệt", "Thai", "Dưỡng"
    ];

    // Tìm vị trí khởi đầu trên bàn lá số
    let idxStart = CUNG_CELLS.findIndex(c => c.chi === viTriKhoiChi);
    if (idxStart === -1) return;

    // An từng sao, căn giữa sát đáy, bôi đậm
    for (let i = 0; i < 12; ++i) {
        let idx;
        if (isThuan === 1) {
            idx = (idxStart + i) % 12;
        } else {
            idx = (idxStart - i + 12) % 12;
        }
        let cellNum = CUNG_CELLS[idx].cell; // bắt đầu từ dần
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-trang-sinh" style="
                                                                                        position:absolute;
                                                                                        left:0; right:0;
                                                                                        bottom:${2}px;
                                                                                        text-align:center;
                                                                                        color:#000;
                                                                                        font-size:0.97em;
                                                                                        font-weight:bold;
                                                                                        z-index:3;
                                                                                    ">
                                                                                        ${SAO_TRANG_SINH[i]}
                                                                                    </div>`);
        }
    }
}
function getTrangSinhIndex(tenSao, tenCuc, amduong) {
    // Thứ tự 12 sao vòng Tràng Sinh
    const SAO_TRANG_SINH = [
        "Tràng Sinh", "Mộc Dục", "Quan Đới", "Lâm Quan", "Đế Vượng", "Suy",
        "Bệnh", "Tử", "Mộ", "Tuyệt", "Thai", "Dưỡng"
    ];

    // Xác định chiều an sao
    const isThuan = (amduong === "Dương Nam" || amduong === "Âm Nữ") ? 1 : -1;

    // Vị trí khởi vòng Tràng Sinh theo cục
    const khoiMap = {
        "Thủy nhị cục": "Thân",
        "Mộc tam cục": "Hợi",
        "Kim tứ cục": "Tỵ",
        "Thổ ngũ cục": "Thân",
        "Hỏa lục cục": "Dần"
    };
    const viTriKhoiChi = khoiMap[tenCuc];
    if (!viTriKhoiChi) return -1;

    // Tìm vị trí khởi đầu trên bàn lá số
    let idxStart = CUNG_CELLS.findIndex(c => c.chi === viTriKhoiChi);
    if (idxStart === -1) return -1;

    // Tìm index của sao trong mảng SAO_TRANG_SINH
    const idxSao = SAO_TRANG_SINH.indexOf(tenSao);
    if (idxSao === -1) return -1;

    // Tính index trên bàn lá số (theo thuận/nghịch)
    let idx;
    if (isThuan === 1) {
        idx = (idxStart + idxSao) % 12;
    } else {
        idx = (idxStart - idxSao + 12) % 12;
    }
    return idx; // có thể trả về idx hoặc cellNum: CUNG_CELLS[idx].cell
}

/**
* Mapping tứ hóa theo thiên can
*
*/
function anSaoTuHoa(canNam, saoChinhPos) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-luu-hoa-loc, .sao-luu-hoa-quyen, .sao-luu-hoa-khoa, .sao-luu-hoa-ky').forEach(e => e.remove());
    });

    // Bảng quy tắc tứ hóa theo CAN NĂM XEM HẠN (KHÔNG phải năm sinh)
    const RULES = {
        "G.": [
            { sao: "Liêm Trinh", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Phá Quân", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Vũ Khúc", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thái Dương", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "Ấ.": [
            { sao: "Thiên Cơ", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thiên Lương", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Tử Vi", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thái Âm", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "B.": [
            { sao: "Thiên Đồng", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thiên Cơ", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Văn Xương", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Liêm Trinh", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "Đ.": [
            { sao: "Thái Âm", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thiên Đồng", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thiên Cơ", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Cự Môn", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "M.": [
            { sao: "Tham Lang", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thái Âm", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Hữu Bật", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thiên Cơ", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "K.": [
            { sao: "Vũ Khúc", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Tham Lang", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thiên Lương", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Văn Khúc", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "C.": [
            { sao: "Thái Dương", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Vũ Khúc", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thái Âm", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thiên Đồng", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "T.": [
            { sao: "Cự Môn", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thái Dương", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Văn Khúc", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Văn Xương", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "N.": [
            { sao: "Thiên Lương", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Tử Vi", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Tả Phù", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Vũ Khúc", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ],
        "Q.": [
            { sao: "Phá Quân", hoa: "Hóa Lộc", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Cự Môn", hoa: "Hóa Quyền", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Thái Âm", hoa: "Hóa Khoa", hanh: "hanh-moc", loai: "sao-tot" },
            { sao: "Tham Lang", hoa: "Hóa Kỵ", hanh: "hanh-thuy", loai: "sao-xau" }
        ]
    };





    if (!RULES[canNam]) return;

    RULES[canNam].forEach(rule => {
        const idxCung = saoChinhPos[rule.sao];

        if (typeof idxCung !== "undefined") {
            const cell = document.querySelector('.cell' + CUNG_CELLS[idxCung].cell);
            if (cell) {
                cell.insertAdjacentHTML('beforeend',
                    `<div class="tu-hoa ${rule.hanh} ${rule.loai} phu-tinh">
                                                                                             ${rule.hoa}
                                                                                        </div>`);
            }
        }
    });
}

// Nhãn Tuần / Triệt: đặt đè lên đường viền giữa hai cung bị kẹp, giống bản Unity (TuViApp.PlaceTuanTriet).
// Ô (hàng, cột) của bàn 4x4; ô giữa là thông tin chung.
const CELL_POS_TUAN_TRIET = {
    1: [0, 0], 2: [0, 1], 3: [0, 2], 4: [0, 3],
    5: [1, 0], 8: [1, 3],
    9: [2, 0], 12: [2, 3],
    13: [3, 0], 14: [3, 1], 15: [3, 2], 16: [3, 3]
};
const TRIET_CHI_THEO_CAN = {
    "G.": ["Thân", "Dậu"], "K.": ["Thân", "Dậu"],
    "Ấ.": ["Ngọ", "Mùi"], "C.": ["Ngọ", "Mùi"],
    "B.": ["Thìn", "Tỵ"], "T.": ["Thìn", "Tỵ"],
    "N.": ["Dần", "Mão"], "Đ.": ["Dần", "Mão"],
    "M.": ["Tý", "Sửu"], "Q.": ["Tý", "Sửu"]
};
let __triet_chi_hien_tai = null;

function datNhanTuanTriet(chiA, chiB, text, w, cls, mau) {
    const iA = CUNG_CELLS.findIndex(c => c.chi === chiA);
    const iB = CUNG_CELLS.findIndex(c => c.chi === chiB);
    if (iA < 0 || iB < 0) return;
    const pa = CELL_POS_TUAN_TRIET[CUNG_CELLS[iA].cell];
    const pb = CELL_POS_TUAN_TRIET[CUNG_CELLS[iB].cell];
    if (!pa || !pb) return;
    let cellNum, css;
    if (pa[0] === pb[0]) {
        // hai cung cạnh nhau trong một hàng: đường viền đứng; hàng trên/dưới đặt sát mép ngoài của bàn
        const trai = pa[1] < pb[1] ? iA : iB;
        cellNum = CUNG_CELLS[trai].cell;
        css = 'right:' + (-w / 2) + 'px;' + (pa[0] === 0 ? 'top:0;' : 'bottom:0;');
    } else {
        // hai cung chồng lên nhau trong một cột: đường viền ngang, nhãn ở giữa cạnh dưới của cung trên
        const tren = pa[0] < pb[0] ? iA : iB;
        cellNum = CUNG_CELLS[tren].cell;
        css = 'left:50%;bottom:-10px;transform:translateX(-50%);';
    }
    const cell = document.querySelector('.cell' + cellNum);
    if (!cell) return;
    cell.insertAdjacentHTML('beforeend',
        '<div class="' + cls + '" style="position:absolute;' + css + 'width:' + w + 'px;height:16px;background:#efe9d8;border:0;border-radius:4px;color:#1a1710' +
        ';font-weight:bold;font-size:0.66em;z-index:100;display:flex;align-items:center;justify-content:center;' +
        'text-align:center;letter-spacing:1px;">' + text + '</div>');
}

function veNhanTuanTriet(trietChi, tuanChi) {
    document.querySelectorAll('.triet-border, .tuan-border').forEach(e => e.remove());
    const trung = trietChi && tuanChi && trietChi.length === 2 && tuanChi.length === 2 &&
        trietChi.every(c => tuanChi.includes(c));
    if (trung) { datNhanTuanTriet(trietChi[0], trietChi[1], 'TUẦN · TRIỆT', 84, 'tuan-border triet-border', '#5b2a86'); return; }
    if (trietChi && trietChi.length === 2) datNhanTuanTriet(trietChi[0], trietChi[1], 'TRIỆT', 46, 'triet-border', '#d32f2f');
    if (tuanChi && tuanChi.length === 2) datNhanTuanTriet(tuanChi[0], tuanChi[1], 'TUẦN', 46, 'tuan-border', '#2949d3');
}

function anTriet(canNam) {
    // Triệt: cặp chi theo can năm sinh. Nhãn được vẽ trong anTuan (cần biết cả Tuần để gộp khi trùng cặp).
    __triet_chi_hien_tai = TRIET_CHI_THEO_CAN[canNam] || null;
    document.querySelectorAll('.triet-border').forEach(e => e.remove());
}

function anTuan(canNam, chiNam) {
    document.querySelectorAll('.tuan-border').forEach(e => e.remove());
    // Tuần: đếm lùi từ cung có chi năm sinh theo thứ tự can Giáp..Quý; hai cung Tuần là lùi 1 và lùi 2 cung kể từ cung "khởi Giáp".
    const idxStart = CUNG_CELLS.findIndex(c => c.chi === chiNam);
    if (idxStart === -1) { veNhanTuanTriet(__triet_chi_hien_tai, null); return; }
    const CAN10 = ["G.", "Ấ.", "B.", "Đ.", "M.", "K.", "C.", "T.", "N.", "Q."];
    let idx = idxStart, canIdx = 0, foundIdx = null;
    for (let i = 0; i < 12; ++i) {
        if (CAN10[canIdx % 10] === canNam) { foundIdx = idx; break; }
        idx = (idx - 1 + 12) % 12;
        canIdx++;
    }
    if (foundIdx === null) { veNhanTuanTriet(__triet_chi_hien_tai, null); return; }
    const tuanChi = [CUNG_CELLS[(foundIdx - 1 + 12) % 12].chi, CUNG_CELLS[(foundIdx - 2 + 12) % 12].chi];
    veNhanTuanTriet(__triet_chi_hien_tai, tuanChi);
}
// === AN SAO CỐ ĐỊNH: Thiên La – Địa Võng, Thiên Thương – Thiên Sứ ===
const SAO_CODINH = [
    { ten: "Thiên La", chi: "Thìn", loai: "xau", hanh: "kim" },
    { ten: "Địa Võng", chi: "Tuất", loai: "xau", hanh: "kim" },
    { ten: "Thiên Thương", cung: "Nô Bộc", loai: "xau", hanh: "tho" },
    { ten: "Thiên Sứ", cung: "Tật Ách", loai: "xau", hanh: "thuy" }
];

// Map tên cung sang index (bắt đầu từ cung Mệnh, thuận chiều kim đồng hồ)
const TEN_CUNG_MAP = {
    "Mệnh": 0, "Phụ Mẫu": 1, "Phúc Đức": 2, "Điền Trạch": 3,
    "Quan Lộc": 4, "Nô Bộc": 5, "Thiên Di": 6, "Tật Ách": 7,
    "Tài Bạch": 8, "Tử Tức": 9, "Phu Thê": 10, "Huynh Đệ": 11
};

// Thêm class màu hành cho từng hành
// VD: hanh-kim, hanh-tho, hanh-thuy ở style hoặc thêm JS:
const HANH_MAU_CODINH = {
    "kim": "hanh-kim",
    "tho": "hanh-tho",
    "thuy": "hanh-thuy",
    "hoa": "hanh-hoa",
    "moc": "hanh-moc"
};

// Hiển thị sao cố định lên bàn lá số
function hienThiSaoCoDinh(menhIdx) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        let old = cell.querySelector('.sao-codinh-label');
        if (old) old.remove();
    });
    // B1: An Thiên La, Địa Võng theo chi
    SAO_CODINH.forEach(sao => {
        let cellNum = null;
        if (sao.chi) {
            // Tìm cell theo chi
            let found = CUNG_CELLS.find(c => c.chi === sao.chi);
            if (found) cellNum = found.cell;
        } else if (sao.cung) {
            // Tìm cell theo tên cung (tính từ cung Mệnh)
            let cungIdx = (menhIdx + TEN_CUNG_MAP[sao.cung]) % 12;
            cellNum = CUNG_CELLS[cungIdx].cell;
        }
        if (cellNum) {
            let cell = document.querySelector('.cell' + cellNum);
            if (cell) {
                let hanhClass = HANH_MAU_CODINH[sao.hanh] || "";
                cell.insertAdjacentHTML('beforeend',
                    `<div class="sao-codinh-label sao-xau ${hanhClass} phu-tinh">
                                                                                            ${sao.ten}
                                                                                        </div>`);
            }
        }
    });
}
// Quy tắc mapping: {ten: ..., startChi: ..., direction: 1/-1, loai: 'tot'|'xau', hanh: 'hoa'|'thuy'|'tho'...}
const SAO_THANGSINH = [
    { ten: 'Thiên Hình', startChi: 'Dậu', direction: 1, loai: 'xau', hanh: 'hoa' },      // Xấu, Hỏa
    { ten: 'Thiên Y', startChi: 'Sửu', direction: 1, loai: 'tot', hanh: 'thuy' },        // Tốt, Thủy
    { ten: 'Thiên Riêu', startChi: 'Sửu', direction: 1, loai: 'xau', hanh: 'thuy' },     // Xấu, Thủy
    { ten: 'Thiên Giải', startChi: 'Thân', direction: 1, loai: 'tot', hanh: 'hoa' },     // Tốt, Hỏa
    { ten: 'Địa Giải', startChi: 'Mùi', direction: 1, loai: 'tot', hanh: 'tho' },        // Tốt, Thổ
    { ten: 'Tả Phù', startChi: 'Thìn', direction: 1, loai: 'tot', hanh: 'tho' },         // Tốt, Thổ
    { ten: 'Hữu Bật', startChi: 'Tuất', direction: -1, loai: 'tot', hanh: 'thuy' },      // Tốt, Thủy
];

// Map hành sang class màu
const HANH_MAU = {
    "kim": "hanh-kim",
    "moc": "hanh-moc",
    "thuy": "hanh-thuy",
    "hoa": "hanh-hoa",
    "tho": "hanh-tho"
};

let idx_taPhu = null, idx_huuBat = null;
function anSaoTheoThangSinh(thang_am, menhIdx) {
    // Xóa nhãn cũ nếu có
    document.querySelectorAll('.laso-cell').forEach(cell => {
        let olds = cell.querySelectorAll('.phutinhthem-label');
        olds.forEach(o => o.remove());
    });

    SAO_THANGSINH.forEach(sao => {
        // Tìm vị trí xuất phát (startIdx) trong CUNG_CELLS
        let startIdx = CUNG_CELLS.findIndex(c => c.chi === sao.startChi);
        if (startIdx === -1) return;
        // Tính vị trí cung sẽ an sao (thang_am: 1~12)
        let idx;
        if (sao.direction === 1) {
            idx = (startIdx + (thang_am - 1)) % 12;
        } else {
            idx = (startIdx - (thang_am - 1) + 12 * 3) % 12;
        }
        let cellNum = CUNG_CELLS[idx].cell;
        // Ghi nhận vị trí Tả Phù/Hữu Bật
        if (sao.ten === "Tả Phù") idx_taPhu = idx;
        if (sao.ten === "Hữu Bật") idx_huuBat = idx;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            // Phân biệt tốt/xấu & gán class hành
            let loaiClass = sao.loai === "xau" ? "sao-xau" : "sao-tot";
            let hanhClass = HANH_MAU[sao.hanh] || "";
            cell.insertAdjacentHTML('beforeend',
                `<div class="phutinhthem-label ${loaiClass} ${hanhClass} phu-tinh">
                                                                                        ${sao.ten}
                                                                                    </div>`);
        }
    });
    // trả về vị trí Tả Phù, hữu bật
    return { taPhuIdx: idx_taPhu, huuBatIdx: idx_huuBat };
}
const SAO_GIO_SINH = [
    { ten: "Văn Xương", startChi: "Tuất", direction: -1, className: "sao-gio-vanxuong", loai: "tot", hanh: "kim" },
    { ten: "Văn Khúc", startChi: "Thìn", direction: 1, className: "sao-gio-vankhuc", loai: "tot", hanh: "thuy" },
    { ten: "Thai Phụ", startChi: "Ngọ", direction: 1, className: "sao-gio-thaiphu", loai: "tot", hanh: "kim" },
    { ten: "Phong Cáo", startChi: "Dần", direction: 1, className: "sao-gio-phongcao", loai: "tot", hanh: "tho" },
    { ten: "Địa Kiếp", startChi: "Hợi", direction: 1, className: "sao-gio-diakiep", loai: "xau", hanh: "hoa" },
    { ten: "Địa Không", startChi: "Hợi", direction: -1, className: "sao-gio-diakhong", loai: "xau", hanh: "hoa" }
];



/**
 * An các sao phụ tinh theo giờ sinh lên từng cung
 * @param {string} gio_sinh_chi - giờ sinh ("Tý",..., "Hợi")
 */
let idx_vanXuong = null, idx_vanKhuc = null;
function anSaoTheoGioSinh(gio_sinh_chi) {

    // Map hành sang class màu
    const HANH_MAU = {
        "kim": "hanh-kim",
        "moc": "hanh-moc",
        "thuy": "hanh-thuy",
        "hoa": "hanh-hoa",
        "tho": "hanh-tho"
    };
    // Thứ tự 12 chi giờ
    const GIO12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-gio-vanxuong, .sao-gio-vankhuc, .sao-gio-thaiphu, .sao-gio-phongcao, .sao-gio-diakiep, .sao-gio-diakhong')
            .forEach(e => e.remove());
    });
    SAO_GIO_SINH.forEach(sao => {
        let startIdx = CUNG_CELLS.findIndex(c => c.chi === sao.startChi);
        if (startIdx === -1) return;
        let gioIdx = GIO12.indexOf(gio_sinh_chi);
        if (gioIdx === -1) return;
        // direction: 1 (thuận), -1 (ngược), giờ Tý là startIdx
        let idx;
        if (sao.direction === 1) {
            idx = (startIdx + gioIdx) % 12;
        } else {
            idx = (startIdx - gioIdx + 12 * 3) % 12;
        }
        if (sao.ten === "Văn Xương") idx_vanXuong = idx;
        if (sao.ten === "Văn Khúc") idx_vanKhuc = idx;
        let cellNum = CUNG_CELLS[idx].cell;

        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            // Đếm số nhãn đã có để lùi vị trí cho không bị trùng
            let count = cell.querySelectorAll('.' + sao.className).length;
            let baseTop = 110; // px, chỉnh phù hợp với các nhãn khác nếu muốn
            let offset = 18;  // px
            let top = baseTop + count * offset;
            // Phân biệt tốt/xấu & gán class hành
            let loaiClass = sao.loai === "xau" ? "sao-xau" : "sao-tot";
            let hanhClass = HANH_MAU[sao.hanh] || "";
            cell.insertAdjacentHTML('beforeend',
                `<div class="${sao.className} ${loaiClass} ${hanhClass} phu-tinh">
                                                                                        ${sao.ten}
                                                                                    </div>`);
        }
    });
    return { vanXuongIdx: idx_vanXuong, vanKhucIdx: idx_vanKhuc };
}
function anSaoHoaLinhTinh(chiNam, gioitinh, canNam, gio_sinh_chi) {
    // Xác định âm dương của năm sinh
    const DUONG_CAN = ["G.", "B.", "M.", "C.", "N."]; // Giáp, Bính, Mậu, Canh, Nhâm (ký hiệu cắt ngắn)
    let isDuongNam = (DUONG_CAN.includes(canNam) && gioitinh === "Nam");
    let isAmNu = (!DUONG_CAN.includes(canNam) && gioitinh === "Nữ");
    let isAmNam = (!DUONG_CAN.includes(canNam) && gioitinh === "Nam");
    let isDuongNu = (DUONG_CAN.includes(canNam) && gioitinh === "Nữ");

    // Danh sách chi nhóm
    const nhom_DanNgoTuat = ["Dần", "Ngọ", "Tuất"];
    const nhom_ThanTyThin = ["Thân", "Tý", "Thìn"];
    const nhom_TiDauSuu = ["Tỵ", "Dậu", "Sửu"];
    const nhom_HoiMaoMui = ["Hợi", "Mão", "Mùi"];

    // 12 chi giờ
    const GIO12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

    // === 1. Sao Hỏa Tinh ===
    // - Dương Nam/Âm Nữ thuận, Âm Nam/Dương Nữ nghịch
    let hoaTinh_cungkhoi = null, hoaTinh_dir = 1;
    if (nhom_DanNgoTuat.includes(chiNam)) { hoaTinh_cungkhoi = "Sửu"; }
    else if (nhom_ThanTyThin.includes(chiNam)) { hoaTinh_cungkhoi = "Dần"; }
    else if (nhom_TiDauSuu.includes(chiNam)) { hoaTinh_cungkhoi = "Mão"; }
    else if (nhom_HoiMaoMui.includes(chiNam)) { hoaTinh_cungkhoi = "Dậu"; }
    // Xác định chiều
    if (isDuongNam || isAmNu) hoaTinh_dir = 1; // thuận
    else hoaTinh_dir = -1; // nghịch

    // === 2. Sao Linh Tinh ===
    // - Dương Nam/Âm Nữ nghịch, Âm Nam/Dương Nữ thuận
    let linhTinh_cungkhoi = null, linhTinh_dir = 1;
    if (nhom_DanNgoTuat.includes(chiNam)) { linhTinh_cungkhoi = "Mão"; }
    else if (nhom_ThanTyThin.includes(chiNam)) { linhTinh_cungkhoi = "Tuất"; }
    else if (nhom_TiDauSuu.includes(chiNam)) { linhTinh_cungkhoi = "Tuất"; }
    else if (nhom_HoiMaoMui.includes(chiNam)) { linhTinh_cungkhoi = "Tuất"; }
    // Xác định chiều
    if (isDuongNam || isAmNu) linhTinh_dir = -1; // nghịch
    else linhTinh_dir = 1; // thuận

    // === An sao và hiện thị lên bàn lá số ===
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-hoa-tinh, .sao-linh-tinh').forEach(e => e.remove());
    });

    // Hỏa Tinh (sao xấu, hành hỏa)
    if (hoaTinh_cungkhoi) {
        let startIdx = CUNG_CELLS.findIndex(c => c.chi === hoaTinh_cungkhoi);
        let gioIdx = GIO12.indexOf(gio_sinh_chi);
        let idx;
        if (hoaTinh_dir === 1) idx = (startIdx + gioIdx) % 12;
        else idx = (startIdx - gioIdx + 12 * 3) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            let count = cell.querySelectorAll('.sao-hoa-tinh').length;
            let baseTop = 130, offset = 18, top = baseTop + count * offset;
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-hoa-tinh sao-xau hanh-hoa phu-tinh">
                                                                                        Hỏa Tinh
                                                                                    </div>`);
        }
    }

    // Linh Tinh (sao xấu, hành hỏa)
    if (linhTinh_cungkhoi) {
        let startIdx = CUNG_CELLS.findIndex(c => c.chi === linhTinh_cungkhoi);
        let gioIdx = GIO12.indexOf(gio_sinh_chi);
        let idx;
        if (linhTinh_dir === 1) idx = (startIdx + gioIdx) % 12;
        else idx = (startIdx - gioIdx + 12 * 3) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            let count = cell.querySelectorAll('.sao-linh-tinh').length;
            let baseTop = 130, offset = 18, top = baseTop + count * offset;
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-linh-tinh sao-xau hanh-hoa phu-tinh">
                                                                                        Linh Tinh
                                                                                    </div>`);
        }
    }
}
function anSaoTheoNgaySinh(ngay_am, saoThangSinhIdx, saoGioSinhIdx) {
    // Xóa nhãn cũ nếu có
    document.querySelectorAll('.laso-cell').forEach(cell => {
        cell.querySelectorAll('.sao-tam-thai, .sao-bat-toa, .sao-thien-quy, .sao-an-quang').forEach(e => e.remove());
    });

    // Tam Thai (sao tốt, hành kim)
    if (typeof saoThangSinhIdx.taPhu === 'number') {
        let idx = (saoThangSinhIdx.taPhu + (ngay_am - 1)) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-tam-thai sao-tot hanh-thuy phu-tinh">
                                                                                        Tam Thai
                                                                                    </div>`);
        }
    }

    // Bát Tọa (sao tốt, hành mộc)
    if (typeof saoThangSinhIdx.huuBat === 'number') {
        let idx = (saoThangSinhIdx.huuBat - (ngay_am - 1) + 12 * 3) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-bat-toa sao-tot hanh-moc phu-tinh">
                                                                                        Bát Tọa
                                                                                    </div>`);
        }
    }

    // Thiên Quý (sao tốt, hành thổ)
    if (typeof saoGioSinhIdx.vanKhuc === 'number') {
        let idx = (saoGioSinhIdx.vanKhuc - (ngay_am - 2) + 12 * 3) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-thien-quy sao-tot hanh-tho phu-tinh">
                                                                                        Thiên Quý
                                                                                    </div>`);
        }
    }

    // Ân Quang (sao tốt, hành mộc)
    if (typeof saoGioSinhIdx.vanXuong === 'number') {
        let idx = (saoGioSinhIdx.vanXuong + (ngay_am - 2) + 12 * 3) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="sao-an-quang sao-tot hanh-moc phu-tinh">
                                                                                        Ân Quang
                                                                                    </div>`);
        }
    }
}
