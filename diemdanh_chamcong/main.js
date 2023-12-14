//điểm danh
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
  

  //chấm công
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

  // Xóa
  function confirmDelete() {
    var result = confirm('Bạn có chắc chắn muốn xóa thông tin không?');
    
    if (result) {
        showOptions();
    } else {
        alert('Xóa đã bị hủy bỏ.');
    }
}

function showOptions() {
    var option = prompt('Chọn một trong hai: "điểm danh" hoặc "chấm công"');
    
    if (option === 'điểm danh' || option === 'chấm công') {
        alert(`Xóa ${option} thành công!`);
        // Thêm logic xóa ở đây nếu cần
    } else {
        alert('Lựa chọn không hợp lệ.');
    }
}