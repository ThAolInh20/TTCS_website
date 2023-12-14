document.addEventListener('DOMContentLoaded', function() {
    var linkDangNhap = document.getElementById('xacnhan_xoa');
  
    linkDangNhap.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Hiển thị hộp thoại xác nhận
      var xacNhan = confirm('Xác nhận xóa?');
  
      // Kiểm tra nếu người dùng đã xác nhận
      if (xacNhan) {
        // Tại đây bạn có thể thực hiện các hành động cần thiết khi xác nhận
        alert('Xóa thành công!');
      } else {
        // Người dùng đã hủy bỏ xác nhận
        alert('Hủy bỏ thao tác xóa.');
      }
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var linkTao = document.getElementById('tao');
  
    linkTao.addEventListener('click', function() {
        alert('Tạo thành công!');
     
    });
});
document.addEventListener('DOMContentLoaded', function() {
  var linkTao = document.getElementById('themtc');

  linkTao.addEventListener('click', function() {
      alert('Thêm thành công!');
   
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var linkDangNhap = document.getElementById('nghiphep');

  linkDangNhap.addEventListener('click', function(event) {
    event.preventDefault();

    // Hiển thị hộp thoại xác nhận
    var xacNhan = confirm('Nghỉ phép?');

    // Kiểm tra nếu người dùng đã xác nhận
    if (xacNhan) {
      // Tại đây bạn có thể thực hiện các hành động cần thiết khi xác nhận
      alert('Xác nhận nghỉ thành công!');
    } else {
      // Người dùng đã hủy bỏ xác nhận
      alert('Hủy bỏ thao tác.');
    }
  });
});