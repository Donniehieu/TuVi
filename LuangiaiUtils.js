const Kinh = "Kình Dương";
const Da = "Đà La";
const Kiep = "Địa Không";
const Khong = "Địa Kiếp";
const KhongKiep = [Khong, Kiep];
const Ho = "Bạch Hổ";
const Cai = "Hoa Cái";
const Long = "Long Trì";
const Phuong = "Phượng Các";
const LongPhuong = [Long, Phuong];
const Linh = "Linh Tinh";
const HoaLinh = ["Hỏa Tinh", "Linh Tinh"]
const lucsattinh = ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"];
const tulinh = [Ho, Cai, Long, Phuong];
const Khoa = "Hóa Khoa";
const Loc = "Hóa Lộc";
const Quyen = "Hóa Quyền";
const KhoaLocQuyen = ["Hóa Khoa", "Hóa Lộc", "Hóa Quyền"];
const Phu = "Thiên Phủ";
const Vu = "Vũ Khúc";
const Tuong = "Thiên Tướng";
const PhuVuTuong = ["Thiên Phủ", "Vũ Khúc", "Thiên Tướng"];
const Xuong = "Văn Xương";
const Khuc = "Văn Khúc";
const XuongKhuc = ["Văn Xương", "Văn Khúc"];
const Khoi = "Thiên Khôi";
const Viet = "Thiên Việt";
const KhoiViet = ["Thiên Khôi", "Thiên Việt"];
const Ta = "Tả Phù";
const Huu = "Hữu Bật";
const TaHuu = ["Tả Phù", "Hữu Bật"];
const Tham = "Tham Lang";
const Tu = "Tử Vi";
const Hinh = "Thiên Hình";
const Ky = "Hóa Kỵ";
const HinhKy = ["Thiên Hình", "Hóa Kỵ"];
const An = "Quốc Ấn";
const Hong = "Hồng Loan";
const Dao = "Đào Hoa";
const MaLoc = ["Thiên Mã", "Hóa Lộc"];
const SongHao = ["Đại Hao", "Tiểu Hao"];
const Tue = "Thái Tuế";
const QuanPhu = "Quan Phù";

//tìm cung nào có sao nào đó tọa thủ
function isSaoToaThuTaiCung(tenCungKiemTra, tenSao) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c => c.tenCung === tenCungKiemTra);
    if (!cung || !Array.isArray(cung.sao)) return false;
    const formattedTenSao = (tenSao || '').toString().replace(/\s+/g, '').toLowerCase();
    return cung.sao.some(
        sao => ((sao.ten || '').toString().replace(/\s+/g, '').toLowerCase() === formattedTenSao)
    );
}


