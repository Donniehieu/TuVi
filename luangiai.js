const IDclassDaivan = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch",
    "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách",
    "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"]

let classluangiaiChung = "general-content";
let classLoiKhuyen = "advice-content";
let fileLuangiaiChung = "Luangiaichung";
let fileLoiKhuyen = "LoiKhuyen";
let fileLuangiaiDaiVan = "Luandaivan";
let lasoOb = [];
let luanGiaiChung = [];
let luanGiaiCungMenh = [];
let luanGiaiCungPhuMau = [];
let luanGiaiCungPhucDuc = [];
let luanGiaiCungDienTrach = [];
let luanGiaiCungQuanLoc = [];
let luanGiaiCungNoBoc = [];
let luanGiaiCungThienDi = [];
let luanGiaiCungTatAch = [];
let luanGiaiCungTaiBach = [];
let luanGiaiCungTuTuc = [];
let luanGiaiCungPhuThe = [];
let luanGiaiCungHuynhDe = [];
let luanGiaiLoiKhuyen = [];
let idCungMenh = 0;
let idCungPhuMau = 1;
let idCungPhucDuc = 2;
let idCungDienTrach = 3;
let idCungQuanLoc = 4;
let idCungNoBoc = 5;
let idCungThienDi = 6;
let idCungTatAch = 7;
let idCungTaiBach = 8;
let idCungTuTuc = 9;
let idCungPhuThe = 10;
let idCungHuynhDe = 11;
let idCungThan = getCungData().findIndex(cung => cung.tenCung === JSON.parse(localStorage.getItem('laso_data')).cungCu);
let VoChinhDieu = "Vô Chính Diệu";
let comboLaso = [];
// Lấy danh sách  các sao
function getAllStarsInCells() {
    // Các class selector chứa sao (mỗi selector nên lấy đúng các sao bạn đã an)
    const saoSelectors = [
        '.sao-tot',
        '.sao-xau',
        '.chinh-tinh'
        // ... bổ sung nếu bạn có thêm class cho các loại sao khác
    ];
    lasoOb = [];
    for (let i = 0; i < 12; ++i) {
        const cellNum = CUNG_CELLS[(i + IDCungMenh) % 12].cell;
        const cell = document.querySelector('.cell' + cellNum);
        if (!cell) continue;
        let saoList = [];
        saoSelectors.forEach(sel => {
            cell.querySelectorAll(sel).forEach(e => {
                let ten = e.innerText.trim();
                let cls = e.className.trim();
                if (ten) {
                    // Tránh lặp lại cùng tên - class (nếu cần)
                    if (!saoList.some(obj => obj.ten === ten && obj.class === cls))
                        saoList.push({ ten: ten, class: cls });
                }
            });
        });
        lasoOb.push({
            tenCung: TEN_CUNG_FULL[i],
            chi: CUNG_CELLS[(i + IDCungMenh) % 12].chi,
            sao: saoList,
            cell: cellNum
        });
    }

    return lasoOb;
}


// lấy các sao chính tinh phụ tinh của từng cung
function getSaoCuaCung(cung, dsChinh, dsPhu) {
    // Lấy tất cả sao của 1 cung: chính tinh + phụ tinh
    let idx = dsChinh.findIndex(c => c.tenCung === cung.tenCung);

    if (idx === -1) return [];
    return [].concat(dsChinh[idx].chinhTinh, dsPhu[idx].phuTinh).filter(Boolean);

}

// Hàm lấy bộ sao của tam cung tứ chiếu cho từng cung (Mệnh, đối cung, 2 cung tam hợp)
function getSaoTuChieuForCung(i, dsChinh, dsPhu) {
    // i: index cung chính, dsChinh/dsPhu: mảng chính/phụ tinh 12 cung
    const arrCung = dsChinh.map((c, idx) => ({
        tenCung: c.tenCung,
        chi: c.chi,
        idx
    }));

    const cungChinh = arrCung[i];
    const idxDoi = (i + 6) % 12;
    const cungDoi = arrCung[idxDoi];

    // Tam hợp
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let group = TAM_HOP_CHI.find(gr => gr.includes(cungChinh.chi));
    let cungTamHop1 = null, cungTamHop2 = null;
    if (group) {
        const chi1 = group.find(chi => chi !== cungChinh.chi);
        const chi2 = group.find(chi => chi !== cungChinh.chi && chi !== chi1);
        cungTamHop1 = arrCung.find(c => c.chi === chi1);
        cungTamHop2 = arrCung.find(c => c.chi === chi2);
    }
    // Lấy sao của 4 cung
    let saoCungChinh = getSaoCuaCung(cungChinh, dsChinh, dsPhu);
    let saoCungDoi = getSaoCuaCung(cungDoi, dsChinh, dsPhu);
    let saoTamHop1 = cungTamHop1 ? getSaoCuaCung(cungTamHop1, dsChinh, dsPhu) : [];
    let saoTamHop2 = cungTamHop2 ? getSaoCuaCung(cungTamHop2, dsChinh, dsPhu) : [];
    // Trả về mảng bộ sao (chuẩn tứ chiếu)
    return [
        { loai: "cungChinh", sao: saoCungChinh },
        { loai: "doiCung", sao: saoCungDoi },
        { loai: "tamHop1", sao: saoTamHop1 },
        { loai: "tamHop2", sao: saoTamHop2 }
    ];
}
// Hàm này nhận dữ liệu từ JS khác để hiển thị lên giao diện 
// UI chính của luận giải lá số
function setLasoData() {
    const general = GetThongTinChung();
    const cung = getCungData();
    const advice = getAdviceData();
    const anhBanLaSo = localStorage.getItem('anhBanLaSo');
    document.getElementById('svg-holder').innerHTML = anhBanLaSo
        ? `<img src="${anhBanLaSo}" alt="Ảnh bàn lá số" style="max-width:700 px;width:100%;border-radius:12px;border:1.5px solid #bce3dd;">`
        : "<em>Không tìm thấy ảnh bàn lá số!</em>";

    // Tổng quan
    document.getElementById('general-content').innerHTML =
        general && (Array.isArray(general) ? renderLines(general) : renderLines([general]))

    // Nhận xét từng cung
    if (Array.isArray(cung) && cung.length > 0) {
        document.getElementById('cung-content').innerHTML =
            cung.map(item =>
                `<div class="cung-item">
                    <b>${item.tenCung}:</b> <br>
                    <span>${renderLines(item.luandai)}</span>
                </div>`
            ).join('');
    }

    // Lời khuyên
    document.getElementById('advice-content').innerHTML =
        advice && (Array.isArray(advice) ? renderLines(advice) : renderLines([advice]))
}
// render từng cung
function renderLines(lines) {
    if (Array.isArray(lines)) {
        return lines.map(line => `<div>${line}</div>`).join('');
    }
    return lines ? `<div>${lines}</div>` : '';
}

