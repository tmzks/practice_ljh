//배열을 전달인자로 받아서 내부에 있는 버킷의 아이템을 하나하나씩 출력하는 프로그램을 만드세요

const array = [1,2,3,4,5,6,7,8,9,10];

function printArray(arr){
    for(let i =0; i<arr.length; i++){
        console.log(arr[i]);
        oddEven(arr[i]);
    }
}
printArray(array);

//숫자값을 전달인자로 받아 짝수인지 홀수인지 판단하는 프로그램을 만드로 출력하는 프로그램을 만드세여
//이때 1번문제랑 결합하여 배열아이템을 전달인자로 주십셔

function oddEven(numb){
    if(boolOE(numb)){
        console.log(`${numb}는 짝수입니다.`);
    }else{
        console.log(`${numb}는 홀수입니다.`);
    }
}
oddEven(102);

//함수표현식으로 나타내기

//숫자값을 전달인자로 받아 이값이 짝수라면 true를반환하고 아니면false를 반환하는 boolOE함수를 만들어 if문안에 조건문안에서 사용해보시오

function boolOE(numb){
    if(numb%2 === 0){
        return true;
    }else{
        return false;
    }
}

// 가장큰값을 찾는 함수를 만들고 그 값을 반환하는 함수

function maxArray(arr){
    let big = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>big){
            big = arr[i];
         }
    }
    return big;
}
maxArray(array);
console.log(maxArray(array));

//전역변수 지역변수
//전역변수 : global variable things
//함수 바깥에서 작성된 변수를 말한다.
let dummy = "hello";
function printDummy(){
    console.log(dummy);
}
printDummy();

//지역변수 : local variable things
//함수내부에서 작성된 변수를말한다.
function local(){
    let loca = "hi";
    console.log(loca);
}
local();

//두개의 큰차이
//함수바깥에서 작성된 변수는 참조가 가능하다. 반면 함수내부에서 작성된 지역변수는 함수 내부에서만 볼 수 있다.
//함수밖에 있는 모든 변수를 전역변수라고 한다.
//함수밖으로는 찾을 수 있지만 내부로는 찾을 수 업다


let sum = function(numb_1, numb_2){
    return numb_1 + numb_2;
}
let result = sum(10,20);
console.log(result);

oddEven(sum(10,20));



function oddEvenTwo(numb){
    function odd(numb){
        console.log(`${numb}는 홀수 입니다.`);
    }
    function even(numb){
        console.log(`$${numb}는 짝수 입니다.`)
    }
    if(numb % 2 ===0){
        return ()=>{even(numb)};
    }else{
        return ()=>{odd(numb)};
    }
}

oddEvenTwo(10)();

//문제
// function sum(numb_1, numb_2){
//     return numb_1 + numb_2;
// }
// let result = sum(10,20);
// console.log(result);



function compare(numb_1,numb_2){
    if(numb_1>numb_2){
        console.log(`${numb_1}이 더 큽니다.`);
        return numb_1;
    }else{
        console.log(`${numb_2}이 더 큽니다.`);
        return numb_2;
    }
    
}
const comparedResult = compare(10,20);
console.log(comparedResult);








function randomArray(){
    const random = Math.floor(Math.random() * 100);
    const array = [];
    for(let i = 0; i<random; i++){
        array[i] = Math.floor(Math.random() * 10);
    }
    return array;
}
randomArray();

const resultTwo = randomArray();
console.log(resultTwo);


//배열을 전달인자로 받아 해당 배열의  처음부터 길이까지 출력하는 함수를 만들어봐라

function printArray(arr){
    for(let i =0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
printArray(resultTwo);

//콜바이레퍼런스 콜바이벨류
//인자가 평가되는 과정

// 콜바이벨류 : 전달인자로 전달한 변수의 값을 복사하여 매개변수로써 사용하는 행위

//콜바이레퍼런스 : 배열[], 오브젝트{}  전달인자로 들어온 값이 아닌 주소영역을 복사하여 참조 할 수 있게 하는 방식 



//과제
// document객체 공부해오기 