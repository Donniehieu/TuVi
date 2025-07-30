function kiemTraDiaSinh(banMenh, cungVi) {
    // Gom Thủy và Thổ làm một nhóm theo bảng
    let group = banMenh;
    if (banMenh === "Thổ") group = "Thủy - Thổ";
    if (banMenh === "Thủy") group = "Thủy - Thổ";

    // Bảng tra cứu
    const table = {
        "Kim": {
            "Sinh địa": ["Tỵ"],
            "Vượng địa": ["Dậu"],
            "Bại địa": ["Ngọ"],
            "Tuyệt địa": ["Dần"]
        },
        "Mộc": {
            "Sinh địa": ["Hợi"],
            "Vượng địa": ["Mão"],
            "Bại địa": ["Tý"],
            "Tuyệt địa": ["Thân"]
        },
        "Hỏa": {
            "Sinh địa": ["Dần"],
            "Vượng địa": ["Ngọ"],
            "Bại địa": ["Mão"],
            "Tuyệt địa": ["Hợi"]
        },
        "Thủy - Thổ": {
            "Sinh địa": ["Thân"],
            "Vượng địa": ["Tý"],
            "Bại địa": ["Dậu"],
            "Tuyệt địa": ["Tỵ"]
        }
    };

    // Tìm nhóm đúng
    const mapping = table[group];

    // Tìm trạng thái địa
    for (let key in mapping) {
        if (mapping[key].includes(cungVi)) {
            return key;
        }
    }
    return "Bình thường";
}

function LuanCungNoBoc() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const cungMenh = lasoData.lasoOb[0].chi;
    const hanhMenh = lasoData.lasoOb[0].hanh;
    const danhGia = danhGiaViTriCungMenh(hanhMenh, cungMenh);

    return {
        tenCung: 'Nô Bộc',
        chi: cungMenh,
        hanh: hanhMenh,
        danhGia: danhGia
    };
}
function LuanCungNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const vitriDiaSinhCungMenh = kiemTraDiaSinh(lasoData.hanhMenh, lasoData.lasoOb[0].chi);
    keyArr.push(`Vị trí địa sinh cung Nô Bộc tại ${vitriDiaSinhCungMenh}`);
    
    LuanCachCucSaoTuViNoBoc(keyArr);
    LuanCachCucSaoLiemTrinhNoBoc(keyArr);
    LuanCachCucSaoThienDongNoBoc(keyArr);
    LuanCachCucSaoVuKhucNoBoc(keyArr);
    LuanCachCucThaiDuongNoBoc(keyArr);
    LuanCachCucThienCoNoBoc(keyArr);
    LuanCacCachCucThienPhuNoBoc(keyArr);
    LuanCachCucThaiAmNoBoc(keyArr);
    LuanCachCucThamLangNoBoc(keyArr);
    LuanCachCucCuMonNoBoc(keyArr);
    LuanCachCucThienTuongNoBoc(keyArr);
    LuanCachCucThienLuongNoBoc(keyArr);
    LuanCachCucThatSatNoBoc(keyArr);
    LuanCachCucPhaQuanNoBoc(keyArr);
    LuanCachCucXuongKhucNoBoc(keyArr);
    LuanCachCucKhoiVietNoBoc(keyArr);
    LuanCachCucLocTonNoBoc(keyArr);
    LuanCachCucTaHuuNoBoc(keyArr);
    LuanCachCucKinhDuongDaLaNoBoc(keyArr);
    LuanCachCucHoaLinhNoBoc(keyArr);
    LuanCachCucKhongKiepNoBoc(keyArr);
    LuanCachCucTuHoaNoBoc(keyArr);
    LuanCachCucLucBaiTinhNoBoc(keyArr);
    LuanCacCachCucKhacNoBoc(keyArr);
}
function LuanCachCucSaoTuViNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Tỵ", "Ngọ", "Dần", "Thân"];
    const vuong = ["Thìn", "Tuất"];
    const dac = ["Sửu", "Mùi"];
    const binh = ["Hợi", "Tý", "Mão", "Dậu"];
    const maodau = ["Mão", "Dậu"];
    const gdk = ["G.", "Đ.", "K."];
    const giap_dinh_ky = ["Giáp", "Đinh", "Kỷ"];
    const nhamgiap = ["Nhâm", "Giáp"];
    const nh_giap = ["N.", "G."];
    const danthan = ["Dần", "Thân"];
    const tuphu = ["Tử Vi", "Thiên Phủ"];
    const tyhoi = ["Tỵ", "Hợi"];
    const vupha = ["Vũ Khúc", "Phá Quân"];
    const tupha = ["Tử Vi", "Phá Quân"];
    const tuvu = ["Tử Vi", "Vũ Khúc"];
    const tumo = ["Thìn", "Tuất", "Mùi", "Sửu"];
    const tyngo = ["Tý", "Ngọ"];
    const mvd = mieu.concat(vuong).concat(dac); // Tử vi thủ Nô Bộc ở miếu, vượng, đắc địa

    if (isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Nô Bộc ở ${mvd[i]}`);
        }
    }
    const mb = mieu.concat(binh);  // Tử vi Thủ Nô Bộc miếu và bình hòa

    for (let i = 0; i < mb.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mb[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Nô Bộc ở ${mb[i]}`);
        }
    }
    const vd = vuong.concat(dac); // Tử vi thủ Nô Bộc ở vượng, đắc địa
    for (let i = 0; i < vd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", vd[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Nô Bộc ở ${vd[i]}`);
        }
    }
    // Tử vi thủ Nô Bộc gặp cát tinh
    let cattinh = PhuVuTuong.concat(XuongKhuc).concat(KhoiViet).concat(TaHuu).concat(KhoaLocQuyen).concat(LongPhuong);


    if (isSaoToaThuTaiCung("Nô Bộc", "Tử Vi") && kiemTraCachCuc("Tử Vi", cattinh)) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc và hội chiếu các", cattinh.join(", "));
    }
    //Tử vi thủ Nô Bộc gặp sát tinh
    let hungtinh = lucsattinh;


    if (isSaoToaThuTaiCung("Nô Bộc", "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc và hội chiếu ", KhongKiep.join(", "));
        if (kiemTraCachCuc("Tử Vi", hungtinh)) {
            
            keyArr.push("Tử Vi tọa thủ cung Nô Bộc và hội chiếu các", hungtinh.join(", "));

        }
    }

    // Tử vi thủ Nô Bộc đồng cung với Tham Lang ở mão dậu


    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", maodau[i], "Tử Vi") && isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", Tham)) {
            
            keyArr.push(`Tử Vi đồng cung với Tham Lang tại Nô Bộc ở ${maodau[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", maodau[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
            
            keyArr.push(`Tử Vi tọa thủ cung Nô Bộc ở ${maodau[i]} gặp`, KhongKiep.join(", "));
        }
    }

    // Phú
    // Sinh năm Giáp Đinh Kỷ có Tử Vi tọa thủ cung Nô Bộc ở Ngọ không gặp Hình Kỵ
    for (let i = 0; i < giap_dinh_ky.length; i++) {

        if (lasoData.chiCan === gdk[i]) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Ngọ", "Tử Vi") && kiemTraCachCuc("Tử Vi", HinhKy) == false) {
                
                keyArr.push(`Người tuổi ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Nô Bộc ở Ngọ và không gặp`, HinhKy.join(", "));

            }
        }


    }
    // Sinh năm Nhâm Giáp Nam có Tử Vi tọa thủ cung Nô Bộc ở Hợi, Nữ có Tử Vi tọa thủ cung Nô Bộc ở Dần

    for (let i = 0; i < nhamgiap.length; i++) {
        if (lasoData.chiCan === nh_giap[i]) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam") {
                
                keyArr.push(`Quý Anh tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Nô Bộc ở Hợi`);
            }
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Dần", "Tử Vi") && lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Nô Bộc ở Dần`);
            }
        }
    }
    // Tử phủ đồng cung, Nô Bộc an tại dần thân, sinh năm giáp


    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", danthan[i], "Tử Vi", "Thiên Phủ")) {
            if (lasoData.chiCan === "G.") {
                
                keyArr.push(`Bạn sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
            }
        }

    }

    // Tử vi hoặc Thiên Phủ tọa Nô Bộc gặp Tả Hữu
    for (let i = 0; i < tuphu.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", tuphu[i]) && kiemTraCachCuc(tuphu[i], TaHuu)) {
            
            keyArr.push(`${tuphu[i]} tọa thủ cung Nô Bộc gặp`, TaHuu.join(", "));
        }

    }
    // Tử hoặc Phủ tọa thủ cung Nô Bộc đồng cung Kình
    for (let i = 0; i < tuphu.length; i++) {
        if (isHaiSaoDongCungTaiCung("Nô Bộc", tuphu[i], "Kình Dương")) {
            
            keyArr.push(`${tuphu[i]} tọa thủ cung Nô Bộc đồng cung Kình Dương`);
        }

    }
    // Tử vi tọa Nô Bộc đồng cung với Thiên Phủ gặp Tả HỮu
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", "Thiên Phủ") && kiemTraCachCuc("Tử Vi", TaHuu)) {

        
        keyArr.push("Tử Vi đồng cung với Thiên Phủ tại Nô Bộc gặp", TaHuu.join(", "));
    }
    // Tử vi tại Nô Bộc gặp cát tinh
    if (isSaoToaThuTaiCung("Nô Bộc", "Tử Vi") && kiemTraCachCuc("Tử Vi", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An))) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));

        if (kiemTraCachCuc("Tử Vi", KhongKiep.concat(Kinh)) == false) {
            keyArr.push("Tử Vi tọa thủ cung Nô Bộc gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
            
        }
    }


    // Tử vi tại Nô Bộc đồng cung với Thiên Tướng, phá toại tại cung thân hợp chiếu với các sao Kình
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", "Thiên Tướng") && isSaoToaThuTaiCung(lasoData.cungCu, "Phá Toái") && kiemTraCachCuc("Phá Toái", Kinh)) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc đồng cung Thiên Tướng, Phá Toái tại cung thân hợp chiếu với sao Kình Dương");
    }
    // Tử Sát đồng lâm Tỵ Hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Tử Vi", "Thất Sát")) {
            
            keyArr.push(`Tử Vi đồng cung với Thất Sát tại Nô Bộc ở ${tyhoi[i]}`);
        }
    }
    // Tử vi Thất Sát Hóa Quyền đồng cung tại Nô Bộc

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", "Thất Sát") && isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", "Hóa Quyền")) {
        
        keyArr.push("Tử Vi, Thất Sát, Hóa Quyền đồng cung tại Nô Bộc");
    }

    // Tử Vũ hoặc Tử Phá đồng cung tại Nô Bộc gặp Kình Đà
    for (let i = 0; i < vupha.length; i++) {
        if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", vupha[i]) && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Đà La"])) {
            
            keyArr.push(`Tử Vi đồng cung với ${vupha[i]} tại Nô Bộc gặp Kình Dương, Đà La`);
        }
    }
    // Tử vi hoặc Vũ Khúc thủ Nô Bộc gặp Sát tinh

    for (let i = 0; i < tuvu.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", tuvu[i]) && kiemTraCachCuc(tuvu[i], lucsattinh)) {
            
            keyArr.push(`${tuvu[i]} tọa thủ cung Nô Bộc gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
    }
    // Tử vi hoặc Phá Quân thủ Nô Bộc tại tứ mộ cung
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < tupha.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", tumo[i], tupha[j])) {
                
                keyArr.push(`${tupha[j]} tọa thủ cung Nô Bộc tại ${tumo[i]}`);
                if (kiemTraCachCuc(tupha[j], ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                    
                    keyArr.push(`${tupha[j]} tọa thủ cung Nô Bộc tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                }
                if (kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh))) {
                    
                    keyArr.push(`${tupha[j]} tọa thủ cung Nô Bộc tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                }
                //gặp Không Kiếp Kình mà không gặp Văn Xương Văn Khúc Long Phượng
                if (kiemTraCachCuc(tupha[j], TaHuu.concat(XuongKhuc).concat(LongPhuong)) === false && kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh)) === true) {
                    
                    keyArr.push(`${tupha[j]} tọa thủ cung Nô Bộc tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                }
            }
        }
    }

    // // Tử vi tại Nô Bộc gặp Kiếp, Đào Hồng Không tại Nô Bộc
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", Dao) && isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", Hong) && isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", Khong) && kiemTraCachCuc("Tử Vi", Kiep)) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
    }

    // Tử vi Tả Hữu đồng cung Nô Bộc
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", "Tả Phù") && isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", "Hữu Bật")) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc đồng cung Tả Phù, Hữu Bật");
    }

    //Tử vi tại Nô Bộc chi Tý Ngọ gặp Khoa Lộc Quyền
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyngo[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhoaLocQuyen)) {
            
            keyArr.push(`Tử Vi tọa thủ cung Nô Bộc ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
        }
    }
    // Tử vi tại mênh gặp Hóa Quyền, Hóa Lộc, Kình Đà
    if (isSaoToaThuTaiCung("Nô Bộc", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền", "Hóa Lộc", "Kình Dương", "Đà La"])) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
    }
    // Tử vi và Hóa Lộc đồng cung tại Nô Bộc hội chiếu Tả Phù Hữu Bật
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tử Vi", "Hóa Lộc") && kiemTraCachCuc("Tử Vi", TaHuu)) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
    }
    // Tử Phủ Hội Chiếu cung Nô Bộc
    if (isSaoToaThuTaiCung("Nô Bộc", "Tử Vi") && kiemTraCachCuc("Tử Vi", "Thiên Phủ")) {
        
        keyArr.push("Tử Vi tọa thủ cung Nô Bộc hội chiếu Thiên Phủ");
    }
}

function LuanCachCucSaoLiemTrinhNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Thìn", "Tuất"];
    const vuong = ["Tý", "Ngọ", "Dần", "Thân"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Tỵ", "Hợi", "Mão", "Dậu"];
    const phutuong = ["Thiên Phủ", "Thiên Tướng"];
    const tyhoi = ["Tỵ", "Hợi"];
    const maodau = ["Mão", "Dậu"];

    // Liêm Trinh Tọa thủ Nô Bộc
    if (isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
        
        keyArr.push("Liêm Trinh tọa thủ cung Nô Bộc");
    }
    // Liêm Trinh Miếu địa tọa thủ Nô Bộc gặp cát tinh
    // Liêm Trinh tọa thủ cung Nô Bộc gặp hung tinh, kỵ hình


    for (let i = 0; i < mieu.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mieu[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Nô Bộc ở ${mieu[i]}`);
        }
    }


    // Liêm Trinh Vượng địa tọa thủ Nô Bộc gặp cát tinh 
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Nô Bộc gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", vuong[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Nô Bộc ở ${vuong[i]}`);
        }
    }
    // Liêm Trinh Đắc địa tọa thủ Nô Bộc gặp cát tinh
    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Nô Bộc gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Nô Bộc ở ${dac[i]}`);
        }
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", dac[i], "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Nô Bộc", dac[i], "Liêm Trinh", "Văn Khúc")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
        }

    }



    // Liêm trinh hãm 
    for (let i = 0; i < ham.length; i++) {

        if (isSaoToaThuTaiCung("Nô Bộc", ham[i], "Liêm Trinh")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${ham[i]}`);
        }

        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }

        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Nô Bộc ở ${ham[i]}`);
        }
    }
    // Liêm trinh Tỵ Hợi đồng cung với Hoá Kỵ
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Liêm Trinh", "Hóa Kỵ")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            if (kiemTraCachCuc("Liêm Trinh", [XuongKhuc]) && lasoData.canNam === "B.") {
                
                keyArr.push(`Tuổi Bính Liêm Trinh tọa thủ cung Nô Bộc ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
            }
        }
    }

    // Liêm Trinh toạ thủ tại Mão Dậu gặp Hoả Linh hội họp
    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", maodau[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HoaLinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Nô Bộc ở ${maodau[i]} gặp`, HoaLinh.join(", "));
        }
    }
    // Phú
    // Liêm Trinh tọa thủ gặp tứ sát Kình Đà Hỏa Linh 
    if (isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Hỏa Linh"])) {
        
        keyArr.push("Liêm Trinh tọa thủ cung Nô Bộc gặp tứ sát Kình Đà Hỏa Linh");
        if (kiemTraCachCuc("Liêm Trinh", ["Bạch Hổ"])) {
            
            keyArr.push("Liêm Trinh tọa thủ cung Nô Bộc gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
        }
    }

}

function LuanCachCucSaoThienDongNoBoc(keyArr) {
    const MVD = ["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"];
    const HD = ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"];
    const tyhoi = ["Tỵ", "Hợi"];
    const dinh_canh = ["Đ.", "C."];
    const dinhcanh = ["Đinh", "Canh"];
    const tuatngo = ["Tuất", "Ngọ"];
    const DanThan = ["Dần", "Thân"];
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    //Thiên Đồng toạ thủ cung Nô Bộc
    if (isSaoToaThuTaiCung("Nô Bộc", "Thiên Đồng")) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc");
    }
    // Thiên Đồng miếu vượng địa
    for (let i = 0; i < MVD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", MVD[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + MVD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + MVD[i] + " gặp", HinhKy.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Nô Bộc ở " + MVD[i]);
            }

        }

    }
    // Thiên đồng dần thân thì Thiên Đồng Thiên Lương sẽ đồng cung
    for (let i = 0; i < DanThan.length; i++) {
        if (isHaiSaoDongCungTaiCung("Nô Bộc", DanThan[i], "Thiên Đồng", "Thiên Lương")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc đồng cung Thiên Lương ở " + DanThan[i]);
            if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Linh", "Hóa Kỵ"])) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Ngọ", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc", "Thiên Riêu", "Tang Môn"]) && lasoData.gioitinh === "Nữ") {
        
        keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Nô Bộc ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Thiên Đồng", "Thiên Việt")) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc đồng cung Thiên Việt");
        if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Tinh", "Linh Tinh", "Hóa Kỵ"])) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Tinh, Linh Tinh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", HD[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + HD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + HD[i] + " gặp", HinhKy.join(", "));
            }
        }
    }
    for (let i = 0; i < tuatngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tuatngo[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + tuatngo[i]);
        }
    }
    // Thiên đồng tại tỵ hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyhoi[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Nô Bộc ở " + tyhoi[i]);
            if (lasoData.canNam === dinh_canh[i]) {
                
                keyArr.push("Người tuổi " + dinhcanh[i] + " có Thiên Đồng tọa thủ cung Nô Bộc ở " + tyhoi[i]);
            }
            if (lasoData.gioitinh === "Nam" && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push("Quý Anh có Thiên Đồng tọa thủ cung Nô Bộc ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
        }
    }
}

function LuanCachCucSaoVuKhucNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const vuong = ["Tý", "Ngọ", "Dần", "Thân"];
    const dac = ["Mão", "Dậu"];
    const ham = ["Tỵ", "Hợi"];
    const mvd = mieu.concat(vuong).concat(dac);
    const TuPhuTuongTham = ["Tử Vi", "Thiên Phủ", "Thiên Tướng", "Tham Lang"];
    const cattinh = ["Hóa Khoa", "Hóa Lộc", "Hóa Quyền", "Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Tử Vi", "Thiên Phủ", "Thiên Tướng", "Tham Lang"];

    const suumui = ["Sửu", "Mùi"];
    gkn = ["G.", "K.", "N."];
    giap_ky_nham = ["Giáp", "Kỷ", "Nhâm"];
    danthan = ["Dần", "Thân"];

    // Vũ Khúc tọa thủ cung Nô Bộc
    if (isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Nô Bộc");
    }

    for (let i = 0; i < mvd.length; i++) {
        // Vũ Khúc miếu vượng địa tọa thủ Nô Bộc gặp cát tinh
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", cattinh)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
        }
        // Vũ Khúc tọa thủ cung Nô Bộc gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", HinhKy)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", mvd[i], "Vũ Khúc", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Nô Bộc", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Vũ Khúc") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Nô Bộc", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]} đồng cung Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Nô Bộc", mvd[i], "Vũ Khúc", KhoiViet)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", MaLoc) && isHaiSaoDongCungTaiCungChi("Nô Bộc", mvd[i], "Vũ Khúc", MaLoc) === false) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${mvd[i]} gặp`, MaLoc.join(", "));

        }

    }

    for (let i = 0; i < suumui.length; i++) {
        // Vũ Khúc tọa thủ cung Nô Bộc ở Sửu, Mùi 
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", suumui[i], "Vũ Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${suumui[i]}`);
        }
    }

    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Mão", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Nô Bộc ở Mão");

    }
    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Dậu", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Nô Bộc ở Dậu");
    }
    // Vũ Khúc hãm địa tọa thủ Nô Bộc
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Vũ Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]}`);
            if (kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Vũ Khúc", HinhKy)) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            }
            // gặp cát tinh
            if (kiemTraCachCuc("Vũ Khúc", cattinh)) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", ham[i], "Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} đồng cung Phá Quân`);
            }
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} gặp Phá Quân`);
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", ham[i], "Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} đồng cung Phá Quân`);

                if (kiemTraCachCuc("Vũ Khúc", XuongKhuc)) {
                    
                    keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                }
            }

            if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", Kinh.concat(Da).concat("Quả Tú"))) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} gặp Kình Đà Quả Tú`);

            }
            if (kiemTraCachCuc("Vũ Khúc", Kinh.concat("Kiếp Sát"))) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
            }
        }
    }
    // Vũ Phá đồng cung tại Hợi gặp Thái Âm , gặp Tham Lang mà không phải là Giáp Kỉ Nhâm thì khổ vô cùng
    if (lasoData.canNam !== "G." || lasoData.canNam !== "N." || lasoData.canNam !== "K.") {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Hợi", "Vũ Khúc", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Nô Bộc", "Hợi", "Thái Âm", "Tham Lang")) {
            
            keyArr.push("Vũ Khúc tọa thủ cung Nô Bộc ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");

        }
    }

    for (let i = 0; i < gkn.length; i++) {
        if (lasoData.canNam === gkn[i] && isHaiSaoDongCungTaiCungChi("Nô Bộc", "Hợi", "Vũ Khúc", "Phá Quân ") && isHaiSaoDongCungTaiCung("Nô Bộc", "Vũ Khúc", "Hỏa Tinh")) {
            
            keyArr.push(`Người tuổi ${giap_ky_nham[i]}  có Vũ Khúc tọa thủ cung Nô Bộc ở Hợi đồng cung Phá Quân và Hỏa Tinh`);

        }
    }

    // Vũ Khúc Tham Lang đồng cung
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Vũ Khúc", "Tham Lang")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Nô Bộc đồng cung Tham Lang");

    }
    // Tại sủu mùi, vũ tham đồng cung và đồng cung kiếp sát
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", suumui[i], "Vũ Khúc", "Tham Lang") && isHaiSaoDongCungTaiCungChi("Nô Bộc", suumui[i], "Vũ Khúc", "Kiếp Sát")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", danthan[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", KhoaLocQuyen)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Nô Bộc ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
        }
    }
}

function LuanCachCucThaiDuongNoBoc(keyArr) {
    const mieu = ["Tỵ", "Ngọ"];
    const vuong = ["Dần", "Mão", "Thìn"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Thân", "Dậu", "Tuất", "Hợi", "Tý"];
    const mvd = mieu.concat(vuong).concat(dac);
    const daohonghy = ["Đào Hoa", "Hồng Loan", "Thiên Hỷ"];
    const kinhdakhongkiephinhrieu = ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Thiên Riêu", "Thiên Hình"];
    const hoity = ["Tý", "Hợi"];
    const than_tuat_ty = ["Thân", "Tuất", "Tý"];
    const canhtannhamky = ["C.", "T.", "N.", "K."];

    const binhdinh = ["B.", "Đ."];
    const CanhTanNhamKy = ["Canh", "Tân", "Nhâm", "Kỷ"];
    const BinhDinh = ["Bính", "Đinh"];
    const muithan = ["Mùi", "Thân"];
    const XuongKhuc = ["Văn Xương", "Văn Khúc"];
    const ThaiToa = ["Tam Thai", "Bát Tọa"];
    const KhoiHong = ["Thiên Khôi", "Đào Hồng"];
    const suumui = ["Sửu", "Mùi"];
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    if (isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
        
        keyArr.push("Thái Dương tọa thủ cung Nô Bộc");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + mvd[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                
                keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));

            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thái Dương tọa thủ cung Nô Bộc ở " + mvd[i]);
            }

        }
    }

    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac[i], "Thái Dương") && isHaiSaoDongCungTaiCung("Nô Bộc", "Thái Dương", "Hóa Kỵ") && kiemTraCachCuc("Thái Dương", kinhdakhongkiephinhrieu) === false) {
            
            keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
        }
    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + ham[i]);
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                
                keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }

        }
    }


    for (let i = 0; i < hoity.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", hoity[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + hoity[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc)) {
                
                keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));

            }
        }

    }

    for (let i = 0; i < than_tuat_ty.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", than_tuat_ty[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + than_tuat_ty[i]);

        }
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Thái Dương", "Thiên Hình")) {
        
        keyArr.push("Thái Dương tọa thủ cung Nô Bộc đồng cung Thiên Hình");

    }

    for (let i = 0; i < canhtannhamky.length; i++) {
        if (lasoData.canNam === canhtannhamky[i] && isSaoToaThuTaiCungVaChi("Nô Bộc", "Ngọ", "Thái Dương")) {
            
            keyArr.push("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Nô Bộc ở Ngọ");
        }
    }
    for (let i = 0; i < binhdinh.length; i++) {
        if (lasoData.canNam === binhdinh[i] && isHaiSaoDongCungTaiCungChi("Nô Bộc", "Tý", "Thái Dương")) {
            
            keyArr.push("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Nô Bộc ở Tý");
        }
    }
    for (let i = 0; i < muithan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", muithan[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + muithan[i]);
        }
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Thái Dương", "Thái Âm")) {
        
        keyArr.push("Thái Dương tọa thủ cung Nô Bộc đồng cung Thái Âm");

    }

    if (lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Tài Bạch", "Mùi", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Quan Lộc", "Mùi", "Thái Dương", "Thái Âm")) {

        
        keyArr.push("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Nô Bộc tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Tỵ") && isSaoToaThuTaiChi("Thái Âm", "Dậu")) {

        
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Nô Bộc tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Tài Bạch", "Sửu", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Quan Lộc", "Sửu", "Thái Dương", "Thái Âm")) {

        
        keyArr.push("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Nô Bộc tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {

        
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Nô Bộc tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {
        
        keyArr.push("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Nô Bộc tại Sửu");
    }
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc("Thái Dương", ["Thái Âm"])) {
        
        keyArr.push("Cung Nô Bộc Vô Chính Diệu gặp Thái Dương, Thái Âm");
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", suumui[i], "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", XuongKhuc.concat(KhoiHong))) {
            
            keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
        }
    }

    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Sửu", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", KhoaLocQuyen)) {
        
        keyArr.push("Thái Dương tọa thủ cung Nô Bộc ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
    }
}

function LuanCachCucThienCoNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Thìn", "Tuất", "Mão", "Dậu"];
    const vuong = ["Tỵ", "Thân"];
    const dac = ["Tý", "Ngọ", "Sửu", "Mùi"];
    const ham = ["Dần", "Hợi"];
    const mvd = mieu.concat(vuong).concat(dac);
    const LocHinhYQuangQuy = ["Hóa Lộc", "Thiên Hình", "Thiên Y", "Ân Quang", "Thiên Quý"];
    const maodau = ["Mão", "Dậu"];
    const at_tan_ky_binh = ["Ất", "Tân", "Kỷ", "Bính"];
    const atkb = ["A.", "T.", "K.", "B."];
    const abd = ["A.", "B.", "D."];
    const at_binh_dinh = ["Ất", "Bính", "Đinh"];
    const tyngo = ["Tý", "Ngọ"];
    const thintuat = ["Thìn", "Tuất"];
    const kinhdahoalinhtuong = ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Thiên Tướng"];
    const nguyetdongluong = ["Thái Âm", "Thiên Đồng", "Thiên Lương"];


    if(isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ")) {
        
        keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc");
    }

    // Thiên Cơ Miếu Vượng Địa
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Thiên Cơ")) {
            
            keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + mvd[i]);
            if (kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(LocHinhYQuangQuy))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(Linh).concat(Hinh))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Cơ tọa thủ cung Nô Bộc ở " + mvd[i]);
            }
        }
    }
    // Thiên Cơ Nô Bộc nam Thìn Tuất
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", thintuat[i], "Thiên Cơ") && lasoData.gioitinh === "Nam") {
            
            keyArr.push(`Quý Anh có Thiên Cơ tọa thủ cung Nô Bộc ở ${thintuat[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", thintuat[i], "Thiên Cơ") && isHaiSaoDongCungTaiCungChi("Nô Bộc", thintuat[i], "Thiên Cơ", "Thiên Lương")) {
            
            keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Nô Bộc ở ${thintuat[i]}`);
            if (kiemTraDiaSinh("Thiên Cơ", kinhdahoalinhtuong)) {
                
                keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Nô Bộc ở ${thintuat[i]} gặp các sao Kình Đà Hỏa Linh Tướng`);
            }
        }

    }


    //Thiên Cơ Mão Dậu
    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", maodau[i], "Thiên Cơ")) {

            for (let j = 0; j < at_tan_ky_binh.length; j++) {
                if (lasoData.canNam === atkb[j] && kiemTraCachCuc("Thiên Cơ", SongHao)) {

                    
                    keyArr.push(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Nô Bộc ở ${maodau[i]} gặp Song Hao`);
                }

            }
        }
    }
    // Thiên Cơ Tý Ngọ
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyngo[i], "Thiên Cơ")) {
            for (let j = 0; j < at_binh_dinh.length; j++) {
                if (lasoData.canNam === abd[j] && kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                    
                    keyArr.push(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Nô Bộc ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                }

            }
        }

    }
    // Thiên Cơ Hãm địa
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Thiên Cơ")) {
            
            keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + ham[i]);
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
        }
    }
    // Cơ Nguyệt Đồng Lương
    if (isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ") && kiemTraCachCuc("Thiên Cơ", nguyetdongluong)) {
        
        keyArr.push("Thiên Cơ tọa thủ cung Nô Bộc gặp Thiên Đồng, Thiên Lương, Thái Âm");
    }
}
function LuanCacCachCucThienPhuNoBoc(keyArr) {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Dần", "Thân", "Tý", "Ngọ"];
    const vuong = ["Thìn", "Tuất"];
    const dac = ["Tỵ", "Hợi", "Mùi"];
    const binhhoa = ["Mão", "Dậu", "Sửu"];
    const giapky = ["Giáp", "Kỷ"];
    const gk = ["G.", "K."];
    const cn = ["C.", "N."];
    const canhnham = ["Canh", "Nham"];
    const ngotuat = ["Ngọ", "Tuất"];
    const mvd = mieu.concat(vuong).concat(dac);
    const TuTuongTham = ["Tử Vi", "Thiên Tướng", "Tham Lang"];

    if (isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ")) {
        
        keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc");

        if (kiemTraCachCuc("Thiên Phủ", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
        }
        if (kiemTraCachCuc("Thiến Phủ", lucsattinh)) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc gặp các sao Sát tinh: ", lucsattinh.join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }

    }
    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Tuất", "Thiên Phủ")) {
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        for (let i = 0; i < gk.length; i++) {
            if (lasoData.canNam === gk[i] && kiemTraCachCuc("Thiên Phủ", lucsattinh) === false) {
                
                keyArr.push(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Nô Bộc ở Tuất không gặp Sát tinh`);

            }
        }
    }
    for (let i = 0; i < canhnham.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Tý", "Thiên Phủ", "Vũ Khúc")) {
            
            keyArr.push(`Thiên Phủ tọa thủ cung Nô Bộc ở Tý đồng cung Vũ Khúc`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Nô Bộc ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
        }
    }

    for (let i = 0; i < ngotuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ngotuat[i], "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", "Thiên Tướng")) {
            
            keyArr.push(`Thiên Phủ tọa thủ cung Nô Bộc ở ${ngotuat[i]} gặp Thiên Tướng`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Nô Bộc ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat("Thiên Tướng").join(", "));
            }
            if (kiemTraCachCuc("Thiên Phủ", "Thiên Tướng, Thiên Lương")) {
                
                keyArr.push(`Thiên Phủ tọa thủ cung Nô Bộc ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
            }

        }
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", TaHuu.concat(XuongKhuc))) {
        
        keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc gặp các sao Tả Hữu, Xương Khúc");
        if (kiemTraCachCuc("Thiên Phủ", "Lộc Tồn")) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Nô Bộc gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
        }

    }

}

