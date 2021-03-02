var thuVien = new ThuVien(); //chỉ gọi instance của thư viện 1 lần vì chỉ cần 1 mảng chứa sách

getLocalStorage();

function themSach(event) {
    event.preventDefault();

    //DOM lấy giá trị người dùng nhập
    var _maSach = getEle('txtMaSach').value;
    var _tenSach = getEle('txtTenSach').value;
    var _nhaXuatBan = getEle('txtNXB').value;
    var _loaiSach = getEle('txtLoaiSach').value;
    var _ngayPhatHanh = getEle('txtNgayPhatHanh').value;
    var _tinhTrang = getEle('txtTinhTrang').value;
    var _soLuong = parseFloat(getEle('txtSoLuong').value);
    var _donGia = parseFloat(getEle('txtDonGia').value);

    //khởi tạo 1 đối tượng Sach với các thuộc tính là giá trị người dùng nhập
    // Check dữ liệu người dùng nhập
    if (_maSach === '' || _tenSach === '', _nhaXuatBan === '' || _loaiSach === 'Chọn loại sách' || _ngayPhatHanh === '' || _tinhTrang === 'Chọn tình trạng' || isNaN(_soLuong) || isNaN(_donGia))
        return alert('Vui lòng nhập đầy đủ thông tin!')
    var sach = new Sach(_maSach, _tenSach, _nhaXuatBan, _loaiSach, _ngayPhatHanh, _tinhTrang, _soLuong, _donGia);

    //Thêm sách vào arrSach[] của thư viện
    thuVien.themSachVaoThuVien(sach);

    console.log(thuVien.arrSach);

    //Lưu sách xuống localStorage
    setLocalStorage(thuVien.arrSach);

    //Lây dữ liệu từ localStorage và hiển thị lại
    getLocalStorage();
}

function hienThiSach(arr) {
    var content = "";

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i].maSach);
        content += `
            <tr>
                <td>${arr[i].maSach}</td>
                <td>${arr[i].tenSach}</td>
                <td>${arr[i].NhaXuatBan}</td>
                <td>${arr[i].loaiSach}</td>
                <td>${unformatDay(arr[i].ngayPhatHanh)}</td>
                <td>${arr[i].tinhTrang}</td>
                <td>${arr[i].soLuong}</td>
                <td>${formatMoney(arr[i].donGia)} VND</td>
                <td>${formatMoney(arr[i].thanhTien)} VND</td>
                <td>
                    <button class="btn btn-warning" onclick="suaThongTinSach('${arr[i].maSach}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaSach('${arr[i].maSach}')">Xóa</button>
                </td>
            </tr>
        `
    };

    getEle('tbodySach').innerHTML = content;
}

// Hàm tạo dữ liệu ảo, push vào arrSach[] của thư viện và hiển thị
getEle('yummyData').addEventListener('click', function () {
    if (thuVien.arrSach.length === 0) {
        // console.log(thuVien.arrSach);
        thuVien.themSachVaoThuVien(new Sach('S1', 'sách 1', 'Kim Đồng', 'Sách giáo khoa', '2021/01/01', 'Mới', 30, 23_000));
        thuVien.themSachVaoThuVien(new Sach('S2', 'sách 2', 'Trẻ', 'Sách tham khảo', '2021/01/02', 'Cũ', 11, 12_000));
        thuVien.themSachVaoThuVien(new Sach('S3', 'sách 3', 'Giáo Dục', 'Sách giáo khoa', '2021/01/03', 'Mới', 17, 20_000));
        thuVien.themSachVaoThuVien(new Sach('S4', 'sách 4', 'Thế Giới', 'Sách tham khảo', '2021/01/04', 'Cũ', 100, 53_000));
        thuVien.themSachVaoThuVien(new Sach('S5', 'sách 5', 'Tư Pháp', 'Sách giáo khoa', '2021/01/05', 'Mới', 70, 21_000));
        thuVien.themSachVaoThuVien(new Sach('S6', 'sách 6', 'Hội Nhà Văn', 'Sách tham khảo', '2021/01/06', 'Cũ', 65, 14_000));
        thuVien.themSachVaoThuVien(new Sach('S7', 'sách 7', 'Cộng Đồng', 'Sách giáo khoa', '2021/01/07', 'Mới', 33, 12_000));
        thuVien.themSachVaoThuVien(new Sach('S8', 'sách 8', 'Lao Động', 'Sách tham khảo', '2021/01/08', 'Cũ', 7, 2_000));
        thuVien.themSachVaoThuVien(new Sach('S9', 'sách 9', 'GTVT', 'Sách giáo khoa', '2021/01/09', 'Mới', 91, 34_000));
        thuVien.themSachVaoThuVien(new Sach('S10', 'sách 10', 'Hà Nội', 'Sách tham khảo', '2021/01/10', 'Cũ', 22, 5_000));
        thuVien.themSachVaoThuVien(new Sach('S11', 'sách 11', 'Nhã Nam', 'Sách giáo khoa', '2021/01/11', 'Mới', 101, 77_000));
        thuVien.themSachVaoThuVien(new Sach('S12', 'sách 12', 'Thái Hà Books', 'Sách tham khảo', '2021/01/12', 'Cũ', 10, 29_000));

        // console.log(thuVien.arrSach);

        //Lưu sách xuống localStorage
        setLocalStorage(thuVien.arrSach);

        //Lây dữ liệu từ localStorage và hiển thị lại
        getLocalStorage();

        getEle('yummyData').disabled = true;
    }
});