// Danh sách các combo sao lấy trong file excel
let comboLuanChungData = [];
let comboLuanDaiVanData = [];
let comboLoiKhuyenData = [];
/**
 * Load một file Excel, trả về arr qua callback
 */
function loadComboExcel(file, cb) {
    fetch(`${file}.xlsx`)
        .then(res => res.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const arr = [];
            for (let i = 0; i < rows.length; ++i) {
                const row = rows[i];
                if (!row[0]) continue;
                arr.push({
                    keyNorm: row[0].toString().trim(),
                    keyRaw: row[0].toString().trim(),
                    values: row.slice(1).filter(Boolean).map(x => x.toString().trim())
                });
            }
            if (cb) cb(arr);
        });
}

// Hiển thị sao của tổng quan và lời khuyên qua việc so sánh sao trong cung so với sao trong file excel
function TraSao(comboData, file, idClass, keyArr) {
    if (!comboData.length) {
        loadComboExcel(file, (arr) => {
            // Lưu lại cho lần sau không cần load nữa

            if (file === fileLuangiaiChung) comboLuanChungData = arr;
            if (file === fileLuangiaiDaiVan) comboLuanDaiVanData = arr;
            if (file === fileLoiKhuyen) comboLuanDaiVanData = arr;
            const ynghia = traCuuNhieuBoSao(keyArr, arr);
            hienThiKetQuaNhieuBoSao(ynghia, idClass);

        });
    } else {
        const ynghia = traCuuNhieuBoSao(keyArr, comboData);
        hienThiKetQuaNhieuBoSao(ynghia, idClass);

    }
}

/**
 * So sánh nhiều bộ sao (keys) trong comboData
 */
function traCuuNhieuBoSao(keysToFind, comboData) {
    return keysToFind.map(rawKey => {
        const key = (typeof rawKey === 'string') ? rawKey.trim() : String(rawKey).trim();
        const found = comboData.find(item => item.keyNorm.trim() === key);
        return {
            key,
            found: !!found,
            values: found ? found.values : []
        }
    });
}
// B1: Map tên file Excel cho từng cung (có thể dùng 1 file chung hoặc từng file riêng)
const cungExcelFileMap = {
    'Mệnh': 'LuanMenh',
    'Phụ Mẫu': 'LuanPhuMau',
    'Phúc Đức': 'LuanPhucDuc',
    'Điền Trạch': 'LuanDienTrach',
    'Quan Lộc': 'LuanQuanLoc',
    'Nô Bộc': 'LuanNoBoc',
    'Thiên Di': 'LuanThienDi',
    'Tật Ách': 'LuanTatAch',
    'Tài Bạch': 'LuanTaiBach',
    'Tử Tức': 'LuanTuTuc',
    'Phu Thê': 'LuanPhuThe',
    'Huynh Đệ': 'LuanHuynhDe',
    // ... thêm các cung khác, hoặc mặc định dùng 1 file
};
const defaultFileExcel = 'ComboDemo';

// B2: Bộ nhớ cache dữ liệu Excel của từng file để không load lại nhiều lần
const excelDataCache = {};

// Hàm tra cứu và hiển thị cho từng cung
function traCuuVaHienThiChoCung(item, comboData, keyArr) {
    // keyArr là mảng bộ sao cần tra, ví dụ ['Sát Phá Lang','Tử Vi',...]
    const results = traCuuNhieuBoSao(keyArr, comboData);

    const divId = `cung-${item.tenCung.replace(/\s/g, '').toLowerCase()}`;
    const excelDiv = document.querySelector(`#${divId} .bo-sao-excel`);
    // Lọc tất cả bộ sao tra được
    const foundResults = results.filter(r => r.found && r.values.length > 0);
    if (foundResults.length > 0) {
        excelDiv.innerHTML = foundResults.map(r =>
            `<div class="bo-sao-group">
                <b>${r.key}:</b>
                ${r.values.map(v => `<div>• ${v}</div>`).join('')}
            </div>`
        ).join('');
    } else {
        excelDiv.innerHTML = `<em>Không có thông tin tra cứu từ Excel</em>`;
    }
}

function hienThiKetQuaNhieuBoSao(results, targetDivId = 'result') {
    let el = document.getElementById(targetDivId);

    if (!el) el = document.querySelector('.' + targetDivId);
    if (!el) {
       
        return;
    }

    // Hiển thị tất cả kết quả, không filter found
    let html = results.map(r => {
        if (r.found) {
            return `<div data-bo-sao-key="${r.key}">
                <b>${r.key}:</b>
                ${r.values.map(v => `<div>• ${v}</div>`).join('')}
            </div>`;
        }
    }).join('');
    if (html) el.insertAdjacentHTML('beforeend', html);
}

function clearAllSaoResults(idClassArr) {
    idClassArr.forEach(id => {
        let el = document.getElementById(id) || document.querySelector('.' + id);
        if (el) el.innerHTML = '';
    });
}
function locChinhTinh(saoList) {
    // Lọc ra những sao có class chứa 'chinh-tinh'
    return saoList.filter(sao =>
        typeof sao.class === 'string' &&
        sao.class.split(/\s+/).includes('chinh-tinh')
    );
}
// Luận chính tinh
function getDanhSachChinhTinhTungCung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    let dsCung = lasoData.lasoOb;
    // Nếu dsCung chưa có, trả về mảng rỗng
    if (!Array.isArray(dsCung)) return [];

    // Lọc chính tinh cho từng cung, chỉ lấy tên
    return dsCung.map(cung => ({
        tenCung: cung.tenCung,
        chi: cung.chi,
        chinhTinh: locChinhTinh(cung.sao).map(sao => sao.ten)
    }));
}

