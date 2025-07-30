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

function LuanCungPhuThe() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const cungMenh = lasoData.lasoOb[0].chi;
    const hanhMenh = lasoData.lasoOb[0].hanh;
    const danhGia = danhGiaViTriCungMenh(hanhMenh, cungMenh);

    return {
        tenCung: 'Phu Thê',
        chi: cungMenh,
        hanh: hanhMenh,
        danhGia: danhGia
    };
}
function LuanCungPhuThe(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const vitriDiaSinhCungMenh = kiemTraDiaSinh(lasoData.hanhMenh, lasoData.lasoOb[0].chi);
    keyArr.push(`Vị trí địa sinh cung Phu Thê tại ${vitriDiaSinhCungMenh}`);
    
    LuanCachCucSaoTuViPhuThe(keyArr);
    LuanCachCucSaoLiemTrinhPhuThe(keyArr);
    LuanCachCucSaoThienDongPhuThe(keyArr);
    LuanCachCucSaoVuKhucPhuThe(keyArr);
    LuanCachCucThaiDuongPhuThe(keyArr);
    LuanCachCucThienCoPhuThe(keyArr);
    LuanCacCachCucThienPhuPhuThe(keyArr);
    LuanCachCucThaiAmPhuThe(keyArr);
    LuanCachCucThamLangPhuThe(keyArr);
    LuanCachCucCuMonPhuThe(keyArr);
    LuanCachCucThienTuongPhuThe(keyArr);
    LuanCachCucThienLuongPhuThe(keyArr);
    LuanCachCucThatSatPhuThe(keyArr);
    LuanCachCucPhaQuanPhuThe(keyArr);
    LuanCachCucXuongKhucPhuThe(keyArr);
    LuanCachCucKhoiVietPhuThe(keyArr);
    LuanCachCucLocTonPhuThe(keyArr);
    LuanCachCucTaHuuPhuThe(keyArr);
    LuanCachCucKinhDuongDaLaPhuThe(keyArr);
    LuanCachCucHoaLinhPhuThe(keyArr);
    LuanCachCucKhongKiepPhuThe(keyArr);
    LuanCachCucTuHoaPhuThe(keyArr);
    LuanCachCucLucBaiTinhPhuThe(keyArr);
    LuanCacCachCucKhacPhuThe(keyArr);
}
function LuanCachCucSaoTuViPhuThe(keyArr) {
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
    const mvd = mieu.concat(vuong).concat(dac); // Tử vi thủ Phu Thê ở miếu, vượng, đắc địa

    if (isSaoToaThuTaiCung("Phu Thê", "Tử Vi")) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Phu Thê ở ${mvd[i]}`);
        }
    }
    const mb = mieu.concat(binh);  // Tử vi Thủ Phu Thê miếu và bình hòa

    for (let i = 0; i < mb.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mb[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Phu Thê ở ${mb[i]}`);
        }
    }
    const vd = vuong.concat(dac); // Tử vi thủ Phu Thê ở vượng, đắc địa
    for (let i = 0; i < vd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", vd[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Phu Thê ở ${vd[i]}`);
        }
    }
    // Tử vi thủ Phu Thê gặp cát tinh
    let cattinh = PhuVuTuong.concat(XuongKhuc).concat(KhoiViet).concat(TaHuu).concat(KhoaLocQuyen).concat(LongPhuong);


    if (isSaoToaThuTaiCung("Phu Thê", "Tử Vi") && kiemTraCachCuc("Tử Vi", cattinh)) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê và hội chiếu các", cattinh.join(", "));
    }
    //Tử vi thủ Phu Thê gặp sát tinh
    let hungtinh = lucsattinh;


    if (isSaoToaThuTaiCung("Phu Thê", "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê và hội chiếu ", KhongKiep.join(", "));
        if (kiemTraCachCuc("Tử Vi", hungtinh)) {
            
            keyArr.push("Tử Vi tọa thủ cung Phu Thê và hội chiếu các", hungtinh.join(", "));

        }
    }

    // Tử vi thủ Phu Thê đồng cung với Tham Lang ở mão dậu


    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", maodau[i], "Tử Vi") && isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", Tham)) {
            
            keyArr.push(`Tử Vi đồng cung với Tham Lang tại Phu Thê ở ${maodau[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", maodau[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
            
            keyArr.push(`Tử Vi tọa thủ cung Phu Thê ở ${maodau[i]} gặp`, KhongKiep.join(", "));
        }
    }

    // Phú
    // Sinh năm Giáp Đinh Kỷ có Tử Vi tọa thủ cung Phu Thê ở Ngọ không gặp Hình Kỵ
    for (let i = 0; i < giap_dinh_ky.length; i++) {

        if (lasoData.chiCan === gdk[i]) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", "Ngọ", "Tử Vi") && kiemTraCachCuc("Tử Vi", HinhKy) == false) {
                
                keyArr.push(`Người tuổi ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Phu Thê ở Ngọ và không gặp`, HinhKy.join(", "));

            }
        }


    }
    // Sinh năm Nhâm Giáp Nam có Tử Vi tọa thủ cung Phu Thê ở Hợi, Nữ có Tử Vi tọa thủ cung Phu Thê ở Dần

    for (let i = 0; i < nhamgiap.length; i++) {
        if (lasoData.chiCan === nh_giap[i]) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam") {
                
                keyArr.push(`Quý Anh tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Phu Thê ở Hợi`);
            }
            if (isSaoToaThuTaiCungVaChi("Phu Thê", "Dần", "Tử Vi") && lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Phu Thê ở Dần`);
            }
        }
    }
    // Tử phủ đồng cung, Phu Thê an tại dần thân, sinh năm giáp


    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", danthan[i], "Tử Vi", "Thiên Phủ")) {
            if (lasoData.chiCan === "G.") {
                
                keyArr.push(`Bạn sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
            }
        }

    }

    // Tử vi hoặc Thiên Phủ tọa Phu Thê gặp Tả Hữu
    for (let i = 0; i < tuphu.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", tuphu[i]) && kiemTraCachCuc(tuphu[i], TaHuu)) {
            
            keyArr.push(`${tuphu[i]} tọa thủ cung Phu Thê gặp`, TaHuu.join(", "));
        }

    }
    // Tử hoặc Phủ tọa thủ cung Phu Thê đồng cung Kình
    for (let i = 0; i < tuphu.length; i++) {
        if (isHaiSaoDongCungTaiCung("Phu Thê", tuphu[i], "Kình Dương")) {
            
            keyArr.push(`${tuphu[i]} tọa thủ cung Phu Thê đồng cung Kình Dương`);
        }

    }
    // Tử vi tọa Phu Thê đồng cung với Thiên Phủ gặp Tả HỮu
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thiên Phủ") && kiemTraCachCuc("Tử Vi", TaHuu)) {

        
        keyArr.push("Tử Vi đồng cung với Thiên Phủ tại Phu Thê gặp", TaHuu.join(", "));
    }
    // Tử vi tại Phu Thê gặp cát tinh
    if (isSaoToaThuTaiCung("Phu Thê", "Tử Vi") && kiemTraCachCuc("Tử Vi", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An))) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));

        if (kiemTraCachCuc("Tử Vi", KhongKiep.concat(Kinh)) == false) {
            keyArr.push("Tử Vi tọa thủ cung Phu Thê gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
            
        }
    }


    // Tử vi tại Phu Thê đồng cung với Thiên Tướng, phá toại tại cung thân hợp chiếu với các sao Kình
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thiên Tướng") && isSaoToaThuTaiCung(lasoData.cungCu, "Phá Toái") && kiemTraCachCuc("Phá Toái", Kinh)) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê đồng cung Thiên Tướng, Phá Toái tại cung thân hợp chiếu với sao Kình Dương");
    }
    // Tử Sát đồng lâm Tỵ Hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Tử Vi", "Thất Sát")) {
            
            keyArr.push(`Tử Vi đồng cung với Thất Sát tại Phu Thê ở ${tyhoi[i]}`);
        }
    }
    // Tử vi Thất Sát Hóa Quyền đồng cung tại Phu Thê

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thất Sát") && isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Hóa Quyền")) {
        
        keyArr.push("Tử Vi, Thất Sát, Hóa Quyền đồng cung tại Phu Thê");
    }

    // Tử Vũ hoặc Tử Phá đồng cung tại Phu Thê gặp Kình Đà
    for (let i = 0; i < vupha.length; i++) {
        if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", vupha[i]) && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Đà La"])) {
            
            keyArr.push(`Tử Vi đồng cung với ${vupha[i]} tại Phu Thê gặp Kình Dương, Đà La`);
        }
    }
    // Tử vi hoặc Vũ Khúc thủ Phu Thê gặp Sát tinh

    for (let i = 0; i < tuvu.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", tuvu[i]) && kiemTraCachCuc(tuvu[i], lucsattinh)) {
            
            keyArr.push(`${tuvu[i]} tọa thủ cung Phu Thê gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
    }
    // Tử vi hoặc Phá Quân thủ Phu Thê tại tứ mộ cung
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < tupha.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", tumo[i], tupha[j])) {
                
                keyArr.push(`${tupha[j]} tọa thủ cung Phu Thê tại ${tumo[i]}`);
                if (kiemTraCachCuc(tupha[j], ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                    
                    keyArr.push(`${tupha[j]} tọa thủ cung Phu Thê tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                }
                if (kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh))) {
                    
                    keyArr.push(`${tupha[j]} tọa thủ cung Phu Thê tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                }
                //gặp Không Kiếp Kình mà không gặp Văn Xương Văn Khúc Long Phượng
                if (kiemTraCachCuc(tupha[j], TaHuu.concat(XuongKhuc).concat(LongPhuong)) === false && kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh)) === true) {
                    
                    keyArr.push(`${tupha[j]} tọa thủ cung Phu Thê tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                }
            }
        }
    }

    // // Tử vi tại Phu Thê gặp Kiếp, Đào Hồng Không tại Phu Thê
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", Dao) && isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", Hong) && isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", Khong) && kiemTraCachCuc("Tử Vi", Kiep)) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
    }

    // Tử vi Tả Hữu đồng cung Phu Thê
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Tả Phù") && isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Hữu Bật")) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê đồng cung Tả Phù, Hữu Bật");
    }

    //Tử vi tại Phu Thê chi Tý Ngọ gặp Khoa Lộc Quyền
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyngo[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhoaLocQuyen)) {
            
            keyArr.push(`Tử Vi tọa thủ cung Phu Thê ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
        }
    }
    // Tử vi tại mênh gặp Hóa Quyền, Hóa Lộc, Kình Đà
    if (isSaoToaThuTaiCung("Phu Thê", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền", "Hóa Lộc", "Kình Dương", "Đà La"])) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
    }
    // Tử vi và Hóa Lộc đồng cung tại Phu Thê hội chiếu Tả Phù Hữu Bật
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Hóa Lộc") && kiemTraCachCuc("Tử Vi", TaHuu)) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
    }
    // Tử Phủ Hội Chiếu cung Phu Thê
    if (isSaoToaThuTaiCung("Phu Thê", "Tử Vi") && kiemTraCachCuc("Tử Vi", "Thiên Phủ")) {
        
        keyArr.push("Tử Vi tọa thủ cung Phu Thê hội chiếu Thiên Phủ");
    }

    // Tử Phủ đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thiên Phủ")) {
        
        keyArr.push("Tử Vi, Thiên Phủ đồng cung tại Phu Thê");
    }
    // Tử Tướng
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thiên Tướng")) {
        
        keyArr.push("Tử Vi, Thiên Tướng đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thiên Tướng") && lasoData.gioitinh === "Nữ") {
        
        keyArr.push("Quý Chị có Tử Vi, Thiên Tướng đồng cung tại Phu Thê");
    }
    // nam giới
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thiên Tướng") && lasoData.gioitinh === "Nam") {
        
        keyArr.push("Quý Anh có Tử Vi, Thiên Tướng đồng cung tại Phu Thê");
    }
    // Thất Sát đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Thất Sát")) {
        
        keyArr.push("Tử Vi, Thất Sát đồng cung tại Phu Thê");
    }
    // Phá Quân 
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Phá Quân")) {
        
        keyArr.push("Tử Vi, Phá Quân đồng cung tại Phu Thê");
    }
    // nam giới
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Phá Quân") && lasoData.gioitinh === "Nam") {
        
        keyArr.push("Quý Anh có Tử Vi, Phá Quân đồng cung tại Phu Thê");
    }
    // Tham đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tử Vi", "Tham Lang")) {
        
        keyArr.push("Tử Vi, Tham Lang đồng cung tại Phu Thê");
    }
}