//tìm sao nào đó tọa thủ một cung nào đó tại chi nào đó
function isSaoToaThuTaiCungVaChi(tenCungKiemTra, chiKiemTra, tenSao) {
   
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c => c.tenCung === tenCungKiemTra && c.chi === chiKiemTra);
    if (!cung || !Array.isArray(cung.sao)) return false;
    // Ép kiểu về chuỗi và kiểm tra null/undefined
    const formattedTenSao = (tenSao || '').toString().replace(/\s+/g, '').toLowerCase();
    return cung.sao.some(
        sao => ((sao.ten || '').toString().replace(/\s+/g, '').toLowerCase() === formattedTenSao)
    );
}
//Hai sao đông cung tại một cung không phân biệt chi
function isHaiSaoDongCungTaiCung(tenCungKiemTra, sao1, sao2) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c => c.tenCung === tenCungKiemTra);
    if (!cung || !Array.isArray(cung.sao)) return false;
    // Tìm hai sao theo tên, không phân biệt class
    const hasSao1 = cung.sao.some(sao => sao.ten.replace(/\s+/g, '').toLowerCase() === sao1.replace(/\s+/g, '').toLowerCase());
    const hasSao2 = cung.sao.some(sao => sao.ten.replace(/\s+/g, '').toLowerCase() === sao2.replace(/\s+/g, '').toLowerCase());
    return hasSao1 && hasSao2;
}
//Hai sao đông cung tại một cung tại chi nào đấy
function isHaiSaoDongCungTaiCungChi(tenCungKiemTra, chiKiemTra, sao1, sao2) {
    const normalize = s => (typeof s === 'string' ? s.replace(/\s+/g, '').toLowerCase() : '');

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c =>
        c.tenCung === tenCungKiemTra && c.chi === chiKiemTra
    );
    if (!cung || !Array.isArray(cung.sao)) return false;

    // So sánh tên sao bỏ khoảng trắng và thường hóa
    const hasSao1 = cung.sao.some(sao => normalize(sao.ten) === normalize(sao1));
    const hasSao2 = cung.sao.some(sao => normalize(sao.ten) === normalize(sao2));
    return hasSao1 && hasSao2;
}
// tìm cung tọa thủ của sao cụ thể để ra cách cục
function timCungCuaSao(tenSao) {
    // 1. Lấy dữ liệu lá số từ localStorage
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    // 2. Lấy mảng 12 cung (mỗi cung là object, có các thuộc tính như tenCung, chi, sao,...)
    const lasoOb = lasoData.lasoOb || [];

    return lasoOb.find(
        cung =>
            Array.isArray(cung.sao) &&
            cung.sao.some(
                sao => {

                    return sao.ten === tenSao;
                }
            )
    ) || null; // Nếu không tìm thấy, trả về null
}
function getNhiHopNhiHai(idCungGoc) {
    // Đảm bảo id trong khoảng 0-11
    if (typeof idCungGoc !== "number" || idCungGoc < 0 || idCungGoc > 11) return null;

    // Theo quy luật bạn liệt kê:
    // nhiHop: (12 - idCungGoc) % 12
    // nhiHai: (idCungGoc + 5) % 12

    const nhiHop = (11 - idCungGoc + 12) % 12;
    const nhiHai = (5 - idCungGoc + 12) % 12;

    return { nhiHop, nhiHai };
}
function getTamPhuongTuChinhIdx(idxCungGoc) {
    // Trả về chỉ số các cung tam phương tứ chính

    return [
        (idxCungGoc + 4) % 12, // Cung tam hợp
        (idxCungGoc + 6) % 12,  // Cung đối
        (idxCungGoc + 8) % 12, // Cung tam hợp

    ];
}


function getHoiChieuCung(idxCungGoc) {
    // Trả về chỉ số các cung hội chiếu = tam chiếu (2 cung tam hợp) + xung chiếu (cung đối).
    // idxCungGoc là chỉ số trong lasoOb (xếp từ cung Mệnh), cách nhau 4/6/8 cung tương ứng cách nhau 4/6/8 địa chi.
    // Đây chỉ là tam phương tứ chính. Cung lục hợp (chỉ sao tốt) và lục hại (chỉ sao xấu) được kiemTraCachCuc thêm riêng qua getNhiHopNhiHaiCung.
    return [
        (idxCungGoc + 4) % 12, // Cung tam hợp
        (idxCungGoc + 6) % 12,  // Cung đối
        (idxCungGoc + 8) % 12  // Cung tam hợp
    ];
}
// Nhị hợp (lục hợp) / nhị hại (lục hại) của một cung, tính theo địa chi (vị trí địa chỉ cố định), không theo chỉ số lasoOb.
// Quy tắc hội chiếu từ hai quan hệ này (xem kiemTraCachCuc):
//  - Lục hợp: chỉ khi cung kia "sinh xuất" cho cung đang xét thì sao TỐT của cung kia mới chiếu sang; chiều ngược lại không có.
//    Chiều sinh của từng cặp lục hợp lấy theo xemboituvi.vn (Tý sinh Sửu, Hợi sinh Dần, Tuất sinh Mão, Thìn sinh Dậu, Tỵ sinh Thân, Ngọ sinh Mùi).
//  - Lục hại: sao XẤU của cung lục hại chiếu sang cung đang xét.
const NHI_HOP_SINH_XUAT = { "Sửu": "Tý", "Dần": "Hợi", "Mão": "Tuất", "Dậu": "Thìn", "Thân": "Tỵ", "Mùi": "Ngọ" }; // khóa = cung nhận, giá trị = chi cung sinh xuất cho nó
const NHI_HAI_CHI = { "Tý": "Mùi", "Mùi": "Tý", "Sửu": "Ngọ", "Ngọ": "Sửu", "Dần": "Tỵ", "Tỵ": "Dần", "Mão": "Thìn", "Thìn": "Mão", "Thân": "Hợi", "Hợi": "Thân", "Dậu": "Tuất", "Tuất": "Dậu" };
function getNhiHopNhiHaiCung(lasoOb, idxCungGoc) {
    const chi = lasoOb[idxCungGoc] && lasoOb[idxCungGoc].chi;
    return {
        nhiHop: lasoOb.findIndex(c => c.chi === NHI_HOP_SINH_XUAT[chi]), // -1 nếu cung đang xét là cung sinh xuất (không nhận sao từ cung lục hợp)
        nhiHai: lasoOb.findIndex(c => c.chi === NHI_HAI_CHI[chi])
    };
}
function getTamhopchieu(idxCungGoc) {
    // Trả về chỉ số các cung tam hợp chiếu
    return [
        (idxCungGoc + 4) % 12, // Cung tam hợp
        (idxCungGoc + 6) % 12,  // Cung đối
        (idxCungGoc + 8) % 12, // Cung tam hợp
    ];
}

