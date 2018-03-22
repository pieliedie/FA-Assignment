# 1 Async
## 1.1 Sync vs Async
  * Sync code là gì <br/>
    Trả lời: Là những dòng code được thực thi theo thứ tự từ trên xuống dưới, dòng code phía dưới phải đợi cho đến khi dòng code phía trên được xử lí xong.
  * Async code là gì <br/>
    Trả lời: Là những đoạn code có thể thực thi ngay, không cần phần phải đợi code phía trên được xử lý xong. 
  * Theo em JavaScript là ngôn ngữ đồng bộ hay bất đồng bộ? <br/>
    Trả lời: Theo em, Javascript là ngôn ngữ đồng bộ. 
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
  * Từ ví dụ trên em có nhận xét gì ? <br/>
  Trả lời: Các đoạn code đã được xử lý một cách bất đồng bộ. Trình tự thực thi các đoạn code không còn diễn ra tuần tự nữa.
  
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
  
## 1.4 Callbacks
  * Tìm hiểu về callback funtions trong JS <br/>
  Callback được hiểu là 1 function được truyền vào 1 function khác dưới dạng 1 parameter. Tại 1 thời điểm nào đó, function này sẽ được thực thi bên trong hàm mà nó được truyền vào.
  vd: 
  ```
  function f(g){
  //do something
   g();
  }
  ```
  * Người ta nói callback functions đóng gói tính liên tục của chương trình. Theo em chương trình dưới sẽ được chạy liên tục ra sao?
  ```
    // (1)
  setTimeout(function () {
    // (2)
  }, 1000);
  // (3)
  ```
  Theo em, thứ tự chạy của chương trình là (1) => (3) => (2)
### 1.4.1 Nested/Chained Callbacks
  * Xét đoạn code sau, khi người dùng click vào btn thì điều gì xảy ra?
  ```
    // (0)
   var btn = document.getElementById('btn');
   btn.addEventListener('click', function () {
     // (1)
     setTimeout(function () {
       // (2)
     }, 1000);
     // (3)
   });
   ```
   Trả lời: Đầu tiên, hàm addEventListener được đưa vào call stack, sau đó được chuyển qua webapi để xử lý. Khi người dùng click vào btn, webapi trả về hàm callback và đưa vào task queue. Eventloop kiểm tra call stack có rỗng không. Call stack đang rỗng. Hàm callback được đưa vào stack. Đoạn code (1) được đưa vào stack, sau khi thực thi xong, nó được đẩy ra ngoài. Đoạn code setTimeOut được đưa vào stack và được chuyển qua webapi xử lý. Đoạn code (3) được đưa vào stack call và được đẩy khỏi stack khi được xử lý xong. Hàm callback được đưa ra khỏi stack. Sau 1s, anonymous function trong hàm setTimeOut được trả về task queue. Event loop đẩy function đó vào stack call lúc này đang rỗng. Đoạn code (2) được thực thi và đẩy ra khỏi stack. Chương trình kết thúc, thứ tự chạy là (0) => (1) => (3) => (2).
 * Theo eo những điểu bất lợi của callbacks là gì ? <br/>
  Trả lời:
   1. Việc lồng quá nhiều callback sẽ khiến code khó đọc, khó bảo trì.
   2. Khó xác định context của con trỏ this khi sử dụng callback.
   3. Gặp vấn đề về tính bảo mật của code.
    vd: 

## 1.5 Promises
 * Tìm hiểu về Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  ```
  Promise là một đối tượng đại diện cho kết quả cuối cùng của một tác vụ không đồng bộ, có thể là hoàn thành hoặc thất bại.
  Một promise tồn tại ở 3 trạng thái: 
   - pending: Trạng thái ban đầu, chưa có kết quả thành công hay thất bại.
   - fulfilled: Tác vụ thành công.
   - rejected: Tác vụ thất bại.
  ```
 * What is a future value ?
  ```
 Là những kết quả dự tính có thể nhận được của promise trong trạng thái pending.
 ```
 * Promise value ?
  ```
  Là kết quả thực tế của promise.
  ```
 * Promise Events ?
 ```
 NA
 ```
 * How to get Promise value?
   ```
   - Khi promise được fullfill, giá trị của nó được truyền đi thông qua param của method resolve, giá trị đó có thể nhận được qua param của hàm callback thứ nhất trong function then().
        var p = Promise.resolve("Success");
         p.then(function(v) {
           console.log(v); // Success
         });
   - Tương tự, khi promise bị reject, method then sẽ nhận thông điệp mà reject() đã gửi đi và truyền vào hàm callback thứ 2 dưới dạng parameter.
       var p = Promise.reject("Error");
         p.then(function (){}, function(v) {
           console.log(v); // Error
         });
   ```
 * How to handle error in Promise ?
   ``` 
   Sử dụng method Promise.prototype.catch()
   ```
 * How to chain Promises ?
    ```
    Kết hợp việc trả về 1 promise và sử dụng method then
    
    doSomething().then(function(result) {
     return doSomethingElse(result);
   })
   .then(function(newResult) {
     return doThirdThing(newResult);
   })
   .then(function(finalResult) {
     console.log('Got the final result: ' + finalResult);
   })
   .catch(failureCallback);
    ```
 * Promise.all
    ```
    Cùng lúc tiến hành nhiều promise khác nhau, khi tất cả promise đều hoàn thành thì mới bắt đầu thực hiện các hành động ở đằng sau.
    ```
 * Promise.race
    ```
    Cùng lúc tiến hành nhiều promise khác nhau, chỉ cần 1 trong số các promise đó hoàn thành thì bắt đầu thực hiện các hành động ở đằng     sau.
    ```
 * finally
   ```
   method finally() trả về một Promise. Hàm finally truyền vào 1 callback thực thi một hành động nào đó sau khi Promise đã được xử lý xong.
   ```
