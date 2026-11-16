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

function LuanCungMenh() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const cungMenh = lasoData.lasoOb[0].chi;
    const hanhMenh = lasoData.lasoOb[0].hanh;
    const danhGia = danhGiaViTriCungMenh(hanhMenh, cungMenh);

    return {
        tenCung: 'Mệnh',
        chi: cungMenh,
        hanh: hanhMenh,
        danhGia: danhGia
    };
}
function LuanCungMenh(keyArr) {
    LuanTamKhong18_menh(keyArr); // TK18
    LuanPhuGiaiLan17_menh(keyArr); // PHU17
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    let danhgia = kiemTraDiaSinh(lasoData.lasoOb[0].hanh, lasoData.lasoOb[0].chi);
    let chimenh = lasoData.lasoOb[0].chi;
    console.log("Vị trí cung Mệnh so với ngũ hành Mệnh: " + danhgia);
    keyArr.push("Vị trí cung Mệnh so với ngũ hành Mệnh: " + danhgia);

    keyArr.push("Vị trí cung Mệnh tại: " + chimenh);

    


    LuanCachCucSaoTuVi(keyArr);
    LuanCachCucSaoLiemTrinh(keyArr);
    LuanCachCucSaoThienDong(keyArr);
    LuanCachCucSaoVuKhuc(keyArr);
    LuanCachCucThaiDuong(keyArr);
    LuanCachCucThienCo(keyArr);
    LuanCacCachCucThienPhu(keyArr);
    LuanCachCucThaiAm(keyArr);
    LuanCachCucThamLang(keyArr);
    LuanCachCucCuMon(keyArr);
    LuanCachCucThienTuong(keyArr);
    LuanCachCucThienLuong(keyArr);
    LuanCachCucThatSat(keyArr);
    LuanCachcCucPhaQuan(keyArr);
    LuanCachCucXuongKhuc(keyArr);
    LuanCachCucKhoiViet(keyArr);
    LuanCachCucLocTon(keyArr);
    LuanCachCucTaHuu(keyArr);
    LuanCachCucKinhDuongDaLa(keyArr);
    LuanCachCucHoaLinh(keyArr);
    LuanCachCucKhongKiep(keyArr);
    LuanCachCucTuHoa(keyArr);
    LuanCachCucLucBaiTinh(keyArr);
    LuanCacCachCucKhac(keyArr);
}
function LuanCachCucSaoTuVi(keyArr) {
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
    const tuvupha = ["Tử Vi", "Vũ Khúc", "Phá Quân"];
    const mvd = mieu.concat(vuong).concat(dac); // Tử vi thủ mệnh ở miếu, vượng, đắc địa

    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi")) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${mvd[i]}`);
        }
    }
    const mb = mieu.concat(binh);  // Tử vi Thủ mệnh miếu và bình hòa

    for (let i = 0; i < mb.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mb[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${mb[i]}`);
        }
    }
    const vd = vuong.concat(dac); // Tử vi thủ mệnh ở vượng, đắc địa
    for (let i = 0; i < vd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", vd[i], "Tử Vi")) {
            
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${vd[i]}`);
        }
    }
    // Tử vi thủ mệnh gặp cát tinh
    let cattinh = PhuVuTuong.concat(XuongKhuc).concat(KhoiViet).concat(TaHuu).concat(KhoaLocQuyen).concat(LongPhuong);


    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", cattinh)) {
        
        keyArr.push(["Tử Vi tọa thủ cung Mệnh và hội chiếu các", cattinh.join(", ")].join(" "));
    }
    //Tử vi thủ mệnh gặp sát tinh
    let hungtinh = lucsattinh;


    if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
        
        keyArr.push(["Tử Vi tọa thủ cung Mệnh ở Sửu và hội chiếu ", KhongKiep.join(", ")].join(" "));
        if (kiemTraCachCuc("Tử Vi", hungtinh)) {
            
            keyArr.push(["Tử Vi tọa thủ cung Mệnh và hội chiếu các", hungtinh.join(", ")].join(" "));

        }
    }

    // Tử vi thủ mệnh đồng cung với Tham Lang ở mão dậu


    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Tử Vi") && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Tham)) {
            
            keyArr.push(`Tử Vi đồng cung với Tham Lang tại Mệnh ở ${maodau[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
            
            keyArr.push([`Tử Vi tọa thủ cung Mệnh ở ${maodau[i]} gặp`, KhongKiep.join(", ")].join(" "));
        }
    }

    // Phú
    // Sinh năm Giáp Đinh Kỷ có Tử Vi tọa thủ cung Mệnh ở Ngọ không gặp Hình Kỵ
    for (let i = 0; i < giap_dinh_ky.length; i++) {

        if (lasoData.chiCan === gdk[i]) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Tử Vi") && kiemTraCachCuc("Tử Vi", HinhKy) == false) {
                
                keyArr.push([`Bạn sinh năm ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Mệnh ở Ngọ và không gặp`, HinhKy.join(", ")].join(" "));

            }
        }


    }
    // Sinh năm Nhâm Giáp Nam có Tử Vi tọa thủ cung Mệnh ở Hợi, Nữ có Tử Vi tọa thủ cung Mệnh ở Dần

    for (let i = 0; i < nhamgiap.length; i++) {
        if (lasoData.chiCan === nh_giap[i]) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam") {
                
                keyArr.push(`Quý Anh tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Mệnh ở Hợi`);
            }
            if (isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Tử Vi") && lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Mệnh ở Dần`);
            }
        }
    }
    // Tử phủ đồng cung, mệnh an tại dần thân, sinh năm giáp


    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Tử Vi", "Thiên Phủ")) {
            if (lasoData.chiCan === "G.") {
                
                keyArr.push(`Bạn sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
            }
        }

    }

    // Tử vi hoặc Thiên Phủ tọa mệnh gặp Tả Hữu
    for (let i = 0; i < tuphu.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tuphu[i]) && kiemTraCachCuc(tuphu[i], TaHuu)) {
            
            keyArr.push([`${tuphu[i]} tọa thủ cung Mệnh gặp`, TaHuu.join(", ")].join(" "));
        }

    }
    // Tử hoặc Phủ tọa thủ cung Mệnh đồng cung Kình
    for (let i = 0; i < tuphu.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", tuphu[i], "Kình Dương")) {
            
            keyArr.push(`${tuphu[i]} tọa thủ cung Mệnh đồng cung Kình Dương`);
        }

    }
    // Tử vi tọa mệnh đồng cung với Thiên Phủ gặp Tả HỮu
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thiên Phủ") && kiemTraCachCuc("Tử Vi", TaHuu)) {

        
        keyArr.push(["Tử Vi đồng cung với Thiên Phủ tại Mệnh gặp", TaHuu.join(", ")].join(" "));
    }
    // Tử vi tại mệnh gặp cát tinh
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An))) {
        
        keyArr.push(["Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", ")].join(" "));

        if (kiemTraCachCuc("Tử Vi", KhongKiep.concat(Kinh)) == false) {
            keyArr.push(["Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", ")].join(" "));
            
        }
    }


    // Tử vi tại mệnh đồng cung với Thiên Tướng, phá toại tại cung thân hợp chiếu với các sao Kình
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thiên Tướng") && isSaoToaThuTaiCung(lasoData.cungCu, "Phá Toái") && kiemTraCachCuc("Phá Toái", Kinh)) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Tướng, Phá Toái tại cung thân hợp chiếu với sao Kình Dương");
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thiên Tướng") && isSaoToaThuTaiCung(lasoData.cungCu, "Phá Quân") && kiemTraCachCuc("Phá Quân", Kinh)) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Tướng, Phá Quân tại cung thân hợp chiếu với sao Kình Dương");
    }

    // Tử Sát đồng lâm Tỵ Hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Tử Vi", "Thất Sát")) {
            
            keyArr.push(`Tử Vi đồng cung với Thất Sát tại Mệnh ở ${tyhoi[i]}`);
        }
    }
    // Tử vi Thất Sát Hóa Quyền đồng cung tại Mệnh

    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thất Sát") && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Hóa Quyền")) {
        
        keyArr.push("Tử Vi, Thất Sát, Hóa Quyền đồng cung tại Mệnh");
    }
    // Tử Vũ Phá tọa thủ Mệnh gặp Kình Dương, Đà La
    for (let i = 0; i < tuvupha.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tuvupha[i]) && kiemTraCachCuc(tuvupha[i], ["Kình Dương", "Đà La"])) {
            
            keyArr.push(`${tuvupha[i]} tọa thủ cung Mệnh gặp Kình Dương, Đà La`);
        }
    }




    // Tử vi hoặc Vũ Khúc thủ mệnh gặp Sát tinh

    for (let i = 0; i < tuvu.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tuvu[i]) && kiemTraCachCuc(tuvu[i], lucsattinh)) {
            
            keyArr.push([`${tuvu[i]} tọa thủ cung Mệnh gặp các sao Sát tinh:`, lucsattinh.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCung("Mệnh", tuvu[i]) && kiemTraCachCuc(tuvu[i], "Thất Sát")) {
            
            keyArr.push(`${tuvu[i]} tọa thủ cung Mệnh gặp Thất Sát`);
        }

    }
    // Tử vi hoặc Phá Quân thủ mệnh tại tứ mộ cung
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Vũ Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${tumo[i]}`);
        }
        for (let j = 0; j < tupha.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], tupha[j])) {
                
                keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]}`);
                if (kiemTraCachCuc(tupha[j], ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                    
                    keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                }
                if (kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh))) {
                    
                    keyArr.push([`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", ")].join(" "));
                }
                //gặp Không Kiếp Kình mà không gặp Văn Xương Văn Khúc Long Phượng
                if (kiemTraCachCuc(tupha[j], TaHuu.concat(XuongKhuc).concat(LongPhuong)) === false && kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh)) === true) {
                    
                    keyArr.push([`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các"].join(" "));
                }
            }
        }
    }

    // // Tử vi tại Mệnh gặp Kiếp, Đào Hồng Không tại Mệnh
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Dao) && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Hong) && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Khong) && kiemTraCachCuc("Tử Vi", Kiep)) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
    }

    // Tử vi Tả Hữu đồng cung mệnh
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Tả Phù") && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Hữu Bật")) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Tả Phù, Hữu Bật");
    }

    //Tử vi tại mệnh chi Tý Ngọ gặp Khoa Lộc Quyền
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhoaLocQuyen)) {
            
            keyArr.push([`Tử Vi tọa thủ cung Mệnh ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", ")].join(" "));
        }
    }
    // Tử vi tại mênh gặp Hóa Quyền, Hóa Lộc, Kình Đà
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền", "Hóa Lộc", "Kình Dương", "Đà La"])) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
    }
    // Tử vi và Hóa Lộc đồng cung tại Mệnh hội chiếu Tả Phù Hữu Bật
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Hóa Lộc") && kiemTraCachCuc("Tử Vi", TaHuu)) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
    }
    // Tử Phủ Hội Chiếu cung Mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", "Thiên Phủ")) {
        
        keyArr.push("Tử Vi tọa thủ cung Mệnh hội chiếu Thiên Phủ");
    }
    // Tử Phủ giáp mệnh
    if (isSaoToaThuTaiCung("Huynh Đệ", "Tử Vi") && isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Phủ") || isSaoToaThuTaiCung("Phụ Mẫu", "Tử Vi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Phủ")) {
        
        keyArr.push("Tử Vi và Thiên Phủ giáp Mệnh");
    }



}

function LuanCachCucSaoLiemTrinh(keyArr) {
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

    // Liêm Trinh Tọa thủ mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh")) {
        
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh");
    }
    // Liêm Trinh Miếu địa tọa thủ mệnh gặp cát tinh
    // Liêm Trinh tọa thủ cung Mệnh gặp hung tinh, kỵ hình


    for (let i = 0; i < mieu.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]}`);
        }
    }


    // Liêm Trinh Vượng địa tọa thủ mệnh gặp cát tinh 
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", ")].join(" "));
        }
        // Liêm Trinh tọa thủ cung Mệnh gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]}`);
        }
    }
    // Liêm Trinh Đắc địa tọa thủ mệnh gặp cát tinh
    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", ")].join(" "));
        }
        // Liêm Trinh tọa thủ cung Mệnh gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]}`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", dac[i], "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Mệnh", dac[i], "Liêm Trinh", "Văn Khúc")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
        }

    }



    // Liêm trinh hãm 
    for (let i = 0; i < ham.length; i++) {

        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Liêm Trinh")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
        }

        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", ")].join(" "));
        }

        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", ")].join(" "));

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
        }
    }
    // Liêm trinh Tỵ Hợi đồng cung với Hoá Kỵ
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Liêm Trinh", "Hóa Kỵ")) {
            
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            if (kiemTraCachCuc("Liêm Trinh", [XuongKhuc]) && lasoData.canNam === "B.") {
                
                keyArr.push(`Tuổi Bính Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
            }
        }
    }

    // Liêm Trinh toạ thủ tại Mão Dậu gặp Hoả Linh hội họp
    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HoaLinh)) {
            
            keyArr.push([`Liêm Trinh tọa thủ cung Mệnh ở ${maodau[i]} gặp`, HoaLinh.join(", ")].join(" "));
        }
    }
    // Phú
    // Liêm Trinh tọa thủ gặp tứ sát Kình Đà Hỏa Linh 
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Hỏa Linh"])) {
        
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh");
        if (kiemTraCachCuc("Liêm Trinh", ["Bạch Hổ"])) {
            
            keyArr.push("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
        }
    }

    // Liêm Trinh tại mệnh gặp Thất sát
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", "Thất Sát")) {
        
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh gặp Thất Sát");
    }

    if (getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        if (isHaiSaoDongCungTaiCungChi("Thiên Di", "Liêm Trinh", "Thiên Phủ")) {
            
            keyArr.push("Mệnh vô chính diệu, Liêm Trinh, Thiên Phủ đồng cung tại Thiên Di");
        }
    }

}

function LuanCachCucSaoThienDong(keyArr) {
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

    //Thiên Đồng toạ thủ cung Mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng")) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh");
    }
    // Thiên Đồng miếu vượng địa
    for (let i = 0; i < MVD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", MVD[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(["Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push(["Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                
                keyArr.push(["Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i]);
            }

        }

    }
    // Thiên đồng dần thân thì Thiên Đồng Thiên Lương sẽ đồng cung
    for (let i = 0; i < DanThan.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", DanThan[i], "Thiên Đồng", "Thiên Lương")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i]);
            if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Linh", "Hóa Kỵ"])) {
                
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
        
        keyArr.push(["Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", "Thất Sát")) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp Thất Sát");
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc", "Thiên Riêu", "Tang Môn"]) && lasoData.gioitinh === "Nữ") {
        
        keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Mệnh ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if (isHaiSaoDongCungTaiCung("Mệnh", "Thiên Đồng", "Thiên Việt")) {
        
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt");
        if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Tinh", "Linh Tinh", "Hóa Kỵ"])) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Tinh, Linh Tinh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", HD[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push(["Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push(["Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                
                keyArr.push(["Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp", HinhKy.join(", ")].join(" "));
            }
        }
    }
    for (let i = 0; i < tuatngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tuatngo[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + tuatngo[i]);
        }
    }
    // Thiên đồng tại tỵ hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], "Thiên Đồng")) {
            
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
            if (lasoData.canNam === dinh_canh[i]) {
                
                keyArr.push("Bạn tuổi " + dinhcanh[i] + " có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
            }
            if (lasoData.gioitinh === "Nam" && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                
                keyArr.push(["Quý Anh có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
            }
        }
    }
}

function LuanCachCucSaoVuKhuc(keyArr) {
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
    const gkn = ["G.", "K.", "N."];
    const giap_ky_nham = ["Giáp", "Kỷ", "Nhâm"];
    const danthan = ["Dần", "Thân"];
    const tyhoi = ["Tỵ", "Hợi"];


    // Vũ Khúc tọa thủ cung Mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        // Vũ Khúc miếu vượng địa tọa thủ mệnh gặp cát tinh
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", cattinh)) {
            
            keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", ")].join(" "));
        }
        // Vũ Khúc tọa thủ cung Mệnh gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
            
            keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", ")].join(" "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", HinhKy)) {
            
            keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", ")].join(" "));
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", KhoiViet)) {
            
            keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung`, KhoiViet.join(", ")].join(" "));

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", MaLoc) && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", MaLoc) === false) {
            
            keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp`, MaLoc.join(", ")].join(" "));

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && lasoData.gioitinh === "Nữ") {
            
            keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]}`);
        }

    }

    for (let i = 0; i < suumui.length; i++) {
        // Vũ Khúc tọa thủ cung Mệnh ở Sửu, Mùi 
        if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Vũ Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${suumui[i]}`);
        }
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh ở Mão");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Vũ Khúc")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh ở Dậu");
    }
    // Vũ Khúc hãm địa tọa thủ mệnh
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Vũ Khúc")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
                
                keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Vũ Khúc", HinhKy)) {
                
                keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", ")].join(" "));
            }
            // gặp cát tinh
            if (kiemTraCachCuc("Vũ Khúc", cattinh)) {
                
                keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp cát tinh:`, cattinh.join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", ham[i], "Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân`);
            }
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Phá Quân`);
            }
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", ["Phá Quân", "Tham Lang"])) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Phá Quân Tham Lang`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", ham[i], "Vũ Khúc", "Phá Quân")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân`);

                if (kiemTraCachCuc("Vũ Khúc", XuongKhuc)) {
                    
                    keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                }
            }

            if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", Kinh.concat(Da).concat("Quả Tú"))) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Kình Đà Quả Tú`);

            }
            if (kiemTraCachCuc("Vũ Khúc", Kinh.concat("Kiếp Sát"))) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", ham[i], "Vũ Khúc", "Kiếp Sát") && kiemTraCachCuc("Vũ Khúc", "Kình Dương")) {
                
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Kiếp Sát gặp Kình Dương`);

            }
        }
    }
    // Vũ Phá đồng cung tại Hợi gặp Thái Âm , gặp Tham Lang mà không phải là Giáp Kỉ Nhâm thì khổ vô cùng
    if (lasoData.canNam !== "G." || lasoData.canNam !== "N." || lasoData.canNam !== "K.") {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Vũ Khúc", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Thái Âm", "Tham Lang")) {
            
            keyArr.push("Vũ Khúc tọa thủ cung Mệnh ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");

        }
    }

    for (let i = 0; i < gkn.length; i++) {
        if (lasoData.canNam === gkn[i] && isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Vũ Khúc", "Phá Quân ") && isHaiSaoDongCungTaiCung("Mệnh", "Vũ Khúc", "Hỏa Tinh")) {
            
            keyArr.push(`Bạn tuổi ${giap_ky_nham[i]}  có Vũ Khúc tọa thủ cung Mệnh ở Hợi đồng cung Phá Quân và Hỏa Tinh`);

        }
    }

    // Vũ Khúc Tham Lang đồng cung
    if (isHaiSaoDongCungTaiCung("Mệnh", "Vũ Khúc", "Tham Lang")) {
        
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh đồng cung Tham Lang");

    }
    // Tại sủu mùi, vũ tham đồng cung và đồng cung kiếp sát
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Vũ Khúc", "Tham Lang") && isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Vũ Khúc", "Kiếp Sát")) {
            
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", KhoaLocQuyen)) {
            
            keyArr.push([`Vũ Khúc tọa thủ cung Mệnh ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", ")].join(" "));
        }
    }

    // Vũ Phá đồng cung tại Tỵ Hợi
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Vũ Khúc", "Phá Quân")) {
        
        keyArr.push("Vũ Khúc đồng cung Phá Quân tại Mệnh ở Tỵ");

    }
}

function LuanCachCucThaiDuong(keyArr) {
    const mieu = ["Tỵ", "Ngọ"];
    const vuong = ["Dần", "Mão", "Thìn"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Thân", "Dậu", "Tuất", "Hợi", "Tý"];
    const mvd = mieu.concat(vuong).concat(dac);
    const daohonghy = ["Đào Hoa", "Hồng Loan", "Thiên Hỷ"];
    const kinhdakhongkiephinhrieu = ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Thiên Riêu", "Thiên Hình"];
    const hoity = ["Tý", "Hợi"];
    const than_tuat_ty = ["Thân", "Tuất", "Tý"];
    const canhtandinhky = ["C.", "T.", "Đ.", "K."];

    const binhdinh = ["B.", "Đ."];
    const CanhTanDinhKy = ["Canh", "Tân", "Đinh", "Kỷ"];
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
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + mvd[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push(["Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                
                keyArr.push(["Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(["Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", ")].join(" "));

            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thái Dương tọa thủ cung Mệnh ở " + mvd[i]);
            }

        }
    }

    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Thái Dương") && isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Hóa Kỵ") && kiemTraCachCuc("Thái Dương", kinhdakhongkiephinhrieu) === false) {
            
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
        }
    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + ham[i]);
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                
                keyArr.push(["Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(["Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push(["Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thái Dương tọa thủ cung Mệnh ở " + ham[i]);

            }

        }
    }


    for (let i = 0; i < hoity.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", hoity[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + hoity[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc)) {
                
                keyArr.push(["Thái Dương tọa thủ cung Mệnh ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", ")].join(" "));

            }
        }

    }

    for (let i = 0; i < than_tuat_ty.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", than_tuat_ty[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + than_tuat_ty[i]);

        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Thiên Hình")) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh đồng cung Thiên Hình");

    }

    for (let i = 0; i < canhtandinhky.length; i++) {
        if (lasoData.canNam === canhtandinhky[i] && isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Thái Dương")) {
            
            keyArr.push("Bạn tuổi " + CanhTanDinhKy[i] + " có Thái Dương tọa thủ cung Mệnh ở Ngọ");
        }
    }
    for (let i = 0; i < binhdinh.length; i++) {
        if (lasoData.canNam === binhdinh[i] && isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thái Dương")) {
            
            keyArr.push("Bạn tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Mệnh ở Tý");
        }
    }
    for (let i = 0; i < muithan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", muithan[i], "Thái Dương")) {
            
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + muithan[i]);
        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Thái Âm")) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh đồng cung Thái Âm");

    }

    if (lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCungChi("Tài Bạch", "Mùi", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCungChi("Quan Lộc", "Mùi", "Thái Dương", "Thái Âm")) {

        
        keyArr.push("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Mệnh tại Sửu");


    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Tỵ") && isSaoToaThuTaiChi("Thái Âm", "Dậu")) {

        
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Mệnh tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCungChi("Tài Bạch", "Sửu", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCungChi("Quan Lộc", "Sửu", "Thái Dương", "Thái Âm")) {

        
        keyArr.push("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Mệnh tại Mùi");

    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {

        
        keyArr.push("Thái Dương tại Mão Thái Âm tại Hợi hội chiếu cung Mệnh tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {
        
        keyArr.push("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Mệnh tại Sửu");
    }
    if (laCungVoChinhDieu("Mệnh") && isSaoHoiChieuRong("Mệnh", "Thái Dương", false) && isSaoHoiChieuRong("Mệnh", "Thái Âm", false)) {
        
        keyArr.push("Cung Mệnh Vô Chính Diệu gặp Thái Dương, Thái Âm");
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", XuongKhuc.concat(KhoiHong).concat(ThaiToa))) {
            
            keyArr.push(["Thái Dương Thái Âm đồng cung tại " + suumui[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(KhoiHong).concat(ThaiToa).join(", ")].join(" "));

        }
    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Sửu", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", KhoaLocQuyen)) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
    }

    // Mệnh Thìn có Thái Dương gặp Thái Âm
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thìn", "Thái Dương") && kiemTraCachCuc("Thái Dương", "Thái Âm")) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Thìn gặp Thái Âm");
    }

    if (lasoData.lasoOb[0].chi === "Mùi" && isSaoToaThuTaiChi("Thái Dương", "Ngọ") && isSaoToaThuTaiChi("Thái Âm", "Thân") ||
        lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Dần") && isSaoToaThuTaiChi("Thái Âm", "Tý")) {
        
        keyArr.push("Mệnh giáp Âm Dương Sáng");
    }

    // Nhật, Mệnh tại Tỵ còn Cự Môn ở Hợi chiếu
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Thái Dương") && isSaoToaThuTaiChi("Cự Môn", "Hợi")) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Tỵ còn Cự Môn ở Hợi chiếu");


    }
    // NHật tại Tỵ gặp Lộc Mã Tả Hữu
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Thái Dương") && kiemTraCachCuc("Thái Dương", ["Hóa Lộc", "Thiên Mã", "Tả Phù", "Hữu Bật"])) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Tỵ gặp Lộc Mã Tả Hữu");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Thái Dương") && kiemTraCachCuc("Thái Dương", ["Thiên Tướng", "Thiên Hình", "Phục Binh", "Quốc Ấn"])) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Tỵ gặp Thiên Tướng, Thiên Hình, Phục Binh, Quốc Ấn");
    }

    // Nhật Mệnh tịa HƠi có Cự Môn ở Tỵ chiếu
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Thái Dương") && isSaoToaThuTaiChi("Cự Môn", "Tỵ")) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Hợi còn Cự Môn ở Tỵ chiếu");
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Thái Dương") && kiemTraCachCuc("Thái Dương", KhoaLocQuyen.concat(TaHuu).concat(KhoiHong))) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Hợi gặp Khoa Lộc Quyền, Tả Hữu, Thiên Khôi Đào Hồng");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Thái Dương") && kiemTraCachCuc("Thái Dương", ["Bạch Hổ", "Long Trì", "Phượng Các", "Hoa Cái"])) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Hợi gặp Bạch Hổ, Long Trì, Phượng Các, Hoa Cái");
    }


}

function LuanCachCucThienCo(keyArr) {
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

    // Thiên Cơ Miếu Vượng Địa
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Thiên Cơ")) {
            
            keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
            if (kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao))) {
                
                keyArr.push(["Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(LocHinhYQuangQuy))) {
                
                keyArr.push(["Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(Linh).concat(Hinh))) {
                
                keyArr.push(["Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                
                keyArr.push(["Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
            }
        }
    }
    // Thiên Cơ Mệnh nam Thìn Tuất
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Thiên Cơ") && lasoData.gioitinh === "Nam") {
            
            keyArr.push(`Quý Anh có Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Thiên Cơ") && isHaiSaoDongCungTaiCungChi("Mệnh", thintuat[i], "Thiên Cơ", "Thiên Lương")) {
            
            keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Mệnh ở ${thintuat[i]}`);
            if (kiemTraCachCuc("Thiên Cơ", kinhdahoalinhtuong)) {
                
                keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Mệnh ở ${thintuat[i]} gặp các sao Kình Đà Hỏa Linh Tướng`);
            }
            if (kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Thiên Cơ Thiên Lương đồng cung tại Mệnh ở ${thintuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
        }

    }


    //Thiên Cơ Mão Dậu
    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Thiên Cơ")) {

            for (let j = 0; j < at_tan_ky_binh.length; j++) {
                if (lasoData.canNam === atkb[j] && kiemTraCachCuc("Thiên Cơ", SongHao)) {

                    
                    keyArr.push(`Bạn tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${maodau[i]} gặp Song Hao`);
                }

            }
        }
    }
    // Thiên Cơ Tý Ngọ
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Thiên Cơ")) {
            for (let j = 0; j < at_binh_dinh.length; j++) {
                if (lasoData.canNam === abd[j] && kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                    
                    keyArr.push([`Bạn tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
                }

            }
        }

    }
    // Thiên Cơ Hãm địa
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Thiên Cơ")) {
            
            keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i]);
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                
                keyArr.push(["Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Cơ", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push(["Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", ")].join(" "));
            }
        }
    }
    // Cơ Nguyệt Đồng Lương
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && kiemTraCachCuc("Thiên Cơ", nguyetdongluong)) {
        
        keyArr.push("Thiên Cơ tọa thủ cung Mệnh gặp Thiên Đồng, Thiên Lương, Thái Âm");
    }
}
function LuanCacCachCucThienPhu(keyArr) {

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
    const canhnham = ["Canh", "Nhâm"];
    const ngotuat = ["Ngọ", "Tuất"];
    const mvd = mieu.concat(vuong).concat(dac);
    const TuTuongTham = ["Tử Vi", "Thiên Tướng", "Tham Lang"];

    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ")) {
        
        keyArr.push("Thiên Phủ tọa thủ cung Mệnh");

        if (kiemTraCachCuc("Thiên Phủ", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push(["Thiên Phủ tọa thủ cung Mệnh gặp các sao: ", ["Địa Không", "Địa Kiếp"].join(", ")].join(" "));
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có Thiên Phủ tọa thủ cung Mệnh gặp Địa Không Địa Kiếp");
            }
        }
        if (kiemTraCachCuc("Thiên Phủ", lucsattinh)) {
            
            keyArr.push(["Thiên Phủ tọa thủ cung Mệnh gặp các sao Sát tinh: ", lucsattinh.join(", ")].join(" "));
        }
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push(["Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push(["Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
        }

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Thiên Phủ")) {

        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            
            keyArr.push(["Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
        }
        for (let i = 0; i < gk.length; i++) {
            if (lasoData.canNam === gk[i] && kiemTraCachCuc("Thiên Phủ", lucsattinh) === false) {
                
                keyArr.push(`Bạn tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tuất không gặp Sát tinh`);

            }
        }
    }
    for (let i = 0; i < canhnham.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Phủ", "Vũ Khúc")) {
            
            keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Bạn tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
        }
    }

    for (let i = 0; i < ngotuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ngotuat[i], "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", "Thiên Tướng")) {
            
            keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Bạn tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat("Thiên Tướng").join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Phủ", "Thiên Tướng, Thiên Lương")) {
                
                keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
            }

        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", TaHuu.concat(XuongKhuc))) {
        
        keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc");
        if (kiemTraCachCuc("Thiên Phủ", "Lộc Tồn")) {
            
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
        }

    }
    // Tử Vi Thiên Phủ đồng cung tại Dần
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Tử Vi", "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", ["Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Kình Dương", "Hữu Bật"]) && kiemTraCachCuc("Tử Vi", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Tử Vi Thiên Phủ đồng cung tại Dần gặp Khoa, Lộc, Quyền, Kình, Bật không gặp Địa Không, Địa Kiếp");

    }

}

function LuanCachCucThaiAm(keyArr) {

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
    const binhdinh = ["Bính", "Đinh"];
    const bd = ["B.", "Đ."];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm")) {
        
        keyArr.push("Thái Âm tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Thái Âm")) {
            
            keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", daohonghy)) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", Kinh.concat(Da))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, Kinh.concat(Da).join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Thái Âm tọa thủ cung Mệnh ở ${mvd[i]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Thái Âm", "Hóa Lộc") && kiemTraCachCuc("Thái Âm", ["Tả Phù", "Hữu Bật"])) {
                
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật`);
            }

        }
    }
    for (let i = 0; i < dac.length; i++) {

        if (isHaiSaoDongCungTaiCungChi("Mệnh", dac[i], "Thái Âm", "Hoá Kỵ") && kiemTraCachCuc("Thái Âm", lucsattinh) === false) {
            
            keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Thái Âm")) {
            
            keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thái Âm", Kinh.concat(Da))) {
                
                keyArr.push([`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Thái Âm tọa thủ cung Mệnh ở ${ham[i]}`);
            }
        }
    }


    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Âm", "Thiên Hình")) {
        
        keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm") && lasoData.gioitinh === "Nam") {
        
        keyArr.push("Quý Anh có Thái Âm tọa thủ cung Phu Thê");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isHaiSaoDongCungTaiCung("Mệnh", "Thái Âm", "Vũ Khúc") && isHaiSaoDongCungTaiCung("Mệnh", "Thái Âm", "Lộc Tồn")) {
        
        keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn");
        if (kiemTraCachCuc("Thái Âm", TaHuu)) {
            
            keyArr.push(["Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", ")].join(" "));
        }
    }

    for (let i = 0; i < binhdinh.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Thái Âm")) {
            
            keyArr.push(`Bạn tuổi ${bd[i]} có Thái Âm tọa thủ cung Mệnh ở Tý`);
        }
    }

}
function LuanCachCucThamLang(keyArr) {

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
    const tyhoi = ["Tý", "Hợi"];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang")) {
        
        keyArr.push("Tham Lang tọa thủ cung Mệnh");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Tham Lang")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]}`);

            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push([`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", ")].join(" "));
            }
            for (let j = 0; j < mauky.length; j++) {
                if (kiemTraCachCuc("Tham Lang", HoaLinh) && lasoData.canNam === mk[j]) {
                    
                    keyArr.push(["Bạn tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao: ", HoaLinh.join(", ")].join(" "));
                }
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Tham Lang tọa thủ cung Mệnh ở ${mvd[i]}`);
            }
        }

    }

    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", vuong[i], "Tham Lang", "Hoá Kỵ") && kiemTraCachCuc("Tham Lang", lucsattinh) === false) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Tham Lang") && isSaoToaThuTaiCung("Thiên Di", "Hóa Kỵ")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${vuong[i]} gặp Hoá Kỵ tại Thiên Di`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Tham Lang")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push([`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Tham Lang", lucsattinh)) {
                
                keyArr.push([`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Tham Lang", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push([`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Tham Lang", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push([`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", ")].join(" "));
            }
            if (isHaiSaoDongCungTaiCung("Mệnh", ham[i], "Tham Lang", "Thiên Riêu")) {
                
                keyArr.push(`Tham Lang đồng cung Thiên Riêu tại cung Mệnh ở ${ham[i]}`);
            }
            if (isHaiSaoDongCungTaiCung("Mệnh", ham[i], "Tham Lang", "Thiên Riêu")) {
                
                keyArr.push(`Tham Lang đồng cung Thiên Riêu tại cung Mệnh ở ${ham[i]}`);
            }
        }
    }


    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push(`Tham Lang đồng cung Vũ Khúc tại cung Mệnh ở ${tumo[i]}`);
        }
        if (isHaiSaoDongCungTaiCung(lasoData.cungCu, tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push(`Tham Lang Vũ Khúc đồng cung tại ${lasoData.cungCu} ở ${tumo[i]}s`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hỏa Tinh", "Linh Tinh"])) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Hỏa Tinh")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Hoả Tinh`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Linh Tinh")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Linh Tinh`);
        }

    }
    for (let i = 0; i < suumui.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) === true && kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu)) === false) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) && kiemTraCachCuc("Tham Lang", ["Thất Sát"]) && kiemTraCachCuc("Tham Lang", "Hóa Kỵ")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Thiên Không")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Thiên Không`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Địa Không")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Địa Không`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Địa Kiếp")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Địa Kiếp`);
        }
    }
    for (let i = 0; i < tusinh.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) && kiemTraCachCuc("Tham Lang", ["Thất Sát"]) && kiemTraCachCuc("Tham Lang", "Hóa Kỵ")) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tusinh[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Tham Lang", "Liêm Trinh")) {
        
        keyArr.push("Tham Lang tọa thủ cung Mệnh đồng cung Liêm Trinh");

    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Tham Lang", "Liêm Trinh") && kiemTraCachCuc("Tham Lang", Kinh.concat(Da).concat("Thiên Hư, Thiên Không, Địa Không, Địa Kiếp"))) {
        
        keyArr.push("Tham Lang tọa thủ cung Mệnh ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");

    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Tham Lang", "Vũ Khúc") && kiemTraCachCuc("Tham Lang", "Phá Quân") && kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(KhoiViet)) === false) {
        
        keyArr.push("Tham Lang tọa thủ cung Mệnh đồng cung Vũ Khúc gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu Khôi Việt");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Tham Lang", "Đà La") && kiemTraCachCuc("Tham Lang", ["Thiên Hình"])) {
        
        keyArr.push("Tham Lang tọa thủ cung Mệnh ở Dần đồng cung Đà La gặp Thiên Hình");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hóa Quyền"])) {
            
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tyhoi[i]} gặp Hoá Quyền`);
        }
    }

}
function LuanCachCucCuMon(keyArr) {
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
    const abd = ["Â.", "B.", "Đ."];
    const atbinhdinh = ["Ất", "Bính", "Đinh"];
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


    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Cự Môn")) {
            
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet))) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", ")].join(" "));
            }

            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Mệnh", mvd[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý Chị có Cự Môn tọa thủ cung Mệnh ở ${mvd[i]}`);
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Cự Môn")) {

            
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Cự Môn", KhoaTueHinh.concat(TaHuu).concat(HoaLinh))) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Mệnh", ham[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Hóa Lộc, Thái Tuế"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                
                keyArr.push([`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Cự Môn", ["Thiên Hư", "Thiên Không", "Địa Không", "Địa Kiếp"])) {
                
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp`);
            }



        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        for (let j = 0; j < dinhcanh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Cự Môn") && lasoData.canNam === dc[j]) {
                
                keyArr.push(`Bạn tuổi ${dinhcanh[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
            }
        }
        for (let j = 0; j < quytan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Cự Môn") && lasoData.canNam === qt[j]) {
                
                keyArr.push(`Bạn tuổi ${quytan[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
            }
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", thintuat[i], "Cự Môn", "Thiên Đồng") && kiemTraCachCuc("Cự Môn", ["Hóa Khoa"])) {
            
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Đồng gặp Hoá Khoa`);
        }

    }
    for (let i = 0; i < suumui.length; i++) {
        for (let j = 0; j < atbinhdinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Cự Môn") && lasoData.canNam === abd[j]) {
                
                keyArr.push(`Bạn tuổi ${atbinhdinh[j]} có Cự Môn tọa thủ cung Mệnh ở ${suumui[i]}`);
            }
        }


    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Cự Môn", "Hóa Kỵ")) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh đồng cung Hoá Kỵ");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh đồng cung Thái Dương");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");
    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Thân", "Cự Môn", "Thái Dương")) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Thân đồng cung Thái Dương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Thiên Di", "Thái Dương")) {

        keyArr.push("Cự Môn tọa thủ cung Mệnh gặp Thái Dương, Thiên Di có Thái Dương");
    }

    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCung("Thiên Di", "Thái Dương", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Thiên Di đồng cung Thái Dương xung chiếu cung Mệnh ở Dần");

    }
    if (lasoData.lasoOb[0].chi === "Thân" && isHaiSaoDongCungTaiCung("Thiên Di", "Thái Dương", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Thiên Di đồng cung Thái Dương xung chiếu cung Mệnh ở Thân");
    }
    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Cự Môn", "Thái Dương") && kiemTraCachCuc("Cự Môn", "Hóa Lộc")) {
            
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Cự Môn", "Thái Dương") && isHaiSaoDongCungTaiCung("Mệnh", "Cự Môn", "Lộc Tồn")) {
            
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${danthan[i]} đồng cung Thái Dương đồng cung Lộc Tồn`);
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Thiên Cơ", "Cự Môn")) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thiên Cơ");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Hóa Quyền", "Phượng Các"])) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh đồng cung Thái Dương gặp Hoá Quyền, Phượng Các");

    }


    for (let i = 0; i < attankybinh.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ") && lasoData.canNam === atkb[i]) {
                
                keyArr.push(`Bạn tuổi ${attankybinh[i]} có Cự Môn đồng cung Thiên Cơ tại cung Mệnh ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ") && isHaiSaoDongCungTaiCung("Mệnh", "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn đồng cung Thiên Cơ, Lộc Tồn tại cung Mệnh ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ") && (isSaoHoiChieuRong("Mệnh", "Đại Hao", true) && isSaoHoiChieuRong("Mệnh", "Tiểu Hao", true))) {
                
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Mệnh ở ${maodau[j]} gặp Đại Hao, Tiểu Hao`);
            }
            if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ")) {
                
                keyArr.push(['Quý chị có Cự Môn đồng cung Thiên Cơ tại cung Mệnh ở', maodau[j]].join(" "));
            }

        }
    }
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < binhtan.length; j++) {
            if (isSaoToaThuTaiCung("Mệnh", tumo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Kình Dương", "Hoá Kỵ"]) && lasoData.canNam !== bt[j]) {
                
                keyArr.push(`Bạn có Cự Môn tọa thủ cung Mệnh ở ${tumo[i]} gặp Kình Dương, Hoá Kỵ mà không phải tuổi ${binhtan[j]}`);

            }

        }
        for (let i = 0; i < tyhoi.length; i++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Cự Môn", "Lộc Tồn")) {
                
                keyArr.push(`Cự Môn đồng cung Lộc Tồn tại cung Mệnh ở ${tyhoi[i]}`);
            }
        }

        for (let i = 0; i < tyngo.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", KhoaLocQuyen)) {
                
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${tyngo[i]} gặp Khoa Lộc Quyền`);

            }
        }
    }

    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Hóa Lộc"]) === false) {
            
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${tyngo[i]} không gặp Hoá Lộc`);

        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Địa Không", "Địa Kiếp", "Kình Dương", "Đà La"])) {
        
        keyArr.push("Cự Môn tọa thủ cung Mệnh gặp Địa Không, Địa Kiếp, Kình Dương, Đà La");
    }



}
function LuanCachCucThienTuong(keyArr) {
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
    const DaoHongHoaKhuc = ["Đào Hoa", "Hồng Loan", "Hoa Cái", "Văn Khúc"];

    const mvd = mieu.concat(vuong).concat(dac);

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]}`);
            }
        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc))) {
            
            keyArr.push([`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", ")].join(" "));


        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", lucsattinh)) {
            
            keyArr.push([`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));

        }
        i
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", vuong[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Kình Dương", "Đà La"])) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${vuong[i]} gặp Kình Dương, Đà La`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Thiên Tướng", lucsattinh)) {
                
                keyArr.push([`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }

        }
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Hóa Lộc", "Thái Tuế"])) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
        }
        if (lasoData.gioitinh === "Nữ" && isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Tướng")) {
            
            keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
        }

    }
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", thintuat[i], "Thiên Tướng")) {
            
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < tyngo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyngo[i], "Thiên Tướng", "Liêm Trinh") && kiemTraCachCuc("Thiên Tướng", "Kình Dương")) {
            
            keyArr.push(`Thiên Tướng đồng cung Liêm Trinh tại cung Mệnh ở ${tyngo[i]} gặp Kình Dương`);
        }
    }

    if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCung("Mệnh", "Thiên Tướng", "Hồng Loan")) {
        
        keyArr.push("Quý chị có Thiên Tướng đồng cung Hồng Loan tại cung Mệnh");
    }
    if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Thiên Tướng", DaoHongHoaKhuc)) {
        
        keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Mệnh gặp Đào Hoa, Hồng Loan, Hoa Cái, Văn Khúc");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Thiên Tướng", "Thiên Hình")) {
        
        keyArr.push("Thiên Tướng tọa thủ cung Mệnh đồng cung Thiên Hình");
    }
}

function LuanCachCucThienLuong(keyArr) {
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
    const th = ["Tý", "Hợi"];
    const dau = ["Dậu"];
    const thintuat = ["Thìn", "Tuất"];
    const dinhkyquy = ["Đinh", "Kỷ", "Quý"];
    const dkq = ["Đ.", "K.", "Q."];
    const danthan = ["Dần", "Thân"];
    const tysuudanmaothintyngo = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];

    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương")) {
        
        keyArr.push("Thiên Lương tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thiên Lương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                
                keyArr.push([`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Lương", KhoiViet.concat(XuongKhuc).concat("Thái Tuế"))) {
                
                keyArr.push([`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thiên Lương", lucsattinh.concat(HoaLinh))) {
                
                keyArr.push([`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", ")].join(" "));

            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]}`);
            }
        }

    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Thiên Lương", lucsattinh)) {
                
                keyArr.push([`Thiên Lương tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thiên Lương tọa thủ cung Mệnh ở ${ham[i]}`);
            }
            if (kiemTraCachCuc("Thiên Lương", ["Thái Âm"])) {
                
                keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${ham[i]} gặp Thái Âm`);
            }
        }
    }

    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", thintuat[i], "Thiên Lương")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < dinhkyquy.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Thiên Lương") && lasoData.canNam === dkq[i]) {
            
            keyArr.push(["Bạn tuổi", dinhkyquy[i], "có Thiên Lương tọa thủ cung Mệnh ở Ngọ"].join(" "));

        }
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Thiên Lương", "Thái Dương")) {
        
        keyArr.push("Thiên Lương đồng cung Thái Dương tại cung Mệnh ở Dần");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Mão", "Thiên Lương", "Thái Dương")) {
        
        keyArr.push("Thiên Lương đồng cung Thái Dương tại cung Mệnh ở Mão");
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Thiên Lương") && isSaoToaThuTaiCung("Thiên Di", "Thái Dương") && kiemTraCachCuc("Thiên Lương", ["Văn Xương", "Hóa Lộc"])) {
        
        keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Tý gặp Thái Dương ở Thiên Di và có Văn Xương, Hoá Lộc hội chiếu Mệnh");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Thái Dương") && isSaoToaThuTaiCung("Thiên Di", "Thiên Lương") && kiemTraCachCuc("Thái Dương", ["Văn Xương", "Hóa Lộc"])) {
        
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Ngọ gặp Thiên Lương ở Thiên Di và có Văn Xương, Hoá Lộc hội chiếu Mệnh");
    }


    for (let i = 0; i < tysuudanmaothintyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tysuudanmaothintyngo[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Linh Tinh"])) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", vuong[i], "Thiên Lương", "Thiên Đồng")) {
            
            keyArr.push(`Thiên Lương đồng cung Thiên Đồng tại cung Mệnh ở ${vuong[i]}`);
        }
    }

    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCungChi("Thiên Di", "Thân", "Thiên Lương", "Thiên Đồng") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Thiên Cơ"])) {
        
        keyArr.push("Thiên Lương đồng cung Thiên Đồng ở Thân xung chiếu cung Mệnh ở Dần gặp Thái Âm, Thiên Cơ");
    }
    for (let i = 0; i < mieu.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", mieu[i], "Thiên Lương", "Văn Xương")) {
            
            keyArr.push(`Thiên Lương đồng cung Văn Xương tại cung Mệnh ở ${mieu[i]}`);
        }
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", lucsattinh.concat("Đại Hao, Tiểu Hao"))) {
        
        keyArr.push(["Thiên Lương tọa thủ cung Mệnh ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", ")].join(" "));
    }
    for (let i = 0; i < th.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", th[i], "Thiên Lương", "Thiên Mã")) {
            
            keyArr.push(`Thiên Lương đồng cung Thiên Mã tại cung Mệnh ở ${th[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", th[i], "Thiên Lương") && isSaoToaThuTaiCung("Thiên Di", "Thiên Mã")) {
            
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${th[i]} gặp Thiên Mã ở Thiên Di`);

        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Thiên Lương", "Thiên Đồng") && kiemTraCachCuc("Thiên Lương", ["Thiên Cơ", "Thái Âm"])) {
            
            keyArr.push(`Thiên Lương đồng cung Thiên Đồng tại cung Mệnh ở ${danthan[i]} gặp Thiên Cơ, Thái Âm`);

        }
    }

}
function LuanCachCucThatSat(keyArr) {
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

    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát")) {
        
        keyArr.push("Thất Sát tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thất Sát")) {
            
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
            }

        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh))) {
            
            keyArr.push([`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", ")].join(" "));

        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
            
            keyArr.push([`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", ")].join(" "));
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Thất Sát", "Thiên Hình")) {
            
            keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Mệnh ở ${mvd[i]}`);
        }
    }

    for (let i = 0; i < giapcanhdinhky.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[j], "Thất Sát") && lasoData.canNam === gcdk[i]) {
                
                keyArr.push(`Bạn tuổi ${giapcanhdinhky[i]} có Thất Sát tọa thủ cung Mệnh ở ${danthan[j]}`);
            }

        }
    }


    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thất Sát")) {
            
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Thất Sát", tahuulongphuongquangquy)) {
                
                keyArr.push([`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", ")].join(" "));
            }
            if (kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
                
                keyArr.push([`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", ")].join(" "));
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", ham[i], "Thất Sát", "Thiên Hình")) {
                
                keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Mệnh ở ${ham[i]}`);
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
            }
        }
    }
    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Thất Sát") && lasoData.canNam === at[j]) {
                
                keyArr.push(`Bạn tuổi ${attan[j]} có Thất Sát tọa thủ cung Mệnh ở ${maodau[i]}`);
            }
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Thất Sát", "Tử Vi")) {
        
        keyArr.push("Thất Sát đồng cung Tử Vi tại cung Mệnh ở Tỵ");
        if (kiemTraCachCuc("Thất Sát", batkhoamaanhong)) {
            
            keyArr.push(["Thất Sát đồng cung Tử Vi tại cung Mệnh ở Tỵ gặp các sao cát tinh: ", batkhoamaanhong.join(", ")].join(" "));
        }
        if (kiemTraCachCuc("Thất Sát", ["Hỏa Tinh"])) {
            
            keyArr.push("Thất Sát đồng cung Tử Vi tại cung Mệnh ở Tỵ gặp Hoả Tinh");
        }
    }

    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Thất Sát", "Liêm Trinh")) {
            
            keyArr.push(`Thất Sát đồng cung Liêm Trinh tại cung Mệnh ở ${suumui[i]}`);
        }
        for (let j = 0; j < atky.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Thất Sát") && lasoData.canNam === ak[j]) {
                
                keyArr.push(`Bạn tuổi ${atky[j]} có Thất Sát tọa thủ cung Mệnh ở ${suumui[i]}`);
            }
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Thất Sát") && lasoData.gioitinh === "Nam") {
            
            keyArr.push(["Quý Anh có Thất Sát tọa thủ cung Mệnh ở", tyngo[i]].join(" "));

            if (kiemTraCachCuc("Thất Sát", ["Địa Kiếp", "Thiên Riêu"])) {
                
                keyArr.push(`Quý Anh có Thất Sát tọa thủ cung Mệnh ở ${tyngo[i]} gặp Địa Kiếp, Thiên Riêu`);

            }
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Thất Sát") && lasoData.gioitinh === "Nữ") {

            if (kiemTraCachCuc("Thất Sát", ["Địa Kiếp", "Thiên Riêu"])) {
                
                keyArr.push(`Quý Chị có Thất Sát tọa thủ cung Mệnh ở ${tyngo[i]} gặp Địa Kiếp, Thiên Riêu`);

            }
        }

    }

    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Phá Quân", "Tham Lang"])) {
        
        keyArr.push(`Thất Sát tọa thủ cung Mệnh gặp Phá Quân, Tham Lang`);
        for (let i = 0; i < td.length; i++) {
            if (lasoData.gioitinh === "Nữ" && lasoData.canNam === td[i]) {
                
                keyArr.push(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Mệnh gặp Phá Quân, Tham Lang`);
            }
        }

    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
        
        keyArr.push("Thất Sát tọa thủ cung Mệnh gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
    }

    for (let i = 0; i < binhmau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thất Sát", "Kình Dương") && lasoData.canNam === bm[i]) {
            
            keyArr.push(`Bạn tuổi ${binhmau[i]} có Thất Sát đồng cung Kình Dương tại cung Mệnh`);
        }
        if (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
            
            keyArr.push(`Thân cư ${lasoData.cungCu} có Thất Sát tọa thủ và gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
        }

    }
}
function LuanCachcCucPhaQuan(keyArr) {
    let lasoData = {};

    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Tý", "Ngọ"];
    const vuong = ["Sửu", "Mùi"];
    const dac = ["Thìn", "Tuất"];
    const ham = ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"];
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
    const tandinh = ["Tân", "Đinh"];
    const td = ["T.", "Đ."];




    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Phá Quân tọa thủ cung Mệnh ở ${mvd[i]}`);
            }

        } if (kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc) && isSaoToaThuTaiCung("Mệnh", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (kiemTraCachCuc("Phá Quân", hokyhinhsonghao) && isSaoToaThuTaiCung("Mệnh", mvd[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }

    }
    for (let i = 0; i < mieu.length; i++) {
        for (let j = 0; j < dinhkyquy.length; j++) {
            if (isSaoToaThuTaiCung("Mệnh", mieu[i], "Phá Quân") && lasoData.canNam === dkq[j]) {
                
                keyArr.push(`Bạn tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${mieu[i]}`);

            }

        }

    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Phá Quân")) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push(`Quý chị có Phá Quân tọa thủ cung Mệnh ở ${ham[i]}`);
            }

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", hokyhinhsonghao)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc)) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", lucsattinh)) {
            
            keyArr.push([`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));

        }
        if (isSaoToaThuTaiChi("Mệnh", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Địa Không", "Kình Dương", "Đà La", "Địa Kiếp"])) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} gặp Địa Không, Kình Dương, Đà La, Địa Kiếp`);
        }


    }

    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attanquy.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Phá Quân") && lasoData.canNam === atq[j]) {
                
                keyArr.push(`Bạn tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${maodau[i]}`);
            }
        }

        if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[i], "Phá Quân", "Kình Dương") && kiemTraCachCuc("Phá Quân", ["Tả Phù", "Hữu Bật"])) {
            
            keyArr.push(`Phá Quân đồng cung Kình Dương tại cung Mệnh ở ${maodau[i]} gặp Tả Phù, Hữu Bật`);
        }
    }

    for (let i = 0; i < gcdk.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[j], "Phá Quân") && lasoData.canNam === gcdk[i]) {
                
                keyArr.push(`Bạn tuổi ${giapcanhdinhky[i]} có Phá Quân tọa thủ cung Mệnh ở ${danthan[j]}`);
            }
        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Linh Tinh"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Mệnh gặp Hoả Tinh, Linh Tinh");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], "Phá Quân") && lasoData.canNam === "Mậu") {
            
            keyArr.push(`Bạn tuổi Mậu có Phá Quân tọa thủ cung Mệnh ở ${tyhoi[i]}`);
        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Thiên Việt", "Đại Hao", "Tiểu Hao", "Hoả Tinh", "Thiên Hình"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Mệnh gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Linh Tinh", "Thiên Việt", "Thiên Hình"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Mệnh gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Phá Quân", "Lộc Tồn") && kiemTraCachCuc("Phá Quân", ["Thiếu Dương"])) {
        
        keyArr.push("Phá Quân đồng cung Lộc Tồn tại cung Mệnh ở Ngọ và gặp Thiếu Dương");
    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Phá Quân", "Thiếu Dương")) {
        
        keyArr.push("Phá Quân đồng cung Thiếu Dương tại cung Mệnh ở Ngọ");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Thiếu Dương", "Hoá Lộc"])) {
        
        keyArr.push("Phá Quân tọa thủ cung Mệnh ở Ngọ gặp Thiếu Dương, Hoá Lộc");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoá Lộc", "Thiên Hình"])) {
            
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Phá Quân", "Tham Lang") && kiemTraCachCuc("Phá Quân", ["Thiên Mã", "Hoá Lộc"])) {
        
        keyArr.push("Phá Quân đồng cung Tham Lang tại cung Mệnh gặp Thiên Mã, Hoá Lộc");

    }

    for (let i = 0; i < td.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[j], "Phá Quân") && lasoData.canNam === td[i] && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Thiên Việt"])) {
                
                keyArr.push(`Bạn tuổi ${tandinh[i]} có Phá Quân tọa thủ cung Mệnh ở ${danthan[j]} và gặp Hoả Tinh, Thiên Việt`);
            }
        }
    }


}
function LuanCachCucXuongKhuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"];
    const ham_dia = ["Dần", "Thân", "Mão", "Dậu", "Tý", "Ngọ"];
    const tuphukhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];

    const tyhoi = ["Tỵ", "Hợi"];
    const danmao = ["Dần", "Mão"];

    for (let i = 0; i < dac_dia.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", dac_dia[i], "Tham Lang", "Văn Khúc") && isHaiSaoDongCungTaiCung("Mệnh", "Văn Khúc", "Hoả Tinh")) {
            
            keyArr.push(`Văn Khúc đồng cung Tham Lang, Hoả Tinh tại Mệnh ở ${dac_dia[i]}`);
        }
        if (isSaoToaThuTaiCung("Mệnh", dac_dia[i], "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Tham Lang", "Hoả Tinh"])) {
            
            keyArr.push(`Văn Khúc toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Tham Lang, Hoả Tinh`);
        }
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], XuongKhuc[j])) {
                
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(XuongKhuc[j], tuphukhoiviettahuukhoaquyenloc)) {
                    
                    keyArr.push([`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", ")].join(" "));
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Lương", "Thiên Đồng"])) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Lương, Thiên Đồng`);
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Cơ", "Hóa Lộc"])) {
                    
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                }
                if (isHaiSaoDongCungTaiCung("Mệnh", dac_dia[i], XuongKhuc[j], "Hóa Lộc")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Hoá Lộc tại Mệnh ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Mệnh", dac_dia[i], XuongKhuc[j], "Vũ Khúc")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Vũ Khúc tại cung Mệnh ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Mệnh", dac_dia[i], XuongKhuc[j], "Tả Phù")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Tả Phù tại cung Mệnh ở ${dac_dia[i]}`);

                }
                if (isHaiSaoDongCungTaiCungChi("Mệnh", dac_dia[i], XuongKhuc[j], "Thiên Lương")) {
                    
                    keyArr.push(`${XuongKhuc[j]} đồng cung Thiên Lương tại cung Mệnh ở ${dac_dia[i]}`);
                }
            }
        }
    }

    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], XuongKhuc[j])) {
                
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
                if (kiemTraCachCuc(XuongKhuc[j], lucsattinh)) {
                    
                    keyArr.push([`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
                }
                if (lasoData.gioitinh === "Nữ") {
                    
                    keyArr.push(`Quý chị có ${XuongKhuc[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
                }
            }
        }
    }

    for (let i = 0; i < XuongKhuc.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", XuongKhuc[i]) && kiemTraCachCuc(XuongKhuc[i], ["Thái Tuế", "Tấu Thư", "Long Trì", "Phượng Các"])) {
            
            keyArr.push(`${XuongKhuc[i]} toạ thủ cung Mệnh gặp Thái Tuế, Tấu Thư, Long Trì, Phượng Các`);
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Văn Xương") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Khúc") || isSaoToaThuTaiCung("Phụ Mẫu", "Văn Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Xương")) {
        
        keyArr.push(`Văn Xương Văn Khúc giáp Mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương")) {
            
            keyArr.push("Mệnh có Thái Dương giáp Văn Xương, Văn Khúc");
        }
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && kiemTraCachCuc("Văn Xương", ["Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
        
        keyArr.push("Mệnh có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Văn Xương", "Thiên Khôi", "Thiên Việt"])) {
        
        keyArr.push("Mệnh có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && kiemTraCachCuc("Văn Xương", ["Văn Khúc", "Tả Phù", "Hữu Bật"])) {
        
        keyArr.push("Mệnh có Văn Xương hội chiếu Văn Khúc, Tả Phù, Hữu Bật");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Văn Xương", "Tả Phù", "Hữu Bật"])) {
        
        keyArr.push("Mệnh có Văn Khúc hội chiếu Văn Xương, Tả Phù, Hữu Bật");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], XuongKhuc[j]) && isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], XuongKhuc[j], "Liêm Trinh")) {
                
                keyArr.push(`${XuongKhuc[j]} đồng cung Liêm Trinh tại cung Mệnh ở ${tyhoi[i]}`);
            }
        }
    }

    for (let i = 0; i < danmao.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", danmao[i], XuongKhuc[j], "Phá Quân") && kiemTraCachCuc(XuongKhuc[j], "Kình Dương")) {
                
                keyArr.push(`${XuongKhuc[j]} đồng cung Phá Quân tại cung Mệnh ở ${danmao[i]} gặp Kình Dương`);

            }
        }
    }

}
function LuanCachCucKhoiViet(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuvutuongxuongkhuctahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const xuongkhuckhoatuetau = ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"];

    for (let i = 0; i < KhoiViet.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", KhoiViet[i])) {

            if (kiemTraCachCuc(KhoiViet[i], tuphuvutuongxuongkhuctahuukhoaquyenloc)) {
                
                keyArr.push([`${KhoiViet[i]} toạ thủ cung Mệnh gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", ")].join(" "));
            }
            if (kiemTraCachCuc(KhoiViet[i], lucsattinh)) {
                
                keyArr.push([`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Kỵ", "Thiên Hình"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Thiên Hình`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);

            }
            if (kiemTraCachCuc(KhoiViet[i], ["Thiên Lương", "Thiên Cơ", "Hoá Lộc"])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Lộc"]) && kiemTraCachCuc(KhoiViet[i], lucsattinh) === false) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Lộc mà không gặp các sao Sát tinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Tử Vi", KhoiViet[i])) {
                
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh ở Ngọ đồng cung Tử Vi`);
            }

        }

    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Khôi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Việt") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Việt") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Khôi")) {
        
        keyArr.push(`Khôi Việt giáp Mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương")) {
            
            keyArr.push("Mệnh có Thái Dương giáp Khôi Việt");
        }
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc")) {
            
            keyArr.push("Mệnh có Hóa Lộc giáp Khôi Việt");
        }
    }
}
function LuanCachCucLocTon(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];
    const tuphuxuongkhuckhoivietma = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Thiên Mã"];
    const quangquyquanrieuy = ["Ân Quang", "Thiên Quý", "Quan Phù", "Thiên Y", "Thiên Riêu"];
    const khongkiephaokypha = ["Địa Không", "Địa Kiếp", "Đại Hao", "Tiểu Hao", "Hóa Kỵ", "Tuế Phá"];

    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn")) {

        if (kiemTraCachCuc("Lộc Tồn", tuphuxuongkhuckhoivietma)) {
            
            keyArr.push(["Lộc Tồn toạ thủ cung Mệnh gặp", tuphuxuongkhuckhoivietma.join(", ")].join(" "));
        }
        if (kiemTraCachCuc("Lộc Tồn", quangquyquanrieuy)) {
            
            keyArr.push(["Lộc Tồn toạ thủ cung Mệnh gặp", quangquyquanrieuy.join(", ")].join(" "));
        }
        if (kiemTraCachCuc("Lộc Tồn", khongkiephaokypha)) {
            
            keyArr.push(["Lộc Tồn toạ thủ cung Mệnh gặp", khongkiephaokypha.join(", ")].join(" "));
        }
        if (kiemTraCachCuc("Lộc Tồn", ["Phá Quân"])) {
            
            keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp Phá Quân");

        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Lộc Tồn", "Hóa Lộc")) {
            
            keyArr.push("Lộc Tồn đồng cung Hoá Lộc tại cung Mệnh");
        }
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Hóa Lộc")) {
            
            keyArr.push("Song Lộc hội chiếu tại cung Mệnh");

        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Lộc Tồn", "Thiên Mã")) {
            
            keyArr.push("Lộc Tồn đồng cung Thiên Mã tại cung Mệnh");
        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Thiên Mã", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === true || isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Lộc Tồn", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === true) {
            
            keyArr.push("Lộc Mã giao trì gặp Tuế Phá, Địa Kiếp, Thiên Không");
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && kiemTraCachCuc("Thiên Mã", "Lộc Tồn") && kiemTraCachCuc("Thiên Mã", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false || isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Lộc Tồn", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false) {
            
            keyArr.push("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung Mệnh ở ${tyngo[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Thiên Di", tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung Thiên Di ở ${tyngo[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi(lasoData.cungCu, tyngo[i], "Lộc Tồn")) {
            
            keyArr.push(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
        }
    }
}

function LuanCachCucTaHuu(keyArr) {
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
        if (isSaoToaThuTaiCung("Mệnh", TaHuu[i])) {

            if (kiemTraCachCuc(TaHuu[i], tuphuxuongkhuckhoivietkhoaquyenloc)) {
                
                keyArr.push([`${TaHuu[i]} toạ thủ cung Mệnh gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", ")].join(" "));
            }
            if (kiemTraCachCuc(TaHuu[i], conguyetdongluonglongphuong)) {
                
                keyArr.push([`${TaHuu[i]} toạ thủ cung Mệnh gặp`, conguyetdongluonglongphuong.join(", ")].join(" "));
            }
            if (kiemTraCachCuc(TaHuu[i], lucsattinh)) {
                
                keyArr.push([`${TaHuu[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", ")].join(" "));
            }
            if (kiemTraCachCuc(TaHuu[i], ["Kình Dương"])) {
                
                keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp Kình Dương`);
            }
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc(KhoaLocQuyen)) {
            
            keyArr.push(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Tả Phù") && isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Hữu Bật") && kiemTraCachCuc("Tả Phù", KhoaLocQuyen.concat("Tử Vi", "Thiên Phủ"))) {
            
            keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            if (kiemTraCachCuc("Tả Phù", ["Thiên Cơ", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
            }
            if (kiemTraCachCuc("Tả Phù", ["Thất Sát", "Phá Quân", "Liêm Trinh"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc("Tả Phù", ["Văn Xương ", "Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
                
                keyArr.push(`Tả Phù, Hữu Bật đồng cung tại Mệnh ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
            }

        }


    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Hữu Bật", "Thiên Tướng")) {
            
            keyArr.push(`Hữu Bật, Thiên Tướng đồng cung tại Mệnh ở ${tyhoi[i]}`);
        }


    }

    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[i], "Hữu Bật", "Thiên Tướng")) {
            
            keyArr.push(`Hữu Bật, Thiên Tướng đồng cung tại Mệnh ở ${maodau[i]}`);
        }
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Hữu Bật", "Thiên Tướng")) {
        
        keyArr.push(`Hữu Bật, Thiên Tướng đồng cung tại Mệnh`);
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Tả Phù", "Hữu Bật")) {
        
        keyArr.push(`Tả Phù, Hữu Bật đồng cung tại Mệnh`);
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Tả Phù") && isSaoToaThuTaiCung("Huynh Đệ", "Hữu Bật") || isSaoToaThuTaiCung("Phụ Mẫu", "Hữu Bật") && isSaoToaThuTaiCung("Huynh Đệ", "Tả Phù")) {
        
        keyArr.push(`Tả Phù Hữu Bật giáp mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi")) {
            
            keyArr.push(`Mệnh có Tử Vi giáp Tả Phù Hữu Bật`);
        }
    }
}
function LuanCachCucKinhDuongDaLa(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", " Tuất", "Sửu", "Mùi"];
    const ham_dia = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const tymui = ["Tỵ", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const giapmau = ["Giáp", "Mậu"];
    const gm = ["G.", "M."];
    const danthan = ["Dần", "Thân"];


    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương")) {

        if (kiemTraCachCuc("Kình Dương", ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
            
            keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Cự Môn") && isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Liêm Trinh") && isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Hóa Kỵ")) {
            
            keyArr.push("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung tại Mệnh");
        }

    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Cự Môn")) {
        
        keyArr.push("Kình Dương, Cự Môn đồng cung tại Mệnh");
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Liêm Trinh")) {
        
        keyArr.push("Kình Dương, Liêm Trinh đồng cung tại Mệnh");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Hóa Kỵ")) {
        
        keyArr.push("Kình Dương, Hóa Kỵ đồng cung tại Mệnh");
    }

    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], "Kình Dương")) {
            
            keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${dac_dia[i]}`);

            if (kiemTraCachCuc("Kình Dương", ["Tử Vi", "Thiên Phủ"])) {
                
                keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
            }
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], "Kình Dương")) {
            
            keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${ham_dia[i]}`);
            if (kiemTraCachCuc("Kình Dương", ["Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp", "Kiếp Sát"])) {
                
                keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Đà La, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp, Kiếp Sát`);
            }
        }
    }

    for (let i = 0; i < gm.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", gm[i] + danthan[j], "Kình Dương")) {
                
                keyArr.push("Bạn tuổi " + giapmau[i] + " có Kình Dương toạ thủ cung Mệnh ở " + danthan[j]);
            }
        }
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Kình Dương", ["Thái Dương", "Thái Âm"])) {
        
        keyArr.push("Thái Dương, Thái Âm đồng cung tại Mệnh gặp Kình Dương");
    }

    for (let i = 0; i < tymui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tymui[i], "Thiên Phủ", "Tử Vi") && kiemTraCachCuc("Kình Dương", ["Thiên Phủ", "Tử Vi"])) {
            
            keyArr.push(`Thiên Phủ, Tử Vi đồng cung tại Mệnh ở ${tymui[i]} gặp Kình Dương`);
        }
    }

    if (kiemTraCachCuc("Kình Dương", ["Thiên Khôi", "Hóa Quyền", "Hóa Lộc", "Thiên Mã"]) && isSaoToaThuTaiCung("Mệnh", "Kình Dương")) {
        
        keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Kình Dương", "Thái Âm") && isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Kình Dương", "Thiên Đồng") && kiemTraCachCuc("Kình Dương", ["Địa Giải", "Phượng Các"])) {
        
        keyArr.push("Kình Dương, Thái Âm, Thiên Đồng đồng cung tại Mệnh ở Ngọ gặp Địa Giải, Phượng Các");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Kình Dương", "Tham Lang")) {
            
            keyArr.push(`Tham Lang, Vũ Khúc, Kình Dương đồng cung tại Mệnh ở ${tumo[i]}`);

        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Hỏa Tinh", "Kình Dương")) {

            
            keyArr.push(`Hỏa Tinh, Kình Dương đồng cung tại Mệnh ở ${tumo[i]}`);
        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Hỏa Tinh", "Linh Tinh", "Đà La"])) {
        
        keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Đà La");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Địa Không", "Địa Kiếp", "Đà La"])) {
        
        keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp, Đà La");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Kình Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La") || isSaoToaThuTaiCung("Phụ Mẫu", "Đà La") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
        
        keyArr.push(`Kình Dương, Đà La giáp Mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ")) {
            
            keyArr.push(`Mệnh có Hóa Kỵ giáp Kình Dương, Đà La`);
        }

    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Lực Sỹ")) {
        
        keyArr.push("Kình Dương, Lực Sỹ đồng cung tại Mệnh");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Đà La")) {

        if (kiemTraCachCuc("Đà La", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Đà La toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");

        }
        if (kiemTraCachCuc("Đà La", ["Hóa Kỵ", "Liêm Trinh", "Thiên Hình"])) {
            
            keyArr.push("Đà La toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], "Đà La")) {
            
            keyArr.push(`Đà La toạ thủ cung Mệnh ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], "Đà La")) {
            
            keyArr.push(`Đà La toạ thủ cung Mệnh ở ${ham_dia[i]}`);
        }
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Thiên Hình", "Thất Sát", "Hỏa Tinh"])) {
        
        keyArr.push("Kình Dương toạ thủ cung Mệnh ở Ngọ gặp Thiên Hình, Thất Sát, Hỏa Tinh");

    }
}

function LuanCachCucHoaLinh(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const dac_dia = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const ham_dia = ["Tý", "Sửu", "Dậu", "Hợi", "Tuất", "Mùi", "Thân"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];
    const suumui = ["Sửu", "Mùi"];

    for (let i = 0; i < HoaLinh.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", HoaLinh[i])) {

            if (kiemTraCachCuc(HoaLinh[i], ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
                
                keyArr.push(`${HoaLinh[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
            }
        }
    }

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], HoaLinh[j])) {
                
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
            }
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], "Hỏa Tinh") && isSaoToaThuTaiCung("Thiên Di", "Linh Tinh")) {
            
            keyArr.push("Hỏa Tinh toạ thủ cung Mệnh ở " + dac_dia[i] + " gặp Linh Tinh ở Thiên Di");
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], "Linh Tinh") && isSaoToaThuTaiCung("Thiên Di", "Hỏa Tinh")) {
            
            keyArr.push("Linh Tinh toạ thủ cung Mệnh ở " + dac_dia[i] + " gặp Hỏa Tinh ở Thiên Di");
        }
        if (isHaiSaoDongCungTaiCung("Mệnh", dac_dia[i], "Hỏa Tinh", "Linh Tinh")) {
            
            keyArr.push("Hỏa Tinh, Linh Tinh đồng cung tại Mệnh ở " + dac_dia[i]);
        }
    }

    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], HoaLinh[j])) {
                
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Vũ Khúc") && kiemTraCachCuc(HoaLinh[j], ["Tham Lang", "Vũ Khúc"])) {
                
                keyArr.push(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Địa Kiếp", "Vũ Khúc")) {
                    
                    keyArr.push(`Địa Kiếp, Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                }
            }
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], HoaLinh[j]) && kiemTraCachCuc(HoaLinh[j], ["Thiên Việt", "Tham Lang", "Vũ Khúc"])) {
                
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${suumui[i]} gặp Thiên Việt, Tham Lang, Vũ Khúc`);
                if (kiemTraCachCuc(HoaLinh[j], ["Địa Kiếp"])) {
                    
                    keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${suumui[i]} gặp Địa Kiếp, Thiên Việt, Tham Lang, Vũ Khúc`);
                }
            }
        }
    }


    if (isSaoToaThuTaiCung("Mệnh", "Hỏa Tinh") && kiemTraCachCuc("Hỏa Tinh", ["Linh Tinh", "Kình Dương"])) {
        
        keyArr.push("Hỏa Tinh toạ thủ cung Mệnh gặp Linh Tinh, Kình Dương");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Linh Tinh") && kiemTraCachCuc("Linh Tinh", ["Hỏa Tinh", "Kình Dương"])) {
        
        keyArr.push("Linh Tinh toạ thủ cung Mệnh gặp Hỏa Tinh, Kình Dương");
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Hỏa Tinh") && kiemTraCachCuc("Hỏa Tinh", ["Thiên Hình", "Tham Lang"])) {
        
        keyArr.push("Hỏa Tinh toạ thủ cung Mệnh ở Hợi gặp Thiên Hình, Tham Lang");
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Linh Tinh", "Thiên Mã") && kiemTraCachCuc("Linh Tinh", ["Kình Dương", "Đà La"])) {
        
        keyArr.push("Linh Tinh đồng cung với Thiên Mã tại Mệnh gặp Kình Dương, Đà La");
    }

    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hỏa Tinh") && isSaoToaThuTaiCung("Huynh Đệ", "Linh Tinh") || isSaoToaThuTaiCung("Phụ Mẫu", "Linh Tinh") && isSaoToaThuTaiCung("Huynh Đệ", "Hỏa Tinh")) {
        
        keyArr.push(`Hỏa Tinh, Linh Tinh giáp Mệnh`);

    }
}

function LuanCachCucKhongKiep(keyArr) {
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
            if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], khongkiep[j])) {
                
                keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }


            }
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], khongkiep[j])) {
                
                keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
            }
        }
    }

    for (let i = 0; i < khongkiep.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", khongkiep[i]) && kiemTraCachCuc(khongkiep[i], ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push(`${khongkiep[i]} toạ thủ cung Mệnh gặp Đào Hoa, Hồng Loan`);

        }
    }


    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Địa Kiếp")) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Mệnh ở ${tyhoi[i]}`);
        }
    }


    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Địa Không", "Địa Kiếp") && kiemTraCachCuc("Địa Không", ["Hoá Lộc", "Hoá Quyền", "Văn Xương"])) {
            
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Địa Không") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp") || isSaoToaThuTaiCung("Phụ Mẫu", "Địa Kiếp") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
        
        keyArr.push(`Địa Không, Địa Kiếp giáp Mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ")) {
            
            keyArr.push(`Mệnh có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
        }

    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Địa Kiếp", "Thiên Cơ") && kiemTraCachCuc("Địa Kiếp", ["Hoả Tinh"])) {
        
        keyArr.push("Địa Kiếp, Thiên Cơ đồng cung tại Mệnh gặp Hoả Tinh");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Địa Kiếp", "Tham Lang") && isHaiSaoDongCungTaiCung("Mệnh", "Địa Kiếp", "Lưu Hà")) {
        
        keyArr.push("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Mệnh");

    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Địa Kiếp") && isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Thiên Tướng") && isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Thiên Mã")) {
            
            keyArr.push("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung tại Mệnh ở " + tyhoi[i]);
        }
    }
    if (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") && kiemTraCachCuc("Địa Kiếp", cunhatphukhockhach)) {
        
        keyArr.push("Địa Kiếp toạ thủ cung Mệnh gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
    }
}
function LuanCachCucTuHoa(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];

    const hoaky_dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const hoaky_ham_dia = ["Dần", "Thân", "Tỵ", "Hợi", "Tý", "Sửu", "Mão", "Ngọ", "Dậu", "Tuất", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const danmao = ["Dần", "Mão"];
    const dinhky = ["Đinh", "Kỷ"];
    const dk = ["Đ.", "K."];
    const ngothintuat = ["Ngọ", "Thìn", "Tuất"];
    const danthan = ["Dần", "Thân"];

    if (isSaoToaThuTaiCung("Mệnh", "Hoá Lộc")) {

        if (kiemTraCachCuc("Hoá Lộc", ["Hóa Quyền", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Mệnh gặp Hóa Quyền, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Mệnh gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Mệnh gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp");
        }

    }
    for (let i = 0; i < danmao.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", danmao[i], "Hoá Lộc")) {
            
            keyArr.push(`Hoá Lộc toạ thủ cung Mệnh ở ${danmao[i]}`);
        }
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hoá Quyền")) {

        if (kiemTraCachCuc("Hoá Quyền", ["Hóa Lộc", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Hóa Lộc, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Vũ Khúc", "Cự Môn"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Vũ Khúc, Cự Môn");
        }
        if (kiemTraCachCuc("Hoá Quyền", lucsattinh)) {

            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp " + lucsattinh.join(", "));
        }

        if (kiemTraCachCuc("Hoá Quyền", ["Thất Sát"])) {
            
            keyArr.push("Hoá Quyền toạ thủ cung Mệnh gặp Thất Sát");
        }
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hoá Khoa")) {

        if (kiemTraCachCuc("Hoá Khoa", ["Hóa Lộc", "Hóa Quyền", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Mệnh gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Đào Hoa", "Hồng Loan"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Mệnh gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Thiên Mã"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Mệnh gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Mệnh gặp Tử Vi, Thiên Phủ");
        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ")) {

        if (kiemTraCachCuc("Hóa Kỵ", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Đào Hoa", "Hồng Loan")) {
            console.log("Hóa Kỵ Đào Hoa Hồng Loan đồng cung tại Mệnh");
            keyArr.push("Hóa Kỵ Đào Hoa Hồng Loan đồng cung tại Mệnh");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Mã"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp");
        }

        if (kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm", "Thiên Hình"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Thái Dương, Thái Âm, Thiên Hình");
        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Hóa Kỵ", "Cự Môn")) {
            
            keyArr.push("Hóa Kỵ, Cự Môn đồng cung tại Mệnh");
        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Hóa Kỵ", "Tham Lang")) {
            
            keyArr.push("Hóa Kỵ, Tham Lang đồng cung tại Mệnh");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Tử Vi", "Thiên Phủ"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Thiên Đồng, Thiên Lương");
        }

        if (kiemTraCachCuc("Hóa Kỵ", ["Tuế Phá", "Đà La"])) {
            
            keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Tuế Phá, Đà La");
        }




    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Thái Dương, Thái Âm");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Hoá Lộc") && isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Vũ Khúc")) {
            
            keyArr.push("Hoá Lộc, Tham Lang, Vũ Khúc đồng cung tại Mệnh ở " + tumo[i]);
        }
    }

    for (let i = 0; i < dinhky.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", "Hoá Lộc") && isSaoToaThuTaiCung("Thiên Di", "Lộc Tồn") && lasoData.canNam === dk[i]) {
            
            keyArr.push("Bạn tuổi " + dinhky[i] + " có Hoá Lộc toạ thủ cung Mệnh gặp Lộc Tồn ở Thiên Di");
        }
    }


    for (let i = 0; i < ngothintuat.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", ngothintuat[i], "Hoá Lộc", "Thiên Lương")) {
            
            keyArr.push("Hoá Lộc, Thiên Lương đồng cung tại Mệnh ở " + ngothintuat[i]);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[i], "Hoá Lộc") && kiemTraCachCuc("Hóa Lộc", ["Thiên Cơ", "Thiên Lương", "Lộc Tồn"])) {
            
            keyArr.push("Hoá Lộc toạ thủ cung Mệnh ở " + danthan[i] + " gặp Thiên Cơ, Thiên Lương, Lộc Tồn");
        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Hóa Quyền", "Hóa Lộc") && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Quyền, Hóa Lộc đồng cung tại Mệnh không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") && kiemTraCachCuc("Hóa Quyền", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Quyền toạ thủ cung Mệnh gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");

    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Mệnh gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    // ---- Cách cục giáp cung (V3 lần 9: engine giáp) ----
    // Tài Ấm giáp Ấn (chốt 2025-11-16): Tướng sáng tọa thủ; hai cung kề có Cự Môn (đồng cung Hóa Lộc) và Thiên Lương kẹp
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && !isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Thiên Tướng") && !isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Thiên Tướng") && ((isHaiSaoDongCungTaiCung("Phụ Mẫu", "Cự Môn", "Hóa Lộc") && (isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương"))) || (isHaiSaoDongCungTaiCung("Huynh Đệ", "Cự Môn", "Hóa Lộc") && (isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Lương"))))) {
        keyArr.push("Tài Ấm giáp Ấn tại Mệnh");
    }
    // Nhật Nguyệt giáp Tài: Hàm Số tr.55 + Đại Toàn (Mệnh/Tài/Quan/Điền)
    if (((isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Tham Lang") && isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Vũ Khúc")) || isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Thiên Phủ")) && (((isSaoToaThuTaiCung("Phụ Mẫu", "Thái Dương")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Thái Âm")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương"))))) {
        keyArr.push("Nhật Nguyệt giáp Tài tại Mệnh");
    }
    // Hàm Số tr.55: Mã tọa thủ, Vũ Lộc giáp cung
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && (((isSaoToaThuTaiCung("Phụ Mẫu", "Vũ Khúc")) && (isSaoToaThuTaiCung("Huynh Đệ", "Lộc Tồn") || isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Lộc Tồn") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc")) && (isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc"))))) {
        keyArr.push("Vũ Lộc giáp Mã tại Mệnh");
    }
    // Nhật Nguyệt giáp Mệnh: Hàm Số tr.56 xem Nhật Nguyệt giáp Tài
    if (((isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Tham Lang") && isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Vũ Khúc")) || isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Thiên Phủ")) && (((isSaoToaThuTaiCung("Phụ Mẫu", "Thái Dương")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Thái Âm")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương"))))) {
        keyArr.push("Nhật Nguyệt giáp Mệnh tại Mệnh");
    }
    // Hình Tù giáp Ấn (chốt): Tướng tọa thủ, Liêm đồng cung hoặc ở cung đối; giáp Kình Dương + Đà La, hoặc gặp Thiên Lương + Thiên Hình (gặp = đồng cung, đối xung, tam hợp hoặc giáp)
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && (isHaiSaoDongCungTaiCung("Mệnh", "Thiên Tướng", "Liêm Trinh") || isSaoToaThuTaiCung("Thiên Di", "Liêm Trinh")) && ((((isSaoToaThuTaiCung("Phụ Mẫu", "Kình Dương")) && (isSaoToaThuTaiCung("Huynh Đệ", "Đà La"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Đà La")) && (isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")))) || ((isSaoToaThuTaiCung("Mệnh", "Thiên Lương") || isSaoToaThuTaiCung("Thiên Di", "Thiên Lương") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Lương") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Lương") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Lương") || isSaoToaThuTaiCung("Huynh Đệ", "Thiên Lương")) && (isSaoToaThuTaiCung("Mệnh", "Thiên Hình") || isSaoToaThuTaiCung("Thiên Di", "Thiên Hình") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Hình") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Hình") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Hình") || isSaoToaThuTaiCung("Huynh Đệ", "Thiên Hình"))))) {
        keyArr.push("Hình Tù giáp Ấn tại Mệnh");
    }
    // Hàm Số tr.57: Lộc tọa thủ, giáp Vũ Tướng
    if ((isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") || isSaoToaThuTaiCung("Mệnh", "Hóa Lộc")) && (((isSaoToaThuTaiCung("Phụ Mẫu", "Vũ Khúc")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thiên Tướng"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Tướng")) && (isSaoToaThuTaiCung("Huynh Đệ", "Vũ Khúc"))))) {
        keyArr.push("Tài Ấn giáp Lộc tại Mệnh");
    }
    // ---- V3 lần 11: giáp mới, Tuần/Triệt, vòng Tràng Sinh ----
    // Phú Giải (Mệnh giáp Khôi, Việt, giáp Lộc); Đại Toàn tr.132 (Mạng, Thân, Tài, Quan)
    if ((((isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Khôi") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Việt")) && (isSaoToaThuTaiCung("Huynh Đệ", "Lộc Tồn") || isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Lộc Tồn") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thiên Khôi") || isSaoToaThuTaiCung("Huynh Đệ", "Thiên Việt"))))) {
        keyArr.push("Giáp Quý Giáp Lộc tại Mệnh");
    }
    // Phú Giải (Mệnh hay Quan Lộc giáp Long, giáp Phượng)
    if ((((isSaoToaThuTaiCung("Phụ Mẫu", "Long Trì")) && (isSaoToaThuTaiCung("Huynh Đệ", "Phượng Các"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Phượng Các")) && (isSaoToaThuTaiCung("Huynh Đệ", "Long Trì"))))) {
        keyArr.push("Long Trì, Phượng Các giáp Mệnh");
    }
    // Phú Giải (Mệnh, Thân giáp Thai giáp Tọa)
    if ((((isSaoToaThuTaiCung("Phụ Mẫu", "Tam Thai")) && (isSaoToaThuTaiCung("Huynh Đệ", "Bát Tọa"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Bát Tọa")) && (isSaoToaThuTaiCung("Huynh Đệ", "Tam Thai"))))) {
        keyArr.push("Tam Thai, Bát Tọa giáp Mệnh");
    }
    // Phú Giải (Mệnh, Thân giáp Liêm, giáp Sát)
    if ((((isSaoToaThuTaiCung("Phụ Mẫu", "Liêm Trinh")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thất Sát"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Thất Sát")) && (isSaoToaThuTaiCung("Huynh Đệ", "Liêm Trinh"))))) {
        keyArr.push("Liêm Trinh, Thất Sát giáp Mệnh");
    }
    // Đại Toàn tr.133 (Quyền Ấn giáp Mạng)
    if ((((isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền")) && (isSaoToaThuTaiCung("Huynh Đệ", "Quốc Ấn"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Quốc Ấn")) && (isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền"))))) {
        keyArr.push("Hóa Quyền, Quốc Ấn giáp Mệnh");
    }
    // Đại Toàn (Long quải minh châu: Thanh Long ở Sửu, Mùi giáp Thái Dương, Thái Âm)
    if ((isSaoToaThuTaiCung("Mệnh", "Thanh Long") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) && (((isSaoToaThuTaiCung("Phụ Mẫu", "Thái Dương")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thái Âm"))) || ((isSaoToaThuTaiCung("Phụ Mẫu", "Thái Âm")) && (isSaoToaThuTaiCung("Huynh Đệ", "Thái Dương"))))) {
        keyArr.push("Thanh Long ở Sửu hoặc Mùi giáp Nhật Nguyệt tại Mệnh");
    }
    // Phú Giải mục TUẦN, TRIỆT số 1, 9, 11, 12, 17; Đại Toàn tr.91-92
    if (isCungCoTuan("Mệnh")) {
        keyArr.push("Cung Mệnh có Tuần án ngữ");
    }
    // Phú Giải mục TUẦN, TRIỆT số 1, 9, 11, 12, 17; Đại Toàn tr.91-92
    if (isCungCoTriet("Mệnh")) {
        keyArr.push("Cung Mệnh có Triệt án ngữ");
    }
    // Phú Giải mục TUẦN, TRIỆT số 7; Đại Toàn tr.89 (Tam Không thủ chính)
    if ((laCungVoChinhDieu("Mệnh") && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Quan Lộc", "Địa Không") || isSaoToaThuTaiCung("Tài Bạch", "Địa Không") || isSaoToaThuTaiCung("Thiên Di", "Địa Không")) && (isSaoToaThuTaiCung("Mệnh", "Thiên Không") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Không") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Không") || isSaoToaThuTaiCung("Thiên Di", "Thiên Không")) && (isCungCoTuan("Mệnh") || isCungCoTuan("Quan Lộc") || isCungCoTuan("Tài Bạch") || isCungCoTuan("Thiên Di")))) {
        keyArr.push("Cung Mệnh vô chính diệu đắc Tam Không thủ chiếu");
    }
    // Phú Giải mục TUẦN, TRIỆT số 2
    if ((laCungVoChinhDieu("Mệnh") && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Quan Lộc", "Địa Không") || isSaoToaThuTaiCung("Tài Bạch", "Địa Không") || isSaoToaThuTaiCung("Thiên Di", "Địa Không")) && (isSaoToaThuTaiCung("Mệnh", "Thiên Không") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Không") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Không") || isSaoToaThuTaiCung("Thiên Di", "Thiên Không")) && (isCungCoTuan("Mệnh") || isCungCoTuan("Quan Lộc") || isCungCoTuan("Tài Bạch") || isCungCoTuan("Thiên Di"))) && (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") || isSaoToaThuTaiCung("Quan Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Tài Bạch", "Lộc Tồn") || isSaoToaThuTaiCung("Thiên Di", "Lộc Tồn")) && (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Lộc") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Lộc") || isSaoToaThuTaiCung("Thiên Di", "Hóa Lộc"))) {
        keyArr.push("Cung Mệnh vô chính diệu đắc Tam Không gặp Lộc Tồn, Hóa Lộc hội hợp");
    }
    // Phú Giải mục TUẦN, TRIỆT số 6
    if ((laCungVoChinhDieu("Mệnh") && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Quan Lộc", "Địa Không") || isSaoToaThuTaiCung("Tài Bạch", "Địa Không") || isSaoToaThuTaiCung("Thiên Di", "Địa Không")) && (isSaoToaThuTaiCung("Mệnh", "Thiên Không") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Không") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Không") || isSaoToaThuTaiCung("Thiên Di", "Thiên Không")) && (isCungCoTuan("Mệnh") || isCungCoTuan("Quan Lộc") || isCungCoTuan("Tài Bạch") || isCungCoTuan("Thiên Di"))) && (isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Khoa") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Khoa") || isSaoToaThuTaiCung("Thiên Di", "Hóa Khoa")) && (isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Quyền") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Quyền") || isSaoToaThuTaiCung("Thiên Di", "Hóa Quyền")) && (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Lộc") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Lộc") || isSaoToaThuTaiCung("Thiên Di", "Hóa Lộc"))) {
        keyArr.push("Cung Mệnh vô chính diệu đắc Tam Không gặp Khoa, Quyền, Lộc hội hợp");
    }
    // Phú Giải mục TUẦN, TRIỆT số 5
    if ((laCungVoChinhDieu("Mệnh") && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Quan Lộc", "Địa Không") || isSaoToaThuTaiCung("Tài Bạch", "Địa Không") || isSaoToaThuTaiCung("Thiên Di", "Địa Không")) && (isSaoToaThuTaiCung("Mệnh", "Thiên Không") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Không") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Không") || isSaoToaThuTaiCung("Thiên Di", "Thiên Không")) && (isCungCoTuan("Mệnh") || isCungCoTuan("Quan Lộc") || isCungCoTuan("Tài Bạch") || isCungCoTuan("Thiên Di"))) && !(isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Khoa") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Khoa") || isSaoToaThuTaiCung("Thiên Di", "Hóa Khoa")) && !(isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Quyền") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Quyền") || isSaoToaThuTaiCung("Thiên Di", "Hóa Quyền")) && !(isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Lộc") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Lộc") || isSaoToaThuTaiCung("Thiên Di", "Hóa Lộc"))) {
        keyArr.push("Cung Mệnh vô chính diệu có Tam Không thủ chiếu không gặp Tam Hóa");
    }
    // Phú Giải mục TUẦN, TRIỆT số 8
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Hình") && (isCungCoTuan("Mệnh") || isCungCoTriet("Mệnh"))) {
        keyArr.push("Cung Mệnh có Thiên Hình tọa thủ gặp Tuần hoặc Triệt án ngữ");
    }
    // Phú Giải mục TUẦN, TRIỆT số 10
    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && (isCungCoTuan("Mệnh") || isCungCoTriet("Mệnh"))) {
        keyArr.push("Cung Mệnh có Lộc Tồn tọa thủ gặp Tuần hoặc Triệt án ngữ");
    }
    // Đại Toàn tr.96, 101-102 (Tử Vi phùng Triệt Lộ)
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isCungCoTriet("Mệnh")) {
        keyArr.push("Cung Mệnh có Tử Vi tọa thủ gặp Triệt án ngữ (Đế ngộ hung đồ)");
    }
    // Đại Toàn tr.71 (Tướng Quân ngộ Triệt)
    if (isSaoToaThuTaiCung("Mệnh", "Tướng Quân") && isCungCoTriet("Mệnh")) {
        keyArr.push("Cung Mệnh có Tướng Quân tọa thủ gặp Triệt án ngữ");
    }
    // Đại Toàn tr.153 (Phục Binh, Triệt Lộ)
    if (isSaoToaThuTaiCung("Mệnh", "Phục Binh") && isCungCoTriet("Mệnh")) {
        keyArr.push("Cung Mệnh có Phục Binh tọa thủ gặp Triệt án ngữ");
    }
    // Đại Toàn tr.153, 196 (Phục Binh gặp Khôi Việt, Tuần Triệt)
    if (isSaoToaThuTaiCung("Mệnh", "Phục Binh") && (isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") || isSaoToaThuTaiCung("Mệnh", "Thiên Việt")) && (isCungCoTuan("Mệnh") || isCungCoTriet("Mệnh"))) {
        keyArr.push("Cung Mệnh có Phục Binh đồng cung Thiên Khôi hoặc Thiên Việt gặp Tuần hoặc Triệt án ngữ");
    }
    // Phú Giải mục TUẦN, TRIỆT số 25 (Tuần, Triệt áp đảo sát tinh)
    if ((((isCungCoTriet("Mệnh")) && (isCungTaiChi("Mệnh", "Thân") || isCungTaiChi("Mệnh", "Dậu"))) || ((isCungCoTuan("Mệnh")) && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Ngọ") || isCungTaiChi("Mệnh", "Mùi")))) && ((isSaoToaThuTaiCung("Mệnh", "Kình Dương") || isSaoToaThuTaiCung("Quan Lộc", "Kình Dương") || isSaoToaThuTaiCung("Tài Bạch", "Kình Dương") || isSaoToaThuTaiCung("Thiên Di", "Kình Dương")) || (isSaoToaThuTaiCung("Mệnh", "Đà La") || isSaoToaThuTaiCung("Quan Lộc", "Đà La") || isSaoToaThuTaiCung("Tài Bạch", "Đà La") || isSaoToaThuTaiCung("Thiên Di", "Đà La")) || (isSaoToaThuTaiCung("Mệnh", "Hỏa Tinh") || isSaoToaThuTaiCung("Quan Lộc", "Hỏa Tinh") || isSaoToaThuTaiCung("Tài Bạch", "Hỏa Tinh") || isSaoToaThuTaiCung("Thiên Di", "Hỏa Tinh")) || (isSaoToaThuTaiCung("Mệnh", "Linh Tinh") || isSaoToaThuTaiCung("Quan Lộc", "Linh Tinh") || isSaoToaThuTaiCung("Tài Bạch", "Linh Tinh") || isSaoToaThuTaiCung("Thiên Di", "Linh Tinh")) || (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Quan Lộc", "Địa Không") || isSaoToaThuTaiCung("Tài Bạch", "Địa Không") || isSaoToaThuTaiCung("Thiên Di", "Địa Không")) || (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") || isSaoToaThuTaiCung("Quan Lộc", "Địa Kiếp") || isSaoToaThuTaiCung("Tài Bạch", "Địa Kiếp") || isSaoToaThuTaiCung("Thiên Di", "Địa Kiếp")) || (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") || isSaoToaThuTaiCung("Quan Lộc", "Hóa Kỵ") || isSaoToaThuTaiCung("Tài Bạch", "Hóa Kỵ") || isSaoToaThuTaiCung("Thiên Di", "Hóa Kỵ")) || (isSaoToaThuTaiCung("Mệnh", "Kiếp Sát") || isSaoToaThuTaiCung("Quan Lộc", "Kiếp Sát") || isSaoToaThuTaiCung("Tài Bạch", "Kiếp Sát") || isSaoToaThuTaiCung("Thiên Di", "Kiếp Sát")) || (isSaoToaThuTaiCung("Mệnh", "Đại Hao") || isSaoToaThuTaiCung("Quan Lộc", "Đại Hao") || isSaoToaThuTaiCung("Tài Bạch", "Đại Hao") || isSaoToaThuTaiCung("Thiên Di", "Đại Hao")) || (isSaoToaThuTaiCung("Mệnh", "Tiểu Hao") || isSaoToaThuTaiCung("Quan Lộc", "Tiểu Hao") || isSaoToaThuTaiCung("Tài Bạch", "Tiểu Hao") || isSaoToaThuTaiCung("Thiên Di", "Tiểu Hao")) || (isSaoToaThuTaiCung("Mệnh", "Tang Môn") || isSaoToaThuTaiCung("Quan Lộc", "Tang Môn") || isSaoToaThuTaiCung("Tài Bạch", "Tang Môn") || isSaoToaThuTaiCung("Thiên Di", "Tang Môn")) || (isSaoToaThuTaiCung("Mệnh", "Bạch Hổ") || isSaoToaThuTaiCung("Quan Lộc", "Bạch Hổ") || isSaoToaThuTaiCung("Tài Bạch", "Bạch Hổ") || isSaoToaThuTaiCung("Thiên Di", "Bạch Hổ")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Khốc") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Khốc") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Khốc") || isSaoToaThuTaiCung("Thiên Di", "Thiên Khốc")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Hư") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Hư") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Hư") || isSaoToaThuTaiCung("Thiên Di", "Thiên Hư")))) {
        keyArr.push("Cung Mệnh có Triệt án ngữ ở Thân, Dậu hoặc Tuần án ngữ ở Thìn, Tỵ, Ngọ, Mùi gặp sát tinh");
    }
    // Phú Giải mục TRÀNG SINH số 39
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thiên Phủ") && (isTrangSinhTaiCung("Mệnh", "Tràng Sinh") || isTrangSinhTaiCung("Mệnh", "Đế Vượng"))) {
        keyArr.push("Cung Mệnh có Tử Vi, Thiên Phủ đồng cung gặp Tràng Sinh hoặc Đế Vượng");
    }
    // Phú Giải mục TRÀNG SINH số 40
    if (isCungTaiChi("Mệnh", "Hợi") && isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && isTrangSinhTaiCung("Mệnh", "Tràng Sinh")) {
        keyArr.push("Cung Mệnh ở Hợi có Tràng Sinh tọa thủ đồng cung Thiên Mã");
    }
    // Phú Giải mục MỘ - TUYỆT - DƯỠNG số 1
    if (isSaoToaThuTaiCung("Mệnh", "Đà La") && isTrangSinhTaiCung("Mệnh", "Thai")) {
        keyArr.push("Cung Mệnh có Đà La đồng cung Thai");
    }
    // Đại Toàn tr.197 (Tràng Sinh gặp Thiên Mã, Lộc Tồn)
    if (isTrangSinhTaiCung("Mệnh", "Tràng Sinh") && (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") || isSaoToaThuTaiCung("Quan Lộc", "Thiên Mã") || isSaoToaThuTaiCung("Tài Bạch", "Thiên Mã") || isSaoToaThuTaiCung("Thiên Di", "Thiên Mã")) && (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") || isSaoToaThuTaiCung("Quan Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Tài Bạch", "Lộc Tồn") || isSaoToaThuTaiCung("Thiên Di", "Lộc Tồn"))) {
        keyArr.push("Cung Mệnh có Tràng Sinh gặp Thiên Mã, Lộc Tồn");
    }
    // Đại Toàn tr.198 (Tử Vi, Quan Đới / Lâm Quan)
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isTrangSinhTaiCung("Mệnh", "Quan Đới") || isTrangSinhTaiCung("Mệnh", "Lâm Quan"))) {
        keyArr.push("Cung Mệnh có Tử Vi đồng cung Quan Đới hoặc Lâm Quan");
    }
    // Đại Toàn tr.198 (Quan Đới, Lâm Quan gặp Long tinh)
    if ((isTrangSinhTaiCung("Mệnh", "Quan Đới") || isTrangSinhTaiCung("Mệnh", "Lâm Quan")) && ((isSaoToaThuTaiCung("Mệnh", "Long Trì") || isSaoToaThuTaiCung("Quan Lộc", "Long Trì") || isSaoToaThuTaiCung("Tài Bạch", "Long Trì") || isSaoToaThuTaiCung("Thiên Di", "Long Trì")) || (isSaoToaThuTaiCung("Mệnh", "Long Đức") || isSaoToaThuTaiCung("Quan Lộc", "Long Đức") || isSaoToaThuTaiCung("Tài Bạch", "Long Đức") || isSaoToaThuTaiCung("Thiên Di", "Long Đức")) || (isSaoToaThuTaiCung("Mệnh", "Thanh Long") || isSaoToaThuTaiCung("Quan Lộc", "Thanh Long") || isSaoToaThuTaiCung("Tài Bạch", "Thanh Long") || isSaoToaThuTaiCung("Thiên Di", "Thanh Long")))) {
        keyArr.push("Cung Mệnh có Quan Đới hoặc Lâm Quan gặp Long Trì, Long Đức hoặc Thanh Long");
    }
    // Đại Toàn tr.198 (Quan Đới, Lâm Quan gặp Ân Quang)
    if ((isTrangSinhTaiCung("Mệnh", "Quan Đới") || isTrangSinhTaiCung("Mệnh", "Lâm Quan")) && (isSaoToaThuTaiCung("Mệnh", "Ân Quang") || isSaoToaThuTaiCung("Quan Lộc", "Ân Quang") || isSaoToaThuTaiCung("Tài Bạch", "Ân Quang") || isSaoToaThuTaiCung("Thiên Di", "Ân Quang"))) {
        keyArr.push("Cung Mệnh có Quan Đới hoặc Lâm Quan gặp Ân Quang");
    }
    // Đại Toàn tr.199 (Đế Vượng đồng cung Tử Vi)
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isTrangSinhTaiCung("Mệnh", "Đế Vượng")) {
        keyArr.push("Cung Mệnh có Tử Vi đồng cung Đế Vượng");
    }
    // Đại Toàn tr.199 (Bệnh gặp Thất Sát, Tham, Vũ)
    if (isTrangSinhTaiCung("Mệnh", "Bệnh") && (isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung("Mệnh", "Tham Lang") || isSaoToaThuTaiCung("Mệnh", "Vũ Khúc"))) {
        keyArr.push("Cung Mệnh có Bệnh đồng cung Thất Sát, Tham Lang hoặc Vũ Khúc");
    }
    // Đại Toàn tr.200 (Tuyệt gặp Nhật, Nguyệt)
    if (isTrangSinhTaiCung("Mệnh", "Tuyệt") && (isSaoToaThuTaiCung("Mệnh", "Thái Dương") || isSaoToaThuTaiCung("Quan Lộc", "Thái Dương") || isSaoToaThuTaiCung("Tài Bạch", "Thái Dương") || isSaoToaThuTaiCung("Thiên Di", "Thái Dương")) && (isSaoToaThuTaiCung("Mệnh", "Thái Âm") || isSaoToaThuTaiCung("Quan Lộc", "Thái Âm") || isSaoToaThuTaiCung("Tài Bạch", "Thái Âm") || isSaoToaThuTaiCung("Thiên Di", "Thái Âm"))) {
        keyArr.push("Cung Mệnh có Tuyệt gặp Thái Dương, Thái Âm");
    }
    // Đại Toàn tr.55, 68 (Thất Sát gặp Tuyệt thủ Mạng)
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isTrangSinhTaiCung("Mệnh", "Tuyệt")) {
        keyArr.push("Cung Mệnh có Thất Sát đồng cung Tuyệt");
    }
    // Đại Toàn tr.169 (Mã gặp Tràng Sinh)
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && isTrangSinhTaiCung("Mệnh", "Tràng Sinh")) {
        keyArr.push("Cung Mệnh có Thiên Mã đồng cung Tràng Sinh");
    }
    // Đại Toàn tr.169 (Thiên Mã lâm Tỵ gặp Tuyệt)
    if (isCungTaiChi("Mệnh", "Tỵ") && isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && isTrangSinhTaiCung("Mệnh", "Tuyệt")) {
        keyArr.push("Cung Mệnh ở Tỵ có Thiên Mã đồng cung Tuyệt");
    }
    // Đại Toàn tr.55 (Tham Lang hội Đế Vượng cư Mạng, Quan Lộc)
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && (isTrangSinhTaiCung("Mệnh", "Đế Vượng") || isTrangSinhTaiCung("Quan Lộc", "Đế Vượng") || isTrangSinhTaiCung("Tài Bạch", "Đế Vượng") || isTrangSinhTaiCung("Thiên Di", "Đế Vượng"))) {
        keyArr.push("Cung Mệnh có Tham Lang gặp Đế Vượng hội hợp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền")) {
        
        keyArr.push(`Hóa Quyền, Hóa Lộc giáp mệnh`);
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa toạ thủ cung Mệnh gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Hóa Khoa", "Hóa Lộc") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa, Hóa Lộc đồng cung tại Mệnh không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Khoa"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Mệnh gặp Hóa Khoa, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        
        keyArr.push(`Hóa Khoa, Hóa Lộc giáp mệnh`);
    }


    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Lộc toạ thủ cung Mệnh gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Hóa Khoa", "Hóa Quyền") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa, Hóa Quyền đồng cung tại Mệnh không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        
        keyArr.push("Hóa Khoa toạ thủ cung Mệnh gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        
        keyArr.push(`Hóa Khoa, Hóa Quyền giáp mệnh`);
    }

    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen) && kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Hóa Lộc, Hóa Quyền, gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen.concat(XuongKhuc).concat(KhoiViet))) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Mệnh gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt");

    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Thiên Đồng", "Thiên Lương"])) {
            
            keyArr.push("Hoá Khoa toạ thủ cung Mệnh ở " + tyngo[i] + " gặp Thiên Đồng, Thiên Lương");
        }
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
        
        keyArr.push("Hóa Kỵ toạ thủ cung Mệnh ở Tý gặp Thiên Đồng, Thiên Lương");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Hoá Quyền", "Thiên Khốc ")) {
        
        keyArr.push("Hoá Quyền, Thiên Khốc đồng cung tại Mệnh");
    }

}

function LuanCachCucLucBaiTinh(keyArr) {
    const lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

    const songhao_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const tangho_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const danthan = ["Dần", "Thân"];
    const songhao = ["Đại Hao", "Tiểu Hao"];
    const tangho = ["Tang Môn", "Bạch Hổ"];




    for (let i = 0; i < songhao_dac.length; i++) {

        for (let j = 0; j < songhao.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", songhao_dac[i], songhao[j])) {
                
                keyArr.push(songhao[j] + " toạ thủ tại cung Mệnh ở " + songhao_dac[i]);
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", songhao[i]) && laCungVoChinhDieu("Mệnh")) {
            
            keyArr.push("Cung Mệnh Vô Chính Diệu có " + songhao[i]);
        }
    }

    for (let i = 0; i < tangho.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tangho[i])) {

            for (let j = 0; j < tangho_dac.log; j++) {
                if (isSaoToaThuTaiCungVaChi("Mệnh", tangho_dac[j], tangho[i])) {
                    
                    keyArr.push(tangho[i] + " toạ thủ cung Mệnh tại " + tangho_dac[j]);
                }
            }
            if (lasoData.gioitinh === "Nữ") {
                
                keyArr.push("Quý Chị có " + tangho[i] + " toạ thủ cung Mệnh");
            }
        }
    }

    for (let i = 0; i < tangho.length; i++) {

        if (isSaoToaThuTaiCung("Mệnh", tangho[i]) && kiemTraCachCuc(tangho[i], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push(tangho[i] + " toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (isSaoToaThuTaiCung("Mệnh", tangho[i]) && kiemTraCachCuc(tangho[i], ["Địa Không", "Địa Kiếp"])) {
            
            keyArr.push(tangho[i] + " toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp");
        }
        if (isSaoToaThuTaiCung("Mệnh", tangho[i]) && kiemTraCachCuc(tangho[i], ["Kình Dương ", "Thiên Hình"])) {

            
            keyArr.push(tangho[i] + " toạ thủ cung Mệnh gặp Kinh Dương, Thiên Hình");

        }
        if (isHaiSaoDongCungTaiCung("Mệnh", tangho[i], "Tham Lang")) {
            
            keyArr.push(tangho[i] + ", Tham Lang đồng cung tại Mệnh");
        }

        if (isHaiSaoDongCungTaiCung("Mệnh", tangho[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hoả Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            
            keyArr.push(tangho[i] + ", Tham Lang đồng cung tại Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }


    }

    if (kiemTraCachCuc("Bạch Hổ", "Lưu Tang Môn")) {
        
        keyArr.push("Bạch Hổ gặp Lưu Tang Môn");
    }
    if (kiemTraCachCuc("Bạch Hổ", "Lưu Bạch Hổ")) {
        
        keyArr.push("Bạch Hổ gặp Lưu Bạch Hổ");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Bạch Hổ") && kiemTraCachCuc("Bạch Hổ", ["Kình Dương"])) {

        
        keyArr.push("Bạch Hổ toạ thủ cung Mệnh gặp Kình Dương");

    }

    if (isSaoToaThuTaiCung("Mệnh", "Bạch Hổ") && kiemTraCachCuc("Bạch Hổ", ["Thiên Hình"])) {

        
        keyArr.push("Bạch Hổ toạ thủ cung Mệnh gặp Thiên Hình");

    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Bạch Hổ", "Thiên Hình")) {
        
        keyArr.push("Bạch Hổ, Thiên Hình đồng cung tại Mệnh");

    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Bạch Hổ", "Tấu Thư")) {
        
        keyArr.push("Bạch Hổ, Tấu Thư đồng cung tại Mệnh");
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Bạch Hổ", "Phi Liêm")) {
        
        keyArr.push("Bạch Hổ, Phi Liêm đồng cung tại Mệnh");
    }

    if (kiemTraCachCuc("Bạch Hổ", ["Tang Môn", "Điếu Khách", "Phục Binh", "Thiên Khốc"])) {
        
        keyArr.push("Bạch Hổ gặp Tang Môn, Điếu Khách, Phục Binh, Thiên Khốc");
    }



    const khochu = ["Thiên Khốc", "Thiên Hư"];
    const khochu_dac = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi"];
    const khochu_ham = ["Dần", "Thân", "Tỵ", "Hợi", "Thìn", "Tuất"];
    const tyngo = ["Tý", "Ngọ"];
    const maodau = ["Mão", "Dậu"];

    for (let i = 0; i < khochu.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", khochu[i])) {
            for (let j = 0; j < khochu_dac.length; j++) {
                if (isSaoToaThuTaiCungVaChi("Mệnh", khochu_dac[j], khochu[i])) {
                    
                    keyArr.push((khochu[i] + " toạ thủ cung Mệnh tại " + khochu_dac[j]));
                    if (kiemTraCachCuc(khochu[i], ["Hóa Lộc"])) {
                        
                        keyArr.push(khochu[i] + " toạ thủ cung Mệnh tại " + khochu_dac[j] + " gặp Hóa Lộc");
                    }
                }
            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < tyngo.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Mệnh tại " + tyngo[j] + " gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", tyngo[j], khochu[i], "Phá Quân")) {
                
                keyArr.push(khochu[i] + " đồng cung Phá Quân tại Mệnh" + " ở " + tyngo[j]);
            }
        }
    }
    for (let k = 0; k < khochu.length; k++) {
        for (let i = 0; i < khochu_ham.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", khochu_ham[i], khochu[k])) {
                
                keyArr.push(khochu[k] + " toạ thủ cung Mệnh tại " + khochu_ham[i]);

            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Mệnh tại " + danthan[j] + " gặp Kình Dương, Đà La");
            }
            if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Thiên Hình", "Thiên Mã"])) {
                
                keyArr.push(khochu[i] + " toạ thủ cung Mệnh tại " + danthan[j] + " gặp Thiên Hình, Thiên Mã");
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[j], songhao[i]) && kiemTraCachCuc(songhao[i], ["Thiên Cơ", "Cự Môn"])) {
                
                keyArr.push(songhao[i] + " toạ thủ cung Mệnh tại " + maodau[j] + " gặp Thiên Cơ, Cự Môn");
            }
        }
    }
}




function ThanMenhDongCungVoChinhDieu(keyArr) {
    if (idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu");
        return true;
    }
}
function LuanCacCachCucKhac(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return;
    const cungMenh = lasoOb.find(c => c.tenCung === 'Mệnh');
    const chiCungMenh = lasoData.lasoOb[0].chi;

    // Nếu là đàn ông sinh năm Ngọ, Mùi, Mệnh an tại Tý, Sửu thì cuộc đời vất vả lo toan

    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Ngọ, Mệnh an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Sửu')) {
        keyArr.push("Anh sinh năm Ngọ, Mệnh an tại Sửu");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Mệnh an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Sửu')) {
        keyArr.push("Anh sinh năm Mùi, Mệnh an tại Sửu");
    }

    // Nếu là đàn bà cung mệnh an tại Tứ Mộ khôn ngoan

    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Thìn' || chiCungMenh === 'Sửu' || chiCungMenh === 'Tuất' || chiCungMenh === 'Mùi')) {
        keyArr.push("Cung Mệnh của quý chị được an tại ví trí Tứ Mộ");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Dậu')) {
        keyArr.push("Cung Mệnh của quý chị được an tại ví trí cung Dậu");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Cung Mệnh của quý chị được an tại ví trí cung Tý");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Ngọ')) {
        keyArr.push("Cung Mệnh của quý chị được an tại ví trí cung Ngọ");
    }

    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Thìn") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Thìn");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Tuất") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Tuất");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Sửu") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Sửu");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Mùi") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Mùi");
    }

    //mệnh vô chính diệu gặp Song Hao
    if (laCungVoChinhDieu("Mệnh") && (isSaoHoiChieuRong("Mệnh", "Đại Hao", true) && isSaoHoiChieuRong("Mệnh", "Tiểu Hao", true))) {
        keyArr.push("Cung Mệnh Vô Chính Diệu gặp Song Hao");
    }
    // mệnh vô chính diệu gặp Song Hao có Thiên Đồng,hoặc Thiên Lương, hoặc Thiên Cơ
    if (laCungVoChinhDieu("Mệnh") && (isSaoHoiChieuRong("Mệnh", "Thiên Đồng", false) || isSaoHoiChieuRong("Mệnh", "Thiên Lương", false) || isSaoHoiChieuRong("Mệnh", "Thiên Cơ", false)) && (isSaoHoiChieuRong("Mệnh", "Đại Hao", true) && isSaoHoiChieuRong("Mệnh", "Tiểu Hao", true))) {
        keyArr.push("Cung Mệnh Vô Chính Diệu gặp Song Hao có Thiên Đồng, Thiên Lương, hoặc Thiên Cơ");
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
    if (lasoData.cungCu === "Quan Lộc") {
        keyArr.push("Thân Cư Quan Lộc");
    }
    if (lasoData.cungCu === "Thiên Di") {
        keyArr.push("Thân Cư Thiên Di");
    }
    if (lasoData.cungCu === "Mệnh") {
        keyArr.push("Thân Mệnh đồng cung");
    }

    // Thiên Không đồng cung Đào Hoa
    if (isHaiSaoDongCungTaiCung("Mệnh", "Thiên Không", "Đào Hoa")) {
        keyArr.push("Thiên Không, Đào Hoa đồng cung tại Mệnh");
    }
    // Thiên Không đồng cung Hồng Loan
    if (isHaiSaoDongCungTaiCung("Mệnh", "Thiên Không", "Hồng Loan")) {
        keyArr.push("Thiên Không, Hồng Loan đồng cung tại Mệnh");
    }



}
function MenhVoChinhDieu() {
    if (getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        
        keyArr.push("Cung Mệnh Vô Chính Diệu");

    }

}
function MenhKhongThanKiep(idxCungMenh, idxCungThan, dsChinh, dsPhu, keyArr) {

    // Lấy các sao của cung Mệnh và cung Thân
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
        keyArr.push("Mệnh Không Thân Kiếp");
        return true;
    } else if (menhKiep && thanKhong) {
        keyArr.push("Mệnh Kiếp Thân Không");
        return true;

    }
    return false;
}
// VH17-BEGIN
function phu17ChiCung(lasoData, tenCung) {
    if (!lasoData || !lasoData.lasoOb) return "";
    for (let i = 0; i < lasoData.lasoOb.length; i++) {
        if (lasoData.lasoOb[i].tenCung === tenCung) return lasoData.lasoOb[i].chi;
    }
    return "";
}
// loai: "dai" = cung đại hạn hiện tại, "tieu" = cung tiểu hạn năm xem hạn
function LuanSaoNhapHan(keyArr, loai) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    if (loai === "dai") {
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu")) { keyArr.push("Sao nhập Đại hạn - Tử Vi ở Tỵ/Hợi/Mão/Dậu"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Tử Vi, gặp Thiên Phủ hoặc Vũ Khúc hoặc Thiên Tướng hoặc Tả Phù hoặc Hữu Bật hoặc Hóa Khoa hoặc Hóa Quyền hoặc Hóa Lộc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Tử Vi, gặp Thiên Khôi hoặc Thiên Việt"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Tử Vi, gặp Kình Dương hoặc Đà La hoặc Địa Kiếp hoặc Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi")) { keyArr.push("Sao nhập Đại hạn - Liêm Trinh ở Tỵ/Hợi"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Liêm Trinh ở Tỵ/Hợi/Sửu/Mùi, gặp Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Liêm Trinh ở Tỵ/Hợi, gặp Thiên Hình"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Liêm Trinh, gặp Tham Lang hoặc Thất Sát hoặc Phá Quân"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Liêm Trinh đồng cung Phá Quân, gặp Địa Kiếp hoặc Kình Dương"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Liêm Trinh, gặp Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Liêm Trinh, gặp Thiên Hình hoặc Hóa Kỵ hoặc Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Thiên Đồng"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"], ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Thiên Đồng sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"], ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Thiên Đồng mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Đồng, gặp Kình Dương hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Đồng, gặp Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Vũ Khúc sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Vũ Khúc sáng sủa, gặp Tả Phù hoặc Hữu Bật hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Vũ Khúc sáng sủa, gặp Hóa Quyền"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Vũ Khúc mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (kiemTraSaoSangToi(["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thân", "Dậu", "Tuất", "Hợi", "Tý"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Thái Dương sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (kiemTraSaoSangToi(["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thân", "Dậu", "Tuất", "Hợi", "Tý"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Thái Dương mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (kiemTraSaoSangToi(["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thân", "Dậu", "Tuất", "Hợi", "Tý"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thái Dương mờ ám, gặp Tang Môn hoặc Hóa Kỵ hoặc Đà La"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thái Dương, gặp Long Trì"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thanh Long - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thái Dương, gặp Long Trì + Thanh Long"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thái Dương, gặp Thiên Riêu + Đà La + Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thái Dương, gặp Hỏa Tinh hoặc Linh Tinh hoặc Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ sáng sủa, gặp Hóa Lộc hoặc Lộc Tồn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ mờ ám, gặp Kình Dương hoặc Đà La hoặc Cự Môn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Lương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Thiên Lương + Thái Tuế + Tang Môn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Tang Môn + Thiên Khốc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Thiên Khốc + Hỏa Tinh + Kình Dương"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hư - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Thiên Khốc + Thiên Hư"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quả Tú - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Quả Tú"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Phủ, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && (kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Thái Âm sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && (kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Thái Âm mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && (kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thái Âm mờ ám, gặp Đà La + Thái Tuế + Bạch Hổ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thái Âm, gặp Long Trì + Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thái Âm, gặp Đà La + Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thái Âm, gặp Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thái Âm, gặp Thiên Hình"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Tham Lang sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng") && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi")) { keyArr.push("Sao nhập Đại hạn - Tham Lang sáng sủa ở Thìn/Tuất/Sửu/Mùi"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Tham Lang mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tham Lang, gặp Vũ Khúc + Hóa Lộc hoặc Lộc Tồn + Thiên Mã"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Tham Lang, gặp Hồng Loan hoặc Đào Hoa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tham Lang, gặp Thiên Riêu + Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Tham Lang, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tham Lang, gặp Bạch Hổ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Cự Môn sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng") && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Cự Môn sáng sủa ở Hợi, gặp Hóa Lộc hoặc Lộc Tồn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Cự Môn mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi")) { keyArr.push("Sao nhập Đại hạn - Cự Môn mờ ám ở Thìn/Tuất/Sửu/Mùi"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Cự Môn, gặp Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Cự Môn, gặp Tang Môn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Cự Môn, gặp Tang Môn + Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"], ["Mão", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Thiên Tướng sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"], ["Mão", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Tướng mờ ám, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Tướng, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Tướng, gặp Thiên Khôi + Thiên Hình"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)")) && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan))) { keyArr.push("Sao nhập Đại hạn - Thiên Tướng, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Thiên Lương"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"], ["Dậu", "Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Thiên Lương sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"], ["Dậu", "Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Thiên Lương mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"], ["Dậu", "Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi")) { keyArr.push("Sao nhập Đại hạn - Thiên Lương mờ ám ở Tý/Hợi"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Lương, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Thất Sát sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng") && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân")) { keyArr.push("Sao nhập Đại hạn - Thất Sát sáng sủa ở Dần/Thân"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Thất Sát mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thất Sát mờ ám, gặp Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thất Sát, gặp Liêm Trinh + Tham Lang + Phượng Các"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thất Sát, gặp Phá Quân + Thiên Hình"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thất Sát, gặp Đại Hao hoặc Tiểu Hao"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thất Sát, gặp Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Phá Quân sáng sủa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Phá Quân sáng sủa, gặp Văn Xương hoặc Văn Khúc hoặc Thiên Khôi hoặc Thiên Việt"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Phá Quân mờ ám"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phá Quân, gặp Liêm Trinh + Hỏa Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Phá Quân, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phá Quân, gặp Thiên Hình"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phá Quân, gặp Thiên Hình + Linh Tinh + Hỏa Tinh + Thiên Việt"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phá Quân, gặp Phượng Các"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phá Quân, gặp Thái Tuế"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quả Tú - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phá Quân, gặp Quả Tú"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Kình Dương"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Kình Dương, gặp Thất Sát hoặc Phá Quân"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Kình Dương, gặp Thiên Việt"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Không - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)"))) && (kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) { keyArr.push("Sao nhập Đại hạn - Địa Không hoặc Địa Kiếp sáng sủa"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Không - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)"))) && (kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) { keyArr.push("Sao nhập Đại hạn - Địa Không hoặc Địa Kiếp mờ ám"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Không - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Địa Không hoặc Địa Kiếp, gặp Tham Lang"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Không - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Địa Không hoặc Địa Kiếp, gặp Tử Vi hoặc Thiên Phủ hoặc Thiên Khôi hoặc Thiên Việt"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Không - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Địa Không hoặc Địa Kiếp, gặp Hóa Quyền"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Lộc Tồn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Lộc Tồn, gặp Hóa Khoa + Hóa Quyền + Tả Phù + Hữu Bật"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Lộc Tồn, gặp Hóa Lộc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Lộc Tồn, gặp Thiên Mã"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Lộc Tồn, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Lộc Tồn, gặp Địa Không hoặc Địa Kiếp + Thái Tuế"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tả Phù") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tả Phù (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hữu Bật") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tả Phù hoặc Hữu Bật, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tả Phù") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tả Phù (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hữu Bật") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Tả Phù hoặc Hữu Bật, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Đồng", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Văn Xương hoặc Văn Khúc, gặp Thiên Đồng + Tả Phù + Hữu Bật"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Văn Xương hoặc Văn Khúc, gặp Liêm Trinh + Kình Dương + Đà La"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Văn Xương hoặc Văn Khúc, gặp Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Văn Xương hoặc Văn Khúc, gặp Thái Tuế"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Văn Xương hoặc Văn Khúc, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Văn Khúc đồng cung Vũ Khúc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Thiên Khốc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Khốc, gặp Tử Vi hoặc Thiên Phủ hoặc Thiên Việt hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Khốc, gặp Thiên Hình"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)")) && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan))) { keyArr.push("Sao nhập Đại hạn - Thiên Khốc, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Hư") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Hư (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Hư - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Thiên Hư"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Việt") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Việt, gặp Tử Vi hoặc Thiên Phủ hoặc Thiên Khôi hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Việt") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Việt, gặp Thiên Hình + Linh Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Hóa Lộc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Hóa Lộc, gặp Tham Lang hoặc Vũ Khúc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Hóa Quyền, gặp Tham Lang hoặc Vũ Khúc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)")) && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan))) { keyArr.push("Sao nhập Đại hạn - Hóa Quyền, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Khoa") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Hóa Khoa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Khoa") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Hóa Khoa, gặp Thiên Khôi hoặc Thiên Việt hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Phá Quân + Thái Tuế"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Phá Quân + Kình Dương"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Thất Sát + Đà La"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Đà La + Bạch Hổ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Kình Dương + Đà La"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Thiên Hình + Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Hóa Kỵ, gặp Hồng Loan hoặc Đào Hoa"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)")))) { keyArr.push("Sao nhập Đại hạn - Đại Hao hoặc Tiểu Hao"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Đại Hao hoặc Tiểu Hao, gặp Phá Quân"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Đại Hao hoặc Tiểu Hao, gặp Thiên Hình + Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Tang Môn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) && lasoData.tenCungDaiVan === "Nô Bộc") { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Phá Quân + Hóa Kỵ, hạn ở cung Nô Bộc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Bạch Hổ + Thiên Khốc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hư - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Bạch Hổ + Thiên Khốc + Thiên Hư"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Bạch Hổ + Thiên Khốc + Thiên Mã"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Thiên Khốc + Địa Không"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Thiên Hình + Điếu Khách"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Điếu Khách"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tang Môn, gặp Hỏa Tinh"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ, gặp Tham Lang"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ, gặp Thất Sát"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ, gặp Thiên Hình + Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ, gặp Thiên Khốc"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ, gặp Thiên Khốc + Thiên Riêu"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phi Liêm", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phi Liêm (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phi Liêm - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ, gặp Phi Liêm"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tấu Thư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tấu Thư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tấu Thư - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Bạch Hổ, gặp Tấu Thư"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Long Trì") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Long Trì (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Long Trì - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phượng Các") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phượng Các (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)")))) { keyArr.push("Sao nhập Đại hạn - Long Trì hoặc Phượng Các"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Long Trì") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Long Trì (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Long Trì - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Long Trì, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Long Trì") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Long Trì (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Long Trì - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Long Trì, gặp Điếu Khách"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phượng Các") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phượng Các (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Phượng Các, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đào Hoa") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Đào Hoa, gặp Hồng Loan + Thiên Hỷ + Thiên Riêu"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hồng Loan") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thanh Long - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Hồng Loan, gặp Thanh Long"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Ân Quang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Ân Quang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Ân Quang - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Quý") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Quý (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Quý - ĐV)")))) { keyArr.push("Sao nhập Đại hạn - Ân Quang hoặc Thiên Quý"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tam Thai") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tam Thai (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tam Thai - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bát Tọa") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bát Tọa (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Bát Tọa - ĐV)")))) { keyArr.push("Sao nhập Đại hạn - Tam Thai hoặc Bát Tọa"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phong Cáo") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phong Cáo (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phong Cáo - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Phong Cáo"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tướng Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tướng Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tướng Quân - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Tướng Quân"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tướng Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tướng Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tướng Quân - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Tướng Quân, gặp Thiên Tướng"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tướng Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tướng Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tướng Quân - ĐV)")) && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan))) { keyArr.push("Sao nhập Đại hạn - Tướng Quân, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phục Binh, gặp Tang Môn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phục Binh, gặp Bạch Hổ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Phục Binh, gặp Thiên Hình + Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phục Binh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Phục Binh, gặp Thái Tuế + Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quốc Ấn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quốc Ấn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Quốc Ấn - ĐV)")) && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan))) { keyArr.push("Sao nhập Đại hạn - Quốc Ấn, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đường Phù") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đường Phù (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đường Phù - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Đường Phù, gặp Long Trì + Phượng Các"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đường Phù") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đường Phù (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đường Phù - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Đường Phù, gặp Bạch Hổ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Thiên Mã"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false)))) { keyArr.push("Sao nhập Đại hạn - Thiên Mã, gặp Tử Vi hoặc Thiên Phủ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Mã, gặp Địa Không hoặc Địa Kiếp + Thái Tuế"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thiên Mã, gặp Thiên Hình"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)")) && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan))) { keyArr.push("Sao nhập Đại hạn - Thiên Mã, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Giải") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Giải (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Giải - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Giải") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Giải (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Giải - ĐV)")))) { keyArr.push("Sao nhập Đại hạn - Thiên Giải hoặc Địa Giải"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Không (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Không - ĐV)"))) { keyArr.push("Sao nhập Đại hạn - Thiên Không"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách")) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Thiên Thương hoặc Thiên Sứ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách")) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Cự Môn + Hỏa Tinh + Kình Dương + Thiên Thương hoặc Thiên Sứ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách")) { keyArr.push("Sao nhập Đại hạn - Thiên Cơ, gặp Hóa Kỵ + Hỏa Tinh + Kình Dương + Thiên Thương hoặc Thiên Sứ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)", false))) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Mộc Dục") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Thất Sát, gặp Phá Quân + Đại Hao hoặc Tiểu Hao + sao vòng Tràng Sinh Mộc Dục + Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Mộc Dục")) { keyArr.push("Sao nhập Đại hạn - Văn Xương hoặc Văn Khúc, gặp sao vòng Tràng Sinh Mộc Dục"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)"))) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Mộc Dục") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Đại Hao hoặc Tiểu Hao, gặp sao vòng Tràng Sinh Mộc Dục + Hóa Kỵ"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)"))) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Tuyệt")) { keyArr.push("Sao nhập Đại hạn - Đại Hao hoặc Tiểu Hao, gặp sao vòng Tràng Sinh Tuyệt"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Thương - ĐV)", false))) { keyArr.push("Sao nhập Đại hạn - Đại Hao hoặc Tiểu Hao, gặp Thiên Thương"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)")) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Tuyệt")) { keyArr.push("Sao nhập Đại hạn - Thiên Mã, gặp sao vòng Tràng Sinh Tuyệt"); }
    }
    if (loai === "tieu") {
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tử Vi")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu")) { keyArr.push("Sao nhập Tiểu hạn - Tử Vi ở Tỵ/Hợi/Mão/Dậu"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tử Vi")) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan)) && lasoData.tenCungDaiVan === lasoData.tenCungTieuHan) { keyArr.push("Sao nhập Tiểu hạn - Tử Vi, bị Tuần/Triệt án ngữ, đại hạn và tiểu hạn trùng cung"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tử Vi")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Tướng", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false)))) { keyArr.push("Sao nhập Tiểu hạn - Tử Vi, gặp Thiên Phủ hoặc Vũ Khúc hoặc Thiên Tướng hoặc Tả Phù hoặc Hữu Bật hoặc Hóa Khoa hoặc Hóa Quyền hoặc Hóa Lộc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tử Vi")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)))) { keyArr.push("Sao nhập Tiểu hạn - Tử Vi, gặp Thiên Khôi hoặc Thiên Việt"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tử Vi")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)))) { keyArr.push("Sao nhập Tiểu hạn - Tử Vi, gặp Kình Dương hoặc Đà La hoặc Địa Kiếp hoặc Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi")) { keyArr.push("Sao nhập Tiểu hạn - Liêm Trinh ở Tỵ/Hợi"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Liêm Trinh ở Tỵ/Hợi/Sửu/Mùi, gặp Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sao nhập Tiểu hạn - Liêm Trinh ở Tỵ/Hợi, gặp Thiên Hình"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)))) { keyArr.push("Sao nhập Tiểu hạn - Liêm Trinh, gặp Tham Lang hoặc Thất Sát hoặc Phá Quân"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)))) { keyArr.push("Sao nhập Tiểu hạn - Liêm Trinh đồng cung Phá Quân, gặp Địa Kiếp hoặc Kình Dương"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sao nhập Tiểu hạn - Liêm Trinh, gặp Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sao nhập Tiểu hạn - Liêm Trinh, gặp Thiên Hình hoặc Hóa Kỵ hoặc Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Đồng"))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Đồng"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Đồng")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"], ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Đồng sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Đồng")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"], ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Đồng mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Đồng")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Đồng, gặp Kình Dương hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Đồng")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Đồng, gặp Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Vũ Khúc sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)))) { keyArr.push("Sao nhập Tiểu hạn - Vũ Khúc sáng sủa, gặp Tả Phù hoặc Hữu Bật hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false))) { keyArr.push("Sao nhập Tiểu hạn - Vũ Khúc sáng sủa, gặp Hóa Quyền"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Vũ Khúc mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (kiemTraSaoSangToi(["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thân", "Dậu", "Tuất", "Hợi", "Tý"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Thái Dương sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (kiemTraSaoSangToi(["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thân", "Dậu", "Tuất", "Hợi", "Tý"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Thái Dương mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (kiemTraSaoSangToi(["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thân", "Dậu", "Tuất", "Hợi", "Tý"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thái Dương mờ ám, gặp Tang Môn hoặc Hóa Kỵ hoặc Đà La"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false))) { keyArr.push("Sao nhập Tiểu hạn - Thái Dương, gặp Long Trì"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thanh Long", false))) { keyArr.push("Sao nhập Tiểu hạn - Thái Dương, gặp Long Trì + Thanh Long"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Riêu", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Thái Dương, gặp Thiên Riêu + Đà La + Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thái Dương, gặp Hỏa Tinh hoặc Linh Tinh hoặc Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ sáng sủa, gặp Hóa Lộc hoặc Lộc Tồn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dần", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ mờ ám, gặp Kình Dương hoặc Đà La hoặc Cự Môn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Lương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Lương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Thiên Lương + Thái Tuế + Tang Môn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Tang Môn + Thiên Khốc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Thiên Khốc + Hỏa Tinh + Kình Dương"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hư", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Thiên Khốc + Thiên Hư"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quả Tú", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Quả Tú"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Phủ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Phủ, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && (kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Thái Âm sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && (kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Thái Âm mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && (kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sao nhập Tiểu hạn - Thái Âm mờ ám, gặp Đà La + Thái Tuế + Bạch Hổ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thái Âm, gặp Long Trì + Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Thái Âm, gặp Đà La + Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thái Âm, gặp Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sao nhập Tiểu hạn - Thái Âm, gặp Thiên Hình"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi")) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang sáng sủa ở Thìn/Tuất/Sửu/Mùi"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Mã", false))) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang, gặp Vũ Khúc + Hóa Lộc hoặc Lộc Tồn + Thiên Mã"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false)))) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang, gặp Hồng Loan hoặc Đào Hoa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Riêu", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang, gặp Thiên Riêu + Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sao nhập Tiểu hạn - Tham Lang, gặp Bạch Hổ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Cự Môn sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false)))) { keyArr.push("Sao nhập Tiểu hạn - Cự Môn sáng sủa ở Hợi, gặp Hóa Lộc hoặc Lộc Tồn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Cự Môn mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi")) { keyArr.push("Sao nhập Tiểu hạn - Cự Môn mờ ám ở Thìn/Tuất/Sửu/Mùi"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Cự Môn, gặp Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false))) { keyArr.push("Sao nhập Tiểu hạn - Cự Môn, gặp Tang Môn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Cự Môn, gặp Tang Môn + Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"], ["Mão", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Tướng sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"], ["Mão", "Dậu"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Tướng mờ ám, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Tướng, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Tướng, gặp Thiên Khôi + Thiên Hình"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng")) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Tướng, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Lương"))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Lương"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Lương")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"], ["Dậu", "Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Lương sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Lương")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"], ["Dậu", "Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Lương mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Lương")) && (kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"], ["Dậu", "Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Lương mờ ám ở Tý/Hợi"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Lương")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Lương, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân")) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát sáng sủa ở Dần/Thân"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát mờ ám, gặp Kình Dương hoặc Đà La"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Liêm Trinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phượng Các", false))) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát, gặp Liêm Trinh + Tham Lang + Phượng Các"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát, gặp Phá Quân + Thiên Hình"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đại Hao", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tiểu Hao", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát, gặp Đại Hao hoặc Tiểu Hao"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát, gặp Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân sáng sủa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân sáng sủa, gặp Văn Xương hoặc Văn Khúc hoặc Thiên Khôi hoặc Thiên Việt"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân mờ ám"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Liêm Trinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân, gặp Liêm Trinh + Hỏa Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân, gặp Thiên Hình"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân, gặp Thiên Hình + Linh Tinh + Hỏa Tinh + Thiên Việt"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phượng Các", false))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân, gặp Phượng Các"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân, gặp Thái Tuế"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quả Tú", false))) { keyArr.push("Sao nhập Tiểu hạn - Phá Quân, gặp Quả Tú"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Kình Dương"))) { keyArr.push("Sao nhập Tiểu hạn - Kình Dương"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Kình Dương")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)))) { keyArr.push("Sao nhập Tiểu hạn - Kình Dương, gặp Thất Sát hoặc Phá Quân"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Kình Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false))) { keyArr.push("Sao nhập Tiểu hạn - Kình Dương, gặp Thiên Việt"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Không")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp"))) && (kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) { keyArr.push("Sao nhập Tiểu hạn - Địa Không hoặc Địa Kiếp sáng sủa"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Không")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp"))) && (kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) { keyArr.push("Sao nhập Tiểu hạn - Địa Không hoặc Địa Kiếp mờ ám"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Không")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false))) { keyArr.push("Sao nhập Tiểu hạn - Địa Không hoặc Địa Kiếp, gặp Tham Lang"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Không")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tử Vi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)))) { keyArr.push("Sao nhập Tiểu hạn - Địa Không hoặc Địa Kiếp, gặp Tử Vi hoặc Thiên Phủ hoặc Thiên Khôi hoặc Thiên Việt"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Không")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false))) { keyArr.push("Sao nhập Tiểu hạn - Địa Không hoặc Địa Kiếp, gặp Hóa Quyền"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn"))) { keyArr.push("Sao nhập Tiểu hạn - Lộc Tồn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false))) { keyArr.push("Sao nhập Tiểu hạn - Lộc Tồn, gặp Hóa Khoa + Hóa Quyền + Tả Phù + Hữu Bật"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false))) { keyArr.push("Sao nhập Tiểu hạn - Lộc Tồn, gặp Hóa Lộc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Mã", false))) { keyArr.push("Sao nhập Tiểu hạn - Lộc Tồn, gặp Thiên Mã"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sao nhập Tiểu hạn - Lộc Tồn, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sao nhập Tiểu hạn - Lộc Tồn, gặp Địa Không hoặc Địa Kiếp + Thái Tuế"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tả Phù") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tả Phù")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hữu Bật") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hữu Bật"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false))) { keyArr.push("Sao nhập Tiểu hạn - Tả Phù hoặc Hữu Bật, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tả Phù") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tả Phù")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hữu Bật") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hữu Bật"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Tả Phù hoặc Hữu Bật, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Đồng", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Đồng", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false))) { keyArr.push("Sao nhập Tiểu hạn - Văn Xương hoặc Văn Khúc, gặp Thiên Đồng + Tả Phù + Hữu Bật"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Liêm Trinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false))) { keyArr.push("Sao nhập Tiểu hạn - Văn Xương hoặc Văn Khúc, gặp Liêm Trinh + Kình Dương + Đà La"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Văn Xương hoặc Văn Khúc, gặp Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sao nhập Tiểu hạn - Văn Xương hoặc Văn Khúc, gặp Thái Tuế"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sao nhập Tiểu hạn - Văn Xương hoặc Văn Khúc, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc"))) { keyArr.push("Sao nhập Tiểu hạn - Văn Khúc đồng cung Vũ Khúc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Khốc"))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Khốc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Khốc")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tử Vi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Khốc, gặp Tử Vi hoặc Thiên Phủ hoặc Thiên Việt hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Khốc")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Khốc, gặp Thiên Hình"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Khốc")) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Khốc, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Hư") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Hư"))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Hư"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Việt") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Việt")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tử Vi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Việt, gặp Tử Vi hoặc Thiên Phủ hoặc Thiên Khôi hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Việt") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Việt")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Việt, gặp Thiên Hình + Linh Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Lộc"))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Lộc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Lộc")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Lộc, gặp Tham Lang hoặc Vũ Khúc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Quyền")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Quyền, gặp Tham Lang hoặc Vũ Khúc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Quyền")) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Quyền, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Khoa") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Khoa"))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Khoa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Khoa") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Khoa")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Khoa, gặp Thiên Khôi hoặc Thiên Việt hoặc Văn Xương hoặc Văn Khúc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Phá Quân + Thái Tuế"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Phá Quân + Kình Dương"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Thất Sát + Đà La"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Đà La + Bạch Hổ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Kình Dương + Đà La"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Thiên Hình + Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false)))) { keyArr.push("Sao nhập Tiểu hạn - Hóa Kỵ, gặp Hồng Loan hoặc Đào Hoa"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đại Hao")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tiểu Hao")))) { keyArr.push("Sao nhập Tiểu hạn - Đại Hao hoặc Tiểu Hao"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đại Hao")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tiểu Hao"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false))) { keyArr.push("Sao nhập Tiểu hạn - Đại Hao hoặc Tiểu Hao, gặp Phá Quân"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đại Hao")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tiểu Hao"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false))) { keyArr.push("Sao nhập Tiểu hạn - Đại Hao hoặc Tiểu Hao, gặp Thiên Hình + Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn"))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) && lasoData.tenCungTieuHan === "Nô Bộc") { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Phá Quân + Hóa Kỵ, hạn ở cung Nô Bộc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Bạch Hổ + Thiên Khốc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hư", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Bạch Hổ + Thiên Khốc + Thiên Hư"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Mã", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Bạch Hổ + Thiên Khốc + Thiên Mã"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Thiên Khốc + Địa Không"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Thiên Hình + Điếu Khách"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Điếu Khách + Thái Tuế"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Điếu Khách"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false))) { keyArr.push("Sao nhập Tiểu hạn - Tang Môn, gặp Hỏa Tinh"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ"))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ, gặp Tham Lang"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ, gặp Thất Sát"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ, gặp Thiên Hình + Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ, gặp Thiên Khốc"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Riêu", false))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ, gặp Thiên Khốc + Thiên Riêu"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phi Liêm", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phi Liêm", false))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ, gặp Phi Liêm"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bạch Hổ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tấu Thư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tấu Thư", false))) { keyArr.push("Sao nhập Tiểu hạn - Bạch Hổ, gặp Tấu Thư"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Long Trì") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Long Trì")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phượng Các") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phượng Các")))) { keyArr.push("Sao nhập Tiểu hạn - Long Trì hoặc Phượng Các"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Long Trì") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Long Trì")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sao nhập Tiểu hạn - Long Trì, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Long Trì") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Long Trì")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false))) { keyArr.push("Sao nhập Tiểu hạn - Long Trì, gặp Điếu Khách"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phượng Các") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phượng Các")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sao nhập Tiểu hạn - Phượng Các, gặp Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đào Hoa") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đào Hoa")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Riêu", false))) { keyArr.push("Sao nhập Tiểu hạn - Đào Hoa, gặp Hồng Loan + Thiên Hỷ + Thiên Riêu"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hồng Loan") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hồng Loan")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thanh Long", false))) { keyArr.push("Sao nhập Tiểu hạn - Hồng Loan, gặp Thanh Long"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Ân Quang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Ân Quang")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Quý") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Quý")))) { keyArr.push("Sao nhập Tiểu hạn - Ân Quang hoặc Thiên Quý"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tam Thai") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tam Thai")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bát Tọa") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Bát Tọa")))) { keyArr.push("Sao nhập Tiểu hạn - Tam Thai hoặc Bát Tọa"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phong Cáo") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phong Cáo"))) { keyArr.push("Sao nhập Tiểu hạn - Phong Cáo"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tướng Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tướng Quân"))) { keyArr.push("Sao nhập Tiểu hạn - Tướng Quân"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tướng Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tướng Quân")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Tướng", false))) { keyArr.push("Sao nhập Tiểu hạn - Tướng Quân, gặp Thiên Tướng"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tướng Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tướng Quân")) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan))) { keyArr.push("Sao nhập Tiểu hạn - Tướng Quân, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phục Binh")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false))) { keyArr.push("Sao nhập Tiểu hạn - Phục Binh, gặp Tang Môn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phục Binh")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sao nhập Tiểu hạn - Phục Binh, gặp Bạch Hổ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phục Binh")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sao nhập Tiểu hạn - Phục Binh, gặp Thiên Hình + Địa Không hoặc Địa Kiếp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phục Binh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phục Binh")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Phục Binh, gặp Thái Tuế + Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Quốc Ấn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Quốc Ấn")) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan))) { keyArr.push("Sao nhập Tiểu hạn - Quốc Ấn, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đường Phù") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đường Phù")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phượng Các", false))) { keyArr.push("Sao nhập Tiểu hạn - Đường Phù, gặp Long Trì + Phượng Các"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đường Phù") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đường Phù")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sao nhập Tiểu hạn - Đường Phù, gặp Bạch Hổ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã"))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Mã"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tử Vi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false)))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Mã, gặp Tử Vi hoặc Thiên Phủ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Mã, gặp Địa Không hoặc Địa Kiếp + Thái Tuế"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Mã, gặp Thiên Hình"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã")) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Mã, bị Tuần/Triệt án ngữ"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Giải") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Giải")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Giải") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Giải")))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Giải hoặc Địa Giải"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Không"))) { keyArr.push("Sao nhập Tiểu hạn - Thiên Không"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Thiên Thương hoặc Thiên Sứ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Cự Môn + Hỏa Tinh + Kình Dương + Thiên Thương hoặc Thiên Sứ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Cơ, gặp Hóa Kỵ + Hỏa Tinh + Kình Dương + Thiên Thương hoặc Thiên Sứ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đại Hao", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tiểu Hao", false))) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Mộc Dục") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Thất Sát, gặp Phá Quân + Đại Hao hoặc Tiểu Hao + sao vòng Tràng Sinh Mộc Dục + Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Mộc Dục")) { keyArr.push("Sao nhập Tiểu hạn - Văn Xương hoặc Văn Khúc, gặp sao vòng Tràng Sinh Mộc Dục"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đại Hao")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tiểu Hao"))) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Mộc Dục") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sao nhập Tiểu hạn - Đại Hao hoặc Tiểu Hao, gặp sao vòng Tràng Sinh Mộc Dục + Hóa Kỵ"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đại Hao")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tiểu Hao"))) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Tuyệt")) { keyArr.push("Sao nhập Tiểu hạn - Đại Hao hoặc Tiểu Hao, gặp sao vòng Tràng Sinh Tuyệt"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đại Hao")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tiểu Hao"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Thương", false))) { keyArr.push("Sao nhập Tiểu hạn - Đại Hao hoặc Tiểu Hao, gặp Thiên Thương"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã")) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Tuyệt")) { keyArr.push("Sao nhập Tiểu hạn - Thiên Mã, gặp sao vòng Tràng Sinh Tuyệt"); }
    }
}
// VH17-END
// TK18-BEGIN
function phu17DemKhong(tenCung, loai) {
    // loai: 0 = cung và ba cung hội; 1 = chỉ cung chính; 2 = chỉ ba cung hội; 3 = như 0 nhưng bỏ Tuần/Triệt của cung chính (đã tháo cởi khi hạn đến)
    let d = {};
    try {
        d = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { d = {}; }
    const ob = d.lasoOb || [];
    let i = 99;
    for (let k = 0; k < ob.length; k++) { if (ob[k].tenCung === tenCung) { i = k; } }
    if (i > 11) return 0;
    const idxs = [i, (i + 4) % 12, (i + 6) % 12, (i + 8) % 12];
    let coTuan = false;
    let coTriet = false;
    let coThien = false;
    let coDia = false;
    for (let a = 0; a < 4; a++) {
        let xet = true;
        if (loai === 1 && a > 0) { xet = false; }
        if (loai === 2 && a === 0) { xet = false; }
        const c = ob[idxs[a]];
        if (xet && c) {
            let boTT = false;
            if (loai === 3 && a === 0) { boTT = true; }
            if (!boTT && isCungCoTuan(c.tenCung)) { coTuan = true; }
            if (!boTT && isCungCoTriet(c.tenCung)) { coTriet = true; }
            let saoC = [];
            if (Array.isArray(c.sao)) { saoC = c.sao; }
            for (let b = 0; b < saoC.length; b++) {
                if (saoC[b].ten === "Thiên Không") { coThien = true; }
                if (saoC[b].ten === "Địa Không") { coDia = true; }
            }
        }
    }
    let dem = 0;
    if (coTuan) { dem++; }
    if (coTriet) { dem++; }
    if (coThien) { dem++; }
    if (coDia) { dem++; }
    return dem;
}
function LuanTamKhong18_menh(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 1) === 1 && phu17DemKhong("Mệnh", 2) === 2) {
        keyArr.push("Tam Không 01 - Mệnh - Cung Mệnh vô chính diệu có một Không tọa thủ và hai Không củng chiếu (Tam Không thượng các");
    }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 1) === 3) {
        keyArr.push("Tam Không 02 - Mệnh - Cung Mệnh vô chính diệu mà ba Không cùng nhập vào cung Mệnh rồi xung phá: nguy hiểm, nếu k");
    }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 0) === 4 && !(phu17DemKhong("Mệnh", 1) > 2)) {
        keyArr.push("Tam Không 03 - Mệnh - Cung Mệnh vô chính diệu được đủ Tứ Không (Tuần, Triệt, Thiên Không, Địa Không) hội hợp: rấ");
    }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 0) === 3 && !(phu17DemKhong("Mệnh", 1) > 2)) {
        keyArr.push("Tam Không 04 - Mệnh - Cung Mệnh vô chính diệu được Tam Không (ba trong bốn Không) hội hợp: đẹp; cái đẹp không tu");
    }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 0) === 2) {
        keyArr.push("Tam Không 05 - Mệnh - Cung Mệnh vô chính diệu được Nhị Không (hai trong bốn Không) hội hợp: tầm thường.");
    }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 0) === 1) {
        keyArr.push("Tam Không 06 - Mệnh - Cung Mệnh vô chính diệu chỉ có Nhất Không (một trong bốn Không) hội hợp: kém.");
    }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 0) > 2) {
        keyArr.push("Tam Không 07 - Mệnh - Cung Mệnh vô chính diệu có Tứ hay Tam Không: làm nên danh phận nhưng không bền; tuổi thiếu");
    }
    if (laCungVoChinhDieu("Mệnh") && phu17DemKhong("Mệnh", 0) > 2 && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Tam Không 08 - Mệnh - Cung Mệnh vô chính diệu có Tam Không hội Hóa Lộc: giàu sang nhưng không bền, có lúc phải b");
    }
    if ((isCungCoTuan("Mệnh") && isCungCoTriet("Mệnh"))) {
        keyArr.push("Tam Không 09 - Mệnh - Cung Mệnh có cả Tuần và Triệt cùng án ngữ (\"Tuần Triệt đương đầu\"): tuổi thiếu niên vất vả");
    }
}
// TK18-END
// VHS17-BEGIN
function phu17ChiNamXem(lasoData) {
    let r = "";
    for (let i = 0; i < lasoData.lasoOb.length; i++) {
        const c = lasoData.lasoOb[i];
        for (let j = 0; j < c.sao.length; j++) {
            if (c.sao[j].ten === "L. Thái Tuế") { r = c.chi; }
        }
    }
    return r;
}
function phu17CoSaoSang(tenCung, ds) {
    let d = {};
    try {
        d = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { d = {}; }
    const ob = d.lasoOb || [];
    let i = 99;
    for (let k = 0; k < ob.length; k++) { if (ob[k].tenCung === tenCung) { i = k; } }
    let co = false;
    if (i < 12) {
        const idxs = [i, (i + 4) % 12, (i + 6) % 12, (i + 8) % 12];
        const tenSang = ["Tử Vi", "Liêm Trinh", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Thất Sát", "Phá Quân", "Tham Lang", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương", "Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp"];
        const dacSang = [["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Ngọ", "Dần", "Thân"], ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân"], ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Tỵ", "Hợi", "Mùi"], ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"], ["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"], ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"], ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thìn", "Tuất", "Sửu", "Mùi"], ["Thìn", "Tuất", "Sửu", "Mùi"], ["Dần", "Thân", "Tỵ", "Hợi"], ["Dần", "Thân", "Tỵ", "Hợi"]];
        for (let a = 0; a < idxs.length; a++) {
            const c = ob[idxs[a]];
            let saoC = [];
            if (c && Array.isArray(c.sao)) { saoC = c.sao; }
            for (let b = 0; b < saoC.length; b++) {
                const ten = saoC[b].ten;
                for (let x = 0; x < ds.length; x++) {
                    if (ds[x] === ten) {
                        for (let m = 0; m < tenSang.length; m++) {
                            if (tenSang[m] === ten) {
                                for (let n = 0; n < dacSang[m].length; n++) { if (dacSang[m][n] === c.chi) { co = true; } }
                            }
                        }
                    }
                }
            }
        }
    }
    return co;
}
function phu17CungTamHop(a, b) {
    const nhom = [["Tỵ", "Dậu", "Sửu"], ["Thân", "Tý", "Thìn"], ["Hợi", "Mão", "Mùi"], ["Dần", "Ngọ", "Tuất"]];
    let kq = false;
    for (let i = 0; i < nhom.length; i++) {
        let coA = false;
        let coB = false;
        for (let j = 0; j < 3; j++) { if (nhom[i][j] === a) { coA = true; } if (nhom[i][j] === b) { coB = true; } }
        if (coA && coB) { kq = true; }
    }
    return kq;
}
function phu17CungLucHai(a, b) {
    const cap = [["Tý", "Mùi"], ["Sửu", "Ngọ"], ["Dần", "Tỵ"], ["Mão", "Thìn"], ["Thân", "Hợi"], ["Dậu", "Tuất"]];
    let kq = false;
    for (let i = 0; i < cap.length; i++) {
        if ((cap[i][0] === a && cap[i][1] === b) || (cap[i][0] === b && cap[i][1] === a)) { kq = true; }
    }
    return kq;
}
function phu17GiapHan(tenCung, a, b) {
    let d = {};
    try {
        d = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { d = {}; }
    const ob = d.lasoOb || [];
    let i = 99;
    for (let k = 0; k < ob.length; k++) { if (ob[k].tenCung === tenCung) { i = k; } }
    let kq = false;
    if (i < 12) {
        const truoc = ob[(i + 11) % 12].sao;
        const sau = ob[(i + 1) % 12].sao;
        let aT = false; let aS = false; let bT = false; let bS = false;
        for (let m = 0; m < truoc.length; m++) { if (truoc[m].ten === a) { aT = true; } if (truoc[m].ten === b) { bT = true; } }
        for (let m = 0; m < sau.length; m++) { if (sau[m].ten === a) { aS = true; } if (sau[m].ten === b) { bS = true; } }
        if ((aT && bS) || (bT && aS)) { kq = true; }
    }
    return kq;
}
// loai: "dai" = cung đại hạn hiện tại, "tieu" = cung tiểu hạn của năm xem hạn
function LuanVanHanSach(keyArr, loai) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    if (loai === "dai") {
        if (lasoData.tenCungDaiVan && (lasoData.chiNam === "Tý") && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ") && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)"))) { keyArr.push("Sách vận hạn 04 - Đại hạn - Tuổi Tý, hạn đến cung Sửu hoặc Ngọ có Thất Sát tọa thủ: rất đáng lo ngại; các tuổi khác gặp trường h"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu")) { keyArr.push("Sách vận hạn 22 - Đại hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) sinh cục: thời vận tốt, hoàn cảnh chiều đãi,"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn")) { keyArr.push("Sách vận hạn 23 - Đại hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) cùng hành: thời vận bình hòa, thong dong,"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi")) { keyArr.push("Sách vận hạn 24 - Đại hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) bị cục sinh ra (tiết khí): vận mạng thay đổ"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất")) { keyArr.push("Sách vận hạn 25 - Đại hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) bị cục khắc: thời vận phải tranh đấu, hay "); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu")) { keyArr.push("Sách vận hạn 26 - Đại hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) khắc cục: bị khắc chế, hoàn cảnh không thuận "); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn")) { keyArr.push("Sách vận hạn 27 - Đại hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) sinh cục: thời vận tốt, dễ có công danh sự"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi")) { keyArr.push("Sách vận hạn 28 - Đại hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) cùng hành: thời vận trung bình, thong dong, "); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất")) { keyArr.push("Sách vận hạn 29 - Đại hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) bị cục sinh ra (tiết khí): lao nhọc, bỏ sức"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 4 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu")) { keyArr.push("Sách vận hạn 30 - Đại hạn - Cục Kim Tứ, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) cùng hành: thời vận trung bình, thong dong, dễ"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 4 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn")) { keyArr.push("Sách vận hạn 31 - Đại hạn - Cục Kim Tứ, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) bị cục sinh ra (tiết khí): có thành công cũ"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 4 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi")) { keyArr.push("Sách vận hạn 32 - Đại hạn - Cục Kim Tứ, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) bị cục khắc: làm gì dù tốt cũng gặp trở ngại "); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu")) { keyArr.push("Sách vận hạn 33 - Đại hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) bị cục sinh ra (tiết khí): phải uốn theo hoàn"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn")) { keyArr.push("Sách vận hạn 34 - Đại hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) bị cục khắc: bắt tay làm việc hay gặp trở "); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi")) { keyArr.push("Sách vận hạn 35 - Đại hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) khắc cục: thời vận bị khắc chế, công danh nh"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất")) { keyArr.push("Sách vận hạn 36 - Đại hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) sinh cục: thời vận tốt, nhiều cơ hội tiến t"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu")) { keyArr.push("Sách vận hạn 37 - Đại hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) bị cục khắc: thời vận hay gặp trở lực lúc đầu"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn")) { keyArr.push("Sách vận hạn 38 - Đại hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) khắc cục: bị khắc chế, thành bại thất thườ"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi")) { keyArr.push("Sách vận hạn 39 - Đại hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) sinh cục: thời vận tốt, hoàn cảnh tốt, hạn đ"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất")) { keyArr.push("Sách vận hạn 40 - Đại hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) cùng hành: thời vận thong dong, yên bình; g"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cô Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cô Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cô Thần - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quả Tú - ĐV)", false)))) { keyArr.push("Sách vận hạn 41 - Đại hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Kim gặp Thái Tuế, Thiên Hình, Cô Thần hoặc Quả Tú: cẩn trọng ta"); }
        if (lasoData.tenCungDaiVan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)))) { keyArr.push("Sách vận hạn 42 - Đại hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Hỏa gặp thêm Linh hoặc Hỏa: dễ gặp tai nạn bất kỳ."); }
        if (lasoData.tenCungDaiVan && (phu17CoSaoSang("Mệnh", ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"]) || phu17CoSaoSang(lasoData.cungCu, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) && phu17CoSaoSang(lasoData.tenCungDaiVan, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) { keyArr.push("Sách vận hạn 43 - Đại hạn - Mệnh/Thân có các bộ sao Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đồng Lương sáng sủa, hạn cũng gặp các bộ"); }
        if (lasoData.tenCungDaiVan && (phu17CoSaoSang("Mệnh", ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"]) || phu17CoSaoSang(lasoData.cungCu, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) && phu17CoSaoSang(lasoData.tenCungDaiVan, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) { keyArr.push("Sách vận hạn 44 - Đại hạn - Mệnh/Thân có Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đồng Lương sáng sủa, hạn gặp Sát Phá Liêm Tham hoặc"); }
        if (lasoData.tenCungDaiVan && (phu17CoSaoSang("Mệnh", ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"]) || phu17CoSaoSang(lasoData.cungCu, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) && phu17CoSaoSang(lasoData.tenCungDaiVan, ["Vũ Khúc", "Thiên Tướng"])) { keyArr.push("Sách vận hạn 45 - Đại hạn - Mệnh/Thân có Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đồng Lương sáng sủa, hạn gặp Vũ Khúc hoặc Thiên Tướ"); }
        if (lasoData.tenCungDaiVan && (phu17CoSaoSang("Mệnh", ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"]) || phu17CoSaoSang(lasoData.cungCu, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) && phu17CoSaoSang(lasoData.tenCungDaiVan, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) { keyArr.push("Sách vận hạn 46 - Đại hạn - Mệnh/Thân có Sát Phá Liêm Tham hoặc sát tinh sáng sủa, hạn cũng gặp nhóm này sáng sủa: mọi việc hanh"); }
        if (lasoData.tenCungDaiVan && (phu17CoSaoSang("Mệnh", ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"]) || phu17CoSaoSang(lasoData.cungCu, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) && phu17CoSaoSang(lasoData.tenCungDaiVan, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) { keyArr.push("Sách vận hạn 47 - Đại hạn - Mệnh/Thân có Sát Phá Liêm Tham hoặc sát tinh sáng sủa, hạn gặp Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đ"); }
        if (lasoData.tenCungDaiVan && (phu17CoSaoSang("Mệnh", ["Vũ Khúc", "Thiên Tướng"]) || phu17CoSaoSang(lasoData.cungCu, ["Vũ Khúc", "Thiên Tướng"])) && phu17CoSaoSang(lasoData.tenCungDaiVan, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương", "Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) { keyArr.push("Sách vận hạn 48 - Đại hạn - Mệnh/Thân có Vũ Khúc hoặc Thiên Tướng sáng sủa, hạn gặp các bộ sao chính sáng sủa: thành công trong "); }
        if (lasoData.tenCungDaiVan && laCungVoChinhDieu("Mệnh") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)))) { keyArr.push("Sách vận hạn 49 - Đại hạn - Mệnh vô chính diệu, hạn gặp Sát, Phá, Liêm, Tham (sáng hay tối): mưu việc gì cũng trước khó sau mới "); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Cự Môn") || isSaoToaThuTaiCung(lasoData.cungCu, "Cự Môn")) || (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.cungCu, "Hóa Kỵ"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quan Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quan Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quan Phù - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quan Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quan Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quan Phủ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bệnh Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bệnh Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bệnh Phù - ĐV)", false)))) { keyArr.push("Sách vận hạn 50 - Đại hạn - Mệnh/Thân có Cự Môn hoặc Hóa Kỵ tọa thủ, hạn gặp Thái Tuế, Đà La, Quan Phù, Quan Phủ hoặc Bệnh Phù: "); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sách vận hạn 51 - Đại hạn - Mệnh/Thân có Thất Sát, hạn gặp Kình Dương hoặc Đà La: dễ gặp tai nạn, tai biến, thiên tai bất ngờ gâ"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Hình") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Hình")) || (isSaoToaThuTaiCung("Mệnh", "Linh Tinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Linh Tinh"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sách vận hạn 52 - Đại hạn - Mệnh/Thân có Thất Sát, Thiên Hình hoặc Linh Tinh tọa thủ, hạn gặp Bạch Hổ: dễ bị tù tội, tai nạn có "); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung("Mệnh", "Tham Lang") || isSaoToaThuTaiCung(lasoData.cungCu, "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)", false)))) { keyArr.push("Sách vận hạn 53 - Đại hạn - Mệnh/Thân có Tham Lang, hạn gặp Đại Hao hoặc Tiểu Hao: khó giữ của cải, túng thiếu."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung("Mệnh", "Tham Lang") || isSaoToaThuTaiCung(lasoData.cungCu, "Tham Lang")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false))) { keyArr.push("Sách vận hạn 54 - Đại hạn - Mệnh/Thân có Tham Lang, hạn gặp Hóa Lộc: tiền tài phong túc."); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Không")) || (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Kiếp"))) && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan))) { keyArr.push("Sách vận hạn 55 - Đại hạn - Mệnh/Thân có Địa Không hoặc Địa Kiếp, hạn bị Tuần hoặc Triệt dù có sao tốt hội: mưu việc gì cũng trắ"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Không")) || (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Kiếp"))) && lasoData.tenCungDaiVan === "Mệnh") { keyArr.push("Sách vận hạn 56 - Đại hạn - Mệnh/Thân có Địa Không hoặc Địa Kiếp, hạn đến cung Mệnh: sự nghiệp đổ vỡ, tính mạng khó bảo toàn."); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Đại Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Đại Hao")) || (isSaoToaThuTaiCung("Mệnh", "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Tiểu Hao"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false)))) { keyArr.push("Sách vận hạn 57 - Đại hạn - Mệnh/Thân có Đại Hao hoặc Tiểu Hao, hạn gặp Lộc Tồn hoặc Hóa Lộc: phát tài, có việc làm, thăng chức,"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Đại Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Đại Hao")) || (isSaoToaThuTaiCung("Mệnh", "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Tiểu Hao"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)))) { keyArr.push("Sách vận hạn 58 - Đại hạn - Mệnh/Thân có Đại Hao hoặc Tiểu Hao, hạn gặp Kình, Đà, Không, Kiếp, Kỵ, Linh hoặc Hỏa: tài lộc có bao"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Hỏa Tinh")) || (isSaoToaThuTaiCung("Mệnh", "Linh Tinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Linh Tinh"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách")) { keyArr.push("Sách vận hạn 59 - Đại hạn - Mệnh/Thân có Hỏa hoặc Linh, hạn gặp Địa Kiếp hoặc Địa Không cùng Thiên Thương hoặc Thiên Sứ: tán tài"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt"))) && (lasoData.tenCungDaiVan === "Mệnh" || lasoData.tenCungDaiVan === lasoData.cungCu)) { keyArr.push("Sách vận hạn 60 - Đại hạn - Mệnh/Thân có Thiên Khôi hoặc Thiên Việt, hạn đến cung Mệnh hoặc cung an Thân: gặp quý nhân, thăng qu"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Tướng Quân") || isSaoToaThuTaiCung(lasoData.cungCu, "Tướng Quân")) || (isSaoToaThuTaiCung("Mệnh", "Hoa Cái") || isSaoToaThuTaiCung(lasoData.cungCu, "Hoa Cái")) || (isSaoToaThuTaiCung("Mệnh", "Đào Hoa") || isSaoToaThuTaiCung(lasoData.cungCu, "Đào Hoa")) || (isSaoToaThuTaiCung("Mệnh", "Văn Khúc") || isSaoToaThuTaiCung(lasoData.cungCu, "Văn Khúc"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)", false)))) { keyArr.push("Sách vận hạn 61 - Đại hạn - Mệnh/Thân có Tướng Quân, Hoa Cái, Đào Hoa hoặc Văn Khúc, hạn gặp Thiên Cơ hoặc Thiên Riêu: hạn nhiều"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Phá Quân") || isSaoToaThuTaiCung(lasoData.cungCu, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Võng", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Võng (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Võng - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)", false)))) { keyArr.push("Sách vận hạn 62 - Đại hạn - Cung an Thân có Sát, Phá, Liêm, Tham, hạn gặp Địa Võng, Thiên Hình, Thiên Khôi, Hóa Kỵ, Đào Hoa hoặc"); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "G." || lasoData.canNam === "K.") && ((isSaoToaThuTaiCung("Mệnh", "Tử Vi") || isSaoToaThuTaiCung(lasoData.cungCu, "Tử Vi")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Phủ")) || (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.cungCu, "Vũ Khúc")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Tướng"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tấu Thư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tấu Thư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tấu Thư - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)))) { keyArr.push("Sách vận hạn 63 - Đại hạn - Tuổi Giáp hoặc Kỷ, Mệnh có Tử, Phủ, Vũ, Tướng, hạn gặp Hồng Loan, Văn Xương, Tấu Thư hoặc Kình Dương"); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "K.") && ((isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Cơ")) || (isSaoToaThuTaiCung("Mệnh", "Thái Âm") || isSaoToaThuTaiCung(lasoData.cungCu, "Thái Âm")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Đồng")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Lương"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false)))) { keyArr.push("Sách vận hạn 64 - Đại hạn - Tuổi Kỷ, Mệnh có Cơ, Nguyệt, Đồng, Lương, hạn gặp Sát, Phá, Liêm, Tham, Tả hoặc Hữu: công danh sớm t"); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "M." || lasoData.canNam === "C.") && (phu17ChiCung(lasoData, "Mệnh") === "Thìn" || phu17ChiCung(lasoData, "Mệnh") === "Tuất") && (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") || isSaoToaThuTaiCung("Mệnh", "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sách vận hạn 65 - Đại hạn - Tuổi Mậu hoặc Canh, Mệnh ở Thìn hoặc Tuất có Vũ Khúc hay Tham Lang tọa thủ, hạn gặp Kình Dương, Đà L"); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "M." || lasoData.canNam === "C.") && (phu17ChiCung(lasoData, "Mệnh") === "Thìn" || phu17ChiCung(lasoData, "Mệnh") === "Tuất") && (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") || isSaoToaThuTaiCung("Mệnh", "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false))) && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Mệnh", "Địa Kiếp"))) { keyArr.push("Sách vận hạn 66 - Đại hạn - Tuổi Mậu hoặc Canh, Mệnh ở Thìn hoặc Tuất có Vũ Khúc hay Tham Lang cùng Địa Không hoặc Địa Kiếp, hạn"); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "T." || lasoData.canNam === "Đ.") && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sách vận hạn 67 - Đại hạn - Tuổi Tân hoặc Đinh, hạn đến cung Thìn hoặc Tuất gặp sát tinh: cẩn trọng về pháp luật, kiện tụng."); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "T." || lasoData.canNam === "Đ.") && lasoData.tenCungDaiVan === "Mệnh") { keyArr.push("Sách vận hạn 68 - Đại hạn - Tuổi Tân hoặc Đinh, hạn đến cung Mệnh: mưu sự khó thành như ý, phải bỏ nhiều công sức mới thành công"); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "T." || lasoData.canNam === "Đ.") && lasoData.tenCungDaiVan === "Mệnh" && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Mệnh", "Địa Kiếp"))) { keyArr.push("Sách vận hạn 69 - Đại hạn - Tuổi Tân hoặc Đinh, hạn đến cung Mệnh mà Mệnh có Địa Không hoặc Địa Kiếp tọa thủ: hạn rất xấu, mọi v"); }
        if (lasoData.tenCungDaiVan && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false))) && ((isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (phu17ChiCung(lasoData, "Mệnh") === "Sửu" || phu17ChiCung(lasoData, "Mệnh") === "Mùi")) || (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && phu17ChiCung(lasoData, "Mệnh") === "Ngọ"))) { keyArr.push("Sách vận hạn 70 - Đại hạn - Hạn đến Thìn, Tuất, Sửu hoặc Mùi có Tả Phù, Hữu Bật, đối với Mệnh ở Sửu/Mùi có Tử Vi, Phá Quân đồng "); }
        if (lasoData.tenCungDaiVan && lasoData.amduong === "Âm Nam" && (lasoData.canNam === "Ấ." || lasoData.canNam === "K.") && (phu17ChiCung(lasoData, "Mệnh") === "Sửu" || phu17ChiCung(lasoData, "Mệnh") === "Mùi") && isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Tràng Sinh")) { keyArr.push("Sách vận hạn 71 - Đại hạn - Tuổi Ất hoặc Kỷ, Âm Nam, Mệnh ở Sửu hoặc Mùi có Liêm Trinh, Thất Sát đồng cung, hạn gặp Hóa Khoa và "); }
        if (lasoData.tenCungDaiVan && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lực Sĩ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lực Sĩ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lực Sĩ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tướng Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tướng Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tướng Quân - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thanh Long - ĐV)", false))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Ân Quang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Ân Quang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Ân Quang - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Quý", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Quý (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Quý - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tam Thai", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tam Thai (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tam Thai - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bát Tọa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bát Tọa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bát Tọa - ĐV)", false)))) { keyArr.push("Sách vận hạn 72 - Đại hạn - Đại hạn hoặc tiểu hạn đến cung có Lực Sĩ, Tướng Quân hoặc Thanh Long, lại có thêm cát tinh nâng đỡ ("); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bác Sĩ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bác Sĩ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bác Sĩ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false))) { keyArr.push("Sách vận hạn 73 - Đại hạn - Hạn gặp Bác Sĩ cùng Văn Xương, Văn Khúc, Hóa Khoa: thi đỗ cao."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)"))) { keyArr.push("Sách vận hạn 74 - Đại hạn - Hạn đến sao Dịch Mã: có người muốn đẩy mình đi nơi khác."); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Giải") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Giải (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Giải - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Giải Thần") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Giải Thần (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Giải Thần - ĐV)")))) { keyArr.push("Sách vận hạn 75 - Đại hạn - Hạn gặp Thiên Giải hoặc Giải Thần: như cá thoát lưới, có nguy cũng hóa vô can."); }
        if (lasoData.tenCungDaiVan && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Lâm Quan") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sách vận hạn 76 - Đại hạn - Hạn có Lâm Quan gặp Thái Tuế, Địa Không hoặc Địa Kiếp: phải chịu luồn cúi, làm thân dưới mới tiến th"); }
        if (lasoData.tenCungDaiVan && lasoData.hanhMenh === "Hỏa" && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi")) { keyArr.push("Sách vận hạn 78 - Đại hạn - Mệnh hành Hỏa, hạn đến cung Tuất hoặc Hợi: có tai họa (khẩu quyết \"Hỏa hành Tuất, Hợi\")."); }
        if (lasoData.tenCungDaiVan && lasoData.hanhMenh === "Thủy" && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ")) { keyArr.push("Sách vận hạn 79 - Đại hạn - Mệnh hành Thủy, hạn đến cung Thìn hoặc Tỵ: hạn buồn, dễ gặp điều không hay (khẩu quyết \"Thủy, Thổ Lo"); }
        if (lasoData.tenCungDaiVan && lasoData.hanhMenh === "Thổ" && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ")) { keyArr.push("Sách vận hạn 80 - Đại hạn - Mệnh hành Thổ, hạn đến cung Thìn hoặc Tỵ: hạn buồn, dễ gặp điều không hay (khẩu quyết \"Thủy, Thổ Lon"); }
        if (lasoData.tenCungDaiVan && lasoData.hanhMenh === "Kim" && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần")) { keyArr.push("Sách vận hạn 81 - Đại hạn - Mệnh hành Kim, hạn đến cung Sửu hoặc Dần: có hại (khẩu quyết \"Kim ngộ Sửu, Dần\")."); }
        if (lasoData.tenCungDaiVan && lasoData.hanhMenh === "Mộc" && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu")) { keyArr.push("Sách vận hạn 82 - Đại hạn - Mệnh hành Mộc, hạn đến cung Thân hoặc Dậu: không hay (khẩu quyết \"Mộc hành Thân, Dậu\")."); }
        if (lasoData.tenCungDaiVan && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Thương - ĐV)", false)))) { keyArr.push("Sách vận hạn 85 - Đại hạn - Hạn gặp Thất Sát, Kình Dương, Đà La, Địa Kiếp, Địa Không hoặc Thiên Thương: sẽ chịu hình thương."); }
        if (lasoData.tenCungDaiVan && phu17GiapHan(lasoData.tenCungDaiVan, "Kình Dương", "Liêm Trinh")) { keyArr.push("Sách vận hạn 87 - Đại hạn - Hạn bị Kình Dương và Liêm Trinh giáp hai bên: khó tránh nạn tù tội."); }
        if (lasoData.tenCungDaiVan && phu17GiapHan(lasoData.tenCungDaiVan, "Kình Dương", "Thiên Hình")) { keyArr.push("Sách vận hạn 88 - Đại hạn - Hạn bị Kình Dương và Thiên Hình giáp hai bên: dễ bị giặc cướp, ác nhân uy hiếp, như kiếm chĩa vào ng"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Kình Dương") || isSaoToaThuTaiCung(lasoData.cungCu, "Kình Dương")) || (isSaoToaThuTaiCung("Mệnh", "Đà La") || isSaoToaThuTaiCung(lasoData.cungCu, "Đà La"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false))) { keyArr.push("Sách vận hạn 91 - Đại hạn - Mệnh hoặc Thân có Kình Dương, Đà La, hạn gặp Thất Sát: khó tránh điều xấu."); }
        if (lasoData.tenCungDaiVan && isSaoToaThuTaiCung(lasoData.cungCu, "Tả Phù") && isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Tướng") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)", false))) { keyArr.push("Sách vận hạn 93 - Đại hạn - Cung Thân và cung hạn cùng gặp Tả Phù và Thiên Tướng: mưu một được hai."); }
        if (lasoData.tenCungDaiVan && isCungCoTriet(lasoData.tenCungDaiVan) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)))) { keyArr.push("Sách vận hạn 94 - Đại hạn - Hạn đến cung có Triệt gặp Địa Kiếp hoặc Địa Không: không tốt, dễ đau yếu, trộm cướp."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hư - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)", false))) { keyArr.push("Sách vận hạn 95 - Đại hạn - Hạn gặp đủ Thiên Khốc, Thiên Hư, Tang Môn, Điếu Khách: hạn có tang."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false))) { keyArr.push("Sách vận hạn 96 - Đại hạn - Hạn gặp Văn Xương (hoặc Lưu Xương), Linh Tinh, Đà La, Vũ Khúc: sách xếp vào hạn \"đâm đầu xuống sông\""); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đà La") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đà La (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đà La - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)"))) { keyArr.push("Sách vận hạn 97 - Đại hạn - Hạn có Đà La, Phá Quân, Hóa Kỵ đồng cung: phải đề phòng chết đuối, đắm tàu thuyền."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lưu Hà", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lưu Hà (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lưu Hà - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sách vận hạn 98 - Đại hạn - Hạn gặp Lưu Hà cùng Cự Môn, Hóa Kỵ, Phá Quân hoặc Đà La: phải phòng nạn sông nước, đắm tàu thuyền."); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối") || ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối"))) { keyArr.push("Sách vận hạn 99 - Đại hạn - Hạn có Hỏa Tinh hoặc Linh Tinh hãm địa: dễ ung nhọt, mất của, cuộc sống tầm thường, khó tránh khẩu t"); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kiếp Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kiếp Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kiếp Sát - ĐV)", false))) { keyArr.push("Sách vận hạn 100 - Đại hạn - Hạn gặp Kiếp Sát: dễ hao tán cơ nghiệp; lớn tuổi càng đáng lo vì khó gây dựng lại."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)", false))) { keyArr.push("Sách vận hạn 101 - Đại hạn - Hạn có Điếu Khách gặp Hỷ Thần: có người đến chúc mừng."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false)))) { keyArr.push("Sách vận hạn 102 - Đại hạn - Hạn có Long Trì gặp Hỷ Thần hoặc Thiên Hỷ: báo có việc vui."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false))) { keyArr.push("Sách vận hạn 103 - Đại hạn - Hạn gặp Hỷ Thần và Hóa Quyền: được thăng quan, thăng chức."); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)"))) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỷ Thần") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)"))) { keyArr.push("Sách vận hạn 104 - Đại hạn - Hạn có Lộc đồng cung Hỷ Thần: phát tài."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thanh Long") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thanh Long (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thanh Long - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)"))) { keyArr.push("Sách vận hạn 105 - Đại hạn - Hạn có Thanh Long đồng cung Hóa Quyền: được thăng quan tước."); }
        if (lasoData.tenCungDaiVan && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phong Cáo", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phong Cáo (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phong Cáo - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tướng Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tướng Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tướng Quân - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quốc Ấn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quốc Ấn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quốc Ấn - ĐV)", false))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)", false)))) { keyArr.push("Sách vận hạn 106 - Đại hạn - Hạn gặp Phong Cáo, Tướng Quân hoặc Quốc Ấn cùng Hóa Quyền, Thiên Hình, Phục Binh hoặc Thiên Mã: hạn "); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false))) { keyArr.push("Sách vận hạn 107 - Đại hạn - Hạn có Tham Lang gặp Thiên Việt: năm buôn bán kim loại, hoặc mua được vàng bạc."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false))) { keyArr.push("Sách vận hạn 108 - Đại hạn - Hạn có Tham Lang, Thiên Việt cùng Phục Binh, Địa Kiếp: năm mất tiền, mất vàng bạc, đồ kim khí."); }
        if (lasoData.tenCungDaiVan && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hư - ĐV)", false))) { keyArr.push("Sách vận hạn 109 - Đại hạn - Hạn có Tham Lang hoặc Vũ Khúc gặp Thiên Hư: được của bất ngờ."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false))) { keyArr.push("Sách vận hạn 110 - Đại hạn - Hạn gặp Thiên Hình và Phá Quân: dễ vướng kiện tụng; gặp thêm Quan Phù hoặc Thái Tuế cũng vậy."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thân")) { keyArr.push("Sách vận hạn 111 - Đại hạn - Hạn có Tham Lang, Văn Xương ở Dần hoặc Thân: hạn bị tù tội; nếu có Hỏa, Linh đồng vị thì giải được."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false))) { keyArr.push("Sách vận hạn 112 - Đại hạn - Đại hạn hoặc tiểu hạn gặp Thái Dương, thêm Tả Phù, Hữu Bật: có thể dựng nghiệp."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sách vận hạn 113 - Đại hạn - Đại hạn hoặc tiểu hạn có Thái Dương mà sát tinh tụ nhiều: có mối lo về quan tụng."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)"))) { keyArr.push("Sách vận hạn 114 - Đại hạn - Đại hạn hoặc tiểu hạn gặp Thiên Cơ: công việc thay đổi, có thể lập cơ nghiệp mới."); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối"))) { keyArr.push("Sách vận hạn 115 - Đại hạn - Đại hạn hoặc tiểu hạn gặp Cự Môn hãm địa: tai nạn không nhỏ."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)"))) { keyArr.push("Sách vận hạn 116 - Đại hạn - Đại hạn hoặc tiểu hạn gặp Thiên Tướng: vạn sự đều tốt đẹp."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sách vận hạn 117 - Đại hạn - Thân hoặc Mệnh có Thất Sát, hạn gặp Thiên Hình và Hóa Kỵ: có thể bị thương tích; gặp Tử Vi, Lộc Tồn "); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu")) { keyArr.push("Sách vận hạn 119 - Đại hạn - Hạn có Tham Lang hội Văn Khúc, Vũ Khúc ở Ngọ hoặc Sửu: đề phòng nạn sông nước."); }
        if (lasoData.tenCungDaiVan && (lasoData.canNam === "K." || lasoData.canNam === "T." || lasoData.canNam === "N.") && (isSaoToaThuTaiCung("Mệnh", "Văn Xương") || isSaoToaThuTaiCung("Mệnh", "Văn Khúc")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất")) { keyArr.push("Sách vận hạn 120 - Đại hạn - Tuổi Kỷ, Tân hoặc Nhâm có Xương hoặc Khúc ở Mệnh, hạn gặp Thìn hoặc Tuất: lo nạn đâm đầu xuống sông."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false))) { keyArr.push("Sách vận hạn 121 - Đại hạn - Hạn gặp Thiên Khôi và Thiên Việt: tiền nong, danh giá đều tốt đẹp; người đang làm quan có thể được t"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt"))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false))) { keyArr.push("Sách vận hạn 122 - Đại hạn - Khôi hoặc Việt ở Mệnh/Thân, hạn gặp Văn Xương: người chưa có danh phận thì tiền lương sung túc, ngườ"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)"))) { keyArr.push("Sách vận hạn 124 - Đại hạn - Đại hạn mười năm gặp Hóa Lộc: cát khánh."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)"))) { keyArr.push("Sách vận hạn 127 - Đại hạn - Đại hạn gặp Hóa Kỵ: mười năm lận đận."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sách vận hạn 128 - Đại hạn - Đại hạn hoặc tiểu hạn có Hóa Kỵ lại thêm Thái Tuế: càng vất vả, dễ gặp tai họa bất ngờ về khẩu thiệt"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)))) { keyArr.push("Sách vận hạn 129 - Đại hạn - Thiên Mã nhập hạn gặp Lộc Tồn, Tử Vi, Thiên Phủ hoặc Xương, Khúc: mới thật tốt."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)))) { keyArr.push("Sách vận hạn 130 - Đại hạn - Hạn gặp Thiên Thương hoặc Thiên Sứ cùng Cự Môn, Thiên Cơ, Kình, Đà, Hỏa hoặc Hóa Kỵ: năm ấy phá bại."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Riêu") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)"))) { keyArr.push("Sách vận hạn 131 - Đại hạn - Hạn gặp Thiên Riêu: chẳng cần mai mối, cưới hỏi cũng nên vợ chồng."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tấu Thư") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tấu Thư (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tấu Thư - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sách vận hạn 132 - Đại hạn - Tấu Thư gặp Bạch Hổ trong đại hạn hoặc tiểu hạn: thường đắc ý về công danh và hỷ sự."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false))) { keyArr.push("Sách vận hạn 133 - Đại hạn - Đại hạn hoặc tiểu hạn có Song Hỷ (Hỷ Thần, Thiên Hỷ): thường toại ý bất ngờ, may mắn."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)))) { keyArr.push("Sách vận hạn 134 - Đại hạn - Tử Vi nhập hạn mà tam phương có Thất Sát, Phá Quân hoặc Tham Lang: người thường thì bất lợi, người c"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)))) { keyArr.push("Sách vận hạn 135 - Đại hạn - Thiên Cơ nhập hạn gặp Kình Dương hoặc Đà La: cuộc sống bất an, việc nhà rối rắm; nếu thêm Cự Môn hãm"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false))) { keyArr.push("Sách vận hạn 136 - Đại hạn - Vũ Khúc nhập hạn có Hóa Quyền: cầu mưu gì cũng thành, thêm sao tốt trợ lực thì văn nhân nổi danh, ng"); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)")) && kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối"))) { keyArr.push("Sách vận hạn 137 - Đại hạn - Vũ Khúc nhập hạn ở hãm địa: người làm công chức dễ gặp rắc rối hình phạt, dân thường hay mắc nợ, ngư"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false))) { keyArr.push("Sách vận hạn 138 - Đại hạn - Liêm Trinh nhập hạn gặp Thiên Hình, tối kỵ có Kình Dương: gặp tai nạn đổ máu hoặc tù tội; thêm Phá Q"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false))) { keyArr.push("Sách vận hạn 139 - Đại hạn - Thiên Phủ nhập hạn có đủ Khoa, Quyền, Lộc: mưu sự xứng tâm, rất tốt."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sách vận hạn 140 - Đại hạn - Thái Âm nhập hạn gặp Hỏa Tinh hoặc Linh Tinh: bị tai ách, bệnh hoạn."); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) && kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sách vận hạn 141 - Đại hạn - Thái Âm hãm địa nhập hạn, lại thêm Kình Đà và Hỏa Linh: rất nguy hiểm."); }
        if (lasoData.tenCungDaiVan && (lasoData.chiNam === "Thìn" || lasoData.chiNam === "Tuất" || lasoData.chiNam === "Sửu" || lasoData.chiNam === "Mùi") && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Mùi") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false))) { keyArr.push("Sách vận hạn 142 - Đại hạn - Tham Lang nhập hạn ở tứ mộ, người sinh năm Thìn, Tuất, Sửu, Mùi, gặp Hỏa Tinh: tuyệt hảo, làm giàu n"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false))) { keyArr.push("Sách vận hạn 143 - Đại hạn - Cự Môn nhập hạn gặp Tang Môn: mọi sự bất như ý, bị kiện cáo hoặc trong nhà có tang."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false))) { keyArr.push("Sách vận hạn 144 - Đại hạn - Thiên Tướng nhập hạn gặp Kình Dương: nhiều tai họa; thêm Hỏa, Linh thì hạn rất xấu."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)))) { keyArr.push("Sách vận hạn 145 - Đại hạn - Thiên Lương nhập hạn gặp Hỏa Tinh hoặc Linh Tinh: gây nguy hại lớn, có thể tan cửa nát nhà."); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false))) { keyArr.push("Sách vận hạn 146 - Đại hạn - Thất Sát đắc địa nhập hạn, đối cung có Thiên Phủ triều: gia đạo ung dung, kẻ sĩ gặp hạn này danh hiể"); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối"))) { keyArr.push("Sách vận hạn 147 - Đại hạn - Thất Sát hãm địa nhập hạn: thế nào cũng vất vả gian nan; bị thêm ác diệu thì quan tai, tật bệnh miên"); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) && kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)))) { keyArr.push("Sách vận hạn 148 - Đại hạn - Phá Quân miếu địa nhập hạn, thêm Văn Xương, Khôi hoặc Việt: cuộc sống phong quang, phúc lộc dồi dào."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sách vận hạn 149 - Đại hạn - Lộc Tồn nhập hạn gặp Phá, Kiếp, Không cùng Thái Tuế: hạn xấu, có thể nguy."); }
        if (lasoData.tenCungDaiVan && (lasoData.chiNam === "Thìn" || lasoData.chiNam === "Tuất" || lasoData.chiNam === "Sửu" || lasoData.chiNam === "Mùi") && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)"))) { keyArr.push("Sách vận hạn 150 - Đại hạn - Hạn có Kình Dương, người tuổi Thìn, Tuất, Sửu, Mùi không sợ họa ương; gặp thêm Tử Vi, Văn Xương, Thi"); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối"))) { keyArr.push("Sách vận hạn 151 - Đại hạn - Hạn có Hỏa Tinh hãm địa: họa từ trên trời rơi xuống, hại họ hàng, phát tài cũng gian khổ."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false))) { keyArr.push("Sách vận hạn 152 - Đại hạn - Hạn có Linh Tinh gặp Tham Lang: phú quý nổi danh."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Không (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Không - ĐV)"))) { keyArr.push("Sách vận hạn 153 - Đại hạn - Thiên Không nhập hạn: phá hết của cải, hại vợ con, còn phải lo cả sự sống chết của bản thân."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false))) { keyArr.push("Sách vận hạn 154 - Đại hạn - Địa Kiếp nhập đại hạn hoặc tiểu hạn, thêm Thái Tuế: khó tránh nguy, nhiều chuyện lôi thôi."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tham Lang (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)", false)))) { keyArr.push("Sách vận hạn 155 - Đại hạn - Hóa Quyền gặp Vũ Khúc hoặc Tham Lang đáo hạn: làm việc gì cũng trót lọt, sĩ tử danh cao, người thườn"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Khoa") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false))) { keyArr.push("Sách vận hạn 156 - Đại hạn - Hóa Khoa gặp Văn Xương đáo hạn: kẻ sĩ đỗ đạt nổi danh, người thường phú quý, trăm việc đều thành."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)"))) { keyArr.push("Sách vận hạn 157 - Đại hạn - Hạn có Cự Môn đi cặp Hóa Kỵ: chủ thị phi, nhiều chuyện lôi thôi; nên tránh để Thân, Mệnh, vận hạn cù"); }
        if (lasoData.tenCungDaiVan && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Dậu") && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Tuế") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Hình") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)"))) { keyArr.push("Sách vận hạn 158 - Đại hạn - Hạn có Thái Tuế, Thiên Hình ở Dậu: vận hạn dễ gặp gông cùm, tù tội."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thất Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false)))) { keyArr.push("Sách vận hạn 159 - Đại hạn - Linh Tinh gặp Thất Sát hoặc Phá Quân nhập hạn: dễ vướng tù ngục, giam mình trong cảnh trói buộc."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false))) { keyArr.push("Sách vận hạn 160 - Đại hạn - Thái Dương nhập hạn gặp Cự Môn: thăng chức."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi")) { keyArr.push("Sách vận hạn 161 - Đại hạn - Thái Dương nhập hạn ở Tý hoặc Hợi gặp Hóa Kỵ, Thiên Hình: đau mắt nặng, cha gặp nạn lớn."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi")) { keyArr.push("Sách vận hạn 162 - Đại hạn - Liêm Trinh, Tham Lang ở Tỵ hoặc Hợi nhập hạn: bị tù hình; gặp Hóa Kỵ hoặc Tuần, Triệt thì giải được."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false))) { keyArr.push("Sách vận hạn 163 - Đại hạn - Thất Sát nhập hạn gặp Liêm Trinh, Hỏa Tinh: đề phòng cháy nhà."); }
        if (lasoData.tenCungDaiVan && lasoData.tenCungDaiVan === "Điền Trạch" && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false))) { keyArr.push("Sách vận hạn 164 - Đại hạn - Thất Sát, Liêm Trinh, Hỏa Tinh nhập hạn ở cung Điền Trạch: càng chắc chắn có nạn cháy nhà."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ")) { keyArr.push("Sách vận hạn 165 - Đại hạn - Thất Sát nhập hạn ở Ngọ gặp Kình Dương, Thiên Hình: dễ phải ở tù, rất nguy nếu thêm lục sát."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách")) { keyArr.push("Sách vận hạn 166 - Đại hạn - Thiên Cơ nhập hạn gặp Thiên Thương hoặc Thiên Sứ: đau ốm, tai nạn, đánh nhau."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sách vận hạn 167 - Đại hạn - Thiên Cơ nhập hạn gặp Khốc, Hỏa, Hình: trong nhà thiếu hòa khí."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sách vận hạn 168 - Đại hạn - Thiên Tướng nhập hạn gặp Thiên Hình, Địa Không hoặc Địa Kiếp: tối kỵ, dễ gặp tai họa, bệnh tật."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hư - ĐV)", false))) { keyArr.push("Sách vận hạn 170 - Đại hạn - Tang Môn gặp Thiên Mã, Thiên Khốc, Thiên Hư: hạn có tang."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quả Tú (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quả Tú - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hư (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hư - ĐV)", false))) { keyArr.push("Sách vận hạn 171 - Đại hạn - Tang Môn gặp Quả Tú, Thiên Khốc, Thiên Hư: hạn có tang."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)", false))) { keyArr.push("Sách vận hạn 172 - Đại hạn - Tang Môn gặp Bạch Hổ, Điếu Khách: hạn có tang."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Điếu Khách") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false))) { keyArr.push("Sách vận hạn 174 - Đại hạn - Điếu Khách gặp Tang Môn: thường có tang."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Điếu Khách") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false))) { keyArr.push("Sách vận hạn 175 - Đại hạn - Điếu Khách gặp Hỏa Tinh: tang nhỏ, tang xa."); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)")) && kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng"))) { keyArr.push("Sách vận hạn 176 - Đại hạn - Địa Kiếp đắc địa nhập hạn: bộc phát tài danh nhanh chóng, nhưng phải lâm bệnh nặng về phổi, mụn nhọt"); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)")) && kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối"))) { keyArr.push("Sách vận hạn 177 - Đại hạn - Địa Kiếp hãm địa nhập hạn: nhiều tai nguy; bệnh nặng thể xác lẫn tinh thần, mất chức, đổi chỗ vì kỷ "); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao sáng"))) { keyArr.push("Sách vận hạn 178 - Đại hạn - Linh Tinh đắc địa nhập hạn: hỷ sự về tiền bạc hoặc công danh đến nhanh chóng."); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối"))) { keyArr.push("Sách vận hạn 179 - Đại hạn - Linh Tinh hãm địa nhập hạn: có tang hoặc bệnh hoạn, bị kiện, mất của, truất quan; phòng đồ nóng; gặp"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỷ Thần") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Điếu Khách (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Điếu Khách - ĐV)", false))) { keyArr.push("Sách vận hạn 180 - Đại hạn - Hỷ Thần gặp Điếu Khách: sự may mắn bị suy giảm hay tiêu tán."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Ngọ")) { keyArr.push("Sách vận hạn 181 - Đại hạn - Kình Dương, Thiên Hình nhập hạn ở Ngọ: bị tù; có thể nguy đến tính mạng nếu gặp lục sát."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Quân (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)", false))) { keyArr.push("Sách vận hạn 182 - Đại hạn - Kình Dương gặp Vũ Khúc, Phá Quân: bị hại vì tiền bạc."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Nguyệt Đức", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Nguyệt Đức (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Nguyệt Đức - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false))) { keyArr.push("Sách vận hạn 183 - Đại hạn - Hạn gặp Nguyệt Đức, Đào Hoa, Hồng Loan: gặp giai nhân giúp đỡ nên tình duyên (có người làm mai mối n"); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phong Cáo", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phong Cáo (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phong Cáo - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quốc Ấn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quốc Ấn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quốc Ấn - ĐV)", false))) { keyArr.push("Sách vận hạn 185 - Đại hạn - Hạn gặp Long Trì, Phượng Các, Phong Cáo, Quốc Ấn: thi đỗ."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)", false))) { keyArr.push("Sách vận hạn 186 - Đại hạn - Hạn gặp Long Trì và Thiên Mã: có dời nhà cửa."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quan Phủ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quan Phủ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Quan Phủ - ĐV)"))) { keyArr.push("Sách vận hạn 187 - Đại hạn - Quan Phủ nhập hạn: có kiện tụng, cạnh tranh, cãi vã."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quan Phủ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quan Phủ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Quan Phủ - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)))) { keyArr.push("Sách vận hạn 188 - Đại hạn - Quan Phủ nhập hạn gặp Khôi hoặc Việt: thắng cuộc trong kiện tụng, cạnh tranh."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quan Phủ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Quan Phủ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Quan Phủ - ĐV)")) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Tuyệt")) { keyArr.push("Sách vận hạn 189 - Đại hạn - Quan Phủ nhập hạn ở cung có Tuyệt: thất bại trong kiện tụng, cạnh tranh."); }
        if (lasoData.tenCungDaiVan && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Thai") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thanh Long (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thanh Long - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false))) { keyArr.push("Sách vận hạn 190 - Đại hạn - Hạn có Thai gặp Thanh Long, Thiên Hỷ: có con đẹp."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Khốc - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false))) { keyArr.push("Sách vận hạn 192 - Đại hạn - Thiên Khốc nhập hạn gặp Tang Môn: có tang chế, hoặc gặp chuyện buồn thấm thía vì tang khó hay vì tìn"); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false))) { keyArr.push("Sách vận hạn 193 - Đại hạn - Hạn gặp Thiên Hỷ, Hồng Loan, Đào Hoa: có tình duyên, có người để ý."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false))) { keyArr.push("Sách vận hạn 195 - Đại hạn - Hạn gặp Song Hỷ, Đào, Hồng, Khôi, Việt: sinh quý tử."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Riêu") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)"))) { keyArr.push("Sách vận hạn 196 - Đại hạn - Thiên Riêu nhập đại hạn hoặc tiểu hạn: thời gian đó thường có nhân tình sâu đậm, ân ái mặn nồng; đươ"); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Xương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)", false)))) { keyArr.push("Sách vận hạn 197 - Đại hạn - Thiên Thương hoặc Thiên Sứ gặp Văn Xương hoặc Văn Khúc ở hạn: tác họa khủng khiếp, nguy hiểm nếu cả "); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false)))) { keyArr.push("Sách vận hạn 198 - Đại hạn - Thiên Thương hoặc Thiên Sứ gặp Kình, Hỏa, Riêu hoặc Cự: hại của, hại người."); }
        if (lasoData.tenCungDaiVan && lasoData.tenCungDaiVan === "Tật Ách") { keyArr.push("Sách vận hạn 199 - Đại hạn - Hạn đến cung Tật Ách (có Thiên Sứ): hay ốm đau."); }
        if (lasoData.tenCungDaiVan && lasoData.tenCungDaiVan === "Nô Bộc") { keyArr.push("Sách vận hạn 200 - Đại hạn - Hạn đến cung Nô Bộc (có Thiên Thương): hay rắc rối vì bạn bè."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false))) { keyArr.push("Sách vận hạn 201 - Đại hạn - Thiên Thương hoặc Thiên Sứ gặp Cơ hoặc Cự cùng Thiên Hình ở hạn: kiện tụng."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Thương", false) || lasoData.tenCungDaiVan === "Tật Ách") && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false))) { keyArr.push("Sách vận hạn 202 - Đại hạn - Thiên Thương hoặc Thiên Sứ gặp Tang Môn, Bạch Hổ ở hạn: có tang; tang xảy ra cho người thuộc cung đa"); }
        if (lasoData.tenCungDaiVan && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Tuyệt") && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)", false)))) { keyArr.push("Sách vận hạn 203 - Đại hạn - Hạn có Tuyệt gặp Đại Hao hoặc Tiểu Hao: hao tán tài sản."); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false)))) { keyArr.push("Sách vận hạn 204 - Đại hạn - Xương hoặc Khúc nhập hạn gặp Khoa, Khôi hoặc Việt: có học hành, thi cử và đỗ cao trong hạn đó."); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Xương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Xương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Văn Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Văn Khúc - ĐV)"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Khôi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Khôi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Việt (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Việt - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false))) { keyArr.push("Sách vận hạn 205 - Đại hạn - Xương hoặc Khúc nhập hạn gặp Khoa, Khôi hoặc Việt nhưng có Hóa Kỵ: có thể thi rớt."); }
        if (lasoData.tenCungDaiVan && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tử Vi (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)", false))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)", false))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Long Trì (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Long Trì - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phượng Các (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phượng Các - ĐV)", false))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tả Phù (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tả Phù - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hữu Bật (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hữu Bật - ĐV)", false)))) { keyArr.push("Sách vận hạn 206 - Đại hạn - Đại hạn hoặc tiểu hạn có Tử, Phủ, Vũ hoặc Tướng, gặp Lộc, Long hoặc Phượng, Tả hoặc Hữu: nhất định p"); }
        if (lasoData.tenCungDaiVan && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Âm", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Âm (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Đồng", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Cự Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Quyền (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Quyền - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false))) { keyArr.push("Sách vận hạn 207 - Đại hạn - Đại hạn hoặc tiểu hạn có Nguyệt, Đồng, Cơ hoặc Cự gặp đủ Khoa, Quyền, Lộc: thăng quan hoặc đỗ đạt lớ"); }
        if (lasoData.tenCungDaiVan && (((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) && kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungDaiVan)) === "sao tối")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quan Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Quan Phủ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Quan Phủ - ĐV)", false))) { keyArr.push("Sách vận hạn 208 - Đại hạn - Thất Sát hãm địa nhập hạn, thêm Hình, Hổ, Quan Phủ: dễ vướng vòng lao lý."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đà La") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đà La (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Đà La - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kiếp Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kiếp Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kiếp Sát - ĐV)", false)))) { keyArr.push("Sách vận hạn 210 - Đại hạn - Hạn có Đà La gặp Thái Tuế cùng Tang, Hổ, Kỵ hoặc Kiếp Sát: có tang, nếu không thì hay đánh nhau thươ"); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Văn Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Văn Tinh - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Khoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Khoa - ĐV)", false))) { keyArr.push("Sách vận hạn 211 - Đại hạn - Hạn gặp Văn Tinh có Hóa Khoa: thi tất đỗ, công danh hưng vượng."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)")) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) && isTrangSinhTaiCung(lasoData.tenCungDaiVan, "Thai")) { keyArr.push("Sách vận hạn 212 - Đại hạn - Hạn có Tang, Hổ, Kỵ và Thai: dễ băng huyết khi sinh nở."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)")) && (phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungDaiVan) === "Hợi")) { keyArr.push("Sách vận hạn 213 - Đại hạn - Hạn đến Tỵ hoặc Hợi có Liêm Trinh, Tham Lang: họa ách đến từ Liêm Tham làm suy giảm mệnh số, hao tán"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Tuế") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)"))) { keyArr.push("Sách vận hạn 214 - Đại hạn - Hạn Thái Tuế: phải đắc ý (theo quan niệm tam hợp Thái Tuế của sách)."); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Tuế") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Tuế (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Tuế - ĐV)")) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)))) { keyArr.push("Sách vận hạn 215 - Đại hạn - Thái Tuế gặp Không hoặc Kiếp: lên dễ mà xuống cũng dễ."); }
        if (lasoData.tenCungDaiVan && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đào Hoa (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đào Hoa - ĐV)", false)) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hồng Loan (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hồng Loan - ĐV)", false)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hỷ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hỷ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỷ Thần (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỷ Thần - ĐV)", false)))) { keyArr.push("Sách vận hạn 216 - Đại hạn - Hạn gặp Đào, Hồng, Hỷ: báo hiệu tin vui sắp đến."); }
        if (lasoData.tenCungDaiVan && isCungCoTuan(lasoData.tenCungDaiVan) && phu17DemCatTinh(lasoData.tenCungDaiVan) > 2) { keyArr.push("Sách vận hạn 217 - Đại hạn - Hạn đến cung có Tuần án ngữ mà cung có nhiều sao sáng sủa tốt đẹp (từ 3 cát tinh): hạn trở nên xấu x"); }
        if (lasoData.tenCungDaiVan && isCungCoTuan(lasoData.tenCungDaiVan) && phu17DemSatTinh(lasoData.tenCungDaiVan) > 1) { keyArr.push("Sách vận hạn 218 - Đại hạn - Hạn đến cung có Tuần án ngữ mà cung có nhiều sao mờ ám xấu xa (từ 2 sát tinh): hạn lại sáng sủa tốt "); }
        if (lasoData.tenCungDaiVan && isCungCoTriet(lasoData.tenCungDaiVan) && phu17DemCatTinh(lasoData.tenCungDaiVan) > 2) { keyArr.push("Sách vận hạn 219 - Đại hạn - Hạn đến cung có Triệt án ngữ mà cung có nhiều sao sáng sủa tốt đẹp (từ 3 cát tinh): hạn xấu xa mờ ám"); }
        if (lasoData.tenCungDaiVan && isCungCoTriet(lasoData.tenCungDaiVan) && phu17DemSatTinh(lasoData.tenCungDaiVan) > 1) { keyArr.push("Sách vận hạn 220 - Đại hạn - Hạn đến cung có Triệt án ngữ mà cung có nhiều sao mờ ám xấu xa (từ 2 sát tinh): hạn sáng sủa tốt đẹp"); }
        if (lasoData.tenCungDaiVan && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan)) && phu17DemSatTinh(lasoData.tenCungDaiVan) > 0) { keyArr.push("Sách vận hạn 221 - Đại hạn - Đại hạn đến cung có Tuần hoặc Triệt án ngữ mà cung có sát tinh: Tuần Triệt vẫn chặn, sao xấu trong c"); }
        if (lasoData.tenCungDaiVan && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan)) && phu17DemCatTinh(lasoData.tenCungDaiVan) > 0) { keyArr.push("Sách vận hạn 222 - Đại hạn - Đại hạn đến cung có Tuần hoặc Triệt án ngữ mà cung có cát tinh: Tuần Triệt vẫn chặn, sao tốt trong c"); }
        if (lasoData.tenCungDaiVan && (isCungCoTuan(lasoData.tenCungDaiVan) || isCungCoTriet(lasoData.tenCungDaiVan)) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Âm", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thái Âm (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)", false)))) { keyArr.push("Sách vận hạn 223 - Đại hạn - Đại hạn đến cung có Tuần hoặc Triệt án ngữ: chỉ Nhật hoặc Nguyệt hội chiếu là xuyên qua được Tuần Tr"); }
        if (lasoData.tenCungDaiVan && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)")) && phu17DemKhong(lasoData.tenCungDaiVan, 0) > 2) { keyArr.push("Sách vận hạn 224 - Đại hạn - Thiên Phủ nhập hạn gặp Tam Không (ba trong bốn Không: Tuần, Triệt, Thiên Không, Địa Không): phá sản,"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tử Vi (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tử Vi - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Phủ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Phủ - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Vũ Khúc (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Vũ Khúc - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Tướng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Tướng - ĐV)"))) && phu17DemKhong(lasoData.tenCungDaiVan, 0) > 2 && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Riêu (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Riêu - ĐV)", false)))) { keyArr.push("Sách vận hạn 225 - Đại hạn - Tử Vi, Thiên Phủ, Vũ Khúc hoặc Thiên Tướng nhập hạn gặp Tam Không cùng Kiếp, Kỵ, Hình, Đà (hoặc Linh"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thất Sát - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Phá Quân (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Phá Quân - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Liêm Trinh (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Liêm Trinh - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tham Lang (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Tham Lang - ĐV)"))) && phu17DemKhong(lasoData.tenCungDaiVan, 0) > 1 && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Kỵ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Kỵ - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đại Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đại Hao - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tiểu Hao (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tiểu Hao - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Hình (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Hình - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phục Binh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phục Binh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Tang Môn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Tang Môn - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Bạch Hổ (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Bạch Hổ - ĐV)", false)))) { keyArr.push("Sách vận hạn 226 - Đại hạn - Sát, Phá, Liêm hoặc Tham nhập hạn gặp nhị hay tam Không cùng Linh, Hỏa, Kình, Kỵ (hoặc Hao, Hình, Ph"); }
        if (lasoData.tenCungDaiVan && ((isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Cơ (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Cơ - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Âm (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Âm - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Đồng (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Đồng - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Lương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thiên Lương - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Cự Môn (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Cự Môn - ĐV)")) || (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thái Dương (ĐV)") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "(Thái Dương - ĐV)"))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Toái", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Phá Toái (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Phá Toái - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kiếp Sát", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kiếp Sát (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kiếp Sát - ĐV)", false)))) { keyArr.push("Sách vận hạn 227 - Đại hạn - Cơ, Nguyệt, Đồng, Lương hoặc Cự, Nhật nhập hạn gặp Kình, Đà, Không, Kiếp, Phá Toái hoặc Kiếp Sát: dễ"); }
        if (lasoData.tenCungDaiVan && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Kình Dương (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Kình Dương - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Đà La (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Đà La - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Không (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Không - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Địa Kiếp (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Địa Kiếp - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hỏa Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hỏa Tinh - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Linh Tinh (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Linh Tinh - ĐV)", false))) && ((isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Hóa Lộc (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Hóa Lộc - ĐV)", false)) || (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Lộc Tồn (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Lộc Tồn - ĐV)", false))) && (isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "Thiên Mã (ĐV)", false) || isSaoHoiChieuRong(lasoData.tenCungDaiVan, "(Thiên Mã - ĐV)", false)) && phu17DemKhong(lasoData.tenCungDaiVan, 0) > 2) { keyArr.push("Sách vận hạn 228 - Đại hạn - Hạn gặp sát tinh, Lộc, Mã hội hợp và bị Tam Không xâm phạm: thuộc vận loại \"Lộc xung Mã khổn\" (Lộc, "); }
    }
    if (loai === "tieu") {
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Tý") && (phu17ChiNamXem(lasoData) === "Dần" || phu17ChiNamXem(lasoData) === "Thân" || phu17ChiNamXem(lasoData) === "Tý" || phu17ChiNamXem(lasoData) === "Ngọ")) { keyArr.push("Sách vận hạn 01 - Tiểu hạn - Tuổi Tý gặp năm xem hạn thuộc Dần/Thân/Tý/Ngọ là năm kỵ: dễ gặp việc không như ý, phiền toái, trắc t"); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Dần") && (phu17ChiNamXem(lasoData) === "Dần" || phu17ChiNamXem(lasoData) === "Thân" || phu17ChiNamXem(lasoData) === "Tỵ" || phu17ChiNamXem(lasoData) === "Hợi")) { keyArr.push("Sách vận hạn 02 - Tiểu hạn - Tuổi Dần gặp năm xem hạn thuộc Dần/Thân/Tỵ/Hợi là năm kỵ: dễ gặp việc không như ý, phiền toái, trắc "); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Mão") && (phu17ChiNamXem(lasoData) === "Mão" || phu17ChiNamXem(lasoData) === "Dậu" || phu17ChiNamXem(lasoData) === "Tỵ" || phu17ChiNamXem(lasoData) === "Hợi")) { keyArr.push("Sách vận hạn 03 - Tiểu hạn - Tuổi Mão gặp năm xem hạn thuộc Mão/Dậu/Tỵ/Hợi là năm kỵ: dễ gặp việc không như ý, phiền toái, trắc t"); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Tý") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ") && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát"))) { keyArr.push("Sách vận hạn 04 - Tiểu hạn - Tuổi Tý, hạn đến cung Sửu hoặc Ngọ có Thất Sát tọa thủ: rất đáng lo ngại; các tuổi khác gặp trường h"); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Thìn") && ((phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất") || lasoData.tenCungTieuHan === lasoData.cungCu)) { keyArr.push("Sách vận hạn 05 - Tiểu hạn - Tuổi Thìn, hạn đến cung Thìn, cung Tuất hoặc cung an Thân: rất kỵ khi tiểu hạn hoặc lưu niên đại hạn"); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Tỵ") && ((phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ") || lasoData.tenCungTieuHan === lasoData.cungCu)) { keyArr.push("Sách vận hạn 06 - Tiểu hạn - Tuổi Tỵ, hạn đến cung Tỵ hoặc cung an Thân: rất kỵ khi tiểu hạn hoặc lưu niên đại hạn đến các cung n"); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Mùi") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi")) { keyArr.push("Sách vận hạn 07 - Tiểu hạn - Tuổi Mùi, hạn đến cung Dậu hoặc Hợi: rất kỵ khi tiểu hạn hoặc lưu niên đại hạn đến các cung này."); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Mùi") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi") && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Kình Dương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đà La") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đà La")))) { keyArr.push("Sách vận hạn 08 - Tiểu hạn - Tuổi Mùi, hạn đến cung Dậu hoặc Hợi có Kình Dương, Đà La (kể cả lưu) nhập hạn: tối kỵ."); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Thân") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sách vận hạn 09 - Tiểu hạn - Tuổi Thân, hạn gặp Hỏa Tinh, Linh Tinh: rất kỵ khi tiểu hạn hoặc lưu niên đại hạn đến sao này nhập h"); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Dậu") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sách vận hạn 10 - Tiểu hạn - Tuổi Dậu, hạn gặp Kình Dương, Đà La (kể cả lưu): rất kỵ khi tiểu hạn hoặc lưu niên đại hạn đến sao n"); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Tuất") && ((phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn") || lasoData.tenCungTieuHan === lasoData.cungCu)) { keyArr.push("Sách vận hạn 11 - Tiểu hạn - Tuổi Tuất, hạn đến cung Tỵ, Thìn, Tuất hoặc cung an Thân: rất kỵ khi tiểu hạn hoặc lưu niên đại hạn "); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Hợi") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sách vận hạn 12 - Tiểu hạn - Tuổi Hợi, hạn gặp Kình Dương, Đà La (kể cả lưu): rất kỵ khi tiểu hạn hoặc lưu niên đại hạn đến sao n"); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "G.") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách")) { keyArr.push("Sách vận hạn 13 - Tiểu hạn - Tuổi Giáp, hạn gặp Thiên Thương hoặc Thiên Sứ: rất kỵ."); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "G.") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sách vận hạn 14 - Tiểu hạn - Tuổi Giáp, hạn gặp Thiên Thương hoặc Thiên Sứ cùng Thái Tuế (hoặc Lưu Thái Tuế): hạn cực xấu."); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "C.") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách" || ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false))))) { keyArr.push("Sách vận hạn 15 - Tiểu hạn - Tuổi Canh, hạn gặp Thiên Thương, Thiên Sứ, Linh Tinh hoặc Hỏa Tinh: rất kỵ."); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "C.") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách" || ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sách vận hạn 16 - Tiểu hạn - Tuổi Canh, hạn gặp Thiên Thương, Thiên Sứ, Linh Tinh hoặc Hỏa Tinh cùng Thái Tuế (hoặc Lưu Thái Tuế)"); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Thủy" && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần")) { keyArr.push("Sách vận hạn 17 - Tiểu hạn - Hành Mệnh Thủy, Thủy Nhị Cục, tiểu hạn đến Sửu hoặc Dần: hạn lâm chỗ bế tắc, tiến thoái lưỡng nan, m"); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Mộc" && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ")) { keyArr.push("Sách vận hạn 18 - Tiểu hạn - Hành Mệnh Mộc, Mộc Tam Cục, tiểu hạn đến Ngọ: hạn thành công nhanh nhưng không bền, cuối hạn dễ gặp "); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Kim" && lasoData.cucSo === 4 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý")) { keyArr.push("Sách vận hạn 19 - Tiểu hạn - Hành Mệnh Kim, Kim Tứ Cục, tiểu hạn đến Tý: hạn nhiều biến động ngoài dự tính, bản thân lao tổn, nhọ"); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Thổ" && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ")) { keyArr.push("Sách vận hạn 20 - Tiểu hạn - Hành Mệnh Thổ, Thổ Ngũ Cục, tiểu hạn đến Mão, Thìn hoặc Tỵ: thời vận suy ngược, nhiều tai nạn bất ng"); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Hỏa" && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu")) { keyArr.push("Sách vận hạn 21 - Tiểu hạn - Hành Mệnh Hỏa, Hỏa Lục Cục, tiểu hạn đến Dậu: thời vận xoay chuyển, khó bền, gặp nguy nan, bế tắc, p"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu")) { keyArr.push("Sách vận hạn 22 - Tiểu hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) sinh cục: thời vận tốt, hoàn cảnh chiều đãi,"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn")) { keyArr.push("Sách vận hạn 23 - Tiểu hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) cùng hành: thời vận bình hòa, thong dong,"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi")) { keyArr.push("Sách vận hạn 24 - Tiểu hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) bị cục sinh ra (tiết khí): vận mạng thay đổ"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất")) { keyArr.push("Sách vận hạn 25 - Tiểu hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) bị cục khắc: thời vận phải tranh đấu, hay "); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu")) { keyArr.push("Sách vận hạn 26 - Tiểu hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) khắc cục: bị khắc chế, hoàn cảnh không thuận "); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn")) { keyArr.push("Sách vận hạn 27 - Tiểu hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) sinh cục: thời vận tốt, dễ có công danh sự"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi")) { keyArr.push("Sách vận hạn 28 - Tiểu hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) cùng hành: thời vận trung bình, thong dong, "); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất")) { keyArr.push("Sách vận hạn 29 - Tiểu hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) bị cục sinh ra (tiết khí): lao nhọc, bỏ sức"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 4 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu")) { keyArr.push("Sách vận hạn 30 - Tiểu hạn - Cục Kim Tứ, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) cùng hành: thời vận trung bình, thong dong, dễ"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 4 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn")) { keyArr.push("Sách vận hạn 31 - Tiểu hạn - Cục Kim Tứ, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) bị cục sinh ra (tiết khí): có thành công cũ"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 4 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi")) { keyArr.push("Sách vận hạn 32 - Tiểu hạn - Cục Kim Tứ, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) bị cục khắc: làm gì dù tốt cũng gặp trở ngại "); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu")) { keyArr.push("Sách vận hạn 33 - Tiểu hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) bị cục sinh ra (tiết khí): phải uốn theo hoàn"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn")) { keyArr.push("Sách vận hạn 34 - Tiểu hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) bị cục khắc: bắt tay làm việc hay gặp trở "); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi")) { keyArr.push("Sách vận hạn 35 - Tiểu hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) khắc cục: thời vận bị khắc chế, công danh nh"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 5 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất")) { keyArr.push("Sách vận hạn 36 - Tiểu hạn - Cục Thổ Ngũ, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) sinh cục: thời vận tốt, nhiều cơ hội tiến t"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu")) { keyArr.push("Sách vận hạn 37 - Tiểu hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Kim (Tỵ, Dậu, Sửu) bị cục khắc: thời vận hay gặp trở lực lúc đầu"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn")) { keyArr.push("Sách vận hạn 38 - Tiểu hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Thủy (Thân, Tý, Thìn) khắc cục: bị khắc chế, thành bại thất thườ"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mão" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi")) { keyArr.push("Sách vận hạn 39 - Tiểu hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Mộc (Hợi, Mão, Mùi) sinh cục: thời vận tốt, hoàn cảnh tốt, hạn đ"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 6 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất")) { keyArr.push("Sách vận hạn 40 - Tiểu hạn - Cục Hỏa Lục, cung hạn thuộc tam hợp Hỏa (Dần, Ngọ, Tuất) cùng hành: thời vận thong dong, yên bình; g"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 2 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cô Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cô Thần", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quả Tú", false)))) { keyArr.push("Sách vận hạn 41 - Tiểu hạn - Cục Thủy Nhị, cung hạn thuộc tam hợp Kim gặp Thái Tuế, Thiên Hình, Cô Thần hoặc Quả Tú: cẩn trọng ta"); }
        if (lasoData.tenCungTieuHan && lasoData.cucSo === 3 && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)))) { keyArr.push("Sách vận hạn 42 - Tiểu hạn - Cục Mộc Tam, cung hạn thuộc tam hợp Hỏa gặp thêm Linh hoặc Hỏa: dễ gặp tai nạn bất kỳ."); }
        if (lasoData.tenCungTieuHan && (phu17CoSaoSang("Mệnh", ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"]) || phu17CoSaoSang(lasoData.cungCu, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) && phu17CoSaoSang(lasoData.tenCungTieuHan, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) { keyArr.push("Sách vận hạn 43 - Tiểu hạn - Mệnh/Thân có các bộ sao Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đồng Lương sáng sủa, hạn cũng gặp các bộ"); }
        if (lasoData.tenCungTieuHan && (phu17CoSaoSang("Mệnh", ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"]) || phu17CoSaoSang(lasoData.cungCu, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) && phu17CoSaoSang(lasoData.tenCungTieuHan, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) { keyArr.push("Sách vận hạn 44 - Tiểu hạn - Mệnh/Thân có Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đồng Lương sáng sủa, hạn gặp Sát Phá Liêm Tham hoặc"); }
        if (lasoData.tenCungTieuHan && (phu17CoSaoSang("Mệnh", ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"]) || phu17CoSaoSang(lasoData.cungCu, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) && phu17CoSaoSang(lasoData.tenCungTieuHan, ["Vũ Khúc", "Thiên Tướng"])) { keyArr.push("Sách vận hạn 45 - Tiểu hạn - Mệnh/Thân có Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đồng Lương sáng sủa, hạn gặp Vũ Khúc hoặc Thiên Tướ"); }
        if (lasoData.tenCungTieuHan && (phu17CoSaoSang("Mệnh", ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"]) || phu17CoSaoSang(lasoData.cungCu, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) && phu17CoSaoSang(lasoData.tenCungTieuHan, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) { keyArr.push("Sách vận hạn 46 - Tiểu hạn - Mệnh/Thân có Sát Phá Liêm Tham hoặc sát tinh sáng sủa, hạn cũng gặp nhóm này sáng sủa: mọi việc hanh"); }
        if (lasoData.tenCungTieuHan && (phu17CoSaoSang("Mệnh", ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"]) || phu17CoSaoSang(lasoData.cungCu, ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) && phu17CoSaoSang(lasoData.tenCungTieuHan, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"])) { keyArr.push("Sách vận hạn 47 - Tiểu hạn - Mệnh/Thân có Sát Phá Liêm Tham hoặc sát tinh sáng sủa, hạn gặp Tử Phủ Vũ Tướng, Cự Nhật, Cơ Nguyệt Đ"); }
        if (lasoData.tenCungTieuHan && (phu17CoSaoSang("Mệnh", ["Vũ Khúc", "Thiên Tướng"]) || phu17CoSaoSang(lasoData.cungCu, ["Vũ Khúc", "Thiên Tướng"])) && phu17CoSaoSang(lasoData.tenCungTieuHan, ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương", "Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"])) { keyArr.push("Sách vận hạn 48 - Tiểu hạn - Mệnh/Thân có Vũ Khúc hoặc Thiên Tướng sáng sủa, hạn gặp các bộ sao chính sáng sủa: thành công trong "); }
        if (lasoData.tenCungTieuHan && laCungVoChinhDieu("Mệnh") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Liêm Trinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)))) { keyArr.push("Sách vận hạn 49 - Tiểu hạn - Mệnh vô chính diệu, hạn gặp Sát, Phá, Liêm, Tham (sáng hay tối): mưu việc gì cũng trước khó sau mới "); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Cự Môn") || isSaoToaThuTaiCung(lasoData.cungCu, "Cự Môn")) || (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.cungCu, "Hóa Kỵ"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quan Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quan Phù", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quan Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quan Phủ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bệnh Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bệnh Phù", false)))) { keyArr.push("Sách vận hạn 50 - Tiểu hạn - Mệnh/Thân có Cự Môn hoặc Hóa Kỵ tọa thủ, hạn gặp Thái Tuế, Đà La, Quan Phù, Quan Phủ hoặc Bệnh Phù: "); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sách vận hạn 51 - Tiểu hạn - Mệnh/Thân có Thất Sát, hạn gặp Kình Dương hoặc Đà La: dễ gặp tai nạn, tai biến, thiên tai bất ngờ gâ"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Hình") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Hình")) || (isSaoToaThuTaiCung("Mệnh", "Linh Tinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Linh Tinh"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sách vận hạn 52 - Tiểu hạn - Mệnh/Thân có Thất Sát, Thiên Hình hoặc Linh Tinh tọa thủ, hạn gặp Bạch Hổ: dễ bị tù tội, tai nạn có "); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung("Mệnh", "Tham Lang") || isSaoToaThuTaiCung(lasoData.cungCu, "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đại Hao", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tiểu Hao", false)))) { keyArr.push("Sách vận hạn 53 - Tiểu hạn - Mệnh/Thân có Tham Lang, hạn gặp Đại Hao hoặc Tiểu Hao: khó giữ của cải, túng thiếu."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung("Mệnh", "Tham Lang") || isSaoToaThuTaiCung(lasoData.cungCu, "Tham Lang")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false))) { keyArr.push("Sách vận hạn 54 - Tiểu hạn - Mệnh/Thân có Tham Lang, hạn gặp Hóa Lộc: tiền tài phong túc."); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Không")) || (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Kiếp"))) && (isCungCoTuan(lasoData.tenCungTieuHan) || isCungCoTriet(lasoData.tenCungTieuHan))) { keyArr.push("Sách vận hạn 55 - Tiểu hạn - Mệnh/Thân có Địa Không hoặc Địa Kiếp, hạn bị Tuần hoặc Triệt dù có sao tốt hội: mưu việc gì cũng trắ"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Không")) || (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Kiếp"))) && lasoData.tenCungTieuHan === "Mệnh") { keyArr.push("Sách vận hạn 56 - Tiểu hạn - Mệnh/Thân có Địa Không hoặc Địa Kiếp, hạn đến cung Mệnh: sự nghiệp đổ vỡ, tính mạng khó bảo toàn."); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Đại Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Đại Hao")) || (isSaoToaThuTaiCung("Mệnh", "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Tiểu Hao"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false)))) { keyArr.push("Sách vận hạn 57 - Tiểu hạn - Mệnh/Thân có Đại Hao hoặc Tiểu Hao, hạn gặp Lộc Tồn hoặc Hóa Lộc: phát tài, có việc làm, thăng chức,"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Đại Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Đại Hao")) || (isSaoToaThuTaiCung("Mệnh", "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.cungCu, "Tiểu Hao"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)))) { keyArr.push("Sách vận hạn 58 - Tiểu hạn - Mệnh/Thân có Đại Hao hoặc Tiểu Hao, hạn gặp Kình, Đà, Không, Kiếp, Kỵ, Linh hoặc Hỏa: tài lộc có bao"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Hỏa Tinh")) || (isSaoToaThuTaiCung("Mệnh", "Linh Tinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Linh Tinh"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách")) { keyArr.push("Sách vận hạn 59 - Tiểu hạn - Mệnh/Thân có Hỏa hoặc Linh, hạn gặp Địa Kiếp hoặc Địa Không cùng Thiên Thương hoặc Thiên Sứ: tán tài"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt"))) && (lasoData.tenCungTieuHan === "Mệnh" || lasoData.tenCungTieuHan === lasoData.cungCu)) { keyArr.push("Sách vận hạn 60 - Tiểu hạn - Mệnh/Thân có Thiên Khôi hoặc Thiên Việt, hạn đến cung Mệnh hoặc cung an Thân: gặp quý nhân, thăng qu"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Tướng Quân") || isSaoToaThuTaiCung(lasoData.cungCu, "Tướng Quân")) || (isSaoToaThuTaiCung("Mệnh", "Hoa Cái") || isSaoToaThuTaiCung(lasoData.cungCu, "Hoa Cái")) || (isSaoToaThuTaiCung("Mệnh", "Đào Hoa") || isSaoToaThuTaiCung(lasoData.cungCu, "Đào Hoa")) || (isSaoToaThuTaiCung("Mệnh", "Văn Khúc") || isSaoToaThuTaiCung(lasoData.cungCu, "Văn Khúc"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Cơ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Riêu", false)))) { keyArr.push("Sách vận hạn 61 - Tiểu hạn - Mệnh/Thân có Tướng Quân, Hoa Cái, Đào Hoa hoặc Văn Khúc, hạn gặp Thiên Cơ hoặc Thiên Riêu: hạn nhiều"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Phá Quân") || isSaoToaThuTaiCung(lasoData.cungCu, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.cungCu, "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Võng", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Võng", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phục Binh", false)))) { keyArr.push("Sách vận hạn 62 - Tiểu hạn - Cung an Thân có Sát, Phá, Liêm, Tham, hạn gặp Địa Võng, Thiên Hình, Thiên Khôi, Hóa Kỵ, Đào Hoa hoặc"); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "G." || lasoData.canNam === "K.") && ((isSaoToaThuTaiCung("Mệnh", "Tử Vi") || isSaoToaThuTaiCung(lasoData.cungCu, "Tử Vi")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Phủ")) || (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.cungCu, "Vũ Khúc")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Tướng"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tấu Thư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tấu Thư", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)))) { keyArr.push("Sách vận hạn 63 - Tiểu hạn - Tuổi Giáp hoặc Kỷ, Mệnh có Tử, Phủ, Vũ, Tướng, hạn gặp Hồng Loan, Văn Xương, Tấu Thư hoặc Kình Dương"); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "K.") && ((isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Cơ")) || (isSaoToaThuTaiCung("Mệnh", "Thái Âm") || isSaoToaThuTaiCung(lasoData.cungCu, "Thái Âm")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Đồng")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Lương"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Liêm Trinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false)))) { keyArr.push("Sách vận hạn 64 - Tiểu hạn - Tuổi Kỷ, Mệnh có Cơ, Nguyệt, Đồng, Lương, hạn gặp Sát, Phá, Liêm, Tham, Tả hoặc Hữu: công danh sớm t"); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "M." || lasoData.canNam === "C.") && (phu17ChiCung(lasoData, "Mệnh") === "Thìn" || phu17ChiCung(lasoData, "Mệnh") === "Tuất") && (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") || isSaoToaThuTaiCung("Mệnh", "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sách vận hạn 65 - Tiểu hạn - Tuổi Mậu hoặc Canh, Mệnh ở Thìn hoặc Tuất có Vũ Khúc hay Tham Lang tọa thủ, hạn gặp Kình Dương, Đà L"); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "M." || lasoData.canNam === "C.") && (phu17ChiCung(lasoData, "Mệnh") === "Thìn" || phu17ChiCung(lasoData, "Mệnh") === "Tuất") && (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") || isSaoToaThuTaiCung("Mệnh", "Tham Lang")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false))) && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Mệnh", "Địa Kiếp"))) { keyArr.push("Sách vận hạn 66 - Tiểu hạn - Tuổi Mậu hoặc Canh, Mệnh ở Thìn hoặc Tuất có Vũ Khúc hay Tham Lang cùng Địa Không hoặc Địa Kiếp, hạn"); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "T." || lasoData.canNam === "Đ.") && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sách vận hạn 67 - Tiểu hạn - Tuổi Tân hoặc Đinh, hạn đến cung Thìn hoặc Tuất gặp sát tinh: cẩn trọng về pháp luật, kiện tụng."); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "T." || lasoData.canNam === "Đ.") && lasoData.tenCungTieuHan === "Mệnh") { keyArr.push("Sách vận hạn 68 - Tiểu hạn - Tuổi Tân hoặc Đinh, hạn đến cung Mệnh: mưu sự khó thành như ý, phải bỏ nhiều công sức mới thành công"); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "T." || lasoData.canNam === "Đ.") && lasoData.tenCungTieuHan === "Mệnh" && (isSaoToaThuTaiCung("Mệnh", "Địa Không") || isSaoToaThuTaiCung("Mệnh", "Địa Kiếp"))) { keyArr.push("Sách vận hạn 69 - Tiểu hạn - Tuổi Tân hoặc Đinh, hạn đến cung Mệnh mà Mệnh có Địa Không hoặc Địa Kiếp tọa thủ: hạn rất xấu, mọi v"); }
        if (lasoData.tenCungTieuHan && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false))) && ((isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (phu17ChiCung(lasoData, "Mệnh") === "Sửu" || phu17ChiCung(lasoData, "Mệnh") === "Mùi")) || (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && phu17ChiCung(lasoData, "Mệnh") === "Ngọ"))) { keyArr.push("Sách vận hạn 70 - Tiểu hạn - Hạn đến Thìn, Tuất, Sửu hoặc Mùi có Tả Phù, Hữu Bật, đối với Mệnh ở Sửu/Mùi có Tử Vi, Phá Quân đồng "); }
        if (lasoData.tenCungTieuHan && lasoData.amduong === "Âm Nam" && (lasoData.canNam === "Ấ." || lasoData.canNam === "K.") && (phu17ChiCung(lasoData, "Mệnh") === "Sửu" || phu17ChiCung(lasoData, "Mệnh") === "Mùi") && isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Tràng Sinh")) { keyArr.push("Sách vận hạn 71 - Tiểu hạn - Tuổi Ất hoặc Kỷ, Âm Nam, Mệnh ở Sửu hoặc Mùi có Liêm Trinh, Thất Sát đồng cung, hạn gặp Hóa Khoa và "); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lực Sĩ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lực Sĩ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tướng Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tướng Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thanh Long", false))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Ân Quang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Ân Quang", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Quý", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Quý", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỷ Thần", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phượng Các", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tam Thai", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tam Thai", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bát Tọa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bát Tọa", false)))) { keyArr.push("Sách vận hạn 72 - Tiểu hạn - Đại hạn hoặc tiểu hạn đến cung có Lực Sĩ, Tướng Quân hoặc Thanh Long, lại có thêm cát tinh nâng đỡ ("); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bác Sĩ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bác Sĩ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false))) { keyArr.push("Sách vận hạn 73 - Tiểu hạn - Hạn gặp Bác Sĩ cùng Văn Xương, Văn Khúc, Hóa Khoa: thi đỗ cao."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã"))) { keyArr.push("Sách vận hạn 74 - Tiểu hạn - Hạn đến sao Dịch Mã: có người muốn đẩy mình đi nơi khác."); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Giải") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Giải")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Giải Thần") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Giải Thần")))) { keyArr.push("Sách vận hạn 75 - Tiểu hạn - Hạn gặp Thiên Giải hoặc Giải Thần: như cá thoát lưới, có nguy cũng hóa vô can."); }
        if (lasoData.tenCungTieuHan && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Lâm Quan") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sách vận hạn 76 - Tiểu hạn - Hạn có Lâm Quan gặp Thái Tuế, Địa Không hoặc Địa Kiếp: phải chịu luồn cúi, làm thân dưới mới tiến th"); }
        if (lasoData.tenCungTieuHan && phu17CungTamHop(phu17ChiCung(lasoData, lasoData.tenCungDaiVan), phu17ChiCung(lasoData, lasoData.tenCungTieuHan))) { keyArr.push("Sách vận hạn 77 - Tiểu hạn - Đại hạn và tiểu hạn đồng cung hoặc cùng tam hợp (nhị trùng): cát hung của hạn gia tăng hoặc giảm bớt"); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Hỏa" && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi")) { keyArr.push("Sách vận hạn 78 - Tiểu hạn - Mệnh hành Hỏa, hạn đến cung Tuất hoặc Hợi: có tai họa (khẩu quyết \"Hỏa hành Tuất, Hợi\")."); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Thủy" && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ")) { keyArr.push("Sách vận hạn 79 - Tiểu hạn - Mệnh hành Thủy, hạn đến cung Thìn hoặc Tỵ: hạn buồn, dễ gặp điều không hay (khẩu quyết \"Thủy, Thổ Lo"); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Thổ" && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ")) { keyArr.push("Sách vận hạn 80 - Tiểu hạn - Mệnh hành Thổ, hạn đến cung Thìn hoặc Tỵ: hạn buồn, dễ gặp điều không hay (khẩu quyết \"Thủy, Thổ Lon"); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Kim" && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần")) { keyArr.push("Sách vận hạn 81 - Tiểu hạn - Mệnh hành Kim, hạn đến cung Sửu hoặc Dần: có hại (khẩu quyết \"Kim ngộ Sửu, Dần\")."); }
        if (lasoData.tenCungTieuHan && lasoData.hanhMenh === "Mộc" && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu")) { keyArr.push("Sách vận hạn 82 - Tiểu hạn - Mệnh hành Mộc, hạn đến cung Thân hoặc Dậu: không hay (khẩu quyết \"Mộc hành Thân, Dậu\")."); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "G.") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sách vận hạn 83 - Tiểu hạn - Tuổi Giáp, hạn gặp Kình Dương hoặc Đà La: thân không yên."); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Dậu") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false))) { keyArr.push("Sách vận hạn 84 - Tiểu hạn - Tuổi Dậu, hạn gặp cả Kình Dương lẫn Đà La: xấu lắm."); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Thương", false)))) { keyArr.push("Sách vận hạn 85 - Tiểu hạn - Hạn gặp Thất Sát, Kình Dương, Đà La, Địa Kiếp, Địa Không hoặc Thiên Thương: sẽ chịu hình thương."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false))) { keyArr.push("Sách vận hạn 86 - Tiểu hạn - Năm hạn gặp Thiên Khốc và Tang Môn: coi chừng tai họa."); }
        if (lasoData.tenCungTieuHan && phu17GiapHan(lasoData.tenCungTieuHan, "Kình Dương", "Liêm Trinh")) { keyArr.push("Sách vận hạn 87 - Tiểu hạn - Hạn bị Kình Dương và Liêm Trinh giáp hai bên: khó tránh nạn tù tội."); }
        if (lasoData.tenCungTieuHan && phu17GiapHan(lasoData.tenCungTieuHan, "Kình Dương", "Thiên Hình")) { keyArr.push("Sách vận hạn 88 - Tiểu hạn - Hạn bị Kình Dương và Thiên Hình giáp hai bên: dễ bị giặc cướp, ác nhân uy hiếp, như kiếm chĩa vào ng"); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lực Sĩ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lực Sĩ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tướng Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tướng Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thanh Long", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false))) { keyArr.push("Sách vận hạn 89 - Tiểu hạn - Hạn gặp Lực Sĩ, Tướng Quân hoặc Thanh Long cùng Lưu Lộc Tồn: năm đó công danh, quyền hành hiển đạt."); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sách vận hạn 90 - Tiểu hạn - Hạn gặp sát tinh (Kình, Đà, Không, Kiếp, Linh, Hỏa) lại trùng phùng Thái Tuế (nhất là cùng Lưu Kình,"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Kình Dương") || isSaoToaThuTaiCung(lasoData.cungCu, "Kình Dương")) || (isSaoToaThuTaiCung("Mệnh", "Đà La") || isSaoToaThuTaiCung(lasoData.cungCu, "Đà La"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false))) { keyArr.push("Sách vận hạn 91 - Tiểu hạn - Mệnh hoặc Thân có Kình Dương, Đà La, hạn gặp Thất Sát: khó tránh điều xấu."); }
        if (lasoData.tenCungTieuHan && isSaoToaThuTaiCung("Mệnh", "Kình Dương") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false))) { keyArr.push("Sách vận hạn 92 - Tiểu hạn - Mệnh có Kình Dương, hạn lại gặp Lưu Kình Dương: mưu việc không được toại ý."); }
        if (lasoData.tenCungTieuHan && isSaoToaThuTaiCung(lasoData.cungCu, "Tả Phù") && isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Tướng") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Tướng", false))) { keyArr.push("Sách vận hạn 93 - Tiểu hạn - Cung Thân và cung hạn cùng gặp Tả Phù và Thiên Tướng: mưu một được hai."); }
        if (lasoData.tenCungTieuHan && isCungCoTriet(lasoData.tenCungTieuHan) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)))) { keyArr.push("Sách vận hạn 94 - Tiểu hạn - Hạn đến cung có Triệt gặp Địa Kiếp hoặc Địa Không: không tốt, dễ đau yếu, trộm cướp."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hư", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false))) { keyArr.push("Sách vận hạn 95 - Tiểu hạn - Hạn gặp đủ Thiên Khốc, Thiên Hư, Tang Môn, Điếu Khách: hạn có tang."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false))) { keyArr.push("Sách vận hạn 96 - Tiểu hạn - Hạn gặp Văn Xương (hoặc Lưu Xương), Linh Tinh, Đà La, Vũ Khúc: sách xếp vào hạn \"đâm đầu xuống sông\""); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đà La") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đà La")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ"))) { keyArr.push("Sách vận hạn 97 - Tiểu hạn - Hạn có Đà La, Phá Quân, Hóa Kỵ đồng cung: phải đề phòng chết đuối, đắm tàu thuyền."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lưu Hà", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lưu Hà", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sách vận hạn 98 - Tiểu hạn - Hạn gặp Lưu Hà cùng Cự Môn, Hóa Kỵ, Phá Quân hoặc Đà La: phải phòng nạn sông nước, đắm tàu thuyền."); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hỏa Tinh")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối") || ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Linh Tinh")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối"))) { keyArr.push("Sách vận hạn 99 - Tiểu hạn - Hạn có Hỏa Tinh hoặc Linh Tinh hãm địa: dễ ung nhọt, mất của, cuộc sống tầm thường, khó tránh khẩu t"); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kiếp Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kiếp Sát", false))) { keyArr.push("Sách vận hạn 100 - Tiểu hạn - Hạn gặp Kiếp Sát: dễ hao tán cơ nghiệp; lớn tuổi càng đáng lo vì khó gây dựng lại."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỷ Thần", false))) { keyArr.push("Sách vận hạn 101 - Tiểu hạn - Hạn có Điếu Khách gặp Hỷ Thần: có người đến chúc mừng."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỷ Thần", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false)))) { keyArr.push("Sách vận hạn 102 - Tiểu hạn - Hạn có Long Trì gặp Hỷ Thần hoặc Thiên Hỷ: báo có việc vui."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỷ Thần", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false))) { keyArr.push("Sách vận hạn 103 - Tiểu hạn - Hạn gặp Hỷ Thần và Hóa Quyền: được thăng quan, thăng chức."); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Lộc")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn"))) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hỷ Thần") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hỷ Thần"))) { keyArr.push("Sách vận hạn 104 - Tiểu hạn - Hạn có Lộc đồng cung Hỷ Thần: phát tài."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thanh Long") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thanh Long")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Quyền"))) { keyArr.push("Sách vận hạn 105 - Tiểu hạn - Hạn có Thanh Long đồng cung Hóa Quyền: được thăng quan tước."); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phong Cáo", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phong Cáo", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tướng Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tướng Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quốc Ấn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quốc Ấn", false))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phục Binh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Mã", false)))) { keyArr.push("Sách vận hạn 106 - Tiểu hạn - Hạn gặp Phong Cáo, Tướng Quân hoặc Quốc Ấn cùng Hóa Quyền, Thiên Hình, Phục Binh hoặc Thiên Mã: hạn "); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false))) { keyArr.push("Sách vận hạn 107 - Tiểu hạn - Hạn có Tham Lang gặp Thiên Việt: năm buôn bán kim loại, hoặc mua được vàng bạc."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phục Binh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false))) { keyArr.push("Sách vận hạn 108 - Tiểu hạn - Hạn có Tham Lang, Thiên Việt cùng Phục Binh, Địa Kiếp: năm mất tiền, mất vàng bạc, đồ kim khí."); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hư", false))) { keyArr.push("Sách vận hạn 109 - Tiểu hạn - Hạn có Tham Lang hoặc Vũ Khúc gặp Thiên Hư: được của bất ngờ."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false))) { keyArr.push("Sách vận hạn 110 - Tiểu hạn - Hạn gặp Thiên Hình và Phá Quân: dễ vướng kiện tụng; gặp thêm Quan Phù hoặc Thái Tuế cũng vậy."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dần" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thân")) { keyArr.push("Sách vận hạn 111 - Tiểu hạn - Hạn có Tham Lang, Văn Xương ở Dần hoặc Thân: hạn bị tù tội; nếu có Hỏa, Linh đồng vị thì giải được."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false))) { keyArr.push("Sách vận hạn 112 - Tiểu hạn - Đại hạn hoặc tiểu hạn gặp Thái Dương, thêm Tả Phù, Hữu Bật: có thể dựng nghiệp."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sách vận hạn 113 - Tiểu hạn - Đại hạn hoặc tiểu hạn có Thái Dương mà sát tinh tụ nhiều: có mối lo về quan tụng."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ"))) { keyArr.push("Sách vận hạn 114 - Tiểu hạn - Đại hạn hoặc tiểu hạn gặp Thiên Cơ: công việc thay đổi, có thể lập cơ nghiệp mới."); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && kiemTraSaoSangToi(["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối"))) { keyArr.push("Sách vận hạn 115 - Tiểu hạn - Đại hạn hoặc tiểu hạn gặp Cự Môn hãm địa: tai nạn không nhỏ."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng"))) { keyArr.push("Sách vận hạn 116 - Tiểu hạn - Đại hạn hoặc tiểu hạn gặp Thiên Tướng: vạn sự đều tốt đẹp."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sách vận hạn 117 - Tiểu hạn - Thân hoặc Mệnh có Thất Sát, hạn gặp Thiên Hình và Hóa Kỵ: có thể bị thương tích; gặp Tử Vi, Lộc Tồn "); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung("Mệnh", "Thất Sát") || isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false))) { keyArr.push("Sách vận hạn 118 - Tiểu hạn - Thất Sát ở Mệnh hoặc Thân gặp Lưu Kình Dương: dễ rời bỏ quê hương, lấy vợ hoặc chồng nơi xa."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu")) { keyArr.push("Sách vận hạn 119 - Tiểu hạn - Hạn có Tham Lang hội Văn Khúc, Vũ Khúc ở Ngọ hoặc Sửu: đề phòng nạn sông nước."); }
        if (lasoData.tenCungTieuHan && (lasoData.canNam === "K." || lasoData.canNam === "T." || lasoData.canNam === "N.") && (isSaoToaThuTaiCung("Mệnh", "Văn Xương") || isSaoToaThuTaiCung("Mệnh", "Văn Khúc")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất")) { keyArr.push("Sách vận hạn 120 - Tiểu hạn - Tuổi Kỷ, Tân hoặc Nhâm có Xương hoặc Khúc ở Mệnh, hạn gặp Thìn hoặc Tuất: lo nạn đâm đầu xuống sông."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false))) { keyArr.push("Sách vận hạn 121 - Tiểu hạn - Hạn gặp Thiên Khôi và Thiên Việt: tiền nong, danh giá đều tốt đẹp; người đang làm quan có thể được t"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi")) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") || isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt"))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false))) { keyArr.push("Sách vận hạn 122 - Tiểu hạn - Khôi hoặc Việt ở Mệnh/Thân, hạn gặp Văn Xương: người chưa có danh phận thì tiền lương sung túc, ngườ"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Lộc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Lộc"))) { keyArr.push("Sách vận hạn 123 - Tiểu hạn - Tiểu hạn gặp Hóa Lộc: phát tài, thăng chức."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Quyền"))) { keyArr.push("Sách vận hạn 125 - Tiểu hạn - Tiểu hạn có Hóa Quyền: rất tốt."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ"))) { keyArr.push("Sách vận hạn 126 - Tiểu hạn - Tiểu hạn gặp Hóa Kỵ: một năm làm ăn không hay."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sách vận hạn 128 - Tiểu hạn - Đại hạn hoặc tiểu hạn có Hóa Kỵ lại thêm Thái Tuế: càng vất vả, dễ gặp tai họa bất ngờ về khẩu thiệt"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Mã") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Mã")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tử Vi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)))) { keyArr.push("Sách vận hạn 129 - Tiểu hạn - Thiên Mã nhập hạn gặp Lộc Tồn, Tử Vi, Thiên Phủ hoặc Xương, Khúc: mới thật tốt."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Cơ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)))) { keyArr.push("Sách vận hạn 130 - Tiểu hạn - Hạn gặp Thiên Thương hoặc Thiên Sứ cùng Cự Môn, Thiên Cơ, Kình, Đà, Hỏa hoặc Hóa Kỵ: năm ấy phá bại."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Riêu") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Riêu"))) { keyArr.push("Sách vận hạn 131 - Tiểu hạn - Hạn gặp Thiên Riêu: chẳng cần mai mối, cưới hỏi cũng nên vợ chồng."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tấu Thư") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tấu Thư")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sách vận hạn 132 - Tiểu hạn - Tấu Thư gặp Bạch Hổ trong đại hạn hoặc tiểu hạn: thường đắc ý về công danh và hỷ sự."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỷ Thần", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false))) { keyArr.push("Sách vận hạn 133 - Tiểu hạn - Đại hạn hoặc tiểu hạn có Song Hỷ (Hỷ Thần, Thiên Hỷ): thường toại ý bất ngờ, may mắn."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tử Vi")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)))) { keyArr.push("Sách vận hạn 134 - Tiểu hạn - Tử Vi nhập hạn mà tam phương có Thất Sát, Phá Quân hoặc Tham Lang: người thường thì bất lợi, người c"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)))) { keyArr.push("Sách vận hạn 135 - Tiểu hạn - Thiên Cơ nhập hạn gặp Kình Dương hoặc Đà La: cuộc sống bất an, việc nhà rối rắm; nếu thêm Cự Môn hãm"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false))) { keyArr.push("Sách vận hạn 136 - Tiểu hạn - Vũ Khúc nhập hạn có Hóa Quyền: cầu mưu gì cũng thành, thêm sao tốt trợ lực thì văn nhân nổi danh, ng"); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc")) && kiemTraSaoSangToi(["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Hợi", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối"))) { keyArr.push("Sách vận hạn 137 - Tiểu hạn - Vũ Khúc nhập hạn ở hãm địa: người làm công chức dễ gặp rắc rối hình phạt, dân thường hay mắc nợ, ngư"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false))) { keyArr.push("Sách vận hạn 138 - Tiểu hạn - Liêm Trinh nhập hạn gặp Thiên Hình, tối kỵ có Kình Dương: gặp tai nạn đổ máu hoặc tù tội; thêm Phá Q"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Phủ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false))) { keyArr.push("Sách vận hạn 139 - Tiểu hạn - Thiên Phủ nhập hạn có đủ Khoa, Quyền, Lộc: mưu sự xứng tâm, rất tốt."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sách vận hạn 140 - Tiểu hạn - Thái Âm nhập hạn gặp Hỏa Tinh hoặc Linh Tinh: bị tai ách, bệnh hoạn."); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) && kiemTraSaoSangToi(["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Mão", "Ngọ", "Thìn", "Tỵ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sách vận hạn 141 - Tiểu hạn - Thái Âm hãm địa nhập hạn, lại thêm Kình Đà và Hỏa Linh: rất nguy hiểm."); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Thìn" || lasoData.chiNam === "Tuất" || lasoData.chiNam === "Sửu" || lasoData.chiNam === "Mùi") && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Thìn" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tuất" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Sửu" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Mùi") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false))) { keyArr.push("Sách vận hạn 142 - Tiểu hạn - Tham Lang nhập hạn ở tứ mộ, người sinh năm Thìn, Tuất, Sửu, Mùi, gặp Hỏa Tinh: tuyệt hảo, làm giàu n"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false))) { keyArr.push("Sách vận hạn 143 - Tiểu hạn - Cự Môn nhập hạn gặp Tang Môn: mọi sự bất như ý, bị kiện cáo hoặc trong nhà có tang."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false))) { keyArr.push("Sách vận hạn 144 - Tiểu hạn - Thiên Tướng nhập hạn gặp Kình Dương: nhiều tai họa; thêm Hỏa, Linh thì hạn rất xấu."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Lương")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)))) { keyArr.push("Sách vận hạn 145 - Tiểu hạn - Thiên Lương nhập hạn gặp Hỏa Tinh hoặc Linh Tinh: gây nguy hại lớn, có thể tan cửa nát nhà."); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false))) { keyArr.push("Sách vận hạn 146 - Tiểu hạn - Thất Sát đắc địa nhập hạn, đối cung có Thiên Phủ triều: gia đạo ung dung, kẻ sĩ gặp hạn này danh hiể"); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối"))) { keyArr.push("Sách vận hạn 147 - Tiểu hạn - Thất Sát hãm địa nhập hạn: thế nào cũng vất vả gian nan; bị thêm ác diệu thì quan tai, tật bệnh miên"); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) && kiemTraSaoSangToi(["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)))) { keyArr.push("Sách vận hạn 148 - Tiểu hạn - Phá Quân miếu địa nhập hạn, thêm Văn Xương, Khôi hoặc Việt: cuộc sống phong quang, phúc lộc dồi dào."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Lộc Tồn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Lộc Tồn")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sách vận hạn 149 - Tiểu hạn - Lộc Tồn nhập hạn gặp Phá, Kiếp, Không cùng Thái Tuế: hạn xấu, có thể nguy."); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Thìn" || lasoData.chiNam === "Tuất" || lasoData.chiNam === "Sửu" || lasoData.chiNam === "Mùi") && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Kình Dương"))) { keyArr.push("Sách vận hạn 150 - Tiểu hạn - Hạn có Kình Dương, người tuổi Thìn, Tuất, Sửu, Mùi không sợ họa ương; gặp thêm Tử Vi, Văn Xương, Thi"); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hỏa Tinh")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối"))) { keyArr.push("Sách vận hạn 151 - Tiểu hạn - Hạn có Hỏa Tinh hãm địa: họa từ trên trời rơi xuống, hại họ hàng, phát tài cũng gian khổ."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Linh Tinh")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false))) { keyArr.push("Sách vận hạn 152 - Tiểu hạn - Hạn có Linh Tinh gặp Tham Lang: phú quý nổi danh."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Không"))) { keyArr.push("Sách vận hạn 153 - Tiểu hạn - Thiên Không nhập hạn: phá hết của cải, hại vợ con, còn phải lo cả sự sống chết của bản thân."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false))) { keyArr.push("Sách vận hạn 154 - Tiểu hạn - Địa Kiếp nhập đại hạn hoặc tiểu hạn, thêm Thái Tuế: khó tránh nguy, nhiều chuyện lôi thôi."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Quyền") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Quyền")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tham Lang", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tham Lang", false)))) { keyArr.push("Sách vận hạn 155 - Tiểu hạn - Hóa Quyền gặp Vũ Khúc hoặc Tham Lang đáo hạn: làm việc gì cũng trót lọt, sĩ tử danh cao, người thườn"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Khoa") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Khoa")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false))) { keyArr.push("Sách vận hạn 156 - Tiểu hạn - Hóa Khoa gặp Văn Xương đáo hạn: kẻ sĩ đỗ đạt nổi danh, người thường phú quý, trăm việc đều thành."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hóa Kỵ"))) { keyArr.push("Sách vận hạn 157 - Tiểu hạn - Hạn có Cự Môn đi cặp Hóa Kỵ: chủ thị phi, nhiều chuyện lôi thôi; nên tránh để Thân, Mệnh, vận hạn cù"); }
        if (lasoData.tenCungTieuHan && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Dậu") && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Tuế") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Tuế")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Hình") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Hình"))) { keyArr.push("Sách vận hạn 158 - Tiểu hạn - Hạn có Thái Tuế, Thiên Hình ở Dậu: vận hạn dễ gặp gông cùm, tù tội."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Linh Tinh")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thất Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thất Sát", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false)))) { keyArr.push("Sách vận hạn 159 - Tiểu hạn - Linh Tinh gặp Thất Sát hoặc Phá Quân nhập hạn: dễ vướng tù ngục, giam mình trong cảnh trói buộc."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false))) { keyArr.push("Sách vận hạn 160 - Tiểu hạn - Thái Dương nhập hạn gặp Cự Môn: thăng chức."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tý" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi")) { keyArr.push("Sách vận hạn 161 - Tiểu hạn - Thái Dương nhập hạn ở Tý hoặc Hợi gặp Hóa Kỵ, Thiên Hình: đau mắt nặng, cha gặp nạn lớn."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi")) { keyArr.push("Sách vận hạn 162 - Tiểu hạn - Liêm Trinh, Tham Lang ở Tỵ hoặc Hợi nhập hạn: bị tù hình; gặp Hóa Kỵ hoặc Tuần, Triệt thì giải được."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Liêm Trinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false))) { keyArr.push("Sách vận hạn 163 - Tiểu hạn - Thất Sát nhập hạn gặp Liêm Trinh, Hỏa Tinh: đề phòng cháy nhà."); }
        if (lasoData.tenCungTieuHan && lasoData.tenCungTieuHan === "Điền Trạch" && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Liêm Trinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Liêm Trinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false))) { keyArr.push("Sách vận hạn 164 - Tiểu hạn - Thất Sát, Liêm Trinh, Hỏa Tinh nhập hạn ở cung Điền Trạch: càng chắc chắn có nạn cháy nhà."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ")) { keyArr.push("Sách vận hạn 165 - Tiểu hạn - Thất Sát nhập hạn ở Ngọ gặp Kình Dương, Thiên Hình: dễ phải ở tù, rất nguy nếu thêm lục sát."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách")) { keyArr.push("Sách vận hạn 166 - Tiểu hạn - Thiên Cơ nhập hạn gặp Thiên Thương hoặc Thiên Sứ: đau ốm, tai nạn, đánh nhau."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sách vận hạn 167 - Tiểu hạn - Thiên Cơ nhập hạn gặp Khốc, Hỏa, Hình: trong nhà thiếu hòa khí."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sách vận hạn 168 - Tiểu hạn - Thiên Tướng nhập hạn gặp Thiên Hình, Địa Không hoặc Địa Kiếp: tối kỵ, dễ gặp tai họa, bệnh tật."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Mã", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hư", false))) { keyArr.push("Sách vận hạn 170 - Tiểu hạn - Tang Môn gặp Thiên Mã, Thiên Khốc, Thiên Hư: hạn có tang."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quả Tú", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quả Tú", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khốc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hư", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hư", false))) { keyArr.push("Sách vận hạn 171 - Tiểu hạn - Tang Môn gặp Quả Tú, Thiên Khốc, Thiên Hư: hạn có tang."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false))) { keyArr.push("Sách vận hạn 172 - Tiểu hạn - Tang Môn gặp Bạch Hổ, Điếu Khách: hạn có tang."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khốc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hư", false))) { keyArr.push("Sách vận hạn 173 - Tiểu hạn - Tiểu hạn gặp Lưu Tang, Lưu Hổ, Lưu Khốc, Lưu Hư: có nhiều tang liên tiếp, có thể có đại tang."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Điếu Khách") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Điếu Khách")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false))) { keyArr.push("Sách vận hạn 174 - Tiểu hạn - Điếu Khách gặp Tang Môn: thường có tang."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Điếu Khách") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Điếu Khách")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false))) { keyArr.push("Sách vận hạn 175 - Tiểu hạn - Điếu Khách gặp Hỏa Tinh: tang nhỏ, tang xa."); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp")) && kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng"))) { keyArr.push("Sách vận hạn 176 - Tiểu hạn - Địa Kiếp đắc địa nhập hạn: bộc phát tài danh nhanh chóng, nhưng phải lâm bệnh nặng về phổi, mụn nhọt"); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Địa Kiếp")) && kiemTraSaoSangToi(["Dần", "Thân", "Tỵ", "Hợi"], ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi", "Tuất", "Thìn"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối"))) { keyArr.push("Sách vận hạn 177 - Tiểu hạn - Địa Kiếp hãm địa nhập hạn: nhiều tai nguy; bệnh nặng thể xác lẫn tinh thần, mất chức, đổi chỗ vì kỷ "); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Linh Tinh")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao sáng"))) { keyArr.push("Sách vận hạn 178 - Tiểu hạn - Linh Tinh đắc địa nhập hạn: hỷ sự về tiền bạc hoặc công danh đến nhanh chóng."); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Linh Tinh")) && kiemTraSaoSangToi(["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"], ["Thân", "Dậu", "Tuất", "Hợi", "Sửu", "Mùi", "Tý", "Ngọ"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối"))) { keyArr.push("Sách vận hạn 179 - Tiểu hạn - Linh Tinh hãm địa nhập hạn: có tang hoặc bệnh hoạn, bị kiện, mất của, truất quan; phòng đồ nóng; gặp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hỷ Thần") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Hỷ Thần")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Điếu Khách", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Điếu Khách", false))) { keyArr.push("Sách vận hạn 180 - Tiểu hạn - Hỷ Thần gặp Điếu Khách: sự may mắn bị suy giảm hay tiêu tán."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Kình Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Ngọ")) { keyArr.push("Sách vận hạn 181 - Tiểu hạn - Kình Dương, Thiên Hình nhập hạn ở Ngọ: bị tù; có thể nguy đến tính mạng nếu gặp lục sát."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Kình Dương")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Quân", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Quân", false))) { keyArr.push("Sách vận hạn 182 - Tiểu hạn - Kình Dương gặp Vũ Khúc, Phá Quân: bị hại vì tiền bạc."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Nguyệt Đức", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Nguyệt Đức", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false))) { keyArr.push("Sách vận hạn 183 - Tiểu hạn - Hạn gặp Nguyệt Đức, Đào Hoa, Hồng Loan: gặp giai nhân giúp đỡ nên tình duyên (có người làm mai mối n"); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phượng Các", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phong Cáo", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phong Cáo", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quốc Ấn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quốc Ấn", false))) { keyArr.push("Sách vận hạn 185 - Tiểu hạn - Hạn gặp Long Trì, Phượng Các, Phong Cáo, Quốc Ấn: thi đỗ."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Mã", false))) { keyArr.push("Sách vận hạn 186 - Tiểu hạn - Hạn gặp Long Trì và Thiên Mã: có dời nhà cửa."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Quan Phủ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Quan Phủ"))) { keyArr.push("Sách vận hạn 187 - Tiểu hạn - Quan Phủ nhập hạn: có kiện tụng, cạnh tranh, cãi vã."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Quan Phủ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Quan Phủ")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)))) { keyArr.push("Sách vận hạn 188 - Tiểu hạn - Quan Phủ nhập hạn gặp Khôi hoặc Việt: thắng cuộc trong kiện tụng, cạnh tranh."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Quan Phủ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Quan Phủ")) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Tuyệt")) { keyArr.push("Sách vận hạn 189 - Tiểu hạn - Quan Phủ nhập hạn ở cung có Tuyệt: thất bại trong kiện tụng, cạnh tranh."); }
        if (lasoData.tenCungTieuHan && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Thai") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thanh Long", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thanh Long", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false))) { keyArr.push("Sách vận hạn 190 - Tiểu hạn - Hạn có Thai gặp Thanh Long, Thiên Hỷ: có con đẹp."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Tuế") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Tuế"))) { keyArr.push("Sách vận hạn 191 - Tiểu hạn - Thái Tuế nhập tiểu hạn: có cãi vã, đối chối trong năm đó; có thể đi dạy học."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Khốc")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false))) { keyArr.push("Sách vận hạn 192 - Tiểu hạn - Thiên Khốc nhập hạn gặp Tang Môn: có tang chế, hoặc gặp chuyện buồn thấm thía vì tang khó hay vì tìn"); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false))) { keyArr.push("Sách vận hạn 193 - Tiểu hạn - Hạn gặp Thiên Hỷ, Hồng Loan, Đào Hoa: có tình duyên, có người để ý."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỷ Thần", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false))) { keyArr.push("Sách vận hạn 195 - Tiểu hạn - Hạn gặp Song Hỷ, Đào, Hồng, Khôi, Việt: sinh quý tử."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Riêu") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Riêu"))) { keyArr.push("Sách vận hạn 196 - Tiểu hạn - Thiên Riêu nhập đại hạn hoặc tiểu hạn: thời gian đó thường có nhân tình sâu đậm, ân ái mặn nồng; đươ"); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Xương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Xương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Khúc", false)))) { keyArr.push("Sách vận hạn 197 - Tiểu hạn - Thiên Thương hoặc Thiên Sứ gặp Văn Xương hoặc Văn Khúc ở hạn: tác họa khủng khiếp, nguy hiểm nếu cả "); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Riêu", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false)))) { keyArr.push("Sách vận hạn 198 - Tiểu hạn - Thiên Thương hoặc Thiên Sứ gặp Kình, Hỏa, Riêu hoặc Cự: hại của, hại người."); }
        if (lasoData.tenCungTieuHan && lasoData.tenCungTieuHan === "Tật Ách") { keyArr.push("Sách vận hạn 199 - Tiểu hạn - Hạn đến cung Tật Ách (có Thiên Sứ): hay ốm đau."); }
        if (lasoData.tenCungTieuHan && lasoData.tenCungTieuHan === "Nô Bộc") { keyArr.push("Sách vận hạn 200 - Tiểu hạn - Hạn đến cung Nô Bộc (có Thiên Thương): hay rắc rối vì bạn bè."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Cơ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false))) { keyArr.push("Sách vận hạn 201 - Tiểu hạn - Thiên Thương hoặc Thiên Sứ gặp Cơ hoặc Cự cùng Thiên Hình ở hạn: kiện tụng."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || lasoData.tenCungTieuHan === "Tật Ách") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false))) { keyArr.push("Sách vận hạn 202 - Tiểu hạn - Thiên Thương hoặc Thiên Sứ gặp Tang Môn, Bạch Hổ ở hạn: có tang; tang xảy ra cho người thuộc cung đa"); }
        if (lasoData.tenCungTieuHan && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Tuyệt") && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đại Hao", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tiểu Hao", false)))) { keyArr.push("Sách vận hạn 203 - Tiểu hạn - Hạn có Tuyệt gặp Đại Hao hoặc Tiểu Hao: hao tán tài sản."); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false)))) { keyArr.push("Sách vận hạn 204 - Tiểu hạn - Xương hoặc Khúc nhập hạn gặp Khoa, Khôi hoặc Việt: có học hành, thi cử và đỗ cao trong hạn đó."); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Xương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Xương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Văn Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Văn Khúc"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Khôi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Khôi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Việt", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Việt", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false))) { keyArr.push("Sách vận hạn 205 - Tiểu hạn - Xương hoặc Khúc nhập hạn gặp Khoa, Khôi hoặc Việt nhưng có Hóa Kỵ: có thể thi rớt."); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tử Vi", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tử Vi", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Phủ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Vũ Khúc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Vũ Khúc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Tướng", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Tướng", false))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Long Trì", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Long Trì", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phượng Các", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phượng Các", false))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tả Phù", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tả Phù", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hữu Bật", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hữu Bật", false)))) { keyArr.push("Sách vận hạn 206 - Tiểu hạn - Đại hạn hoặc tiểu hạn có Tử, Phủ, Vũ hoặc Tướng, gặp Lộc, Long hoặc Phượng, Tả hoặc Hữu: nhất định p"); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Âm", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Âm", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Đồng", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Đồng", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Cơ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Cơ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Cự Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Cự Môn", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Quyền", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false))) { keyArr.push("Sách vận hạn 207 - Tiểu hạn - Đại hạn hoặc tiểu hạn có Nguyệt, Đồng, Cơ hoặc Cự gặp đủ Khoa, Quyền, Lộc: thăng quan hoặc đỗ đạt lớ"); }
        if (lasoData.tenCungTieuHan && (((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) && kiemTraSaoSangToi(["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Thìn", "Tuất", "Dậu", "Mão"], phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) === "sao tối")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Quan Phủ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Quan Phủ", false))) { keyArr.push("Sách vận hạn 208 - Tiểu hạn - Thất Sát hãm địa nhập hạn, thêm Hình, Hổ, Quan Phủ: dễ vướng vòng lao lý."); }
        if (lasoData.tenCungTieuHan && (lasoData.chiNam === "Thân") && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Thương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Thương", false))) { keyArr.push("Sách vận hạn 209 - Tiểu hạn - Tuổi Thân, hạn gặp Thiên Thương: rất hại, tai họa liên miên."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đà La") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Đà La")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thái Tuế", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thái Tuế", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kiếp Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kiếp Sát", false)))) { keyArr.push("Sách vận hạn 210 - Tiểu hạn - Hạn có Đà La gặp Thái Tuế cùng Tang, Hổ, Kỵ hoặc Kiếp Sát: có tang, nếu không thì hay đánh nhau thươ"); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Văn Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Văn Tinh", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Khoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Khoa", false))) { keyArr.push("Sách vận hạn 211 - Tiểu hạn - Hạn gặp Văn Tinh có Hóa Khoa: thi tất đỗ, công danh hưng vượng."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tang Môn")) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) && isTrangSinhTaiCung(lasoData.tenCungTieuHan, "Thai")) { keyArr.push("Sách vận hạn 212 - Tiểu hạn - Hạn có Tang, Hổ, Kỵ và Thai: dễ băng huyết khi sinh nở."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang")) && (phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Tỵ" || phu17ChiCung(lasoData, lasoData.tenCungTieuHan) === "Hợi")) { keyArr.push("Sách vận hạn 213 - Tiểu hạn - Hạn đến Tỵ hoặc Hợi có Liêm Trinh, Tham Lang: họa ách đến từ Liêm Tham làm suy giảm mệnh số, hao tán"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Tuế") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Tuế"))) { keyArr.push("Sách vận hạn 214 - Tiểu hạn - Hạn Thái Tuế: phải đắc ý (theo quan niệm tam hợp Thái Tuế của sách)."); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Tuế") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Tuế")) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)))) { keyArr.push("Sách vận hạn 215 - Tiểu hạn - Thái Tuế gặp Không hoặc Kiếp: lên dễ mà xuống cũng dễ."); }
        if (lasoData.tenCungTieuHan && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đào Hoa", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đào Hoa", false)) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hồng Loan", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hồng Loan", false)) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hỷ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hỷ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỷ Thần", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỷ Thần", false)))) { keyArr.push("Sách vận hạn 216 - Tiểu hạn - Hạn gặp Đào, Hồng, Hỷ: báo hiệu tin vui sắp đến."); }
        if (lasoData.tenCungTieuHan && isCungCoTuan(lasoData.tenCungTieuHan) && phu17DemCatTinh(lasoData.tenCungTieuHan) > 2) { keyArr.push("Sách vận hạn 217 - Tiểu hạn - Hạn đến cung có Tuần án ngữ mà cung có nhiều sao sáng sủa tốt đẹp (từ 3 cát tinh): hạn trở nên xấu x"); }
        if (lasoData.tenCungTieuHan && isCungCoTuan(lasoData.tenCungTieuHan) && phu17DemSatTinh(lasoData.tenCungTieuHan) > 1) { keyArr.push("Sách vận hạn 218 - Tiểu hạn - Hạn đến cung có Tuần án ngữ mà cung có nhiều sao mờ ám xấu xa (từ 2 sát tinh): hạn lại sáng sủa tốt "); }
        if (lasoData.tenCungTieuHan && isCungCoTriet(lasoData.tenCungTieuHan) && phu17DemCatTinh(lasoData.tenCungTieuHan) > 2) { keyArr.push("Sách vận hạn 219 - Tiểu hạn - Hạn đến cung có Triệt án ngữ mà cung có nhiều sao sáng sủa tốt đẹp (từ 3 cát tinh): hạn xấu xa mờ ám"); }
        if (lasoData.tenCungTieuHan && isCungCoTriet(lasoData.tenCungTieuHan) && phu17DemSatTinh(lasoData.tenCungTieuHan) > 1) { keyArr.push("Sách vận hạn 220 - Tiểu hạn - Hạn đến cung có Triệt án ngữ mà cung có nhiều sao mờ ám xấu xa (từ 2 sát tinh): hạn sáng sủa tốt đẹp"); }
        if (lasoData.tenCungTieuHan && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Phủ")) && phu17DemKhong(lasoData.tenCungTieuHan, 0) > 2) { keyArr.push("Sách vận hạn 224 - Tiểu hạn - Thiên Phủ nhập hạn gặp Tam Không (ba trong bốn Không: Tuần, Triệt, Thiên Không, Địa Không): phá sản,"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tử Vi") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tử Vi")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Phủ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Phủ")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Vũ Khúc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Vũ Khúc")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Tướng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Tướng"))) && phu17DemKhong(lasoData.tenCungTieuHan, 0) > 2 && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Riêu", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Riêu", false)))) { keyArr.push("Sách vận hạn 225 - Tiểu hạn - Tử Vi, Thiên Phủ, Vũ Khúc hoặc Thiên Tướng nhập hạn gặp Tam Không cùng Kiếp, Kỵ, Hình, Đà (hoặc Linh"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thất Sát")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Phá Quân") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Phá Quân")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Liêm Trinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Liêm Trinh")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tham Lang") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Tham Lang"))) && phu17DemKhong(lasoData.tenCungTieuHan, 0) > 1 && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Kỵ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Kỵ", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đại Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đại Hao", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tiểu Hao", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tiểu Hao", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Hình", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Hình", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phục Binh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phục Binh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Tang Môn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Tang Môn", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Bạch Hổ", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Bạch Hổ", false)))) { keyArr.push("Sách vận hạn 226 - Tiểu hạn - Sát, Phá, Liêm hoặc Tham nhập hạn gặp nhị hay tam Không cùng Linh, Hỏa, Kình, Kỵ (hoặc Hao, Hình, Ph"); }
        if (lasoData.tenCungTieuHan && ((isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Cơ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Cơ")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Âm") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Âm")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Đồng") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Đồng")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Lương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thiên Lương")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Cự Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Cự Môn")) || (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thái Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "L. Thái Dương"))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Phá Toái", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Phá Toái", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kiếp Sát", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kiếp Sát", false)))) { keyArr.push("Sách vận hạn 227 - Tiểu hạn - Cơ, Nguyệt, Đồng, Lương hoặc Cự, Nhật nhập hạn gặp Kình, Đà, Không, Kiếp, Phá Toái hoặc Kiếp Sát: dễ"); }
        if (lasoData.tenCungTieuHan && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Kình Dương", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Đà La", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Đà La", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Không", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Không", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Địa Kiếp", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hỏa Tinh", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Linh Tinh", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Linh Tinh", false))) && ((isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Hóa Lộc", false)) || (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Lộc Tồn", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Lộc Tồn", false))) && (isSaoHoiChieuRong(lasoData.tenCungTieuHan, "Thiên Mã", false) || isSaoHoiChieuRong(lasoData.tenCungTieuHan, "L. Thiên Mã", false)) && phu17DemKhong(lasoData.tenCungTieuHan, 0) > 2) { keyArr.push("Sách vận hạn 228 - Tiểu hạn - Hạn gặp sát tinh, Lộc, Mã hội hợp và bị Tam Không xâm phạm: thuộc vận loại \"Lộc xung Mã khổn\" (Lộc, "); }
        if (lasoData.tenCungTieuHan && phu17CungLucHai(phu17ChiCung(lasoData, lasoData.tenCungDaiVan), phu17ChiCung(lasoData, lasoData.tenCungTieuHan)) && ((lasoData.tenCungDaiVan === "Tật Ách" && (isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Hình") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đà La") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungTieuHan, "Thiên Hư"))) || (lasoData.tenCungTieuHan === "Tật Ách" && (isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Hình") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Kình Dương") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đà La") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hỏa Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Linh Tinh") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Không") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Địa Kiếp") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Hóa Kỵ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thất Sát") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Đại Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tiểu Hao") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Bạch Hổ") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Tang Môn") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Khốc") || isSaoToaThuTaiCung(lasoData.tenCungDaiVan, "Thiên Hư"))))) { keyArr.push("Sách vận hạn 229 - Tiểu hạn - Đại hạn và tiểu hạn ở hai cung lục hại nhau (Tý-Mùi, Sửu-Ngọ, Dần-Tỵ, Mão-Thìn, Thân-Hợi, Dậu-Tuất),"); }
    }
}
// VHS17-END
// PHU17-BEGIN
function phu17DemSao(tenCung, ds, tinhSang) {
    let d = {};
    try {
        d = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { d = {}; }
    const ob = d.lasoOb || [];
    let i = 99;
    for (let k = 0; k < ob.length; k++) { if (ob[k].tenCung === tenCung) { i = k; } }
    if (i > 11) return 0;
    const idxs = [i, (i + 4) % 12, (i + 6) % 12, (i + 8) % 12];
    const tenSang = ["Tử Vi", "Liêm Trinh", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Thất Sát", "Phá Quân", "Tham Lang", "Cự Môn", "Thái Dương", "Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"];
    const dacSang = [["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Ngọ", "Dần", "Thân"], ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân"], ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Tỵ", "Hợi", "Mùi"], ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Dần", "Thân", "Dậu", "Mão"], ["Dần", "Thân", "Tý", "Ngọ", "Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"], ["Dần", "Thân", "Tý", "Ngọ", "Tỵ", "Hợi", "Sửu", "Mùi"], ["Tý", "Ngọ", "Sửu", "Mùi", "Thìn", "Tuất"], ["Thìn", "Tuất", "Sửu", "Mùi", "Dần", "Thân"], ["Mão", "Dậu", "Tý", "Ngọ", "Dần", "Thân", "Hợi"], ["Tỵ", "Ngọ", "Dần", "Mão", "Thìn", "Sửu", "Mùi"], ["Thìn", "Tuất", "Mão", "Dậu", "Tỵ", "Thân", "Tý", "Ngọ", "Sửu", "Mùi"], ["Dậu", "Tuất", "Hợi", "Thân", "Tý", "Sửu", "Mùi"], ["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"], ["Thìn", "Tuất", "Sửu", "Mùi", "Tý", "Ngọ", "Mão", "Dần", "Thân"]];
    let dem = 0;
    for (let a = 0; a < idxs.length; a++) {
        const c = ob[idxs[a]];
        let saoC = [];
        if (c && Array.isArray(c.sao)) { saoC = c.sao; }
        for (let b = 0; b < saoC.length; b++) {
            const ten = saoC[b].ten;
            let dung = false;
            for (let m = 0; m < ds.length; m++) { if (ds[m] === ten) { dung = true; } }
            if (!dung && tinhSang) {
                for (let m = 0; m < tenSang.length; m++) {
                    if (tenSang[m] === ten) {
                        for (let n = 0; n < dacSang[m].length; n++) { if (dacSang[m][n] === c.chi) { dung = true; } }
                    }
                }
            }
            if (dung) dem++;
        }
    }
    return dem;
}
function phu17DemCatTinh(tenCung) { return phu17DemSao(tenCung, ["Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Lộc Tồn", "Quốc Ấn", "Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Long Trì", "Phượng Các", "Thanh Long", "Thiên Quan", "Thiên Phúc", "Ân Quang", "Thiên Quý", "Tam Thai", "Bát Tọa", "Thiên Giải", "Địa Giải"], true); }
function phu17DemSatTinh(tenCung) { return phu17DemSao(tenCung, ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"], false); }
function LuanPhuGiaiLan17_menh(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isCungTaiChi("Mệnh", "Dậu"))) {
        keyArr.push("Phú Giải số 2 (TỬ VI) - Mệnh: Tử Vi tọa thủ ở Dậu");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 3 (TỬ VI) - Mệnh: Tử Vi tọa thủ ở Mão/Dậu, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isCungTaiChi("Mệnh", "Ngọ")) && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false)) {
        keyArr.push("Phú Giải số 9 (TỬ VI) - Mệnh: Tử Vi tọa thủ ở Ngọ, gặp Thiên Khôi + Hóa Khoa");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoHoiChieuRong("Mệnh", "Văn Xương", false) && isSaoHoiChieuRong("Mệnh", "Văn Khúc", false)) {
        keyArr.push("Phú Giải số 19 (TỬ VI) - Mệnh: Tử Vi tọa thủ, gặp Văn Xương + Văn Khúc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Tả Phù") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật")) {
        keyArr.push("Phú Giải số 20 (TỬ VI) - Mệnh: Tử Vi + Tả Phù + Hữu Bật tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false))) {
        keyArr.push("Phú Giải số 21 (TỬ VI)b - Mệnh: Tử Vi tọa thủ, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 21 (TỬ VI)a - Mệnh: Tử Vi tọa thủ, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false))) {
        keyArr.push("Phú Giải số 22 (TỬ VI) - Mệnh: Tử Vi tọa thủ, gặp Hóa Quyền + Hóa Lộc + Kình Dương hoặc Đà La");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && isSaoHoiChieuRong("Mệnh", "Tả Phù", false) && isSaoHoiChieuRong("Mệnh", "Hữu Bật", false)) {
        keyArr.push("Phú Giải số 23 (TỬ VI) - Mệnh: Tử Vi + Hóa Lộc tọa thủ, gặp Tả Phù + Hữu Bật");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 34 (TỬ VI) - Mệnh: Tử Vi + Thiên Phủ tọa thủ ở Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 39 (TỬ VI) - Mệnh: Thiên Cơ + Thái Âm tọa thủ ở Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && (isCungTaiChi("Mệnh", "Tuất"))) {
        keyArr.push("Phú Giải số 41 (TỬ VI)b - Mệnh: Thiên Phủ + Hóa Lộc tọa thủ ở Tuất");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Tử Vi") || isSaoToaThuTaiCung("Mệnh", "Vũ Khúc")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 49 (TỬ VI) - Mệnh: Tử Vi hoặc Vũ Khúc tọa thủ, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất"))) {
        keyArr.push("Phú Giải số 50 (TỬ VI) - Mệnh: Tử Vi tọa thủ ở Thìn/Tuất");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Phá Quân", false)) {
        keyArr.push("Phú Giải số 51 (TỬ VI) - Mệnh: Tử Vi tọa thủ ở Thìn/Tuất, gặp Phá Quân");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Tử Vi") || isSaoToaThuTaiCung("Mệnh", "Phá Quân")) && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 53 (TỬ VI) - Mệnh: Tử Vi hoặc Phá Quân tọa thủ ở Thìn/Tuất/Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Phá Quân", false)) {
        keyArr.push("Phú Giải số 56 (TỬ VI)a - Mệnh: Tử Vi + Thiên Tướng tọa thủ ở Thìn/Tuất, gặp Phá Quân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Tử Vi", false) && isSaoHoiChieuRong("Mệnh", "Thiên Tướng", false)) {
        keyArr.push("Phú Giải số 56 (TỬ VI)b - Mệnh: Phá Quân tọa thủ ở Thìn/Tuất, gặp Tử Vi + Thiên Tướng");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Phá Quân", false)) {
        keyArr.push("Phú Giải số 61 (TỬ VI) - Mệnh: Tử Vi + Thiên Tướng tọa thủ ở Thìn/Tuất, gặp Phá Quân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 62 (TỬ VI) - Mệnh: Tử Vi + Thất Sát tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 64 (TỬ VI) - Mệnh: Tử Vi + Thất Sát + Hóa Quyền tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ")) {
        keyArr.push("Phú Giải số 1 (THIÊN – PHỦ) - Mệnh: Thiên Phủ tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Mệnh", "Vũ Khúc")) {
        keyArr.push("Phú Giải số 13 (THIÊN – PHỦ) - Mệnh: Thiên Phủ + Vũ Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && isSaoHoiChieuRong("Mệnh", "Văn Xương", false) && isSaoHoiChieuRong("Mệnh", "Văn Khúc", false)) {
        keyArr.push("Phú Giải số 15 (THIÊN – PHỦ) - Mệnh: Thiên Phủ + Lộc Tồn tọa thủ, gặp Văn Xương + Văn Khúc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && isSaoHoiChieuRong("Mệnh", "Văn Xương", false) && isSaoHoiChieuRong("Mệnh", "Văn Khúc", false) && isSaoHoiChieuRong("Mệnh", "Tả Phù", false) && isSaoHoiChieuRong("Mệnh", "Hữu Bật", false)) {
        keyArr.push("Phú Giải số 16 (THIÊN – PHỦ) - Mệnh: Thiên Phủ tọa thủ, gặp Văn Xương + Văn Khúc + Tả Phù + Hữu Bật");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && (isCungTaiChi("Mệnh", "Tỵ")) && isSaoHoiChieuRong("Mệnh", "Thái Tuế", false) && isSaoHoiChieuRong("Mệnh", "Đà La", false)) {
        keyArr.push("Phú Giải số 17 (THIÊN – PHỦ) - Mệnh: Thiên Phủ tọa thủ ở Tỵ, gặp Thái Tuế + Đà La");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc")) {
        keyArr.push("Phú Giải số 1 (VŨ KHÚC) - Mệnh: Vũ Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc")) {
        keyArr.push("Phú Giải số 3 (VŨ KHÚC) - Mệnh: Vũ Khúc tọa thủ");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Vũ Khúc")) {
        keyArr.push("Phú Giải số 3 (VŨ KHÚC) - Thân cư: Vũ Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 5 (VŨ KHÚC) - Mệnh: Vũ Khúc tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 6 (VŨ KHÚC) - Mệnh: Vũ Khúc + Thiên Tướng tọa thủ ở Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoHoiChieuRong("Mệnh", "Hóa Kỵ", false) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 9 (VŨ KHÚC) - Mệnh: Vũ Khúc + Tham Lang tọa thủ, gặp Hóa Kỵ + Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 13 (VŨ KHÚC) - Mệnh: Vũ Khúc + Phá Quân tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Mão"))) {
        keyArr.push("Phú Giải số 14 (VŨ KHÚC)a - Mệnh: Vũ Khúc + Thất Sát tọa thủ ở Mão");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Mão"))) {
        keyArr.push("Phú Giải số 14 (VŨ KHÚC)b - Mệnh: Phá Quân + Liêm Trinh tọa thủ ở Mão");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 15 (VŨ KHÚC) - Mệnh: Vũ Khúc + Phá Quân tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 17 (VŨ KHÚC) - Mệnh: Vũ Khúc + Phá Quân tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Văn Xương", false) && isSaoHoiChieuRong("Mệnh", "Văn Khúc", false)) {
        keyArr.push("Phú Giải số 18 (VŨ KHÚC) - Mệnh: Vũ Khúc + Phá Quân tọa thủ ở Tỵ/Hợi, gặp Văn Xương + Văn Khúc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoHoiChieuRong("Mệnh", "Liêm Trinh", false) && isSaoHoiChieuRong("Mệnh", "Thất Sát", false)) {
        keyArr.push("Phú Giải số 19 (VŨ KHÚC) - Mệnh: Vũ Khúc + Tham Lang tọa thủ, gặp Liêm Trinh + Thất Sát");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 21 (VŨ KHÚC) - Mệnh: Vũ Khúc tọa thủ, gặp Kình Dương hoặc Đà La hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && isSaoHoiChieuRong("Mệnh", "Thiên Mã", false) && (isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false) || isSaoHoiChieuRong("Mệnh", "Lộc Tồn", false))) {
        keyArr.push("Phú Giải số 24 (VŨ KHÚC) - Mệnh: Vũ Khúc tọa thủ, gặp Thiên Mã + Hóa Lộc hoặc Lộc Tồn");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Phá Quân", false)) {
        keyArr.push("Phú Giải số 3 (THIÊN – TƯỚNG) - Mệnh: Thiên Tướng tọa thủ ở Tỵ/Hợi, gặp Phá Quân");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Tướng") && (isCungTaiChi(lasoData.cungCu, "Tỵ") || isCungTaiChi(lasoData.cungCu, "Hợi")) && isSaoHoiChieuRong(lasoData.cungCu, "Phá Quân", false)) {
        keyArr.push("Phú Giải số 3 (THIÊN – TƯỚNG) - Thân cư: Thiên Tướng tọa thủ ở Tỵ/Hợi, gặp Phá Quân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Mệnh", "Phong Cáo")) {
        keyArr.push("Phú Giải số 4 (THIÊN – TƯỚNG) - Mệnh: Thiên Tướng + Phong Cáo tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Mệnh", "Tử Vi") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất"))) {
        keyArr.push("Phú Giải số 15 (THIÊN – TƯỚNG) - Mệnh: Thiên Tướng + Tử Vi tọa thủ ở Thìn/Tuất");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ")) && isSaoHoiChieuRong("Mệnh", "Tả Phù", false) && isSaoHoiChieuRong("Mệnh", "Hữu Bật", false)) {
        keyArr.push("Phú Giải số 16 (THIÊN – TƯỚNG) - Mệnh: Thiên Tướng + Liêm Trinh tọa thủ ở Tý/Ngọ, gặp Tả Phù + Hữu Bật");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoHoiChieuRong("Mệnh", "Thái Tuế", false)) {
        keyArr.push("Phú Giải số 2 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ, gặp Thái Tuế");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ") || isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 6 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ ở Tý/Ngọ/Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ") || isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 7 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ ở Tý/Ngọ/Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Dậu"))) {
        keyArr.push("Phú Giải số 17 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ ở Dậu");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ")) && isSaoHoiChieuRong("Mệnh", "Tả Phù", false) && isSaoHoiChieuRong("Mệnh", "Hữu Bật", false) && isSaoHoiChieuRong("Mệnh", "Văn Khúc", false)) {
        keyArr.push("Phú Giải số 18 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ ở Tý/Ngọ, gặp Tả Phù + Hữu Bật + Văn Khúc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 19 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ ở Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ") || isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 20 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ ở Tý/Ngọ/Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (isSaoHoiChieuRong("Mệnh", "Thiên Hình", false) || isSaoHoiChieuRong("Mệnh", "Hóa Kỵ", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false))) {
        keyArr.push("Phú Giải số 21 (THẤT – SÁT) - Mệnh: Thất Sát + Liêm Trinh tọa thủ ở Sửu/Mùi, gặp Thiên Hình hoặc Hóa Kỵ hoặc Địa Không hoặc Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false))) {
        keyArr.push("Phú Giải số 24 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ, gặp Địa Không hoặc Địa Kiếp hoặc Linh Tinh hoặc Hỏa Tinh");
    }
    if (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) {
        keyArr.push("Phú Giải số 31 (THẤT – SÁT) - Thân cư: Thất Sát tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 41 (THẤT – SÁT) - Mệnh: Thất Sát tọa thủ ở Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 3 (PHÁ – QUÂN) - Mệnh: Phá Quân tọa thủ ở Tý/Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ")) && !isSaoHoiChieuRong("Mệnh", "Kình Dương", false) && !isSaoHoiChieuRong("Mệnh", "Đà La", false) && !isSaoHoiChieuRong("Mệnh", "Địa Không", false) && !isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) && !isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) && !isSaoHoiChieuRong("Mệnh", "Linh Tinh", false)) {
        keyArr.push("Phú Giải số 4 (PHÁ – QUÂN) - Mệnh: Phá Quân tọa thủ ở Tý/Ngọ, không gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ")) && (isSaoHoiChieuRong("Mệnh", "Cô Thần", false) || isSaoHoiChieuRong("Mệnh", "Quả Tú", false) || isSaoHoiChieuRong("Mệnh", "Đẩu Quân", false))) {
        keyArr.push("Phú Giải số 5 (PHÁ – QUÂN) - Mệnh: Phá Quân tọa thủ ở Tý/Ngọ, gặp Cô Thần hoặc Quả Tú hoặc Đẩu Quân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 7 (PHÁ – QUÂN)a - Mệnh: Phá Quân tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") || isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") || isSaoToaThuTaiCung("Mệnh", "Thiếu Dương")) && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 7 (PHÁ – QUÂN)b - Mệnh: Phá Quân + Hóa Lộc hoặc Lộc Tồn hoặc Thiếu Dương tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 9 (PHÁ – QUÂN) - Mệnh: Phá Quân tọa thủ ở Tý/Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && (isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Kình Dương", false))) {
        keyArr.push("Phú Giải số 11 (PHÁ – QUÂN) - Mệnh: Phá Quân + Liêm Trinh tọa thủ ở Mão/Dậu, gặp Địa Kiếp hoặc Kình Dương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Mệnh", "Kình Dương") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Hữu Bật", false)) {
        keyArr.push("Phú Giải số 12 (PHÁ – QUÂN) - Mệnh: Phá Quân + Kình Dương tọa thủ ở Mão/Dậu, gặp Hóa Khoa + Hữu Bật");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && isSaoHoiChieuRong("Mệnh", "Thiên Hình", false) && (isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false) || isSaoHoiChieuRong("Mệnh", "Lộc Tồn", false))) {
        keyArr.push("Phú Giải số 13 (PHÁ – QUÂN) - Mệnh: Phá Quân tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp Thiên Hình + Hóa Lộc hoặc Lộc Tồn");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoToaThuTaiCung("Mệnh", "Thiên Mã")) {
        keyArr.push("Phú Giải số 16 (PHÁ – QUÂN) - Mệnh: Phá Quân + Thiên Mã tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false)) {
        keyArr.push("Phú Giải số 21 (PHÁ – QUÂN) - Mệnh: Phá Quân tọa thủ, gặp Hỏa Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh")) {
        keyArr.push("Phú Giải số 2 (LIÊM TRINH) - Mệnh: Liêm Trinh tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 5 (LIÊM TRINH) - Mệnh: Liêm Trinh tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false))) {
        keyArr.push("Phú Giải số 6 (LIÊM TRINH) - Mệnh: Liêm Trinh tọa thủ ở Tỵ/Hợi, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && (isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Kình Dương", false))) {
        keyArr.push("Phú Giải số 7 (LIÊM TRINH) - Mệnh: Liêm Trinh tọa thủ ở Mão/Dậu, gặp Địa Kiếp hoặc Kình Dương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 8 (LIÊM TRINH) - Mệnh: Liêm Trinh tọa thủ ở Mão/Dậu, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Thân") || isCungTaiChi("Mệnh", "Mùi")) && !isSaoHoiChieuRong("Mệnh", "Kình Dương", false) && !isSaoHoiChieuRong("Mệnh", "Đà La", false) && !isSaoHoiChieuRong("Mệnh", "Địa Không", false) && !isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false)) {
        keyArr.push("Phú Giải số 11 (LIÊM TRINH) - Mệnh: Liêm Trinh tọa thủ ở Thân/Mùi, không gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 14 (LIÊM TRINH) - Mệnh: Liêm Trinh + Thất Sát tọa thủ ở Thìn/Tuất/Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false))) {
        keyArr.push("Phú Giải số 17 (LIÊM TRINH) - Mệnh: Liêm Trinh + Thất Sát tọa thủ ở Sửu/Mùi, gặp Địa Không hoặc Địa Kiếp hoặc Linh Tinh hoặc Hỏa Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 19 (LIÊM TRINH) - Mệnh: Liêm Trinh + Thất Sát tọa thủ ở Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc")) {
        keyArr.push("Phú Giải số 24 (LIÊM TRINH) - Mệnh: Liêm Trinh + Văn Khúc tọa thủ");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Tham Lang") || isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") || isSaoToaThuTaiCung("Mệnh", "Phá Quân"))) {
        keyArr.push("Phú Giải số 6 (THAM LANG)a - Mệnh: Tham Lang hoặc Liêm Trinh hoặc Phá Quân tọa thủ");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Tham Lang") || isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") || isSaoToaThuTaiCung("Mệnh", "Phá Quân")) && (isSaoHoiChieuRong("Mệnh", "Thất Sát", false) || isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false))) {
        keyArr.push("Phú Giải số 6 (THAM LANG)b - Mệnh: Tham Lang hoặc Liêm Trinh hoặc Phá Quân tọa thủ, gặp Thất Sát hoặc Kình Dương hoặc Đà La");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false)) {
        keyArr.push("Phú Giải số 11 (THAM LANG) - Mệnh: Tham Lang tọa thủ ở Mão/Dậu, gặp Hỏa Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 13 (THAM LANG) - Mệnh: Tham Lang tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && (isCungTaiChi("Mệnh", "Hợi") || isCungTaiChi("Mệnh", "Tý")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false))) {
        keyArr.push("Phú Giải số 20 (THAM LANG) - Mệnh: Tham Lang tọa thủ ở Hợi/Tý, gặp Kình Dương hoặc Đà La");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Mệnh", "Đà La") && (isCungTaiChi("Mệnh", "Dần"))) {
        keyArr.push("Phú Giải số 21 (THAM LANG) - Mệnh: Tham Lang + Đà La tọa thủ ở Dần");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 23 (THAM LANG) - Mệnh: Tham Lang tọa thủ, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && (isCungTaiChi("Mệnh", "Ngọ") || isCungTaiChi("Mệnh", "Dần")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false)) && (isSaoHoiChieuRong("Mệnh", "Tang Môn", false) || isSaoHoiChieuRong("Mệnh", "Bạch Hổ", false))) {
        keyArr.push("Phú Giải số 31 (THAM LANG) - Mệnh: Tham Lang tọa thủ ở Ngọ/Dần, gặp Kình Dương hoặc Đà La hoặc Hỏa Tinh hoặc Linh Tinh + Tang Môn hoặc Bạch Hổ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && (isCungTaiChi("Mệnh", "Hợi") || isCungTaiChi("Mệnh", "Tý")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false))) {
        keyArr.push("Phú Giải số 32 (THAM LANG) - Mệnh: Tham Lang tọa thủ ở Hợi/Tý, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp");
    }
    if (isSaoToaThuTaiCung(lasoData.cungCu, "Tham Lang") && isSaoToaThuTaiCung(lasoData.cungCu, "Vũ Khúc")) {
        keyArr.push("Phú Giải số 38 (THAM LANG) - Thân cư: Tham Lang + Vũ Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Mệnh", "Vũ Khúc")) {
        keyArr.push("Phú Giải số 44 (THAM LANG) - Mệnh: Tham Lang + Vũ Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Hợi")) && (isSaoHoiChieuRong("Mệnh", "Linh Tinh", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Thiên Hư", false) || isSaoHoiChieuRong("Mệnh", "Thiên Mã", false))) {
        keyArr.push("Phú Giải số 47 (THAM LANG) - Mệnh: Tham Lang + Liêm Trinh tọa thủ ở Hợi, gặp Linh Tinh hoặc Đà La hoặc Kình Dương hoặc Địa Không hoặc Địa Kiếp hoặc Thiên Hư hoặc Thiên Mã");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Kình Dương")) {
        keyArr.push("Phú Giải số 7 (THIÊN – CƠ) - Mệnh: Thiên Cơ + Kình Dương tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Phục Binh") && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 9 (THIÊN – CƠ) - Mệnh: Thiên Cơ + Phục Binh tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false) || isSaoHoiChieuRong("Mệnh", "Lộc Tồn", false)) && isSaoHoiChieuRong("Mệnh", "Thiên Mã", false)) {
        keyArr.push("Phú Giải số 14 (THIÊN – CƠ) - Mệnh: Thiên Cơ + Thiên Lương tọa thủ, gặp Hóa Lộc hoặc Lộc Tồn + Thiên Mã");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Cơ") && isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Lương") && (isSaoHoiChieuRong(lasoData.cungCu, "Hóa Lộc", false) || isSaoHoiChieuRong(lasoData.cungCu, "Lộc Tồn", false)) && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Mã", false)) {
        keyArr.push("Phú Giải số 14 (THIÊN – CƠ) - Thân cư: Thiên Cơ + Thiên Lương tọa thủ, gặp Hóa Lộc hoặc Lộc Tồn + Thiên Mã");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất"))) {
        keyArr.push("Phú Giải số 16 (THIÊN – CƠ) - Mệnh: Thiên Cơ + Thiên Lương tọa thủ ở Thìn/Tuất");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 17 (THIÊN – CƠ) - Mệnh: Thiên Cơ + Thiên Lương tọa thủ ở Thìn/Tuất, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false)) && isSaoHoiChieuRong("Mệnh", "Tướng Quân", false)) {
        keyArr.push("Phú Giải số 21 (THIÊN – CƠ) - Mệnh: Thiên Cơ + Thiên Lương tọa thủ ở Thìn/Tuất, gặp Kình Dương hoặc Đà La hoặc Hỏa Tinh hoặc Linh Tinh + Tướng Quân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 3 (CỰ MÔN) - Mệnh: Cự Môn + Thái Dương tọa thủ ở Dần/Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Thân"))) {
        keyArr.push("Phú Giải số 4 (CỰ MÔN) - Mệnh: Cự Môn + Thái Dương tọa thủ ở Thân");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Dần"))) {
        keyArr.push("Phú Giải số 6 (CỰ MÔN) - Mệnh: Cự Môn + Thái Dương tọa thủ ở Dần");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && (isCungTaiChi("Mệnh", "Dậu"))) {
        keyArr.push("Phú Giải số 15 (CỰ MÔN) - Mệnh: Cự Môn + Thiên Cơ tọa thủ ở Dậu");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && isSaoHoiChieuRong("Mệnh", "Đại Hao", true) && isSaoHoiChieuRong("Mệnh", "Tiểu Hao", true)) {
        keyArr.push("Phú Giải số 18 (CỰ MÔN)a - Mệnh: Cự Môn + Thiên Cơ tọa thủ ở Mão/Dậu, gặp Đại Hao + Tiểu Hao");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 18 (CỰ MÔN)b - Mệnh: Cự Môn + Thiên Cơ tọa thủ ở Mão/Dậu, gặp Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu"))) {
        keyArr.push("Phú Giải số 21 (CỰ MÔN) - Mệnh: Cự Môn + Thiên Cơ + Lộc Tồn tọa thủ ở Mão/Dậu");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && isSaoHoiChieuRong("Mệnh", "Đại Hao", true) && isSaoHoiChieuRong("Mệnh", "Tiểu Hao", true)) {
        keyArr.push("Phú Giải số 22 (CỰ MÔN) - Mệnh: Cự Môn + Thiên Cơ tọa thủ ở Mão/Dậu, gặp Đại Hao + Tiểu Hao");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Thiên Đồng", false) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false)) {
        keyArr.push("Phú Giải số 28 (CỰ MÔN) - Mệnh: Cự Môn tọa thủ ở Thìn/Tuất, gặp Thiên Đồng + Hóa Khoa");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 30 (CỰ MÔN)a - Mệnh: Cự Môn + Lộc Tồn tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 30 (CỰ MÔN)b - Mệnh: Cự Môn + Lộc Tồn tọa thủ ở Tỵ/Hợi, gặp Hóa Quyền + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoHoiChieuRong("Mệnh", "Đà La", false) && isSaoHoiChieuRong("Mệnh", "Hóa Kỵ", false)) {
        keyArr.push("Phú Giải số 33 (CỰ MÔN) - Mệnh: Cự Môn tọa thủ, gặp Đà La + Hóa Kỵ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 36 (CỰ MÔN) - Mệnh: Cự Môn tọa thủ, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn") && isSaoToaThuTaiCung("Mệnh", "Lộc Tồn")) {
        keyArr.push("Phú Giải số 38 (CỰ MÔN) - Mệnh: Cự Môn + Lộc Tồn tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng")) {
        keyArr.push("Phú Giải số 2 (THIÊN ĐỒNG) - Mệnh: Thiên Đồng tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Mệnh", "Kình Dương") && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 6 (THIÊN ĐỒNG) - Mệnh: Thiên Đồng + Kình Dương tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương")) {
        keyArr.push("Phú Giải số 1 (THIÊN LƯƠNG) - Mệnh: Thiên Lương tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Ngọ")) && isSaoHoiChieuRong("Mệnh", "Thái Âm", false) && isSaoHoiChieuRong("Mệnh", "Linh Tinh", false)) {
        keyArr.push("Phú Giải số 7 (THIÊN LƯƠNG) - Mệnh: Thiên Lương tọa thủ ở Tý/Sửu/Dần/Mão/Thìn/Tỵ/Ngọ, gặp Thái Âm + Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Thiên Mã", false)) {
        keyArr.push("Phú Giải số 8 (THIÊN LƯƠNG) - Mệnh: Thiên Lương tọa thủ ở Tỵ/Hợi, gặp Thiên Mã");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Mão"))) {
        keyArr.push("Phú Giải số 11 (THIÊN LƯƠNG) - Mệnh: Thiên Lương + Thái Dương tọa thủ ở Mão");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && (isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 12 (THIÊN LƯƠNG) - Mệnh: Thiên Lương + Thiên Khôi tọa thủ ở Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân")) && isSaoHoiChieuRong("Mệnh", "Thiên Cơ", false) && isSaoHoiChieuRong("Mệnh", "Thái Âm", false)) {
        keyArr.push("Phú Giải số 16 (THIÊN LƯƠNG) - Mệnh: Thiên Lương + Thiên Đồng tọa thủ ở Dần/Thân, gặp Thiên Cơ + Thái Âm");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isCungTaiChi("Mệnh", "Tỵ")) && isSaoHoiChieuRong("Mệnh", "Thái Dương", false) && isSaoHoiChieuRong("Mệnh", "Văn Xương", false) && (isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false) || isSaoHoiChieuRong("Mệnh", "Lộc Tồn", false))) {
        keyArr.push("Phú Giải số 18 (THIÊN LƯƠNG)a - Mệnh: Thiên Lương tọa thủ ở Tỵ, gặp Thái Dương + Văn Xương + Hóa Lộc hoặc Lộc Tồn");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Ngọ")) && isSaoHoiChieuRong("Mệnh", "Thiên Lương", false) && isSaoHoiChieuRong("Mệnh", "Văn Xương", false) && (isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false) || isSaoHoiChieuRong("Mệnh", "Lộc Tồn", false))) {
        keyArr.push("Phú Giải số 18 (THIÊN LƯƠNG)b - Mệnh: Thái Dương tọa thủ ở Ngọ, gặp Thiên Lương + Văn Xương + Hóa Lộc hoặc Lộc Tồn");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Thìn")) && isSaoHoiChieuRong("Mệnh", "Thái Dương", false)) {
        keyArr.push("Phú Giải số 3 (THÁI DƯƠNG)a - Mệnh: Thái Âm tọa thủ ở Thìn, gặp Thái Dương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Thái Âm", false)) {
        keyArr.push("Phú Giải số 3 (THÁI DƯƠNG)b - Mệnh: Thái Dương tọa thủ ở Tuất, gặp Thái Âm");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 4 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Dần"))) {
        keyArr.push("Phú Giải số 5 (THÁI DƯƠNG) - Mệnh: Thái Âm tọa thủ ở Dần");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tỵ"))) {
        keyArr.push("Phú Giải số 8 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Mão/Thìn/Tỵ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Thìn")) && isSaoHoiChieuRong("Mệnh", "Thái Âm", false)) {
        keyArr.push("Phú Giải số 12 (THÁI DƯƠNG)a - Mệnh: Thái Dương tọa thủ ở Thìn, gặp Thái Âm");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Thái Dương", false)) {
        keyArr.push("Phú Giải số 12 (THÁI DƯƠNG)b - Mệnh: Thái Âm tọa thủ ở Tuất, gặp Thái Dương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Sửu"))) {
        keyArr.push("Phú Giải số 20 (THÁI DƯƠNG) - Mệnh: Thái Dương + Thái Âm tọa thủ ở Sửu");
    }
    if (laCungVoChinhDieu("Mệnh") && (isCungTaiChi("Mệnh", "Sửu")) && isSaoHoiChieuRong("Mệnh", "Thái Dương", false) && isSaoHoiChieuRong("Mệnh", "Thái Âm", false)) {
        keyArr.push("Phú Giải số 21 (THÁI DƯƠNG) - Mệnh: vô chính diệu ở Sửu, gặp Thái Dương + Thái Âm");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Sửu")) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 23 (THÁI DƯƠNG) - Mệnh: Thái Dương + Thái Âm tọa thủ ở Sửu, gặp Hóa Khoa + Hóa Lộc");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Thái Dương") || isSaoToaThuTaiCung("Mệnh", "Thái Âm")) && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 28 (THÁI DƯƠNG) - Mệnh: Thái Dương hoặc Thái Âm tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Thân") || isCungTaiChi("Mệnh", "Dậu") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Hợi") || isCungTaiChi("Mệnh", "Tý"))) {
        keyArr.push("Phú Giải số 35 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Thân/Dậu/Tuất/Hợi/Tý");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Tý"))) {
        keyArr.push("Phú Giải số 38 (THÁI DƯƠNG)a - Mệnh: Thái Âm tọa thủ ở Tý");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 38 (THÁI DƯƠNG)b - Mệnh: Thái Dương tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 40 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Hợi, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Hợi")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 41 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Hợi, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoHoiChieuRong("Mệnh", "Hóa Kỵ", false)) {
        keyArr.push("Phú Giải số 51 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ, gặp Hóa Kỵ");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Thái Dương") || isSaoToaThuTaiCung("Mệnh", "Thái Âm")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false))) {
        keyArr.push("Phú Giải số 53 (THÁI DƯƠNG) - Mệnh: Thái Dương hoặc Thái Âm tọa thủ, gặp Kình Dương hoặc Đà La");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Tỵ")) && isSaoHoiChieuRong("Mệnh", "Cự Môn", false)) {
        keyArr.push("Phú Giải số 59 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Tỵ, gặp Cự Môn");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Cự Môn", false)) {
        keyArr.push("Phú Giải số 60 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Hợi, gặp Cự Môn");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Thái Dương") || isSaoToaThuTaiCung("Mệnh", "Thái Âm")) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 66 (THÁI DƯƠNG) - Mệnh: Thái Dương hoặc Thái Âm tọa thủ, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (lasoData.cungCu !== "Mệnh" && (isSaoToaThuTaiCung(lasoData.cungCu, "Thái Dương") || isSaoToaThuTaiCung(lasoData.cungCu, "Thái Âm")) && (isSaoHoiChieuRong(lasoData.cungCu, "Kình Dương", false) || isSaoHoiChieuRong(lasoData.cungCu, "Đà La", false) || isSaoHoiChieuRong(lasoData.cungCu, "Địa Không", false) || isSaoHoiChieuRong(lasoData.cungCu, "Địa Kiếp", false) || isSaoHoiChieuRong(lasoData.cungCu, "Hỏa Tinh", false) || isSaoHoiChieuRong(lasoData.cungCu, "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 66 (THÁI DƯƠNG) - Thân cư: Thái Dương hoặc Thái Âm tọa thủ, gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Thái Dương") || isSaoToaThuTaiCung("Mệnh", "Thái Âm")) && isSaoHoiChieuRong("Mệnh", "Thiên Hình", false) && isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false)) {
        keyArr.push("Phú Giải số 71 (THÁI DƯƠNG) - Mệnh: Thái Dương hoặc Thái Âm tọa thủ, gặp Thiên Hình + Hỏa Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && (isCungTaiChi("Mệnh", "Tý"))) {
        keyArr.push("Phú Giải số 10 (THÁI ÂM) - Mệnh: Thái Âm tọa thủ ở Tý");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") && isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 1 (HÓA KỴ) - Mệnh: Hóa Khoa + Hóa Quyền tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") && isSaoToaThuTaiCung("Mệnh", "Hóa Quyền")) {
        keyArr.push("Phú Giải số 4 (HÓA KỴ) - Mệnh: Hóa Khoa + Hóa Quyền tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") && (isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false) || isSaoHoiChieuRong("Mệnh", "Thiên Việt", false) || isSaoHoiChieuRong("Mệnh", "Văn Xương", false) || isSaoHoiChieuRong("Mệnh", "Văn Khúc", false))) {
        keyArr.push("Phú Giải số 7 (HÓA KỴ) - Mệnh: Hóa Khoa tọa thủ, gặp Thiên Khôi hoặc Thiên Việt hoặc Văn Xương hoặc Văn Khúc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Khoa") && isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false) && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) {
        keyArr.push("Phú Giải số 9 (HÓA KỴ) - Mệnh: Hóa Khoa + Hóa Quyền tọa thủ, gặp Thiên Khôi + Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") && isSaoToaThuTaiCung("Mệnh", "Thiên Khốc")) {
        keyArr.push("Phú Giải số 20 (HÓA KỴ)a - Mệnh: Hóa Quyền + Thiên Khốc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") && isSaoToaThuTaiCung("Mệnh", "Thiên Khốc") && (isCungTaiChi("Mệnh", "Tỵ"))) {
        keyArr.push("Phú Giải số 20 (HÓA KỴ)b - Mệnh: Hóa Quyền + Thiên Khốc tọa thủ ở Tỵ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Quyền") && isSaoToaThuTaiCung("Mệnh", "Hóa Lộc")) {
        keyArr.push("Phú Giải số 21 (HÓA KỴ) - Mệnh: Hóa Quyền + Hóa Lộc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && isSaoToaThuTaiCung("Mệnh", "Lộc Tồn")) {
        keyArr.push("Phú Giải số 27 (HÓA KỴ) - Mệnh: Hóa Lộc + Lộc Tồn tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 28 (HÓA KỴ) - Mệnh: Hóa Lộc tọa thủ ở Thìn/Tuất/Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && !isSaoHoiChieuRong("Mệnh", "Kình Dương", false) && !isSaoHoiChieuRong("Mệnh", "Đà La", false) && !isSaoHoiChieuRong("Mệnh", "Địa Không", false) && !isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) && !isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) && !isSaoHoiChieuRong("Mệnh", "Linh Tinh", false)) {
        keyArr.push("Phú Giải số 30 (HÓA KỴ) - Mệnh: Hóa Lộc tọa thủ, không gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && (isCungTaiChi("Mệnh", "Tý") || isCungTaiChi("Mệnh", "Ngọ") || isCungTaiChi("Mệnh", "Thân") || isCungTaiChi("Mệnh", "Dậu")) && (isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false))) {
        keyArr.push("Phú Giải số 34 (HÓA KỴ) - Mệnh: Hóa Lộc tọa thủ ở Tý/Ngọ/Thân/Dậu, gặp Địa Không hoặc Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 35 (HÓA KỴ)a - Mệnh: Hóa Lộc tọa thủ ở Thìn/Tuất/Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && isSaoHoiChieuRong("Mệnh", "Tham Lang", false) && isSaoHoiChieuRong("Mệnh", "Vũ Khúc", false)) {
        keyArr.push("Phú Giải số 35 (HÓA KỴ)b - Mệnh: Hóa Lộc tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp Tham Lang + Vũ Khúc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Mão"))) {
        keyArr.push("Phú Giải số 36 (HÓA KỴ) - Mệnh: Hóa Lộc tọa thủ ở Dần/Mão");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") && (isSaoHoiChieuRong("Mệnh", "Văn Xương", false) || isSaoHoiChieuRong("Mệnh", "Văn Khúc", false) || isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false) || isSaoHoiChieuRong("Mệnh", "Thiên Việt", false))) {
        keyArr.push("Phú Giải số 37 (HÓA KỴ) - Mệnh: Hóa Kỵ tọa thủ, gặp Văn Xương hoặc Văn Khúc hoặc Thiên Khôi hoặc Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ")) {
        keyArr.push("Phú Giải số 44 (HÓA KỴ) - Mệnh: Hóa Kỵ tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && isSaoHoiChieuRong("Mệnh", "Đà La", false) && isSaoHoiChieuRong("Mệnh", "Bạch Hổ", false)) {
        keyArr.push("Phú Giải số 49 (HÓA KỴ) - Mệnh: Hóa Kỵ tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp Đà La + Bạch Hổ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") && (isCungTaiChi("Mệnh", "Hợi") || isCungTaiChi("Mệnh", "Tý")) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false)) {
        keyArr.push("Phú Giải số 50 (HÓA KỴ) - Mệnh: Hóa Kỵ tọa thủ ở Hợi/Tý, gặp Hóa Khoa");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ") && (isCungTaiChi("Mệnh", "Tý")) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Thiên Lương", false)) {
        keyArr.push("Phú Giải số 51 (HÓA KỴ) - Mệnh: Hóa Kỵ tọa thủ ở Tý, gặp Hóa Khoa + Thiên Lương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất")) && isSaoHoiChieuRong("Mệnh", "Lộc Tồn", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 6 (TRÀNG SINH) - Mệnh: Thiên Cơ + Thiên Lương tọa thủ ở Thìn/Tuất, gặp Lộc Tồn + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && (isSaoHoiChieuRong("Mệnh", "Cự Môn", false) || isSaoHoiChieuRong("Mệnh", "Quả Tú", false) || isSaoHoiChieuRong("Mệnh", "Hóa Kỵ", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false))) {
        keyArr.push("Phú Giải số 9 (TRÀNG SINH) - Mệnh: Lộc Tồn tọa thủ, gặp Cự Môn hoặc Quả Tú hoặc Hóa Kỵ hoặc Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && isSaoToaThuTaiCung("Thiên Di", "Hóa Lộc")) {
        keyArr.push("Phú Giải số 12 (TRÀNG SINH)a - Mệnh: Lộc Tồn tọa thủ (kèm điều kiện cung đối)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && isSaoToaThuTaiCung("Thiên Di", "Lộc Tồn")) {
        keyArr.push("Phú Giải số 12 (TRÀNG SINH)b - Mệnh: Hóa Lộc tọa thủ (kèm điều kiện cung đối)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && isSaoToaThuTaiCung("Mệnh", "Hóa Lộc")) {
        keyArr.push("Phú Giải số 17 (TRÀNG SINH) - Mệnh: Lộc Tồn + Hóa Lộc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân") || isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 18 (TRÀNG SINH) - Mệnh: Lộc Tồn + Thiên Mã tọa thủ ở Dần/Thân/Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && (isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Không") || isSaoToaThuTaiCung(lasoData.cungCu, "Địa Không"))) {
        keyArr.push("Phú Giải số 21 (TRÀNG SINH) - Mệnh: Lộc Tồn tọa thủ (kèm điều kiện về Thân cư)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && isSaoToaThuTaiCung("Mệnh", "Thiên Mã")) {
        keyArr.push("Phú Giải số 24 (TRÀNG SINH) - Mệnh: Lộc Tồn + Thiên Mã tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Tuế")) {
        keyArr.push("Phú Giải số 25 (TRÀNG SINH) - Mệnh: Thái Tuế tọa thủ");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Thái Tuế")) {
        keyArr.push("Phú Giải số 25 (TRÀNG SINH) - Thân cư: Thái Tuế tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Tuế") && (isCungTaiChi("Mệnh", "Dậu")) && isSaoHoiChieuRong("Mệnh", "Thiên Hình", false)) {
        keyArr.push("Phú Giải số 30 (TRÀNG SINH) - Mệnh: Thái Tuế tọa thủ ở Dậu, gặp Thiên Hình");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && (isCungTaiChi("Mệnh", "Ngọ")) && isSaoHoiChieuRong("Mệnh", "Thất Sát", false) && isSaoHoiChieuRong("Mệnh", "Thiên Hình", false)) {
        keyArr.push("Phú Giải số 5 (ĐÀ LA) - Mệnh: Kình Dương tọa thủ ở Ngọ, gặp Thất Sát + Thiên Hình");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isSaoToaThuTaiCung("Mệnh", "Kình Dương") && (isCungTaiChi("Mệnh", "Ngọ")) && isSaoHoiChieuRong("Mệnh", "Phượng Các", false) && isSaoHoiChieuRong("Mệnh", "Giải Thần", false)) {
        keyArr.push("Phú Giải số 6 (ĐÀ LA) - Mệnh: Thiên Đồng + Thái Âm + Kình Dương tọa thủ ở Ngọ, gặp Phượng Các + Giải Thần");
    }
    if (isSaoToaThuTaiCung(lasoData.cungCu, "Thái Tuế") && isSaoHoiChieuRong(lasoData.cungCu, "Đà La", false) && isSaoHoiChieuRong(lasoData.cungCu, "Hóa Kỵ", false)) {
        keyArr.push("Phú Giải số 25 (ĐÀ LA) - Thân cư: Thái Tuế tọa thủ, gặp Đà La + Hóa Kỵ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && (isSaoHoiChieuRong("Mệnh", "Thái Dương", false) || isSaoHoiChieuRong("Mệnh", "Thái Âm", false))) {
        keyArr.push("Phú Giải số 26 (ĐÀ LA) - Mệnh: Kình Dương tọa thủ, gặp Thái Dương hoặc Thái Âm");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && isSaoToaThuTaiCung("Mệnh", "Hỏa Tinh") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 42 (ĐÀ LA)a - Mệnh: Kình Dương + Hỏa Tinh tọa thủ ở Thìn/Tuất/Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && isSaoToaThuTaiCung("Mệnh", "Hỏa Tinh") && isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 42 (ĐÀ LA)b - Mệnh: Kình Dương + Hỏa Tinh + Tham Lang + Vũ Khúc tọa thủ ở Thìn/Tuất/Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") && isSaoToaThuTaiCung("Mệnh", "Địa Không") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 3 (ĐỊA KIẾP) - Mệnh: Địa Kiếp + Địa Không tọa thủ ở Tỵ/Hợi, gặp Hóa Quyền + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") && isSaoToaThuTaiCung("Mệnh", "Địa Không") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 4 (ĐỊA KIẾP) - Mệnh: Địa Kiếp + Địa Không tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") && isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false)) {
        keyArr.push("Phú Giải số 6 (ĐỊA KIẾP) - Mệnh: Địa Kiếp + Thiên Cơ tọa thủ, gặp Hỏa Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") && isSaoToaThuTaiCung("Mệnh", "Tham Lang")) {
        keyArr.push("Phú Giải số 17 (ĐỊA KIẾP) - Mệnh: Địa Kiếp + Tham Lang tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Địa Không") && isSaoToaThuTaiCung(lasoData.cungCu, "Địa Kiếp")) {
        keyArr.push("Phú Giải số 19 (ĐỊA KIẾP) - Mệnh: Địa Không tọa thủ (kèm điều kiện về Thân cư)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Bạch Hổ")) {
        keyArr.push("Phú Giải số 1 (TANG MÔN) - Mệnh: Bạch Hổ tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tang Môn") && (isCungTaiChi("Mệnh", "Thìn"))) {
        keyArr.push("Phú Giải số 5 (TANG MÔN) - Mệnh: Tang Môn tọa thủ ở Thìn");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Đại Hao") && isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ")) {
        keyArr.push("Phú Giải số 4 (TIỂU HAO) - Mệnh: Đại Hao + Hóa Kỵ tọa thủ");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Đại Hao") || isSaoToaThuTaiCung("Mệnh", "Tiểu Hao")) && (isSaoHoiChieuRong("Mệnh", "Cự Môn", false) || isSaoHoiChieuRong("Mệnh", "Vũ Khúc", false)) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false)) {
        keyArr.push("Phú Giải số 5 (TIỂU HAO) - Mệnh: Đại Hao hoặc Tiểu Hao tọa thủ, gặp Cự Môn hoặc Vũ Khúc + Hóa Quyền");
    }
    if (((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false)))) {
        keyArr.push("Phú Giải số 1 (THIÊN VIỆT) - Mệnh: Thiên Khôi, Thiên Việt (tọa hoặc chiếu)");
    }
    if (lasoData.cungCu !== "Mệnh" && ((isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Việt", false)) || (isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Khôi", false)))) {
        keyArr.push("Phú Giải số 1 (THIÊN VIỆT) - Thân cư: Thiên Khôi, Thiên Việt (tọa hoặc chiếu)");
    }
    if (((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false)))) {
        keyArr.push("Phú Giải số 2 (THIÊN VIỆT) - Mệnh: Thiên Khôi, Thiên Việt (tọa hoặc chiếu)");
    }
    if (lasoData.cungCu !== "Mệnh" && ((isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Việt", false)) || (isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Khôi", false)))) {
        keyArr.push("Phú Giải số 2 (THIÊN VIỆT) - Thân cư: Thiên Khôi, Thiên Việt (tọa hoặc chiếu)");
    }
    if (((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false)))) {
        keyArr.push("Phú Giải số 5 (THIÊN VIỆT) - Mệnh: Thiên Khôi, Thiên Việt (tọa hoặc chiếu)");
    }
    if (lasoData.cungCu !== "Mệnh" && ((isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Việt", false)) || (isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Khôi", false)))) {
        keyArr.push("Phú Giải số 5 (THIÊN VIỆT) - Thân cư: Thiên Khôi, Thiên Việt (tọa hoặc chiếu)");
    }
    if (((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false)))) {
        keyArr.push("Phú Giải số 6 (THIÊN VIỆT) - Mệnh: Thiên Khôi, Thiên Việt (tọa hoặc chiếu)");
    }
    if (((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false))) && isSaoHoiChieuRong("Mệnh", "Thiên Quan", false) && isSaoHoiChieuRong("Mệnh", "Thiên Phúc", false)) {
        keyArr.push("Phú Giải số 10 (THIÊN VIỆT) - Mệnh: Thiên Khôi, Thiên Việt (tọa hoặc chiếu), gặp Thiên Quan + Thiên Phúc");
    }
    if (lasoData.cungCu !== "Mệnh" && ((isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Việt", false)) || (isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Khôi", false))) && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Quan", false) && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Phúc", false)) {
        keyArr.push("Phú Giải số 10 (THIÊN VIỆT) - Thân cư: Thiên Khôi, Thiên Việt (tọa hoặc chiếu), gặp Thiên Quan + Thiên Phúc");
    }
    if (((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false))) && (isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) || isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false))) {
        keyArr.push("Phú Giải số 12 (THIÊN VIỆT) - Mệnh: Thiên Khôi, Thiên Việt (tọa hoặc chiếu), gặp Hóa Quyền hoặc Hóa Lộc");
    }
    if (lasoData.cungCu !== "Mệnh" && ((isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Khôi") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Việt", false)) || (isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Việt") && isSaoHoiChieuRong(lasoData.cungCu, "Thiên Khôi", false))) && (isSaoHoiChieuRong(lasoData.cungCu, "Hóa Quyền", false) || isSaoHoiChieuRong(lasoData.cungCu, "Hóa Lộc", false))) {
        keyArr.push("Phú Giải số 12 (THIÊN VIỆT) - Thân cư: Thiên Khôi, Thiên Việt (tọa hoặc chiếu), gặp Hóa Quyền hoặc Hóa Lộc");
    }
    if (((isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && isSaoHoiChieuRong("Mệnh", "Thiên Việt", false)) || (isSaoToaThuTaiCung("Mệnh", "Thiên Việt") && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false))) && (isSaoHoiChieuRong("Mệnh", "Kình Dương", false) || isSaoHoiChieuRong("Mệnh", "Đà La", false) || isSaoHoiChieuRong("Mệnh", "Địa Không", false) || isSaoHoiChieuRong("Mệnh", "Địa Kiếp", false) || isSaoHoiChieuRong("Mệnh", "Hỏa Tinh", false) || isSaoHoiChieuRong("Mệnh", "Linh Tinh", false))) {
        keyArr.push("Phú Giải số 17 (THIÊN VIỆT) - Mệnh: Thiên Khôi, Thiên Việt (tọa hoặc chiếu), gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp hoặc Hỏa Tinh hoặc Linh Tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc")) {
        keyArr.push("Phú Giải số 1 (VĂN XƯƠNG) - Mệnh: Văn Xương + Văn Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 5 (VĂN XƯƠNG) - Mệnh: Văn Xương + Văn Khúc tọa thủ ở Sửu/Mùi");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Văn Xương") && isSaoToaThuTaiCung(lasoData.cungCu, "Văn Khúc") && (isCungTaiChi(lasoData.cungCu, "Sửu") || isCungTaiChi(lasoData.cungCu, "Mùi"))) {
        keyArr.push("Phú Giải số 5 (VĂN XƯƠNG) - Thân cư: Văn Xương + Văn Khúc tọa thủ ở Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc")) {
        keyArr.push("Phú Giải số 6 (VĂN XƯƠNG) - Mệnh: Văn Xương + Văn Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 7 (VĂN XƯƠNG)a - Mệnh: Văn Xương + Văn Khúc tọa thủ ở Thìn/Tuất/Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 7 (VĂN XƯƠNG)b - Mệnh: Văn Xương + Văn Khúc tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 9 (VĂN XƯƠNG) - Mệnh: Văn Xương + Văn Khúc tọa thủ ở Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi"))) {
        keyArr.push("Phú Giải số 12 (VĂN XƯƠNG) - Mệnh: Văn Xương + Văn Khúc tọa thủ ở Sửu/Mùi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && isSaoHoiChieuRong("Mệnh", "Thái Tuế", false) && isSaoHoiChieuRong("Mệnh", "Kình Dương", false)) {
        keyArr.push("Phú Giải số 17 (VĂN XƯƠNG) - Mệnh: Văn Xương + Văn Khúc tọa thủ, gặp Thái Tuế + Kình Dương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Quả Tú")) {
        keyArr.push("Phú Giải số 19 (VĂN XƯƠNG) - Mệnh: Văn Xương + Quả Tú tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && isSaoToaThuTaiCung("Mệnh", "Văn Xương") && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 21 (VĂN XƯƠNG) - Mệnh: Thái Dương + Văn Xương tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc")) {
        keyArr.push("Phú Giải số 27 (VĂN XƯƠNG) - Mệnh: Văn Xương + Văn Khúc tọa thủ");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Văn Xương") && isSaoToaThuTaiCung(lasoData.cungCu, "Văn Khúc")) {
        keyArr.push("Phú Giải số 27 (VĂN XƯƠNG) - Thân cư: Văn Xương + Văn Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoToaThuTaiCung("Mệnh", "Tả Phù")) {
        keyArr.push("Phú Giải số 35 (VĂN XƯƠNG) - Mệnh: Văn Xương + Tả Phù tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && isSaoToaThuTaiCung("Mệnh", "Văn Xương") && isSaoHoiChieuRong("Mệnh", "Thái Dương", false) && isSaoHoiChieuRong("Mệnh", "Thái Âm", false) && isSaoHoiChieuRong("Mệnh", "Thanh Long", false) && isSaoHoiChieuRong("Mệnh", "Long Đức", false)) {
        keyArr.push("Phú Giải số 36 (VĂN XƯƠNG) - Mệnh: Văn Khúc + Văn Xương tọa thủ, gặp Thái Dương + Thái Âm + Thanh Long + Long Đức");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc")) {
        keyArr.push("Phú Giải số 37 (VĂN XƯƠNG)a - Mệnh: Thiên Lương + Văn Khúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương") && isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && (isCungTaiChi("Mệnh", "Ngọ"))) {
        keyArr.push("Phú Giải số 37 (VĂN XƯƠNG)b - Mệnh: Thiên Lương + Văn Khúc tọa thủ ở Ngọ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi")) && isSaoHoiChieuRong("Mệnh", "Thiên Hình", false) && isSaoHoiChieuRong("Mệnh", "Văn Xương", false) && isSaoHoiChieuRong("Mệnh", "Văn Khúc", false)) {
        keyArr.push("Phú Giải số 55 (VĂN XƯƠNG) - Mệnh: Liêm Trinh tọa thủ ở Tỵ/Hợi, gặp Thiên Hình + Văn Xương + Văn Khúc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tả Phù") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật")) {
        keyArr.push("Phú Giải số 1 (HỮU BẬT) - Mệnh: Tả Phù + Hữu Bật tọa thủ");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Tả Phù") && isSaoToaThuTaiCung(lasoData.cungCu, "Hữu Bật")) {
        keyArr.push("Phú Giải số 1 (HỮU BẬT) - Thân cư: Tả Phù + Hữu Bật tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tả Phù") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật") && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false) && isSaoHoiChieuRong("Mệnh", "Hóa Quyền", false) && isSaoHoiChieuRong("Mệnh", "Hóa Lộc", false)) {
        keyArr.push("Phú Giải số 3 (HỮU BẬT) - Mệnh: Tả Phù + Hữu Bật tọa thủ, gặp Hóa Khoa + Hóa Quyền + Hóa Lộc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hữu Bật") && isSaoHoiChieuRong("Mệnh", "Quả Tú", false)) {
        keyArr.push("Phú Giải số 5 (HỮU BẬT) - Mệnh: Hữu Bật tọa thủ, gặp Quả Tú");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Hữu Bật") && isSaoHoiChieuRong(lasoData.cungCu, "Quả Tú", false)) {
        keyArr.push("Phú Giải số 5 (HỮU BẬT) - Thân cư: Hữu Bật tọa thủ, gặp Quả Tú");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Tả Phù") || isSaoToaThuTaiCung("Mệnh", "Hữu Bật")) && isSaoHoiChieuRong("Mệnh", "Thiên Tướng", false)) {
        keyArr.push("Phú Giải số 6 (HỮU BẬT) - Mệnh: Tả Phù hoặc Hữu Bật tọa thủ, gặp Thiên Tướng");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Tả Phù") || isSaoToaThuTaiCung("Mệnh", "Hữu Bật")) && isSaoToaThuTaiCung("Mệnh", "Thiên Phúc")) {
        keyArr.push("Phú Giải số 9 (HỮU BẬT) - Mệnh: Tả Phù hoặc Hữu Bật + Thiên Phúc tọa thủ");
    }
    if (lasoData.cungCu !== "Mệnh" && (isSaoToaThuTaiCung(lasoData.cungCu, "Tả Phù") || isSaoToaThuTaiCung(lasoData.cungCu, "Hữu Bật")) && isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Phúc")) {
        keyArr.push("Phú Giải số 9 (HỮU BẬT) - Thân cư: Tả Phù hoặc Hữu Bật + Thiên Phúc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật")) {
        keyArr.push("Phú Giải số 16 (HỮU BẬT)a - Mệnh: Thiên Tướng + Hữu Bật tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật") && (isCungTaiChi("Mệnh", "Tỵ") || isCungTaiChi("Mệnh", "Hợi"))) {
        keyArr.push("Phú Giải số 16 (HỮU BẬT)b - Mệnh: Thiên Tướng + Hữu Bật tọa thủ ở Tỵ/Hợi");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu"))) {
        keyArr.push("Phú Giải số 16 (HỮU BẬT)c - Mệnh: Thiên Tướng + Hữu Bật tọa thủ ở Mão/Dậu");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tả Phù") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (isSaoHoiChieuRong("Mệnh", "Tử Vi", false) || isSaoHoiChieuRong("Mệnh", "Thiên Phủ", false) || isSaoHoiChieuRong("Mệnh", "Thiên Cơ", false) || isSaoHoiChieuRong("Mệnh", "Thái Âm", false) || isSaoHoiChieuRong("Mệnh", "Thiên Đồng", false) || isSaoHoiChieuRong("Mệnh", "Thiên Lương", false) || isSaoHoiChieuRong("Mệnh", "Thất Sát", false) || isSaoHoiChieuRong("Mệnh", "Phá Quân", false) || isSaoHoiChieuRong("Mệnh", "Liêm Trinh", false) || isSaoHoiChieuRong("Mệnh", "Tham Lang", false))) {
        keyArr.push("Phú Giải số 17 (HỮU BẬT) - Mệnh: Tả Phù + Hữu Bật tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp Tử Vi hoặc Thiên Phủ hoặc Thiên Cơ hoặc Thái Âm hoặc Thiên Đồng hoặc Thiên Lương hoặc Thất Sát hoặc Phá Quân hoặc Liêm Trinh hoặc Tham Lang");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tả Phù") && isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất"))) {
        keyArr.push("Phú Giải số 20 (HỮU BẬT) - Mệnh: Tả Phù + Thiên Phủ tọa thủ ở Thìn/Tuất");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tả Phù")) {
        keyArr.push("Phú Giải số 22 (HỮU BẬT) - Mệnh: Tả Phù tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tả Phù") && isSaoToaThuTaiCung("Mệnh", "Hữu Bật")) {
        keyArr.push("Phú Giải số 30 (HỮU BẬT) - Mệnh: Tả Phù + Hữu Bật tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Đào Hoa") && isSaoToaThuTaiCung("Mệnh", "Hồng Loan") && isSaoHoiChieuRong("Mệnh", "Thiên Cơ", false)) {
        keyArr.push("Phú Giải số 4 (HỒNG LOAN) - Mệnh: Đào Hoa + Hồng Loan tọa thủ, gặp Thiên Cơ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Đào Hoa") && isSaoToaThuTaiCung("Mệnh", "Địa Kiếp")) {
        keyArr.push("Phú Giải số 5 (HỒNG LOAN) - Mệnh: Đào Hoa + Địa Kiếp tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoHoiChieuRong("Mệnh", "Hồng Loan", false) && isSaoHoiChieuRong("Mệnh", "Thiên Khôi", false) && isSaoHoiChieuRong("Mệnh", "Văn Xương", false)) {
        keyArr.push("Phú Giải số 14 (HỒNG LOAN) - Mệnh: Liêm Trinh tọa thủ, gặp Hồng Loan + Thiên Khôi + Văn Xương");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tam Thai") && isSaoToaThuTaiCung("Mệnh", "Bát Tọa") && isSaoToaThuTaiCung("Mệnh", "Phong Cáo")) {
        keyArr.push("Phú Giải số 2 (BÁT TỌA) - Mệnh: Tam Thai + Bát Tọa + Phong Cáo tọa thủ");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Tam Thai") && isSaoToaThuTaiCung(lasoData.cungCu, "Bát Tọa") && isSaoToaThuTaiCung(lasoData.cungCu, "Phong Cáo")) {
        keyArr.push("Phú Giải số 2 (BÁT TỌA) - Thân cư: Tam Thai + Bát Tọa + Phong Cáo tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã")) {
        keyArr.push("Phú Giải số 1 (THIÊN MÃ) - Mệnh: Thiên Mã tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && isSaoToaThuTaiCung("Mệnh", "Hóa Lộc")) {
        keyArr.push("Phú Giải số 7 (THIÊN MÃ) - Mệnh: Thiên Mã + Hóa Lộc tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && isSaoHoiChieuRong("Mệnh", "Thiên Hình", false) && isSaoHoiChieuRong("Mệnh", "Thiên Khốc", false)) {
        keyArr.push("Phú Giải số 10 (THIÊN MÃ) - Mệnh: Thiên Mã tọa thủ, gặp Thiên Hình + Thiên Khốc");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && (isCungTaiChi("Mệnh", "Tỵ")) && isSaoHoiChieuRong("Mệnh", "Thiên Lương", false) && isSaoHoiChieuRong("Mệnh", "Hóa Khoa", false)) {
        keyArr.push("Phú Giải số 11 (THIÊN MÃ) - Mệnh: Thiên Mã tọa thủ ở Tỵ, gặp Thiên Lương + Hóa Khoa");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Hình") && isSaoToaThuTaiCung("Mệnh", "Thất Sát")) {
        keyArr.push("Phú Giải số 1 (THIÊN HÌNH) - Mệnh: Thiên Hình + Thất Sát tọa thủ");
    }
    if (lasoData.cungCu !== "Mệnh" && isSaoToaThuTaiCung(lasoData.cungCu, "Thiên Hình") && isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát")) {
        keyArr.push("Phú Giải số 1 (THIÊN HÌNH) - Thân cư: Thiên Hình + Thất Sát tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Dần") || isCungTaiChi("Mệnh", "Thân")) && isSaoHoiChieuRong("Mệnh", "Thiên Hình", false)) {
        keyArr.push("Phú Giải số 10 (THIÊN HÌNH) - Mệnh: Thất Sát tọa thủ ở Dần/Thân, gặp Thiên Hình");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thanh Long") && (isCungTaiChi("Mệnh", "Tý"))) {
        keyArr.push("Phú Giải số 4 (THIÊN QUÝ) - Mệnh: Thanh Long tọa thủ ở Tý");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Riêu") && isSaoHoiChieuRong("Mệnh", "Thiên Hỷ", false)) {
        keyArr.push("Phú Giải số 14 (THIÊN Ý) - Mệnh: Thiên Riêu tọa thủ, gặp Thiên Hỷ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Quan Phù") && (isCungTaiChi("Mệnh", "Tuất"))) {
        keyArr.push("Phú Giải số 13 (PHỤ LỤC) - Mệnh: Quan Phù tọa thủ ở Tuất");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Quan Phù")) {
        keyArr.push("Phú Giải số 16 (PHỤ LỤC) - Mệnh: Quan Phù tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Tướng") && isSaoHoiChieuRong("Mệnh", "Thiên Quan", false) && isSaoHoiChieuRong("Mệnh", "Tấu Thư", false)) {
        keyArr.push("Phú Giải số 21 (PHỤ LỤC) - Mệnh: Thiên Tướng tọa thủ, gặp Thiên Quan + Tấu Thư");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Khôi") && (isCungTaiChi("Mệnh", "Tý"))) {
        keyArr.push("Phú Giải số 11 (THIÊN VIỆT) - Mệnh: Thiên Khôi tọa thủ ở Tý");
    }
    if ((isSaoToaThuTaiCung("Mệnh", "Tử Vi") || isSaoToaThuTaiCung("Mệnh", "Phá Quân")) && (isCungTaiChi("Mệnh", "Thìn") || isCungTaiChi("Mệnh", "Tuất") || isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (phu17DemCatTinh("Mệnh") > 2)) {
        keyArr.push("Phú Giải số 54 (TỬ VI) - Mệnh: Tử Vi hoặc Phá Quân tọa thủ ở Thìn/Tuất/Sửu/Mùi, gặp nhiều cát tinh (từ 3 sao)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && (phu17DemCatTinh("Mệnh") > 2)) {
        keyArr.push("Phú Giải số 9 (LIÊM TRINH)a - Mệnh: Liêm Trinh tọa thủ ở Mão/Dậu, gặp nhiều cát tinh (từ 3 sao)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && (isCungTaiChi("Mệnh", "Mão") || isCungTaiChi("Mệnh", "Dậu")) && (phu17DemSatTinh("Mệnh") > 1)) {
        keyArr.push("Phú Giải số 9 (LIÊM TRINH)b - Mệnh: Liêm Trinh tọa thủ ở Mão/Dậu, gặp nhiều sát tinh (từ 2 sao)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (phu17DemCatTinh("Mệnh") > 2)) {
        keyArr.push("Phú Giải số 20 (LIÊM TRINH)a - Mệnh: Liêm Trinh + Thất Sát tọa thủ ở Sửu/Mùi, gặp nhiều cát tinh (từ 3 sao)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && isSaoToaThuTaiCung("Mệnh", "Thất Sát") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && (phu17DemSatTinh("Mệnh") > 1)) {
        keyArr.push("Phú Giải số 20 (LIÊM TRINH)b - Mệnh: Liêm Trinh + Thất Sát tọa thủ ở Sửu/Mùi, gặp nhiều sát tinh (từ 2 sao)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng") && (phu17DemCatTinh("Mệnh") > 0)) {
        keyArr.push("Phú Giải số 3 (THIÊN ĐỒNG) - Mệnh: Thiên Đồng tọa thủ, gặp cát tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thái Dương") && (isCungTaiChi("Mệnh", "Hợi") || isCungTaiChi("Mệnh", "Dần")) && (phu17DemCatTinh("Mệnh") > 0)) {
        keyArr.push("Phú Giải số 47 (THÁI DƯƠNG) - Mệnh: Thái Dương tọa thủ ở Hợi/Dần, gặp cát tinh");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tả Phù") && isSaoToaThuTaiCung("Mệnh", "Văn Xương") && (phu17DemCatTinh("Mệnh") > 2)) {
        keyArr.push("Phú Giải số 18 (HỮU BẬT) - Mệnh: Tả Phù + Văn Xương tọa thủ, gặp nhiều cát tinh (từ 3 sao)");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Thanh Long") && isTrangSinhTaiCung("Mệnh", "Mộc Dục")) {
        keyArr.push("Phú Giải số 1 (THIÊN QUÝ) - Mệnh: Thanh Long + vòng Tràng Sinh: Mộc Dục tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Hoa Cái") && isTrangSinhTaiCung("Mệnh", "Mộc Dục")) {
        keyArr.push("Phú Giải số 9 (PHỤ LỤC) - Mệnh: Hoa Cái + vòng Tràng Sinh: Mộc Dục tọa thủ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang") && isSaoToaThuTaiCung("Mệnh", "Vũ Khúc") && (isCungTaiChi("Mệnh", "Sửu") || isCungTaiChi("Mệnh", "Mùi")) && isTrangSinhTaiCung("Mệnh", "Mộ")) {
        keyArr.push("Phú Giải số 45 (THAM LANG)b - Mệnh: Tham Lang + Vũ Khúc tọa thủ ở Sửu/Mùi, gặp vòng Tràng Sinh: Mộ");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Đào Hoa") && (lasoData.amduong === "Dương Nam" || lasoData.amduong === "Âm Nam")) {
        keyArr.push("Phú Giải số 7 (HỒNG LOAN) - Mệnh: Đào Hoa tọa thủ (kèm điều kiện cung đối)");
    }
}
// PHU17-END
