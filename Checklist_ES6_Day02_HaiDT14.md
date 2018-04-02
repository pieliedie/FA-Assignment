# 1 ES6
## 1.1 Reference:
  ### 1.1.1 ES6:
  http://blog.thefirehoseproject.com/posts/12-reasons-es6-future-javascript-web-development/
  ### 1.1.2 ES6 Features
  https://github.com/lukehoban/
  http://es6-features.org/#Constants
  ### 1.1.3 JS Engines: 
  https://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/
  ### 1.1.4 Transpilers: 
  https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them
## 1.2 History
  ### 1.2.1 What is ECMAScript ?
  ```
  Trả lời: ECMAScript là một đặc tả ngôn ngữ được tiêu chuẩn hoá và đăng kí bản quyền bởi Ecma International. ECMAScript cung cấp các điều lệ, chi tiết và hướng dẫn mà các ngôn ngữ scripting cần phải tuân theo. Nó nổi tiếng vì được áp dụng bởi các ngôn ngữ client-side cho Web như Javascript, JScript, ActionScript.
    - 2009: EcmaScript 5 được phát hành, đến nay đã được hỗ trợ hoàn toàn bởi các trình duyệt.
    - Phiên bản EcmaScript 6 được phát hành vào năm 2015, cung cấp nhiều tính năng mới cho Javascript như block scope, arrow function và hỗ trợ lập trình hướng đối tượng tốt hơn.
   ```
  ### 1.2.2 What is JavaScript Engine ? Can you name a few JavaScript Engine used in some popular Browsers such as Chrome, Firefox, IE 
  ```
  Trả lời: JavaScript Engine là các máy ảo để thông dịch và chạy chương trình Javascript. 
    Một số máy ảo phổ biến dùng trên các trình duyệt:
    + Mozilla Firefox: Spidermonkey
    + Chrome: V8
    + Safari: JavaScriptCore
    + IE: Chakra
  ```
  ### 1.2.3 What is Future JavaScript ?<br>
  ```
  Trả lời: Là ngôn ngữ Javascript mà áp dụng những tiêu chuẩn mới của EcmaScript.
  ```
  ### 1.2.4 What is problem you have if you want to use Future JavaScript in Present Browsers?<br>
  ```
  Trả lời: Một số trình duyệt phiên bản cũ có thể không hỗ trợ mã lệnh Javascript phiên bản mới.
  ```
  ### 1.2.5 What is transpiler ?<br>
  ```
  Trả lời: là một công cụ chuyển đổi mã lệnh JavaScript được dùng với mục đích chuyển đổi mã lệnh JavaScript được viết dựa trên tiêu chuẩn ECMAScript phiên bản mới về phiên bản cũ hơn trước đó.
  ```
  ### 1.2.6 What is Babel ? Try Babel online here: https://babeljs.io/repl/<br>
  ```
  Trả lời: Babel là 1 transpiler, giúp chuyển đổi mã lệnh JavaScript từ phiên bản mới về phiên bản cũ hơn.
  ```