// Hàm giúp tạo ra các mảng có chiều dài từ 1 đến n từ một mảng đầu vào
function getCombinations(array) {
    const result = [];
    const n = array.length;

    // Hàm đệ quy để sinh tổ hợp
    function combine(start, combo) {
        if (combo.length > 0) result.push(combo);
        for (let i = start; i < n; i++) {
            combine(i + 1, combo.concat(array[i]));
        }
    }

    combine(0, []);
    return result;
}
/**
 * Kiểm tra cung gốc và tam phương tứ chính có đủ các sao trong một bộ không
 * @param {Array} lasoOb - mảng 12 cung
 * @param {string} tenSaoGoc - tên sao gốc (ví dụ "Tử Vi")
 * @param {Array<string>} boSaoCanKiemTra - tên các sao cần kiểm tra trong tam phương tứ chính
 * @returns {object|null} - Nếu đủ bộ sao thì trả về thông tin (cung gốc, các cung hội hợp, các sao hội hợp), ngược lại trả về null
 */
function kiemTraCachCuc(tenSaoGoc, boSaoCanKiemTra) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    const cungGoc = timCungCuaSao(tenSaoGoc);
    if (!cungGoc) return null;
    const idxCungGoc = lasoOb.findIndex(c => c.tenCung === cungGoc.tenCung); // bỏ "|| idCunggoc": findIndex trả 0 (cung Mệnh) bị coi là falsy
    const idxHop = getHoiChieuCung(idxCungGoc);

    // Gộp các sao của cung gốc + 3 cung hội hợp thành 1 mảng phẳng
    let saoHoiHop = [];
    // 1. Các sao của cung gốc
    // if (cungGoc && Array.isArray(cungGoc.sao)) {
    //     saoHoiHop.push(...cungGoc.sao.map(sao => sao.ten));
    // }
    // 1b. Cung lục hợp (nhị hợp): chỉ sao TỐT hội chiếu sang; cung lục hại (nhị hại): chỉ sao XẤU hội chiếu sang.
    const nhi = getNhiHopNhiHaiCung(lasoOb, idxCungGoc);
    const coClass = (sao, tok) => String(sao.class || '').split(/\s+/).includes(tok);
    if (nhi.nhiHop >= 0 && nhi.nhiHop !== idxCungGoc && Array.isArray(lasoOb[nhi.nhiHop].sao)) {
        saoHoiHop.push(...lasoOb[nhi.nhiHop].sao.filter(s => coClass(s, 'sao-tot')).map(s => s.ten));
    }
    if (nhi.nhiHai >= 0 && nhi.nhiHai !== idxCungGoc && Array.isArray(lasoOb[nhi.nhiHai].sao)) {
        saoHoiHop.push(...lasoOb[nhi.nhiHai].sao.filter(s => coClass(s, 'sao-xau')).map(s => s.ten));
    }
    // 2. Các sao của các cung hội hợp (tránh trùng cung gốc)
    idxHop.forEach(idx => {
        if (idx !== idxCungGoc) {
            const cung = lasoOb[idx];
            if (cung && Array.isArray(cung.sao)) {
                saoHoiHop.push(...cung.sao.map(sao => sao.ten));
            }
        }
    });

    const normalize = s => (s ? String(s) : '').replace(/\s+/g, '').toLowerCase();

    // Ép boSaoCanKiemTra thành array phẳng
    let boSaoArr = [];
    if (Array.isArray(boSaoCanKiemTra)) {
        boSaoArr = boSaoCanKiemTra.flat(Infinity).filter(Boolean);
    } else if (boSaoCanKiemTra) {
        boSaoArr = [boSaoCanKiemTra];
    }

    // Kiểm tra đủ bộ sao không (bộ hợp phải chứa tất cả phần tử boSaoCanKiemTra)
    // Bộ từ 4 sao trở lên (lục sát, Không Kiếp Kình Đà...) là danh sách "gặp một trong" nên dùng some; bộ ngắn (Khoa Lộc Quyền, Tả Hữu...) phải đủ cả.
    // "Hỏa Linh" trong bộ sao = Hỏa Tinh hoặc Linh Tinh hoặc cả hai (người dùng đã chốt)
    const khopSao = s => normalize(s) === normalize('Hỏa Linh')
        ? saoHoiHop.some(hop => normalize(hop) === normalize('Hỏa Tinh') || normalize(hop) === normalize('Linh Tinh'))
        : saoHoiHop.some(hop => normalize(hop) === normalize(s));
    const hopDuBo = boSaoArr.length >= 4 ? boSaoArr.some(khopSao) : boSaoArr.every(khopSao);

    if (!hopDuBo) return null;

    return {
        cungGoc: { tenCung: cungGoc.tenCung, chi: cungGoc.chi },
        cacSaoHoiHop: saoHoiHop,
        idxHoiHop: idxHop
    };
}
function kiemtraCacCucTamHop(tenSaoGoc, boSaoCanKiemTra) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    const cungGoc = timCungCuaSao(tenSaoGoc);
    if (!cungGoc) return null;
    const idxCungGoc = lasoOb.findIndex(c => c.tenCung === cungGoc.tenCung); // bỏ "|| idCunggoc": findIndex trả 0 (cung Mệnh) bị coi là falsy
    const idxHop = getTamhopchieu(idxCungGoc);

    // Gộp các sao của cung gốc + 3 cung hội hợp thành 1 mảng phẳng
    let saoHoiHop = [];
    // 1. Các sao của cung gốc
    // if (cungGoc && Array.isArray(cungGoc.sao)) {
    //     saoHoiHop.push(...cungGoc.sao.map(sao => sao.ten));
    // }
    // 2. Các sao của các cung hội hợp (tránh trùng cung gốc)
    idxHop.forEach(idx => {
        if (idx !== idxCungGoc) {
            const cung = lasoOb[idx];
            if (cung && Array.isArray(cung.sao)) {
                saoHoiHop.push(...cung.sao.map(sao => sao.ten));
            }
        }
    });

    const normalize = s => (s ? String(s) : '').replace(/\s+/g, '').toLowerCase();

    // Ép boSaoCanKiemTra thành array phẳng
    let boSaoArr = [];
    if (Array.isArray(boSaoCanKiemTra)) {
        boSaoArr = boSaoCanKiemTra.flat(Infinity).filter(Boolean);
    } else if (boSaoCanKiemTra) {
        boSaoArr = [boSaoCanKiemTra];
    }

    // Kiểm tra đủ bộ sao không (bộ hợp phải chứa tất cả phần tử boSaoCanKiemTra)
    // Bộ từ 4 sao trở lên (lục sát, Không Kiếp Kình Đà...) là danh sách "gặp một trong" nên dùng some; bộ ngắn (Khoa Lộc Quyền, Tả Hữu...) phải đủ cả.
    // "Hỏa Linh" trong bộ sao = Hỏa Tinh hoặc Linh Tinh hoặc cả hai (người dùng đã chốt)
    const khopSao = s => normalize(s) === normalize('Hỏa Linh')
        ? saoHoiHop.some(hop => normalize(hop) === normalize('Hỏa Tinh') || normalize(hop) === normalize('Linh Tinh'))
        : saoHoiHop.some(hop => normalize(hop) === normalize(s));
    const hopDuBo = boSaoArr.length >= 4 ? boSaoArr.some(khopSao) : boSaoArr.every(khopSao);

    if (!hopDuBo) return null;

    return {
        cungGoc: { tenCung: cungGoc.tenCung, chi: cungGoc.chi },
        cacSaoHoiHop: saoHoiHop,
        idxHoiHop: idxHop
    };
}

