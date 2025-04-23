// Loop
// - cho phép thực thi 1 khối code nhiều lần dựa trên điều kiện hoặc số lần lặp
// - có nhiều vòng lặp, mỗi loại phù hợp với các tình huống khác nhau

// 1. FOR 
// - dùng biết trước số lần lặp
// - cú pháp:

// for (khởi_tạo; điều_kiện; cập_nhật) {
//     khối mã
// }

// !:
// khởi_tạo: thực thi 1 lần trước khi lặp (thường khai báo biến đếm)
// điều_kiện: kiểm tra mỗi lần lặp, nếu true thì chạy
// cập nhật: chạy sau mỗi lần lặp (thường tăng/giảm biến đếm)

// let x = 0

// for (let i = 0; i < 5; i++) {
//     console.log(x += i) // => kq = 10
// }



// 2. WHILE
// - dùng khi không biết số lần lặp, chỉ cần điều kiện true
// - cú pháp:

// while (điều_kiện) {
//     khối mã
// }

// let num = 0
// while (num < 10) {
//     console.log(num)
//     num++
// }


// 3. DO WHILE
// - tương tự như while, nhưng chạy ít nhất 1 lần trước khi kiểm tra điều kiện
// - cú pháp:

// do {
    // Khối mã
// } while (điều_kiện);

// let abc = 0

// do {
//     console.log(abc)
// } while (abc < 3);



// 4. BREAK và CONTINUE
// - là 2 câu lệnh điều khiển luồng lặp trong các vòng lặp như for, do - while,...

// a. BREAK
// - dừng hẳn vòng lặp ngay lập tức và thoát ra bên ngoài
// - nên dùng khi không muốn vòng lặp tiếp tục nữa
// -vd:

// for (let x = 0; x < 5; x++) {
//     if(x === 3) {
//         break; // dừng vòng lặp ở lần lặp thứ 3 (x = 2)
//     }
    
//     console.log(x) // kq: 0, 1, 2
// }


// b. CONTINUE
// - thông qua 1 điều kiện cụ thể để bỏ qua lần lặp hiện tại và chuyển sang lần lặp tiếp theo

// for (let z = 0; z < 10; z++) {
//     if (z % 2) {
//         continue
//     }

//     console.log(z) // in ra các số chẵn 0, 2, 4, 6, 8
// }