## 1.3 Arrow Function
  ### 1.3.1 Arrow Function syntax ?<br>
  ```
  Arrow function là cách khai báo hàm sử dụng cú pháp "=>"
  Vd: var f = (x) => {console.log(x);}
    Ta có thể viết tắt: var f = x => console.log(x);
    Ở ES5, ta viết: var f = function (x){console.log(x);}
 ```
 ### 1.3.2 Compare arrow function syntax to ES5 function syntax ?<br>
 ```
 - Trong ES5, khi khai báo function thì cần sử dụng từ khóa "function", còn trong ES6, ta dùng dấu fat arrow "=>".
 - Khi sử dụng arrow function, có thể bỏ từ khóa return và cặp dấu {} trong trường hợp vế phải là một biểu thức trả về giá trị.
  ```
  ### 1.3.3 Arrow function variations, try them in Babel Repl, fix error if any<br>
  ```
  const f1 = () => 10;
  const f2 = x  => 3;
  const f3 = (...x) => 3;
  const f4 = (x, y) => 3;
  const f5 = x => {
    try {
      1;
    } catch (e) {}
  }
  const f6 = x => { return 10; }
  const f7 = x => { y: x } // fix to const f7 = x => ({ y : x })
  ```
  ### 1.3.4 True or false: arrow functions are anonymous ?
  ```
  const myFunc = x => 4;
  console.log(myFunc.name);
  ```
  Answer: True. Arrow function không thể khai báo dưới dạng function declaration được mà phải được gán vào một biến.
  ### 1.3.5 this
  Evaluate the code below, can you explain what happens ?
  ```
  var obj = {
    a: 10,
    method: function method() {
      setTimeout(function () {
          console.log(this.a);
      }, 200);
    }
  }

  var obj2 = {
    a: 10,
    method: function method() {
      setTimeout(() => {
          console.log(this.a);
      }, 200);
    }
  }

  obj.method(); // ??
  obj2.mthod();
  ```
  Trả lời: Kết quả obj.method() là undefined, obj2.method() là 10.<br>
  Giải thích: Ở object obj, hàm vô danh được truyền vào hàm setTimeOut dưới dạng callback. Hàm callback này được thực thi dưới dạng function invocation, this lúc này trỏ đến window.<br>
  Ở obj2, this nằm trong arrow function, nó sẽ tự động tìm lên cha của arrow function đó là function method. Mà method là 1 thuộc tính của object obj2 cho nên this lúc này trỏ đến obj2.
  ### 1.3.6 Promise
  Compare 2 Promise call below, what do you think ? If v is null or undefined what will happend ? How you handle that ?
   ```
   p.then(function (v) { return v.id });

   p.then(v => v.id);
   ```
  ### 1.3.7 Exercise 01: rewrite all function below with arrow functions and try to avoid curly braces {} as much as possible
  Trả lời:
  ```
    (() => {

  var foo = (x) => {
    var y = x * 2;

    return function(z, baz)  {
      if (z.length > 3) {
        return z.map( baz = (v) => {
          if (v > 3) return v + y;
          else return baz( v * 4 );
        } );
      }
      else {
        var obj = [];

        setTimeout( () => {
          obj.length = 1;
          obj[0] = this.w;
        }, 100 );

        return obj;
      }
    };
  }

  var p = foo( 2 );
  var list1 = [1,3,4];
  var list2 = list1.concat( 6 );

  list1 = p.call( { w: 42 }, list1 );
  list2 = p( list2 );

  setTimeout( () => {
    console.log( list1[0] === list2.reduce( (s,v) => s + v, 0 ) );
  }, 200 );
})();
  ```

## 1.4 Classes
### 1.4.1 Provide an example to create a new class named
Person which have 2 fields: id, name and 1 method: sayHello which print hello to the console
  ```
  class Person {
    constructor(id , name) { 
      this.id = id;
      this.name = name;
    }
    
    sayHello() {
      console.log('Hello');
    }
  }
  ```
### 1.4.2 What is keyword extends and super, provide an example that used both keyword ?
Trả lời:
* extends là từ khóa dùng để link 2 function prototype.

      Vd: class Animal {
          constructor(name) {
            this.name = name;
          }
          speak() {
            console.log(this.name + ' makes a noise.');
            }
          }
        

        class Chicken extends Animal {
          speak() { // so this Chicken class can borrow method speak() from It's parent, class Animal.
          console.log(this.name + ' clucks.'); 
        }
      }
* super là từ khóa để gọi ra những phương thức của class cha từ class con, bao gồm phương thức constructor và phương thức thường
  Ví dụ:
  
        class Animal {
          constructor(name) {
            this.name = name;
          }
          speak() {
            console.log(this.name + ' makes a noise.');
            }
          }
   
        class Chicken extends Animal {
          constructor(name, weight) {
            super(name); // method constructor cua class cha
            this.weight = weight;
          }
          
          speak() { 
          console.log(this.name + ' clucks.'); 
          super.speak(); // method speak của class cha
        }
      }
      
### 1.4.3 Consider the following code, what will be printed out?
    class Cha {
      constructor() { this.id = 'a' }
      method() {
        console.log('Cha', this.id)
      }
    }

    class Con extends Cha {
      method() {
        super.method();
        console.log('Con', this.id)
      }
    }
