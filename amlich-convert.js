/**
 * amlich-convert.js
 * Chuyển đổi lịch dương (Gregorian) sang lịch âm (Lunar) và Can Chi
 * Dựa trên thuật toán của Ho Ngoc Duc
 * Timezone: UTC+7 (Giờ Việt Nam)
 */

const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const CHI_THANG = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu"];

// Bảng khởi Can tháng 1 theo Can năm
const START_CAN_THANG = {
    "Giáp": 2,   // Bính
    "Ất": 4,     // Mậu
    "Bính": 6,   // Canh
    "Đinh": 8,   // Nhâm
    "Mậu": 0,    // Giáp
    "Kỷ": 2,     // Bính
    "Canh": 4,   // Mậu
    "Tân": 6,    // Canh
    "Nhâm": 8,   // Nhâm
    "Quý": 0     // Giáp
};

function INT(d) {
    return Math.floor(d);
}

/**
 * Chuyển ngày dương lịch sang Julian Day Number
 */
function jdFromDate(d, m, y) {
    let a = INT((14 - m) / 12);
    let y2 = y + 4800 - a;
    let m2 = m + 12 * a - 3;
    let jd = d + INT((153 * m2 + 2) / 5) + 365 * y2 + INT(y2 / 4) - INT(y2 / 100) + INT(y2 / 400) - 32045;
    return jd;
}

/**
 * Tính ngày Sóc (New Moon) thứ k
 * Công thức thiên văn của Jean Meeus
 */
function getNewMoonDay(k, timeZone) {
    let T = k / 1236.85;
    let T2 = T * T;
    let T3 = T2 * T;
    let dr = Math.PI / 180;
    
    let Jd1 = 2415020.75933 + 29.53058868 * k
        + 0.0001178 * T2
        - 0.000000155 * T3
        + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
    
    let M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
    let Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
    let F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
    
    let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr)
        + 0.0021 * Math.sin(2 * dr * M)
        - 0.4068 * Math.sin(Mpr * dr)
        + 0.0161 * Math.sin(dr * 2 * Mpr)
        - 0.0004 * Math.sin(dr * 3 * Mpr)
        + 0.0104 * Math.sin(dr * 2 * F)
        - 0.0051 * Math.sin(dr * (M + Mpr))
        - 0.0074 * Math.sin(dr * (M - Mpr))
        + 0.0004 * Math.sin(dr * (2 * F + M))
        - 0.0004 * Math.sin(dr * (2 * F - M))
        - 0.0006 * Math.sin(dr * (2 * F + Mpr))
        + 0.0010 * Math.sin(dr * (2 * F - Mpr))
        + 0.0005 * Math.sin(dr * (2 * Mpr + M));
    
    let deltat = 0;
    if (T < -11) {
        deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
    } else {
        deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
    }
    
    let JdNew = Jd1 + C1 - deltat;
    return INT(JdNew + 0.5 + timeZone / 24);
}

/**
 * Tính độ dài Mặt Trời (Sun Longitude)
 * Dùng để xác định tháng nhuận
 */
function getSunLongitude(jdn, timeZone) {
    let T = (jdn - 2451545.5 - timeZone / 24) / 36525;
    let T2 = T * T;
    let dr = Math.PI / 180;
    
    let M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
    let L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
    let DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M)
        + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M)
        + 0.000290 * Math.sin(dr * 3 * M);
    
    let L = L0 + DL;
    L = L % 360;
    return INT(L / 30);
}

/**
 * Tìm Sóc tháng 11 âm lịch của năm dương lịch yy
 */
function getLunarMonth11(yy, timeZone) {
    let off = jdFromDate(31, 12, yy) - 2415021;
    let k = INT(off / 29.530588853);
    let nm = getNewMoonDay(k, timeZone);
    let sunLong = getSunLongitude(nm, timeZone);
    
    if (sunLong >= 9) {
        nm = getNewMoonDay(k - 1, timeZone);
    }
    return nm;
}

/**
 * Tìm vị trí tháng nhuận trong năm âm lịch
 * Trả về số thứ tự tháng nhuận (1-12), 0 nếu không có tháng nhuận
 */
function getLeapMonthOffset(a11, timeZone) {
    let k = INT(0.5 + (a11 - 2415021.076998695) / 29.530588853);
    let last = 0;
    let i = 1;
    let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    
    do {
        last = arc;
        i++;
        arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    } while (arc != last && i < 14);
    
    return i - 1;
}

/**
 * Chuyển đổi ngày dương lịch sang âm lịch
 * @param {number} d - Ngày (1-31)
 * @param {number} m - Tháng (1-12)
 * @param {number} y - Năm
 * @param {number} timeZone - Múi giờ (mặc định 7 cho Việt Nam)
 * @returns {Array} [lunarDay, lunarMonth, lunarYear, isLeapMonth]
 */
