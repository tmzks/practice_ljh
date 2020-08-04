//이스케이프 문자열 
console.log("동해물과 백두산이 \n마르고 닳도록");

//비교연산자
console.log(30>20>10);
//false

//변수생성
var pi;
pi = 3.14;
console.log(pi); //3.14

//변수의 특성
var cup = "coffee";
cup = "green Tea";
cup = "water";
console.log(cup); //water

//자료형검사
//문자열
console.log(typeof("string")); 
//숫자
console.log(typeof(70));
//불
console.log(typeof(true));
//함수
console.log(typeof(function(){}));
//객체
console.log(typeof({}));
//string
//number
// boolean
// function
// object

//undefined자료형
console.log(typeof(variable)); //undefined
//variable로 선언했지만 초기화하지 않았으므로 undefined자료형이다.

//if조건문
var date = new Date();
var hour = date.getHours();
if(hour<12){
    console.log("오전입니다.")
}
if(hour>=12){
    console.log("오후입니다.")
}

//if else 조건문
if(hour<12){
    console.log("오전입니다.");
}else{
    console.log("오후입니다.");
}

//중첩조건문

if(hour<11){
    console.log("아침먹을 시간입니다.")
}else{
    if(hour<15){
        console.log("점심먹을 시간입니다.")
    }else{
        console.log("저녁먹을 시간입니다.")
    }
}

//if else조건문
if(hour<11){
    console.log("아침먹을 시간입니다.")
}else if(hour<15){
    console.log("점심먹을 시간입니다.")
}else{
    console.log("저녁먹을 시간입니다.")
}
    
//반복문 
//여러번 반복해야하는 일을 간편하게 처리하는 반복문

//배열
let array = [10,20,30];
//배열내의 입력된 값을 요소라고한다. 어떠한 종류의 자료형도 요소가 될 수 있다.
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
//배열 기호안에 들어간 숫자를 인덱스라고 한다.
array.push(4); //배열에 push라는 속성을 아용해서 요소를 집어넣은 모습
console.log(array.length); //배열의 길이를 나타내는 length라는 속성

//while반복문
var value = 0;
while(value < 5){
    console.log(value);
    value++
}
//내부에 value++라는 속성을 추가해서 무한루프에 빠지지 않게 만들 수 있다.

//for반복문과 배열
for(let i =0; i<array.length; i++){
    console.log(array[i]);
}
//위의 반복문을 반대로 출력하기
for(let i = array.length-1; i>=0; i--){
    console.log(array[i]);
}

//for in반복문
for(var i in array){
    console.log(array[i]);
}
//for in반복문애 배열을 넣으면 앞의 반복변수에 요소가 아니라 인덱스가 들어간다.
//첫번째 for문 처럼 순서대로 출력되는 결과를 볼 수 있다.

//for of반복문
//es6이후 생겨난 문법으로 for in과 반대로 반복변수에 요소가 들어간다.
//우선 for in문
var arr = ["이종호","김태현","둘다","여친업음"];
for(var i in arr){
    console.log(i + "번째 요소는" +arr[i] + "입니다.");
}

//for of문
for(const element of ["이종호","김태현","둘다","여친업음"]){
    console.log(`요소는 ${element}입니다.`);
    
}


