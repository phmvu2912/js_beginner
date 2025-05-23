// CÁC KIỂU DỮ LIỆU NGUYÊN THỦY

// 1. STRING
// - dùng để biểu diễn chuỗi ký tự (văn bản, số, ký hiệu, khoảng trắng,...)
// - chuỗi có thể bao quanh bởi: 
//     + dấu nháy đơn '' 
//     + dấu nháy kép ""
//     + dấu huyền `` (template string)

const a = "Hello World"

// 1 số phương thức của chuỗi
// a. Tìm kiếm chuỗi con
// - indexOf():
// + trả về kết quả là index đầu tiên của chuỗi
// + nếu không tìm thấy sẽ return -1
console.log(a.indexOf("o")) // kq = 4

// - lastIndexOf():
// + trả về kq index xuất hiện cuối cùng của chuỗi
// + nếu không tìm thấy sẽ return -1
console.log(a.lastIndexOf("o")) // kq = 7

// - search():
// + tương tự hàm indexOf()
// + nếu không tìm thấy sẽ return 0
console.log(a.search(""))


// b. Cắt chuỗi con
// - slice(start, end) [Ưu tiên]:
// + trích xuất 1 phần chuỗi theo điều kiện (start và end)
// + không thay đổi giá trị gốc mà trả về 1 bản sao đã trích xuất
// + start: vị trí bắt đầu cắt
// + end: vị trí kết thúc (không bao gồm phần tử tại vị trí này)

// + có start và end:
console.log(a.slice(0, 5)) // kq: Hello

// + truyền 1 tham số
// -> cắt từ vị trí đó đến hết chuỗi
console.log(a.slice(6)) // kq: World

// + tham số là giá trị âm
// -> sẽ cắt từ cuối chuỗi (từ phải sang trái)
console.log(a.slice(-5)) // kq: World

// - substring():
// + tương tự như slice() nhưng sẽ không nhận khi tham số là giá trị âm
// + nếu tham số là giá trị âm thì mặc định substring sẽ coi giá trị âm đó = 0
// + nếu tham số start > end thì subtring sẽ tự động đảo vị trí của 2 số đó (x.substring(4, 0) => x.substring(0, 4))

// - substr(start, length) [Out date]:
// + cũng dùng để trích xuất 1 chuỗi con 
// + khác so với 2 phương thức trên ở chỗ substr() sẽ cắt theo độ dài
// + start: giống với đặc điểm start của slice()
// + length: số ký tự cần trích xuất, nếu bỏ qua sẽ lấy từ start đến cuối chuỗi. nếu length = âm => return chuỗi rỗng

// + có start và length:
console.log(a.substr(6, 3)) //kq: Wor

// + truyền 1 tham số
// -> cắt từ vị trí đó đến hết chuỗi
console.log(a.substr(6)) // kq: World

// + tham số là giá trị âm
console.log(a.substr(-5)) // kq: World


// c. Tìm kiếm và thay thế
// - replace(searchValue, newValue):
// + chỉ thay thế chuỗi đầu tiên được tìm kiếm hoặc regex không có g flag
// + searchValue: tìm kiếm chuỗi mà bạn muốn tìm
// + newValue: dữ liệu mới bạn muốn thay thế

console.log(a.replace("World", "my name is Vu")) // kq: Hello my name is Vu


// d. Chuyển đổi chữ hoa và thường
// - toUpperCase():
// + chuyển đổi toàn bộ chuỗi thành chữ in hoa
console.log(a.toUpperCase()) //kq: HELLO WORLD

// - toLowerCase():
// + chuyển đổi toàn bộ chuỗi thành chữ in thường
console.log(a.toLowerCase()) //kq: hello world


// e. Nối chuỗi
// - dùng toán tử (+) để nối chuỗi
console.log(a + " My name is Abc") //kq: Hello World My name is Abc

// - concat():
console.log(a.concat("!")) //kq: Hello World!


// f. Chuyển chuỗi thành mảng
// - split(separator, limit):
// + cắt chuỗi thành mảng
// + separator: ký tự hoặc regex để tách chuỗi (phải có!)
// + limit: số lượng phần tử tối đa trong mảng kết quả (tuỳ chọn)