function LuanCachCucSaoLiemTrinhPhuThe(keyArr) {
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

    // Liêm Trinh Tọa thủ Phu Thê
    if (isSaoToaThuTaiCung("Phu Thê", "Liêm Trinh")) {
        
        keyArr.push("Liêm Trinh tọa thủ cung Phu Thê");
    }
    // Liêm Trinh Miếu địa tọa thủ Phu Thê gặp cát tinh
    // Liêm Trinh tọa thủ cung Phu Thê gặp hung tinh, kỵ hình


    for (let i = 0; i < mieu.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mieu[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Phu Thê ở ${mieu[i]}`);
        }
    }


    // Liêm Trinh Vượng địa tọa thủ Phu Thê gặp cát tinh 
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Phu Thê gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Phu Thê", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", vuong[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Phu Thê ở ${vuong[i]}`);
        }
    }
    // Liêm Trinh Đắc địa tọa thủ Phu Thê gặp cát tinh
    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Phu Thê gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Phu Thê", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", dac[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Phu Thê ở ${dac[i]}`);
        }
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", dac[i], "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Phu Thê", dac[i], "Liêm Trinh", "Văn Khúc")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
        }

    }



    // Liêm trinh hãm 
    for (let i = 0; i < ham.length; i++) {

        if (isSaoToaThuTaiCung("Phu Thê", ham[i], "Liêm Trinh")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${ham[i]}`);
        }

        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }

        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Phu Thê ở ${ham[i]}`);
        }
    }
    // Liêm trinh Tỵ Hợi đồng cung với Hoá Kỵ
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Liêm Trinh", "Hóa Kỵ")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            if (kiemTraCachCuc("Liêm Trinh", [XuongKhuc]) && lasoData.canNam === "B.") {
                
                keyArr.push(`Tuổi Bính Liêm Trinh tọa thủ cung Phu Thê ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
            }
        }
    }

    // Liêm Trinh toạ thủ tại Mão Dậu gặp Hoả Linh hội họp
    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", maodau[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HoaLinh)) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Phu Thê ở ${maodau[i]} gặp`, HoaLinh.join(", "));
        }
    }
    // Phú
    // Liêm Trinh tọa thủ gặp tứ sát Kình Đà Hỏa Linh 
    if (isSaoToaThuTaiCung("Phu Thê", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Hỏa Linh"])) {
        
        keyArr.push("Liêm Trinh tọa thủ cung Phu Thê gặp tứ sát Kình Đà Hỏa Linh");
        if (kiemTraCachCuc("Liêm Trinh", ["Bạch Hổ"])) {
            
            keyArr.push("Liêm Trinh tọa thủ cung Phu Thê gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
        }
    }

    // Liêm Phủ đồng cung tại Phu Thê
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Liêm Trinh", "Thiên Phủ")) {
        
        keyArr.push("Liêm Trinh, Thiên Phủ đồng cung tại Phu Thê");
    }
    // Liêm Tướng đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Liêm Trinh", "Thiên Tướng")) {
        
        keyArr.push("Liêm Trinh, Thiên Tướng đồng cung tại Phu Thê");
    }
    // Thất sát đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Liêm Trinh", "Thất Sát")) {
        
        keyArr.push("Liêm Trinh, Thất Sát đồng cung tại Phu Thê");
    }
    // Phá Quân đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Liêm Trinh", "Phá Quân")) {
        
        keyArr.push("Liêm Trinh, Phá Quân đồng cung tại Phu Thê");
    }
    // Tham Lang đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Liêm Trinh", "Tham Lang")) {
        
        keyArr.push("Liêm Trinh, Tham Lang đồng cung tại Phu Thê");
    }

}

function LuanCachCucSaoThienDongPhuThe(keyArr) {
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

    //Thiên Đồng toạ thủ cung Phu Thê
    if (isSaoToaThuTaiCung("Phu Thê", "Thiên Đồng")) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Phu Thê");
    }
    // Thiên Đồng miếu vượng địa
    for (let i = 0; i < MVD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", MVD[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + MVD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + MVD[i] + " gặp", HinhKy.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Phu Thê ở " + MVD[i]);
            }
            if (lasoData.gioitinh === "Nam") {
                
                keyArr.push("Quý Anh có Thiên Đồng tọa thủ cung Phu Thê ở " + MVD[i]);
            }

        }

    }
    // Thiên đồng dần thân thì Thiên Đồng Thiên Lương sẽ đồng cung
    for (let i = 0; i < DanThan.length; i++) {
        if (isHaiSaoDongCungTaiCung("Phu Thê", DanThan[i], "Thiên Đồng", "Thiên Lương")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Phu Thê đồng cung Thiên Lương ở " + DanThan[i]);
            if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Linh", "Hóa Kỵ"])) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Phu Thê đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Ngọ", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc", "Thiên Riêu", "Tang Môn"]) && lasoData.gioitinh === "Nữ") {
        
        keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Phu Thê ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Đồng", "Thiên Việt")) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Phu Thê đồng cung Thiên Việt");
        if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Tinh", "Linh Tinh", "Hóa Kỵ"])) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Phu Thê đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Tinh, Linh Tinh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", HD[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + HD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + HD[i] + " gặp", HinhKy.join(", "));
            }
        }
    }
    for (let i = 0; i < tuatngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tuatngo[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + tuatngo[i]);
        }
    }
    // Thiên đồng tại tỵ hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyhoi[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Phu Thê ở " + tyhoi[i]);
            if (lasoData.canNam === dinh_canh[i]) {
                
                keyArr.push("Người tuổi " + dinhcanh[i] + " có Thiên Đồng tọa thủ cung Phu Thê ở " + tyhoi[i]);
            }
            if (lasoData.gioitinh === "Nam" && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push("Quý Anh có Thiên Đồng tọa thủ cung Phu Thê ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
        }
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Đồng", "Thiên Lương")) {
        
        keyArr.push("Thiên Đồng, Thiên Lương đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Đồng", "Cự Môn")) {
        
        keyArr.push("Thiên Đồng, Cự Môn đồng cung tại Phu Thê");
    }
}

function LuanCachCucSaoVuKhucPhuThe(keyArr) {
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

    // Vũ Khúc tọa thủ cung Phu Thê
    if (isSaoToaThuTaiCung("Phu Thê", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Phu Thê");
    }

    for (let i = 0; i < mvd.length; i++) {
        // Vũ Khúc miếu vượng địa tọa thủ Phu Thê gặp cát tinh
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", cattinh)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
        }
        // Vũ Khúc tọa thủ cung Phu Thê gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", HinhKy)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", mvd[i], "Vũ Khúc", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Phu Thê", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Vũ Khúc") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Phu Thê", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]} đồng cung Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Phu Thê", mvd[i], "Vũ Khúc", KhoiViet)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", MaLoc) && isHaiSaoDongCungTaiCungChi("Phu Thê", mvd[i], "Vũ Khúc", MaLoc) === false) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${mvd[i]} gặp`, MaLoc.join(", "));

        }

    }

    for (let i = 0; i < suumui.length; i++) {
        // Vũ Khúc tọa thủ cung Phu Thê ở Sửu, Mùi 
        if (isSaoToaThuTaiCungVaChi("Phu Thê", suumui[i], "Vũ Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${suumui[i]}`);
        }
    }

    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Mão", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Phu Thê ở Mão");

    }
    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Dậu", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Phu Thê ở Dậu");
    }
    // Vũ Khúc hãm địa tọa thủ Phu Thê
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Vũ Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]}`);
            if (kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Vũ Khúc", HinhKy)) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            }
            // gặp cát tinh
            if (kiemTraCachCuc("Vũ Khúc", cattinh)) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", ham[i], "Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} đồng cung Phá Quân`);
            }
            if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} gặp Phá Quân`);
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", ham[i], "Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} đồng cung Phá Quân`);

                if (kiemTraCachCuc("Vũ Khúc", XuongKhuc)) {
                    
                    keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                }
            }

            if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", Kinh.concat(Da).concat("Quả Tú"))) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} gặp Kình Đà Quả Tú`);

            }
            if (kiemTraCachCuc("Vũ Khúc", Kinh.concat("Kiếp Sát"))) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
            }
        }
    }
    // Vũ Phá đồng cung tại Hợi gặp Thái Âm , gặp Tham Lang mà không phải là Giáp Kỉ Nhâm thì khổ vô cùng
    if (lasoData.canNam !== "G." || lasoData.canNam !== "N." || lasoData.canNam !== "K.") {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Hợi", "Vũ Khúc", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Phu Thê", "Hợi", "Thái Âm", "Tham Lang")) {
            
            keyArr.push("Vũ Khúc tọa thủ cung Phu Thê ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");

        }
    }

    for (let i = 0; i < gkn.length; i++) {
        if (lasoData.canNam === gkn[i] && isHaiSaoDongCungTaiCungChi("Phu Thê", "Hợi", "Vũ Khúc", "Phá Quân ") && isHaiSaoDongCungTaiCung("Phu Thê", "Vũ Khúc", "Hỏa Tinh")) {
            
            keyArr.push(`Người tuổi ${giap_ky_nham[i]}  có Vũ Khúc tọa thủ cung Phu Thê ở Hợi đồng cung Phá Quân và Hỏa Tinh`);

        }
    }

    // Vũ Khúc Tham Lang đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Vũ Khúc", "Tham Lang")) {
        
        keyArr.push("Vũ Khúc, Tham Lang đồng cung tại Phu Thê");
    }
    // Tại sủu mùi, vũ tham đồng cung và đồng cung kiếp sát
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", suumui[i], "Vũ Khúc", "Tham Lang") && isHaiSaoDongCungTaiCungChi("Phu Thê", suumui[i], "Vũ Khúc", "Kiếp Sát")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", danthan[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", KhoaLocQuyen)) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Phu Thê ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
        }
    }
    // Vũ Phủ 
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Vũ Khúc", "Thiên Phủ")) {
        
        keyArr.push("Vũ Khúc, Thiên Phủ đồng cung tại Phu Thê");
    }
    //Vũ Tướng
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Vũ Khúc", "Thiên Tướng")) {
        
        keyArr.push("Vũ Khúc, Thiên Tướng đồng cung tại Phu Thê");
        if (lasoData.gioitinh === "Nữ") {
            
            keyArr.push("Quý Chị có Vũ Khúc, Thiên Tướng đồng cung tại Phu Thê");
        }
        if (lasoData.gioitinh === "Nam") {
            
            keyArr.push("Quý Anh có Vũ Khúc, Thiên Tướng đồng cung tại Phu Thê");
        }
    }
    // Vũ Phá
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Vũ Khúc", "Phá Quân")) {
        
        keyArr.push("Vũ Khúc, Phá Quân đồng cung tại Phu Thê");
    }
    // Thất Sát đồng cung với Vũ Khúc
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Vũ Khúc", "Thất Sát")) {
        
        keyArr.push("Vũ Khúc, Thất Sát đồng cung tại Phu Thê");
    }

}

