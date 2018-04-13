# 1 React fundamentals
 Read: https://www.tutorialspoint.com/reactjs/reactjs_overview.htm
## 1.1 What exactly is React ? [0%]
* [X] Read https://blog.andrewray.me/reactjs-for-stupid-people/
* [X] Read https://facebook.github.io/react/docs/why-react.html
* [X] Read https://facebook.github.io/react/blog/2013/06/05/why-react.html
* [X] Understand what is React, who build React<br>
    Trả lời:
    * React là một thư viện Javascript dùng để xây dựng giao diện người dùng, được viết bởi Jordan Walke và các kỹ sư tại Facebook.
    * Thành phần để xây dựng giao diện trong React được gọi là component, một component có thể mang trạng thái (stateful) hoặc không (stateless).
    * Các công nghệ sử dụng trong React: JSX, virtual DOM,...
* [ ] Understand why use React<br>
    * React là thư viện xây dựng giao diện người dùng bằng các component. => khả năng tái sử dụng cao.
    * ReactJS sử dụng virtual DOM để cập nhật những sự thay đổi lên DOM thật giúp tránh những thao tác không cần thiết trên DOM.
    * Có thể chạy React trên server để tối ưu hóa SEO và tăng tốc độ tải trang. 
* [ ] Understand React advantages/disadvantages
    * Advantages:
        * Hiệu suất cao: ReactJS sử dụng virtual DOM, chỉ tính toán những sự thay đổi lên DOM và cập nhật chúng, giúp ReactJS tránh những thao tác không cần thiết trên DOM.
        * Server-side rendering: React có thể được chạy ở phía server giúp tăng tốc độ tải trang và tối ưu hóa SEO.
        * Test giao diện dễ dàng hơn vì React được viết hoàn toàn bằng Javascript.
    * Disadvantages:
        * Cú pháp lạ lẫm cho người mới bắt đầu.
        * React chỉ là 1 library phục vụ tầng View, cần kết hợp với các thư viện và framework khác để có phần Model và Controller.
        * Kích thước khá nặng so với framework khác.
        * Không tích hợp AJAX. 
* [X] Understand Virtual DOM<br>
    Trả lời: 
    * Virtual DOM là một đối tượng đại diện cho DOM, chứa các thông tin của DOM như các thuộc tính,... tuy nhiên virtual DOM không có khả năng render sự thay đổi của các thuộc tính lên màn hình như DOM thật.
    * Việc truy xuất trên virtual DOM nhanh hơn so với DOM thật, giống như việc thay đổi vị trí các căn phòng trên bản thiết của 1 ngôi nhà so với trên 1 ngôi nhà thật.
    * React sử dụng virtual DOM để tăng tốc độ truy xuất, cập nhật lên DOM, cơ chế hoạt động:
    ```
    1. Khi có sự thay đổi trên DOM, toàn bộ virtual DOM được cập nhật.
    2. React so sánh sự thay đổi trên virtual DOM với phiên bản cũ của virtual DOM tại thời điểm trước khi cập nhật. Bằng cách này, React sẽ biết được chính xác phần nào của virtual DOM đã được thay đổi.
    3. React chỉ lấy những phần thay đổi trên virtual DOM để cập nhật lên DOM thật.
    4. DOM render những phần được thay đổi lên màn hình.
    ```
## 1.2 Environment Setup [0%]
* [X] Read: https://github.com/facebook/create-react-app
* [X] What is create-react-app
* [X] Create a new app with create-react-app
* [X] How to runs the app created by create-react-app in development mode ?
* [X] Investigate a React project structure
### 1.3 Hello World [%]
* [X] Understand React render method<br>
    * render() là method của abstract class React.Component
    * khi hàm render được gọi, các props và state của component được xem xét rồi trả về các giá trị:
        * React elements. Thường được tạo thông qua JSX. Một element có thể là các thẻ của native DOM (<div />) hoặc là các thẻ người dùng tự định nghĩa.
        * String and numbers. Các giá trị này sẽ được render thành các text node trên DOM.
        * Portals. Được tạo nên với ReactDOM.createPortal.
        * null. Không render.
        * Booleans. Không render.
    * Hàm render nên chỉ được dùng để render dữ liệu, không nên dùng nó để thay đổi giá trị state hay tương tác trực tiếp với browser. Việc tương tác với browser, thay vào đó, nên dùng các method khác trong life cycle như componentDidMount().
* [X] Modify the app to display 'Hello World' in app
* [X] Using Developer Tools to inspect HTML
### 1.4 Component [0%]
* [X] Understand what is a React Component ?<br>
Về mặt lý thuyết, components là các javascript function. Chúng nhận các giá trị đầu vào (props) và trả về các element mô tả những gì sẽ được hiển thị lên màn hình.
* [X] Understand how many type of React Component ?<br> 
    * Functional Component: cách đơn giản nhất để khai báo một component. Thường sử dụng cách khai báo này cho các stateless component cho ngắn gọn.
    ```
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
        }
    ```
    * Class Component: Khai báo component dưới dạng class
    ```
    class Greeting extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```
### 1.5 JSX [0%]
* [X] Understand what is JSX<br>
    JSX là bộ cú pháp mở rộng của Javascript, giúp thể hiện code Javascript dưới dạng ngôn ngữ template như HTML.
    ```
    // JSX
    const element = <h1>Hello, world!</h1>;

    // ES5
    var element = React.createElement(
        "h1",
        null,
        "Hello, world!"
        );
    ```
* [X] Understand why JSX<br>
    * Cú pháp JSX giúp lồng phần code markup và phần code logic lại với nhau để tạo thành các component.
    * Giúp người phát triển dễ hình dung được layout của component do cú pháp của JSX có nét tương đồng với ngôn ngữ markup.
* [ ] Understand how to use JSX
* [ ] Understand how to add JavaScript to JSX
* [ ] Understand the limitation of JavaScript in JSX
* [ ] Understand how we add style in JSX? How to
* [ ] Understand what is JSX Comment
* [ ] Practice put JSX Comment
* [ ] Understand Naming Convention of JSX
* [ ] Know why class and for of HTML is not the same in JSX
* [ ] Practice know how to iterating & rendering list in React: http://jasonjl.me/blog/2015/04/18/rendering-list-of-elements-in-react-with-jsx/