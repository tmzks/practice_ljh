//클래스 선언

class Polygon { 
    constructor(height, width){ 
        this.height = height; 
        this.width = width; 
    } 
}
var p = new Polygon(); // ReferenceError 
class Polygon {} //클래스 선언은 호이스팅이 되지 않는다.


//익명 클래스
var Polygon = class{ 
    constructor(height, width){ 
        this.height = height; 
        this.width = width; 
    } 
}; 
//기명 클래스
var Polygon = class Polygon{ 
    constructor(height, width){ 
        this.height = height; 
        this.width = width; 
    } 
};
//익명,기명 모두 호이스팅이 되지않는다.


//생성자(constructor)
var Polygon = class{ 
    constructor(height, width){ 
        this.height = height; 
        this.width = width; 
    } 
    constructor(height2, width2){ 
        this.height = height2 * 2 ; 
        this.width = width2 * 2; 
    } 
};
//생성자함수는  class내의 하나밖에 사용할수 없다

//생성자 메서드에서 super키워드를 통해 상위클래스의 생성자 메서드를 호출할수있다.
class Polygon{ 
    constructor(height, width){
         this.height = height; 
         this.width = width; 
        } 
    } 
class Square extends Polygon{
     constructor(length){
          // length로 다각형의 넓이와 높이를 정의하기 위해 부모클래스의 생성자를 호출합니다. 
          // Note: 파생 클래스에서, 'this'를 사용하기 전에는 반드시 super()를 
          // 호출하여야 합니다. 그렇지 않을 경우 참조에러가 발생합니다. 
          super(length, length); 
          this.name = 'Square'; 
        } 
        get area(){ 
            return this.height * this.width; 
        } 
        set area(value){
             this.area = value; 
            } 
        } 
        var test = new Square(4); 
        console.log(test.area);

//클래스 상속
//es6의 클래스 상속
class Animal{ 
    constructor(name){
         this.name = name; 
        } 
        speak(){
             console.log(this.name + ' makes a noise.'); 
            }
         } 
         class Dog extends Animal{
              speak(){ 
                  console.log(this.name + ' barks.');
                 }
        } 
        var d = new Dog('Mitzie'); 
        d.speak();



