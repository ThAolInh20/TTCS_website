document.addEventListener('DOMContentLoaded', function() {
    var linkDangNhap = document.getElementById('xacnhan_diemdanh');
  
    linkDangNhap.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Hiển thị hộp thoại xác nhận
      var xacNhan = confirm('Xác nhận điểm danh?');
  
      // Kiểm tra nếu người dùng đã xác nhận
      if (xacNhan) {
        // Tại đây bạn có thể thực hiện các hành động cần thiết khi xác nhận
        alert('Điểm danh thành công!');
      } else {
        // Người dùng đã hủy bỏ xác nhận
        alert('Điểm danh đã bị hủy bỏ.');
      }
    });
  });