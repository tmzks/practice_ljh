let a = 10;

const arr_1 = [];

let temp = 10; 
for(let i = 0; i<7; i++){
    arr_1[i] = temp;
    temp += 10;
}

const array = [];
let numb = 50;
for(let i = 0; i<5; i++){
    array[i] = numb;
    numb -= 10;
}
console.log(array);

function printArray(arr){
    //매개변수는 적는다는 것은 전달인자로 무언가를 받겠다라는 의미이다. 
    //매개변수는 의미가 명확해야 한다. 
    for(let i =0; i<arr.length; i++){
        //length키워드는 배열, 문자열에서 쓰인다 
        //배열의 length는 배열안에 들어있는 아이템의 총 개수를 의미한다. 
        //문자열의 length는 문자열의 문자의 수를 말한다. 'hobby' 'hobby'.length === 5;
        console.log(arr[i]);
    }

}
printArray(array);

function printArrayTwo(arr,asc){
    
    if(asc === 1){
        for(let i = 0; i<arr.length; i++){
            oddEvenPrint(arr[i]);
            // console.log(arr[i]);
        }
    }else{
        for(let i = arr.length-1; i>=0; i--){
            // console.log(arr[i]);
            oddEvenPrint(arr[i]);

        }
    }
}
printArrayTwo(array,0);

function oddEvenPrint(numb){
    if(numb%2 === 0){
        console.log(`${numb}은 짝수입니다.`);
    }else{
        console.log(`${numb}은 홀수입니다.`);
    }
}
oddEvenPrint(100);

function compare(numb_1,numb_2){
    if(numb_1>numb_2){
        return true;
    }else{
        return false;
    }
}
console.log(compare(10,20));




let global = 10;

function dummyFunc(){
    global = 20;
}
dummyFunc();
console.log(global);