Trả lời: Kết quả in ra là "Cha a" và "Con a". super.method() đã gọi đến phương thức method ở class Cha. Class Con đã kế thừa thuộc tính id và giá trị của nó từ class Cha.
    
### 1.4.4 What is static keyword ?
Trả lời: static là từ khóa dùng khi khai báo phương thức tĩnh, tức là những phương thức được gọi không cần qua các instance.
Vd:
    
    class Point {
      constructor (x , y) {
        this.x = x;
        this.y = y;
      }
      
      static add(a , b){
        console.log(a + b);
      }
    }
    
    var p1 = new Point(1 , 2);
    var p2 = new Point(3, 4);
    Point.add(p1.x , p2.x); // 4
    
## 1.5 Block Scope
### 1.5.1 Compare let and var
```
- Biến được khai báo bởi var có scope là function scope hoặc global scope. Biến được khai báo bởi let có scope là block scope.
Vd: let i = 5;
    if(i === 5) {
      let j = 2; 
    }
console.log(j); //ReferenceError

- Biến khai báo bằng let không hoist lên đầu scope được.<br>
vd: {
  console.log(c); // undefined. Due to hoisting
  var c = 2;
}

{
  console.log(b); // ReferenceError: b is not defined
  let b = 3;
}
```
### 1.5.2 Closures scope, how do let work in closures, try example below
  ```
  for (let i = 0; i < 3; i++) {
    let btn = document.getElementById('btn' + i);
    btn.addEventListener('click', () {
      alert(i);
    });
  }
```
Trả lời: Click vào btn0, cửa sổ alert hiện ra với giá trị 0, tương tự khi click vào btn1, 2.
         Giải thích: Với việc khai báo biến bằng từ khóa let, mỗi một lần lặp sẽ tạo ra một block scope, giá trị của i sẽ được nhớ ở bên trong scope đó.
### 1.5.3 What is const ? Example ?
```
const là từ khóa để khai báo biến có giá trị duy nhất khi được khởi tạo, không thể gán giá trị khác cho nó, không thể khai báo biến khác trùng tên với nó.
VD: const x = 5;
    x = 6; // Uncaught TypeError
    console.log(x);
```
### 1.5.4 Exercise: fix code below (anywhere) so the console.log will display true
Trả lời:
  ```
    var x = 2, fns = [];

    (function(){
      var x = 5;

      for (let i=0; i<x; i++) {
        fns[i] = () => i;
      }
    })();

    console.log((x * 2) === fns[x*2]()); // must be true
  ```

## 1.6 Default Values and the Gather/Spread Operator
### 1.6.1 Default Values: how to define a functon with default value in ES5 ? And in ES6 ?
Trả lời
* Defining a functon with default value in ES5:

      function f(param) {
        param = (typeof param !== 'undefined') ? param : "a default value";
        console.log(param);
      }
* Defining a functon with default value in ES6:

      function f(param = "a default value") {
        console.log(param);
      }
### 1.6.2 Lazy expression, evaluate the following code, how many times g have been called ?

    function g() {
      console.log('g');
    }

    function f(x = g()) {
    }

    f(1);
    f();
    f();
  Trả lời: Tham số x của f được gán bằng biểu thức thực thi function g. g được gọi lên mỗi khi thực thi hàm f không có đối số truyền vào, tổng cộng là 2 lần.
### 1.6.3 Evaluate the following code
    
    var x = 1;

    function f(x = 2, fn = function() { return x }) {
      console.log(fn());
    }

    f();
    
   Trả lời: Đoạn code trên in ra màn hình giá trị 2. Khi thực thi hàm f, js engine sẽ tìm xem có đối số truyền vào f không. Vì không có đối số nào nên engine sẽ lấy giá trị mặc định ở các param là số 2 và 1 anonymous function trả về giá trị biến x. Biến x lúc này có giá trị là 2. Do đó, kết quả khi thực thi hàm fn là 2.
### 1.6.4 What's a variadic arguments?
  Trả lời: Là các tham số có số lượng không rõ ràng trong 1 function.
