// let add = function sum(numb_1,numb_2){
//     return numb_1 + numb_2;
// }
// console.log(add(10,20)); //30
// console.log(sum(10,20)); //error

// (
//     function(){

//     }
// )()

const sum = (numb_1,numb_2) => {
    return numb_1 + numb_2
};

const result = sum(20,25);
console.log(result);

const array = [1,2,3,4,5,6,7,8,9];

function print(arr, asc){
    if(asc === 1){
        for(let i =0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }else{
        for(let i = arr.length -1; i>=0; i--){
            console.log(arr[i]);
        }
    }
    
}
print(array,0);

const dummyFunc_1 = (name)=>{
    console.log(`${name}아 안녕`);
}
dummyFunc_1("ljw");   

const dummyFunc_2 = name =>{
    console.log(`${name}아 안녕`);
}
dummyFunc_2("ljw");

const dummyFunc_3 = name=> console.log(`${name}아 안녕`);
dummyFunc_3("ljh");