// // Hàm kiểm tra chỉ cần đúng một phần là ok
// function kiemTraCachCuc(tenSaoGoc, boSaoCanKiemTra) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const lasoOb = lasoData.lasoOb || [];
//     const cungGoc = timCungCuaSao(tenSaoGoc);
//     if (!cungGoc) return null;
//     const idxCungGoc = lasoOb.findIndex(c => c.tenCung === cungGoc.tenCung); // bỏ "|| idCunggoc": findIndex trả 0 (cung Mệnh) bị coi là falsy
//     const idxHop = getHoiChieuCung(idxCungGoc);

//     // Gộp các sao của cung gốc và các cung hội hợp thành 1 mảng phẳng
//     let saoHoiHop = [];
//     // Thêm sao cung gốc
//     if (cungGoc && Array.isArray(cungGoc.sao)) {
//         saoHoiHop.push(...cungGoc.sao.map(sao => sao.ten));
//     }
//     // Thêm sao các cung hội hợp (không trùng cung gốc)
//     idxHop.forEach(idx => {
//         if (idx !== idxCungGoc) {
//             const cung = lasoOb[idx];
//             if (cung && Array.isArray(cung.sao)) {
//                 saoHoiHop.push(...cung.sao.map(sao => sao.ten));
//             }
//         }
//     });