function LuanCachCucThaiDuongPhuThe(keyArr) {
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

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + mvd[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                
                keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));

            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thái Dương tọa thủ cung Phu Thê ở " + mvd[i]);
            }

        }
    }

    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", dac[i], "Thái Dương") && isHaiSaoDongCungTaiCung("Phu Thê", "Thái Dương", "Hóa Kỵ") && kiemTraCachCuc("Thái Dương", kinhdakhongkiephinhrieu) === false) {
            
            keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
        }
    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + ham[i]);
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                
                keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }

        }
    }


    for (let i = 0; i < hoity.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", hoity[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + hoity[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc)) {
                
                keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));

            }
        }

    }

    for (let i = 0; i < than_tuat_ty.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", than_tuat_ty[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + than_tuat_ty[i]);

        }
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thái Dương", "Thiên Hình")) {
        
        keyArr.push("Thái Dương tọa thủ cung Phu Thê đồng cung Thiên Hình");

    }

    for (let i = 0; i < canhtannhamky.length; i++) {
        if (lasoData.canNam === canhtannhamky[i] && isSaoToaThuTaiCungVaChi("Phu Thê", "Ngọ", "Thái Dương")) {
            
            keyArr.push("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Phu Thê ở Ngọ");
        }
    }
    for (let i = 0; i < binhdinh.length; i++) {
        if (lasoData.canNam === binhdinh[i] && isHaiSaoDongCungTaiCungChi("Phu Thê", "Tý", "Thái Dương")) {
            
            keyArr.push("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Phu Thê ở Tý");
        }
    }
    for (let i = 0; i < muithan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", muithan[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + muithan[i]);
        }
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thái Dương", "Thái Âm")) {
        
        keyArr.push("Thái Dương, Thái Âm đồng cung tại Phu Thê");
        if (lasoData.gioitinh === "Nữ") {
            
            keyArr.push("Quý Chị có Thái Dương, Thái Âm đồng cung tại Phu Thê");
        }
        if (lasoData.gioitinh === "Nam") {
            
            keyArr.push("Quý Anh có Thái Dương, Thái Âm đồng cung tại Phu Thê");
        }
    }

    if (lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Tài Bạch", "Mùi", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Quan Lộc", "Mùi", "Thái Dương", "Thái Âm")) {

        
        keyArr.push("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Phu Thê tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Tỵ") && isSaoToaThuTaiChi("Thái Âm", "Dậu")) {

        
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Phu Thê tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Tài Bạch", "Sửu", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Quan Lộc", "Sửu", "Thái Dương", "Thái Âm")) {

        
        keyArr.push("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Phu Thê tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {

        
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Phu Thê tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {
        
        keyArr.push("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Phu Thê tại Sửu");
    }
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc("Thái Dương", ["Thái Âm"])) {
        
        keyArr.push("Cung Phu Thê Vô Chính Diệu gặp Thái Dương, Thái Âm");
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", suumui[i], "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", XuongKhuc.concat(KhoiHong))) {
            
            keyArr.push("Thái Dương tọa thủ cung Phu Thê ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
        }
    }

    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Sửu", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", KhoaLocQuyen)) {
        
        keyArr.push("Thái Dương tọa thủ cung Phu Thê ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
    }
}

function LuanCachCucThienCoPhuThe(keyArr) {
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
    const danthan = ["Dần", "Thân"];


    // Thiên Cơ Miếu Vượng Địa
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Thiên Cơ")) {
            
            keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + mvd[i]);
            if (kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(LocHinhYQuangQuy))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(Linh).concat(Hinh))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Cơ tọa thủ cung Phu Thê ở " + mvd[i]);
            }
        }
    }
    // Thiên Cơ Phu Thê nam Thìn Tuất
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", thintuat[i], "Thiên Cơ") && lasoData.gioitinh === "Nam") {
            
            keyArr.push(`Quý Anh có Thiên Cơ tọa thủ cung Phu Thê ở ${thintuat[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", thintuat[i], "Thiên Cơ") && isHaiSaoDongCungTaiCungChi("Phu Thê", thintuat[i], "Thiên Cơ", "Thiên Lương")) {
            
            keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Phu Thê ở ${thintuat[i]}`);
            if (kiemTraDiaSinh("Thiên Cơ", kinhdahoalinhtuong)) {
                
                keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Phu Thê ở ${thintuat[i]} gặp các sao Kình Đà Hỏa Linh Tướng`);
            }
        }

    }


    //Thiên Cơ Mão Dậu
    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", maodau[i], "Thiên Cơ")) {

            for (let j = 0; j < at_tan_ky_binh.length; j++) {
                if (lasoData.canNam === atkb[j] && kiemTraCachCuc("Thiên Cơ", SongHao)) {

                    
                    keyArr.push(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Phu Thê ở ${maodau[i]} gặp Song Hao`);
                }

            }
        }
    }
    // Thiên Cơ Tý Ngọ
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyngo[i], "Thiên Cơ")) {
            for (let j = 0; j < at_binh_dinh.length; j++) {
                if (lasoData.canNam === abd[j] && kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                    
                    keyArr.push(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Phu Thê ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                }

            }
        }

    }
    // Thiên Cơ Hãm địa
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Thiên Cơ")) {
            
            keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + ham[i]);
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push("Thiên Cơ tọa thủ cung Phu Thê ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
        }
    }
    // Cơ Nguyệt Đồng Lương
    if (isSaoToaThuTaiCung("Phu Thê", "Thiên Cơ") && kiemTraCachCuc("Thiên Cơ", nguyetdongluong)) {
        
        keyArr.push("Thiên Cơ tọa thủ cung Phu Thê gặp Thiên Đồng, Thiên Lương, Thái Âm");
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Cơ", "Thiên Lương")) {

        if (lasoData.gioitinh === "Nữ") {
            
            keyArr.push("Quý Chị có Thiên Cơ, Thiên Lương đồng cung tại Phu Thê");
        }
        if (lasoData.gioitinh === "Nam") {
            
            keyArr.push("Quý Anh có Thiên Cơ, Thiên Lương đồng cung tại Phu Thê");
        }
    }
    // Cự Môn đồng cung
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Cơ", "Cự Môn")) {

        if (lasoData.gioitinh === "Nữ") {
            
            keyArr.push("Quý Chị có Thiên Cơ, Cự Môn đồng cung tại Phu Thê");
        }
        if (lasoData.gioitinh === "Nam") {
            
            keyArr.push("Quý Anh có Thiên Cơ, Cự Môn đồng cung tại Phu Thê");
        }
    }
    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", danthan[i], "Thiên Cơ", "Thái Âm")) {
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Cơ, Thái Âm đồng cung tại Phu Thê ở " + danthan[i]);
            }
            if (lasoData.gioitinh === "Nam") {
                
                keyArr.push("Quý Anh có Thiên Cơ, Thái Âm đồng cung tại Phu Thê ở " + danthan[i]);
            }
        }
    }



}
function LuanCacCachCucThienPhuPhuThe(keyArr) {

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

    if (isSaoToaThuTaiCung("Phu Thê", "Thiên Phủ")) {
        
        keyArr.push("Thiên Phủ tọa thủ cung Phu Thê");

        if (kiemTraCachCuc("Thiên Phủ", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Phu Thê gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
        }
        if (kiemTraCachCuc("Thiến Phủ", lucsattinh)) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Phu Thê gặp các sao Sát tinh: ", lucsattinh.join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Phu Thê gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Phu Thê gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }

    }
    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Tuất", "Thiên Phủ")) {
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Phu Thê ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Phu Thê ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        for (let i = 0; i < gk.length; i++) {
            if (lasoData.canNam === gk[i] && kiemTraCachCuc("Thiên Phủ", lucsattinh) === false) {
                
                keyArr.push(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Phu Thê ở Tuất không gặp Sát tinh`);

            }
        }
    }
    for (let i = 0; i < canhnham.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Tý", "Thiên Phủ", "Vũ Khúc")) {
            
            keyArr.push(`Thiên Phủ tọa thủ cung Phu Thê ở Tý đồng cung Vũ Khúc`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Phu Thê ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
        }
    }

    for (let i = 0; i < ngotuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ngotuat[i], "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", "Thiên Tướng")) {
            
            keyArr.push(`Thiên Phủ tọa thủ cung Phu Thê ở ${ngotuat[i]} gặp Thiên Tướng`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Phu Thê ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat("Thiên Tướng").join(", "));
            }
            if (kiemTraCachCuc("Thiên Phủ", "Thiên Tướng, Thiên Lương")) {
                
                keyArr.push(`Thiên Phủ tọa thủ cung Phu Thê ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
            }

        }
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", TaHuu.concat(XuongKhuc))) {
        
        keyArr.push("Thiên Phủ tọa thủ cung Phu Thê gặp các sao Tả Hữu, Xương Khúc");
        if (kiemTraCachCuc("Thiên Phủ", "Lộc Tồn")) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Phu Thê gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
        }

    }

}

