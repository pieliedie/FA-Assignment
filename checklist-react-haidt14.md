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
* [X] Understand how to use JSX
* [X] Understand how to add JavaScript to JSX
    * Có thể nhúng các biểu thức Javascript vào trong JSX.<br>
    * Syntax: đặt biểu thức Javascript vào trong cặp { }
    ```
    const user = {
    firstName: 'Harper',
    lastName: 'Perez'
    };

    const element = (
    <h1>
        Hello, {user.firstName}! 
    </h1>
    );
    ```
* [X] Understand the limitation of JavaScript in JSX<br>
    Đoạn code truyền vào JSX chỉ có thể là biểu thức, không thể là câu lệnh.
* [X] Understand how we add style in JSX? How to
    * Sử dụng css class: sử dụng className thay cho class để tránh xung đột với các từ khóa khác của Javascript. Nhược điểm: Khi style 1 component thì các component khác cùng className với component đó sẽ bị ảnh hưởng => giải pháp: tạo className mới cho nó hoặc dùng inline style.
    * Sử dụng inline style trong JSX:
    ```
    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')',
    };

    function HelloWorldComponent() {
        return <div style={divStyle}>Hello World!</div>;
    }
    ```
    Nhược điểm: Khả năng tái sử dụng không cao, code trở nên dài dòng.
    * Sử dụng css-in-js: Nhược điểm: các file js cần phải được load xong để trả về code css, layout trang web trước đó sẽ không có css => xấu
* [X] Understand what is JSX Comment<br>
    Cú pháp comment: {/* This is a comment*/}
* [X] Practice put JSX Comment
* [X] Understand Naming Convention of JSX
    * Đối với component người dùng tự định nghĩa, tên component phải được viết dưới dạng Pascal Case. Component phải được viết dưới dạng thẻ đơn < />.
    ```
    const element = <div> <MyButton/> </div>;
    ```
* [X] Know why class and for of HTML is not the same in JSX
    * Vì bản chất của JSX là Javascript. Nếu JSX dùng class hay for như trên HTML sẽ gây xung đột với những từ khóa của JS. Giải pháp: Sử dụng className, htmlFor thay cho class, for.
* [X] Practice know how to iterating & rendering list in React: http://jasonjl.me/blog/2015/04/18/rendering-list-of-elements-in-react-with-jsx/
## 1.6 State [0%]
* [X] Understand State in React (what, why and how it work?)
    * what: State là một thuộc tính của Component, dùng để lưu trữ dữ liệu có khả năng thay đổi bên trong component.
    * Giá trị của state chỉ có thể được truy cập ở bên trong component.
    * why: Trong nhiều trường hợp, dữ liệu không bất biến mà có thể thay đổi, VD: Số bản ghi trong 1 table, số lượng bài hát trong 1 playlist hay trạng thái công việc của 1 to-do list. Do đó cần phải có 1 phương pháp lưu trữ dữ liệu mà giá trị của dữ liệu có thể thay đổi được.
    * how it work: Giá trị của state được khởi tạo bên trong hàm constructor.
    * Để thay đổi giá trị của state, ta dùng hàm setState. Về lý thuyết, ta vẫn có thể thay đổi trực tiếp giá trị của state không cần qua hàm setState, tuy nhiên React sẽ không render giá trị mới đó lên DOM. 
* [ ] Know how to change State of a Component via user input or programmatically
## 1.7 Props [0%]
* [X] Understand Props in React<br>
    * Khi React tìm thấy một component mà người dùng tự định nghĩa, nó đưa các thuộc tính của component đó vào một object được gọi là props. VD:
    ```
    <MyButton name = "Add" />  // props { name : "Add"}
    ```
    * Như vậy, props là 1 object chứa các giá trị được truyền từ bên ngoài vào trong Component.
    * props bất biến dưới góc nhìn của component, nó chỉ là thông tin được truyền vào component.
    * Khi muốn validate giá trị của props, ta dùng PropTypes để làm việc đó:
    ```
    class App extends React.Component {
        render() {
            return ( 
                <div>
                    <h1> Hello, {this.props.name} </h1>
                    <h3>Array: {this.props.propArray}</h3>			
                    <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                </div>
                );
            }
        }
    App.propTypes = {
        name: PropTypes.string,
        propArray: PropTypes.array.isRequired,
        propBool: PropTypes.bool.isRequired,
    };
    ```
* [X] Understand why use props to create "reusable components"<br>
    Chúng ta có thể đặt nhiều component cùng loại tại nhiều nơi, với các giá trị truyền vào khác nhau tùy theo mỗi component. Và props được dùng để lưu các giá trị truyền vào ấy.
* [X] Can we set default value for a Prop<br>
    Khi muốn set giá trị mặc định cho props, chúng ta dùng defaultProps để làm việc đó.
    ```
    class App extends React.Component {
        render() {
            return ( 
                <div>
                    <h1> Hello, {this.props.name} </h1>
                    <h3>Array: {this.props.propArray}</h3>			
                    <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                </div>
                );
        }
    }
    App.propTypes = {
        name: PropTypes.string,
        propArray: PropTypes.array.isRequired,
        propBool: PropTypes.bool.isRequired,
    };
    App.defaultProps = {
        name: 'Tutorialspoint.com',
        propArray: [1, 2, 3, 4, 5],
        propBool: true,
        propFunc: function(e) {
            return e
        },
        propNumber: 1,
        propString: "String value..."
    }
    ```
## 1.8 Props Validation [0%]
* [X] Understand what is validation<br>
Trả lời: Là việc kiểm tra tính đúng đắn của dữ liệu đầu vào dựa trên những điều kiện cho trước.
* [X] Know how to validate Props in React<br>
Trả lời: Sử dụng PropTypes để làm việc này.
## 1.9 Component Lifecycle Methods [%]
* [ ] Understand what is lifecycle methods
* [ ] Understand why we need lifecycle methods
    * Giải phóng bộ nhớ khi component bị hủy.
* [ ] Understand 7 lifecycle methods of React Component (http://busypeoples.github.io/post/react-component-lifecycle/)
* [ ] Understand componentDidMount = where you do DOM manipulation & AJAX request
* [ ] Understand componentWillMount = clean up after your React components gets destroyed
* [ ] Practice: create a Component that have 7 lifecycle methods and observe the behaviour