
# 1 Concept
## 1.1 API Security
### 1.1.1 Understand Authentication vs Authorization (https://blog.restcase.com/restful-api-authentication-basics/)
* Authentication: Kiểm tra đối tượng đang kết nối có quyền truy cập vào hệ thống hay không. Quá trình bao gồm gửi thông tin xác thực dưới dạng văn bản hoặc mã hóa từ phía máy client lên máy server.
  * Quá trình xác thực cơ bản: Gắn thông tin 'username:password' được convert sang base64 vào phần header của HTTP request. Dữ liệu được convert sang định dạng khác (encoded) nhưng vẫn chưa được mã hóa (encrypted), và thông tin xác thực luôn phải kèm theo mỗi khi gửi request đến server => dễ bị hacker giả mạo.
  * Xác thực HMAC: Gửi kèm password dưới dạng mã băm, nối thêm các chuỗi ký tự như thời gian hiện tại, 1 số ngẫu nhiên,... để tránh hacker có thể giả mạo thông tin xác thực.
* Authorization: Xác định xem đối tượng sau khi được xác thực có khả năng truy cập đến những tài nguyên nào của hệ thống.
## 1.2 Testing
### 1.2.1 Understand TDD, BDD: https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/
* TDD: Là mô hình phát triển trọng tâm hướng đến việc kiểm thử (test-driven development). TDD được xây dựng dựa trên 2 tiêu chí: Test first, then refactoring. Quá trình test, tìm fix bug, sửa đổi lại code cho pass test diễn ra thành 1 vòng lặp cho đến khi đạt độ phủ cao nhất.
* BDD: Mô hình phát triển hướng đến hành vi. BDD giúp xây dựng hệ thống kịch bản để thực thi test dưới góc độ ngôn ngữ tự nhiên từ các yêu cầu của khách hàng. 
### 1.2.2 Understand about Unit Test:
* https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a
* https://stackoverflow.com/questions/16860/getting-started-with-unit-testing
* https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/
* https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02
Trả lời: Là việc kiểm thử trên từng đơn vị của code, i.e: 1 hàm, 1 module, 1 object,...Ưu điểm: Giúp test đơn giản, dễ thực thi, viết nhiều unit test thì khả năng tìm được nhiều bug rất cao,
### 1.2.3 Understand about Test runner (e.g jest, mocha)
* TODO
### 1.2.4 Understand about Test Assertion Framework (e.g chai, jasmine)
* TODO
### 1.2.5 Understand about spies, stubs and mocks (e.g sinon) (https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
* TODO
### 1.2.6 Understand code coverage (e.g nyc)
* độ phủ:  tỉ lệ (tính theo %) test case đã được thực hiện trên tổng số test case cần thiết cho ứng dụng.
### 1.2.7 Understand HTTP mocking (e.g nock)
## 1.3 Understand disadvantage of React alone
* React không có cơ chế tập trung dữ liệu. Ở React, dữ liệu đều nằm hết ở Component cha và chỉ được truyền theo 1 chiều duy nhất, đó là từ component cha đến component con thông qua props. 
* Cần 1 ứng dụng bên thứ 3 để tập trung dữ liệu: local storage, fetch api, ...
## 1.4 Flux
### 1.4.1 Understand Flux architecture
* Flux là một kiến trúc tổng quát do Facebook phát triển để định nghĩa cách quản lý luồng dữ liệu của hệ thống. Ở đây, dữ liệu được điều hướng theo 1 luồng duy nhất.
### 1.4.2 Understand Universal Data Flow
### 1.4.3 Understand Action, Dispatcher, Store, View
* Action: là 1 object chứa các thông tin mô tả sự thay đổi của hệ thống. VD: Khi click vào nút completed của 1 todo item, 1 action tên là "completed-todo" được bắn ra:
```
{
  type: 'completed-todo',
  todoID: '1234',
}
```
