
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
* https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02<br>
Trả lời: Là việc kiểm thử trên từng đơn vị của code, i.e: 1 hàm, 1 module, 1 object,...Ưu điểm: Giúp test đơn giản, dễ thực thi, viết nhiều unit test thì khả năng tìm được nhiều bug rất cao,
### 1.2.3 Understand about Test runner (e.g jest, mocha)
* Test runner là các chương trình, môi trường thực thi các đoạn code chứa phần unit test và các thiết lập liên quan, kết quả test được trả về cho người dùng.
### 1.2.4 Understand about Test Assertion Framework (e.g chai, jasmine)
* Test Assertion Framework là các thư viện dùng để tạo test case. Mỗi framework có cú pháp riêng để sử dụng. Các test runner cần phải được tích hợp vào trong test framework để thực sự chạy được test case.
### 1.2.5 Understand about spies, stubs and mocks (e.g sinon) (https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
* spies, stubs và mocks được gọi là những cặp test double dùng để test những impure function
* spies: dùng để test function call, thường để kiểm tra xem số lần gọi hàm, kiểm tra các đối số khi gọi hàm, kiểm tra giá trị hay lỗi được trả về.
* 
### 1.2.6 Understand code coverage (e.g nyc)
* độ phủ:  tỉ lệ (tính theo %) test case đã được thực hiện trên tổng số test case cần thiết cho ứng dụng.
### 1.2.7 Understand HTTP mocking (e.g nock)
## 1.3 Understand disadvantage of React alone
* React không có cơ chế tập trung dữ liệu. Dữ liệu trong ứng dụng React đến từ nhiều nguồn, tại nhiều thời điểm, do đó việc quản lý dữ liệu rất khó khăn. 
* Cần 1 ứng dụng bên thứ 3 để tập trung dữ liệu: local storage, fetch api, ...
## 1.4 Flux
### 1.4.1 Understand Flux architecture
* Flux là một kiến trúc tổng quát do Facebook phát triển để định nghĩa cách quản lý luồng dữ liệu của hệ thống. Ở đây, dữ liệu được điều hướng theo 1 luồng duy nhất.
### 1.4.2 Understand Universal Data Flow
1 Views bắn các actions đến dispatcher.
2 Dispatcher gửi actions đến mọi stores.
3 Stores cập nhật dữ liệu rồi gửi dữ liệu đến views.
4 views render dữ liệu ra màn hình.
### 1.4.3 Understand Action, Dispatcher, Store, View
* Action: là 1 object chứa các thông tin mô tả sự thay đổi của hệ thống. VD: Khi click vào nút completed của 1 todo item, 1 action tên là "completed-todo" được bắn ra:
```
{
  type: COMPLETED_TODO,
  payload: {
   todoID: '1234'
  }
}
```
 * 1 action Flux tiêu chuẩn gồm các thuộc tính:
  * type: là 1 string constant
  * payload: thông tin, dữ liệu của action
  * error: Kiểu boolean. Nếu error mang giá trị true, thì giá trị của payload phải là 1 error object.
  * meta: dữ liệu gửi kèm action và không dược xếp vào dạng payload.
* Dispatcher: là 1 địa điểm duy nhất nơi các action được gửi đến và được truyền đi tới mọi store. Các store đăng ký nhận ation bằng cách truyền callback.
* Store: là nơi chứa dữ liệu của chương trình. Giá trị trong store thay đổi khi nhận được action từ dispatcher.
* View: Là nơi hiển thị dữ liệu từ store. View cũng phải đăng ký nhận sự thay đổi dữ liệu từ store. Khi store có sự thay đổi về dữ liệu, view phải nhận dữ liệu mới đó và re-render.
## 1.5 Redux
### 1.5.1 Understand Redux (https://redux.js.org/)<br>
* Redux là 1 thư viện triển khai kiến trúc Flux dùng để quản lý dữ liệu của 1 javascript application. 
* Với các ứng dụng sử dụng Redux, dữ liệu được tập trung tại 1 nguồn tin cậy duy nhất, gọi là store. Khi có bất kỳ sự kiện nào xảy ra ở phần view, dữ liệu thay đổi được gửi đến store để xử lý và trả về cho view hiển thị dữ liệu.
### 1.5.2 Understand Action, Reducers, Store, Data Flow
* Action: object javascript chứa dữ liệu để gửi đến store.
* Reducer: các method nhận giá trị đầu vào là state, action và trả về giá trị state mới sau khi update dữ liệu.
* Store: Là object nhận các action để cập nhật dữ liệu và truyền dữ liệu sang view để hiển thị cho người dùng.
* Data Flow:
 1. Khi có action từ view, hàm store.dispatch(action) được thực hiện.
 2. Bên trong hàm dispatch, các hàm reducer được thực thi dựa trên action type, cập nhật các giá trị trong state.
 3. hàm combineReducers được gọi để hợp nhất các state trả về của các reducer thành 1 state duy nhất.
 4. store lưu lại state mới, lần lượt gọi các listener callback function đã đăng ký với store. Cuối dùng, dữ liệu dược render ra màn hình.
### 1.5.3 Understand Async Action, Async Flow, Middleware
## 1.6 Redux Saga
### 1.6.1 https://medium.freecodecamp.org/async-operations-using-redux-saga-2ba02ae077b3
### 1.6.2 Understand limitation of Redux in Async Flow ?
### 1.6.3 Understand ES6 generator (http://2ality.com/2015/03/es6-generators.html)
### 1.6.4 Understand effect
### 1.6.5 Understand fork, take, race, put, call, select, takeLatest, takeEvery
