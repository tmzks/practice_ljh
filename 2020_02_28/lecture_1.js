//호이스팅 ? 변수나 함수가 선언되기전에 사용되었다면 변수나 함수 선언을 
//문서 최상단으로 끌어 올리는 행위

// console.log(x); // x라는 변수를 찾고 있다. undefiend 
// var x = 10;  //선언은 밑에서 되어있다. 
// x; // 

//자바스크립트가 위의 코드를 읽는 방법 

//1. x라는 변수가 생성이 되어있지 않기 떄문에 x 변수를 최상단에 선언한다 

// var x; 
// console.log(x);
// x = 10;
// x; //

// 호이스팅이 안되는 변수 타입 let과 const


// foo();

// function foo(){
//     console.log("foo");
// }

//호이스팅 되는 함수타입 ? 함수선언식 ! 
//호이스팅 이 안되는 함수 타입 ? 함수표현식 

// foo2()

// // a;
// console.log(a);
// var a = 20;
// function foo2(){
//     console.log("a");
// }
// b;
// function first(){
//     console.log("first")
// }

//객체 ? 데이터와 기능을 논리적으로 묶어놓은것 . 데이터는 프로퍼티 기능 메서드 
//프로퍼티는 ? 키와 밸유의 쌍으로 이루어져있다. 
//메서드는 ? 키와 함수의 쌍으로 이루어져있다. 

//1. 객체를 직접 만드는 방법 
//스마트폰객체를 직접 만들것이다. 기종,전화번호, 전달인자로 숫자를 받아 
//`${전화번호}에게 전화거는중` 이라고 출력하는 기능도 만드세요 

//클래스 : 어떤 객체의 형태의 정보를 가지고 있는 틀
//인스턴스 : 어떤 클래스에서 생성된 비슷한 형태의 객체 .  

//자바스킙트에서 객체를 만드는 방법 
//변수에 객체를 직접 할당하여 만드는 방법
//함수를 이용하는 방법 (es5이전)
//클래스 키워드를 이용하는 방법 (es5이후)

class Tv{
    constructor(model,display){
        this.chanel = 7;
        this.model = model;
        this.display = display;
        this.changeChanel = function(numb){
            this.chanel = numb;
            console.log(numb + "로 채널이 변경되었습니다.");
        }
    }
    upChanel(){
        this.chanel++;
        console.log(this.chanel);
    }
}
//new keword를 붙이는 것은 생성자 함수를 호출 하겠다. 
let appleTv = new Tv("apple","retina");
console.log(appleTv);
appleTv.changeChanel(10);
console.log(appleTv);
appleTv.upChanel();
console.log(appleTv);

//SmartPhone 프로퍼티 모델, 전화번호, 제조사를 가지고 전달인자로 전달한 값들로
//초기화 된다. 기능은 내 전화번호를 출력하는 myPhoneNumberPrint와, 내 전화번호를
//바꾸는 changeMyPhoneNumber메서드를 구현 해보세요 
//call메서드 010 2052 2525 여기에 전화를 겁니다. 
//friends = []; showMyFriend 메서드를 만들고 
//addFreind 메서드 0102025225 