### 1.6.5 What is arguments in a JavaScript function ?
  Trả lời: arguments là 1 mảng gồm các phần tử tương ứng với các đối số của 1 function.
  Vd:
      
      function func1(a, b, c) {
      console.log(arguments[0]);
      // expected output: 1

      console.log(arguments[1]);
      // expected output: 2

      console.log(arguments[2]);
      // expected output: 3
      }

      func1(1, 2, 3);
 ### 1.6.6 … operator can be used in 2 differents ways, see code below:
 
      function f(...args) { // gather arguments
      }

      var x = [1, 2, 3];
      var y = [4, 5];
      var z = [0, ...x, ...y ]; // spread out
### 1.6.7 In which way the … operator is used in following code
      function g(...arr) { // gather arguments
      }

      var a = [1, 2, 3];
      var b = [4, 5, 6];

      g(...a, ...b); // spread out
### 1.6.8 Exercise: fix the following code so console.log will print true
Trả lời:

      function f(...arr) { 
        return arr;
      }

      function g() {
        var a1 = [2, 4];
        var a2 = [6, 8, 10, 12];
        a1.splice(1,1);
        a2.splice(0,1);
        return f(...a1,...a2);
      }

      console.log(g().join("") === "281012"); //  true
      
## 1.7 Destructuring
### 1.7.1 What is destructuring ? Example ?
Trả lời: Destructing là cách tách các phần tử của Array hoặc Object thành nhiều biến chỉ bằng một đoạn code duy nhất.
Vd:
     
     let arr = [1,2,3,4];
     let [one,two] = arr;
     console.log(one,two); // 1 , 2
### 1.7.2 Can you use destructuring and default values together ? Provide example?
Trả lời: We can use destructuring togethe with default values.
Vd: 
    
    function fn([ x = 3, y = 4 ]) {
      console.log(x, y);
    }

    fn([ 1, 2 ]); // 1 2
    fn([ 1 ]); // 1 4
    fn([ ]); // 3 4
    
### 1.7.3 Dumping values: provide example that extract the 3rd element in an array and don't care about the 1st, 2nd element ? Provide example that swap 2 numbers ?
* Example of extract the 3rd element in an array

      var list = [ 1, 2, 3 ];
      var [ , , b ] = list;
* Example of swaping 2 numbers

      var list = [ 1, 2 ];
      var [a , b] = list;
      [a , b] = [b, a];
### 1.7.4 Nested Array Destructuring: in case we have an array like this [[1, 2], [3, 4], [5, 6]] use destructuring to extract the number 1 to variabled called a
       
       let arr = [[1, 2], [3, 4], [5, 6]];
       let [[a], [] ,[]] = arr;
       console.log(a);
### 1.7.5 Object Destructuring: provide an example that use destructuring to extract property in an object ?

        let king = {name: 'Mufasa', kids: 1}
        let {name, kids} = king;
        console.log(name,kids); // 'Mufasa' 1
### 1.7.6 Nested Object Destructuring: in case we have an object like this { nested: { a: 10 } }, provide an example that use destructuring to extract value of a in inside nested object
         
         let obj = { nested: { a: 10 } };
         let { nested: { a } } = obj;
         console.log(a);
### 1.7.7 Destructuring and Function Parameters: consider the array destructuring for parameters what will be printed out ?

      function fn([ x, y ]) {
        console.log(x, y);
      }

      fn([ 1, 2 ]); // 1 2
      fn([ 1 ]); // 1 undefined
      fn([ ]); // undefined undefined
      
 ### 1.7.8 Exercise: practice object destructuring, object constructuring
 Trả lời:
 
     function ajax(url,cb) {
        // fake ajax response:
        cb({
          foo: 2,
          baz: [ 6, 8, 10 ],
          bam: {
            qux: 12
          }
        });
      }

      function check(data) {
        console.log(
          56 === (
            data.foo +
            data.bar +
            data.baz[0] + data.baz[1] + data.baz[2] +
            data.bam.qux +
            data.bam.qam
          )
        );
      }

      var defaults = {
        foo: 0,
        bar: 4,
        bam: {
          qux: 0,
          qam: 14
        }
      };

      function response(/* TODO: object destructuring */) {

        check({
        /* TODO: object constructuring */
        });

      }

      ajax("http://fun.tld",response);
   
