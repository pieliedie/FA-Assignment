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
