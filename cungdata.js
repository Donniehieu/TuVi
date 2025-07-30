function getCungData() {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    return [
        { tenCung: 'Mệnh', luandai: '' ,chi: lasoData.lasoOb[0].chi, idCunggoc:0},

        { tenCung: 'Phụ Mẫu', luandai: '',chi: lasoData.lasoOb[1].chi, idCunggoc:1 },
        { tenCung: 'Phúc Đức', luandai: '',chi: lasoData.lasoOb[2].chi, idCunggoc:2 },
        { tenCung: 'Điền Trạch', luandai: '',chi: lasoData.lasoOb[3].chi , idCunggoc:3},
        { tenCung: 'Quan Lộc', luandai: '' ,chi: lasoData.lasoOb[4].chi, idCunggoc:4},
        { tenCung: 'Nô Bộc', luandai: '' ,chi: lasoData.lasoOb[5].chi, idCunggoc:5},
        { tenCung: 'Thiên Di', luandai: '',chi: lasoData.lasoOb[6].chi, idCunggoc:6 },
        { tenCung: 'Tật Ách', luandai: '' ,chi: lasoData.lasoOb[7].chi, idCunggoc:7},
        { tenCung: 'Tài Bạch', luandai: '',chi: lasoData.lasoOb[8].chi, idCunggoc:8 },
        { tenCung: 'Tử Tức', luandai: '' ,chi: lasoData.lasoOb[9].chi, idCunggoc:9},
        { tenCung: 'Phu Thê', luandai: '' ,chi: lasoData.lasoOb[10].chi, idCunggoc:10},
        { tenCung: 'Huynh Đệ', luandai: '',chi: lasoData.lasoOb[11].chi, idCunggoc:11 }
    ];
}