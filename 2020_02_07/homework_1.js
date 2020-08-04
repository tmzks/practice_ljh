// 과제

// 4의배수면 6의배수 8의배수
let numb = Math.floor(Math.random()* 10);
const array = [];
for(let i = 0; i<numb; i++){
    array[i] = Math.floor(Math.random() * 10);
}
console.log(array);
for(let i = array.length; i<array.length; i=i+2){
    if(array[i]%4 === 0){
        console.log(`${array[i]}는 4의 배수입니다.`);
    }else if(array[i]%6 === 0){
        console.log(`${array[i]}는 6의 배수입니다.`)
    }else if(array[i]%8 === 0){
        console.log(`${array[i]}는 8의 배수입니다.`);
    }else if(array[i] === 0){
        console.log(`${array[i]}는 0입니다.`);
    }else{
        console.log(`${array[i]}는 홀수입니다.`)
    }
}


// 홀수 3의배수 5의배수 7의 배수
let numb = Math.floor(Math.random()* 10);
const array = [];
for(let i = 0; i<numb; i++){
    array[i] = Math.floor(Math.random() * 10);
}
for(let i = array.length; i<array.length; i= i+3){
    if(array[i]%3 === 0){
        console.log(`${array[i]}는 3의 배수입니다.`);
    }else if(array[i]%5 === 0){
        console.log(`${array[i]}는 5의 배수입니다.`);
    }else if(array[i]%7 === 0){
        console.log(`${array[i]}는 7의 배수입니다.`);
    }else{
        console.log(`${array[i]}는 홀수의 배수가 아닙니다.`);
    }
}

// if문안에 if 뎁스2;
let dog = 3;
let bird = 2;
let fish = 1;

if(dog > bird){
    if(bird > fish){
        console.log(`${fish}수가 제일 작습니다.`);
    }else if(bird === fish){
        console.log(`${fish}수와 ${bird}수가 제일 작습니다.`);
    }else{
        console.log(`${bird}수가 제일 작습니다.`);
    }
}else if(bird === fish){
    if(bird > fish){
        console.log(`${fish}수가 제일 작습니다.`);
    }else if(bird === fish){
        console.log(`${dog}수와 ${bird}수와 ${fish}수가 제일 작습니다.`)
    }else{
        console.log(`${bird}수가 제일 작습니다.`)
    }
}else{
    if(fish>dog){
        console.log(`${bird}수가 제일 작습니다.`)
    }else if(fish === dog){
        console.log(`${bird}수가 제일 작습니다`)
    }else{
        console.log(`${dog}수가 제일 작습니다.`)
    }
}
// while과 do while
    // while(조건){
    //     조건에 만족할 동안 실행될 명령문
    // }

    // do{
    //     조건식이 참이면 실행할 명령문
    // }while(여기에는 조건식을 적는다.)

// for문에서 삼항연산자 
let numb = Math.floor(Math.random()* 10);
const array = [];
for(let i = 0; i<numb; i++){
    array[i] = Math.floor(Math.random() * 10);
}
console.log(array);

for(let i = 0; i<array.length; i++){
    array[i]%2 === 0 ? console.log(`${array[i]}는 짝수입니다.`) : array[i]%3 === 0 ? console.log(`${array[i]}값은 3의 배수입니다.`) : array[i]%5 === 0 ? console.log(`${array[i]}값은 5의 배수입니다.`) : console.log(`${array[i]}는 홀수입니다.`);
}
