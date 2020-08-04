//콜바이 밸류 ?
//콜바이 밸류는 전달인자로 변수를 전달했을때 변수의 값을 매개변수로 복사하는
//평가 과정 , number ,string,null, undefined,boolean 
//원시 데이터 타입 

function plusOne(par) {
    //전달인자로 들어온 숫자 값에 10을 더해주는 함수;
    par += 10;
    console.log(par);
}

let dummyNumb = 10;
plusOne(dummyNumb);
console.log(dummyNumb);

//콜바이 레퍼런스 ?
//콜바이 레퍼런스는 전달인자로 들어온 변수의 주소값을 복사하여 매개변수로 사용하는 
//평가 과정 
//배열 , 객체 
function push(arr) {
    arr[0] = 10;
    console.log(arr);
}

const array = [];
push(array);
console.log(array);

//함수의 전달인자로 전달한 변수의 평가 

//익명 함수란 ? 이름이 없는 함수다 . 

//a변수를 선언해서 두개의 파라미터를 가진 sum함수를 통해 값을 변경하라 
//전역변수 지역변수 

//배열을 전달인자로 받아 모든 버킷의 값에 10씩 더 해주는 addTen함수를 만드세요 

//스코프, 컨텍스트 

//스코프란 
//현재 위치해 있는 함수나, 객체, 배열 내부에서 어떤 변수들에 접근 할 수 있는지에
//대한 범위 

//스코프의 분류
//함수가 정의될 때 참조하는 위치를 결정하는 정적스코프와 함수가 실행되고 참조하는 위치가
//변경되는 동적스코프 

//블록 내부와 외부 중 참조 위치를 결정하는 전역스코프와 지역 스코프로 나뉜다. 

//global scope 전역 스코프 
//전역스코프는 변수가 함수 바깥이나 {} 바깥에서 선언되었다면, 전역 스코프에 
//해당하게 된다. 


let name = "leejongho";
let age = 10;
function sayMyName(name) {
    console.log(name);
}
sayMyName(name);

function getBirthYear(age) {
    console.log(new Date().getFullYear() - age);
}
getBirthYear(age);

//지역 스코프 두개로 분류가 가능하다. 
// 1. 함수 스코프 
let string = "hi";
var dummy = "cool";
function helloworld(){
    let string = "hello world";
    var dummy = "boo";
    console.log(string);
}
//함수 내부에서 접근이 가능 변수의 범위를 함수 스코프라 한다. 
//함수에서 선언되었기 때문에 이 두변수는 함수 내부에서만 유효하게 되는 것이다. 
helloworld();
console.log(dummy);

function print(arr){
    for(let i = 0; i<arr.length;i++){
        console.log(arr[i]);
        const random = Math.floor(Math.random() *10);
    }

}

//2. 블럭 스코프 
// {} let 과 const 가 블럭스코프의 특징을 가지고 있다. 

{
    let string = "hi";
    const dummy = "who";
}

// 객체리터럴, 함수, for ,while,if, switch 등 

//변수 숨김과 스코프 중첩

function first(){
    let a = 10;
    function second(){

        function third(){
            let a = 10;
            function four(){
                console.log(a);
                
            }
            four()
        }
        third()
    }
    second()
}
first()