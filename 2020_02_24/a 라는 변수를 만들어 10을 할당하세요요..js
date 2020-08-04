//a 라는 변수를 만들어 10을 할당하세요요.
//let a = 10; 선언과 할당을 동시에 한 모습
//a = 10; 미리 a 변수가 선언되어있는 경우 a변수의 값을 10으로 재할당 하는 경우
//a = 10; 선언이 되어있지 않은경우 var a = 10; 


//상수 arr_1 빈배열을 할당하시오 
//상수와 변수의 차이는 무엇이죠 ? 재할당 가능여부 

//for문을 이용해서 다음과 같이 만들어보세요 
//10 , 20 , 30, 40, 60 ,70 ; 
// for(let i =0; i<=5; i=i+10){
//     arr_1[i] = i; // arr_1[0] = 0;
// }
// console.log(arr_1);

// let temp = 10; 
// for(let i = 0; i<7; i++){
//     arr_1[i] = temp;
//     temp += 10;
// }

// i == 0 
//[0,10,20,30,40,50,60,70]
// 10 * i;
// for(let i = 0; i<=7; i++){
//     arr_1[i] = i * 10;
// }

//빈배열을 하나만들고 for문으로 [50,40,30,20,10]이 되도록 만들어 보세요 .

//함수를 새로만드는데, printArray 전달인자로 배열을 받아 해당 배열의 처음 부터 끝까지 출력하는
//함수이다. 

//printArray에 두번쨰 전달인자로 숫자가 들어갈건데, 1이라면 앞에서부터 배열을 출력하고, 2라면 뒤에서 부터
//출력하도록 변경하세요 


// function printArrayTwo(arr,asc){
    //arr 은 전달인자로 들어온 배열
//     if(asc === 1){
//         for(let i = 0; i<arr.length; i++){
//             console.log(arr);
//              
//         }
//     }else{
//         for(let i = arr.length-1; i>=0; i--){
//             console.log(arr[i]);
//         }
//     }
// }
// printArrayTwo(array,0);

//전달인자로 숫자값을 받아 짞수인지 홀수인지 판별하는 oddEvenPrint 함수를 만들어보세요 
// 짝수라면 ${값}은 짝수 입니다. , ${값}은 홀수 입니다. 

//두값을 비교하는 compare 함수를 만드세요. numb_1 , numb_2 > ture , false

function compare(numb_1,numb_2){
    return numb_1 > numb_2;
}

// return numb_1 > numb_2;


//전역변수 
//지역변수

let global = 10;

function dummyFunc(){
    global = 20;
}
dummyFunc();


