function layNguHanhMenh60(menh60hoagiap) {
    if (!menh60hoagiap) return "";
    const arr = menh60hoagiap.trim().split(" ");
    return arr[arr.length - 1];
}

function layNguHanhCuc(cuc) {
    if (!cuc) return "";
    return cuc.trim().split(" ")[0];
}
const NGU_HANH_SINH = {
    "Mộc": "Hỏa",
    "Hỏa": "Thổ",
    "Thổ": "Kim",
    "Kim": "Thủy",
    "Thủy": "Mộc"
};

const NGU_HANH_KHAC = {
    "Mộc": "Thổ",
    "Thổ": "Thủy",
    "Thủy": "Hỏa",
    "Hỏa": "Kim",
    "Kim": "Mộc"
};
const NGU_HANH_BINH_HOA = {
    "Mộc": "Mộc",
    "Thổ": "Thổ",
    "Thủy": "Thủy",
    "Hỏa": "Hỏa",
    "Kim": "Kim"
};


/**
 * Hàm xét 4 hướng sinh khắc giữa mệnh và cục
 * @param {string} hanhMenh - Ngũ hành mệnh (ví dụ: "Kim")
 * @param {string} hanhCuc - Ngũ hành cục (ví dụ: "Thủy")
 * @returns {object} - Kết quả 4 hướng: menh_sinh_cuc, menh_khac_cuc, cuc_sinh_menh, cuc_khac_menh
 */
function xetSinhKhacNguHanh(hanhMenh, hanhCuc) {
    return {
        menh_sinh_cuc: (NGU_HANH_SINH[hanhMenh] === hanhCuc) ? "Có" : "Không",
        menh_khac_cuc: (NGU_HANH_KHAC[hanhMenh] === hanhCuc) ? "Có" : "Không",
        cuc_sinh_menh: (NGU_HANH_SINH[hanhCuc] === hanhMenh) ? "Có" : "Không",
        cuc_khac_menh: (NGU_HANH_KHAC[hanhCuc] === hanhMenh) ? "Có" : "Không",
        cuc_binh_hoa_menh: (NGU_HANH_BINH_HOA[hanhCuc] === hanhMenh) ? "Có" : "Không",
    };
}

// Chỉ hiện những hướng có
function hienHuongCo(result) {
    const mapping = {
        menh_sinh_cuc: "Mệnh sinh Cục",
        menh_khac_cuc: "Mệnh khắc Cục",
        cuc_sinh_menh: "Cục sinh Mệnh",
        cuc_khac_menh: "Cục khắc Mệnh",
        cuc_binh_hoa_menh: "Cục Mệnh Bình Hòa"
    };
    return Object.entries(result)
        .filter(([_, value]) => value === "Có")
        .map(([key]) => mapping[key]);
}
function hienHuongCoThienMaVaMenh(result) {
    const mapping = {
        menh_sinh_cuc: "Ngũ hành bản Mệnh sinh Ngũ hành Thiên Mã",
        menh_khac_cuc: "Ngũ hành bản Mệnh khắc Ngũ hành Thiên Mã",
        cuc_sinh_menh: "Ngũ hành Thiên Mã sinh Ngũ hành bản Mệnh",
        cuc_khac_menh: "Ngũ hành Thiên Mã khắc Ngũ hành bản Mệnh",
        cuc_binh_hoa_menh: "Ngũ hành Thiên Mã đồng hành cùng Ngũ hành bản Mệnh"
    };
    return Object.entries(result)
        .filter(([_, value]) => value === "Có")
        .map(([key]) => mapping[key]);
}