// Function nghiệp vụ
// XÓA SÁCH
function xoaSach(maSach) {
    thuVien.xoaSach(maSach);

    //Lưu sách xuống localStorage
    setLocalStorage(thuVien.arrSach);

    //Lây dữ liệu từ localStorage và hiển thị lại
    getLocalStorage();
}

// SỬA THÔNG TIN SÁCH
function suaThongTinSach(maSach) {
    var sach = thuVien.layThongTinChiTietSach(maSach);

    if (sach) {
        getEle('txtMaSach').value = sach.maSach;
        getEle('txtMaSach').disabled = true;
        getEle('txtTenSach').value = sach.tenSach;
        getEle('txtNXB').value = sach.NhaXuatBan;
        getEle('txtLoaiSach').value = sach.loaiSach;
        getEle('txtNgayPhatHanh').value = formatDay(sach.ngayPhatHanh);
        getEle('txtTinhTrang').value = sach.tinhTrang;
        getEle('txtSoLuong').value = sach.soLuong;
        getEle('txtDonGia').value = sach.donGia;
    }

    document.getElementsByTagName('button')[0].className = 'btn btn-success col-3 mx-auto';
    document.getElementsByTagName('button')[0].disabled = true;
    getEle('capNhatSach').style.display = 'block';
}

// CẬP NHẬT THAY ĐỔI
getEle('capNhatSach').addEventListener('click', function () {
    var maSachCanCapNhat = getEle('txtMaSach').value;

    var tenSach = getEle('txtTenSach').value;
    var nhaXuatBan = getEle('txtNXB').value;
    var loaiSach = getEle('txtLoaiSach').value;
    var ngayPhatHanh = getEle('txtNgayPhatHanh').value;
    var tinhTrang = getEle('txtTinhTrang').value;
    var soLuong = parseFloat(getEle('txtSoLuong').value);
    var donGia = parseFloat(getEle('txtDonGia').value);

    var sachCapNhat = new Sach(maSachCanCapNhat, tenSach, nhaXuatBan, loaiSach, ngayPhatHanh, tinhTrang, soLuong, donGia);

    thuVien.capNhatSach(maSachCanCapNhat, sachCapNhat);

    //Lưu thay đổi xuống localStorage
    setLocalStorage(thuVien.arrSach);

    //Lây dữ liệu từ localStorage và hiển thị lại
    getLocalStorage();

    //trả lại layout ban đầu
    document.getElementsByTagName('button')[0].className = 'btn btn-success col-5 mx-auto';
    document.getElementsByTagName('button')[0].disabled = false;
    getEle('capNhatSach').style.display = 'none';

    getEle('txtMaSach').value = '';
    getEle('txtTenSach').value = '';
    getEle('txtNXB').value = '';
    getEle('txtLoaiSach').value = '';
    getEle('txtNgayPhatHanh').value = '';
    getEle('txtTinhTrang').value = '';
    getEle('txtSoLuong').value = '';
    getEle('txtDonGia').value = '';
});

// Function phụ
function formatMoney(money) {
    return new Intl.NumberFormat("vn-VN").format(money);
}

function getEle(id) {
    return document.getElementById(id);
}

function formatDay(date) { //xóa '/' thay bằng '-' => đúng format date
    return date.split('/').join('-')
}

function unformatDay(date) { //xóa '-' thay bằng '/' => hiển thị lên màn hình
    return date.split('-').join('/')
}

// FUNCTION GET & SET LocalStorage
function setLocalStorage(arr) {
    localStorage.setItem("THU_VIEN", JSON.stringify(arr));
}

function getLocalStorage() {
    if (localStorage.getItem("THU_VIEN")) {
        thuVien.arrSach = JSON.parse(localStorage.getItem("THU_VIEN"));
        // console.log(thuVien.arrSach);
        hienThiSach(thuVien.arrSach);
    }
}