function locPhuTinh(saoList) {
    // Lọc ra những sao có class chứa 'chinh-tinh'
    return saoList.filter(sao =>
        typeof sao.class === 'string' &&
        sao.class.split(/\s+/).includes('phu-tinh')
    );
}
// Luận chính tinh
function getDanhSachPhuTinhTungCung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    let dsCung = lasoData.lasoOb;
    // Nếu dsCung chưa có, trả về mảng rỗng
    if (!Array.isArray(dsCung)) return [];

    // Lọc chính tinh cho từng cung, chỉ lấy tên
    return dsCung.map(cung => ({
        tenCung: cung.tenCung,
        chi: cung.chi,
        phuTinh: locPhuTinh(cung.sao).map(sao => sao.ten)
    }));
}





// Cách cục định nghĩa
const DS_CACH_CUC = [
    { key: "Sát Phá Tham", need: ["Thất Sát", "Phá Quân", "Tham Lang"] },
    { key: "Tử Phủ Vũ Tướng", need: ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng"] },
    { key: "Cơ Nguyệt Đồng Lương", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm"] },
    { key: "Cự Nhật", need: ["Thái Dương", "Cự Môn"] },
    { key: "Kình Đà", need: ["Kình Dương", "Đà La"] },
    { key: "Xương Khúc", need: ["Văn Xương", "Văn Khúc"] },
    { key: "Hoả Linh", need: ["Hỏa Tinh", "Linh Tinh"] },
    { key: "Không Kiếp", need: ["Địa Không", "Địa Kiếp"] },
    { key: "Quang Quý", need: ["Ân Quang", "Thiên Quý"] },
    { key: "Tả Hữu", need: ["Tả Phù", "Hữu Bật"] },
    { key: "Song Hao", need: ["Đại Hao", "Tiểu Hao"] },
    { key: "Tang Hổ", need: ["Tang Môn", "Bạch Hổ"] },
    { key: "Khốc Hư", need: ["Thiên Khốc", "Thiên Hư"] },
    { key: "Hình Riêu", need: ["Thiên Hình", "Thiên Riêu"] },
    { key: "Thai Toạ", need: ["Tam Thai", "Bát Toạ"] },
    { key: "Đào Hồng", need: ["Đào Hoa", "Hồng Loan"] },
    { key: "Ấn Phù", need: ["Quốc Ấn", "Đường Phù"] },
    { key: "Song Hao Quyền Lộc Kiếp Hoả", need: ["Đại Hao", "Tiểu Hao", "Hóa Quyền", "Hóa Lộc", "Địa Kiếp", "Hỏa Tinh"] },
    { key: "Tử Phủ Vũ Tướng Xương Khúc Khôi Việt Tả Hữu Khoa Quyền Lộc Long", need: ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Tả Phù", "Hữu Bật", "Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Long Trì", "Phượng Các"] },
    { key: "Tử Phủ Vũ Tướng Tả Hữu Khoa Quyền Lộc Long Phượng", need: ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Tả Phù", "Hữu Bật", "Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Long Trì", "Phượng Các"] },
    { key: "Tử Khúc Phá Dương Đà", need: ["Tử Vi", "Vũ Khúc", "Phá Quân", "Kình Dương", "Đà La"] },
    { key: "Cơ Nguyệt Đồng Lương gặp Xương Khúc Tả Hữu", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật"] },
    { key: "Cơ Nguyệt Đồng Lương Khoa Tả Hữu Quang Quý Quan Phúc", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Hóa Khoa", "Tả Phù", "Hữu Bật", "Ân Quang", "Thiên Quý", "Quan Phúc"] },
    { key: "Sát Quyền", need: ["Thất Sát", "Hóa Quyền"] },
    { key: "Lộc Mã", need: ["Hóa Lộc", "Mã"] },
    { key: "Kiếp Hư Hao Quyền", need: ["Địa Kiếp", "Thiên Hư", "Đại Hao", "Hóa Quyền"] },
    { key: "Tuế Hổ Phù Xương Khúc", need: ["Thái Tuế", "Bạch Hổ", "Quan Phù", "Văn Xương", "Văn Khúc"] },
    { key: "Xương Khúc Tấu Long Phượng", need: ["Văn Xương", "Văn Khúc", "Tấu Thư", "Long Trì", "Phượng Các"] },
    { key: "Đào Hồng Riêu Tấu Cơ Vũ", need: ["Đào Hoa", "Hồng Loan", "Thiên Riêu", "Tấu Thư", "Thiên Cơ", "Vũ Khúc"] },
    { key: "Binh Hình Tướng Ấn", need: ["Phục Binh", "Thiên Hình", "Thiên Tướng", "Quốc Ấn"] },
    { key: "Hổ Tấu", need: ["Bạch Hổ", "Tấu Thư"] },
    { key: "Hình Riêu Y", need: ["Thiên Hình", "Thiên Riêu", "Thiên Y"] },
    { key: "Hỏa Linh", need: ["Hỏa Tinh", "Linh Tinh"] },
    { key: "Mã Hỏa Linh", need: ["Thiên Mã", "Hỏa Tinh", "Linh Tinh"] },
    { key: "Thai Tọa Hồng Đào", need: ["Tam Thai", "Bát Toạ", "Hồng Loan", "Đào Hoa"] },
    { key: "Tả Hữu Không Kiếp", need: ["Tả Phù", "Hữu Bật", "Địa Không", "Địa Kiếp"] },
    { key: "Tả Hữu Binh Tướng", need: ["Tả Phù", "Hữu Bật", "Phục Binh", "Thiên Tướng"] },
    { key: "Đào Quyền", need: ["Đào Hoa", "Hóa Quyền"] },
    { key: "Đào Hồng Tả Cái Hữu", need: ["Đào Hoa", "Hồng Loan", "Tả Phù", "Hữu Bật", "Hoa Cái"] },
    { key: "Quan Phúc Quang Tấu", need: ["Quan Phù", "Phúc Đức", "Ân Quang", "Tấu Thư"] },
    { key: "Đào Hồng Xương Khúc", need: ["Đào Hoa", "Hồng Loan", "Văn Xương", "Văn Khúc"] },
    { key: "Đào Tử Phủ", need: ["Đào Hoa", "Tử Vi", "Thiên Phủ"] },
    { key: "Hổ Kình Sát", need: ["Bạch Hổ", "Kình Dương", "Thất Sát"] },
    { key: "Hổ Tang Kiếp", need: ["Bạch Hổ", "Tang Môn", "Địa Kiếp"] },
    { key: "Hổ Tang Không Kiếp", need: ["Bạch Hổ", "Tang Môn", "Địa Không", "Địa Kiếp"] },
    { key: "Âm Dương Lương", need: ["Thái Âm", "Thái Dương", "Thiên Lương"] },
    { key: "Cơ Lương Gia Hội", need: ["Thiên Cơ", "Thiên Lương", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt"] },
    { key: "Nhật Chiếu Lôi Môn", need: ["Thái Dương", "Thiên Lương", "Lộc Tồn", "Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Tả Phù", "Hữu Bật", "Văn Xương"] },
    { key: "Tả Hữu Xương Khúc", need: ["Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc"] },
    { key: "Tham Linh Triều Viên", need: ["Tham Lang", "Linh Tinh", "Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Thiên Việt", "Thiên Khôi", "Tả Phù", "Hữu Bật", "Lộc Tồn"] },
    { key: "Cự Hỏa Linh", need: ["Cự Môn", "Hỏa Tinh", "Linh Tinh"] },
    { key: "Hồng Đào Kỵ", need: ["Hồng Loan", "Đào Hoa", "Hoa Cái", "Hóa Kỵ"] },
    { key: "Cự Đồng Hình", need: ["Cự Môn", "Thiên Đồng", "Thiên Hình"] },
    { key: "Lương Phá", need: ["Thiên Lương", "Phá Quân"] },
    { key: "Khôi Việt", need: ["Thiên Khôi", "Thiên Việt"] },
    { key: "Tham Vũ Hỏa", need: ["Tham Lang", "Vũ Khúc", "Hỏa Tinh"] },
    { key: "Cự Kỵ", need: ["Cự Môn", "Hóa Kỵ"] },
    { key: "Kình Đà Hỏa", need: ["Kình Dương", "Đà La", "Hỏa Tinh"] },
    { key: "Kình Đà Không Kiếp", need: ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp"] },
    { Key: "Đào Hồng Hỷ", need: ["Đào Hoa", "Hồng Loan", "Hỷ Thần"] },
    { key: "Đào Hồng Kiếp Sát", need: ["Đào Hoa", "Hồng Loan", "Kiếp Sát"] },
    { key: "Đào Hồng Kỵ", need: ["Đào Hoa", "Hồng Loan", "Hóa Kỵ"] },
    { key: "Đào Hồng Tả Phù Hữu Bật", need: ["Đào Hoa", "Hồng Loan", "Tả Phù", "Hữu Bật"] },
    { key: "Đào Hồng Tả Phù Hữu Bật Khoa Quyền Lộc", need: ["Đào Hoa", "Hồng Loan", "Tả Phù", "Hữu Bật", "Hóa Khoa", "Hóa Quyền", "Hóa Lộc"] },
    { key: "Đào Hồng Tả Phù Hữu Bật Khoa Quyền Lộc Long Trì Phượng Các", need: ["Đào Hoa", "Hồng Loan", "Tả Phù", "Hữu Bật", "Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Long Trì", "Phượng Các"] },
    { key: "Lưu Hà Kiếp Sát", need: ["Lưu Hà", "Địa Kiếp", "Kiếp Sát"] },
    { key: "Phục Không Kiếp", need: ["Phục Binh", "Địa Không", "Địa Kiếp"] },
    { key: "Xương Khúc Khôi Việt", need: ["Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt"] },
    { key: "Khoa Quyền", need: ["Hóa Khoa", "Hóa Quyền"] },
    { key: "Lộc Quyền", need: ["Hóa Lộc", "Hóa Quyền"] },
    { key: "Tướng Binh Đào Hồng", need: ["Thiên Tướng", "Phục Binh", "Đào Hoa", "Hồng Loan"] },
    { key: "Lương Khốc Tuế", need: ["Thiên Lương", "Thiên Khốc", "Thái Tuế"] },
    { key: "Tướng Binh", need: ["Thiên Tướng", "Phục Binh"] },
    { key: "Cự Tang", need: ["Cự Môn", "Tang Môn"] },
    { key: "Cự Hỏa", need: ["Cự Môn", "Hỏa Tinh"] },
    { key: "Phá Hình Kỵ", need: ["Phá Quân", "Thiên Hình", "Hóa Kỵ"] },
    { key: "Tang Trực Tuế", need: ["Tang Môn", "Trực Phù", "Tuế Phá"] },
    { key: "Tuế Xương Khúc", need: ["Thái Tuế", "Văn Xương", "Văn Khúc"] },
    { key: "Tử Vi Tả Hữu", need: ["Tử Vi", "Tả Phù", "Hữu Bật"] },
    { key: "Tử Vi Tang Tả Hữu", need: ["Tử Vi", "Tang Môn", "Tả Phù", "Hữu Bật"] },
    { key: "Ân Quang Thiên Quý Thai Cáo", need: ["Ân Quang", "Thiên Quý", "Tam Thai", "Phong Cáo"] },
    { key: "Ân Quang Thiên Quý Thiên Phúc Quyền Lộc", need: ["Ân Quang", "Thiên Quý", "Thiên Phúc", "Hóa Quyền", "Hóa Lộc"] },
    { key: "Ân Quang Thiên Quý Thiên Hỷ", need: ["Ân Quang", "Thiên Quý", "Thiên Hỷ"] },
    { key: "Quang Quý Tả Hữu Hồng Loan Khôi Việt Hoa Cái Long Trì", need: ["Ân Quang", "Thiên Quý", "Tả Phù", "Hữu Bật", "Hồng Loan", "Thiên Khôi", "Thiên Việt", "Hoa Cái", "Long Trì"] },
    { key: "Quang Quý Đào Hồng", need: ["Ân Quang", "Thiên Quý", "Đào Hoa", "Hồng Loan"] },
    { key: "Bác Sỹ Âm Dương Xương Khúc Khoa", need: ["Bác Sỹ", "Thái Âm", "Thái Dương", "Văn Xương", "Văn Khúc", "Hóa Khoa"] },
    { key: "Bác Sỹ Lương Tướng Quang Quý Thiên Phúc", need: ["Bác Sỹ", "Thiên Lương", "Thiên Tướng", "Ân Quang", "Thiên Quý", "Thiên Phúc"] },
    { key: "Bác Sỹ Cơ Đồng Xương Khúc Đào Hoa", need: ["Bác Sỹ", "Thiên Cơ", "Thiên Đồng", "Văn Xương", "Văn Khúc", "Đào Hoa"] },
    { key: "Bác Sỹ Cô Quả Đẩu Quân Vũ Khúc", need: ["Bác Sỹ", "Cô Thần", "Quả Tú", "Đẩu Quân", "Vũ Khúc"] },
    { key: "Hổ Cái Long Phượng", need: ["Bạch Hổ", "Hoa Cái", "Long Trì", "Phượng Các"] },
    { key: "Vũ Xương Khúc Khôi Việt", need: ["Vũ Khúc", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt"] },
    { key: "Kỵ Phù Hình", need: ["Hóa Kỵ", "Trực Phù", "Thiên Hình"] },
    { key: "Cơ Nguyệt", need: ["Thiên Cơ", "Thái Âm"] },
    { key: "Cơ Nguyệt Đà Kỵ", need: ["Thiên Cơ", "Thái Âm", "Đà La", "Hóa Kỵ"] },
    { key: "Cơ Hỏa", need: ["Thiên Cơ", "Hỏa Tinh"] },
    { key: "Cơ Hổ Kình Đà", need: ["Thiên Cơ", "Bạch Hổ", "Kình Dương", "Đà La"] },
    { key: "Cơ Không Kiếp", need: ["Thiên Cơ", "Địa Không", "Địa Kiếp"] },
    { key: "Hỏa Linh Riêu Hỷ", need: ["Hỏa Tinh", "Linh Tinh", "Thiên Riêu", "Thiên Hỷ"] },
    { key: "Hỏa Linh Tướng Binh", need: ["Hỏa Tinh", "Linh Tinh", "Thiên Tướng", "Phục Binh"] },
    { key: "Không Kiếp Tướng Binh Tả Hữu", need: ["Địa Không", "Địa Kiếp", "Thiên Tướng", "Phục Binh", "Tả Phù", "Hữu Bật"] },
    { key: "Không Kiếp Tướng Binh Kình Đà", need: ["Địa Không", "Địa Kiếp", "Thiên Tướng", "Phục Binh", "Kình Dương", "Đà La"] },
    { key: "Long Không Kiếp", need: ["Long Trì", "Địa Không", "Địa Kiếp"] },
    { key: "Khốc Hư Hỏa Linh", need: ["Thiên Khốc", "Thiên Hư", "Hỏa Tinh", "Linh Tinh"] },
    { key: "Khốc Hư Hỏa Linh Tấu Thư", need: ["Thiên Khốc", "Thiên Hư", "Hỏa Tinh", "Linh Tinh", "Tấu Thư"] },
    { key: "Riêu Hỏa Linh Tấu Thư", need: ["Thiên Riêu", "Hỏa Tinh", "Linh Tinh", "Tấu Thư"] },
    { key: "Hỏa Linh Tấu Thư", need: ["Hỏa Tinh", "Linh Tinh", "Tấu Thư"] },
    { key: "Cơ Nguyệt Đồng Lương Khoa Tả Hữu Quang Qúy Quan Phúc", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Hóa Khoa", "Tả Phù", "Hữu Bật", "Ân Quang", "Thiên Quý", "Quan Phúc"] },
    { key: "Hồng Đào Riêu Tấu Cơ Vũ", need: ["Hồng Loan", "Đào Hoa", "Thiên Riêu", "Tấu Thư", "Thiên Cơ", "Vũ Khúc"] },
    { key: "Lộc Tồn Hóa Lộc", need: ["Lộc Tồn", "Hóa Lộc"] },
    { key: "Riêu Việt Toái", need: ["Thiên Riêu", "Thiên Việt", "Phá Toái"] },
    { key: "Kình Hình", need: ["Kình Dương", "Thiên Hình"] },
    { key: "Kình Hình Không Kiếp", need: ["Kình Dương", "Thiên Hình", "Địa Không", "Địa Kiếp"] },
    { key: "Thất Sát Hóa Kỵ Đà La Thái Tuế", need: ["Thất Sát", "Hóa Kỵ", "Đà La", "Thái Tuế"] },
    { key: "Hổ Khốc Hư Tang", need: ["Bạch Hổ", "Thiên Khốc", "Thiên Hư", "Tang Môn"] },
    { key: "Tang Điếu", need: ["Tang Môn", "Điếu Khách"] },
    { key: "Hổ Kình Đà", need: ["Bạch Hổ", "Kình Dương", "Đà La"] },
    { key: "Hổ Riêu", need: ["Bạch Hổ", "Thiên Riêu"] },
    { key: "Binh Hình Việt", need: ["Phục Binh", "Thiên Hình", "Thiên Việt"] },
    { key: "Liêm Kình Đà Hỏa Linh Không Kiếp", need: ["Liêm Trinh", "Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp"] },

    { key: "Không Kiếp Phục", need: ["Địa Không", "Địa Kiếp", "Phục Binh"] },
    { key: "Không Kiếp Tả Hữu", need: ["Địa Không", "Địa Kiếp", "Tả Phù", "Hữu Bật"] },
    { key: "Không Kiếp Tả Hữu Sát Tướng Phục", need: ["Địa Không", "Địa Kiếp", "Tả Phù", "Hữu Bật", "Thất Sát", "Thiên Tướng", "Phục Binh"] },
    { key: "Lộc Đại Hao", need: ["Hóa Lộc", "Đại Hao"] },
    { key: "Lộc Tiểu Hao", need: ["Hóa Lộc", "Tiểu Hao"] },
    { key: "Lộc Song Hao", need: ["Hóa Lộc", "Đại Hao", "Tiểu Hao"] },
    { key: "Lộc Tang Đà", need: ["Hóa Lộc", "Tang Môn", "Đà La"] },
    { key: "Lộc Không Kiếp", need: ["Hóa Lộc", "Địa Không", "Địa Kiếp"] },
    { key: "Song Hao Hỏa Linh", need: ["Đại Hao", "Tiểu Hao", "Hỏa Tinh", "Linh Tinh"] },
    { key: "Song Hao Hồng Đào", need: ["Đại Hao", "Tiểu Hao", "Hồng Loan", "Đào Hoa"] },
    { key: "Song Hao Không Kiếp", need: ["Đại Hao", "Tiểu Hao", "Địa Không", "Địa Kiếp"] },
    { key: "Tuế Đà Kỵ", need: ["Thái Tuế", "Đà La", "Hóa Kỵ"] },
    { key: "Hình Cơ Tuế", need: ["Thiên Hình", "Thiên Cơ", "Thái Tuế"] },
    { key: "Hình Tang Đào", need: ["Thiên Hình", "Tang Môn", "Đào Hoa"] },
    { key: "Lưu Hà Kiếp Sát Hình", need: ["Lưu Hà", "Kiếp Sát", "Thiên Hình"] },
    { key: "Đào Thai", need: ["Đào Hoa", "Tam Thai"] },
    { key: "Tướng Binh Thai", need: ["Thiên Tướng", "Phục Binh", "Tam Thai"] },
    { key: "Sát Thai", need: ["Thất Sát", "Tam Thai"] },
    { key: "Sát Hình Hổ", need: ["Thất Sát", "Thiên Hình", "Bạch Hổ"] },
    { key: "Nguyệt Hỏa Thai", need: ["Thái Âm", "Hỏa Tinh", "Tam Thai"] },
    { key: "Long Phượng", need: ["Long Trì", "Phượng Các"] },
    { key: "Đào Riêu", need: ["Đào Hoa", "Thiên Riêu"] },
    { key: "Đào Hồng Cái", need: ["Đào Hoa", "Hồng Loan", "Hoa Cái"] },
    { key: "Lộc Mã Thanh Long", need: ["Hóa Lộc", "Thiên Mã", "Thanh Long"] },
    { key: "Lộc Phượng Long", need: ["Hóa Lộc", "Phượng Các", "Long Trì"] },
    { key: "Riêu Kỵ", need: ["Thiên Riêu", "Hóa Kỵ"] },
    { key: "Kỵ Đà Hồng Đào", need: ["Hóa Kỵ", "Đà La", "Hồng Loan", "Đào Hoa"] },
    { key: "Kiếp Kỵ", need: ["Địa Kiếp", "Hóa Kỵ"] },
    { key: "Kiếp Sát Kỵ", need: ["Kiếp Sát", "Hóa Kỵ"] },
    { key: "Sát Đà Riêu Linh Hỏa", need: ["Thất Sát", "Đà La", "Thiên Riêu", "Linh Tinh", "Hỏa Tinh"] },
    { key: "Kiếp Sát Đà Riêu Linh Hỏa", need: ["Kiếp Sát", "Đà La", "Thiên Riêu", "Linh Tinh", "Hỏa Tinh"] },
    { key: "Tham Sát", need: ["Tham Lang", "Thất Sát"] },
    { key: "Đào Riêu Hỷ", need: ["Đào Hoa", "Thiên Riêu", "Hỷ Thần"] },
    { key: "Hồng Đào Thai Binh Tướng", need: ["Hồng Loan", "Đào Hoa", "Tam Thai", "Phục Binh", "Thiên Tướng"] },
    { key: "Tang Mã", need: ["Tang Môn", "Thiên Mã"] },
    { key: "Phá Toái Hình Kỵ", need: ["Phá Toái", "Thiên Hình", "Hóa Kỵ"] },
    { key: "Phá Tướng", need: ["Phá Quân", "Thiên Tướng"] },
    { key: "Tử Vi Tang Tả Hữu", need: ["Tử Vi", "Tang Môn", "Tả Phù", "Hữu Bật"] },
    { key: "Tử Vi Tả Hữu", need: ["Tử Vi", "Tả Phù", "Hữu Bật"] },
    { key: "Khoa Quyền Lộc", need: ["Hóa Khoa", "Hóa Quyền", "Hóa Lộc"] },

    { key: "Cơ Nguyệt Đồng Lương Tả Hữu Quang Quý Quan Phúc", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Tả Phù", "Hữu Bật", "Ân Quang", "Thiên Quý", "Quan Phúc"] },
    { key: "Cơ Nguyệt Đồng Lương Tả Hữu Khoa Quyền Khôi Việt Xương Khúc Tấu", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Tả Phù", "Hữu Bật", "Hóa Khoa", "Hóa Quyền", "Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc", "Tấu Thư"] },
    { key: "Cơ Nguyệt Đồng Lương Tả Hữu Xương Khúc", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc"] },
    { key: "Tử Phủ Vũ Tướng Tả Hữu Long Phượng Hình Riêu", need: ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Tả Phù", "Hữu Bật", "Long Trì", "Phượng Các", "Thiên Hình", "Thiên Riêu"] },
    { key: "Thiên Cơ Hồng Riêu Đào Tấu", need: ["Thiên Cơ", "Hồng Loan", "Thiên Riêu", "Đào Hoa", "Tấu Thư"] },
    { key: "Thiên Cơ Hồng Tấu", need: ["Thiên Cơ", "Hồng Loan", "Tấu Thư"] },
    { key: "Sát Phá Liêm Tham Hồng Đào Tấu Long Phượng", need: ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Hồng Loan", "Đào Hoa", "Tấu Thư", "Long Trì", "Phượng Các"] },

    { key: "Cơ Nguyệt Đồng Lương Tả Hữu Xương Khúc Thai Cáo", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thai Cáo"] },
    { key: "Cơ Nguyệt Đồng Lương Tướng Ấn Long Phượng Phù", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm", "Thiên Tướng", "Quốc Ấn", "Long Trì", "Phượng Các", "Trực Phù"] },
    { key: "Sát Phá Liêm Tham Tả Hữu Quyền Lộc Nhật Nguyệt", need: ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Tả Phù", "Hữu Bật", "Hóa Quyền", "Hóa Lộc", "Thái Dương", "Thái Âm"] },
    { key: "Đồng Long Phượng Hình Riêu Hồng Đào", need: ["Thiên Đồng", "Long Trì", "Phượng Các", "Thiên Hình", "Thiên Riêu", "Hồng Loan", "Đào Hoa"] },
    { key: "Thiên Tướng Quan Phù Tả Hữu Tướng Ấn", need: ["Thiên Tướng", "Quan Phù", "Tả Phù", "Hữu Bật", "Tướng Quân", "Quốc Ấn"] },




















];

// Helper tứ chiếu
function getStarsInTuChieu(i, dsChinh, dsPhu) {
    const arrCung = dsChinh.map((c, idx) => ({
        tenCung: c.tenCung,
        chi: c.chi,
        idx
    }));

    const cungChinh = arrCung[i];
    const idxDoi = (i + 6) % 12;
    const cungDoi = arrCung[idxDoi];


    // Tam hợp
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let group = TAM_HOP_CHI.find(gr => gr.includes(cungChinh.chi));
    let cungTamHop1 = null, cungTamHop2 = null;
    if (group) {
        const chi1 = group.find(chi => chi !== cungChinh.chi);
        const chi2 = group.find(chi => chi !== cungChinh.chi && chi !== chi1);
        cungTamHop1 = arrCung.find(c => c.chi === chi1);
        cungTamHop2 = arrCung.find(c => c.chi === chi2);
    }
    const NHI_HOP_HAI = {
        "Tý": { hop: "Sửu", hai: "Mùi" },
        "Sửu": { hop: "Tý", hai: "Ngọ" },
        "Dần": { hop: "Hợi", hai: "Tỵ" },
        "Mão": { hop: "Tuất", hai: "Thìn" },
        "Thìn": { hop: "Dậu", hai: "Mão" },
        "Tỵ": { hop: "Thân", hai: "Dần" },
        "Ngọ": { hop: "Mùi", hai: "Sửu" },
        "Mùi": { hop: "Ngọ", hai: "Tý" },
        "Thân": { hop: "Tỵ", hai: "Hợi" },
        "Dậu": { hop: "Thìn", hai: "Tuất" },
        "Tuất": { hop: "Mão", hai: "Dậu" },
        "Hợi": { hop: "Dần", hai: "Thân" }
    };

    const nhihopChi = NHI_HOP_HAI[cungChinh.chi]?.hop;
    const nhihaiChi = NHI_HOP_HAI[cungChinh.chi]?.hai;
    const cungNhiHop = arrCung.find(c => c.chi === nhihopChi);
    const cungNhiHai = arrCung.find(c => c.chi === nhihaiChi);
    let idxs = [i, idxDoi];
    if (cungTamHop1) idxs.push(cungTamHop1.idx);
    if (cungTamHop2) idxs.push(cungTamHop2.idx);
    idxs.push(cungDoi.idx);
    idxs.push(cungNhiHop.idx);
    idxs.push(cungNhiHai.idx);


    // Lấy tên sao từng cung
    let saoTuchieu = [];
    idxs.forEach(idx => {
        saoTuchieu = saoTuchieu.concat(dsChinh[idx].chinhTinh, dsPhu[idx].phuTinh);
    });
    // Loại bỏ trùng lặp
    return Array.from(new Set(saoTuchieu.filter(Boolean)));
}

// Tìm toàn bộ cách cục xuất hiện trong bộ sao tứ chiếu
function findCachCuc(saoArr) {
    let cachCucFound = [];
    DS_CACH_CUC.forEach(cach => {
        // Nếu tất cả required sao đều có trong bộ sao tứ chiếu
        if (cach.need.every(sao => saoArr.includes(sao))) {
            cachCucFound.push(cach.key);
        }
    });
    return cachCucFound;
}

// ======= TÍCH HỢP HIỆN THỊ SONG SONG SAO LẺ + CÁCH CỤC + TRA CỨU EXCEL =======

function LuanGiaiCacCungVaHienThi() {
    const dsChinh = getDanhSachChinhTinhTungCung();
    const dsPhu = getDanhSachPhuTinhTungCung();
    let cungArr = getCungData();


    // hiển thị HTML
    document.getElementById('cung-content').innerHTML =
        cungArr.map((item, i) => {
            let chinhTinh = dsChinh[i].chinhTinh;
            const phuTinh = dsPhu[i].phuTinh;
            let contentHtml = '';
            if (chinhTinh.length === 0) {
                // Lấy chính tinh đối cung
                const idxDoi = (i + 6) % 12;
                const chinhTinhDoi = dsChinh[idxDoi].chinhTinh;
                if (chinhTinhDoi.length === 0) {
                    contentHtml += `<div><i>Vô Chính Diệu (cả cung đối)</i></div>`;
                } else if (chinhTinhDoi.length === 1) {
                    contentHtml += `<div><i>Vô chính diệu nên lấy <b>${chinhTinhDoi[0]}</b> của cung đối (${cungArr[idxDoi].tenCung}) để xét</i></div>`;
                } else if (chinhTinhDoi.length === 2) {
                    contentHtml += `<div><i>Vô chính diệu nên lấy <b>${chinhTinhDoi[0]} và ${chinhTinhDoi[1]}</b> đồng cung của cung đối (${cungArr[idxDoi].tenCung}) để xét</i></div>`;
                }

            } else if (chinhTinh.length === 1) {
                contentHtml += `<div><b>${chinhTinh[0]}</b> tọa thủ tại ${item.tenCung}</div>`;

            } else if (chinhTinh.length === 2) {
                contentHtml += `<div><b>${chinhTinh.join(" và ")} đồng cung tại ${item.tenCung}</b></div>`;
            }



            // Phụ tinh
            if (phuTinh.length > 0) {
                contentHtml += `<div>Phụ tinh: ${phuTinh.join(", ")}</div>`;
            }
            // Cách cục từ sao tứ chiếu
            const saoTuChieu = getStarsInTuChieu(i, dsChinh, dsPhu);
            const cachCuc = findCachCuc(saoTuChieu);
            if (cachCuc.length > 0) {
                contentHtml += `<div><b>Cách cục:</b> <span style="color: #d0021b">${cachCuc.join(", ")} </span></div>`;
            }
            // Nơi tra cứu Excel sẽ được bơm vào .bo-sao-excel bên dưới
            contentHtml += `<div class="bo-sao-excel"><em>Đang tra cứu bộ sao...</em></div>`;

            // CHUẨN sticky scroll: tên cung riêng .cung-title, toàn bộ còn lại .cung-content
            return `<div class="cung-item" id="cung-${item.tenCung.replace(/\s/g, '').toLowerCase()}">
                    <div class="cung-title">${item.tenCung}</div>
                    <div class="cung-content">${contentHtml}</div>
                </div>`;
        }).join('');


    // B3: Lặp qua từng cung và tra cứu sao
    // Add sao từng cung vào mảng key
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    cungArr.forEach((item, i) => {

        const keyArr = [];
        const vitriDiaSinhCungMenh = kiemTraDiaSinh(lasoData.hanhMenh, lasoData.lasoOb[0].chi);
        keyArr.push(`Vị trí địa sinh cung Mệnh tại ${vitriDiaSinhCungMenh}`);
        
        //xét các chính tinh


        const idxDoi = (i + 6) % 12;
        const chinhTinh = dsChinh[i].chinhTinh;
        const chinhTinhDoi = dsChinh[idxDoi].chinhTinh;
        const tenCungDoi = cungArr[idxDoi].tenCung;

        if (chinhTinh.length === 0) {
            // Vô chính diệu
            if (chinhTinhDoi.length === 1) {
                keyArr.push(`${chinhTinhDoi[0]} tọa thủ tại cung đối ${tenCungDoi}`);
            } else if (chinhTinhDoi.length === 2) {
                keyArr.push(`${chinhTinhDoi[0]} đồng cung ${chinhTinhDoi[1]} tại cung đối ${tenCungDoi}`);
            } else {
                keyArr.push("Vô Chính Diệu");
            }

        } else if (chinhTinh.length === 1) {

            keyArr.push(chinhTinh[0] + " tọa thủ tại " + item.chi);
            
        } else if (chinhTinh.length === 2) {
            keyArr.push(chinhTinh[0] + " và " + chinhTinh[1] + " đồng cung tại " + item.chi);
            
        }
        else chinhTinh.forEach(ct => {
            if (ct)

                if (chinhTinh.length == 2) {
                    keyArr.push(chinhTinh[0] + " và " + chinhTinh[1] + " đồng cung tại " + item.chi);
                    
                }
        });


        // Xét các phụ tinh
        const phuTinh = dsPhu[i].phuTinh;
        
        phuTinh.forEach(pt => {
            
            if (pt) {
                keyArr.push(pt + " tọa thủ tại " + item.tenCung);

                
            }
        });
        // Kiểm tra nếu cung Mệnh và cung Thân có sao Địa Không và Địa Kiếp
        MenhKhongThanKiep(idCungMenh, idCungThan, dsChinh, dsPhu, keyArr);
        ThanMenhDongCungVoChinhDieu(keyArr); // Kiểm tra Thân mệnh đồng cung Vô Chính Diệu
        LuanCungMenh(keyArr); // Luận cung Mệnh
        LuanCungPhuMau(keyArr); // Luận cung Phụ Mẫu
        LuanCungPhucDuc(keyArr); // Luận cung Phúc Đức
        LuanCungDienTrach(keyArr); // Luận cung Điền Trạch
        LuanCungQuanLoc(keyArr); // Luận cung Quan Lộc
        LuanCungNoBoc(keyArr); // Luận cung Nô Bộc
        LuanCungThienDi(keyArr); // Luận cung Thiên Di
        LuanCungTatAch(keyArr); // Luận cung Tật Ách
        LuanCungTaiBach(keyArr); // Luận cung Tài Bạch
        LuanCungTuTuc(keyArr); // Luận cung Tử Tức
        LuanCungPhuThe(keyArr); // Luận cung Phu Thê
        LuanCungHuynhDe(keyArr); // Luận cung Huynh Đệ
        // Lọc các cách cục đặc biệt

        //Xét các sao trong tứ chiếu
        const cachCuc = findCachCuc(getStarsInTuChieu(i, dsChinh, dsPhu));
        


        // Kiểm tra các cách cục đặc biệt

        // Kiểm tra xem Mênh tại Tý Ngọ có Thiên Khốc Thiên Hư đồng cung
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Khốc", "Thiên Hư") || isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thiên Khốc", "Thiên Hư")) {
            keyArr.push("Mệnh Tý Ngọ có Thiên Khốc Thiên Hư đồng cung");
        }
        // Kiểm tra cung Quan có Thiên Lương độc tọa tại Hợi hoặc Tý
        if (isSaoToaThuTaiCungVaChi("Quan Lộc", "Hợi", "Thiên Lương")) {
            keyArr.push("Quan Lộc có Thiên Lương thủ tọa tại Hợi");
        }
        if (isSaoToaThuTaiCungVaChi("Quan Lộc", "Tý", "Thiên Lương")) {
            keyArr.push("Quan Lộc có Thiên Lương thủ tọa tại Tý");
        }
        // Kiểm tra cung Quan có Thiên Đồng Thiên Lương đồng cung
        if (isHaiSaoDongCungTaiCung("Quan Lộc", "Thiên Đồng", "Thiên Lương")) {
            keyArr.push("Quan Lộc có Thiên Đồng Thiên Lương đồng cung");
        }
        // Kiểm tra cung Quan có Tử Vi, Thiên Tướng đồng cung
        if (isHaiSaoDongCungTaiCung("Quan Lộc", "Tử Vi", "Thiên Tướng")) {
            keyArr.push("Quan Lộc có Tử Vi Thiên Tướng đồng cung");
        }
        // Kiểm tra cung Quan có Tham Lang Tử Vi đồng cung
        if (isHaiSaoDongCungTaiCung("Quan Lộc", "Tham Lang", "Tử Vi")) {
            keyArr.push("Quan Lộc có Tham Lang Tử Vi đồng cung");
        }


        cachCuc.forEach(cc => { keyArr.push(cc + " hội chiếu tại " + item.tenCung) }); // Các cách cục

        //Lọc trùng
        const keyArrUniq = Array.from(new Set(keyArr.filter(Boolean)));
        const tenFile = cungExcelFileMap[item.tenCung] || defaultFileExcel;
        if (excelDataCache[tenFile]) {
            traCuuVaHienThiChoCung(item, excelDataCache[tenFile], keyArrUniq);
        } else {
            loadComboExcel(tenFile, function (comboData) {
                excelDataCache[tenFile] = comboData;
                traCuuVaHienThiChoCung(item, comboData, keyArrUniq);
            });
        }
    });
}

function findChiCungChuaSao(tenSao, lasoOb) {
    for (let i = 0; i < lasoOb.length; ++i) {
        let cung = lasoOb[i];
        if (!Array.isArray(cung.sao)) continue;
        // Tìm trong danh sách sao của cung
        if (cung.sao.some(sao => (sao.ten && sao.ten.replace(/\s+/g, '').toLowerCase() === tenSao.replace(/\s+/g, '').toLowerCase()))) {
            return cung.chi;
        }
    }
    return null;
}

function kiemTraSaoSangToi(vtrdac, vtrham, diachisao) {
    if (vtrdac.includes(diachisao)) {
        return "sao sáng";
    } else if (vtrham.includes(diachisao)) {
        return "sao tối";
    }
}

// Thân mệnh đồng cung mệnh vô chính diệu

// Hàm chính luận giải lá số
function LuanGiaiLaso() {
    setTimeout(setLasoData(), 200);
    TraSao(comboLuanChungData, fileLuangiaiChung, classluangiaiChung, luanGiaiChung);  // Tổng quan
    TraSao(comboLoiKhuyenData, fileLoiKhuyen, classLoiKhuyen, luanGiaiLoiKhuyen);   // Lời khuyên
    HienThiNhanXetDaiVan();
    LuanGiaiChung();
    LuanGiaiDaiVan();
    LuanGiaiCacCungVaHienThi();
}