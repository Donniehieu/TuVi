// Kiểm tra hợp lệ ngày/tháng/năm dương lịch và cảnh báo
// [Cập nhật] Thêm kiểm tra tháng 1-12, năm xem hạn >= năm sinh, hiện ngày âm lịch xem trước
// và gợi ý còn thiếu trường nào khi nút "Xem tử vi" đang bị khóa.
function isLeapYear(year) {
  year = parseInt(year);
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
function scalePage() {
  document.body.classList.add('scaled');
}

function getMaxDay(month, year) {
  month = parseInt(month);
  year = parseInt(year);
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
  if ([4, 6, 9, 11].includes(month)) return 30;
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return 31; // fallback
}
const ngayInput = document.getElementById('ngay');
const thangInput = document.getElementById('thang');
const namInput = document.getElementById('nam');
const btnTuvi = document.getElementById('btn_xemtuvi');
const amlichDiv = document.getElementById('amlich');

// Hiện / ẩn khung thông báo (loai: 'info' | 'error' | '')
function hienThongBao(loai, noiDung) {
  if (!amlichDiv) return;
  amlichDiv.classList.remove('is-info', 'is-error');
  if (!loai || !noiDung) {
    amlichDiv.classList.add('d-none');
    amlichDiv.textContent = '';
    return;
  }
  amlichDiv.classList.remove('d-none');
  amlichDiv.classList.add(loai === 'error' ? 'is-error' : 'is-info');
  amlichDiv.textContent = noiDung;
}

function hienGoiY(noiDung) {
  const hint = document.getElementById('form-hint');
  if (hint) hint.textContent = noiDung || '';
}

function validateDateInput() {
  const day = parseInt(ngayInput.value);
  const month = parseInt(thangInput.value);
  const year = parseInt(namInput.value);
  const hotenEl = document.getElementById('hoten');
  const namXemHanEl = document.getElementById('namxemhan');
  const hoten = hotenEl ? hotenEl.value.trim() : '';
  const namxemhan = namXemHanEl ? parseInt(namXemHanEl.value) : NaN;

  // 1. Các lỗi nhập sai
  let loi = '';
  if (thangInput.value !== '' && (month < 1 || month > 12 || isNaN(month))) {
    loi = 'Tháng sinh phải từ 1 đến 12.';
  } else if (namInput.value !== '' && (year < 1900 || year > 2100 || isNaN(year))) {
    loi = 'Năm sinh phải từ 1900 đến 2100.';
  } else if (month && year) {
    const maxDay = getMaxDay(month, year);
    ngayInput.max = maxDay; // cập nhật max cho input ngày
    if (ngayInput.value !== '' && day > maxDay) {
      loi = `Tháng ${month} năm ${year} chỉ có tối đa ${maxDay} ngày. Vui lòng nhập lại ngày!`;
    } else if (ngayInput.value !== '' && (day < 1 || isNaN(day))) {
      loi = 'Ngày sinh phải từ 1 trở lên.';
    }
  }
  if (!loi && namXemHanEl && namXemHanEl.value !== '') {
    if (namxemhan < 1900 || namxemhan > 2100 || isNaN(namxemhan)) {
      loi = 'Năm xem hạn phải từ 1900 đến 2100.';
    } else if (year && namxemhan < year) {
      loi = 'Năm xem hạn phải từ năm sinh trở đi.';
    }
  }
  if (loi) {
    hienThongBao('error', loi);
    hienGoiY('');
    btnTuvi.disabled = true;
    return;
  }

  // 2. Hiện ngày âm lịch xem trước để người dùng đối chiếu
  let amlichText = '';
  if (day && month && year && typeof convertSolar2Lunar === 'function') {
    try {
      const kq = convertSolar2Lunar(day, month, year, 7);
      amlichText = `Âm lịch: ${kq[0]}/${kq[1]}${kq[3] ? ' (nhuận)' : ''}/${kq[2]}`;
    } catch (e) { amlichText = ''; }
  }
  hienThongBao(amlichText ? 'info' : '', amlichText);

  // 3. Kiểm tra đủ thông tin để mở nút
  const thieu = [];
  if (!hoten) thieu.push('họ tên');
  if (!day) thieu.push('ngày sinh');
  if (!month) thieu.push('tháng sinh');
  if (!year) thieu.push('năm sinh');
  if (!namxemhan) thieu.push('năm xem hạn');
  btnTuvi.disabled = thieu.length > 0;
  hienGoiY(thieu.length ? 'Còn thiếu: ' + thieu.join(', ') + '.' : 'Thông tin đã đủ, bấm "Xem tử vi" để lập lá số.');
}
// hàm check khi input ngày tháng năm
ngayInput.addEventListener('input', validateDateInput);
thangInput.addEventListener('input', validateDateInput);
namInput.addEventListener('input', validateDateInput);
