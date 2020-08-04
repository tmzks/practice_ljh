//정적 스코프 동적스코프
//정적스코프란 자바스크립트가 실행되지 않은 환경에서 코드에서
//나타나는 스코프를 말합니다. 



// function b(){

// }

// function c(){

// }



// let a = function (){
//     console.log("hi");
// }

// let b = {
//     hello : function(){
//         console.log("it 'obj");
//     }
// }

// let c = [function(){
//     console.log("hi there")
// }]

// let callBack = function(func){
//     func()
// }

// callBack(a);
// (
//     function(){
//         console.log("noname")
//     }
// )();

//클로저는 함수가 특정 스코프에 접근 할수 있도록 의도적으로 어느 스코프에서
// 정의하여 스코프를 함수 주변으로 좁히는 것이다. 

let globalFunc;

{
    const array = ["hi"];
    globalFunc = function(){
        return array;
    }

}

const itArray = globalFunc();
const itArray_2 = globalFunc(); 
console.log(itArray);
itArray[1] = "there";
console.log(itArray);
console.log(itArray_2)

// {
//     let block = 20;
//     globalFunc = function()
//     {
//         console.log(block);
//     }
// }
// globalFunc();


