

function LuanGiaiChung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
   
 
    const sinh_khac_nam_sinh = xetSinhKhacNguHanhCanChi(lasoData.canNam, lasoData.chiNam);
    const quan_he_namsinh = hienHuongCoCanChi(sinh_khac_nam_sinh);
    const quan_he_menh_thien_ma= xetSinhKhacMenhVaThienMa(lasoData.hanhMenh);


   
    luanGiaiChung.push(quan_he_namsinh);
    luanGiaiChung.push(checkLocTonHayLuuNienVanTinh(lasoData));
    luanGiaiChung.push(quan_he_menh_thien_ma);
    luanGiaiChung.push(lasoData.am_duong_tinh_chat);
    

    luanGiaiLoiKhuyen.push(quan_he_namsinh);
    luanGiaiLoiKhuyen.push(lasoData.am_duong_tinh_chat);

    luanGiaiLoiKhuyen.push(quan_he_menh_thien_ma);  
    luanGiaiChung.push(kiemTraThuanMuaSinh(lasoData.hanhMenh, lasoData.thangsinh));
    luanGiaiChung.push(kiemTraThuanGioSinh(lasoData.thangsinh, lasoData.giosinh));
    luanGiaiChung.push(nhanXetNamSinhGioSinh(lasoData.chiNam, lasoData.giosinh));
    

}
function checkLocTonHayLuuNienVanTinh(lasoData){

    let loc="";
 
   if(lasoData.canNam ==='G.' || lasoData.canNam==='Ấ.' || lasoData.canNam ==='C.' || lasoData.canNam==='T.' ){

          loc= "Can Giáp, Can Ất, Can Canh, Can Tân được hưởng trọn vẹn Lộc Tồn chính danh";
   }
   if(lasoData.canNam ==='B.' || lasoData.canNam==='K.' || lasoData.canNam ==='M.' || lasoData.canNam==='Q.' || lasoData.canNam ==='N.' || lasoData.canNam==='Đ.' ){

          loc= "Can năm sinh Bính, Đinh, Mậu, Kỷ, Nhâm, Quý được hưởng trọn vẹn Lưu Niên Văn Tinh chính danh";
   }
  
   return loc;

}
function kiemTraThuanMuaSinh(menhNguHanh, thangAm) {
    // Bảng thuận mùa sinh
    const MUA_SINH = [
        { mua: "Xuân", thang: [1,2,3], menhVuong: "Mộc", menhTuong: "Hỏa" },
        { mua: "Hạ", thang: [4,5,6], menhVuong: "Hỏa", menhTuong: "Thổ" },
        { mua: "Thu", thang: [7,8,9], menhVuong: "Kim", menhTuong: "Thủy" },
        { mua: "Đông", thang: [10,11,12], menhVuong: "Thủy", menhTuong: "Mộc" }
    ];
    // Xác định mùa
    const muaObj = MUA_SINH.find(m => m.thang.includes(thangAm));
    if (!muaObj) return "";
    // Kiểm tra thuận mùa sinh
    if (menhNguHanh === muaObj.menhVuong) return `Thuận mùa sinh (Mệnh vượng vào mùa ${muaObj.mua})`;
    if (menhNguHanh === muaObj.menhTuong) return `Thuận mùa sinh (Mệnh tướng vào mùa ${muaObj.mua})`;
    return `Không thuận mùa sinh (Mệnh không vượng/tướng vào mùa ${muaObj.mua})`;
}
function kiemTraThuanGioSinh(thangAm, gioSinhChi) {
    // Bảng thuận giờ sinh theo mùa
    const GIO_THUAN_MUA = {
        "Xuân": ["Dậu", "Thìn", "Tỵ"],
        "Hạ": ["Mão", "Mùi", "Hợi"],
        "Thu": ["Ngọ", "Thân", "Dần"],
        "Đông": ["Sửu", "Tuất", "Tý"]
    };
    let mua = "";
    if ([1, 2, 3].includes(thangAm)) mua = "Xuân";
    else if ([4, 5, 6].includes(thangAm)) mua = "Hạ";
    else if ([7, 8, 9].includes(thangAm)) mua = "Thu";
    else if ([10, 11, 12].includes(thangAm)) mua = "Đông";
    else return "";

    if (GIO_THUAN_MUA[mua].includes(gioSinhChi)) {
        return `Thuận giờ sinh (Mệnh vượng giờ ${gioSinhChi} mùa ${mua})`;
    } else {
        return `Không thuận giờ sinh theo mùa sinh`;
    }
}
function nhanXetNamSinhGioSinh(namChi, gioChi) {
    // 1. Tối độc
    const chiNamToiDoc = ["Dần", "Ngọ", "Tý", "Dậu"];
    const gioToiDoc = ["Thìn", "Tuất", "Sửu", "Mùi"];
    if (chiNamToiDoc.includes(namChi) && gioToiDoc.includes(gioChi)) {
        return "Năm sinh và giờ sinh phạm tối độc";
    }
    // 2. Khắc cha lúc nhỏ (Dần, Hợi, Tý năm sinh + giờ Ngọ, Thân, Dậu, Hợi)
    const chiNamKhacCha = ["Dần", "Hợi", "Tý"];
    const gioKhacCha = ["Ngọ", "Thân", "Dậu", "Hợi"];
    if (chiNamKhacCha.includes(namChi) && gioKhacCha.includes(gioChi)) {
        return "Năm sinh và giờ sinh phạm hình khắc cha lúc nhỏ tuổi";
    }
    // 3. Khắc mẹ (Thìn, Tỵ, Sửu, Mùi năm sinh + giờ Tý, Ngọ, Mão, Tỵ, Hợi, Thân, Dậu)
    const chiNamKhacMe = ["Thìn", "Tỵ", "Sửu", "Mùi"];
    const gioKhacMe = ["Tý", "Ngọ", "Mão", "Tỵ", "Hợi", "Thân", "Dậu"];
    if (chiNamKhacMe.includes(namChi) && gioKhacMe.includes(gioChi)) {
        return "Năm sinh và giờ sinh phạm hình khắc mẹ";
    }
    return "Năm sinh và giờ sinh không phạm tối độc";
}
