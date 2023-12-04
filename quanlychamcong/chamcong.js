document.addEventListener('DOMContentLoaded', function() {
    var linkDangNhap = document.getElementById('xacnhan_chamcong');
  
    linkDangNhap.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Hiển thị hộp thoại xác nhận
      var xacNhan = confirm('Xác nhận chấm công?');
  
      // Kiểm tra nếu người dùng đã xác nhận
      if (xacNhan) {
        // Tại đây bạn có thể thực hiện các hành động cần thiết khi xác nhận
        alert('Chấm công thành công!');
      } else {
        // Người dùng đã hủy bỏ xác nhận
        alert('Chấm công đã bị hủy bỏ.');
      }
    });
  });