const str = "apple,banana,cherry"

// + tách theo tham số
console.log(str.split(",")) //kq: ['apple', 'banana', 'cherry']

// + có tham số limit
// + nếu limit = 0 -> return mảng rỗng
// + nếu không có limit -> không giới hạn số phần tử
// + nếu separator không tìm thấy → trả về mảng chứa toàn bộ chuỗi gốc
console.log("one two three four five".split(" ", 2)) //kq: ['one', 'two'] 


// Lưu ý:
// + separator ""(chuỗi rỗng) và " "(dấu cách) khác nhau
// + "" khiến chuỗi bị bẻ ra từng ký tự một ('hello' -> ['h, 'e', 'l', 'l', 'o'])
// + mỗi lần gặp dấu cách thì cắt ra 1 phần tử ('hello world' -> ['hello', 'world')


// ==============================================


// 2. NUMBER
// - để biểu diễn tất cả các giá trị số, không phân biệt số nguyên (integer) hay số thực (float).
// - các số được lưu trữ dưới dạng số thực dấu phẩy động (floating-point)
//   theo chuẩn IEEE 754, có độ chính xác 64-bit.

// - các giá trị đặc biệt:
// a. Infinity (giá trị vượt quá giới hạn lớn nhất)
// b. -Infinity (giá trị vượt quá giới hạn lớn nhất)
// c. NaN: 
// - Not a Number, biểu thị giá trị không phải số
// - nếu thực hiện một phép tính nhưng vi phạm quy tắc tính toán thì kq sẽ trả về NaN

// - các phương thức của Number
// a. Number()
// - dùng để chuyển đổi 1 biến hoặc 1 giá trị nào đó sang Number
// - nếu không thể chuyển đổi thì nó sẽ trả về NaN

// b. parseInt()
// - là 1 hàm dùng để chuyển từ String sang số nguyên

// - nếu như chuỗi muốn chuyển sang có số ở đầu thì nó sẽ lấy phần số ở đầu
console.log(parseInt("100.1 years")) // kq: 100

// - nếu không thể chuyển đổi thì nó sẽ trả về NaN 
console.log(parseInt("years 100")) // kq: NaN

// c. parseFloat()
// - là 1 hàm dùng để chuyển từ String sang số số thực (floating-point number)
// - sẽ giữ lại phần thập phân nếu có

// - nếu như chuỗi muốn chuyển sang có số ở đầu thì nó sẽ lấy phần số ở đầu
console.log(parseFloat("100.1anc")) // kq: 100.1

// - nếu không thể chuyển đổi thì nó sẽ trả về NaN 
console.log(parseFloat("years 100.1")) // kq: NaN

// d. toString()
// - chuyển kiểu Number thành String
const num = 123
console.log(typeof (num.toString())) // kq: string

// e. toFixed(n)
// - làm tròn số đến chữ số thập phân
// - chuyển số thành chuỗi (string) sau khi làm tròn

const num2 = 3.14159;
console.log(num2.toFixed()) // kq: 3
console.log(num2.toFixed(2)) // kq: 3.14
console.log(num2.toFixed(3)) // kq: 3.142

// f. toPrecision(tổng_số_muốn_hiển_thị)
// - làm tròn tới tổng chữ số mà bạn muốn
// - sau đó trả về kiểu String

let num3 = 123.456;
console.log(num3.toPrecision()) // kq: 123.456
console.log(num3.toPrecision(2)) // kq: 1.2e+2
console.log(num3.toPrecision(3)) // kq: 123

// g. valueOf()
// - dùng để lấy giá trị nguyên thủy

// 3. BOOLEAN
// - có 2 giá trị: true và false
// - dùng để:
// + so sánh giá trị
// + điều khiển câu lệnh (if, else,...)
// + gán trạng thái
// + ...

// - vd:
const isLogin = false;

console.log(isLogin) // false
console.log(typeof isLogin); // boolean

// - biểu thức trả về boolean:
console.log(5 > 3) // true
console.log(3 > 5) // false
console.log(10 == "10") // true
console.log(10 === "10") // false


