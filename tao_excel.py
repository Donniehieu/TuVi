import xlsxwriter

chinh_tinh = [
    "Tử Vi", "Thiên Cơ", "Thái Dương", "Vũ Khúc", "Thiên Đồng", "Liêm Trinh", "Thiên Phủ",
    "Thái Âm", "Tham Lang", "Cự Môn", "Thiên Tướng", "Thiên Lương", "Thất Sát", "Phá Quân"
]
cung = [
    "Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch", "Quan Lộc", "Nô Bộc",
    "Thiên Di", "Tật Ách", "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"
]

workbook = xlsxwriter.Workbook('chinh_tinh_cung_doi.xlsx')
worksheet = workbook.add_worksheet()
worksheet.write(0, 0, 'Cung xét')
worksheet.write(0, 1, 'Cung đối')
worksheet.write(0, 2, '1 Chính tinh')
worksheet.write(0, 3, '2 Chính tinh đồng cung')

row = 1

# 1 chính tinh
for i, ten_cung in enumerate(cung):
    ten_cung_doi = cung[(i + 6) % 12]
    for ct in chinh_tinh:
        worksheet.write(row, 0, ten_cung)
        worksheet.write(row, 1, ten_cung_doi)
        worksheet.write(row, 2, f"{ct} tọa thủ tại cung đối {ten_cung_doi}")
        row += 1

# 2 chính tinh đồng cung
for i, ten_cung in enumerate(cung):
    ten_cung_doi = cung[(i + 6) % 12]
    for x in range(len(chinh_tinh)):
        for y in range(x + 1, len(chinh_tinh)):
            worksheet.write(row, 0, ten_cung)
            worksheet.write(row, 1, ten_cung_doi)
            worksheet.write(row, 3, f"{chinh_tinh[x]} đồng cung {chinh_tinh[y]} tại cung đối {ten_cung_doi}")
            row += 1

workbook.close()
print("Đã xuất ra file chinh_tinh_cung_doi.xlsx")