## 1.8 Object Literal Extensions
### 1.8.1 Concise properties: consider the following code what do you think ?

    var x = 2, y = 3;
    var o1 = {
      x: x,
      y: y
    }

    var o2 = {
      x,
      y
    }
    console.log(o1); // ??
    console.log(o2); // ??
    
### 1.8.2 Concise Methods: consider the following code what do you think ?

    var o1 = {
      x: function() {
        console.log('o1.x');
      },
      y: function() { }
    }

    o1.x();

    var o2 = {
      x() {
         console.log('o2.x');
      },
      y() {}
    }
    o2.x();
    
### 1.8.3 ES5 Getter/Setter: consider the following code

    var o = {
      _id: 10,
      get id() { return this._id++; },
      set id(v) { this._id = v; }
    }

    o.id; // ??
    o.id = 100;
    o.id; // ??
    
## 1.9 Template Strings
### 1.9.1 Template Strings: what is template strings ?
Trả lời: Là cách viết 1 chuỗi string có thể nhúng được biểu thức vào chuỗi string đó.
Vd:
  
    let name = "Hai";
    let sayHello = `Hello, I am ${name}`; // Hello, I am Hai 
### 1.9.2 Consider this code below, rewrite it using ES6 template string

    var name = 'That Duy';
    var chaoDuy = 'Hello ' + name + '!';

    console.log(chaoDuy);
    console.log(typeof chaoDuy);

Trả lời:

    var name = 'That Duy';
    var chaoDuy = 'Hello ${name}!';

    console.log(chaoDuy); // Hello That Duy!
    console.log(typeof chaoDuy); // string
    
### 1.9.3 Interpolated Expression: can we use function inside ${…} if yes provide an example
### 1.9.4 Tag Functions: consider the code below

    function f(strings, ...values) {
      console.log(strings);
      console.log(values);
    }

    var s = 'Fresher Academy';
    f`Hello ${s}`; // ??
Trả lời: Đoạn code trên in ra 1 mảng chứa phần tử "Hello ", 1 giá trị "Fresher Academy".
### 1.9.5 Exercise
Trả lời:

    function upper(strings,...values) {
        let [a ,b, c,d] = strings;
        let [e, f, g] = values;
        return a + e.toUpperCase() + b + f.toUpperCase()+ c + g.toUpperCase() + d;
    }

    var name = 'Nguyen Van A',
      account = 'anv',
      classname = 'Fresher Academy ES6';

    console.log(
      upper`Hello ${name} (@${account}), welcome to the ${classname}!` ===
      'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER ACADEMY ES6!'
    );
## 1.10 Modules
### 1.10.1 What is module pattern ?
### 1.10.2 What is ES6 import/export ?
### 1.10.3 What is export default ? How to import a exported default function ?
### 1.10.4 Circular Module Dependency: A imports B, B imports A, how does this work ?
## 1.11 Module Loaders
### 1.12 Collections
### 1.12.1 Map: what is Map in JS ? How to iterate a Map ? How to get a value ? How to set a value ? How to know if a value is in Map ?
Trả lời: 
* Map là kiểu cấu trúc dữ liệu chứa các cặp key - value. Map có nhiều điểm tương đồng với object. 
  Tuy nhiên:
  * key trong map có thể là một object hoặc một kiểu nguyên thủy. Key trong object cũng có thể là 1 object, tuy nhiên các key đó đều trỏ đến 1 giá trị trong vùng nhớ
  * Có thể xóa bỏ phần tử trong Map dễ dàng bằng method delete(key).
Vd:
      ```
      let aMap = new Map(); // declare a map
      let key1 = "string key";
      let key2 = {a : "key"};
      aMap.set(key1 , "the value of key 1"); // set data to map
      aMap.set(key2, "the value of key 2");
      console.log(aMap); // {"string key" => "the value of key 1", {…} => "the value of key 2"}
      ```
  * Có thể dễ dàng lấy được kích thước của Map bằng thuộc tính size, trong khi object thường phải làm thủ công.
