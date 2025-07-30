
let luanGiaiDaiVanTaiMenh = [];
let luanGiaiDaiVanTaiPhuMau = [];
let luanGiaiDaiVanTaiPhucDuc = [];
let luanGiaiDaiVanTaiDienTrach = [];
let luanGiaiDaiVanTaiQuanLoc = [];
let luanGiaiDaiVanTaiNoBoc = [];
let luanGiaiDaiVanTaiThienDi = [];
let luanGiaiDaiVanTaiTatAch = [];
let luanGiaiDaiVanTaiTaiBach = [];
let luanGiaiDaiVanTaiTuTuc = [];
let luanGiaiDaiVanTaiPhuThe = [];
let luanGiaiDaiVanTaiHuynhDe = [];

const arrLuanGiaiDaiVanTungCung = [
    luanGiaiDaiVanTaiMenh,
    luanGiaiDaiVanTaiPhuMau,
    luanGiaiDaiVanTaiPhucDuc,
    luanGiaiDaiVanTaiDienTrach,
    luanGiaiDaiVanTaiQuanLoc,
    luanGiaiDaiVanTaiNoBoc,
    luanGiaiDaiVanTaiThienDi,
    luanGiaiDaiVanTaiTatAch,
    luanGiaiDaiVanTaiTaiBach,
    luanGiaiDaiVanTaiTuTuc,
    luanGiaiDaiVanTaiPhuThe,
    luanGiaiDaiVanTaiHuynhDe
];


function Luantamhopdaivan(chiTuoi, chiDaiVan) {

    const hanhTuoi = getNguHanhTamHopByChi(chiTuoi);
    const hanhDaiVan = getNguHanhTamHopByChi(chiDaiVan);
 
    if (!hanhTuoi || !hanhDaiVan) return "Không xác định được tam hợp hoặc ngũ hành.";
    // Luận sinh khắc
    const sinhKhac = xetSinhKhacTamHop(hanhTuoi, hanhDaiVan);

    return hienHuongCoTamHop(sinhKhac);
}

