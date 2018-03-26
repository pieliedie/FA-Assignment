# 1 ES6
## 1.1 Reference:
  1.1.1 ES6: http://blog.thefirehoseproject.com/posts/12-reasons-es6-future-javascript-web-development/
  1.1.2 ES6 Features
  https://github.com/lukehoban/
  http://es6-features.org/#Constants
  1.1.3 JS Engines: https://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/
  1.1.4 Transpilers: https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them
## 1.2 History
  1.2.1 What is ECMAScript ?
  ```
  Trả lời: ECMAScript là một đặc tả ngôn ngữ được chuẩn hoá và đăng kí bản quyền bởi Ecma International. Nó nổi tiếng vì được áp dụng bởi   các ngôn ngữ client-side cho Web như Javascript, JScript, ActionScript.
    - 2009: EcmaScript 5 ra đời, đến nay đã được hỗ trợ hoàn toàn bởi các trình duyệt.
    - Phiên bản EcmaScript 6 được phát hành vào năm 2015, cung cấp nhiều tính năng mới như block scope, arrow function và hỗ trợ lập trình    hướng đối tượng tốt hơn.
   ```
  1.2.2 What is JavaScript Engine ? Can you name a few JavaScript Engine used in some popular Browsers such as Chrome, Firefox, IE <br>
  ```
  Trả lời: JavaScript Engine là các máy ảo để thông dịch và chạy chương trình Javascript. 
    Một số máy ảo phổ biến dùng trên các trình duyệt:
    + Mozilla Firefox: Spidermonkey
    + Chrome: V8
    + Safari: JavaScriptCore
    + IE: Chakra
  ```
  1.2.3 What is Future JavaScript ?<br>
  1.2.4 What is problem you have if you want to use Future JavaScript in Present Browsers?<br>
  ```
  Trả lời: Một số trình duyệt phiên bản cũ có thể không hỗ trợ mã lệnh Javascript phiên bản mới.
  ```
  1.2.5 What is transpiler ?<br>
  ```
  Trả lời: là một công cụ chuyển đổi mã lệnh JavaScript được dùng với mục đích chuyển đổi mã lệnh JavaScript được viết dựa trên tiêu chuẩn    ECMAScript phiên bản mới về phiên bản cũ hơn trước đó.
  ```
  1.2.6 What is Babel ? Try Babel online here: https://babeljs.io/repl/<br>
  ```
  Trả lời: Babel là 1 transpiler, giúp chuyển đổi mã lệnh JavaScript từ phiên bản mới về phiên bản cũ hơn.
  ```
## 1.3 Arrow Function
  1.3.1 Arrow Function syntax ?<br>
  ```
  Arrow function là cách khai báo hàm sử dụng cú pháp "=>"
  Vd: var f = (x) => {console.log(x);}
    Ta có thể viết tắt: var f = x => console.log(x);
    Ở ES5, ta viết: var f = function (x){console.log(x);}
 ```
 1.3.2 Compare arrow function syntax to ES5 function syntax ?<br>
 ```
 - Trong ES5, khi khai báo function thì cần sử dụng từ khóa "function", còn trong ES6, ta dùng dấu fat arrow "=>".
  ```
  1.3.3 Arrow function variations, try them in Babel Repl, fix error if any<br>
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
  const f7 = x => { y: x }
  ```
  1.3.4 True or false: arrow functions are anonymous ?
  ```
  const myFunc = x => 4;
  console.log(myFunc.name);
  ```
  1.3.5 this
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
  Trả lời: Kết quả obj.method() là undefined, obj2.method() là 10
    Giải thích: Ở object obj, hàm vô danh được truyền vào function setTimeOut dưới dạng callback, giá trị của this sẽ trỏ đến đối tượng      window. Do window không có biến a, kết quả trả về là undefined.<br>
  1.3.6 Promise
  Compare 2 Promise call below, what do you think ? If v is null or undefined what will happend ? How you handle that ?
   ```
   p.then(function (v) { return v.id });

   p.then(v => v.id);
   ```
  1.3.7 Exercise 01: rewrite all function below with arrow functions and try to avoid curly braces {} as much as possible
  Trả lời:
  ```
      (function iife(){

      function foo(x) {
        var y = x * 2;

        return function bar(z) {
          if (z.length > 3) {
            return z.map( function baz(v){
              if (v > 3) return v + y;
              else return baz( v * 4 );
            } );
          }
          else {
            var obj = [];

            setTimeout( function bam(){
              obj.length = 1;
              obj[0] = this.w;
            }.bind( this ), 100 );

            return obj;
          }
        };
      }

      var p = foo( 2 );
      var list1 = [1,3,4];
      var list2 = list1.concat( 6 );

      list1 = p.call( { w: 42 }, list1 );
      list2 = p( list2 );

      setTimeout( function(){
        console.log( list1[0] === list2.reduce( function(s,v){
          return s + v;
        }, 0 ) );
      }, 200 );
    })();
  ```