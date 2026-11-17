const mappingTamHopCungMenh = [
    // 0: Dần
    {
        start: { cell: [9, 14], type: "corner" }, // Đỉnh chung Dần - Mão
        ends: [
            { cell: 2, type: "edge", edge: "bottom" }, // Trung điểm cạnh dưới Ngọ (cell2)
            { cell: 12, type: "edge", edge: "left" },  // Trung điểm cạnh trái Tuất (cell12)
            { cell: [3, 8], type: "corner" }           //
        ]
    },
    // 1: Mão
    {
        start: { cell: 9, type: "edge", edge: "right" }, // Trung điểm cạnh phải Mão
        ends: [
            { cell: 8, type: "edge", edge: "left" },     // Trung điểm trái Dậu (Thiên Di)
            { cell: 3, type: "edge", edge: "bottom" },   // Trung điểm dưới Mùi (Quan)
            { cell: [15, 12], type: "corner" }           // Đỉnh chung Hợi - Tuất (Tài - Tử Tức)
        ]
    },
    // 2: Thìn
    {
        start: { cell: 5, type: "edge", edge: "right" }, // Trung điểm cạnh phải Thìn
        ends: [
            { cell: 12, type: "edge", edge: "left" },    // Trung điểm trái Tuất (Thiên Di)
            { cell: [3, 8], type: "corner" },            // Đỉnh chung Thân - Dậu (Quan - Nô Bộc)
            { cell: 15, type: "edge", edge: "top" }      // Trung điểm trên Tý (Tài)
        ]
    },
    // 3: Tỵ
    {
        start: { cell: [1, 5], type: "corner" },         // Đỉnh chung Tỵ - Ngọ
        ends: [
            { cell: [12, 15], type: "corner" },            // Đỉnh chung Mùi - Thân (Thiên Di - Nô Bộc)
            { cell: 8, type: "edge", edge: "left" },     // Trung điểm trái Dậu (Quan)
            { cell: 14, type: "edge", edge: "top" }      // Trung điểm trên Sửu (Tài)
        ]
    },
    // 4: Ngọ
    {
        start: { cell: 2, type: "edge", edge: "bottom" }, // Trung điểm dưới Ngọ
        ends: [
            { cell: 15, type: "edge", edge: "top" },      // Trung điểm trên Tý (Thiên Di)
            { cell: [9, 14], type: "corner" },            // Đỉnh chung Mão - Dần (Quan - Tử Tức)
            { cell: 12, type: "edge", edge: "left" }      // Trung điểm trái Tuất (Nô Bộc)
        ]
    },
    // 5: Mùi
    {
        start: { cell: 3, type: "edge", edge: "bottom" }, // Trung điểm dưới Mùi
        ends: [
            { cell: 9, type: "edge", edge: "right" },     // Trung điểm phải Mão (Thiên Di)
            { cell: [16, 12], type: "corner" },           // Đỉnh chung Hợi - Tuất (Quan - Nô Bộc)
            { cell: 14, type: "edge", edge: "top" }       // Trung điểm trên Sửu (Tài)
        ]
    },
    // 6: Thân
    {
        start: { cell: [3, 8], type: "corner" },
        ends: [
            { cell: 15, type: "edge", edge: "top" },      // Trung điểm trên Tý (Thiên Di)
            { cell: [9, 13], type: "corner" },            // Đỉnh chung Mão - Dần (Quan - Tử Tức)
            { cell: 5, type: "edge", edge: "right" }      // Trung điểm phải Thìn (Tài)
        ]
    },
    // 7: Dậu
    {
        start: { cell: 8, type: "edge", edge: "left" },   // Trung điểm trái Dậu
        ends: [
            { cell: 9, type: "edge", edge: "right" },     // Trung điểm phải Mão (Thiên Di)
            { cell: [1, 5], type: "corner" },             // Đỉnh chung Tỵ - Thìn (Quan - Nô Bộc)
            { cell: 14, type: "edge", edge: "top" }       // Trung điểm trên Sửu (Tài)
        ]
    },
    // 8: Tuất
    {
        start: { cell: 12, type: "edge", edge: "left" },  // Trung điểm trái Tuất
        ends: [
            { cell: 2, type: "edge", edge: "bottom" },    // Trung điểm dưới Ngọ (Thiên Di)
            { cell: [9, 13], type: "corner" },            // Đỉnh chung Mão - Dần (Quan - Tử Tức)
            { cell: 5, type: "edge", edge: "right" }      // Trung điểm phải Thìn (Tài)
        ]
    },
    // 9: Hợi
    {
        start: { cell: [16, 12], type: "corner" },        // Đỉnh chung Hợi - Tuất
        ends: [
            { cell: 9, type: "edge", edge: "right" },     // Trung điểm phải Mão (Thiên Di)
            { cell: [2, 5], type: "corner" },             // Đỉnh chung Tỵ - Thìn (Quan - Nô Bộc)
            { cell: 3, type: "edge", edge: "bottom" }     // Trung điểm dưới Mùi (Tài)
        ]
    },
    // 10: Tý
    {
        start: { cell: 15, type: "edge", edge: "top" },   // Trung điểm trên Tý
        ends: [
            { cell: 2, type: "edge", edge: "bottom" },    // Trung điểm dưới Ngọ (Thiên Di)
            { cell: [3, 8], type: "corner" },             // Đỉnh chung Mùi - Dậu (Quan - Nô Bộc)
            { cell: 5, type: "edge", edge: "right" }      // Trung điểm phải Thìn (Tài)
        ]
    },
    // 11: Sửu
    {
        start: { cell: 14, type: "edge", edge: "top" },  // Trung điểm trái Sửu
        ends: [
            { cell: 8, type: "edge", edge: "left" },      // Trung điểm trái Dậu (Thiên Di)
            { cell: [2, 5], type: "corner" },             // Đỉnh chung Tỵ - Thìn (Quan - Nô Bộc)
            { cell: 3, type: "edge", edge: "bottom" }     // Trung điểm dưới Mùi (Tài)
        ]
    }
];
function getCellRect(cellNum) {
    const el = document.querySelector('.cell' + cellNum);
    if (!el) return null;
    return el.getBoundingClientRect();
}