//     const normalize = s => (s ? String(s) : '').replace(/\s+/g, '').toLowerCase();

//     // Lấy các sao trong boSaoCanKiemTra thực sự xuất hiện trong hội hợp
//     const saoKhop = boSaoCanKiemTra.filter(
//         s => saoHoiHop.some(hop => normalize(hop) === normalize(s))
//     );

//     // Nếu không có sao nào khớp thì trả null hoặc []
//     if (saoKhop.length === 0) return [];

//     // Trả về thông tin các sao khớp và các thông tin liên quan
//     return {
//         cungGoc: { tenCung: cungGoc.tenCung, chi: cungGoc.chi },
//         cacSaoKhop: saoKhop,
//         cacSaoHoiHop: saoHoiHop,
//         idxHoiHop: idxHop
//     };
// }

function isCungVoChinhDieu(idCung) {
    getDanhSachChinhTinhTungCung()[idCung].chinhTinh.length === 0
}


//tìm sao cụ thể tại chi cụ thể trong lá số
function isSaoToaThuTaiChi(tenSao, chiKiemTra) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const normalize = s => s.replace(/\s+/g, '').toLowerCase();
    // Tìm cung có chi đúng và chứa sao tên đúng
    return lasoOb.some(
        cung =>
            cung.chi === chiKiemTra &&
            Array.isArray(cung.sao) &&
            cung.sao.some(sao => normalize(sao.ten) === normalize(tenSao))
    );
}





// ====================================================================================
// V3 lần 11: Tuần, Triệt, vòng Tràng Sinh, vô chính diệu, cung theo chi.
// Không có trong lasoOb nên tính lại từ canNam/chiNam/cucSo/amduong (cùng quy tắc với ansaophutinh.js:
// anTriet, anTuan, anVongTrangSinh). Mỗi hàm chỉ đọc lasoData, không đổi gì ở các hàm có sẵn.
// ====================================================================================
const CHI12_TT = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const CAN10_TT = ["G.", "Ấ.", "B.", "Đ.", "M.", "K.", "C.", "T.", "N.", "Q."];
const TRIET_CAN_TT = { "G.": ["Thân", "Dậu"], "K.": ["Thân", "Dậu"], "Ấ.": ["Ngọ", "Mùi"], "C.": ["Ngọ", "Mùi"], "B.": ["Thìn", "Tỵ"], "T.": ["Thìn", "Tỵ"], "N.": ["Dần", "Mão"], "Đ.": ["Dần", "Mão"], "M.": ["Tý", "Sửu"], "Q.": ["Tý", "Sửu"] };
const VONG_TRANG_SINH_TT = ["Tràng Sinh", "Mộc Dục", "Quan Đới", "Lâm Quan", "Đế Vượng", "Suy", "Bệnh", "Tử", "Mộ", "Tuyệt", "Thai", "Dưỡng"];
const KHOI_TRANG_SINH_TT = { 2: "Thân", 3: "Hợi", 4: "Tỵ", 5: "Thân", 6: "Dần" };