function convertSolar2Lunar(d, m, y, timeZone = 7) {
    let jd = jdFromDate(d, m, y);
    let k = INT((jd - 2415021.076998695) / 29.530588853);
    let monthStart = getNewMoonDay(k + 1, timeZone);
    
    if (monthStart > jd) {
        monthStart = getNewMoonDay(k, timeZone);
    }
    
    // Tìm a11: tháng 11 âm lịch năm trước
    let a11 = getLunarMonth11(y, timeZone);
    let b11;
    
    let lunarYear = y;
    if (a11 >= monthStart) {
        lunarYear = y;
        a11 = getLunarMonth11(y - 1, timeZone);
        b11 = getLunarMonth11(y, timeZone);
    } else {
        lunarYear = y + 1;
        b11 = getLunarMonth11(y + 1, timeZone);
    }
    
    let lunarDay = jd - monthStart + 1;
    let diff = INT((monthStart - a11) / 29.530588853);
    let lunarMonth = diff + 11;
    let leapMonth = 0;
    
    // Xác định tháng nhuận
    if (b11 - a11 > 365) {
        let leapMonthOffset = getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthOffset) {
            lunarMonth = diff + 10;
            if (diff === leapMonthOffset) {
                leapMonth = 1;
            }
        }
    }
    
    // Chuẩn hóa tháng
    if (lunarMonth > 12) {
        lunarMonth -= 12;
    }
    
    // Điều chỉnh năm nếu cần
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear -= 1;
    }
    
    return [lunarDay, lunarMonth, lunarYear, leapMonth];
}

/**
 * Lấy Can Chi của năm âm lịch
 */
function getCanChiYear(lunarYear) {
    let canIndex = (lunarYear - 4) % 10;
    let chiIndex = (lunarYear - 4) % 12;
    return {
        can: CAN[canIndex],
        chi: CHI[chiIndex],
        text: CAN[canIndex] + " " + CHI[chiIndex]
    };
}

/**
 * Lấy Can Chi của tháng âm lịch
 */
function getCanChiMonth(lunarYear, lunarMonth) {
    let canIndex = (lunarYear - 4) % 10;
    let canNam = CAN[canIndex];
    let startCan = START_CAN_THANG[canNam];
    
    let canThangIndex = (startCan + lunarMonth - 1) % 10;
    let chiThangIndex = (lunarMonth - 1) % 12;
    
    return {
        can: CAN[canThangIndex],
        chi: CHI_THANG[chiThangIndex],
        text: CAN[canThangIndex] + " " + CHI_THANG[chiThangIndex]
    };
}

/**
 * Lấy Can Chi của ngày
 */
function getCanChiDay(jd) {
    let canIndex = (jd + 9) % 10;
    let chiIndex = (jd + 1) % 12;
    
    return {
        can: CAN[canIndex],
        chi: CHI[chiIndex],
        text: CAN[canIndex] + " " + CHI[chiIndex]
    };
}

/**
 * Lấy Can Chi của giờ
 * @param {string} chiHour - Chi của giờ (Tý, Sửu, Dần, ...)
 * @param {number} jd - Julian Day Number
 */
function getCanChiHour(chiHour, jd) {
    let canDayIndex = (jd + 9) % 10;
    let chiHourIndex = CHI.indexOf(chiHour);
    
    if (chiHourIndex === -1) {
        return { error: "Chi giờ không hợp lệ. Chọn một trong: " + CHI.join(", ") };
    }
    
    let canHourIndex = (canDayIndex * 2 + chiHourIndex) % 10;
    
    return {
        can: CAN[canHourIndex],
        chi: chiHour,
        text: CAN[canHourIndex] + " " + chiHour
    };
}

/**
 * Chuyển đổi đầy đủ: dương lịch → âm lịch + Can Chi
 * @param {number} d - Ngày dương lịch
 * @param {number} m - Tháng dương lịch
 * @param {number} y - Năm dương lịch
 * @param {string} chiHour - Chi của giờ (Tý, Sửu, Dần, ...) - tùy chọn
 * @returns {Object} Kết quả chuyển đổi đầy đủ
 */
function convertFullAmlich(d, m, y, chiHour = null) {
    const [lunarDay, lunarMonth, lunarYear, isLeapMonth] = convertSolar2Lunar(d, m, y);
    const jd = jdFromDate(d, m, y);
    
    const result = {
        dlichDuong: {
            ngay: d,
            thang: m,
            nam: y
        },
        dlichAm: {
            ngay: lunarDay,
            thang: lunarMonth,
            nam: lunarYear,
            nhuan: isLeapMonth,
            thuThang: isLeapMonth ? "Nhuận tháng " + lunarMonth : "Tháng " + lunarMonth
        },
        canChi: {
            nam: getCanChiYear(lunarYear),
            thang: getCanChiMonth(lunarYear, lunarMonth),
            ngay: getCanChiDay(jd)
        }
    };
    
    if (chiHour) {
        result.canChi.gio = getCanChiHour(chiHour, jd);
    }
    
    return result;
}

/**
 * Format kết quả thành chuỗi dễ đọc
 */
function formatAmlich(result) {
    let output = "";
    output += `Dương lịch: ${result.dlichDuong.ngay}/${result.dlichDuong.thang}/${result.dlichDuong.nam}\n`;
    output += `Âm lịch: ${result.dlichAm.ngay}/${result.dlichAm.thang}/${result.dlichAm.nam}`;
    if (result.dlichAm.nhuan) {
        output += " (Nhuận)";
    }
    output += "\n";
    output += `Can Chi năm: ${result.canChi.nam.text}\n`;
    output += `Can Chi tháng: ${result.canChi.thang.text}\n`;
    output += `Can Chi ngày: ${result.canChi.ngay.text}`;
    if (result.canChi.gio) {
        output += `\nCan Chi giờ: ${result.canChi.gio.text}`;
    }
    return output;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        convertSolar2Lunar,
        convertFullAmlich,
        getCanChiYear,
        getCanChiMonth,
        getCanChiDay,
        getCanChiHour,
        formatAmlich,
        jdFromDate,
        getNewMoonDay,
        getLunarMonth11
    };
}
