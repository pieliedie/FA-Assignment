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
* extends là từ khóa dùng khi tạo 1 class là con của 1 class khác.

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
Trả lời: Kết quả in ra là "Cha a" và "Con a". super.method() đã gọi đến phương thức method ở class Cha. class Con đã kế thừa thuộc tính id và giá trị của nó từ class Cha.
    
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
## 1.6 Default Values and the Gather/Spread Operator
### 1.6.1 Default Values: how to define a functon with default value in ES5 ? And in ES6 ?
Trả lời
* Defining a functon with default value in ES5:

      function f(param) {
        param = param || "a default value";
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
    
### 1.9.5 Exercise
    function upper(strings,...values) {
      // TODO
    }

    var name = 'Nguyen Van A',
      account = 'anv',
      classname = 'Fresher Academ ES6';

    console.log(
      `Hello ____ (@____), welcome to the ____!` ===
      'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER ACADEMY ES6!'
    );
## 1.10 Modules
### 1.10.1 What is module pattern ?
### 1.10.2 What is ES6 import/export ?
### 1.10.3 What is export default ? How to import a exported default function ?
### 1.10.4 Circular Module Dependency: A imports B, B imports A, how does this work ?