* Các cách iterate Map: 
  * Dùng for...of
    ```
    let aMap = new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
    
    for (let [key, value] of aMap.entries()){ 
      console.log(`aMap[${key}] = ${value}`);
    }
    ```
  * Dùng forEach
    ```
     function logMapElements(value, key, map) {
      console.log(`m[${key}] = ${value}`);
      }

    new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
    .forEach(logMapElements);
    ```
* Cách get giá trị trong Map: Dùng method get(key).<br>
  vd: aMap.get("string key"); // "the value of key 1"
* Cách set giá trị trong Map: Dùng method set(key , value).<br>
  vd:
  ```
  let key3 = "Key 3";
  aMap.set(key3, "Value of key 3");
  ```
* Check sự tồn tại của 1 phần tử của Map: Dùng method has(key). Kết quả trả về là giá trị Boolean. <br>
  vd: aMap.has(key3); // true
### 1.12.2 Set: what is Set in JS ? How to iterate a Set ? How to get a value ? How to set a value ? How to know if a value is in Set ?
* Set là cấu trúc dữ liệu chứa các phần tử có giá trị không trùng lặp nhau (unique).
Vd:
    
    let aSet = new Set();
    aSet.add(1);
    aSet.add("Hai");
    aSet.add(1); // does not affect
    console.log(aSet); // {1, "Hai"}
* Duyệt các phần tử trong Set:
  * Dùng for...of:
    ```
    for(let elem of aSet.values()){
      console.log(elem);
    }
    ```
  * Dùng forEach():
  ```
  aSet.forEach(function(val){
      console.log(val);
  })
  ```
* Get value trong Set: Set không có phương thức để lấy ra một giá trị cụ thể, ta phải convert từ Set về Array để có thể truy xuất các phần tử bằng index.
* Set value trong Set: Dùng phương thức add().
* Check sự tồn tại của 1 giá trị trong Set: Sử dụng phương thức has(). Kết quả trả về của has() có kiểu Boolean.
### 1.12.3 Weakmap same question like Map ? What is the difference between Map vs Weakmap
Trả lời: 
* WeakMap là kiểu cấu trúc dữ liệu chứa các cặp key - value. WeakMap có nhiều điểm tương đồng với object. 
  Tuy nhiên:
  * key trong WeakMap phải là một object.
  * WeakMap có thể xóa 1 phần tử trong nó một cách dễ dàng bằng phương thức delete().
Vd:
      ```
      let aWeakMap = new WeakMap(); // declare a Weakmap
      let key2 = "string key";
      let key1 = {a : "key"};
      aWeakMap.set(key1 , "the value of key 1"); 
      console.log(aWeakMap); // { {…} => "the value of key 1"}
      aWeakMap.set(key2, "the value of key 2"); // TypeError
      ```
  * Có thể dễ dàng lấy được kích thước của WeakMap bằng thuộc tính size, trong khi object thường phải làm thủ công.
* Các cách iterate WeakMap: Hiện tại em chưa tìm ra. Theo em, WeakMap không hỗ trợ việc iterating.
* Cách get giá trị trong Map: Dùng method get(key).
  vd: 
  ```
  let obj = { b : 1 }
  aWeakMap.set(obj , "value of key obj");
  aWeakMap.get(obj); // "value of key obj"
  ```
* Cách set giá trị trong Map: Dùng method set(key , value).
  vd:
  ```
  let obj2 = { d : 1 }
  aWeakMap.set(obj2 , "value of key obj2");
  ```
* Check sự tồn tại của 1 phần tử của Map: Dùng method has(key). Kết quả trả về là giá trị Boolean. <br>
  vd: aMap.has(key3); // true
* Sự khác biệt giữa Map và WeakMap:
  * WeakMap chỉ nhận key là một object.
  * WeakMap cho phép cơ chế Garbage Collection hoạt động.
### 1.12.4 Weakset same question like Set ? What is the difference between Set vs WeakSet
