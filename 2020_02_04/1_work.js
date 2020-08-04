// if댑스2개 switch 삼항연산자를 사용해서 예시하나씩만들어오기 설명할수있을 정도로

// if문

// 제일 작은 값 출력
const one = 1;
const two = 2;
const three = 3;

if(two<one){
    if(three<two){
        console.log(`${three}값이 제일 작습니다.`);
    }else if(three === two){
        console.log(`${three}와${two}값이 제일 작습니다.`);
    }else{
        console.log(`${two}값이 제일 작습니다.`);
    }
}else if(two === three){
    if(three<two){
        console.log(`${three}가 가장 작습니다.`);
    }else if(two === three){
        console.log(`${two}값과 ${three}값이 제일 작습니다.`);
    }else{
        console.log(`${two}값이 제일작습니다.`);
    }
}else{
    if(one < three){
        console.log(`${one}이 제일 작습니다.`);
    }else{
        console.log(`${three}가 가장 작습니다.`);
    }
}


// 제일 큰 값 출력
let a = 1;
let b = 2;
let c = 3;

if(a<b){
    if(b < c){
        console.log(`${c}값이 제일 큽니다.`);
    }else if(b === c){
        console.log(`${b}값과 ${c}값이 제일 큽니다.`);
    }else{
        console.log(`${b}값이 제일 큽니다.`);
    }
}else if(a === b){
    if(b < c){
        console.log(`${c}값이 제일 큽니다.`);
    }else if(b === c){
        console.log(`${a}와 ${b}와 ${c} 값이 제일 큽니다.`);
    }else{
        console.log(`${a}값과 ${b}값이 제일 큽니다.`);
    }
}else{
    if(a < c){
        console.log(`${c}값이 제일 큽니다.`);
    }else{
        console.log(`${a}값이 제일 큽니다.`)
    }
}