function LuanCachCucThaiAmPhuThe(keyArr) {

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
    const maothinty = ["Mão", "Thìn", "Tỵ"];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm")) {
        
        keyArr.push("Thái Âm tọa thủ cung Phu Thê");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Thái Âm")) {
            
            keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", daohonghy)) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }

        }
    }
    for (let i = 0; i < dac.length; i++) {

        if (isHaiSaoDongCungTaiCungChi("Phu Thê", dac[i], "Thái Âm", "Hoá Kỵ") && kiemTraCachCuc("Thái Âm", lucsattinh) === false) {
            
            keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);

        }
    }
    for (let i = 0; i < mieu.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mieu[i], "Thái Âm")) {
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Thái Âm tọa thủ cung Phu Thê ở ${mieu[i]}`);
            }
            if (lasoData.gioitinh === "Nam") {
                
                keyArr.push(`Quý Anh có Thái Âm tọa thủ cung Phu Thê ở ${mieu[i]}`);
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Thái Âm")) {
            
            keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${ham[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", Kinh.concat(Da))) {
                
                keyArr.push(`Thái Âm tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
            }
        }
    }


    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thái Âm", "Thiên Hình")) {
        
        keyArr.push("Thái Âm tọa thủ cung Phu Thê đồng cung Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm")) {
        
        keyArr.push(`Thái Âm tọa thủ cung Phu Thê`);
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm") && isHaiSaoDongCungTaiCung("Phu Thê", "Thái Âm", "Vũ Khúc") && isHaiSaoDongCungTaiCung("Phu Thê", "Thái Âm", "Lộc Tồn")) {
        
        keyArr.push("Thái Âm tọa thủ cung Phu Thê đồng cung Vũ Khúc, Lộc Tồn");
        if (kiemTraCachCuc("Thái Âm", TaHuu)) {
            
            keyArr.push("Thái Âm tọa thủ cung Phu Thê đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
        }
    }

    for( let i = 0; i < maothinty.length; i++) {
        if(isSaoToaThuTaiCungVaChi("Phu Thê", maothinty[i], "Thái Âm")) {
            if( lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Thái Âm tọa thủ cung Phu Thê ở ${maothinty[i]}`);
            }
            if( lasoData.gioitinh === "Nam") {
                
                keyArr.push(`Quý Anh có Thái Âm tọa thủ cung Phu Thê ở ${maothinty[i]}`);
            }
        }
    }

    // Thiên Đồng đồng cung tại Tý
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Tý", "Thái Âm", "Thiên Đồng")) {
        if (lasoData.gioitinh === "Nữ") {
            
            keyArr.push("Quý Chị có Thái Âm, Thiên Đồng đồng cung tại Phu Thê ở Tý");
        }
        if (lasoData.gioitinh === "Nam") {
            
            keyArr.push("Quý Anh có Thái Âm, Thiên Đồng đồng cung tại Phu Thê ở Tý");
        }
    }
}
function LuanCachCucThamLangPhuThe(keyArr) {

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
    const tyngo = ["Tý", "Ngọ"];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Phu Thê", "Tham Lang")) {
        
        keyArr.push("Tham Lang tọa thủ cung Phu Thê");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Tham Lang")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${mvd[i]}`);

            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            for (let j = 0; j < mauky.length; j++) {
                if (kiemTraCachCuc("Tham Lang", HoaLinh) && lasoData.canNam === mk[j]) {
                    
                    keyArr.push("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Phu Thê ở " + mvd[i] + " gặp các sao: ", HoaLinh.join(", "));
                }
            }
        }

    }

    for (let i = 0; i < vuong.length; i++) {
        if(isSaoToaThuTaiCungVaChi("Phu Thê", vuong[i], "Tham Lang") )
            {
                if( lasoData.gioitinh === "Nữ") {
                    
                    keyArr.push(`Quý Chị có Tham Lang tọa thủ cung Phu Thê ở ${vuong[i]}`);
                }
                if( lasoData.gioitinh === "Nam") {
                    
                    keyArr.push(`Quý Anh có Tham Lang tọa thủ cung Phu Thê ở ${vuong[i]}`);
                }   
            } 

        if (isHaiSaoDongCungTaiCung("Phu Thê", vuong[i], "Tham Lang", "Hoá Kỵ") && kiemTraCachCuc("Tham Lang", lucsattinh) === false) {
            
            keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Tham Lang")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${ham[i]}`);
            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", lucsattinh)) {
                
                keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (isHaiSaoDongCungTaiCung("Phu Thê", ham[i], "Tham Lang", "Thiên Riêu")) {
                
                keyArr.push(`Tham Lang đồng cung Thiên Riêu tại cung Phu Thê ở ${ham[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCung("Phu Thê", tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push(`Tham Lang đồng cung Vũ Khúc tại cung Phu Thê ở ${tumo[i]}`);
        }
        if (isHaiSaoDongCungTaiCung(lasoData.cungCu, tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push(`Tham Lang đồng cung tại ${lasoData.cungCu} ở ${tumo[i]}s`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hỏa Tinh", "Linh Tinh"])) {
            
            keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", suumui[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) === true && kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu)) === false) {
            
            keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) && kiemTraCachCuc("Tham Lang", lucsattinh) && kiemTraCachCuc("Tham Lang", "Hóa Kỵ")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Phu Thê ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
        }
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tham Lang", "Liêm Trinh")) {
        
        keyArr.push("Tham Lang tọa thủ cung Phu Thê đồng cung Liêm Trinh");

    }

    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Hợi", "Tham Lang", "Liêm Trinh") && kiemTraCachCuc("Tham Lang", Kinh.concat(Da).concat("Thiên Hư, Thiên Không, Địa Không, Địa Kiếp"))) {
        
        keyArr.push("Tham Lang tọa thủ cung Phu Thê ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");

    }
    for(let i =0; i<dac.length; i++) {
        if(isSaoToaThuTaiCungVaChi("Phu Thê", dac[i], "Tham Lang")) {
            if( lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Tham Lang tọa thủ cung Phu Thê ở ${dac[i]}`);
            }
            if( lasoData.gioitinh === "Nam") {
                
                keyArr.push(`Quý Anh có Tham Lang tọa thủ cung Phu Thê ở ${dac[i]}`);
            }
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyngo[i], "Tham Lang")) {
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Tham Lang tọa thủ cung Phu Thê ở ${tyngo[i]}`);
            }
            if (lasoData.gioitinh === "Nam") {
                
                keyArr.push(`Quý Anh có Tham Lang tọa thủ cung Phu Thê ở ${tyngo[i]}`);
            }
        }
    }


}
function LuanCachCucCuMonPhuThe(keyArr) {
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

    if (isSaoToaThuTaiCung("Phu Thê", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", mvd[i], "Cự Môn")) {
            
            keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
            }

            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Phu Thê", mvd[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Cự Môn")) {

            
            keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", KhoaTueHinh.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Phu Thê", ham[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Hóa Lộc, Thái Tuế"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Cự Môn", ["Thiên Hư", "Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp`);
            }



        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        for (let j = 0; j < dinhcanh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", thintuat[i], "Cự Môn") && lasoData.canNam === dc[j]) {
                
                keyArr.push(`Người tuổi ${dinhcanh[j]} có Cự Môn tọa thủ cung Phu Thê ở ${thintuat[i]}`);
            }
        }
        for (let j = 0; j < quytan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", thintuat[i], "Cự Môn") && lasoData.canNam === qt[j]) {
                
                keyArr.push(`Người tuổi ${quytan[j]} có Cự Môn tọa thủ cung Phu Thê ở ${thintuat[i]}`);
            }
        }

    }
    for (let i = 0; i < suumui.length; i++) {
        for (let j = 0; j < atbinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", suumui[i], "Cự Môn") && lasoData.canNam === ab[j]) {
                
                keyArr.push(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Phu Thê ở ${suumui[i]}`);
            }
        }


    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Cự Môn", "Hóa Kỵ")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê đồng cung Hoá Kỵ");
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê đồng cung Thái Dương");
    }
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Dần", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê ở Dần đồng cung Thái Dương");
    }

    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Thân", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê ở Thân đồng cung Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Thân", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Quan Lộc", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê ở Thân gặp Thái Dương, Quan Lộc có Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Dần", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Quan Lộc", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê ở Dần gặp Thái Dương, Quan Lộc có Thái Dương");

    }
    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCung("Quan Lộc", "Thái Dương", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Quan Lộc đồng cung Thái Dương xung chiếu cung Phu Thê ở Dần");

    }
    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", danthan[i], "Cự Môn", "Thái Dương") && kiemTraCachCuc("Cự Môn", "Hóa Lộc")) {
            
            keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Dần", "Thiên Cơ", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Phu Thê ở Dần đồng cung Thiên Cơ");
    }



    for (let i = 0; i < attankybinh.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", maodau[j], "Cự Môn", "Thiên Cơ") && lasoData.canNam === atkb[i]) {
                
                keyArr.push(`Người tuổi ${attankybinh[i]} có Cự Môn đồng cung Thiên Cơ tại cung Phu Thê ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", maodau[j], "Cự Môn", "Thiên Cơ")) {
                
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Phu Thê ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", maodau[j], "Cự Môn", "Thiên Cơ") && kiemTraCachCuc("Cự Môn", ["Đại Hao", "Tiểu Hao"])) {
                
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Phu Thê ở ${maodau[j]} gặp Đại Hao, Tiểu Hao`);
            }
            if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCungChi("Phu Thê", maodau[j], "Cự Môn", "Thiên Cơ")) {
                
                keyArr.push('Quý chị có Cự Môn đồng cung Thiên Cơ tại cung Phu Thê ở', maodau[j].join);
            }
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < binhtan.length; j++) {
            if (isSaoToaThuTaiCung("Phu Thê", tumo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Kình Dương", "Hoá Kỵ"]) && lasoData.canNam !== bt[j]) {
                
                keyArr.push(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Phu Thê ở ${tumo[i]} gặp Kình Dương, Hoá Kỵ`);

            }

        }
        for (let i = 0; i < tyhoi.length; i++) {
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn đồng cung Lộc Tồn tại cung Phu Thê ở ${tyhoi[i]}`);
            }
        }

        for (let i = 0; i < tyngo.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", tyngo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", KhoaLocQuyen)) {
                
                keyArr.push(`Cự Môn tọa thủ cung Phu Thê ở ${tyngo[i]} gặp Khoa Lộc Quyền`);

            }
        }
    }

}
function LuanCachCucThienTuongPhuThe(keyArr) {
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
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Phu Thê ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc))) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));


        }
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", lucsattinh)) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", vuong[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Kình Dương", "Đà La"])) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Phu Thê ở ${vuong[i]} gặp Kình Dương, Đà La`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", ham[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Phu Thê ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCung("Phu Thê", ham[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Hóa Lộc", "Thái Tuế"])) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Phu Thê ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
        }
        if (lasoData.gioitinh === "Nữ" && isSaoToaThuTaiCung("Phu Thê", ham[i], "Thiên Tướng")) {
            
            keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Phu Thê ở ${ham[i]}`);
        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", thintuat[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Phu Thê ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < tyngo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyngo[i], "Thiên Tướng", "Liêm Trinh") && kiemTraCachCuc("Thiên Tướng", "Kình Dương")) {
            
            keyArr.push(`Thiên Tướng đồng cung Liêm Trinh tại cung Phu Thê ở ${tyngo[i]} gặp Kình Dương`);
        }
    }

    if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Tướng", "Hồng Loan")) {
        
        keyArr.push("Quý chị có Thiên Tướng đồng cung Hồng Loan tại cung Phu Thê");
    }
    if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Thiên Tướng", DaoHongHoaKhuc)) {
        
        keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Phu Thê gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
    }
   
    if(isSaoToaThuTaiCung("Phu Thê", "Thiên Tướng") ){
        if(lasoData.gioitinh==="Nữ" ){
            
            keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Phu Thê");

        }else{
            
            keyArr.push("Quý anh có Thiên Tướng tọa thủ cung Phu Thê");
        }
    }

    for (let i=0; i< dac.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", dac[i], "Thiên Tướng")) {
            if( lasoData.gioitinh === "Nữ" ){
                
                keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Phu Thê ở ${dac[i]}`);
            }
            if( lasoData.gioitinh === "Nam" ){
                
                keyArr.push(`Quý anh có Thiên Tướng tọa thủ cung Phu Thê ở ${dac[i]}`);
            }
            
        }
    }

}