function LuanCachCucThaiAmNoBoc(keyArr) {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Dậu", "Tuất", "Hợi"];
    const vuong = ["Thân", "Tý"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const daohonghy = ["Đào Hoa", "Hồng Loan", "Thiên Hỷ"];
    const maoty = ["Mão", "Tý"];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Nô Bộc", "Thái Âm")) {
        
        keyArr.push("Thái Âm tọa thủ cung Nô Bộc");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Thái Âm")) {
            
            keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", daohonghy)) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }

        }
    }
    for (let i = 0; i < dac.length; i++) {

        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", dac[i], "Thái Âm", "Hoá Kỵ") && kiemTraCachCuc("Thái Âm", lucsattinh) === false) {
            
            keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Thái Âm")) {
            
            keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${ham[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", Kinh.concat(Da))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
            }
        }
    }


    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Thái Âm", "Thiên Hình")) {
        
        keyArr.push("Thái Âm tọa thủ cung Nô Bộc đồng cung Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm")) {
        
        keyArr.push(`Thái Âm tọa thủ cung Phu Thê`);
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Thái Âm") && isHaiSaoDongCungTaiCung("Nô Bộc", "Thái Âm", "Vũ Khúc") && isHaiSaoDongCungTaiCung("Nô Bộc", "Thái Âm", "Lộc Tồn")) {
        
        keyArr.push("Thái Âm tọa thủ cung Nô Bộc đồng cung Vũ Khúc, Lộc Tồn");
        if (kiemTraCachCuc("Thái Âm", TaHuu)) {
            
            keyArr.push("Thái Âm tọa thủ cung Nô Bộc đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
        }
    }
}
function LuanCachCucThamLangNoBoc(keyArr) {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Sửu", "Mùi"];
    const vuong = ["Thìn", "Tuất"];
    const dac = ["Dần", "Thân"];
    const ham = ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const suumui = ["Sửu", "Mùi"];
    const tusinh = ["Dần", "Tỵ", "Thân", "Hợi"];
    const mk = ["M.", "K."];
    const mauky = ["Mậu", "Kỷ"];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
        
        keyArr.push("Tham Lang tọa thủ cung Nô Bộc");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Tham Lang")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${mvd[i]}`);

            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            for (let j = 0; j < mauky.length; j++) {
                if (kiemTraCachCuc("Tham Lang", HoaLinh) && lasoData.canNam === mk[j]) {
                    
                    keyArr.push("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Nô Bộc ở " + mvd[i] + " gặp các sao: ", HoaLinh.join(", "));
                }
            }
        }

    }

    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCung("Nô Bộc", vuong[i], "Tham Lang", "Hoá Kỵ") && kiemTraCachCuc("Tham Lang", lucsattinh) === false) {
            
            keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Tham Lang")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${ham[i]}`);
            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", lucsattinh)) {
                
                keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (isHaiSaoDongCungTaiCung("Nô Bộc", ham[i], "Tham Lang", "Thiên Riêu")) {
                
                keyArr.push(`Tham Lang đồng cung Thiên Riêu tại cung Nô Bộc ở ${ham[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCung("Nô Bộc", tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push(`Tham Lang đồng cung Vũ Khúc tại cung Nô Bộc ở ${tumo[i]}`);
        }
        if (isHaiSaoDongCungTaiCung(lasoData.cungCu, tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push(`Tham Lang đồng cung tại ${lasoData.cungCu} ở ${tumo[i]}s`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hỏa Tinh", "Linh Tinh"])) {
            
            keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", suumui[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) === true && kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu)) === false) {
            
            keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) && kiemTraCachCuc("Tham Lang", lucsattinh) && kiemTraCachCuc("Tham Lang", "Hóa Kỵ")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Nô Bộc ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
        }
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Tham Lang", "Liêm Trinh")) {
        
        keyArr.push("Tham Lang tọa thủ cung Nô Bộc đồng cung Liêm Trinh");

    }

    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Hợi", "Tham Lang", "Liêm Trinh") && kiemTraCachCuc("Tham Lang", Kinh.concat(Da).concat("Thiên Hư, Thiên Không, Địa Không, Địa Kiếp"))) {
        
        keyArr.push("Tham Lang tọa thủ cung Nô Bộc ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");

    }

}
function LuanCachCucCuMonNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Mão", "Dậu"];
    const vuong = ["Tý", "Ngọ", "Dần"];
    const dac = ["Thân", "Hợi"];
    const ham = ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"];
    const mvd = mieu.concat(vuong).concat(dac);
    const KhoaTueHinh = ["Hóa Khoa", "Thái Tuế", "Thiên Hình"];
    const thintuat = ["Thìn", "Tuất"];
    const dinhcanh = ["Đinh", "Canh"];
    const dc = ["Đ.", "C."];
    const quytan = ["Quý", "Tân"];
    const qt = ["Q.", "T."];
    const suumui = ["Sửu", "Mùi"];
    const ab = ["Â.", "B."];
    const atbinh = ["Ất", "Bính"];
    const danthan = ["Dần", "Thân"];
    const attankybinh = ["Ất", "Tân", "Kỷ", "Bính"];
    const atkb = ["Ấ.", "T.", "K.", "B."];
    const maodau = ["Mão", "Dậu"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const binhtan = ["Bính", "Tân"];
    const bt = ["B.", "T."];
    const tyhoi = ["Tý", "Hợi"];
    const tyngo = ["Tý", "Ngọ"];
    const TueHoPhu = ["Thái Tuế", "Bạch Hổ", "Quan Phù"];

    if (isSaoToaThuTaiCung("Nô Bộc", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", mvd[i], "Cự Môn")) {
            
            keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
            }

            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Nô Bộc", mvd[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Cự Môn")) {

            
            keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", KhoaTueHinh.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Nô Bộc", ham[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Hóa Lộc, Thái Tuế"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Cự Môn", ["Thiên Hư", "Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp`);
            }



        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        for (let j = 0; j < dinhcanh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", thintuat[i], "Cự Môn") && lasoData.canNam === dc[j]) {
                
                keyArr.push(`Người tuổi ${dinhcanh[j]} có Cự Môn tọa thủ cung Nô Bộc ở ${thintuat[i]}`);
            }
        }
        for (let j = 0; j < quytan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", thintuat[i], "Cự Môn") && lasoData.canNam === qt[j]) {
                
                keyArr.push(`Người tuổi ${quytan[j]} có Cự Môn tọa thủ cung Nô Bộc ở ${thintuat[i]}`);
            }
        }

    }
    for (let i = 0; i < suumui.length; i++) {
        for (let j = 0; j < atbinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", suumui[i], "Cự Môn") && lasoData.canNam === ab[j]) {
                
                keyArr.push(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Nô Bộc ở ${suumui[i]}`);
            }
        }


    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Cự Môn", "Hóa Kỵ")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc đồng cung Hoá Kỵ");
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc đồng cung Thái Dương");
    }
    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Dần", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc ở Dần đồng cung Thái Dương");
    }

    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Thân", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc ở Thân đồng cung Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Thân", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc ở Thân gặp Thái Dương, Huynh Đệ có Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Dần", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc ở Dần gặp Thái Dương, Huynh Đệ có Thái Dương");

    }
    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCung("Huynh Đệ", "Thái Dương", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Huynh Đệ đồng cung Thái Dương xung chiếu cung Nô Bộc ở Dần");

    }
    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", danthan[i], "Cự Môn", "Thái Dương") && kiemTraCachCuc("Cự Môn", "Hóa Lộc")) {
            
            keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Dần", "Thiên Cơ", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Nô Bộc ở Dần đồng cung Thiên Cơ");
    }



    for (let i = 0; i < attankybinh.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", maodau[j], "Cự Môn", "Thiên Cơ") && lasoData.canNam === atkb[i]) {
                
                keyArr.push(`Người tuổi ${attankybinh[i]} có Cự Môn đồng cung Thiên Cơ tại cung Nô Bộc ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", maodau[j], "Cự Môn", "Thiên Cơ")) {
                
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Nô Bộc ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", maodau[j], "Cự Môn", "Thiên Cơ") && kiemTraCachCuc("Cự Môn", ["Đại Hao", "Tiểu Hao"])) {
                
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Nô Bộc ở ${maodau[j]} gặp Đại Hao, Tiểu Hao`);
            }
            if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCungChi("Nô Bộc", maodau[j], "Cự Môn", "Thiên Cơ")) {
                
                keyArr.push('Quý chị có Cự Môn đồng cung Thiên Cơ tại cung Nô Bộc ở', maodau[j].join);
            }
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < binhtan.length; j++) {
            if (isSaoToaThuTaiCung("Nô Bộc", tumo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Kình Dương", "Hoá Kỵ"]) && lasoData.canNam !== bt[j]) {
                
                keyArr.push(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Nô Bộc ở ${tumo[i]} gặp Kình Dương, Hoá Kỵ`);

            }

        }
        for (let i = 0; i < tyhoi.length; i++) {
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn đồng cung Lộc Tồn tại cung Nô Bộc ở ${tyhoi[i]}`);
            }
        }

        for (let i = 0; i < tyngo.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyngo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", KhoaLocQuyen)) {
                
                keyArr.push(`Cự Môn tọa thủ cung Nô Bộc ở ${tyngo[i]} gặp Khoa Lộc Quyền`);

            }
        }
    }

}
function LuanCachCucThienTuongNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

    } catch (e) { lasoData = {}; }

    const mieu = ["Dần", "Thân"];
    const vuong = ["Thìn", "Tuất", "Tý", "Ngọ"];
    const dac = ["Sửu", "Mùi", "Tỵ", "Hợi"];
    const ham = ["Mão", "Dậu"];
    const TuPhuVu = ["Tử Vi", "Thiên Phủ", "Vũ Khúc"];
    const thintuat = ["Thìn", "Tuất"];
    const tyngo = ["Tý", "Ngọ"];
    const DaoHongHoaKhuc = ["Đào Hoa", "Hồng Loan", "Hoa Cái", "Vũ Khúc"];

    const mvd = mieu.concat(vuong).concat(dac);

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Nô Bộc ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc))) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));


        }
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", lucsattinh)) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", vuong[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Kình Dương", "Đà La"])) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Nô Bộc ở ${vuong[i]} gặp Kình Dương, Đà La`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", ham[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Nô Bộc ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCung("Nô Bộc", ham[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Hóa Lộc", "Thái Tuế"])) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Nô Bộc ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
        }
        if (lasoData.gioitinh === "Nữ" && isSaoToaThuTaiCung("Nô Bộc", ham[i], "Thiên Tướng")) {
            
            keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Nô Bộc ở ${ham[i]}`);
        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", thintuat[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Nô Bộc ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < tyngo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyngo[i], "Thiên Tướng", "Liêm Trinh") && kiemTraCachCuc("Thiên Tướng", "Kình Dương")) {
            
            keyArr.push(`Thiên Tướng đồng cung Liêm Trinh tại cung Nô Bộc ở ${tyngo[i]} gặp Kình Dương`);
        }
    }

    if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCung("Nô Bộc", "Thiên Tướng", "Hồng Loan")) {
        
        keyArr.push("Quý chị có Thiên Tướng đồng cung Hồng Loan tại cung Nô Bộc");
    }
    if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Thiên Tướng", DaoHongHoaKhuc)) {
        
        keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Nô Bộc gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
    }
}

function LuanCachCucThienLuongNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Ngọ", "Thìn", "Tuất"];
    const vuong = ["Tý", "Mão", "Dần", "Thân"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Hợi", "Dậu", "Tỵ"];
    const mvd = mieu.concat(vuong).concat(dac);
    const tyhoi = ["Tỵ", "Hợi"];
    const dau = ["Dậu"];
    const thintuat = ["Thìn", "Tuất"];
    const dinhkyquy = ["Đinh", "Kỷ", "Quý"];
    const dkq = ["Đ.", "K.", "Q."];
    const tysuudanmaothintyngo = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];

    if (isSaoToaThuTaiCung("Nô Bộc", "Thiên Lương")) {
        
        keyArr.push("Thiên Lương tọa thủ cung Nô Bộc");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thiên Lương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", KhoiViet.concat(XuongKhuc).concat("Thái Tuế"))) {
                
                keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", lucsattinh.concat(HoaLinh))) {
                
                keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));

            }
        }

    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", ham[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${ham[i]}`);
        }
    }

    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", thintuat[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < dinhkyquy.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Ngọ", "Thiên Lương") && lasoData.canNam === dkq[i]) {
            
            keyArr.push("Người tuổi", dinhkyquy[i], "có Thiên Lương tọa thủ cung Nô Bộc ở Ngọ");

        }
    }
    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Dần", "Thiên Lương", "Thái Dương")) {
        
        keyArr.push("Thiên Lương đồng cung Thái Dương tại cung Nô Bộc ở Dần");
    }

    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Tý", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Xương", "Hoá Lộc"])) {
        
        keyArr.push("Thiên Lương tọa thủ cung Nô Bộc ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
    }
    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Ngọ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Khúc", "Hoá Lộc"])) {
        
        keyArr.push("Thiên Lương tọa thủ cung Nô Bộc ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
    }

    for (let i = 0; i < tysuudanmaothintyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tysuudanmaothintyngo[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Linh Tinh"])) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", vuong[i], "Thiên Lương", "Thiên Đồng")) {
            
            keyArr.push(`Thiên Lương đồng cung Thiên Đồng tại cung Nô Bộc ở ${vuong[i]}`);
        }
    }

    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCungChi("Huynh Đệ", "Thân", "Thiên Lương", "Thiên Đồng") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Thiên Cơ"])) {
        
        keyArr.push("Thiên Lương đồng cung Thiên Đồng ở Thân xung chiếu cung Nô Bộc ở Dần gặp Thái Âm, Thiên Cơ");
    }
    for (let i = 0; i < mieu.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", mieu[i], "Thiên Lương", "Văn Xương")) {
            
            keyArr.push(`Thiên Lương đồng cung Văn Xương tại cung Nô Bộc ở ${mieu[i]}`);
        }
    }
    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Tỵ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", lucsattinh.concat("Đại Hao, Tiểu Hao"))) {
        
        keyArr.push("Thiên Lương tọa thủ cung Nô Bộc ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Thiên Lương", "Thiên Mã")) {
            
            keyArr.push(`Thiên Lương đồng cung Thiên Mã tại cung Nô Bộc ở ${tyhoi[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyhoi[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thiên Mã"])) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Nô Bộc ở ${tyhoi[i]} gặp Thiên Mã`);
        }
    }

}
function LuanCachCucThatSatNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Dần", "Thân", "Tý", "Ngọ"];
    const vuong = ["Tỵ", "Hợi"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Mão", "Dậu", "Thìn", "Tuất"];
    const danthan = ["Dần", "Thân"];
    const gcdk = ["G.", "C.", "Đ.", "K."];
    const giapcanhdinhky = ["Giáp", "Canh", "Đinh", "Kỷ"];
    const tuphuxuongkhuckhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const makinh = ["Thiên Mã", "Kình Dương"];
    const at = ["Â.", "T."];
    const attan = ["Ất", "Tân"];
    const maodau = ["Mão", "Dậu"];
    const tahuulongphuongquangquy = ["Tả Phù", "Hữu Bật", "Long Trì", "Phượng Các", "Ân Quang", "Thiên Quý"];
    const batkhoamaanhong = ["Hữu Bật", "Hoá Khoa", "Thiên Mã", "Quốc Ấn", "Hồng Loan"];
    const suumui = ["Sửu", "Mùi"];
    const atky = ["Ất", "Kỷ"];
    const ak = ["A.", "K."];
    const td = ["T.", "Đ."];
    const tandinh = ["Tân", "Đinh"];
    const phatham = ["Phá Quân", "Tham Lang"];
    const bm = ["B.", "M."];
    const binhmau = ["Bính", "Mậu"];

    const mvd = mieu.concat(vuong).concat(dac);

    if (isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
        
        keyArr.push("Thất Sát tọa thủ cung Nô Bộc");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Thất Sát")) {
            
            keyArr.push(`Thất Sát tọa thủ cung Nô Bộc ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Nô Bộc ở ${mvd[i]}`);
            }

        }
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh))) {
            
            keyArr.push(`Thất Sát tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));

        }
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
            
            keyArr.push(`Thất Sát tọa thủ cung Nô Bộc ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", mvd[i], "Thất Sát", "Thiên Hình")) {
            
            keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Nô Bộc ở ${mvd[i]}`);
        }
    }

    for (let i = 0; i < giapcanhdinhky.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", danthan[j], "Thất Sát") && lasoData.canNam === gcdk[i]) {
                
                keyArr.push(`Người tuổi ${giapcanhdinhky[i]} có Thất Sát tọa thủ cung Nô Bộc ở ${danthan[j]}`);
            }

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", ham[i], "Thất Sát")) {
            
            keyArr.push(`Thất Sát tọa thủ cung Nô Bộc ở ${ham[i]}`);
            if (kiemTraCachCuc("Thất Sát", tahuulongphuongquangquy)) {
                
                keyArr.push(`Thất Sát tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
            }
            if (kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
                
                keyArr.push(`Thất Sát tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", ham[i], "Thất Sát", "Thiên Hình")) {
                
                keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Nô Bộc ở ${ham[i]}`);
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Nô Bộc ở ${ham[i]}`);
            }
        }
    }
    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", maodau[i], "Thất Sát") && lasoData.canNam === at[j]) {
                
                keyArr.push(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Nô Bộc ở ${maodau[i]}`);
            }
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Tỵ", "Thất Sát", "Tử Vi")) {
        
        keyArr.push("Thất Sát đồng cung Tử Vi tại cung Nô Bộc ở Tỵ");
        if (kiemTraCachCuc("Thất Sát", batkhoamaanhong)) {
            
            keyArr.push("Thất Sát đồng cung Tử Vi tại cung Nô Bộc ở Tỵ gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
        }
    }

    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", suumui[i], "Thất Sát", "Liêm Trinh")) {
            
            keyArr.push(`Thất Sát đồng cung Liêm Trinh tại cung Nô Bộc ở ${suumui[i]}`);
        }
        for (let j = 0; j < atky.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", suumui[i], "Thất Sát") && lasoData.canNam === ak[j]) {
                
                keyArr.push(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Nô Bộc ở ${suumui[i]}`);
            }
        }
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Phá Quân", "Tham Lang"])) {
        
        keyArr.push(`Thất Sát tọa thủ cung Nô Bộc gặp Phá Quân, Tham Lang`);
        for (let i = 0; i < td.length; i++) {
            if (lasoData.gioitinh === "Nữ" && lasoData.canNam === td[i]) {
                
                keyArr.push(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Nô Bộc gặp Phá Quân, Tham Lang`);
            }
        }

    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
        
        keyArr.push("Thất Sát tọa thủ cung Nô Bộc gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
    }

    for (let i = 0; i < binhmau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Ngọ", "Thất Sát", "Kình Dương") && lasoData.canNam === bm[i]) {
            
            keyArr.push(`Người tuổi ${binhmau[i]} có Thất Sát đồng cung Kình Dương tại cung Nô Bộc`);
        }
        if (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
            
            keyArr.push(`Thất Sát tọa thủ cung ${lasoData.cungCu} gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
        }

    }
}
function LuanCachCucPhaQuanNoBoc(keyArr) {
    let lasoData = {};

    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Tý", "Ngọ"];
    const vuong = ["Sửu ", "Mùi"];
    const dac = ["Thìn", "Tuất"];
    const ham = ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi "];
    const dinhkyquy = ["Đinh", "Kỷ", "Quý"];
    const dkq = ["Đ.", "K.", "Q."];
    const tuphuxuongkhuckhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const hokyhinhsonghao = ["Bạch Hổ", "Thiên Hình", "Hoá Kỵ", "Đại Hao", "Tiểu Hao"];
    const mvd = mieu.concat(vuong).concat(dac);
    const maodau = ["Mão", "Dậu"];
    const atq = ["Â.", "T.", "Q."];
    const attanquy = ["Ất", "Tân", "Quý"];
    const giapcanhdinhky = ["Giáp", "Canh", "Đinh", "Kỷ"];
    const gcdk = ["G.", "C.", "Đ.", "K."];
    const danthan = ["Dần", "Thân"];
    const tyhoi = ["Tỵ", "Hợi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];



    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${mvd[i]}`);

        } if (kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc) && isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (kiemTraCachCuc("Phá Quân", hokyhinhsonghao) && isSaoToaThuTaiCung("Nô Bộc", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
    }
    for (let i = 0; i < mieu.length; i++) {
        for (let j = 0; j < dinhkyquy.length; j++) {
            if (isSaoToaThuTaiCung("Nô Bộc", mieu[i], "Phá Quân") && lasoData.canNam === dkq[j]) {
                
                keyArr.push(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Nô Bộc ở ${mieu[i]}`);

            }

        }

    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", ham[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", hokyhinhsonghao)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", lucsattinh)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }


    }

    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attanquy.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", maodau[i], "Phá Quân") && lasoData.canNam === atq[j]) {
                
                keyArr.push(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Nô Bộc ở ${maodau[i]}`);
            }
        }
    }

    for (let i = 0; i < gcdk.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", danthan[j], "Phá Quân") && lasoData.canNam === gcdk[i]) {
                
                keyArr.push(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Nô Bộc ở ${danthan[j]}`);
            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyhoi[i], "Phá Quân") && lasoData.canNam === "Mậu") {
            
            keyArr.push(`Người tuổi Mậu có Phá Quân tọa thủ cung Nô Bộc ở ${tyhoi[i]}`);
        }
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Thiên Việt", "Đại Hao", "Tiểu Hao", "Hoả Tinh", "Thiên Hình"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Nô Bộc gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Linh Tinh", "Thiên Việt", "Thiên Hình"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Nô Bộc gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
    }

    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Ngọ", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Nô Bộc", "Ngọ", "Phá Quân", "Lộc Tồn") && kiemTraCachCuc("Phá Quân", ["Thiếu Dương"])) {
        
        keyArr.push("Phá Quân đồng cung Lộc Tồn tại cung Nô Bộc ở Ngọ và gặp Thiếu Dương");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tumo[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoá Lộc", "Thiên Hình"])) {
            
            keyArr.push(`Phá Quân tọa thủ cung Nô Bộc ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
        }
    }
}
function LuanCachCucXuongKhucNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"];
    const tuphukhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];

    const tyhoi = ["Tỵ", "Hợi"];
    const danmao = ["Dần", "Mão"];

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac_dia[i], XuongKhuc[j])) {
                
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(XuongKhuc[j], tuphukhoiviettahuukhoaquyenloc)) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Lương"])) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]} gặp Thiên Lương`);
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Cơ", "Hóa Lộc"])) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                }
                if (isHaiSaoDongCungTaiCung("Nô Bộc", dac_dia[i], XuongKhuc[j], "Hóa Lộc")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Hoá Lộc tại Nô Bộc ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Nô Bộc", dac_dia[i], XuongKhuc[j], "Vũ Khúc")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Vũ Khúc tại cung Nô Bộc ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Nô Bộc", dac_dia[i], XuongKhuc[j], "Tả Phù")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Tả Phù tại cung Nô Bộc ở ${dac_dia[i]}`);

                }
            }
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Văn Xương") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Khúc") || isSaoToaThuTaiCung("Phụ Mẫu", "Văn Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Xương")) {
        
        keyArr.push(`Văn Xương Văn Khúc giáp Nô Bộc`);
        if (isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Nô Bộc có Thái Dương giáp Văn Xương, Văn Khúc");
        }
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Văn Xương") && kiemTraCachCuc("Văn Xương", ["Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
        
        keyArr.push("Nô Bộc có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Văn Xương", "Thiên Khôi", "Thiên Việt"])) {
        
        keyArr.push("Nô Bộc có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyhoi[i], XuongKhuc[j]) && isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], XuongKhuc[j], "Liêm Trinh")) {
                
                keyArr.push(`${XuongKhuc[j]} đồng cung Liêm Trinh tại cung Nô Bộc ở ${tyhoi[i]}`);
            }
        }
    }

    for (let i = 0; i < danmao.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", danmao[i], XuongKhuc[j], "Phá Quân") && kiemTraCachCuc(XuongKhuc[j], "Kình Dương")) {
                
                keyArr.push(`${XuongKhuc[j]} đồng cung Phá Quân tại cung Nô Bộc ở ${danmao[i]} gặp Kình Dương`);

            }
        }
    }
}
function LuanCachCucKhoiVietNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuvutuongxuongkhuctahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const xuongkhuckhoatuetau = ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"];

    for (let i = 0; i < KhoiViet.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", KhoiViet[i])) {

            if (kiemTraCachCuc(KhoiViet[i], tuphuvutuongxuongkhuctahuukhoaquyenloc)) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Nô Bộc gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], lucsattinh)) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Nô Bộc gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Kỵ", "Thiên Hình"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Nô Bộc gặp Hóa Kỵ, Thiên Hình`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Nô Bộc gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);

            }
            if (kiemTraCachCuc(KhoiViet[i], ["Thiên Lương", "Thiên Cơ", "Hoá Lộc"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Nô Bộc gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Lộc"]) && kiemTraCachCuc(KhoiViet[i], lucsattinh) === false) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Nô Bộc gặp Hóa Lộc mà không gặp các sao Sát tinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Ngọ", "Tử Vi", KhoiViet[i])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Nô Bộc ở Ngọ đồng cung Tử Vi`);
            }

        }

    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Khôi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Việt") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Việt") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Khôi")) {
        
        keyArr.push(`Khôi Việt giáp Nô Bộc`);
        if (isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Nô Bộc có Thái Dương giáp Khôi Việt");
        }
        if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Lộc")) {
            
            keyArr.push("Nô Bộc có Hóa Lộc giáp Khôi Việt");
        }
    }
}
function LuanCachCucLocTonNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];
    const tuphuxuongkhuckhoivietma = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Thiên Mã"];
    const quangquyquanrieuy = ["Ân Quang", "Thiên Quý", "Quan Phù", "Thiên Y", "Thiên Riêu"];
    const khongkiephaokypha = ["Địa Không", "Địa Kiếp", "Đại Hao", "Tiểu Hao", "Hóa Kỵ", "Tuế Phá"];

    if (isSaoToaThuTaiCung("Nô Bộc", "Lộc Tồn")) {
        
        keyArr.push("Lộc Tồn toạ thủ cung Nô Bộc");

        if (kiemTraCachCuc("Lộc Tồn", tuphuxuongkhuckhoivietma)) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Nô Bộc gặp", tuphuxuongkhuckhoivietma.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", quangquyquanrieuy)) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Nô Bộc gặp", quangquyquanrieuy.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", khongkiephaokypha)) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Nô Bộc gặp", khongkiephaokypha.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", ["Phá Quân"])) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Nô Bộc gặp Phá Quân");

        }
        if (isHaiSaoDongCungTaiCung("Nô Bộc", "Lộc Tồn", "Hóa Lộc")) {
            
            keyArr.push("Lộc Tồn đồng cung Hoá Lộc tại cung Nô Bộc");
        }
        if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Nô Bộc", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Hóa Lộc")) {
            
            keyArr.push("Song Lộc hội chiếu tại cung Nô Bộc");

        }
        if (isHaiSaoDongCungTaiCung("Nô Bộc", "Lộc Tồn", "Thiên Mã")) {
            
            keyArr.push("Lộc Tồn đồng cung Thiên Mã tại cung Nô Bộc");
        }
        if (isSaoToaThuTaiCung("Nô Bộc", "Thiên Mã") && kiemTraCachCuc("Thiên Mã", "Lộc Tồn") && kiemTraCachCuc("Thiên Mã", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false || isSaoToaThuTaiCung("Nô Bộc", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Lộc Tồn", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false) {
            
            keyArr.push("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung Nô Bộc ở ${tyngo[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Huynh Đệ", tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung Huynh Đệ ở ${tyngo[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi(lasoData.cungCu, tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
        }
    }
}

function LuanCachCucTaHuuNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuxuongkhuckhoivietkhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const conguyetdongluonglongphuong = ["Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"];
    const suumui = ["Sửu", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const tyhoi = ["Tỵ", "Hợi"];
    const maodau = ["Mão", "Dậu"];

    for (let i = 0; i < TaHuu.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", TaHuu[i])) {

            if (kiemTraCachCuc(TaHuu[i], tuphuxuongkhuckhoivietkhoaquyenloc)) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Nô Bộc gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], conguyetdongluonglongphuong)) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Nô Bộc gặp`, conguyetdongluonglongphuong.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], lucsattinh)) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Nô Bộc gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], ["Kình Dương"])) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Nô Bộc gặp Kình Dương`);
            }
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", suumui[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc(KhoaLocQuyen)) {
            
            keyArr.push(`Tả Phù, Hữu Bật đồng cung Nô Bộc ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tumo[i], "Tả Phù") && isSaoToaThuTaiCungVaChi("Nô Bộc", tumo[i], "Hữu Bật") && kiemTraCachCuc("Tả Phù", KhoaLocQuyen.concat("Tử Vi", "Thiên Phủ"))) {
            
            keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Nô Bộc ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            if (kiemTraCachCuc("Tả Phù", ["Thiên Cơ", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Nô Bộc ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
            }
            if (kiemTraCachCuc("Tả Phù", ["Thất Sát", "Phá Quân", "Liêm Trinh"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Nô Bộc ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tumo[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc("Tả Phù", ["Văn Xương ", "Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật đồng cung tại Nô Bộc ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
            }

        }


    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Hữu Bật", "Thiên Tướng")) {
            
            keyArr.push(`Hữu Bật, Thiên Tướng đồng cung tại Nô Bộc ở ${tyhoi[i]}`);
        }
    }



    if (isSaoToaThuTaiCung("Phụ Mẫu", "Tả Phù") && isSaoToaThuTaiCung("Huynh Đệ", "Hữu Bật") || isSaoToaThuTaiCung("Phụ Mẫu", "Hữu Bật") && isSaoToaThuTaiCung("Huynh Đệ", "Tả Phù")) {
        
        keyArr.push(`Tả Phù Hữu Bật giáp Nô Bộc`);
        if (isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
            
            keyArr.push(`Nô Bộc có Tử Vi giáp Tả Phù Hữu Bật`);
        }
    }
}
function LuanCachCucKinhDuongDaLaNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", " Tuất", "Sửu", "Mùi"];
    const ham_dia = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const tymui = ["Tỵ", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];

    if (isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {

        if (kiemTraCachCuc("Kình Dương", ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
            
            keyArr.push("Kình Dương toạ thủ cung Nô Bộc gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
        }
        if (isHaiSaoDongCungTaiCung("Nô Bộc", "Kình Dương", "Cự Môn") && isHaiSaoDongCungTaiCung("Nô Bộc", "Kình Dương", "Liêm Trinh") && isHaiSaoDongCungTaiCung("Nô Bộc", "Kình Dương", "Hóa Kỵ")) {
            
            keyArr.push("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung tại Nô Bộc");
        }

    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac_dia[i], "Kình Dương")) {
            
            keyArr.push(`Kình Dương toạ thủ cung Nô Bộc ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham_dia[i], "Kình Dương")) {
            
            keyArr.push(`Kình Dương toạ thủ cung Nô Bộc ở ${ham_dia[i]}`);
        }
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Kình Dương", ["Thái Dương", "Thái Âm"])) {
        
        keyArr.push("Thái Dương, Thái Âm đồng cung tại Nô Bộc gặp Kình Dương");
    }

    for (let i = 0; i < tymui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tymui[i], "Thiên Phủ", "Tử Vi") && kiemTraCachCuc("Kình Dương", ["Thiên Phủ", "Tử Vi"])) {
            
            keyArr.push(`Thiên Phủ, Tử Vi đồng cung tại Nô Bộc ở ${tymui[i]} gặp Kình Dương`);
        }
    }

    if (kiemTraCachCuc("Kình Dương", ["Thiên Khôi", "Hóa Quyền", "Hóa Lộc", "Thiên Mã"]) && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
        
        keyArr.push("Kình Dương toạ thủ cung Nô Bộc gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
    }
    if (isHaiSaoDongCungTaiCungChi("Nô Bộc", "Ngọ", "Kình Dương", "Thái Âm") && isHaiSaoDongCungTaiCungChi("Nô Bộc", "Ngọ", "Kình Dương", "Thiên Đồng") && kiemTraCachCuc("Kình Dương", ["Địa Giải", "Phượng Các"])) {
        
        keyArr.push("Kình Dương, Thái Âm, Thiên Đồng đồng cung tại Nô Bộc ở Ngọ gặp Địa Giải, Phượng Các");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tumo[i], "Tham Lang", "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Nô Bộc", tumo[i], "Kình Dương", "Tham Lang")) {
            
            keyArr.push(`Tham Lang, Vũ Khúc, Kình Dương đồng cung tại Nô Bộc ở ${tumo[i]}`);

        }
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Hỏa Tinh", "Linh Tinh", "Đà La"])) {
        
        keyArr.push("Kình Dương toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Đà La");
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Địa Không", "Địa Kiếp", "Đà La"])) {
        
        keyArr.push("Kình Dương toạ thủ cung Nô Bộc gặp Địa Không, Địa Kiếp, Đà La");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Kình Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La") || isSaoToaThuTaiCung("Phụ Mẫu", "Đà La") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
        
        keyArr.push(`Kình Dương, Đà La giáp Nô Bộc`);
        if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Kỵ")) {
            
            keyArr.push(`Nô Bộc có Hóa Kỵ giáp Kình Dương, Đà La`);
        }

    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Kình Dương", "Lực Sỹ")) {
        
        keyArr.push("Kình Dương, Lực Sỹ đồng cung tại Nô Bộc");
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {

        if (kiemTraCachCuc("Đà La", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Đà La toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");

        }
        if (kiemTraCachCuc("Đà La", ["Hóa Kỵ", "Liêm Trinh", "Thiên Hình"])) {
            
            keyArr.push("Đà La toạ thủ cung Nô Bộc gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac_dia[i], "Đà La")) {
            
            keyArr.push(`Đà La toạ thủ cung Nô Bộc ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham_dia[i], "Đà La")) {
            
            keyArr.push(`Đà La toạ thủ cung Nô Bộc ở ${ham_dia[i]}`);
        }
    }
}

function LuanCachCucHoaLinhNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const dac_dia = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const ham_dia = ["Tý", "Sửu", "Dậu", "Hợi", "Tuất", "Mùi", "Thân"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];

    for (let i = 0; i < HoaLinh.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", HoaLinh[i])) {

            if (kiemTraCachCuc(HoaLinh[i], ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
                
                keyArr.push(`${HoaLinh[i]} toạ thủ cung Nô Bộc gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
            }
        }
    }

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac_dia[i], HoaLinh[j])) {
                
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham_dia[i], HoaLinh[j])) {
                
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Nô Bộc ở ${ham_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tumo[i], "Tham Lang", "Vũ Khúc") && kiemTraCachCuc(HoaLinh[j], ["Tham Lang", "Vũ Khúc"])) {
                
                keyArr.push(`Tham Lang, Vũ Khúc đồng cung Nô Bộc ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tumo[i], "Địa Kiếp", "Vũ Khúc")) {
                    
                    keyArr.push(`Địa Kiếp, Tham Lang, Vũ Khúc đồng cung Nô Bộc ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                }
            }
        }
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
        
        keyArr.push("Hỏa Tinh toạ thủ cung Nô Bộc gặp Linh Tinh ở Huynh Đệ");
        if (kiemTraCachCuc("Hỏa Tinh", ["Kình Dương"])) {
            
            keyArr.push("Hỏa Tinh toạ thủ cung Nô Bộc đối xung Linh Tinh và gặp Kình Dương");
        }
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
        
        keyArr.push("Linh Tinh toạ thủ cung Nô Bộc gặp Hỏa Tinh ở Huynh Đệ");
        if (kiemTraCachCuc("Linh Tinh", ["Kình Dương"])) {
            
            keyArr.push("Linh Tinh toạ thủ cung Nô Bộc đối xung Hỏa Tinh và gặp Kình Dương");
        }
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hỏa Tinh", "Linh Tinh")) {
        
        keyArr.push("Hỏa Tinh, Linh Tinh đồng cung tại Nô Bộc");
    }

    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Hợi", "Hỏa Tinh") && kiemTraCachCuc("Hỏa Tinh", ["Thiên Hình", "Tham Lang"])) {
        
        keyArr.push("Hỏa Tinh toạ thủ cung Nô Bộc ở Hợi gặp Thiên Hình, Tham Lang");
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Linh Tinh", "Thiên Mã") && kiemTraCachCuc("Linh Tinh", ["Kình Dương", "Đà La"])) {
        
        keyArr.push("Linh Tinh đồng cung với Thiên Mã tại Nô Bộc gặp Kình Dương, Đà La");
    }
}

function LuanCachCucKhongKiepNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const dac_dia = ["Dần", "Thân", "Tỵ", "Hợi"];
    const ham_dia = ["Tý", "Sửu", "Mão", "Thìn", "Ngọ", "Dậu", "Tuất", "Mùi"];
    const khongkiep = ["Địa Không", "Địa Kiếp"];
    const tyhoi = ["Tỵ", "Hợi"];
    const danthan = ["Dần", "Thân"];
    const tusinh = ["Dần", "Thân", "Tỵ", "Hợi"];
    const cunhatphukhockhach = ["Cự Môn", "Thái Dương", "Thiên Phủ", "Thiên Khốc", "Thiên Hư"];


    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", dac_dia[i], khongkiep[j])) {
                
                keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);

                }

            }
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", ham_dia[i], khongkiep[j])) {
                
                keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${ham_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Nô Bộc ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                }


            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Địa Không", "Địa Kiếp")) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Nô Bộc ở ${tyhoi[i]}`);
        }
    }
    for (let i = 0; i < tusinh.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tusinh[i], "Địa Không", "Địa Kiếp")) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Nô Bộc ở ${tusinh[i]}`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", danthan[i], "Địa Không", "Địa Kiếp") && kiemTraCachCuc("Địa Không", ["Hoá Lộc", "Hoá Quyền", "Văn Xương"])) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Nô Bộc ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Địa Không") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp") || isSaoToaThuTaiCung("Phụ Mẫu", "Địa Kiếp") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
        
        keyArr.push(`Địa Không, Địa Kiếp giáp Nô Bộc`);
        if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Kỵ")) {
            
            keyArr.push(`Nô Bộc có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
        }

    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Địa Kiếp", "Thiên Cơ") && kiemTraCachCuc("Địa Kiếp", ["Hoả Tinh"])) {
        
        keyArr.push("Địa Kiếp, Thiên Cơ đồng cung tại Nô Bộc gặp Hoả Tinh");
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Địa Kiếp", "Tham Lang") && isHaiSaoDongCungTaiCung("Nô Bộc", "Địa Kiếp", "Lưu Hà")) {
        
        keyArr.push("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Nô Bộc");

    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Địa Không", "Địa Kiếp") && isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Địa Không", "Thiên Tướng") && isHaiSaoDongCungTaiCungChi("Nô Bộc", tyhoi[i], "Địa Không", "Thiên Mã")) {
            
            keyArr.push("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung tại Nô Bộc ở " + tyhoi[i]);
        }
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp") && kiemTraCachCuc("Địa Kiếp", cunhatphukhockhach)) {
        
        keyArr.push("Địa Kiếp toạ thủ cung Nô Bộc gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
    }
}
function LuanCachCucTuHoaNoBoc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];

    const hoaky_dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const hoaky_ham_dia = ["Dần", "Thân", "Tỵ", "Hợi", "Tý", "Sửu", "Mão", "Ngọ", "Dậu", "Tuất", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const danmao = ["Dần", "Mão"];
    const dinhky = ["Đinh", "Kỵ"];
    const dk = ["Đ.", "K."];
    const ngothintuat = ["Ngọ", "Thìn", "Tuất"];
    const danthan = ["Dần", "Thân"];

    if (isSaoToaThuTaiCung("Nô Bộc", "Hoá Lộc")) {

        if (kiemTraCachCuc("Hoá Lộc", ["Hóa Quyền", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Nô Bộc gặp Hóa Quyền, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Nô Bộc gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Nô Bộc gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Nô Bộc gặp Địa Không, Địa Kiếp");
        }
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Hoá Quyền")) {

        if (kiemTraCachCuc("Hoá Quyền", ["Hóa Lộc", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp Hóa Lộc, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Vũ Khúc", "Cự Môn"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp Vũ Khúc, Cự Môn");
        }
        if (kiemTraCachCuc("Hoá Quyền", lucsattinh)) {

            
            keyArr.push("Hoá Quyền toạ thủ cung Nô Bộc gặp " + lucsattinh.join(", "));
        }
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hoá Khoa")) {

        if (kiemTraCachCuc("Hoá Khoa", ["Hóa Lộc", "Hóa Quyền", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Nô Bộc gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Nô Bộc gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Nô Bộc gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Nô Bộc gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Nô Bộc gặp Tử Vi, Thiên Phủ");
        }
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Kỵ")) {
        
        keyArr.push("Hóa Kỵ tọa thủ cung Nô Bộc");

        if (kiemTraCachCuc("Hóa Kỵ", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Mã"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Địa Không, Địa Kiếp");
        }

        if (kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm", "Thiên Hình"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Thái Dương, Thái Âm, Thiên Hình");
        }
        if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hóa Kỵ", "Cự Môn")) {
            
            keyArr.push("Hóa Kỵ, Cự Môn đồng cung tại Nô Bộc");
        }
        if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hóa Kỵ", "Tham Lang")) {
            
            keyArr.push("Hóa Kỵ, Tham Lang đồng cung tại Nô Bộc");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Thiên Đồng, Thiên Lương");
        }



    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Thái Dương, Thái Âm");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tumo[i], "Hoá Lộc") && isHaiSaoDongCungTaiCungChi("Nô Bộc", tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push("Hoá Lộc, Tham Lang, Vũ Khúc đồng cung tại Nô Bộc ở " + tumo[i]);
        }
    }

    for (let i = 0; i < dinhky.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", "Hoá Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Lộc Tồn") && lasoData.canNam === dk[i]) {
            
            keyArr.push("Người tuổi " + dinhky[i] + " có Hoá Lộc toạ thủ cung Nô Bộc gặp Lộc Tồn ở Huynh Đệ");
        }
    }


    for (let i = 0; i < ngothintuat.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Nô Bộc", ngothintuat[i], "Hoá Lộc", "Thiên Lương")) {
            
            keyArr.push("Hoá Lộc, Thiên Lương đồng cung tại Nô Bộc ở " + ngothintuat[i]);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", danthan[i], "Hoá Lộc") && kiemTraCachCuc("Hóa Lộc", ["Thiên Cơ", "Thiên Lương", "Lộc Tồn"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Nô Bộc ở " + danthan[i] + " gặp Thiên Cơ, Thiên Lương, Lộc Tồn");
        }
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hóa Quyền", "Hóa Lộc") && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Quyền, Hóa Lộc đồng cung tại Nô Bộc không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Quyền") && kiemTraCachCuc("Hóa Quyền", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Quyền toạ thủ cung Nô Bộc gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");

    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Nô Bộc gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền")) {
        
        keyArr.push(`Hóa Quyền, Hóa Lộc giáp Nô Bộc`);
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa toạ thủ cung Nô Bộc gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hóa Khoa", "Hóa Lộc") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa, Hóa Lộc đồng cung tại Nô Bộc không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Khoa"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Nô Bộc gặp Hóa Khoa, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        
        keyArr.push(`Hóa Khoa, Hóa Lộc giáp Nô Bộc`);
    }


    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Nô Bộc gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hóa Khoa", "Hóa Quyền") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa, Hóa Quyền đồng cung tại Nô Bộc không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa toạ thủ cung Nô Bộc gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        
        keyArr.push(`Hóa Khoa, Hóa Quyền giáp Nô Bộc`);
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen) && kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Hóa Lộc, Hóa Quyền, gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen.concat(XuongKhuc).concat(KhoiViet))) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt");

    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyngo[i], "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Thiên Đồng", "Thiên Lương"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Nô Bộc ở " + tyngo[i] + " gặp Thiên Đồng, Thiên Lương");
        }
    }

    if (isSaoToaThuTaiCungVaChi("Nô Bộc", "Tý", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Nô Bộc ở Tý gặp Thiên Đồng, Thiên Lương");
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hoá Quyền", "Thiên Khốc ")) {
        
        keyArr.push("Hoá Quyền, Thiên Khốc đồng cung tại Nô Bộc");
    }

    if (isSaoToaThuTaiCung("Huynh Đệ", "Hóa Kỵ")) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Huynh Đệ");
    }

    if (isSaoToaThuTaiCung("Nô Bộc", "Phục Binh") && kiemTraCachCuc("Phục Binh", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
        
        keyArr.push("Phục Binh toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
    }
    if (isSaoToaThuTaiCung("Nô Bộc", "Phục Binh") && kiemTraCachCuc("Phục Binh", ["Địa Không", "Địa Kiếp"])) {
        
        keyArr.push("Phục Binh toạ thủ cung Nô Bộc gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Đào Hoa", "Hóa Quyền") && lasoData.gioitinh === "Nam") {
        
        keyArr.push("Quý Anh có Đào Hoa, Hóa Quyền đồng cung tại Nô Bộc");
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Đào Hoa", "Hóa Quyền") && lasoData.gioitinh === "Nữ") {
        
        keyArr.push("Quý Chị có Đào Hoa, Hóa Quyền đồng cung tại Nô Bộc");
    }

    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hồng Loan", "Đào Hoa") && isHaiSaoDongCungTaiCung("Nô Bộc", "Tả Phủ", "Hữu Bật") && isSaoToaThuTaiCung("Nô Bộc", "Hoa Cái") && lasoData.gioitinh === "Nam") {
        
        keyArr.push("Quý Anh có Đào Hoa, Hồng Loan, Tả Phủ, Hữu Bật,Hoa Cái đồng cung tại Nô Bộc");

    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Hồng Loan", "Đào Hoa") && isHaiSaoDongCungTaiCung("Nô Bộc", "Tả Phủ", "Hữu Bật") && isSaoToaThuTaiCung("Nô Bộc", "Hoa Cái") && lasoData.gioitinh === "Nữ") {
        
        keyArr.push("Quý Chị có Đào Hoa, Hồng Loan, Tả Phủ, Hữu Bật,Hoa Cái đồng cung tại Nô Bộc");

    }
}