function amDuongThuanNghichLy(namSinh, menhChi) {
    // 1. Xác định tuổi âm/dương
    const soCuoi = namSinh % 10;
    const laTuoiAm = soCuoi % 2 === 1; // Lẻ: tuổi âm
    // 2. Xác định cung mệnh âm/dương
    const cungDuong = ["Tý", "Dần", "Thìn", "Ngọ", "Thân", "Tuất"];
    const laMenhDuong = cungDuong.includes(menhChi); // true: dương, false: âm
    // 3. Thuận/Nghịch lý
    if ((laTuoiAm && !laMenhDuong) || (!laTuoiAm && laMenhDuong)) {
        return "Âm Dương Thuận Lý";
    } else {
        return "Âm Dương Nghịch Lý";
    }
}
function soCuoiNamSinh(namSinh) {
    return namSinh % 10;
}
const MENH_60HOAGIAP = [
    "Hải Trung Kim", "Hải Trung Kim", "Lư Trung Hỏa", "Lư Trung Hỏa", "Đại Lâm Mộc", "Đại Lâm Mộc",
    "Lộ Bàng Thổ", "Lộ Bàng Thổ", "Kiếm Phong Kim", "Kiếm Phong Kim", "Sơn Đầu Hỏa", "Sơn Đầu Hỏa",
    "Giản Hạ Thủy", "Giản Hạ Thủy", "Thành Đầu Thổ", "Thành Đầu Thổ", "Bạch Lạp Kim", "Bạch Lạp Kim",
    "Dương Liễu Mộc", "Dương Liễu Mộc", "Tuyền Trung Thủy", "Tuyền Trung Thủy", "Ốc Thượng Thổ", "Ốc Thượng Thổ",
    "Tích Lịch Hỏa", "Tích Lịch Hỏa", "Tùng Bách Mộc", "Tùng Bách Mộc", "Trường Lưu Thủy", "Trường Lưu Thủy",
    "Sa Trung Kim", "Sa Trung Kim", "Sơn Hạ Hỏa", "Sơn Hạ Hỏa", "Bình Địa Mộc", "Bình Địa Mộc",
    "Bích Thượng Thổ", "Bích Thượng Thổ", "Kim Bạch Kim", "Kim Bạch Kim", "Phúc Đăng Hỏa", "Phúc Đăng Hỏa",
    "Thiên Hà Thủy", "Thiên Hà Thủy", "Đại Dịch Thổ", "Đại Dịch Thổ", "Thoa Xuyến Kim", "Thoa Xuyến Kim",
    "Tang Đố Mộc", "Tang Đố Mộc", "Đại Khê Thủy", "Đại Khê Thủy", "Sa Trung Thổ", "Sa Trung Thổ",
    "Thiên Thượng Hỏa", "Thiên Thượng Hỏa", "Thạch Lựu Mộc", "Thạch Lựu Mộc", "Đại Hải Thủy", "Đại Hải Thủy"
];// Hàm lấy chỉ số 60 hoa giáp từ can chi (ĐÚNG QUY TẮC)
function indexInSexagenary(can, chi) {
    const CAN = ["G.", "Ấ.", "B.", "Đ.", "M.", "K.", "C.", "T.", "N.", "Q."];
    const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    for (let i = 0; i < 60; ++i) {
        if (CAN[i % 10] === can && CHI[i % 12] === chi) return i;
    }
    return -1; // không tìm thấy
}
function traMenh(can, chi) {
    const idx = indexInSexagenary(can, chi);
    if (idx === -1) return "Không xác định";
    return MENH_60HOAGIAP[idx];
}

function tinhAmDuong(gioitinh, canNam) {
    const duong = ["G.", "B.", "M.", "C.", "N."];
    if (duong.includes(canNam)) {
        return gioitinh === "Nam" ? "Dương Nam" : "Dương Nữ";
    } else {
        return gioitinh === "Nam" ? "Âm Nam" : "Âm Nữ";
    }
}

function soCanNam(can) {
    if (["G.", "K."].includes(can)) return 1;
    if (["Ấ.", "C."].includes(can)) return 2;
    if (["B.", "T."].includes(can)) return 3;
    if (["Đ.", "N."].includes(can)) return 4;
    if (["M.", "Q."].includes(can)) return 5;
    return 0;
}
function soViTriMenh(chi) {
    if (["Tý", "Sửu"].includes(chi)) return 1;
    if (["Dần", "Mão", "Tuất", "Hợi"].includes(chi)) return 2;
    if (["Ngọ", "Mùi"].includes(chi)) return 3;
    if (["Tỵ", "Thìn"].includes(chi)) return 4;
    if (["Thân", "Dậu"].includes(chi)) return 5;
    return 0;
}
function traCuc(can, chi) {
    let s = soCanNam(can) + soViTriMenh(chi);
    if (s > 5) s -= 5;
    const arrCuc = ["", "Kim tứ cục", "Thủy nhị cục", "Hỏa lục cục", "Thổ ngũ cục", "Mộc tam cục"];
    return arrCuc[s];
}

