// 1. IF, ELSE IF, ELSE
// - dùng để kiểm tra 1 điều kiện và thực hiện khối mã tương ứng nếu điều kiện đúng (true)
// - cú pháp

// if (dieu_kien) {
//     khối mã chạy nếu điều kiện đúng
// } else if (dieu_kien_khac) {
//     khối mã chạy nếu điều kiện khác đúng
// } else {
//     khối mã chạy nếu không điều kiện nào đúng
// }

// - vd:

let diemTb = 3

if (diemTb >= 8) {
    console.log('Học sinh Giỏi')
} else if (diemTb < 8 && diemTb >= 7) {
    console.log('Học sinh Khá')
} else if (diemTb < 7 && diemTb >= 4) {
    console.log('Học sinh Trung bình')
} else {
    console.log('Học sinh Yếu')
}


// lưu ý:
// - điều kiện trong if phải trả về là true hoặc false
// - có thể dùng if mà không cần else hoặc else if



// 2. SWITCH
// - dùng khi muốn so sánh với 1 giá trị với nhiều trường hợp cụ thể 
// - cú pháp:

// switch (bieuthuc) {
//     case giaTri1:
//         khối mã nếu biểu thức === giaTri1
//         break;

//     case giaTri2:
//             khối mã nếu biểu thức === giaTri2
//         break;

//     case giaTri3:
//             khối mã nếu biểu thức === giaTri3
//         break;

//     default:
//         Khối mã nếu không khớp giá trị nào
// }


// - vd:

let day = 6

switch (day) {
    case 1:
        console.log('Thứ Hai')
        break;

    case 2:
        console.log('Thứ Ba')
        break;

    case 3:
        console.log('Thứ Tư')
        break;

    case 4:
        console.log('Thứ Năm')
        break;

    default:
        console.log('Không xác định')
}

// => kq: không xác định

// lưu ý:
// - break ngăn mã chạy tiếp vào các case sau
// - default tương tự như else - sẽ xử lý những case không khớp