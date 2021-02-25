function getEle(id) {
    return document.getElementById(id);
}

var thuVien = new ThuVien(); //chỉ gọi instance của thư viện 1 lần vì chỉ cần 1 mảng chứa sách

function themSach(event) {
    event.preventDefault();

    //DOM lấy giá trị người dùng nhập
    var _maSach = getEle('txtMaSach').value;
    var _tenSach = getEle('txtTenSach').value;
    var _NhaXuatBan = getEle('txtNXB').value;
    var _loaiSach = getEle('txtloaiSach').value;
    var _ngayPhatHanh = getEle('txtNgayPhatHanh').value;
    var _tinhTrang = getEle('txtTinhTrang').value;
    var _soLuong = parseFloat(getEle('txtSoLuong').value);
    var _donGia = parseFloat(getEle('txtDonGia').value);

    //khởi tạo 1 đối tượng Sach với các thuộc tính là giá trị người dùng nhập
    // Check dữ liệu người dùng nhập
    if (_maSach === '' || _tenSach === '', _NhaXuatBan === '' || _loaiSach === 'Chọn loại sách' || _ngayPhatHanh === '' || _tinhTrang === 'Chọn tình trạng' || isNaN(_soLuong) || isNaN(_donGia))
        return alert('Vui lòng nhập đầy đủ thông tin!')
    var sach = new Sach(_maSach, _tenSach, _NhaXuatBan, _loaiSach, _ngayPhatHanh, _tinhTrang, _soLuong, _donGia);

    //Thêm sách vào arrSach[] của thư viện
    thuVien.arrSach.push(sach);

    console.log(thuVien.arrSach);

    //Gọi hàm hiển thị để hiển thị sách ra cho người dùng thấy
    hienThiSach(thuVien.arrSach);
}

function hienThiSach(arr) {
    var content = '';

    arr.forEach(e => { //Hàm forEach duyệt mảng nhanh vì cần lấy phần tử, không cần lấy vị trí
        content += '<tr>';
        content += '<td>' + e.maSach + '</td>';
        content += '<td>' + e.tenSach + '</td>';
        content += '<td>' + e.NhaXuatBan + '</td>';
        content += '<td>' + e.loaiSach + '</td>';
        content += '<td>' + e.ngayPhatHanh + '</td>';
        content += '<td>' + e.tinhTrang + '</td>';
        content += '<td>' + e.soLuong + '</td>';
        content += '<td>' + e.donGia + '</td>';
        content += '<td>' + e.thanhTien + '</td>';
        content += '</tr>';
    });

    getEle('tbodySach').innerHTML = content;
}

//Hàm tạo dữ liệu ảo, push vào arrSach[] của thư viện và hiển thị
function yummyData() {
    thuVien.arrSach.push(new Sach('S1', 'sách 1', 'Kim Đồng', 'Sách Giáo Khoa', '01/01/2021', 'Mới', 30, 23_000));
    thuVien.arrSach.push(new Sach('S2', 'sách 2', 'Trẻ', 'Sách Tham Khảo', '02/01/2021', 'Cũ', 11, 12_000));
    thuVien.arrSach.push(new Sach('S3', 'sách 3', 'Giáo Dục', 'Sách Giáo Khoa', '03/01/2021', 'Mới', 17, 20_000));
    thuVien.arrSach.push(new Sach('S4', 'sách 4', 'Thế Giới', 'Sách Tham Khảo', '04/01/2021', 'Cũ', 100, 53_000));
    thuVien.arrSach.push(new Sach('S5', 'sách 5', 'Tư Pháp', 'Sách Giáo Khoa', '05/01/2021', 'Mới', 70, 21_000));
    thuVien.arrSach.push(new Sach('S6', 'sách 6', 'Hội Nhà Văn', 'Sách Tham Khảo', '06/01/2021', 'Cũ', 65, 14_000));
    thuVien.arrSach.push(new Sach('S7', 'sách 7', 'Cộng Đồng', 'Sách Giáo Khoa', '07/01/2021', 'Mới', 33, 12_000));
    thuVien.arrSach.push(new Sach('S8', 'sách 8', 'Lao Động', 'Sách Tham Khảo', '08/01/2021', 'Cũ', 7, 2_000));
    thuVien.arrSach.push(new Sach('S9', 'sách 9', 'GTVT', 'Sách Giáo Khoa', '09/01/2021', 'Mới', 91, 34_000));
    thuVien.arrSach.push(new Sach('S10', 'sách 10', 'Hà Nội', 'Sách Tham Khảo', '10/01/2021', 'Cũ', 22, 5_000));
    thuVien.arrSach.push(new Sach('S11', 'sách 11', 'Nhã Nam', 'Sách Giáo Khoa', '11/01/2021', 'Mới', 101, 77_000));
    thuVien.arrSach.push(new Sach('S12', 'sách 12', 'Thái Hà Books', 'Sách Tham Khảo', '12/01/2021', 'Cũ', 10, 29_000));
    hienThiSach(thuVien.arrSach);
}