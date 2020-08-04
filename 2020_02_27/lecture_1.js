//호이스팅 
//자바스크립트가 가지고 있는 특이한 메커니즘이다. 
//호이스팅은 함수나 변수가 사용되고 난 후 선언이 되었다면 해당 변수를 
//최상단에 끌고오는 메커니즘 

// let x = 10;
// console.log(x);

//x; // var x;

// x;
// let x = 4;

// x;
// console.log(x);


// x;
// console.log(x);
// var x = 4; 
// x;
// ===
// var x;
// x;
// console.log(x);
// x = 4;
// x;

//


//자바스크립트는 함수나 변수가 사용되었을때 함수 또는 전역스코프 전체를 살펴보고 var로 
//선언한 변수를 맨위로 끌어 올립니다. 

foo();
// foo2();

function foo(){
    console.log("hello")
}

// function foo2(){
//     console.log("hi")
// }
// function foo(){
//     console.log("hello");
// }

// foo()
// foo();
// foo2();

//함수 표현식에서는 호이스팅 메커니즘이 작동하지 않는다. 

// foo();

// let foo = function(){
//     console.log("hi")
// }

//
//코드의 가독성과 유지보수를 위해 호이스팅이 일어나지 않도록한다. 
//호이스팅을 모르더라도, 함수와 변수를 가급적 코드 상단부에 선언하면
//호이스팅으로 인한 스코프 꼬임 문제도 방지 할 수 있다. 
//let과 const 를 사용한다. 









