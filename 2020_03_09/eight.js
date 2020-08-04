//기본내장객체

//생성자함수에 메서드추가
// var primitiveNumber = 273;
// var objectNumber = new Number(273);

// Number.prototype.method = function(){
//     return 'Method on Prototype';
// };
// var output = '';
// output += primitiveNumber.method()+'\n';
// output += objectNumber.method();
// console.log(output);
//기본자료형에도 새로운 메서드가 생성됩니다.

//object객체
// var object = {property:273};
// var output ='';

// output +="HOP('property'): " + object.hasOwnProperty('property') + '\n';
// output +="HOP('constructor'): " + object.hasOwnProperty('constructor') + '\n';
// output +="PIE('property'): " + object.propertyIsEnumerable('property') + '\n';
// output +="PIE('constuctor'): " + object.propertyIsEnumerable('constructor') + '\n';
// for(var key in object){
//     console.log(object[key]);
// }
//hasOwnProperty(name)은 객체가 name속성이 있는지 불리언으로 판단하는 역할을 한다.
//propertyIsEnumerable(name)은 반복문으로 열거할 수 있는지를 확인한다.

// var object = new Object();
// console.log(object);
// console.log(object.toString());

// var student = {
//     name:"윤명월",
//     grade:"대학교 1학년",
//     toString:function(){
//         return this.name + ':' + this.grade;
//     }
// };
// console.log(student);
//결과 => { name: '윤명월', grade: '대학교 1학년', toString: [Function: toString] }
//toString메서드는 객체를 문자열로 변환하는 메서드이다.

//number객체
// var numberFromLiteral = 273;
// var numberFromConstructor = new Number(273);
// console.log(numberFromLiteral);
// console.log(numberFromConstructor);
//273
// [Number: 273]

//메서드의 특이한사용
var fixedNumber = (273.5210332).toFixed(2);
console.log(fixedNumber);
//273.52
//toFixed메서드를 이용해 소수점 두번째 자리 이후를 컷한다.

var number = Number.MAX_VALUE +1;
console.log(number);
//1.7976931348623157e+308
//자바스크립트로 나타낼수 있는 최대숫자에 1을 더했는데도 오류없이 출력이 되었다.

var addNumber = Number('0.00000000000000000001e+308');
var number = Number.MAX_VALUE + addNumber;
console.log(number);
//infinity를 출력한다 

var string = 'abcdefgh';
string = string.toUpperCase();
console.log(string);
//toUpperCase는 대문자로 변경시켜주는 메서드

//array객체
var arr1 = [52,273,104,57,32];
var arr2 = new Array();
var arr3 = new Array(10);
var arr4 = new Array(52,273,103,57,32);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
