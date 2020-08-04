
// let aniaml = "dog";
// switch (aniaml) {
//     case "dog": 
//         console.log("이것은 개입니다"")
//         break;
//     case "cat":
//         console.log("이것은 고양이입니다");
//         break;
//     default:
//         console.log(`동물이 아닙니다.`)

//         break;
// }

// let bird = "참새";
// let a = "이것은 ";

// switch(bird){
//     case "참새":
//         console.log(`${a} 참새입니다.`);
//         break;
//     case "비둘기":
//         console.log(`${a} 는 비둘기 입니다.`);
//         break;
//     default :
//     console.log(`${a}는 아무새도 아닙니다.`);
//     break;

// };

// if(bird === "참새"){
//     console.log(`${a} 참새입니다.`);
// }else if(bird ==="비둘기"){
//     console.log(`${a} 비둘기입니다.`);
// }else{
//     console.log(`${a} 새가 아닙니다.`);
// }

// bird === "참새" ? console.log(`${a} 참새입니다.`): bird ==="비둘기" ? console.log(`${a} 비둘기입니다.`): console.log(`${a} 새가아입니다.`); 

// let bird = "참새";
// let aniaml = "개";

// if(bird === "참새" && aniaml === "개"){
//     console.log("bird변수는 참새이고 dog변수는 개입니다");
// }

// if(bird === "참새" || aniaml ==="강아지"){
//     console.log("bird변수는 참새이거나 aniaml변수는 강아지입니다.")
// }

// if(!(9>10)){
//     console.log("9는 10보다 큽니다.");
// }

// if(!(10>20) && !(12<1) || !(32===31)){
//     console.log("10은 20보다 크고 32와 31은 같습니다.");
// }

// let numb = Math.floor(Math.random() * 10);
// let numb_2 = Math.floor(Math.random() * 100);
// console.log(numb);



// if(numb%2 === 0){
//     console.log(`${numb}값은 짝수입니다.`)
// }else{
//     console.log(`${numb}값은 홀수입니다.`)
// }

// if(numb%3 === 0 ){
//     console.log(`${numb}값은 3의 배수입니다`)
// }else{
//     console.log(`${numb}값은 3의 배수가 아닙니다.`)
// }


// if(numb%2 === 0 && numb_2%2  === 0){
//     console.log(`${numb}와 ${numb_2}는 짝수입니다.`)
// }

// if(numb%2 ===0 || numb_2%2 === 0){
//     console.log(`${numb}값과 ${numb_2}값 중 짝수가 있습니다.`);
// }

// if(numb%3 === 0 || numb_2%3 ===0){
//     console.log(`${numb}와 ${numb_2}값중 홀수가 존재합니다.`);

// }

// if((numb+numb_2)%2 === 0){
//     console.log(`${numb}와 ${numb_2}의 더한값은 짝수입니다`);
// }else{
//     console.log(`${numb}와 ${numb_2}의 더한값은 홀수입니다`);
// }

// if((numb + numb_2)%3 === 0 ){
//     console.log(`${numb}와 ${numb_2}를 더한 값 ${numb + numb_2}은 : 3의 배수입니다.`);
// }else if((numb + numb_2)%5 === 0){
//     console.log(`${numb}와 ${numb_2}를 더한 값 ${numb + numb_2}은 : 5의 배수입니다.`);
// }

// const array = [];
// array[0] = 10;
// array[5] = 20;
// array[3] = "Hello world";
// array[1] = {
//     eye:2
// }
// array[1].eye = [];
// array[1].eye[0] = {
//     nose:1
// }
// array[1].eye[1] = {
//     nose:2
// }
// if(array[1].eye[0].nose >= array[1].eye[1].nose){
//     console.log("0번째 있는 값이 더 큽니다.");
//     console.log(array[1].eye[0].nose);
// }else{
//     console.log("1번째 있는 값이 더 큽니다.");
//     console.log(array[1].eye[1].nose);
// }
let numb = Math.floor(Math.random() * 10);
const array = [];

for(let i = 0; i<numb; i++){
    array[i] = Math.floor(Math.random() * 10);
}

for(let i = 0; i<array.length; i++){
    if(array[i]%2 === 0 ){
        console.log(`${array[i]}는 짝수입니다.`)
    }else if(array[i]%3 === 0){
        console.log(`${array[i]}값은 3의 배수입니다.`);
    }else if(array[i]%5 === 0){
        console.log(`${array[i]}값은 5의 배수입니다.`);
    }else{
        console.log(`${array[i]}는 홀수입니다.`)
    }
    // console.log(array[i]);
}
for(let i = array.length-1; i >=0; i--){
    if(array[i]%2 === 0){
        console.log(`${array[i]}는 짝수입니다.`);
    }else if(array[i]%3 === 0){
        console.log(`${array[i]}는 3의 배수입니다.`)
    }else{
        console.log(`${array[i]}는 홀수입니다.`)
    }
    // console.log(array[i]);
}

for(let i = 0; i<array.length; i = i+2){
    if(array[i]%2 === 0 ){
        console.log(`${array[i]}는 짝수입니다.`)
    }else if(array[i]%3 === 0){
        console.log(`${array[i]}값은 3의 배수입니다.`);
    }else if(array[i]%5 === 0){
        console.log(`${array[i]}값은 5의 배수입니다.`);
    }else{
        console.log(`${array[i]}는 홀수입니다.`)
    }
}

// 과제
// 4의배수면 6의배수 8의배수
// 홀수 3의배수 5의배수 7의 배수
// if문안에 if 뎁스2;
// while과 do while

// for문에서 삼항연산자 