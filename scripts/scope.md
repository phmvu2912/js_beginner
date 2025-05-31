## Phạm vi biến trong JavaScript

### 1. Phạm vi toàn cục (Global Scope)

- Là biến được khai báo ở phạm vi toàn cục — có thể được truy cập và sử dụng bởi bất kỳ phần nào của chương trình, không bị giới hạn trong một hàm hoặc khối mã cụ thể.
- Trong trình duyệt: biến toàn cục được gắn với `window`.
- Trong Node.js: biến toàn cục gắn với `global`.

```js
var globalVar = 10;
console.log(window.globalVar); // 10 (trình duyệt)
console.log(global.globalVar); // Node.js
```

- Nếu không dùng `var`, `let`, `const` mà gán biến (ở non-strict mode), nó cũng trở thành biến toàn cục (không khuyến khích)


### 2. Phạm vi hàm (Function Scope)

- Chỉ áp dụng cho biến được khai báo bằng `var` bên trong một hàm.
- Biến `var` khai báo trong hàm sẽ chỉ có thể truy cập và sử dụng **bên trong chính hàm đó**, không thể truy cập từ bên ngoài.
- Các biến này sẽ được **tạo mới mỗi khi hàm được gọi**, và **không bị ảnh hưởng bởi các lần gọi hàm khác**.
- Nếu khai báo `var` trong một khối (ví dụ: `if`, `for`) nhưng không nằm trong một hàm, thì biến vẫn thuộc phạm vi bên ngoài khối (do `var` **không có block scope**).

```js
function example() {
  var insideFunction = 'hello';
  console.log(insideFunction); // OK
}
console.log(insideFunction); // Error: insideFunction is not defined
```


### 3. Phạm vi khối (Block Scope)

- Áp dụng cho các biến được khai báo bằng `let` và `const` bên trong một **khối mã** (block), tức là trong cặp dấu `{}` như trong `if`, `for`, hoặc hàm.
- Biến khai báo trong block chỉ có thể được **truy cập và sử dụng bên trong khối đó**, và **không thể truy cập từ bên ngoài**.
- Đây là điểm khác biệt lớn so với `var` (vì `var` **không có phạm vi khối**).

```js
{
  let blockLet = 'inside block';
  const blockConst = 123;
  console.log(blockLet);    // OK
  console.log(blockConst);  // OK
}
console.log(blockLet);      // Error: blockLet is not defined
console.log(blockConst);    // Error: blockConst is not defined
```