function LuanNguhanhMenhvaDaivan(lasoData, chiDaiVan) {
    const hanhMenh = lasoData.hanhMenh;
    if (!hanhMenh) return "Không xác định được ngũ hành của tuổi hoặc đại vận.";

    // Luận sinh khắc
    const sinhKhac = xetSinhKhacBinhHoaMenhVaChiDaiVan(hanhMenh, chiDaiVan);

   
    return hienHuongCoMenhChiDaiVan(sinhKhac);

}
function LuanGiaiDaiVan() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const chiNam = lasoData.chiNam;

    for (let i = 0; i < 12; ++i) {
        
        const chiCungDaiVan = lasoData.lasoOb[i].chi;
        arrLuanGiaiDaiVanTungCung[i].push(Luantamhopdaivan(chiNam, chiCungDaiVan));
        arrLuanGiaiDaiVanTungCung[i].push(LuanNguhanhMenhvaDaivan(lasoData, chiCungDaiVan));
       
        TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, IDclassDaivan[i], arrLuanGiaiDaiVanTungCung[i]);

    }
    

}
function HienThiNhanXetDaiVan() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const menhIdx = lasoData.IDCungMenh;
    const cucSo = lasoData.cucSo;
    const amduong = lasoData.amduong;
    const tuoiAm = lasoData.tuoiAm;
    const lasoOb = lasoData.lasoOb || [];

    const CUNG_CELLS = window.CUNG_CELLS || [
        { chi: "Dần" },{ chi: "Mão" },{ chi: "Thìn" },{ chi: "Tỵ" },{ chi: "Ngọ" },{ chi: "Mùi" },
        { chi: "Thân" },{ chi: "Dậu" },{ chi: "Tuất" },{ chi: "Hợi" },{ chi: "Tý" },{ chi: "Sửu" }
    ];
    const TEN_CUNG_FULL = window.TEN_CUNG_FULL || [
        "Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch",
        "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách",
        "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"
    ];
    const lsDaiVan = tinhdaivan(menhIdx, cucSo, amduong);

    // Lấy nhóm tam hợp Tuế Hổ Phù
    const tamHopGroups = getTamHopTueHoPhuGroups(lasoOb);
    // Lấy nhóm vòng Tang Tuế Điếu
    const tangTueDieuGroups = getTangTueDieuGroups(lasoOb);
    // Lấy nhóm tam hợp Âm Long Trực
    const amLongTrucGroups = getAmLongTrucGroups(lasoOb);
    // Lấy nhóm tam hợp Dương Tử Phúc
    const duongTuPhucGroups = getDuongTuPhucGroups(lasoOb);

    let arr = [];
    for (let i = 0; i < 12; ++i) {
        const idx = (menhIdx + i) % 12;
        const startAge = lsDaiVan[idx];
        const endAge = startAge + 9;
        const cungTen = TEN_CUNG_FULL[i];
        const chi = CUNG_CELLS[idx].chi;
        arr.push({
            cungTen,
            startAge,
            endAge,
            chi
        });
    }
    arr.sort((a, b) => a.startAge - b.startAge);

    // ==== Nhận xét đặc biệt cho tam hợp Mệnh-Tài-Quan ====
    // Xác định tam hợp Mệnh-Tài-Quan
    const menhTamHop = [
        arr.find(c => c.cungTen === "Mệnh")?.chi,
        arr.find(c => c.cungTen === "Tài Bạch")?.chi,
        arr.find(c => c.cungTen === "Quan Lộc")?.chi
    ].sort();

    function isSameGroup(cacChiGroup, menhTamHop) {
        return Array.isArray(cacChiGroup) &&
            cacChiGroup.length === 3 &&
            [...cacChiGroup].sort().join('-') === menhTamHop.join('-');
    }
    // hiển thị phần note đầu tiên trong nhận xét đại vận
    let nhanXetTamHopMenh = '';
    let nhanXetTamHop = '';
    if (tamHopGroups.some(g => isSameGroup(g.cacChi, menhTamHop))){ nhanXetTamHop = "Tuế Hổ Phù";
        nhanXetTamHopMenh = `<div style="color:#d0021b;font-weight:bold;margin-bottom:1em;">
            <i class="fa fa-star"></i> Tam hợp Tuế Hổ Phù ở đại vận Mệnh Tài Quan: Bạn sinh ra gặp rất nhiều sóng gió cuộc đời nhưng đến khi vào đại vận mà bạn đủ chín chắn, trưởng thành thì bạn sẽ được hưởng trọn vẹn thành quả của sự cố gắng, cuộc sống gắn liền phần nhiều đến tín ngưỡng và tôn giáo.
        </div>`;
    } else if (amLongTrucGroups.some(g => isSameGroup(g.cacChi, menhTamHop))) {nhanXetTamHop = "Âm Long Trực";
        nhanXetTamHopMenh = `<div style="color:#009688;font-weight:bold;margin-bottom:1em;">
            <i class="fa fa-star"></i> Tam hợp Âm Long Trực ở đại vận Mệnh Tài Quan: Bạn là người thông minh và biết cách ứng xử phù hợp với hoàn cảnh.
            "Thuận thiên vô chiến tự nhiên thành" là châm ngôn lẽ sống của bạn.
        </div>`;
    } else if (duongTuPhucGroups.some(g => isSameGroup(g.cacChi, menhTamHop))) { nhanXetTamHop = "Dương Tử Phúc";
        nhanXetTamHopMenh = `<div style="color:#1976d2;font-weight:bold;margin-bottom:1em;">
            <i class="fa fa-star"></i> Tam hợp Dương Tử Phúc ở đại vận Mệnh Tài Quan: Bạn là người thông minh, trực giác nhanh nhạy, luôn có động thái đi trước đón đầu, khẳng định bản thân và đề cao cái tôi của bản thân.

        </div>`;
    } else if (tangTueDieuGroups.some(g => isSameGroup(g.cacChi, menhTamHop))) {nhanXetTamHop = "Tang-Tuế-Điếu";
        nhanXetTamHopMenh = `<div style="color:#a600b7;font-weight:bold;margin-bottom:1em;">
            <i class="fa fa-star"></i> Tam hợp Tang-Tuế-Điếu ở đại vận Mệnh Tài Quan: Bạn là người năng động, cuộc đời có rất nhiều thay đổi lớn.
        </div>`;
    }
    luanGiaiLoiKhuyen.push(nhanXetTamHop);
    luanGiaiChung.push(nhanXetTamHop);
    
    let html = '';
    arr.forEach(item => {
        let tamHopNote = '';

        // Lấy lại tên cung của nhóm tam hợp này (nếu có)
        let group = tamHopGroups.find(g => g.cacChi.includes(item.chi));
        if (group) {
            const tenCungGroup = getTenCungByChiArr(group.cacChi, arr).join('-');
            tamHopNote += `<div class="tam-hop-note" style="color:rgb(209, 0, 0); margin-bottom: 0.5em;">
                <b style= "margin-left:1em;">Cung này thuộc tam hợp Tuế Hổ Phù tại: ${tenCungGroup}</b><br>
                Đại vận lúc thiếu thời chịu nhiều sóng gió, ngã rẽ cuộc đời vì vậy đến khi vào đại vận trung niên sẽ đắc thiên thời, ắt sẽ gặp nhiều thuận lợi, và có thể đạt được thành tựu do đã tích lũy trước đó. Đến khi về già sẽ có phúc được hưởng trọn vẹn thành quả mình tạo ra.
                Đại vận may mắn nhất cuộc đời, dễ xứng ý toại lòng, giác quan tâm linh sắc bén, và kèm theo đó cái tôi bản thân được đề cao.
            </div>`;
        }
        let groupTTD = tangTueDieuGroups.find(g => g.cacChi.includes(item.chi));
        if (groupTTD) {
            const tenCungGroup = getTenCungByChiArr(groupTTD.cacChi, arr).join('-');
            tamHopNote += `<div class="tang-tue-dieu-note" style="color: rgb(209, 0, 0); margin-bottom: 0.5em;">
                <b style= "margin-left:1em;">Cung này thuộc vòng Tang-Tuế-Điếu tại: ${tenCungGroup}</b><br>
                Đại vận này bạn rất dễ rơi vào trạng thái lao đao, cuộc sống có nhiều biến động thay đổi lớn, dễ xảy ra tai nạn, đổ vỡ để rèn luyện bản thân trở nên mạnh mẽ, và có nhiều kinh nghiệm.
                Tích cực và năng động sẽ giúp bạn gặt hái được nhiều kinh nghiệm và thành công.
            </div>`;
        }
        let groupALT = amLongTrucGroups.find(g => g.cacChi.includes(item.chi));
        if (groupALT) {
            const tenCungGroup = getTenCungByChiArr(groupALT.cacChi, arr).join('-');
            tamHopNote += `<div class="am-long-truc-note" style="color: rgb(209, 0, 0); margin-bottom: 0.5em;">
                <b style= "margin-left:1em;">Cung này thuộc tam hợp Âm Long Trực tại: ${tenCungGroup}</b><br>
                 Đây là một đại vận trì trệ, nhiều điều xảy ra không như ý muốn, dù có tranh đấu cũng khó xứng ý toại lòng.
            </div>`;
        }
        let groupDTP = duongTuPhucGroups.find(g => g.cacChi.includes(item.chi));
        if (groupDTP) {
            const tenCungGroup = getTenCungByChiArr(groupDTP.cacChi, arr).join('-');
            tamHopNote += `<div class="duong-tu-phuc-note" style="color: rgb(209, 0, 0); margin-bottom: 0.5em;">
                <b style= "margin-left:1em;">Cung này thuộc tam hợp Dương Tử Phúc tại: ${tenCungGroup}</b><br>
                Đại vận này bạn sẽ có nhiều cơ hội để phát triển bản thân, cũng có nhiều cám dỗ sẽ đến với bạn khiến bạn sa ngã và mất tất cả.
            </div>`;
        }
        html += `<div class="daivan-item${(group || groupTTD || groupALT || groupDTP) ? ' thuoc-tam-hop-tue-ho-phu' : ''} ${item.cungTen}" id="${item.cungTen}" >
            <b style="color:#d0021b;margin-left:1em;"><br>Đại Vận:</b> ${item.startAge} tuổi - ${item.endAge} tuổi tại cung ${item.cungTen} (${item.chi}) 
            ${tamHopNote} 
        </div>`;
    });

    document.getElementById('daivan-content').innerHTML = nhanXetTamHopMenh + html;
}