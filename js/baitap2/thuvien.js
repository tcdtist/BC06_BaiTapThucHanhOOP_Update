function ThuVien() {
    this.arrSach = []; //Đối tượng Thư Viện chỉ chứa 1 thuộc tính là mảng sách

    this.themSach = function (sach) {
        this.arrSach.push(sach);
    }
    this.timViTriSach = function (maSach) {
        var viTri = -1;
        for (var i = 0; i < this.arrSach.length; i++) {
            if (this.arrSach[i].maSach === maSach) {
                viTri = i;
                break;
            }
        }
        return viTri;
    }
    this.xoaSach = function (maSach) {
        var viTri = this.timViTriSach(maSach);
        if (viTri !== -1) {
            this.arrSach.splice(viTri, 1);
        }
    }
    this.layThongTinChiTietSach = function (maSach) {
        var viTri = this.timViTriSach(maSach);
        if (viTri !== -1) {
            return this.arrSach[viTri];
        }
        return null;
    }
}