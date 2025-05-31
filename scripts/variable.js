//? VARIABLE DECLARATIONS - KHAI BÁO BIẾN

// * để khai báo biến trong JS, có thể sử dụng 3 cách sau

// - dùng var (hạn chế):
// + có phạm vi hàm (function-scoped) hoặc phạm vi toàn cục (globally-scoped)
// + có thể khai báo mà không cần gán giá trị khởi tạo
// + có thể gán lại giá trị     
// + có hoisting


// - dùng let:
// + phạm vi trong block-scope (nằm trong {})
// + có hoisting nhưng không thể sử dụng trước khai báo do TDZ (temporal dead zone)
// + có thể gán lại
// + không thể khai báo lại trong cùng 1 scope
// vd:
// const greeting = () => {
//     let say = 'Hi'
//     let say = 'hello' // Lỗi
//     console.log(say)
// }


// - dùng const:
// + phạm vi trong block-scope (nằm trong {})
// + có hoisting nhưng không thể sử dụng trước khai báo do TDZ (temporal dead zone)
// + không thể gán lại giá trị - bắt buộc gán giá trị khi khai báo
// + không thể khai báo lại