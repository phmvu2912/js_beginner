// Các toán tử cơ bản

let a = 5;
let b = 3;

// I. Toán tử số học
// - dùng để tính toán cơ bản

// 1. Cộng
console.log('a + b =', a + b)

// 2. Trừ
console.log('a - b =', a - b)

// 3. Nhân
console.log('a * b =', a * b)

// 4. Chia
console.log('a / b =', a / b)

// 5. Chia lấy nguyên
console.log('a % b =', a % b)

// 6. Lũy thừa
console.log('a ** b =', a ** b)

// 7. Tăng 1 đơn vị
console.log('Tăng 1 đơn vị:', a++)

// 8. Giảm 1 đơn vị
console.log('Giảm 1 đơn vị:', a--)


// II. Toán tử gán

// 1. Gán giá trị
// - dùng ký tự = để gán giá trị
var bien1 = 3;

// 2. Cộng và gán
let bien2 = 2;
console.log(bien2 += 5) // kq = 7

// 3. Trừ và gán
let bien3 = 2;
console.log(bien3 -= 5) // kq = -3

// 4. Nhân và gán
let bien4 = 2;
console.log(bien4 *= 5) // kq = 10

// 5. Chia và gán
let bien5 = 10;
console.log(bien5 /= 5) // kq = 2

// 6. Chia lấy nguyên và gán
let bien6 = 10;
console.log(bien6 %= 4) // kq = 2

// 7. Lũy thừa và gán
let bien7 = 10;
console.log(bien7 **= 4) // kq = 40000



// III. Toán tử so sánh
// - Dùng để so sánh hai giá trị, trả về true hoặc false
let x = 5
let y = "5"
let z = 6
let o = 5

// 1. So sánh bằng (không so kiểu dữ liệu)
// - trong trường hợp khác kiểu dữ liệu, 
// - nó sẽ chuyển đổi kiểu dữ liệu của 2 giá trị để cùng kiểu trước khi thực hiên so sánh
console.log(x == y) // true

// 2. So sánh bằng nghiêm ngặt (Ưu tiên kiểm tra kiểu dữ liệu lẫn giá trị)
// - trong trường hợp khác kiểu dữ liệu, 
// - nó sẽ chuyển đổi kiểu dữ liệu của 2 giá trị để cùng kiểu trước khi thực hiên so sánh
console.log(x === y) // false

// 3. So sánh khác (không so kiểu dữ liệu)
console.log(x != y) // false

// 4. So sánh khác nghiêm ngặt (Ưu tiên kiểm tra kiểu dữ liệu lẫn giá trị)
console.log(x !== y) // true <=> số 5 khác so với chuỗi 5

// 5. Lớn hơn
console.log(x > z) // false <=> 5 không thể lớn hơn 6

// 6. Nhỏ hơn
console.log(x < z) // true 

// 7. Lớn hơn hoặc bằng
console.log(x >= o) // true <=> 5 = 5

// 8. Nhỏ hơn hoặc bằng
console.log(x <= y) // true <=> 5 < 6



// IV. Toán tử logic
// - Truthy và Falsy

//  - Truthy gồm:
// + các số khác 0 (-4,...1,2,..., 100,...)
// + các chuỗi không rỗng ("hello", "xinchao",...)
// + object, mảng rỗng
// + function
// + true

//  - Falsy gồm:
// + false
// + các chuỗi rỗng ("", '')
// + số 0, -0
// + null
// + undefined
// + NaN (Not a Number)

// 1. Toán tử "và" (and)
// - trả về Falsy đầu tiên gặp phải
console.log("" && 'hello') // => return về 1 chuỗi rỗng => "" là falsy đầu tiên

// - trường hợp cả 2 đều là truthy => lấy kq cuối cùng
console.log("hi" && 1) // => return 1

// - trường hợp điều kiện đầu tiên = false thì sẽ ngừng kiểm tra vế còn lại
console.log(5 > 6 && 5 < 6) // 5 < 6 = false <=> false && 5 > 6 <=> return false

// 2. Toán tử phủ định (!)
// - đảo ngược giá trị logic (true => false và ngược lại)
// - chỉ áp dụng cho 1 biểu thức
console.log(!true) // false
console.log(!false) // true
console.log(!!0) // ép kiểu về boolean. 
// => kq = true <=> 0 là false, dấu ! đầu tiên 0 = true, dấu ! thứ 2 biến 0 đang ở true => false


// 3. Toán tử hoặc (||)
// - trả về true nếu có ít nhất 1 trong các biểu thức là true
console.log(10 > 5 || 5 < 10) // 1 đúng => true

// - nếu vế đầu tiên = true, return vế đầu và ngừng kiểm tra vế còn lại
console.log(10 || 5 < 10) // kq = 10 <=> 10 là 1 truthy

// - nếu vế trái là falsy -> kiểm tra vế phải và trả về vế phải (không quan tâm vế phải là truthy hay falsy)
console.log(10 < 5 || 15 < 10) // kq = false
console.log(10 < 5 || 15 > 10) // kq = true


// 4. Toán tử ??
// const result = value ?? defaultValue
// - Dùng để gán giá trị mặc định, nhưng chỉ khi value là null hoặc undefined.
// - dùng để kiểm tra null hoặc undefined chứ không phải các falsy
// - nếu value = null hoặc undefined -> defaultValue
// - nếu value = 0, false, '' -> value
let value = ""
let defaultValue = "Pham Dao Vu"
const name = value ?? defaultValue 
console.log(name) // kq = "" chuỗi rỗng vì value không phải là null hoặc undefined


// 5. Toán tử 3 ngôi
// điều kiện ? return ở đây khi điều kiện là true : return ở đây khi điều kiện là false 
const thongBao = 5 > 6 ? '5 lớn hơn 6' : '5 nhỏ hơn 6'
console.log(thongBao) // kq = 5 nhỏ hơn 6