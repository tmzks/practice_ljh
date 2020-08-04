function makeRandomArray(){
    const randomLength = Math.floor(Math.random() * 100);
    const array = [];
    for(let i = 0; i < randomLength; i++){
        array[i] = Math.floor(Math.random() *100) ;
    }
    return array;
}

function makeArray(numb){
    const array =[];
    for(let i = 0; i<numb; i++){
        array[i] = i;
    }
    // numb[i]; 이것은 말도 안되는 행위다. 10[10] 이러는 행위다.
    return array;
}
const newArr = makeArray(10);
const newRandArray = makeRandomArray();
console.log(newRandArray);
// console.log(newArr);


// // 전달인자로 받은 배열을 처음부터 끝까지 출력하는 함수
function printArray(arr){
    console.log(arr);
    for(let i =0; i<arr.length; i++){
        console.log(arr[i]);
    }
} 
printArray(newArr);

// // 전달인자로 받은 값이 홀짝인지 판별하고 출력하는 함수
function oddEven(index){
        if(index%2 === 0){
            console.log(`${index}는 짝수입니다.`);
        }else{
            console.log(`${index}는 홀수입니다.`);
        }
    }
oddEven(101);

//전달 받은 배열에서 가장 큰 값을 출력하는 함수 biggestInArray()
function biggestInArray(arr){
    let big = arr[0];
    for(let i = 0; i<arr.length; i++){
        // console.log(arr[i]);
        if(arr[i] < big){
            big = arr[i];
        }
    }
    console.log(big)
}
biggestInArray(newRandArray);


function seconderyBiggestNumbInArray(arr){
    let big = arr[0];
    let seconBig = arr[0];
    for(let i =0; i<arr.length; i++){
        if(arr[i]>big){
            seconBig = big;
            big = arr[i];
        }else{
            if(arr[i]>seconBig){
                seconBig = arr[i];
        }
    }
    
    }
    console.log(big);
    console.log(seconBig);
    console.log(arr);
}
seconderyBiggestNumbInArray(newRandArray);

// 과제
// 생활코딩 자바스크립트 모두보기
// 배열을 정렬하는 방법에 대해서 알아보고, 정렬알고리즘을 사용해서 전달인자로 받은 난수의 배열을 오름차순, 내림차순으로 정렬해서 반환하는 함수(선택정렬, 버블정렬)
// 예를 들어 2,3,4,5처럼 오름차순  5,4,3,2 내림차순
// length키워드, 배열다루는법 제대로 숙지

