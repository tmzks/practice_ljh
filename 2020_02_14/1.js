let ten = "10";
const ten_2 = 10;
console.log(10>20);
console.log(30<50);
console.log(10>=10);
console.log(20>=30);
console.log(40==40);
console.log(50===50);

let animal = "dog";
//let animal = "cat";
//let animal = "bird";

switch (animal) {
    case "dog":
        console.log(`animal 는 개입니다.`);
        break;
    case  "cat":
        console.log(`aniaml는 고양이입니다. `);
        break;
    case "bird":
        console.log(`animal는 새입니다.`);
        break;
    default:
        console.log(`animal는 개도 새도 고양이도 아닙니다.`);
        break;
}
animal ="dog" ? console.log(`animal은 개입니다.`) :animal = "cat" ? console.log(`animal는 고양이입니다.`) : animal ="bird" ? console.log(`animal는 새입니다.`) :console.log(`animal는 개도 고양이도 새도 아닙니다.`);

const a = 20;
const b = 30;
const c = 40;

if(a>b){
    console.log(`a는 b보다 큽니다.`);
}else{
    console.log(`b는 a보다 큽니다.`);
    if(c>b){
        console.log(`c는 b보다 큽니다.`);
    }else{
        console.log(`c는 b보다 작습니다.`);
    }
}
if(b>a && b<c){
    console.log(`b는 a와 c의 미디안 값입니다.`);
}


for(let i =25; i<101; i++){
    if(i%2 ===0){
        console.log(`${i}는 짝수입니다.`);
    }else{
        console.log(`${i}는 홀수입니다.`)
    }
}

let i =100;
while(i>0){
    if(i%2 === 0){
        console.log(`${i}는 짝수입니다.`);
    }else{
        console.log(`${i}는 홀수입니다.`);
    }
    i = i-3;
}

const arr_1 = [];
const arr_2 = [0,1,2,3,4,5,6,7,8,9,10];
for(let i =0; i<100; i++){
    console.log(arr_1[i]);
}
// console.log(arr_1);
