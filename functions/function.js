// Hàm (Function)
// - là 1 khối code thực hiện 1 nhiệm vụ cụ thể
// - có thể nhận dữ liệu đầu vào (tham số) và trả ra kq
// - có thể tái sử dụng, giúp code gọn gàng và dễ quản lý 

// 1. Cú pháp:
// function tenHam() {
//     thực hiện nhiệm vụ ở đây
// }

// - cú pháp gọi hàm
// tenHam();


// 2. Các cách khai báo hàm
// - có 3 cách phổ biển để khai báo 1 hàm:

// a. Function Declaration 
// - có thể gọi hàm trước khi khai báo (hoisting)

// hoisting
console.log(sum(5, 2))
// => kq: 7

function sum(a, b) {
    // khối mã

    return a + b // Tùy chọn 
}


// b. Arrow Function
// - cú pháp ngắn gọn, thường dùng trong ES6
// - không có this riêng, phù hợp cho hàm ngắn hoặc callback

const sayHi = () => {
    console.log('Hi')
}

// hoặc

const sayBye = () => 'Bye'


// c. Function Expression
// - gán hàm vào 1 biến, có thể ẩn danh (không cần tên)
// - không thể hoisting, phải khai báo trước khi gọi

const nhanHaiSo = function (a, b) {
    return a * b;
};
console.log(nhanHaiSo(4, 5)); // Kết quả: 20