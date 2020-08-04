//객체는 데이터와 기능을 논리적으로 묶어 놓은것이다. 
//객체는 메서드라는 녀석과 프로퍼티라는 녀석을 가지고 있다. 

//객체의 메서드는 어떤 객체가 수행할 수 있는 기능이며, 프로퍼티는 
//이 객체가 가지고 있는 정보입니다. 

//물질적 정신적인 것, 추상적인 것들을 표현 할 수 있다.

//사람의 몸은 
//상체 
//  가슴, 머리 , 목 , 팔 , 복부
//하체
//  엉덩이, 허벅지, 종아리, 발목,발  

//사람의 기능
//소리치는 것(머리에서 목으로 명령을 전달하여 소리를 내는 것 )
//팔을 움직이다. (머리에서 상체로 팔로 명령을 전달해서 움직이는 것 );

let human; 

let upperBody = {}; 
let downerBody = {}; 

let chest;
let head = {
    orderToNeck : function(){
        console.log(this);
    }
};
let neck = {
    condition : "good", //프로퍼티명(key) : 값(value)
    shout : function(string){ // 메서드명(key) : 함수(function) 
        console.log(`${string} (큰소리로 소리치다)`)
    }
};

human = {
    upperBody : upperBody,
    downerBody : downerBody,
}

upperBody.neck = neck;
upperBody.chest = chest;
upperBody.head = head;


console.log(neck.condition); //객체의 프로퍼티에 접근 하는 방법 
human.upperBody.neck.shout("안녕 !"); // 객체의 메서드를 호출 하는 방법 

console.log(human);
//객체 . (접근연산자) 프로퍼티명;
let arms;

let hip;
let leg;

//클래스 : 어떤 객체의 형태의 정보를 가지고 있는 객체를 만들기 위한 수단 
//인스턴스 : 클래스로 태어난 비슷한 형태의 것들 

//붕어빵틀 : 붕어빵들을 만들기 위한 틀 
//붕어빵 : 객체 인스턴스라고 한다. 

//객체의 생김새가 비슷해도 서로 다른 객체는 다른 존재(변수)이다. 
//어떤 양 == 둘리 , 붕어빵객체_1 !== 붕어빵객체_2 

//붕어빵 인스턴스를 가지고 싶으면 붕어빵 클래스를 이용해야 한다. 
//국화빵 인스턴스를 가지고 싶으면 국화빵 클래스를 이용해야 한다. 

//객체를 만드는 방법
//1. 객체를 직접 만드는 방법

//2. 클래스를 이용해서 비슷한 인스턴스를 만드는 방법  



