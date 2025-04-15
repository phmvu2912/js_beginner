console.log('Variables in Js')

// Cách khai báo biến cơ bản

// 1. Var
var bien1 = 10;

// 2. Let
let bien2 = "Pham Dao Vu";

// 3. Const 
const bien3 = 3.14;


// Sự khác nhau giữa các cách khai báo biến

// 1. Var
// - Function scope hoặc global scope nếu khai báo ngoài hàm 
// - Có thể gắn lại giá trị
// - Có thể khai báo lại cùng tên trong cùng scope
// - Được hoisted, khởi tạo với giá trị undefined
// - Đã ra từ rất lâu (không khuyến khích sử dụng)
// - Dễ gây lỗi do phạm vi rộng và cho phép khai báo lại.

// 2. Let
// - Block scope ( {} )
// - Có thể gắn lại
// - Không thể khai báo lại cùng tên trong cùng scope
// - Được hoisted nhưng không khởi tạo (gây lỗi nếu truy cập trước khai báo)
// - An toàn hơn var, kiểm soát phạm vi tốt hơn

// 3. Const
// - Block scope ( {} )
// - Không thể gán lại giá trị (nhưng object/array có thể thay đổi nội dung)
// - Không thể khai báo lại cùng tên trong cùng scope
// - Được hoisted nhưng không khởi tạo (giống let)
// - Dùng cho các giá trị không đổi, tăng tính an toàn


// Khi nào nên dùng var, let hoặc const?
// var: Hầu như không nên dùng trong code hiện đại vì dễ gây lỗi. Chỉ xuất hiện trong code cũ (trước ES6).
// let: Dùng khi giá trị của biến cần thay đổi (ví dụ: biến đếm, trạng thái).
// const: Dùng cho các giá trị không thay đổi (ví dụ: hằng số, object/array mà chỉ thay đổi nội dung bên trong).