//if문, switch문, 삼항연산자

let a = 10;
let b = 20;

if(a>b){
    console.log(`${a}는 b보다 큽니다.`);
}else{
    console.log(`${b}는 a보다 큽니다.`);
}

a>b ? console.log(`${a}는 b보다 큽니다.`) : console.log(`${b}는 a보다 큽니다.`)

let animal = "dog";

switch(animal){
    case  "dog" :
        console.log(`animal변수는 dog입니다.`);
        break;
    case "bird" :
        console.log(`animal변수는 bird입니다.`);
        break;
}

//for문은 for문안에서만 사용되는 선언과함수, 반복실행조건, 루프이후실행문이 존재하지만
//while문은 반복실행조건만 존재하기때문에 for문 처럼쓸려면 루프이후 실행문을 while문안에 따로 적어줘야한다

//array_1의 버킷을 순차적으로 출력하는 for문
const array_1 = [];
for(let i =0; i<=25; i++){
    array_1[i] =i;
}
for(let i =0; i<array_1.length; i++){
    console.log(array_1[i]);
}

//함수 : 하나의 코드의 집합
//함수사용이유 : 코드를 재사용함에 대한 목적

//length 키워드는 배열의 길이 이다. 

function makeRandomArray(){
    const array = [];
    const randomArr = Math.floor(Math.random() * 100);
    for(let i = 0; i<randomArr; i++){
        array[i] = Math.floor(Math.random() * 100);
        console.log(array[i]); // []
    }
    return array;
}

function makeRandomArray_2(){
    const array = [];
    const ramdomArrLength = Math.floor(Math.random() * 100);
    for(let i = 0; i < ramdomArrLength; i++){
        array[i] = Math.floor(Math.random() *10);
    }

    return array;
}
const oddEvenPrint = function(numb){
    if(numb%2 === 0){
        console.log(`${numb}감은 짝수입니다.`);
    }else{
        console.log(`${numb}값은 홀수입니다.`);
    }
}
oddEvenPrint(10);
const newArr_2 = makeRandomArray_2();
console.log(newArr_2);
// const newArr = makeRandomArray();
// console.log(newArr);
const newArr_3 = [10,20,30,40,50];
function printArray(arr,asc){
    //arr은 내부를 들여다 볼 배열
    //asc는 배열의 출력 방향을 결정한다. 
    if(asc === 1){
        for(let i =0; i<arr.length; i++){
            oddEvenPrint(arr[i]);
        }
    }else{
        for(let i = arr.length-1; i>=0; i--){
            oddEvenPrint(arr[i]);
        }
    }
}
// printArray(newArr_2);
printArray(newArr_3);

//전역변수 : 함수외부에서 작성되서 함수내부에서 참조가 가능한 변수
//지역변수 : 함수내부에서 작성되서 함수외부에서 참조가 불가능한 변수

const sum = function(numb_1,numb_2){
    return numb_1 + numb_2;
}
const result = sum(10,20);
console.log(result);

let global = 20;
function dummyFunc(){
    global = 30;
}
dummyFunc();
console.log(global);

// let global = 20; 선언과 할당
// global = 30; 재할당 

//arr[i] += 20

