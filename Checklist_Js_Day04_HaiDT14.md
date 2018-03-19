# 1 Async
## 1.1 Sync vs Async
  * Sync code là gì
    Trả lời: Là những dòng code được thực thi theo thứ tự từ trên xuống dưới, dòng code phía dưới phải đợi cho đến khi dòng code phía trên được xử lí xong.
  * Async code là gì
    Trả lời: Là những đoạn code có thể thực thi ngay, không cần phần phải đợi code phía trên được xử lý xong. 
  * Theo em JavaScript là ngôn ngữ đồng bộ hay bất đồng bộ
    Trả lời: Theo em, Javascript là ngôn ngữ bất đồng bộ. 
## 1.2 setTimeOut
  * Cho hàm setTimeout có định nghĩa như sau: https://www.w3schools.com/jsref/met_win_settimeout.asp
  * Set đoạn code sau, hãy mô tả chính xác những gì xảy ra và kết quả in ra là gì ?
  ```
  console.log('Hi');

  setTimeout(function () {
    console.log('there');
  }, 1000);
  ```
  Trả lời: Console in ra chữ "Hi", sau 1s, console in ra chữ "there"
  * How about this one, can you guess ?
    ```
    console.log('Hi');

    setTimeout(function () {
      console.log('there');
    }, 0);
    console.log('Hi again');
    ```
  Trả lời: Console in ra chữ "Hi", sau đó là "Hi again" và cuối cùng in ra chữ "there"
  * Từ ví dụ trên em có nhận xét gì ?
  Trả lời: Các đoạn code đã được xử lý một cách bất đồng bộ. Đoạn code đặt trong hàm setTimeOut không còn được đặt trong luồng xử lý tuần   tự nữa.
  
## 1.3 Event Loop
  * Tìm hiểu về Event loop, và giải thích lại đoạn code trên theo ý hiểu của em. Reference: https://www.youtube.com/watch?v=8aGhZQkoFbQ
  Giải thích: 
  ```
  console.log('Hi');

  setTimeout(function () {
    console.log('there');
  }, 1000);
  ```
  1. Đầu tiên, chương trình bắt đầu chạy lệnh đầu tiên của chương trình: console.log('Hi')
  2. Lệnh console.log('Hi') được đưa vào call stack.
  3. Lệnh này lập tức được thực thi, hiển thị dòng chữ "Hi".
  4. Lệnh được đưa ra khỏi call stack.
  5. Tiếp theo, chương trình chạy đến dòng lệnh tiêp theo, lệnh setTimeout(function () { console.log('there'); }, 1000);
    được đưa vào call stack.
  6. Lệnh này được pop khỏi call stack, chuyển sang cho webapi xử lý.
  7. Sau 1s, webapi trả về hàm callback, đẩy hàm đó vào task queue.
  8. event loop kiểm tra xem call stack có rỗng không. Stack đang rỗng, event loop đẩy hàm ở đỉnh task queue vào stack.
  9. Hàm callback được thực thi, in ra console chữ "there".
  
  ```
  console.log('Hi');

  setTimeout(function () {
    console.log('there');
  }, 0);
  console.log('Hi again');
  ```
  1. Đầu tiên, chương trình bắt đầu chạy lệnh đầu tiên của chương trình: console.log('Hi')
  2. Lệnh console.log('Hi') được đưa vào call stack.
  3. Lệnh này lập tức được thực thi, hiển thị dòng chữ "Hi".
  4. Lệnh được đưa ra khỏi call stack.
  5. Tiếp theo, chương trình chạy đến dòng lệnh tiêp theo, lệnh setTimeout(function () { console.log('there'); }, 0);
    được đưa vào call stack.
  6. Lệnh này được pop khỏi call stack, chuyển sang cho webapi xử lý.
  7. Sau 0s, webapi trả về hàm callback, đẩy hàm đó vào task queue.
  8. Lệnh console.log('Hi again') được đẩy vào call stack.
  9. event loop kiểm tra xem call stack có rỗng không. Stack không rỗng.
  10. Lệnh console.log('Hi again') được thực thi và được đưa ra khỏi stack.
  11. event loop kiểm tra xem call stack có rỗng không. Stack đang rỗng, event loop đẩy hàm ở đỉnh task queue vào stack.
  12. Hàm callback được thực thi, in ra console chữ "there".
  