function LuanCachCucThienLuongPhuThe(keyArr) {
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

    if (isSaoToaThuTaiCung("Phu Thê", "Thiên Lương")) {
        if( lasoData.gioitinh === "Nữ" ) {
            
            keyArr.push("Quý chị có Thiên Lương tọa thủ cung Phu Thê");
        }
        if( lasoData.gioitinh === "Nam" ) {
            
            keyArr.push("Quý anh có Thiên Lương tọa thủ cung Phu Thê");
        }
       
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thiên Lương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", KhoiViet.concat(XuongKhuc).concat("Thái Tuế"))) {
                
                keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", lucsattinh.concat(HoaLinh))) {
                
                keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));

            }
        }

    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", ham[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${ham[i]}`);
        }
    }

    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", thintuat[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < dinhkyquy.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", "Ngọ", "Thiên Lương") && lasoData.canNam === dkq[i]) {
            
            keyArr.push("Người tuổi", dinhkyquy[i], "có Thiên Lương tọa thủ cung Phu Thê ở Ngọ");

        }
    }
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Dần", "Thiên Lương", "Thái Dương")) {
        
        keyArr.push("Thiên Lương đồng cung Thái Dương tại cung Phu Thê ở Dần");
    }

    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Tý", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Xương", "Hoá Lộc"])) {
        
        keyArr.push("Thiên Lương tọa thủ cung Phu Thê ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
    }
    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Ngọ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Khúc", "Hoá Lộc"])) {
        
        keyArr.push("Thiên Lương tọa thủ cung Phu Thê ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
    }

    for (let i = 0; i < tysuudanmaothintyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tysuudanmaothintyngo[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Linh Tinh"])) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", vuong[i], "Thiên Lương", "Thiên Đồng")) {
            
            keyArr.push(`Thiên Lương đồng cung Thiên Đồng tại cung Phu Thê ở ${vuong[i]}`);
        }
    }

    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCungChi("Quan Lộc", "Thân", "Thiên Lương", "Thiên Đồng") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Thiên Cơ"])) {
        
        keyArr.push("Thiên Lương đồng cung Thiên Đồng ở Thân xung chiếu cung Phu Thê ở Dần gặp Thái Âm, Thiên Cơ");
    }
    for (let i = 0; i < mieu.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", mieu[i], "Thiên Lương", "Văn Xương")) {
            
            keyArr.push(`Thiên Lương đồng cung Văn Xương tại cung Phu Thê ở ${mieu[i]}`);
        }
    }
    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Tỵ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", lucsattinh.concat("Đại Hao, Tiểu Hao"))) {
        
        keyArr.push("Thiên Lương tọa thủ cung Phu Thê ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Thiên Lương", "Thiên Mã")) {
            
            keyArr.push(`Thiên Lương đồng cung Thiên Mã tại cung Phu Thê ở ${tyhoi[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyhoi[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thiên Mã"])) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Phu Thê ở ${tyhoi[i]} gặp Thiên Mã`);
        }
    }

}
function LuanCachCucThatSatPhuThe(keyArr) {
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
    const tyngo = ["Tý", "Ngọ"];

    const mvd = mieu.concat(vuong).concat(dac);

    if (isSaoToaThuTaiCung("Phu Thê", "Thất Sát")) {
        
        keyArr.push("Thất Sát tọa thủ cung Phu Thê");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Thất Sát")) {
            
            keyArr.push(`Thất Sát tọa thủ cung Phu Thê ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Phu Thê ở ${mvd[i]}`);
            }

        }
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh))) {
            
            keyArr.push(`Thất Sát tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));

        }
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
            
            keyArr.push(`Thất Sát tọa thủ cung Phu Thê ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", mvd[i], "Thất Sát", "Thiên Hình")) {
            
            keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Phu Thê ở ${mvd[i]}`);
        }
    }

    for (let i = 0; i < giapcanhdinhky.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", danthan[j], "Thất Sát") && lasoData.canNam === gcdk[i]) {
                
                keyArr.push(`Người tuổi ${giapcanhdinhky[i]} có Thất Sát tọa thủ cung Phu Thê ở ${danthan[j]}`);
            }

        }
    }
    for (let i =0.; i< danthan.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", danthan[i], "Thất Sát") ){
            if( lasoData.gioitinh === "Nữ" ){
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Phu Thê ở ${danthan[i]}`);
            }else{
                
                keyArr.push(`Quý anh có Thất Sát tọa thủ cung Phu Thê ở ${danthan[i]}`);
            }
        }
    }
    for (let i=0; i< tyngo.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", tyngo[i], "Thất Sát")) {
             if( lasoData.gioitinh === "Nữ" ){
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Phu Thê ở ${tyngo[i]}`);  
            }else{
                
                keyArr.push(`Quý anh có Thất Sát tọa thủ cung Phu Thê ở ${tyngo[i]}`);
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", ham[i], "Thất Sát")) {
            
            keyArr.push(`Thất Sát tọa thủ cung Phu Thê ở ${ham[i]}`);
            if (kiemTraCachCuc("Thất Sát", tahuulongphuongquangquy)) {
                
                keyArr.push(`Thất Sát tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
            }
            if (kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
                
                keyArr.push(`Thất Sát tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", ham[i], "Thất Sát", "Thiên Hình")) {
                
                keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Phu Thê ở ${ham[i]}`);
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Phu Thê ở ${ham[i]}`);
            }
        }
    }
    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", maodau[i], "Thất Sát") && lasoData.canNam === at[j]) {
                
                keyArr.push(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Phu Thê ở ${maodau[i]}`);
            }
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Tỵ", "Thất Sát", "Tử Vi")) {
        
        keyArr.push("Thất Sát đồng cung Tử Vi tại cung Phu Thê ở Tỵ");
        if (kiemTraCachCuc("Thất Sát", batkhoamaanhong)) {
            
            keyArr.push("Thất Sát đồng cung Tử Vi tại cung Phu Thê ở Tỵ gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
        }
    }

    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", suumui[i], "Thất Sát", "Liêm Trinh")) {
            
            keyArr.push(`Thất Sát đồng cung Liêm Trinh tại cung Phu Thê ở ${suumui[i]}`);
        }
        for (let j = 0; j < atky.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", suumui[i], "Thất Sát") && lasoData.canNam === ak[j]) {
                
                keyArr.push(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Phu Thê ở ${suumui[i]}`);
            }
        }
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Phá Quân", "Tham Lang"])) {
        
        keyArr.push(`Thất Sát tọa thủ cung Phu Thê gặp Phá Quân, Tham Lang`);
        for (let i = 0; i < td.length; i++) {
            if (lasoData.gioitinh === "Nữ" && lasoData.canNam === td[i]) {
                
                keyArr.push(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Phu Thê gặp Phá Quân, Tham Lang`);
            }
        }

    }
    if (isSaoToaThuTaiCung("Phu Thê", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
        
        keyArr.push("Thất Sát tọa thủ cung Phu Thê gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
    }

    for (let i = 0; i < binhmau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Ngọ", "Thất Sát", "Kình Dương") && lasoData.canNam === bm[i]) {
            
            keyArr.push(`Người tuổi ${binhmau[i]} có Thất Sát đồng cung Kình Dương tại cung Phu Thê`);
        }
        if (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
            
            keyArr.push(`Thất Sát tọa thủ cung ${lasoData.cungCu} gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
        }

    }
}
function LuanCachCucPhaQuanPhuThe(keyArr) {
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
        if (isSaoToaThuTaiCung("Phu Thê", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${mvd[i]}`);

        } if (kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc) && isSaoToaThuTaiCung("Phu Thê", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (kiemTraCachCuc("Phá Quân", hokyhinhsonghao) && isSaoToaThuTaiCung("Phu Thê", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
    }
    for (let i = 0; i < mieu.length; i++) {
        for (let j = 0; j < dinhkyquy.length; j++) {
            if (isSaoToaThuTaiCung("Phu Thê", mieu[i], "Phá Quân") && lasoData.canNam === dkq[j]) {
                
                keyArr.push(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Phu Thê ở ${mieu[i]}`);

            }

        }

    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", ham[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", hokyhinhsonghao)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", lucsattinh)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }


    }

    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attanquy.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", maodau[i], "Phá Quân") && lasoData.canNam === atq[j]) {
                
                keyArr.push(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Phu Thê ở ${maodau[i]}`);
            }
        }
    }

    for (let i = 0; i < gcdk.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", danthan[j], "Phá Quân") && lasoData.canNam === gcdk[i]) {
                
                keyArr.push(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Phu Thê ở ${danthan[j]}`);
            }
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", danthan[i], "Phá Quân")) {
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Phá Quân tọa thủ cung Phu Thê ở ${danthan[i]}`);
            }
            else {
                
                keyArr.push(`Quý anh có Phá Quân tọa thủ cung Phu Thê ở ${danthan[i]}`);
            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyhoi[i], "Phá Quân") && lasoData.canNam === "Mậu") {
            
            keyArr.push(`Người tuổi Mậu có Phá Quân tọa thủ cung Phu Thê ở ${tyhoi[i]}`);
        }
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Thiên Việt", "Đại Hao", "Tiểu Hao", "Hoả Tinh", "Thiên Hình"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Phu Thê gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Linh Tinh", "Thiên Việt", "Thiên Hình"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Phu Thê gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
    }

    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Ngọ", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Phu Thê", "Ngọ", "Phá Quân", "Lộc Tồn") && kiemTraCachCuc("Phá Quân", ["Thiếu Dương"])) {
        
        keyArr.push("Phá Quân đồng cung Lộc Tồn tại cung Phu Thê ở Ngọ và gặp Thiếu Dương");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tumo[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoá Lộc", "Thiên Hình"])) {
            
            keyArr.push(`Phá Quân tọa thủ cung Phu Thê ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
        }
    }

    if(isSaoToaThuTaiCung("Phu Thê", "Phá Quân") ){
        if(lasoData.gioitinh === "Nữ"){
            
            keyArr.push("Quý chị có Phá Quân tọa thủ cung Phu Thê");
        }
        else{
            
            keyArr.push("Quý anh có Phá Quân tọa thủ cung Phu Thê");
        }

    }
}
function LuanCachCucXuongKhucPhuThe(keyArr) {
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
            if (isSaoToaThuTaiCungVaChi("Phu Thê", dac_dia[i], XuongKhuc[j])) {
                
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(XuongKhuc[j], tuphukhoiviettahuukhoaquyenloc)) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Lương"])) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]} gặp Thiên Lương`);
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Cơ", "Hóa Lộc"])) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                }
                if (isHaiSaoDongCungTaiCung("Phu Thê", dac_dia[i], XuongKhuc[j], "Hóa Lộc")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Hoá Lộc tại Phu Thê ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Phu Thê", dac_dia[i], XuongKhuc[j], "Vũ Khúc")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Vũ Khúc tại cung Phu Thê ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Phu Thê", dac_dia[i], XuongKhuc[j], "Tả Phù")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Tả Phù tại cung Phu Thê ở ${dac_dia[i]}`);

                }
            }
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Văn Xương") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Khúc") || isSaoToaThuTaiCung("Phụ Mẫu", "Văn Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Xương")) {
        
        keyArr.push(`Văn Xương Văn Khúc giáp Phu Thê`);
        if (isSaoToaThuTaiCung("Phu Thê", "Thái Dương")) {
            
            keyArr.push("Phu Thê có Thái Dương giáp Văn Xương, Văn Khúc");
        }
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Văn Xương") && kiemTraCachCuc("Văn Xương", ["Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
        
        keyArr.push("Phu Thê có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Văn Xương", "Thiên Khôi", "Thiên Việt"])) {
        
        keyArr.push("Phu Thê có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", tyhoi[i], XuongKhuc[j]) && isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], XuongKhuc[j], "Liêm Trinh")) {
                
                keyArr.push(`${XuongKhuc[j]} đồng cung Liêm Trinh tại cung Phu Thê ở ${tyhoi[i]}`);
            }
        }
    }

    for (let i = 0; i < danmao.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", danmao[i], XuongKhuc[j], "Phá Quân") && kiemTraCachCuc(XuongKhuc[j], "Kình Dương")) {
                
                keyArr.push(`${XuongKhuc[j]} đồng cung Phá Quân tại cung Phu Thê ở ${danmao[i]} gặp Kình Dương`);

            }
        }
    }
}
function LuanCachCucKhoiVietPhuThe(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuvutuongxuongkhuctahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const xuongkhuckhoatuetau = ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"];

    for (let i = 0; i < KhoiViet.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", KhoiViet[i])) {

            if (kiemTraCachCuc(KhoiViet[i], tuphuvutuongxuongkhuctahuukhoaquyenloc)) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Phu Thê gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], lucsattinh)) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Phu Thê gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Kỵ", "Thiên Hình"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Phu Thê gặp Hóa Kỵ, Thiên Hình`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Phu Thê gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);

            }
            if (kiemTraCachCuc(KhoiViet[i], ["Thiên Lương", "Thiên Cơ", "Hoá Lộc"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Phu Thê gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Lộc"]) && kiemTraCachCuc(KhoiViet[i], lucsattinh) === false) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Phu Thê gặp Hóa Lộc mà không gặp các sao Sát tinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Ngọ", "Tử Vi", KhoiViet[i])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Phu Thê ở Ngọ đồng cung Tử Vi`);
            }

        }

    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Khôi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Việt") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Việt") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Khôi")) {
        
        keyArr.push(`Khôi Việt giáp Phu Thê`);
        if (isSaoToaThuTaiCung("Phu Thê", "Thái Dương")) {
            
            keyArr.push("Phu Thê có Thái Dương giáp Khôi Việt");
        }
        if (isSaoToaThuTaiCung("Phu Thê", "Hóa Lộc")) {
            
            keyArr.push("Phu Thê có Hóa Lộc giáp Khôi Việt");
        }
    }
}
function LuanCachCucLocTonPhuThe(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];
    const tuphuxuongkhuckhoivietma = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Thiên Mã"];
    const quangquyquanrieuy = ["Ân Quang", "Thiên Quý", "Quan Phù", "Thiên Y", "Thiên Riêu"];
    const khongkiephaokypha = ["Địa Không", "Địa Kiếp", "Đại Hao", "Tiểu Hao", "Hóa Kỵ", "Tuế Phá"];

    if (isSaoToaThuTaiCung("Phu Thê", "Lộc Tồn")) {

        if (kiemTraCachCuc("Lộc Tồn", tuphuxuongkhuckhoivietma)) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Phu Thê gặp", tuphuxuongkhuckhoivietma.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", quangquyquanrieuy)) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Phu Thê gặp", quangquyquanrieuy.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", khongkiephaokypha)) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Phu Thê gặp", khongkiephaokypha.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", ["Phá Quân"])) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Phu Thê gặp Phá Quân");

        }
        if (isHaiSaoDongCungTaiCung("Phu Thê", "Lộc Tồn", "Hóa Lộc")) {
            
            keyArr.push("Lộc Tồn đồng cung Hoá Lộc tại cung Phu Thê");
        }
        if (isSaoToaThuTaiCung("Phu Thê", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Phu Thê", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Hóa Lộc")) {
            
            keyArr.push("Song Lộc hội chiếu tại cung Phu Thê");

        }
        if (isHaiSaoDongCungTaiCung("Phu Thê", "Lộc Tồn", "Thiên Mã")) {
            
            keyArr.push("Lộc Tồn đồng cung Thiên Mã tại cung Phu Thê");
        }
        if (isSaoToaThuTaiCung("Phu Thê", "Thiên Mã") && kiemTraCachCuc("Thiên Mã", "Lộc Tồn") && kiemTraCachCuc("Thiên Mã", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false || isSaoToaThuTaiCung("Phu Thê", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Lộc Tồn", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false) {
            
            keyArr.push("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung Phu Thê ở ${tyngo[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Quan Lộc", tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung Quan Lộc ở ${tyngo[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi(lasoData.cungCu, tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
        }
    }
}

function LuanCachCucTaHuuPhuThe(keyArr) {
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
        if (isSaoToaThuTaiCung("Phu Thê", TaHuu[i])) {

            if (kiemTraCachCuc(TaHuu[i], tuphuxuongkhuckhoivietkhoaquyenloc)) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Phu Thê gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], conguyetdongluonglongphuong)) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Phu Thê gặp`, conguyetdongluonglongphuong.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], lucsattinh)) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Phu Thê gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], ["Kình Dương"])) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Phu Thê gặp Kình Dương`);
            }
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", suumui[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc(KhoaLocQuyen)) {
            
            keyArr.push(`Tả Phù, Hữu Bật đồng cung Phu Thê ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tumo[i], "Tả Phù") && isSaoToaThuTaiCungVaChi("Phu Thê", tumo[i], "Hữu Bật") && kiemTraCachCuc("Tả Phù", KhoaLocQuyen.concat("Tử Vi", "Thiên Phủ"))) {
            
            keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Phu Thê ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            if (kiemTraCachCuc("Tả Phù", ["Thiên Cơ", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Phu Thê ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
            }
            if (kiemTraCachCuc("Tả Phù", ["Thất Sát", "Phá Quân", "Liêm Trinh"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Phu Thê ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", tumo[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc("Tả Phù", ["Văn Xương ", "Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật đồng cung tại Phu Thê ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
            }

        }


    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Hữu Bật", "Thiên Tướng")) {
            
            keyArr.push(`Hữu Bật, Thiên Tướng đồng cung tại Phu Thê ở ${tyhoi[i]}`);
        }
    }



    if (isSaoToaThuTaiCung("Phụ Mẫu", "Tả Phù") && isSaoToaThuTaiCung("Huynh Đệ", "Hữu Bật") || isSaoToaThuTaiCung("Phụ Mẫu", "Hữu Bật") && isSaoToaThuTaiCung("Huynh Đệ", "Tả Phù")) {
        
        keyArr.push(`Tả Phù Hữu Bật giáp Phu Thê`);
        if (isSaoToaThuTaiCung("Phu Thê", "Tử Vi")) {
            
            keyArr.push(`Phu Thê có Tử Vi giáp Tả Phù Hữu Bật`);
        }
    }
}
function LuanCachCucKinhDuongDaLaPhuThe(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", " Tuất", "Sửu", "Mùi"];
    const ham_dia = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const tymui = ["Tỵ", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];

    if (isSaoToaThuTaiCung("Phu Thê", "Kình Dương")) {

        if (kiemTraCachCuc("Kình Dương", ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
            
            keyArr.push("Kình Dương toạ thủ cung Phu Thê gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
        }
        if (isHaiSaoDongCungTaiCung("Phu Thê", "Kình Dương", "Cự Môn") && isHaiSaoDongCungTaiCung("Phu Thê", "Kình Dương", "Liêm Trinh") && isHaiSaoDongCungTaiCung("Phu Thê", "Kình Dương", "Hóa Kỵ")) {
            
            keyArr.push("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung tại Phu Thê");
        }

    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", dac_dia[i], "Kình Dương")) {
            
            keyArr.push(`Kình Dương toạ thủ cung Phu Thê ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham_dia[i], "Kình Dương")) {
            
            keyArr.push(`Kình Dương toạ thủ cung Phu Thê ở ${ham_dia[i]}`);
        }
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Kình Dương", ["Thái Dương", "Thái Âm"])) {
        
        keyArr.push("Thái Dương, Thái Âm đồng cung tại Phu Thê gặp Kình Dương");
    }

    for (let i = 0; i < tymui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tymui[i], "Thiên Phủ", "Tử Vi") && kiemTraCachCuc("Kình Dương", ["Thiên Phủ", "Tử Vi"])) {
            
            keyArr.push(`Thiên Phủ, Tử Vi đồng cung tại Phu Thê ở ${tymui[i]} gặp Kình Dương`);
        }
    }

    if (kiemTraCachCuc("Kình Dương", ["Thiên Khôi", "Hóa Quyền", "Hóa Lộc", "Thiên Mã"]) && isSaoToaThuTaiCung("Phu Thê", "Kình Dương")) {
        
        keyArr.push("Kình Dương toạ thủ cung Phu Thê gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
    }
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Ngọ", "Kình Dương", "Thái Âm") && isHaiSaoDongCungTaiCungChi("Phu Thê", "Ngọ", "Kình Dương", "Thiên Đồng") && kiemTraCachCuc("Kình Dương", ["Địa Giải", "Phượng Các"])) {
        
        keyArr.push("Kình Dương, Thái Âm, Thiên Đồng đồng cung tại Phu Thê ở Ngọ gặp Địa Giải, Phượng Các");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tumo[i], "Tham Lang", "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Phu Thê", tumo[i], "Kình Dương", "Tham Lang")) {
            
            keyArr.push(`Tham Lang, Vũ Khúc, Kình Dương đồng cung tại Phu Thê ở ${tumo[i]}`);

        }
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Hỏa Tinh", "Linh Tinh", "Đà La"])) {
        
        keyArr.push("Kình Dương toạ thủ cung Phu Thê gặp Hỏa Tinh, Linh Tinh, Đà La");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Địa Không", "Địa Kiếp", "Đà La"])) {
        
        keyArr.push("Kình Dương toạ thủ cung Phu Thê gặp Địa Không, Địa Kiếp, Đà La");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Kình Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La") || isSaoToaThuTaiCung("Phụ Mẫu", "Đà La") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
        
        keyArr.push(`Kình Dương, Đà La giáp Phu Thê`);
        if (isSaoToaThuTaiCung("Phu Thê", "Hóa Kỵ")) {
            
            keyArr.push(`Phu Thê có Hóa Kỵ giáp Kình Dương, Đà La`);
        }

    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Kình Dương", "Lực Sỹ")) {
        
        keyArr.push("Kình Dương, Lực Sỹ đồng cung tại Phu Thê");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Đà La")) {

        if (kiemTraCachCuc("Đà La", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Đà La toạ thủ cung Phu Thê gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");

        }
        if (kiemTraCachCuc("Đà La", ["Hóa Kỵ", "Liêm Trinh", "Thiên Hình"])) {
            
            keyArr.push("Đà La toạ thủ cung Phu Thê gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", dac_dia[i], "Đà La")) {
            
            keyArr.push(`Đà La toạ thủ cung Phu Thê ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", ham_dia[i], "Đà La")) {
            
            keyArr.push(`Đà La toạ thủ cung Phu Thê ở ${ham_dia[i]}`);
        }
    }
}

function LuanCachCucHoaLinhPhuThe(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const dac_dia = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const ham_dia = ["Tý", "Sửu", "Dậu", "Hợi", "Tuất", "Mùi", "Thân"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];

    for (let i = 0; i < HoaLinh.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", HoaLinh[i])) {

            if (kiemTraCachCuc(HoaLinh[i], ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
                
                keyArr.push(`${HoaLinh[i]} toạ thủ cung Phu Thê gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
            }
        }
    }

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", dac_dia[i], HoaLinh[j])) {
                
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", ham_dia[i], HoaLinh[j])) {
                
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Phu Thê ở ${ham_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", tumo[i], "Tham Lang", "Vũ Khúc") && kiemTraCachCuc(HoaLinh[j], ["Tham Lang", "Vũ Khúc"])) {
                
                keyArr.push(`Tham Lang, Vũ Khúc đồng cung Phu Thê ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                if (isHaiSaoDongCungTaiCungChi("Phu Thê", tumo[i], "Địa Kiếp", "Vũ Khúc")) {
                    
                    keyArr.push(`Địa Kiếp, Tham Lang, Vũ Khúc đồng cung Phu Thê ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                }
            }
        }
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Hỏa Tinh") && isSaoToaThuTaiCung("Quan Lộc", "Linh Tinh")) {
        
        keyArr.push("Hỏa Tinh toạ thủ cung Phu Thê gặp Linh Tinh ở Quan Lộc");
        if (kiemTraCachCuc("Hỏa Tinh", ["Kình Dương"])) {
            
            keyArr.push("Hỏa Tinh toạ thủ cung Phu Thê đối xung Linh Tinh và gặp Kình Dương");
        }
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Linh Tinh") && isSaoToaThuTaiCung("Quan Lộc", "Hỏa Tinh")) {
        
        keyArr.push("Linh Tinh toạ thủ cung Phu Thê gặp Hỏa Tinh ở Quan Lộc");
        if (kiemTraCachCuc("Linh Tinh", ["Kình Dương"])) {
            
            keyArr.push("Linh Tinh toạ thủ cung Phu Thê đối xung Hỏa Tinh và gặp Kình Dương");
        }
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hỏa Tinh", "Linh Tinh")) {
        
        keyArr.push("Hỏa Tinh, Linh Tinh đồng cung tại Phu Thê");
    }

    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Hợi", "Hỏa Tinh") && kiemTraCachCuc("Hỏa Tinh", ["Thiên Hình", "Tham Lang"])) {
        
        keyArr.push("Hỏa Tinh toạ thủ cung Phu Thê ở Hợi gặp Thiên Hình, Tham Lang");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Linh Tinh", "Thiên Mã") && kiemTraCachCuc("Linh Tinh", ["Kình Dương", "Đà La"])) {
        
        keyArr.push("Linh Tinh đồng cung với Thiên Mã tại Phu Thê gặp Kình Dương, Đà La");
    }
}

function LuanCachCucKhongKiepPhuThe(keyArr) {
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
            if (isSaoToaThuTaiCungVaChi("Phu Thê", dac_dia[i], khongkiep[j])) {
                
                keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);

                }

            }
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", ham_dia[i], khongkiep[j])) {
                
                keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${ham_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Phu Thê ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                }


            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Địa Không", "Địa Kiếp")) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Phu Thê ở ${tyhoi[i]}`);
        }
    }
    for (let i = 0; i < tusinh.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tusinh[i], "Địa Không", "Địa Kiếp")) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Phu Thê ở ${tusinh[i]}`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", danthan[i], "Địa Không", "Địa Kiếp") && kiemTraCachCuc("Địa Không", ["Hoá Lộc", "Hoá Quyền", "Văn Xương"])) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Phu Thê ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Địa Không") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp") || isSaoToaThuTaiCung("Phụ Mẫu", "Địa Kiếp") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
        
        keyArr.push(`Địa Không, Địa Kiếp giáp Phu Thê`);
        if (isSaoToaThuTaiCung("Phu Thê", "Hóa Kỵ")) {
            
            keyArr.push(`Phu Thê có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
        }

    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Địa Kiếp", "Thiên Cơ") && kiemTraCachCuc("Địa Kiếp", ["Hoả Tinh"])) {
        
        keyArr.push("Địa Kiếp, Thiên Cơ đồng cung tại Phu Thê gặp Hoả Tinh");
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Địa Kiếp", "Tham Lang") && isHaiSaoDongCungTaiCung("Phu Thê", "Địa Kiếp", "Lưu Hà")) {
        
        keyArr.push("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Phu Thê");

    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Địa Không", "Địa Kiếp") && isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Địa Không", "Thiên Tướng") && isHaiSaoDongCungTaiCungChi("Phu Thê", tyhoi[i], "Địa Không", "Thiên Mã")) {
            
            keyArr.push("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung tại Phu Thê ở " + tyhoi[i]);
        }
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Địa Kiếp") && kiemTraCachCuc("Địa Kiếp", cunhatphukhockhach)) {
        
        keyArr.push("Địa Kiếp toạ thủ cung Phu Thê gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
    }
}
function LuanCachCucTuHoaPhuThe(keyArr) {
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

    if (isSaoToaThuTaiCung("Phu Thê", "Hoá Lộc")) {

        if (kiemTraCachCuc("Hoá Lộc", ["Hóa Quyền", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Phu Thê gặp Hóa Quyền, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Phu Thê gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Phu Thê gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Phu Thê gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Phu Thê gặp Địa Không, Địa Kiếp");
        }
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Hoá Quyền")) {

        if (kiemTraCachCuc("Hoá Quyền", ["Hóa Lộc", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp Hóa Lộc, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Vũ Khúc", "Cự Môn"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp Vũ Khúc, Cự Môn");
        }
        if (kiemTraCachCuc("Hoá Quyền", lucsattinh)) {

            
            keyArr.push("Hoá Quyền toạ thủ cung Phu Thê gặp " + lucsattinh.join(", "));
        }
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hoá Khoa")) {

        if (kiemTraCachCuc("Hoá Khoa", ["Hóa Lộc", "Hóa Quyền", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Phu Thê gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Phu Thê gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Phu Thê gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Phu Thê gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Phu Thê gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Phu Thê gặp Tử Vi, Thiên Phủ");
        }
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Kỵ")) {

        if (kiemTraCachCuc("Hóa Kỵ", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Mã"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Địa Không, Địa Kiếp");
        }

        if (kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm", "Thiên Hình"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Thái Dương, Thái Âm, Thiên Hình");
        }
        if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Kỵ", "Cự Môn")) {
            
            keyArr.push("Hóa Kỵ, Cự Môn đồng cung tại Phu Thê");
        }
        if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Kỵ", "Tham Lang")) {
            
            keyArr.push("Hóa Kỵ, Tham Lang đồng cung tại Phu Thê");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Thiên Đồng, Thiên Lương");
        }



    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Thái Dương, Thái Âm");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tumo[i], "Hoá Lộc") && isHaiSaoDongCungTaiCungChi("Phu Thê", tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push("Hoá Lộc, Tham Lang, Vũ Khúc đồng cung tại Phu Thê ở " + tumo[i]);
        }
    }

    for (let i = 0; i < dinhky.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", "Hoá Lộc") && isSaoToaThuTaiCung("Quan Lộc", "Lộc Tồn") && lasoData.canNam === dk[i]) {
            
            keyArr.push("Người tuổi " + dinhky[i] + " có Hoá Lộc toạ thủ cung Phu Thê gặp Lộc Tồn ở Quan Lộc");
        }
    }


    for (let i = 0; i < ngothintuat.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Phu Thê", ngothintuat[i], "Hoá Lộc", "Thiên Lương")) {
            
            keyArr.push("Hoá Lộc, Thiên Lương đồng cung tại Phu Thê ở " + ngothintuat[i]);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", danthan[i], "Hoá Lộc") && kiemTraCachCuc("Hóa Lộc", ["Thiên Cơ", "Thiên Lương", "Lộc Tồn"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Phu Thê ở " + danthan[i] + " gặp Thiên Cơ, Thiên Lương, Lộc Tồn");
        }
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Quyền", "Hóa Lộc") && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Quyền, Hóa Lộc đồng cung tại Phu Thê không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Quyền") && kiemTraCachCuc("Hóa Quyền", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Quyền toạ thủ cung Phu Thê gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");

    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Phu Thê gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền")) {
        
        keyArr.push(`Hóa Quyền, Hóa Lộc giáp Phu Thê`);
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa toạ thủ cung Phu Thê gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Khoa", "Hóa Lộc") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa, Hóa Lộc đồng cung tại Phu Thê không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Khoa"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Phu Thê gặp Hóa Khoa, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        
        keyArr.push(`Hóa Khoa, Hóa Lộc giáp Phu Thê`);
    }


    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Phu Thê gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Khoa", "Hóa Quyền") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa, Hóa Quyền đồng cung tại Phu Thê không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa toạ thủ cung Phu Thê gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        
        keyArr.push(`Hóa Khoa, Hóa Quyền giáp Phu Thê`);
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen) && kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Hóa Lộc, Hóa Quyền, gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen.concat(XuongKhuc).concat(KhoiViet))) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt");

    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Phu Thê", tyngo[i], "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Thiên Đồng", "Thiên Lương"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Phu Thê ở " + tyngo[i] + " gặp Thiên Đồng, Thiên Lương");
        }
    }

    if (isSaoToaThuTaiCungVaChi("Phu Thê", "Tý", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Phu Thê ở Tý gặp Thiên Đồng, Thiên Lương");
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hoá Quyền", "Thiên Khốc ")) {
        
        keyArr.push("Hoá Quyền, Thiên Khốc đồng cung tại Phu Thê");
    }

}

