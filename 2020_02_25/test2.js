let dog;
// const animal;

dog = "치와와"
const arr_1 = [];
arr_1[5] =10;

arr_1[10] = arr_1[5] + 20;

function dummyFunc(){
    arr_1[1] = 30;
}

function dummy2(){
    let a = "a";
}
dummyFunc();
console.log(arr_1[1]);

const array = [];
function dummyArray(arr){
    for(let i =10; i>=0; i--){
        arr[i] = i;
    }
}
dummyArray(array);
console.log(array);