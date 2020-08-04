let a;

function sum(numb_1,numb_2){
    a = numb_1 + numb_2;
}
sum(10,20);
console.log(a);

const array =[10,20,30,40];
function addTen(arr){
    //파라메터를 이용하는 함수라면 파라메터 좀 신경쓰자 
    for(let i =0; i<arr.length; i++){
        //array += 10; 전역변수를 참조 했었음
        arr[i] +=10
    }
}
//함수를 실행 시키지 않고 선언 부분에서 지랄 했다 .
addTen(array);
console.log(array);