function LuanCachCucLucBaiTinhPhuThe(keyArr) {
    const lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

    const songhao_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const tangho_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const danthan = ["Dần", "Thân"];
    const songhao = ["Đại Hao", "Tiểu Hao"];
    const tangho = ["Tang Môn", "Bạch Hổ"];



    for (let i = 0; i < songhao_dac.length; i++) {

        for (let j = 0; j < songhao.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", songhao_dac[i], songhao[j])) {
                
                keyArr.push(songhao[j] + " toạ thủ tại cung Phu Thê ở " + songhao_dac[i]);
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", songhao[i]) && kiemTraCachCuc("Vô Chính Diệu", songhao[i])) {
            
            keyArr.push("Cung Phu Thê Vô Chính Diệu có " + songhao[i]);
        }
    }

    for (let i = 0; i < tangho.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", tangho[i])) {

            for (let j = 0; j < tangho_dac.log; j++) {
                if (isSaoToaThuTaiCungVaChi("Phu Thê", tangho_dac[j], tangho[i])) {
                    
                    keyArr.push(tangho[i] + " toạ thủ cung Phu Thê tại " + tangho_dac[j]);
                }
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có " + tangho[i] + " toạ thủ cung Phu Thê");
            }
        }
    }

    for (let i = 0; i < tangho.length; i++) {

        if (isSaoToaThuTaiCung("Phu Thê", tangho[i]) && kiemTraCachCuc(tangho[i], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push(tangho[i] + " toạ thủ cung Phu Thê gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (isSaoToaThuTaiCung("Phu Thê", tangho[i]) && kiemTraCachCuc(tangho[i], ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push(tangho[i] + " toạ thủ cung Phu Thê gặp Địa Không, Địa Kiếp");
        }
        if (isSaoToaThuTaiCung("Phu Thê", tangho[i]) && kiemTraCachCuc(tangho[i], ["Kình Dương ", "Thiên Hình"])) {

            
            keyArr.push(tangho[i] + " toạ thủ cung Phu Thê gặp Kinh Dương, Thiên Hình");

        }

        if (isHaiSaoDongCungTaiCung("Phu Thê", tangho[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hoả Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push(tangho[i] + ", Tham Lang đồng cung tại Phu Thê gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }

    }


    if (isSaoToaThuTaiCung("Phu Thê", "Bạch Hổ") && kiemTraCachCuc("Bạch Hổ", ["Thiên Hình"])) {

        
        keyArr.push("Bạch Hổ toạ thủ cung Phu Thê gặp Thiên Hình");


    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Bạch Hổ", "Thiên Hình")) {
        
        keyArr.push("Bạch Hổ, Thiên Hình đồng cung tại Phu Thê");

    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Bạch Hổ", "Tấu Thư")) {
        
        keyArr.push("Bạch Hổ, Tấu Thư đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Bạch Hổ", "Phi Liêm")) {
        
        keyArr.push("Bạch Hổ, Phi Liêm đồng cung tại Phu Thê");
    }



    const khochu = ["Thiên Khốc", "Thiên Hư"];
    const khochu_dac = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi"];
    const khochu_ham = ["Dần", "Thân", "Tỵ", "Hợi", "Thìn", "Tuất"];
    const tyngo = ["Tý", "Ngọ"];
    const maodau = ["Mão", "Dậu"];

    for (let i = 0; i < khochu.length; i++) {
        if (isSaoToaThuTaiCung("Phu Thê", khochu[i])) {

            for (let j = 0; j < khochu_dac.length; j++) {
                if (isSaoToaThuTaiCungVaChi("Phu Thê", khochu_dac[j], khochu[i])) {
                    
                    keyArr.push((khochu[i] + " toạ thủ cung Phu Thê tại " + khochu_dac[j]));
                    if (kiemTraCachCuc(khochu[i], ["Hóa Lộc"])) {
                        
                        keyArr.push(khochu[i] + " toạ thủ cung Phu Thê tại " + khochu_dac[j] + " gặp Hóa Lộc");
                    }
                }
            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < tyngo.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", tyngo[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Phu Thê tại " + tyngo[j] + " gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
            }
            if (isHaiSaoDongCungTaiCungChi("Phu Thê", tyngo[j], khochu[i], "Phá Quân")) {
                
                keyArr.push(khochu[i] + " đồng cung Phá Quân tại Phu Thê" + " ở " + tyngo[j]);
            }
        }
    }
    for (let k = 0; k < khochu.length; k++) {
        for (let i = 0; i < khochu_ham.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", khochu_ham[i], khochu[k])) {
                
                keyArr.push(khochu[k] + " toạ thủ cung Phu Thê tại " + khochu_ham[i]);

            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Phu Thê tại " + danthan[j] + " gặp Kình Dương, Đà La");
            }
            if (isSaoToaThuTaiCungVaChi("Phu Thê", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Thiên Hình", "Thiên Mã"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Phu Thê tại " + danthan[j] + " gặp Thiên Hình, Thiên Mã");
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Phu Thê", maodau[j], songhao[i]) && kiemTraCachCuc(songhao[i], ["Thiên Cơ", "Cự Môn"])) {
                
                keyArr.push(songhao[i] + " toạ thủ cung Phu Thê tại " + maodau[j] + " gặp Thiên Cơ, Cự Môn");
            }
        }
    }
}




function ThanMenhDongCungVoChinhDieu(keyArr) {
    if (idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        keyArr.push("Thân và Phu Thê đồng cung Vô Chính Diệu");
        return true;
    }
}
function LuanCacCachCucKhacPhuThe(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return;
    const cungMenh = lasoOb.find(c => c.tenCung === 'Phu Thê');
    const chiCungMenh = lasoData.lasoOb[0].chi;

    // Nếu là đàn ông sinh năm Ngọ, Mùi, Phu Thê an tại Tý, Sửu thì cuộc đời vất vả lo toan

    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Ngọ, Phu Thê an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Sửu')) {
        keyArr.push("Anh sinh năm Ngọ, Phu Thê an tại Sửu");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Phu Thê an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Phu Thê an tại Sửu");
    }

    // Nếu là đàn bà cung Phu Thê an tại Tứ Mộ khôn ngoan

    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Thìn' || chiCungMenh === 'Sửu' || chiCungMenh === 'Tuất' || chiCungMenh === 'Mùi')) {
        keyArr.push("Cung Phu Thê của chị được an tại ví trí Tứ Mộ");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Dậu')) {
        keyArr.push("Cung Phu Thê của chị được an tại ví trí cung Dậu");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Cung Phu Thê của chị được an tại ví trí cung Tý");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Ngọ')) {
        keyArr.push("Cung Phu Thê của chị được an tại ví trí cung Ngọ");
    }

    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Thìn") {
        keyArr.push("Thân và Phu Thê đồng cung Vô Chính Diệu tại Thìn");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Tuất") {
        keyArr.push("Thân và Phu Thê đồng cung Vô Chính Diệu tại Tuất");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Sửu") {
        keyArr.push("Thân và Phu Thê đồng cung Vô Chính Diệu tại Sửu");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Mùi") {
        keyArr.push("Thân và Phu Thê đồng cung Vô Chính Diệu tại Mùi");
    }

    //Phu Thê vô chính diệu gặp Song Hao
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Phu Thê Vô Chính Diệu gặp Song Hao");
    }
    // Phu Thê vô chính diệu gặp Song Hao có Thiên Đồng,hoặc Thiên Lương, hoặc Thiên Cơ
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Thiên Đồng', 'Thiên Lương', 'Thiên Cơ']) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Phu Thê Vô Chính Diệu gặp Song Hao có Thiên Đồng, Thiên Lương, hoặc Thiên Cơ");
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

    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Đào Hoa", "Hồng Loan") && isHaiSaoDongCungTaiCung("Phu Thê", "Tả Phù", "Hữu Bật")) {
        keyArr.push("Đào Hoa, Hồng Loan, Tả Phù, Hữu Bật đồng cung tại Phu Thê");
    }

    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Đào Hoa", "Thiên Riêu")) {
        keyArr.push("Đào Hoa, Thiên Riêu đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Hồng Loan", "Đào Hoa") && isSaoToaThuTaiCung("Phu Thê", "Hóa Kỵ")) {
        keyArr.push("Hồng Loan, Đào Hoa, Hóa Kỵ đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCungChi("Phu Thê", "Hồng Loan", "Đào Hoa") && isSaoToaThuTaiCung("Phu Thê", "Hoa Cái")) {
        keyArr.push("Hồng Loan, Đào Hoa, Hoa Cái đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Lộc", "Thiên Mã") && isSaoToaThuTaiCung("Phu Thê", "Long Trì")) {
        keyArr.push("Hóa Lộc, Thiên Mã, Long Trì đồng cung tại Phu Thê");
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Lộc", "Phượng Các") && isSaoToaThuTaiCung("Phu Thê", "Long Trì")) {
        keyArr.push("Hóa Lộc, Phượng Các, Long Trì đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Lộc", "Hồng Loan")) {
        keyArr.push("Hóa Lộc, Hồng Loan đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Kỵ", "Phục Binh")) {
        keyArr.push("Hóa Kỵ, Phục Binh đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Kỵ", "Thiên Riêu")) {
        keyArr.push("Hóa Kỵ, Thiên Riêu đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hồng Loan", "Đào Hoa") && isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Kỵ", "Đà La")) {
        keyArr.push("Hồng Loan, Đào Hoa, Hóa Kỵ, Đà La đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hóa Kỵ", "Địa Kiếp") && isSaoToaThuTaiCung("Phu Thê", "Kiếp Sát")) {
        keyArr.push("Hóa Kỵ, Địa Kiếp, Kiếp Sát đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thất Sát", "Thiên Riêu") && isHaiSaoDongCungTaiCung("Phu Thê", "Hỏa Tinh", "Linh Tinh") && isSaoToaThuTaiCung("Phu Thê", "Đà La")) {
        keyArr.push("Thất Sát, Thiên Riêu, Hỏa Tinh, Linh Tinh, Đà La đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tham Lang", "Đà La")) {
        keyArr.push("Tham Lang, Đà La đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Tướng", "Đào Hoa") && isSaoToaThuTaiCung("Phu Thê", "Hồng Loan")) {
        keyArr.push("Thiên Tướng, Đào Hoa, Hồng Loan đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Cự Môn", "Hỏa Tinh") && isSaoToaThuTaiCung("Phu Thê", "Linh Tinh")) {

        keyArr.push("Cự Môn, Hỏa Tinh, Linh Tinh đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tiểu Hao", "Đại Hao")) {
        keyArr.push("Tiểu Hao, Đại Hao đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Ân Quang", "Thiên Quý")) {
        keyArr.push("Ân Quang, Thiên Quý đồng cung tại Phu Thê");
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Đào Hoa", "Tam Thai")) {
        keyArr.push("Đào Hoa, Tam Thai đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Hồng Loan", "Hóa Lộc") && lasoData.gioitinh === "Nam") {
        
        keyArr.push("Quý Anh có Hồng Loan, Hóa Lộc đồng cung tại Phu Thê");

    }
    if (isHaiSaoDongCungTaiCung("Quan Lộc", "Phục Binh", "Hóa Kỵ")) {
        
        keyArr.push("Phục Binh, Hóa Kỵ đồng cung tại Quan Lộc đối xung với Phu Thê");
    }

    if (isHaiSaoDongCungTaiCung("Phu Thê", "Tham Lang", "Đà La")) {
        
        keyArr.push("Tham Lang, Đà La đồng cung tại Phu Thê");
    }
    if (isSaoToaThuTaiCung("Phu Thê", "Thiên Tướng") && lasoData.gioitinh === "Nữ") {
        
        keyArr.push("Quý Chị có Thiên Tướng toạ thủ tại Phu Thê");

    }
    if (isSaoToaThuTaiCung("Phu Thê", "Thiên Tướng") && lasoData.gioitinh === "Nam") {
        
        keyArr.push("Quý Anh có Thiên Tướng toạ thủ tại Phu Thê");

    }
    if (isSaoToaThuTaiCung("Quan Lộc", "Thái Tuế")) {
        
        keyArr.push("Thái Tuế toạ thủ tại Quan Lộc đối xung với Phu Thê");
    }
    if (isSaoToaThuTaiCung("Quan Lộc", "Hóa Kỵ")) {
        
        keyArr.push("Hóa Kỵ toạ thủ tại Quan Lộc đối xung với Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Thiên Khôi", "Thiên Việt")) {
        
        keyArr.push("Thiên Khôi, Thiên Việt đồng cung tại Phu Thê");
    }
    if (isHaiSaoDongCungTaiCung("Phu Thê", "Văn Xương", "Văn Khúc")) {
        
        keyArr.push("Văn Xương, Văn Khúc đồng cung tại Phu Thê");
    }

    const kinhda_dac = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const kinhda_ham = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const diakhong_dac = ["Dần", "Thân", "Tỵ", "Hợi"];
    const diakhong_ham = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"];
    const hoalinh_dac = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"]
    const hoalinh_ham = ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"];
    const vitri_kinhduong = findChiCungChuaSao("Kình Dương", lasoData.lasoOb);
    const vitri_dala = findChiCungChuaSao("Đà La", lasoData.lasoOb);
    const vitri_hoatinh = findChiCungChuaSao("Hỏa Tinh", lasoData.lasoOb);
    const vitri_linhTinh = findChiCungChuaSao("Linh Tinh", lasoData.lasoOb);
    const vitri_khong = findChiCungChuaSao("Địa Không", lasoData.lasoOb);
    const vitri_kiep = findChiCungChuaSao("Địa Kiếp", lasoData.lasoOb);
     let vtr_kinhduong = "";
    vtr_kinhduong = kiemTraSaoSangToi(kinhda_dac, kinhda_ham, vitri_kinhduong);
    let vtr_dala = "";
    vtr_dala = kiemTraSaoSangToi(kinhda_dac, kinhda_ham, vitri_dala);
    let vtr_hoatinh = "";
    vtr_hoatinh = kiemTraSaoSangToi(hoalinh_dac, hoalinh_ham, vitri_hoatinh);
    let vtr_linhTinh = "";
    vtr_linhTinh = kiemTraSaoSangToi(hoalinh_dac, hoalinh_ham, vitri_linhTinh);
    
    let vtr_khong = "";
    vtr_khong = kiemTraSaoSangToi(diakhong_dac, diakhong_ham, vitri_khong);
    let vtr_kiep = "";
    vtr_kiep = kiemTraSaoSangToi(diakhong_dac, diakhong_ham, vitri_kiep);

    const phutinhphuthe = getDanhSachPhuTinhTungCung()[10].phuTinh[0].sao;
    if(kiemTraCachCuc(phutinhphuthe, ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"]) && vtr_kinhduong === "sao sáng" && vtr_dala === "sao sáng" && vtr_hoatinh === "sao sáng" && vtr_linhTinh === "sao sáng") {
        
        keyArr.push("Kình Đà Hỏa Linh sáng tại Phu Thê");
    }
    if (kiemTraCachCuc(phutinhphuthe, ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"]) && vtr_kinhduong === "sao tối" && vtr_dala === "sao tối" && vtr_hoatinh === "sao tối" && vtr_linhTinh === "sao tối") {
        
        keyArr.push("Kình Đà Hỏa Linh tối tại Phu Thê");
    }
    // Không kiếp
    if (kiemTraCachCuc(phutinhphuthe, ["Địa Không", "Địa Kiếp"]) && vtr_khong === "sao sáng" && vtr_kiep === "sao sáng") {
        
        keyArr.push("Địa Không, Địa Kiếp sáng tại Phu Thê");
    }
    if (kiemTraCachCuc(phutinhphuthe, ["Địa Không", "Địa Kiếp"]) && vtr_khong === "sao tối" && vtr_kiep === "sao tối") {
        
        keyArr.push("Địa Không, Địa Kiếp tối tại Phu Thê");
    }
    // Hỏa Linh
    if (kiemTraCachCuc(phutinhphuthe, ["Hỏa Tinh", "Linh Tinh"]) && vtr_hoatinh === "sao sáng" && vtr_linhTinh === "sao sáng") {
        
        keyArr.push("Hỏa Tinh, Linh Tinh sáng tại Phu Thê");
    }
    if (kiemTraCachCuc(phutinhphuthe, ["Hỏa Tinh", "Linh Tinh"]) && vtr_hoatinh === "sao tối" && vtr_linhTinh === "sao tối") {
        
        keyArr.push("Hỏa Tinh, Linh Tinh tối tại Phu Thê");
    }
    // Kình Đà
    if (kiemTraCachCuc(phutinhphuthe, ["Kình Dương", "Đà La"]) && vtr_kinhduong === "sao sáng" && vtr_dala === "sao sáng") {
        
        keyArr.push("Kình Dương, Đà La sáng tại Phu Thê");
    }
    if (kiemTraCachCuc(phutinhphuthe, ["Kình Dương", "Đà La"]) && vtr_kinhduong === "sao tối" && vtr_dala === "sao tối") {
        
        keyArr.push("Kình Dương, Đà La tối tại Phu Thê");
    }



}
function MenhVoChinhDieu() {
    if (getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        
        keyArr.push("Cung Phu Thê Vô Chính Diệu");

    }

}
function PhuTheKhongThanKiep(idxCungMenh, idxCungThan, dsChinh, dsPhu, keyArr) {

    // Lấy các sao của cung Phu Thê và cung Thân
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
        keyArr.push("Phu Thê Không Thân Kiếp");
        return true;
    } else if (menhKiep && thanKhong) {
        keyArr.push("Phu Thê Kiếp Thân Không");
        return true;

    }
    return false;
}



