for(let i = 0; i<11; i++){
    console.log(i);
}

for(let i = 50; i>0; i--){
    if(i%2 === 0){
        console.log(`${i}는 짝수입니다.`);
    }else{
        console.log(`${i}는 홀수입니다.`);
    }
}

// 25부터 100까지 출력하되, 만약 도중에 값이 짝수면 짝수출력 아니면 홀수출력

let i = 25;
while(i<100){
    if(i%2 === 0){
        console.log(`${i}는 짝수입니다.`);
    }else{
        console.log(`${i}는 홀수입니다.`);
    }
    i++;

}

const arr = [];
console.log(arr);

arr[0] = 1;
arr[1] = 2;
console.log(arr[0]);
console.log(arr[1]);
arr[2] = "hello";
arr[3] = "world";
console.log(arr[2]);
console.log(arr[3]);

console.log(arr[0]);

arr[5] = "디럭스룸";
console.log(arr[5]);

arr[0] = "스탠다드";
arr[1] = "스탠다드";
arr[2] = "스탠다드";
arr[3] = "스탠다드";
arr[4] = "스탠다드";
arr[5] = "공사중";
arr[6] = "로얄";
arr[7] = "로얄";
arr[8] = "로얄";
arr[9] = "디럭스";
console.log("똑똑");
console.log("왜요?");
console.log("디럭스하나주십쇼");
console.log("9번방으로 가세요");
arr[9] = "사용중";

const arr_3 = [];
arr_3[3] = 30;
console.log(arr_3);

const arr_4 = [];
for(let i =0; i<100; i++){
    arr_4[i] = i;
}
console.log(arr_4);

for(let i =0; i<100; i++){
    console.log("똑똑");
    console.log("몇명있누?");
    console.log(arr_4[i]);
    if(arr_4[i]%2 === 1){
        console.log(`나도껴줘`);
    }else{
        console.log(`ㅅㄱ염`);
    }
}

for(let i =100; i>0; i--){
    console.log(arr_4[i]);
    if(arr_4[i]%2 === 0){
        console.log(` 남니?`);
        if(arr_4[i]%3 === 0 ){
            console.log('내가 뒤로감');
        }
    }else{
        console.log(`들어감 `);
    }
}

 