
let dummy = ()=>{

} //재사용을 위해서는 함수표현식으로 작성

// 단축 문법이 3가지 있다. 

//function이라는 글자가 없다. 
const f1 = () => { 
    console.log('hello');
    console.log('world');
}
f1()

const f2 = name =>{
    console.log(name);
}

f2('lee');

const f3 = () => console.log("hello world");
f3()

let name;
//  
(
    function(string){
        name = string;
        console.log(string);
    }
)("ljw");
//전달인자로 들어온 스트링 값으로 name변수에 재할당 하는 함수 

let age;
//전달인자로 들어온 숫자 값으로 age변수에 재할당 하는 iffe내부에 에로우 펑션으로  만들어보라 
(
    numb => age = numb
)(10);

console.log(age);

// console.log(name);