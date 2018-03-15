1. this & Object prototype
   1. this
      * this là một trong những cơ chế gây rối nhất trong JS, theo em this là gì ?
      ```
      TODO
      ```
      * Cách hiểu 1: this trỏ tới function f, đúng hay sai?
      ```javascript
      function f(num) {
      console.log("f: " + num);
      this.count++; // ghi lại gía trị đếm hàm f được gọi bao nhiêu lần
      }
      f.count = 0;

      f(1);
      f(2);
      f(3);
      f(4);
      f(5);

      // in ra số lần hàm f đc gọi: 5 lần
      console.log(f.count); // ???
      ```
      * Cách hiểu 2: this trỏ tới scope của function, đúng hay sai?
      ```javascript
      function f() {
        var a = 2;
        this.g();
      }

      function g() {
        console.log(this.a);
      }

      f();
      ```
      * So sánh các dạng gọi hàm như code:
      ```javascript
      function fn() {
         }

         fn(); // cách gọi 1

         var o = {
           method: fn
         }

         o.method(); // cách gọi 2

         fn.call(); // cách gọi 3

         new fn(); // cách gọi 4
      ```
      * Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
      ```javascript 
      function f() {
           console.log(this.a);
         }

         var a = 2;

         f(); // ??
      ```
      * Cho đoạn code sau, kết quả in ra là gì ?
      ```javascript
         function g() {
           "use strict";
           console.log(this.b);
         }

         var b = 2;
         g(); // ??
      ```
      * Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
      ```javascript 
            function f() {
        console.log(this.a);
      }

      var o = {
        a: 2,
        f: f
      };

      o.f(); // ??
      ```
      * Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
      ```javascript
      function f() {
        console.log(this.a);
      }

      var o = {
        a: 2,
        f: f
      };

      var g = o.f;

      g(); // ??
      ```
      * Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
      ```javascript
      function f() {
        console.log(this.a);
      }

      var o = {
        a: 2
      };

      var g = f.apply(o);

      f.call(o); // ??
      g(); // ??
      ```
      * Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
      ```javascript
      function f(a) {
        this.a = a;
      }

      var g = new f(2);
      console.log(g.a); // ???
      ```
      * Viết dụ kết hợp cả 4 cách gọi hàm để chỉ ra thứ tự khi gọi hàm ảnh hưởng đến this ra sao?
      * Từ đó theo em quy tác để xác định this là gì?
   1. Object
      * Liệt kê lại 6 kiểu nguyên thuỷ trong JS ? liệt kê những kiểu Object có sẵn trong JS?
      ```
      6 kiểu nguyên thủy trong JS: string, number, boolean, null, undefined, symbol.
      Những kiểu Object có sẵn trong JS: Object, Number, String, Array, Function
      ```
      * Có những cách nào để clone 1 object ?
      ```
         1. Sử dụng method Object.create()
         2. Sử dụng method Object.assign() (ES6)
      ```
   1. Iteration
      * Có những cách nào để duyệt các phần tử trong 1 array ? Viết code ví dụ
      
         1. Sử dụng vòng lặp for, for...of.
         ```  
           var arr = [1,2,3,4];
            for(var i = 0 ; i < arr.length ; i++) {
               console.log(arr[i]);
            }

            for(var element of arr){
               console.log(element);
            }
         ```

         2. Sử dụng vòng lặp while, do...while.
         ```
         var arr = [1,2,3,4];
         var n = 0;
         while(n < arr.length){
            console.log(arr[n]);
            n++;
         }
         ```
         ```
         do {
            console.log(arr[n]);
            n++;
         } while (n < arr.length);
         ```
         3. Sử dụng method forEach().
         ```
         var arr = [1, 2, 3, 4];
         arr.forEach(function (val) {
            console.log(val);
         });
         ```
      * Có những cách nào để duyệt các thuộc tính trong 1 object? Viết code ví dụ
         1. Sử dụng kết hợp forEach() với Object.keys().
         ```
         var obj = { first: "Hai", last: "Do" };

         Object.keys(obj).forEach(function(key) {
             console.log(key, obj[key]);
         });
         ```
   1. Class Theory
      * Nhớ lại OOP là gì ? các thuộc tính của OOP?
      ```
      OOP - Lập trình hướng đối tượng là kỹ thuật lập trình hướng đến xây dựng các đối tượng, gồm thuộc tính - là các biến, và phương thức - là các hàm.
      ```
      * So sánh "class" và "instance"
      ```
      Class là tên gọi chỉ một nhóm các đối tượng có cùng thuộc tính và phương thức. Class giống như một bản mô tả về đối tượng.
      Instance là các thực thể, được lưu trữ trong bộ nhớ, có thuộc tính và phương thức riêng.
      ```
      * Constructor là gì?
      ```
      Constructor là 1 hàm không có tên, dùng để khởi tạo giá trị cho đối tượng. 
      ```
   1. Prototypes
      * Xem xét đoạn code sau, em có nhận xét gì ?
      ```javascript
      var o1 = {
        a: 2
      }

      var o2 = Object.create(o1);

      console.log(o2.a); // ??

      o1.a = 10;
      console.log(o2.a); // ??
      ```
      * Tìm hiểu về Oject.prototype
