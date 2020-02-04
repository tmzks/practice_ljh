// let ten = 10;
// let eight = 8;
// if(ten > 9 && eight === "8"){
//     console.log("10은 9보다 크고 eight는 8과 값과 타입이 일치합니다.");
// }else{
//     console.log("10은 9보다 크지만 eight는 8과 값과 타입이 일치하지 않습니다.");
// }

// let numb_1 = 10;
// let numb_2 = 9;

// if(numb_1 < numb_2){
//     console.log(`${numb_1}은 ${numb_2}보다 작습니다`)
// }else if(numb_1 === numb_2){
//     console.log(`${numb_1}과 ${numb_2}는 같습니다.`)
// }else{
//     console.log(`${numb_1}은 ${numb_2}보다 큽니다`)
// }


let numb_1 = 10;
let numb_2 = 9;
let numb_3 = 11;

if(numb_1 < numb_2){
    if(numb_2 < numb_3){
        console.log(`${numb_3}가 가장 큽니다`);
    }else if(numb_2 === numb_3){
        console.log(`${numb_2}랑 ${numb_3}가 제일 큽니다.`);
    }
    else{
        console.log(`${numb_2}가 가장 큽니다`);
        
    }
}else if(numb_1 === numb_2){
    if(numb_2 < numb_3){
        console.log(`${numb_3}가 가장 큽니다`)
        
    }else if(numb_2 === numb_3){
        console.log(`${numb_2}와 ${numb_3}와 ${numb_1}이 제일 큽니다.`)
    }
    else{
        console.log(`${numb_2}랑 ${numb_1}가 가장 큽니다`)
    }
}else{
    if(numb_1 < numb_3){
        console.log(`${numb_3}가 가장 큽니다 `)
        
    }else{
        console.log(`${numb_1}가 가장 큽니다`)

    }
    
}
// if(numb_1 < numb_2){
//     if(numb_2 >numb_3){
//         console.log(`${numb_2}는 ${numb_3}보다 큽니다.`)
//     }else{
//         console.log(`${numb_2}는 ${numb_3}`)
//     }
// }else if(numb_1 === numb_2){
//     console.log(`${numb_1}과 ${numb_2}는 같습니다.`)
// }else{
//     console.log(`${numb_3}가 가장 큽니다.`)
// }
 

let one = 2;
let two = 2;
let three = 3;

if(one > two){
    if(two > three){
        console.log(`${three}가 가장 작습니다.`);
    }else if(two === three){
        console.log(`${two}와 ${three}가 가장작습니다.`);
    }else{
        console.log(`${two}가 가장 작습니다.`)
    }
}else if(two === three){
    if(two > three){
        console.log(`${three}가 가장작습니다.`);
    }else if(two === three){
        console.log(`${one}과 ${two}와 ${three}가 가장 작습니다.`)
    }else{
        console.log(`${two}가 가장 작습니다`)
    }
}else{
    if(three > one){
        console.log(`${two}가 가장작습니다`);
    }else{
        console.log(`${one}이 가장 작습니다`);
    }
}


let one = 1;
let two = 2;
let three = 3;

if(one > two){
    two > three ? console.log(`${three}가 가장 작습니다.`) : two === three ? console.log(`${two}와 ${three}가 가장 작습니다.`) : console.log(`${two}가 가장 작습니다.`);  
    // if(two > three){
    //     console.log(`${three}가 가장 작습니다.`);
    // }else if(two === three){
    //     console.log(`${two}와 ${three}가 가장작습니다.`);
    // }else{
    //     console.log(`${two}가 가장 작습니다.`)
    // }
}else if(two === three){
    two > three ? console.log(`${three}가 가장 작습니다.`) : two === three ? console.log(`${one}과 ${two}와 ${three}가 가장 작습니다.`) : console.log(`${two}가 가장 작습니다.`);
    // if(two > three){
    //     console.log(`${three}가 가장작습니다.`);
    // }else if(two === three){
    //     console.log(`${one}과 ${two}와 ${three}가 가장 작습니다.`)
    // }else{
    //     console.log(`${two}가 가장 작습니다`)
    // }
}else{
    three > one ? console.log(`${one}가 가장 작습니다.`) : console.log(`${three}가 가장 작습니다.`);
    // if(three > one){
    //     console.log(`${two}가 가장작습니다`);
    // }else{
    //     console.log(`${one}이 가장 작습니다`);
    // }
}

let bool = true;
switch (bool) {
    case true:
        console.log("bool변수는 true입니다.");
        break;

    default:
        console.log("bool변수는 false입니다.");
        break;
}

let coffee = "latte";

switch (coffee) {
    case "americano":
        console.log("아메라카노 출력");
        break;
    case "latte":
        console.log("라떼는 말이야..");
        break;
    default:
        console.log("카푸치노 출력");
        break;
}

// 삼항연산자 개잘쓰는법

const XX = 10;
const XY = 9;

let human = {
    sex: XX > XY ? "girl" : "boy"
}

// 과제

// 제어문 싹다 정리, 연산자도
// if댑스2개 switch 삼항연산자를 사용해서 예시하나씩만들어오기 설명할수있을 정도로
// 반복문 공부해서 정리하기