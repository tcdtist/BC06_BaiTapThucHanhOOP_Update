function Sach(_maSach, _tenSach, _NhaXuatBan, _loaiSach, _ngayPhatHanh, _tinhTrang, _soLuong, _donGia) {
    this.maSach = _maSach;
    this.tenSach = _tenSach;
    this.NhaXuatBan = _NhaXuatBan;
    this.loaiSach = _loaiSach;
    this.ngayPhatHanh = _ngayPhatHanh;
    this.tinhTrang = _tinhTrang;
    this.soLuong = _soLuong;
    this.donGia = _donGia;
    this.thanhTien = 0;

    this.tinhTienSach = function () {
        this.thanhTien = (this.soLuong * this.donGia).toFixed(2);
    }
    this.tinhTienSach(); //gọi chạy để tính và trả về thành tiền
}