// Edge mid
function getEdgeMid(rect, edge) {
    if (!rect) return { x: 0, y: 0 };
    switch (edge) {
        case 'left': return { x: rect.left, y: (rect.top + rect.bottom) / 2 };
        case 'right': return { x: rect.right, y: (rect.top + rect.bottom) / 2 };
        case 'top': return { x: (rect.left + rect.right) / 2, y: rect.top };
        case 'bottom': return { x: (rect.left + rect.right) / 2, y: rect.bottom };
    }
}

// Corner chung
function getCorner(rectA, rectB) {
    if (!rectA || !rectB) return { x: 0, y: 0 };
    const cornersA = [
        { x: rectA.left, y: rectA.top },
        { x: rectA.right, y: rectA.top },
        { x: rectA.right, y: rectA.bottom },
        { x: rectA.left, y: rectA.bottom }
    ];
    const cornersB = [
        { x: rectB.left, y: rectB.top },
        { x: rectB.right, y: rectB.top },
        { x: rectB.right, y: rectB.bottom },
        { x: rectB.left, y: rectB.bottom }
    ];
    for (let a of cornersA) {
        for (let b of cornersB) {
            if (Math.abs(a.x - b.x) <= 2 && Math.abs(a.y - b.y) <= 2) return a;
        }
    }
    let minDist = 1e9, res = cornersA[0];
    for (let a of cornersA) for (let b of cornersB) {
        let d = Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
        if (d < minDist) { minDist = d; res = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
    }
    return res;
}

// Lấy toạ độ các điểm cần vẽ
function getTamHopPoints(menhIdx) {
    const mapping = mappingTamHopCungMenh[menhIdx];
    if (!mapping) return { start: { x: 0, y: 0 }, ends: [] };
    // Start
    let start;
    if (mapping.start.type === 'edge') {
        const rect = getCellRect(mapping.start.cell);
        start = getEdgeMid(rect, mapping.start.edge);
    } else if (mapping.start.type === 'corner') {
        const rectA = getCellRect(mapping.start.cell[0]);
        const rectB = getCellRect(mapping.start.cell[1]);
        start = getCorner(rectA, rectB);
    }
    // Ends
    let ends = mapping.ends.map(end => {
        if (end.type === 'edge') {
            const rect = getCellRect(end.cell);
            return getEdgeMid(rect, end.edge);
        } else if (end.type === 'corner') {
            const rectA = getCellRect(end.cell[0]);
            const rectB = getCellRect(end.cell[1]);
            return getCorner(rectA, rectB);
        }
    });
    return { start, ends };
}

// Điểm neo của cung (giống TuViApp.CellAnchor): cung hàng đầu/cuối neo ở cạnh hướng vào vùng giữa (cung góc neo tại góc chạm vùng giữa),
// cung hai bên neo ở trung điểm cạnh hướng vào vùng giữa. Tọa độ theo bàn 900 x 1170.
const CELL_POS_TAM_HOP = {
    1: [0, 0], 2: [0, 1], 3: [0, 2], 4: [0, 3],
    5: [1, 0], 8: [1, 3],
    9: [2, 0], 12: [2, 3],
    13: [3, 0], 14: [3, 1], 15: [3, 2], 16: [3, 3]
};
function diemNeoCung(idxCung, W, H) {
    const cw = W / 4, ch = H / 4;
    const p = CELL_POS_TAM_HOP[CUNG_CELLS[idxCung].cell];
    const r = p[0], col = p[1];
    let x, y;
    if (r === 0 || r === 3) {
        y = r === 0 ? ch : 3 * ch;
        x = (col === 0) ? cw : (col === 3) ? 3 * cw : col * cw + cw / 2;
    } else {
        x = col === 0 ? cw : 3 * cw;
        y = r * ch + ch / 2;
    }
    return { x: x, y: y };
}

// Ba cạnh tam hợp (Mệnh, hai cung tam chiếu) vẽ nét liền màu vàng; Mệnh nối cung đối (xung chiếu) bằng nét đứt; bốn điểm có chấm thoi.
function drawTamHopByMenhIdx(menhIdx) {
    const grid = document.getElementById('lasoGrid');
    if (!grid) {
        alert('Không tìm thấy bàn lá số (id="lasoGrid")!');
        return;
    }
    grid.style.position = 'relative';
    const rect = grid.getBoundingClientRect();
    const scale = rect.width ? 900 / rect.width : 1; // bàn có thể đang thu/phóng bằng CSS transform
    const W = rect.width * scale, H = rect.height * scale;

    let svg = document.getElementById('tamHopSvg');
    if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.id = 'tamHopSvg';
        svg.style.position = 'absolute';
        svg.style.left = 0;
        svg.style.top = 0;
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.zIndex = 20;
        svg.style.pointerEvents = 'none';
        grid.appendChild(svg);
    }
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.querySelectorAll('.tam-hop-line, .tam-hop-dot').forEach(function (e) { e.remove(); });

    const m = diemNeoCung(menhIdx, W, H);
    const t1 = diemNeoCung((menhIdx + 4) % 12, W, H);
    const t2 = diemNeoCung((menhIdx + 8) % 12, W, H);
    const xung = diemNeoCung((menhIdx + 6) % 12, W, H);
    function nen(a, b, cls) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
        line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
        line.setAttribute('class', 'tam-hop-line' + (cls ? ' ' + cls : ''));
        line.setAttribute('stroke', '#d9b25f'); line.setAttribute('stroke-width', '2.4'); line.setAttribute('opacity', '0.85');
        if (cls) line.setAttribute('stroke-dasharray', '9 7');
        svg.appendChild(line);
    }
    nen(m, t1); nen(m, t2); nen(t1, t2); nen(m, xung, 'tam-hop-xung');
    [m, t1, t2, xung].forEach(function (p) {
        const d = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        d.setAttribute('x', p.x - 4.5); d.setAttribute('y', p.y - 4.5); d.setAttribute('width', 9); d.setAttribute('height', 9);
        d.setAttribute('transform', 'rotate(45 ' + p.x + ' ' + p.y + ')');
        d.setAttribute('fill', '#d9b25f'); d.setAttribute('class', 'tam-hop-dot');
        svg.appendChild(d);
    });
}