function tinhcucSo(tenCuc) {

    if (tenCuc == "Thủy nhị cục") return 2;
    if (tenCuc == "Mộc tam cục") return 3;
    if (tenCuc == "Kim tứ cục") return 4;
    if (tenCuc == "Thổ ngũ cục") return 5;
    if (tenCuc == "Hỏa lục cục") return 6;


}
const HANH_CHI = {
    "Tý": "hanh-thuy",
    "Sửu": "hanh-tho",
    "Dần": "hanh-moc",
    "Mão": "hanh-moc",
    "Thìn": "hanh-tho",
    "Tỵ": "hanh-hoa",
    "Ngọ": "hanh-hoa",
    "Mùi": "hanh-tho",
    "Thân": "hanh-kim",
    "Dậu": "hanh-kim",
    "Tuất": "hanh-tho",
    "Hợi": "hanh-thuy"
};

const HANH_CAN = {
    "G.": "hanh-moc",   // Giáp
    "Ấ.": "hanh-moc",   // Ất
    "B.": "hanh-hoa",   // Bính
    "Đ.": "hanh-hoa",   // Đinh
    "M.": "hanh-tho",   // Mậu
    "K.": "hanh-tho",   // Kỷ
    "C.": "hanh-kim",   // Canh
    "T.": "hanh-kim",   // Tân
    "N.": "hanh-thuy",  // Nhâm
    "Q.": "hanh-thuy"   // Quý
};
const HANH_LABEL = {
    "hanh-moc": "Mộc",
    "hanh-hoa": "Hỏa",
    "hanh-tho": "Thổ",
    "hanh-kim": "Kim",
    "hanh-thuy": "Thủy"
};

// Hàm xét sinh khắc giữa Can và Chi (dựa vào ngũ hành Can/Chi)
function xetSinhKhacNguHanhCanChi(can, chi) {
    const hanhCanCss = HANH_CAN[can];
    const hanhChiCss = HANH_CHI[chi];
    if (!hanhCanCss || !hanhChiCss) return {};
    const hanhCan = HANH_LABEL[hanhCanCss];
    const hanhChi = HANH_LABEL[hanhChiCss];
    return {
        can_sinh_chi: (NGU_HANH_SINH[hanhCan] === hanhChi) ? "Có" : "Không",
        can_khac_chi: (NGU_HANH_KHAC[hanhCan] === hanhChi) ? "Có" : "Không",
        chi_sinh_can: (NGU_HANH_SINH[hanhChi] === hanhCan) ? "Có" : "Không",
        chi_khac_can: (NGU_HANH_KHAC[hanhChi] === hanhCan) ? "Có" : "Không",
        binh_hoa: (NGU_HANH_BINH_HOA[hanhChi] === hanhCan) ? "Có" : "Không",
     
      
    };
}


function hienHuongCoCanChi(result) {
    const mapping = {
        can_sinh_chi: "Can sinh Chi",
        can_khac_chi: "Can khắc Chi",
        chi_sinh_can: "Chi sinh Can",
        chi_khac_can: "Chi khắc Can",
        binh_hoa:     "Chi Can Bình Hòa"
    };
    return Object.entries(result)
        .filter(([key, value]) => mapping[key] && value === "Có")
        .map(([key]) => mapping[key]);
}
// Bảng ngũ hành các nhóm tam hợp
const NGU_HANH_TAM_HOP = {
    "Dần-Ngọ-Tuất": "Hỏa",
    "Thân-Tý-Thìn": "Thủy",
    "Tỵ-Dậu-Sửu": "Kim",
    "Hợi-Mão-Mùi": "Mộc"
};