function docLasoTT() {
    try { return JSON.parse(localStorage.getItem('laso_data')) || {}; } catch (e) { return {}; }
}
function chiCuaCungTT(lasoData, tenCung) {
    const ob = lasoData.lasoOb || [];
    const c = ob.find(x => x.tenCung === tenCung);
    return c ? c.chi : null;
}
// cung có Tuần án ngữ: hai chi ngay trước chi của Giáp thuộc tuần chứa năm sinh
function isCungCoTuan(tenCung) {
    const d = docLasoTT();
    const chi = chiCuaCungTT(d, tenCung);
    const iChi = CHI12_TT.indexOf(d.chiNam), iCan = CAN10_TT.indexOf(d.canNam);
    if (!chi || iChi < 0 || iCan < 0) return false;
    const giap = (iChi - iCan + 12) % 12;
    return chi === CHI12_TT[(giap + 11) % 12] || chi === CHI12_TT[(giap + 10) % 12];
}
function isCungCoTriet(tenCung) {
    const d = docLasoTT();
    const chi = chiCuaCungTT(d, tenCung);
    const t = TRIET_CAN_TT[d.canNam];
    return !!(chi && t && t.includes(chi));
}
// sao thuộc vòng Tràng Sinh đóng ở cung nào
function isTrangSinhTaiCung(tenCung, tenSaoTrangSinh) {
    const d = docLasoTT();
    const chi = chiCuaCungTT(d, tenCung);
    const khoi = KHOI_TRANG_SINH_TT[d.cucSo];
    const k = VONG_TRANG_SINH_TT.indexOf(tenSaoTrangSinh);
    if (!chi || !khoi || k < 0) return false;
    const thuan = (d.amduong === "Dương Nam" || d.amduong === "Âm Nữ") ? 1 : -1;
    return chi === CHI12_TT[(CHI12_TT.indexOf(khoi) + thuan * k + 120) % 12];
}
// cung vô chính diệu: không có chính tinh nào đóng trong cung
function laCungVoChinhDieu(tenCung) {
    const d = docLasoTT();
    const c = (d.lasoOb || []).find(x => x.tenCung === tenCung);
    if (!c || !Array.isArray(c.sao)) return false;
    return !c.sao.some(s => String(s.class || '').split(/\s+/).includes('chinh-tinh'));
}
// cung có chi cho trước
function isCungTaiChi(tenCung, chi) {
    return chiCuaCungTT(docLasoTT(), tenCung) === chi;
}

// V3 lần 12: sao nằm trong "hội chiếu" của một cung.
// rong = false: cùng cung hoặc tam phương tứ chính (hai cung tam hợp + cung đối).
// rong = true : thêm cung nhị hợp (lục hợp) và nhị hại (lục hại), không phân sinh xuất hay tốt xấu.
//               Dùng cho Đại Hao, Tiểu Hao: hai sao luôn đối xung nhau nên chỉ "gặp" một cung khi
//               chúng ở cung đó và cung đối, hoặc ở cung nhị hợp và cung nhị hại của cung đó.
const LUC_HOP_TT = { "Tý": "Sửu", "Sửu": "Tý", "Dần": "Hợi", "Hợi": "Dần", "Mão": "Tuất", "Tuất": "Mão", "Thìn": "Dậu", "Dậu": "Thìn", "Tỵ": "Thân", "Thân": "Tỵ", "Ngọ": "Mùi", "Mùi": "Ngọ" };
const LUC_HAI_TT = { "Tý": "Mùi", "Mùi": "Tý", "Sửu": "Ngọ", "Ngọ": "Sửu", "Dần": "Tỵ", "Tỵ": "Dần", "Mão": "Thìn", "Thìn": "Mão", "Thân": "Hợi", "Hợi": "Thân", "Dậu": "Tuất", "Tuất": "Dậu" };
function isSaoHoiChieuRong(tenCung, tenSao, rong) {
    const d = docLasoTT(); const ob = d.lasoOb || [];
    const i = ob.findIndex(c => c.tenCung === tenCung);
    if (i < 0) return false;
    const idxs = [i, (i + 4) % 12, (i + 6) % 12, (i + 8) % 12];
    if (rong) {
        [LUC_HOP_TT[ob[i].chi], LUC_HAI_TT[ob[i].chi]].forEach(ch => { const j = ob.findIndex(c => c.chi === ch); if (j >= 0) idxs.push(j); });
    }
    const f = (tenSao || '').toString().replace(/\s+/g, '').toLowerCase();
    return idxs.some(k => Array.isArray(ob[k].sao) && ob[k].sao.some(s => ((s.ten || '').toString().replace(/\s+/g, '').toLowerCase() === f)));
}
