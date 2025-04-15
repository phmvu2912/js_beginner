// 3 Hàm built-in cơ bản

// 1. Alert()
// - hiển thị 1 thông báo pop up cơ bản
// - là 1 hàm động bộ (synchronous), nghĩa là nó sẽ tạm dừng nếu khi bạn click nút "ok" trên pop up

// alert('Hello!');


// 2. Confirm()
// - hiển thị pop up với thông báo và 2 nút "Ok" và "Cancel"
// - trả về true (Ok) và false (Cancel)

// confirm("You wanna delete this?")


// 3. Prompt()
// - hiển thị 1 pop up có chứa ô input mà người dùng có thể nhập vào
// - trả về dữ liệu mà người dùng nhập hoặc "null" nếu click Cancel

// const name = prompt("What's your name?")
// console.log(name)


//! Lưu ý:
// - Các hàm built-in trên đều được cung cấp bới Window API của trình duyệt (không phải của JS Core)
// - Nằm trong đối tượng window (window.confirm(),...)
// - Chỉ hoạt động trên trình duyệt
// - Không thể chạy trên môi trường Node.js

// 1 vài hàm built-in phổ biến khác:
// - console.log()                  => in dữ diệu ra tab Console trên trình duyệt
// - parseInt(), parseFloat()       => chuyển chuỗi -> số
// - setTimeout(), setInterval()    => xử lý thời gian
// - Math.random(), Math.floor()    => làm việc liên quan đến số học
    