function LuanCachCucLucBaiTinhNoBoc(keyArr) {
    const lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

    const songhao_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const tangho_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const danthan = ["Dần", "Thân"];
    const songhao = ["Đại Hao", "Tiểu Hao"];
    const tangho = ["Tang Môn", "Bạch Hổ"];



    for (let i = 0; i < songhao_dac.length; i++) {

        for (let j = 0; j < songhao.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", songhao_dac[i], songhao[j])) {
                
                keyArr.push(songhao[j] + " toạ thủ tại cung Nô Bộc ở " + songhao_dac[i]);
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", songhao[i]) && kiemTraCachCuc("Vô Chính Diệu", songhao[i])) {
            
            keyArr.push("Cung Nô Bộc Vô Chính Diệu có " + songhao[i]);
        }
    }

    for (let i = 0; i < tangho.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", tangho[i])) {

            for (let j = 0; j < tangho_dac.log; j++) {
                if (isSaoToaThuTaiCungVaChi("Nô Bộc", tangho_dac[j], tangho[i])) {
                    
                    keyArr.push(tangho[i] + " toạ thủ cung Nô Bộc tại " + tangho_dac[j]);
                }
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có " + tangho[i] + " toạ thủ cung Nô Bộc");
            }
        }
    }

    for (let i = 0; i < tangho.length; i++) {

        if (isSaoToaThuTaiCung("Nô Bộc", tangho[i]) && kiemTraCachCuc(tangho[i], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push(tangho[i] + " toạ thủ cung Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (isSaoToaThuTaiCung("Nô Bộc", tangho[i]) && kiemTraCachCuc(tangho[i], ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push(tangho[i] + " toạ thủ cung Nô Bộc gặp Địa Không, Địa Kiếp");
        }
        if (isSaoToaThuTaiCung("Nô Bộc", tangho[i]) && kiemTraCachCuc(tangho[i], ["Kình Dương ", "Thiên Hình"])) {

            
            keyArr.push(tangho[i] + " toạ thủ cung Nô Bộc gặp Kinh Dương, Thiên Hình");

        }

        if (isHaiSaoDongCungTaiCung("Nô Bộc", tangho[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hoả Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push(tangho[i] + ", Tham Lang đồng cung tại Nô Bộc gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }

    }


    if (isSaoToaThuTaiCung("Nô Bộc", "Bạch Hổ") && kiemTraCachCuc("Bạch Hổ", ["Thiên Hình"])) {

        
        keyArr.push("Bạch Hổ toạ thủ cung Nô Bộc gặp Thiên Hình");


    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Bạch Hổ", "Thiên Hình")) {
        
        keyArr.push("Bạch Hổ, Thiên Hình đồng cung tại Nô Bộc");

    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Bạch Hổ", "Tấu Thư")) {
        
        keyArr.push("Bạch Hổ, Tấu Thư đồng cung tại Nô Bộc");
    }
    if (isHaiSaoDongCungTaiCung("Nô Bộc", "Bạch Hổ", "Phi Liêm")) {
        
        keyArr.push("Bạch Hổ, Phi Liêm đồng cung tại Nô Bộc");
    }



    const khochu = ["Thiên Khốc", "Thiên Hư"];
    const khochu_dac = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi"];
    const khochu_ham = ["Dần", "Thân", "Tỵ", "Hợi", "Thìn", "Tuất"];
    const tyngo = ["Tý", "Ngọ"];
    const maodau = ["Mão", "Dậu"];

    for (let i = 0; i < khochu.length; i++) {
        if (isSaoToaThuTaiCung("Nô Bộc", khochu[i])) {

            for (let j = 0; j < khochu_dac.length; j++) {
                if (isSaoToaThuTaiCungVaChi("Nô Bộc", khochu_dac[j], khochu[i])) {
                    
                    keyArr.push((khochu[i] + " toạ thủ cung Nô Bộc tại " + khochu_dac[j]));
                    if (kiemTraCachCuc(khochu[i], ["Hóa Lộc"])) {
                        
                        keyArr.push(khochu[i] + " toạ thủ cung Nô Bộc tại " + khochu_dac[j] + " gặp Hóa Lộc");
                    }
                }
            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < tyngo.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", tyngo[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Nô Bộc tại " + tyngo[j] + " gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
            }
            if (isHaiSaoDongCungTaiCungChi("Nô Bộc", tyngo[j], khochu[i], "Phá Quân")) {
                
                keyArr.push(khochu[i] + " đồng cung Phá Quân tại Nô Bộc" + " ở " + tyngo[j]);
            }
        }
    }
    for (let k = 0; k < khochu.length; k++) {
        for (let i = 0; i < khochu_ham.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", khochu_ham[i], khochu[k])) {
                
                keyArr.push(khochu[k] + " toạ thủ cung Nô Bộc tại " + khochu_ham[i]);

            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Nô Bộc tại " + danthan[j] + " gặp Kình Dương, Đà La");
            }
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Thiên Hình", "Thiên Mã"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Nô Bộc tại " + danthan[j] + " gặp Thiên Hình, Thiên Mã");
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Nô Bộc", maodau[j], songhao[i]) && kiemTraCachCuc(songhao[i], ["Thiên Cơ", "Cự Môn"])) {
                
                keyArr.push(songhao[i] + " toạ thủ cung Nô Bộc tại " + maodau[j] + " gặp Thiên Cơ, Cự Môn");
            }
        }
    }
}




function ThanMenhDongCungVoChinhDieu(keyArr) {
    if (idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        keyArr.push("Thân và Nô Bộc đồng cung Vô Chính Diệu");
        return true;
    }
}
function LuanCacCachCucKhacNoBoc(keyArr) {
    const kinhda_dac = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const kinhda_ham = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const diakhong_dac = ["Dần", "Thân", "Tỵ", "Hợi"];
    const diakhong_ham = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"];
    const hoalinh_dac = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"]
    const hoalinh_ham = ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"];
    const tuvi_dac = ["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Ngọ", "Dần", "Thân"];
    const tuvi_ham = ["Tý", "Dậu", "Hợi", "Mão"];
    const liemtrinh_dac = ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân"];
    const liemtrinh_ham = ["Dậu", "Hợi", "Mão", "Tỵ"];
    const thienphu_dac = ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Tỵ", "Hợi", "Mùi"]
    const thienphu_ham = ["Mão", "Dậu", "Sửu"];
    const vu_dac = ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"];
    const vu_ham = ["Hợi", "Tỵ"];
    const tuong_dac = ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"];
    const tuong_ham = ["Mão", "Dậu"];
    const sat_dac = ["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"];
    const sat_ham = ["Thìn", "Tuất", "Dậu", "Mão"];
    const phaquan_dac = ["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"];
    const phaquan_ham = ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi "];
    const tham_dac = ["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"];
    const tham_ham = ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"];
    const cu_dac = ["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"];
    const cu_ham = ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"];
    const nhat_dac = ["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"];
    const nhat_ham = ["Thân", "Dậu", "Tuất", "Hợi", "Tý"];
    const co_dac = ["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"];
    const co_ham = ["Dần", "Hợi"];
    const nguyet_dac = ["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"];
    const nguyet_ham = ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"];
    const dong_dac = ["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"];
    const dong_ham = ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"];
    const luong_dac = ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"];
    const luong_ham = ["Dậu", "Hợi", "Tỵ"];
    const khochu_dac = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi"];
    const khochu_ham = ["Dần", "Thân", "Thìn", "Tuất", "Tỵ", "Hợi"];

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return;
    const cungMenh = lasoOb.find(c => c.tenCung === 'Nô Bộc');
    const chiCungMenh = lasoData.lasoOb[0].chi;

    // Nếu là đàn ông sinh năm Ngọ, Mùi, Nô Bộc an tại Tý, Sửu thì cuộc đời vất vả lo toan

    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Ngọ, Nô Bộc an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Sửu')) {
        keyArr.push("Anh sinh năm Ngọ, Nô Bộc an tại Sửu");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Nô Bộc an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Nô Bộc an tại Sửu");
    }

    // Nếu là đàn bà cung Nô Bộc an tại Tứ Mộ khôn ngoan

    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Thìn' || chiCungMenh === 'Sửu' || chiCungMenh === 'Tuất' || chiCungMenh === 'Mùi')) {
        keyArr.push("Cung Nô Bộc của chị được an tại ví trí Tứ Mộ");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Dậu')) {
        keyArr.push("Cung Nô Bộc của chị được an tại ví trí cung Dậu");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Cung Nô Bộc của chị được an tại ví trí cung Tý");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Ngọ')) {
        keyArr.push("Cung Nô Bộc của chị được an tại ví trí cung Ngọ");
    }

    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Thìn") {
        keyArr.push("Thân và Nô Bộc đồng cung Vô Chính Diệu tại Thìn");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Tuất") {
        keyArr.push("Thân và Nô Bộc đồng cung Vô Chính Diệu tại Tuất");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Sửu") {
        keyArr.push("Thân và Nô Bộc đồng cung Vô Chính Diệu tại Sửu");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Mùi") {
        keyArr.push("Thân và Nô Bộc đồng cung Vô Chính Diệu tại Mùi");
    }

    //Nô Bộc vô chính diệu gặp Song Hao
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Nô Bộc Vô Chính Diệu gặp Song Hao");
    }
    // Nô Bộc vô chính diệu gặp Song Hao có Thiên Đồng,hoặc Thiên Lương, hoặc Thiên Cơ
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Thiên Đồng', 'Thiên Lương', 'Thiên Cơ']) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Nô Bộc Vô Chính Diệu gặp Song Hao có Thiên Đồng, Thiên Lương, hoặc Thiên Cơ");
    }

    if (lasoData.cungCu === "Phu Thê") {
        keyArr.push("Thân Cư Phu Thê");
    }
    if (lasoData.cungCu === "Tài Bạch") {
        keyArr.push("Thân Cư Tài Bạch");
    }
    if (lasoData.cungCu === "Phúc Đức") {
        keyArr.push("Thân Cư Phúc Đức");
    }



    const vitri_kinhduong = findChiCungChuaSao("Kình Dương", lasoData.lasoOb);
    const vitri_dala = findChiCungChuaSao("Đà La", lasoData.lasoOb);
    const vitri_hoatinh = findChiCungChuaSao("Hỏa Tinh", lasoData.lasoOb);
    const vitri_linhtinh = findChiCungChuaSao("Linh Tinh", lasoData.lasoOb);
    const vitri_khong = findChiCungChuaSao("Địa Không", lasoData.lasoOb);
    const vitri_kiep = findChiCungChuaSao("Địa Kiếp", lasoData.lasoOb);


    let vtr_kinhduong = "";
    vtr_kinhduong = kiemTraSaoSangToi(kinhda_dac, kinhda_ham, vitri_kinhduong);
    let vtr_dala = "";
    vtr_dala = kiemTraSaoSangToi(kinhda_dac, kinhda_ham, vitri_dala);
    let vtr_hoatinh = "";
    vtr_hoatinh = kiemTraSaoSangToi(hoalinh_dac, hoalinh_ham, vitri_hoatinh);
    let vtr_linhTinh = "";
    vtr_linhTinh = kiemTraSaoSangToi(hoalinh_dac, hoalinh_ham, vitri_hoatinh);
    let vtr_khong = "";
    vtr_khong = kiemTraSaoSangToi(diakhong_dac, diakhong_ham, vitri_khong);
    let vtr_kiep = "";
    vtr_kiep = kiemTraSaoSangToi(diakhong_dac, diakhong_ham, vitri_kiep);
    let vtr_tuvi = "";
    vtr_tuvi = kiemTraSaoSangToi(tuvi_dac, tuvi_ham, findChiCungChuaSao("Tử Vi", lasoData.lasoOb));
    let vtr_liemtrinh = "";
    vtr_liemtrinh = kiemTraSaoSangToi(liemtrinh_dac, liemtrinh_ham, findChiCungChuaSao("Liêm Trinh", lasoData.lasoOb));
    let vtr_thienphu = "";
    vtr_thienphu = kiemTraSaoSangToi(thienphu_dac, thienphu_ham, findChiCungChuaSao("Thiên Phủ", lasoData.lasoOb));
    let vtr_vu = "";
    vtr_vu = kiemTraSaoSangToi(vu_dac, vu_ham, findChiCungChuaSao("Vũ Khúc", lasoData.lasoOb));
    let vtr_tuong = "";
    vtr_tuong = kiemTraSaoSangToi(tuong_dac, tuong_ham, findChiCungChuaSao("Thiên Tướng", lasoData.lasoOb));
    let vtr_sat = "";
    vtr_sat = kiemTraSaoSangToi(sat_dac, sat_ham, findChiCungChuaSao("Thất Sát", lasoData.lasoOb));
    let vtr_phaquan = "";
    vtr_phaquan = kiemTraSaoSangToi(phaquan_dac, phaquan_ham, findChiCungChuaSao("Phá Quân", lasoData.lasoOb));
    let vtr_tham = "";
    vtr_tham = kiemTraSaoSangToi(tham_dac, tham_ham, findChiCungChuaSao("Tham Lang", lasoData.lasoOb));
    let vtr_cu = "";
    vtr_cu = kiemTraSaoSangToi(cu_dac, cu_ham, findChiCungChuaSao("Cự Môn", lasoData.lasoOb));
    let vtr_nhat = "";
    vtr_nhat = kiemTraSaoSangToi(nhat_dac, nhat_ham, findChiCungChuaSao("Thái Dương", lasoData.lasoOb));
    let vtr_co = "";
    vtr_co = kiemTraSaoSangToi(co_dac, co_ham, findChiCungChuaSao("Thiên Cơ", lasoData.lasoOb));
    let vtr_nguyet = "";
    vtr_nguyet = kiemTraSaoSangToi(nguyet_dac, nguyet_ham, findChiCungChuaSao("Thái Âm", lasoData.lasoOb));
    let vtr_dong = "";
    vtr_dong = kiemTraSaoSangToi(dong_dac, dong_ham, findChiCungChuaSao("Thiên Đồng", lasoData.lasoOb));
    let vtr_luong = "";
    vtr_luong = kiemTraSaoSangToi(luong_dac, luong_ham, findChiCungChuaSao("Thiên Lương", lasoData.lasoOb));
    let vtr_thienkhoc = "";
    vtr_thienkhoc = kiemTraSaoSangToi(khochu_dac, khochu_ham, findChiCungChuaSao("Thiên Khốc", lasoData.lasoOb));
    let vtr_thienhu = "";
    vtr_thienhu = kiemTraSaoSangToi(khochu_dac, khochu_ham, findChiCungChuaSao("Thiên Hư", lasoData.lasoOb));

    const dsChinhTinh = getDanhSachChinhTinhTungCung()[5].chinhTinh;
    if (dsChinhTinh.length > 0) {

        // Tử Vi ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Tử Vi" + vtr_tuvi + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Tử Vi" + vtr_tuvi + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Thiên Phủ ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Cự Môn ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Thái Dương ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Thái Âm ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Thiên Đồng ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Thiên Lương ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Thiên Cơ ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }

        // Tử Vi ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Tử Vi" + vtr_tuvi + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Thiên Phủ ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Cự Môn ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Thái Dương ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Thái Âm ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Thiên Đồng ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Thiên Lương ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Thiên Cơ ở Mệnh gặp Thiên Tướng Vũ Khúc ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        // Tử Vi ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Thiên Phủ ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Cự Môn ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Thái Dương ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Thái Âm ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Thiên Đồng ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Thiên Lương ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Thiên Cơ ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }

        // Mệnh có Sát Phá Liêm Tham gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Tử Vi ở Nô Bộc " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Phủ ở Nô Bộc " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thái Dương ở Nô Bộc " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Thái Âm")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thái Âm ở Nô Bộc " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Đồng")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Đồng ở Nô Bộc " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Lương")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Lương ở Nô Bộc " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Cơ ở Nô Bộc " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Cự Môn")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Cự Môn ở Nô Bộc " + vtr_cu);
        }

        // Mệnh có Tham Lang gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Tử Vi ở Nô Bộc " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Phủ ở Nô Bộc " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thái Dương ở Nô Bộc " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Thái Âm")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thái Âm ở Nô Bộc " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Đồng")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Đồng ở Nô Bộc " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Lương")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Lương ở Nô Bộc " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Cơ ở Nô Bộc " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Cự Môn")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Cự Môn ở Nô Bộc " + vtr_cu);
        }
        // Mệnh có Phá Quân gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Tử Vi ở Nô Bộc " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Phủ ở Nô Bộc " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thái Dương ở Nô Bộc " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Thái Âm")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thái Âm ở Nô Bộc " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Đồng")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Đồng ở Nô Bộc " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Lương")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Lương ở Nô Bộc " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Cơ ở Nô Bộc " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Cự Môn")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Cự Môn ở Nô Bộc " + vtr_cu);
        }
        // Mệnh có Liêm Trinh gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Tử Vi ở Nô Bộc " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Phủ ở Nô Bộc " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thái Dương ở Nô Bộc " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Thái Âm")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thái Âm ở Nô Bộc " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Đồng")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Đồng ở Nô Bộc " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Lương")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Lương ở Nô Bộc " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Cơ ở Nô Bộc " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Cự Môn")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Cự Môn ở Nô Bộc " + vtr_cu);
        }

        // Mệnh có Sát Phá Liêm Tham gặp Vũ Tướng ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Vũ Khúc ở Nô Bộc " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Tướng ở Nô Bộc " + vtr_tuong);
        }
        // Mệnh có Thất Sát gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Mệnh có Tham Lang gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Mệnh có Phá Quân gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }

        // Mệnh có Liêm Trinh gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }


        //Mệnh có Vũ Khúc gặp Tử, Phủ, Nhật, Cự, Cơ, Nguyệt, Đồng, Lương ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Tử Vi ở Nô Bộc " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Phủ ở Nô Bộc " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thái Dương ở Nô Bộc " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Thái Âm")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thái Âm ở Nô Bộc " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Đồng")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Đồng ở Nô Bộc " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Lương")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Lương ở Nô Bộc " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Cơ ở Nô Bộc " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Cự Môn")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Cự Môn ở Nô Bộc " + vtr_cu);
        }
        // Mệnh có Thiên Tướng gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Tử Vi")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Tử Vi ở Nô Bộc " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Phủ")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Phủ ở Nô Bộc " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Thái Dương")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thái Dương ở Nô Bộc " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Thái Âm")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thái Âm ở Nô Bộc " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Đồng")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Đồng ở Nô Bộc " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Lương")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Lương ở Nô Bộc " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Thiên Cơ")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Cơ ở Nô Bộc " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Cự Môn")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Cự Môn ở Nô Bộc " + vtr_cu);
        }

        // Mệnh Vũ Khúc gặp Sát, Phá, Lang, Liêm
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Mệnh có Thiên Tướng gặp Sát, Phá, Lang, Liêm
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Thất Sát")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thất Sát ở Nô Bộc " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Tham Lang")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Tham Lang ở Nô Bộc " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Phá Quân")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Phá Quân ở Nô Bộc " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Liêm Trinh")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Liêm Trinh ở Nô Bộc " + vtr_liemtrinh);
        }
        // Mệnh có Vũ Khúc gặp Kình Dương, Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }
        // Mệnh có Thiên Tướng gặp Kình Dương, Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Nô Bộc
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Kình Dương")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Kình Dương ở Nô Bộc " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Đà La")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Đà La ở Nô Bộc " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Địa Không")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Địa Không ở Nô Bộc " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Địa Kiếp")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Địa Kiếp ở Nô Bộc " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Nô Bộc " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Nô Bộc", "Linh Tinh")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Linh Tinh ở Nô Bộc " + vitri_linhtinh);
        }

    } else {
        // Tử Vi ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Tử Vi" + vtr_tuvi + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Tử Vi" + vtr_tuvi + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Thiên Phủ ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Cự Môn ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Thái Dương ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Thái Âm ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Thiên Đồng ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Thiên Lương ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Thiên Cơ ở Mệnh gặp Thất Sát, Phá Quân, Tham Lang, Liêm Trinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }

        // Tử Vi ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Tử Vi" + vtr_tuvi + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Thiên Phủ ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Cự Môn ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Thái Dương ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Thái Âm ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Thiên Đồng ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Thiên Lương ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Thiên Cơ ở Mệnh gặp Thiên Tướng Vũ Khúc ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        // Tử Vi ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Tử Vi " + vtr_tuvi + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Thiên Phủ ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thiên Phủ " + vtr_thienphu + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Cự Môn ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Cự Môn " + vtr_cu + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Thái Dương ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thái Dương " + vtr_nhat + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Thái Âm ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thái Âm " + vtr_nguyet + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Thiên Đồng ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thiên Đồng " + vtr_dong + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Thiên Lương ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thiên Lương " + vtr_luong + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Thiên Cơ ở Mệnh gặp Kình Dương Đà La Địa Không Địa Kiếp Hoả Tinh Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thiên Cơ " + vtr_co + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }

        // Mệnh có Sát Phá Liêm Tham gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Tử Vi")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Tử Vi ở Huynh Đệ " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Phủ")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Phủ ở Huynh Đệ " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thái Dương ở Huynh Đệ " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thái Âm ở Huynh Đệ " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Đồng")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Đồng ở Huynh Đệ " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Lương ở Huynh Đệ " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Cơ")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Cơ ở Huynh Đệ " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Cự Môn")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Cự Môn ở Huynh Đệ " + vtr_cu);
        }

        // Mệnh có Tham Lang gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Tử Vi")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Tử Vi ở Huynh Đệ " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Phủ")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Phủ ở Huynh Đệ " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thái Dương ở Huynh Đệ " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thái Âm ở Huynh Đệ " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Đồng")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Đồng ở Huynh Đệ " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Lương ở Huynh Đệ " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Cơ")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Cơ ở Huynh Đệ " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Cự Môn")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Cự Môn ở Huynh Đệ " + vtr_cu);
        }
        // Mệnh có Phá Quân gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Tử Vi")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Tử Vi ở Huynh Đệ " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Phủ")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Phủ ở Huynh Đệ " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thái Dương ở Huynh Đệ " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thái Âm ở Huynh Đệ " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Đồng")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Đồng ở Huynh Đệ " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Lương ở Huynh Đệ " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Cơ")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Cơ ở Huynh Đệ " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Cự Môn")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Cự Môn ở Huynh Đệ " + vtr_cu);
        }
        // Mệnh có Liêm Trinh gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Tử Vi")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Tử Vi ở Huynh Đệ " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Phủ")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Phủ ở Huynh Đệ " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thái Dương ở Huynh Đệ " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thái Âm ở Huynh Đệ " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Đồng")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Đồng ở Huynh Đệ " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Lương ở Huynh Đệ " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Cơ")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Cơ ở Huynh Đệ " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Cự Môn")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Cự Môn ở Huynh Đệ " + vtr_cu);
        }

        // Mệnh có Sát Phá Liêm Tham gặp Vũ Tướng ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiChi("Nô Bộc", "Vũ Khúc")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Vũ Khúc ở Huynh Đệ " + vtr_vu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiChi("Nô Bộc", "Thiên Tướng")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Thiên Tướng ở Huynh Đệ " + vtr_tuong);
        }
        // Mệnh có Thất Sát gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thất Sát " + vtr_sat + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Mệnh có Tham Lang gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Tham Lang " + vtr_tham + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Mệnh có Phá Quân gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Phá Quân " + vtr_phaquan + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }

        // Mệnh có Liêm Trinh gặp Kình Dương,Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Liêm Trinh " + vtr_liemtrinh + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }


        //Mệnh có Vũ Khúc gặp Tử, Phủ, Nhật, Cự, Cơ, Nguyệt, Đồng, Lương ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Tử Vi")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Tử Vi ở Huynh Đệ " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Phủ")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Phủ ở Huynh Đệ " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thái Dương ở Huynh Đệ " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thái Âm ở Huynh Đệ " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Đồng")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Đồng ở Huynh Đệ " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Lương ở Huynh Đệ " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Cơ")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thiên Cơ ở Huynh Đệ " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Cự Môn")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Cự Môn ở Huynh Đệ " + vtr_cu);
        }
        // Mệnh có Thiên Tướng gặp Tử Phủ Nhật Cự Cơ Nguyệt Đồng Lương ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Tử Vi")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Tử Vi ở Huynh Đệ " + vtr_tuvi);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Phủ")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Phủ ở Huynh Đệ " + vtr_thienphu);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thái Dương ở Huynh Đệ " + vtr_nhat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thái Âm ở Huynh Đệ " + vtr_nguyet);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Đồng")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Đồng ở Huynh Đệ " + vtr_dong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Lương ở Huynh Đệ " + vtr_luong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Cơ")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thiên Cơ ở Huynh Đệ " + vtr_co);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Cự Môn")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Cự Môn ở Huynh Đệ " + vtr_cu);
        }

        // Mệnh Vũ Khúc gặp Sát, Phá, Lang, Liêm
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Mệnh có Thiên Tướng gặp Sát, Phá, Lang, Liêm
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Thất Sát ở Huynh Đệ " + vtr_sat);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Tham Lang")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Tham Lang ở Huynh Đệ " + vtr_tham);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Phá Quân")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Phá Quân ở Huynh Đệ " + vtr_phaquan);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Liêm Trinh ở Huynh Đệ " + vtr_liemtrinh);
        }
        // Mệnh có Vũ Khúc gặp Kình Dương, Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Vũ Khúc " + vtr_vu + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }
        // Mệnh có Thiên Tướng gặp Kình Dương, Đà La, Không Kiếp, Địa Kiếp, Hỏa Tinh, Linh Tinh ở Huynh Đệ
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Kình Dương ở Huynh Đệ " + vtr_kinhduong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Đà La ở Huynh Đệ " + vtr_dala);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Địa Không ở Huynh Đệ " + vtr_khong);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Địa Kiếp ở Huynh Đệ " + vitri_kiep);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Hỏa Tinh ở Huynh Đệ " + vitri_hoatinh);
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh")) {
            
            keyArr.push("Thiên Tướng " + vtr_tuong + " toạ thủ tại Mệnh gặp Linh Tinh ở Huynh Đệ " + vitri_linhtinh);
        }



    }

}
function MenhVoChinhDieu() {
    if (getDanhSachChinhTinhTungCung()[idCungNoBoc].chinhTinh.length === 0) {
        
        keyArr.push("Cung Nô Bộc Vô Chính Diệu");

    }

}
function NoBocKhongThanKiep(idxCungMenh, idxCungThan, dsChinh, dsPhu, keyArr) {

    // Lấy các sao của cung Nô Bộc và cung Thân
    const saoMenh = [].concat(
        (dsChinh[idxCungMenh] && dsChinh[idxCungMenh].chinhTinh) || [],
        (dsPhu[idxCungMenh] && dsPhu[idxCungMenh].phuTinh) || []
    );
    const saoThan = [].concat(
        (dsChinh[idxCungThan] && dsChinh[idxCungThan].chinhTinh) || [],
        (dsPhu[idxCungThan] && dsPhu[idxCungThan].phuTinh) || []
    );

    // Kiểm tra điều kiện
    const menhKhong = saoMenh.includes("Địa Không");
    const thanKiep = saoThan.includes("Địa Kiếp");

    const menhKiep = saoMenh.includes("Địa Kiếp");
    const thanKhong = saoThan.includes("Địa Không");

    // Nếu đủ điều kiện, hiển thị cách cục hoặc trả về true
    if (menhKhong && thanKiep) {
        keyArr.push("Nô Bộc Không Thân Kiếp");
        return true;
    } else if (menhKiep && thanKhong) {
        keyArr.push("Nô Bộc Kiếp Thân Không");
        return true;

    }
    return false;
}



