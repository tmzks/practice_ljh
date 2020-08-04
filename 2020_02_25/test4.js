const sum = function(numb_1,numb_2){
    return numb_1 + numb_2;
}

const result = sum(10,20);
console.log(result)

const dummy = function func(numb){
    //함수내부에서 자신이 두가지 이름을 가지게 된다. 
    if(numb > 0){
        console.log('hi');
        func(numb-1);
    }
}


dummy(10) //
// func(3) // func

// function hello(){
//     function world(){
//         console.log('world');
//     } //이게 너무 중요하다. 보안적 이슈가 있는 함수라서 
//     world();
// }

function merryChrismas(name){
    console.log('merry');
    (
        function(word){
            console.log(word);
        }
    )(name);
    //즉시 실행 함수 IIFE
}

merryChrismas('jong ho');

//그럼 왜 이런 일을 하게 되는 것일까요 ? 

let initText;
// let numb = 20;
const textList = [10,20];
(
    function (numb){
        const textList = ['it is Odd Text' , 'it is even text'];
        if(numb % 2 ===0 ){
            initText = textList[0];
        }else{
            initText = textList[1];
        }
    }
)(20);

console.log(initText);
console.log(textList);