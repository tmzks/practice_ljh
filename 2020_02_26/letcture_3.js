//스코프란 ? 특정 위치에서 접근 할 수 있는 함수, 변수 등의 군락을 일 컷는다. 

//전역 스코프란 ? 현재 있는 자바스크립트가 실행하고 있는 위치(함수 , 블럭 ) 바깥에
//있는 스코프를 일컫는다. 전역변수와 비슷한 내용이며 변수 , 함수 등을 포함하는 범위
//이기에 좀 더 넓은 의미 이다. 

let global = "i'm global";

//지역 스코프란 ? 함수스코프, 블럭스코프가 있으며, 함수와 블럭 내부에서만 접근
//가능한 변수 , 함수 등의 군락을 일 컫는다. 
//지역변수와 비슷한 내용이며, 변수, 함수 등을 포함 하기에 좀 더 넓은 의미이다. 

{
    let local = "i'm local";
    //현재 이 블락 내부에서만 유효하며 블락 외부에서는 접근 불가능 
}

function localFunc() {
    let local = "i'm local";
    //현재 이 함수 내부에서만 유효하며 함수 외부에서는 접근 불가능
}

//블락은 어느언어 에서나 스코프를 구분 짓기 위해 사용하는 것이다. 
if (10 < 20) {
    let answer = true;
} else {
    let answer = false;
}

// console.log(answer);
//answer는 블락 내부에서 선언되었기에 지역스코프를 가진다. 

//var 변수는 globalScope 

var globalScope = "hello";
let localLet = "hi";
const localConst = "good";
{
    var globalScope = "hi";
    let localLet = "hello";
    const localConst = "good";
}
function change() {
    var globalScope = "third";
}
change();
console.log(globalScope);
console.log(localLet);
console.log(localConst)

let globalFunc;

{
    let password = "1234";
    globalFunc = function(setPassword){
        console.log(password);
        password = setPassword;
        console.log(password);
    }
}

globalFunc(12);
globalFunc(4242)