// Hàm tra ngũ hành tam hợp từ 1 chi bất kỳ
function getNguHanhTamHopByChi(chi) {
    if (["Dần", "Ngọ", "Tuất"].includes(chi)) return "Hỏa";
    if (["Thân", "Tý", "Thìn"].includes(chi)) return "Thủy";
    if (["Tỵ", "Dậu", "Sửu"].includes(chi)) return "Kim";
    if (["Hợi", "Mão", "Mùi"].includes(chi)) return "Mộc";
    return "";
}

// Hàm xét sinh khắc hai ngũ hành (dùng quy tắc ngũ hành sinh khắc)
function xetSinhKhacTamHop(hanhTuoi, hanhDaiVan) {
  
    return {
        tuoi_sinh_daivan: (NGU_HANH_SINH[hanhTuoi] === hanhDaiVan) ? "Có" : "Không",
        tuoi_khac_daivan: (NGU_HANH_KHAC[hanhTuoi] === hanhDaiVan) ? "Có" : "Không",
        daivan_sinh_tuoi: (NGU_HANH_SINH[hanhDaiVan] === hanhTuoi) ? "Có" : "Không",
        daivan_khac_tuoi: (NGU_HANH_KHAC[hanhDaiVan] === hanhTuoi) ? "Có" : "Không",
        tuoi_binh_hoa_daivan: (NGU_HANH_BINH_HOA[hanhDaiVan] === hanhTuoi) ? "Có" : "Không"
    };
}

// Hiện hướng có tác động
function hienHuongCoTamHop(result) {
    const mapping = {
        tuoi_sinh_daivan: "Tam hợp tuổi sinh Tam hợp đại vận",
        tuoi_khac_daivan: "Tam hợp tuổi khắc Tam hợp đại vận",
        daivan_sinh_tuoi: "Tam hợp đại vận sinh Tam hợp tuổi",
        daivan_khac_tuoi: "Tam hợp đại vận khắc Tam hợp tuổi",
        tuoi_binh_hoa_daivan: "Tam hợp đại vận đồng hành với Tam hợp tuổi"
    };
    return Object.entries(result)
        .filter(([key, value]) => value === "Có")
        .map(([key]) => mapping[key]);
}

function layNguHanhChi(chi) {
    const hanhClass = HANH_CHI[chi];
    if (!hanhClass) return "";
    return HANH_LABEL[hanhClass] || "";
}

function xetSinhKhacBinhHoaMenhVaChiDaiVan(nguhanhMenh, chiDaiVan) {
    const nguhanhChi = layNguHanhChi(chiDaiVan);
    if (!nguhanhMenh || !nguhanhChi) return {};
    // Đã có xetSinhKhacNguHanh trong nguhanhcucmenh.js
    // Kết quả gồm: menh_sinh_cuc, menh_khac_cuc, cuc_sinh_menh, cuc_khac_menh
    // Ở đây: mệnh là "mệnh", chi đại vận là "cục"
  
    return xetSinhKhacNguHanh(nguhanhMenh, nguhanhChi);
}

// Chỉ hiện các hướng có ý nghĩa
function hienHuongCoMenhChiDaiVan(result) {
    const mapping = {
        menh_sinh_cuc: "Ngũ hành bản Mệnh sinh Ngũ hành cung đại vận",
        menh_khac_cuc: "Ngũ hành bản Mệnh khắc Ngũ hành cung đại vận",
        cuc_sinh_menh: "Ngũ hành cung đại vận sinh Ngũ hành bản Mệnh",
        cuc_khac_menh: "Ngũ hành cung đại vận khắc Ngũ hành bản Mệnh",
        cuc_binh_hoa_menh: "Ngũ hành cung đại vận đồng hành với Ngũ hành bản Mệnh"
    };
    return Object.entries(result)
        .filter(([_, value]) => value === "Có")
        .map(([key]) => mapping[key]);
}
function xetSinhKhacMenhVaThienMa(nguhanhMenh) {
    return hienHuongCoThienMaVaMenh(xetSinhKhacNguHanh(nguhanhMenh, "Hỏa"));
    
}