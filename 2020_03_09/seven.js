//instanceof키워드
//해당객체가 어떠한 생성자 함수로 생성됐는지 확인할때 사용한다.
// function Student(name,math,english,science){
//     this.name = name;
//     this,math = math;
//     this.english = english;
//     this.science = science;
// }
// var student = new Student("윤하린",90,55,80,99);
// console.log(student instanceof Student);
// console.log(student instanceof Number);
// console.log(student instanceof String);
// console.log(student instanceof Boolean);
//true false false false
//student객체는 Student생성자 함수의 인스턴스이므로 첫번째 결과만 true를 반환

// function Student(name,math,english,science){
//     this.name = name;
//     this,math = math;
//     this.english = english;
//     this.science = science;
// }
// Student.prototype.getSum = function(){};
// Student.prototype.getAverage = function(){};
// Student.prototype.toString = function(){};

//캡슐화

// function Rectangle(w,h){
//     var width = w;
//     var height = h;

//     this.getWidth = function(){return width;};
//     this.getHeight = function(){return height;};
//     this.setWidth = function(w){
//         if(w<0){
//             throw '길이는 음수가 될수없습니다.';
//         }else{
//             width = w;
//         }
//     };
//     this.setHeight = function(h){
//         if(h<0){
//             throw "길이는 음수가 될 수 없습니다.";
//         }else{
//             height = h;
//         }
//     };
// }
// Rectangle.prototype.getArea = function(){
//     return this.getWidth() * this.getHeight();
// };
// var rectringle = new Rectangle(5,6);
// rectringle.setWidth(-2);
// console.log('AREA' + rectringle.getArea());
//오류발생
//set형태의 메서드만 width속성과 height속성에 값을 입력할수 있으므로 음수가 들어갈일은 없다.

//상속
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    get width(){
        return this._width;
    }
    set width(input){
        this._width = input;
    }
    get height(){
        return this._height;
    }
    set height(input){
        this._height = input;
    }
    getArea(){
        return this._width * this._height;
    }
}

class Square extends Rectangle{
    constructor(length){
        super(length,length);
        console.log(this)
    }
    set width(input){
        this._width = input;
        this._height = input;
    }
    set height(input){
        this._width = input;
        this._height = input;
    }

}
const square = new Square(100);
console.log(square.getArea());