// 4. UNDEFINED
// - sẽ xuất hiện khi:
// + khai báo biến nhưng không có giá trị
// vd:
let und;
console.log(und) // undefined

// + 1 hàm không trả về gì
function demo() { }
console.log(demo()); // undefined

// - js tự động gán giá trị undefined nếu các trường hợp trên xảy ra

// 5. NULL
// - có thể hiểu là rỗng ("tạm thời" chưa có giá trị)
// - là 1 kiểu giá trị được lập trình viên cố ý gán (khác so với undefined)
//  45 sa vd:ư
'ơ'
let user = null;
console.log(user); // null


// khi nào sử dụng UNDEFINED và NULL?
// - không cần thiết phải gán undefined bằng tay vì js sẽ tự làm điều đó

// - gán null khi:
// + biến hiện tại chưa có giá trị, nhưng sẽ có sau
// + muốn xóa 1 object hoặc reset nó

// =======================================================================================

// KIỂU DỮ LIỆU THAM CHIẾU

// 6. OBJECT
// - là 1 tập hợp các key-value (thuộc tính - giá trị)
// - dùng để lưu trữ dư liệu có cấu trúc

// * cách khai báo:
// - dùng {}:
// - vd:

const myInfo = {
    name: "Mr. A",
    age: 23,
    isMarried: false,
    education: [
        {
            name: "Dallas High school",
            since: "2008 - 2011"
        },
        {
            name: "MIT",
            since: "2012 - 2016"
        }
    ],
}

// * cách truy cập vào phần tử:
// - dùng dấu . (phổ biến)
// vd:

console.log(myInfo.name) // kq: Mr. A

// ưu điểm:
// + khi biết chính xác tên thuộc tính 

// hạn chế:
// + không thể dùng khi tên thuộc tính chứa ký tự đặc biệt (first-name,...)
// + không thể dùng khi tên thuộc tính bắt đầu là chữ số (123abc,...)
// + là 1 biến hoặc giá trị động

// - dùng dấu []
// vd:

console.log(myInfo['age']) // kq: 23

// ưu điểm:
// + linh hoạt, có thể truy cập thuộc tính với tên hợp lệ (dấu gạch ngang, khoảng trắng, số,...)
// + cho phép truy cập thuộc tính động thông qua biểu thức
// + có thể sử dụng với các thuộc tính được tính toán

// hạn chế:
// + dài hơn, không trực quan bằng sử dụng dấu .
// + dễ xảy ra lỗi khi nhập sai tên thuộc tính 


// * kiểm tra thuộc tính có tồn tại:
// - nếu thuộc tính không tồn tại => trả về undefined

// - dùng in:
// + trả về true hoặc false

console.log("firstName" in myInfo) // kq: false 

// - dùng hasOwnProperty:
// + trả về true hoặc false

console.log(myInfo.hasOwnProperty("name")) // kq: true 


// * thêm - sửa - xóa phần tử:
// - dùng dấu . hoặc [] để truy cập phần tử

// - thêm:
// + có thể thêm 1 thuộc tính mới vào object bằng cách gán giá trị đó tên thuộc tính, kể cả thuộc tính đó chưa tồn tại
// vd:

myInfo.address = "Hanoi"

// hoặc

myInfo["dob"] = "29-12-2003"

// console.log(myInfo) // kq: {name: 'Mr. A', age: 23, isMarried: false, education: Array(2), address: 'Hanoi', dob: '29-12-2003'}


// - sửa:
// - chỉ cần gán 1 giá trị mới cho thuộc tính
// vd:

myInfo.name = "Pham Dao Vu"

// hoặc 

myInfo["isMarried"] = true

// console.log(myInfo) // kq: {name: 'Pham Dao Vu', isMarried: true,...}


// - xóa:
// + có thể sử dụng delete
// + không nên lạm dụng
// + có thể set thuộc tính là null thay vì xóa
// vd:

delete myInfo.dob

// hoặc

delete myInfo['education']

console.log(myInfo)


//* duyệt qua object
for (let key in myInfo) {
    console.log(key, myInfo[key]);
}

//...
