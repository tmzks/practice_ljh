function randomArray(emptyArray){
    const randomLenght = Math.floor(Math.random() * 10);
    // const emptyArray = [];
    for(let i = 0; i<randomLenght; i++){
        emptyArray[i] = Math.floor(Math.random() *10);
    }
    return emptyArray;
    
}

const newArray = randomArray([]);
// const newArray_2 = randomArray([]);
// console.log(newArray);


function showArray(array){
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        }
}
showArray(newArray);

function findOdd(array){
    for(let i =0; i < array.length; i++){
        if(array[i]%2 === 0){
            console.log(`이것은 짝수${array[i]}입니다.`);
        }else{
            console.log(`이것은 홀수${array[i]}입니다.`);
        }
    }
}
findOdd(newArray);
findOdd(newArray_2);

function hokeydokey(numb_1,numb_2){
   console.log(numb_1 * numb_2);
    
}
hokeydokey(10,20);

function makeStarTree(floor){
    for(let i = 0; i < floor; i++){
        let star = "";
        for(let u = 0; u<i+1; u++){
            star+="*";
        }
        console.log(star);
    }
}
makeStarTree(100);

function makeStarTree_2(floor){
    let starTree = "";
    for(let x =0; x<floor; x++){
        let star = "";
        for(let y = floor; y>x; y--){
            star += " ";
        }
        for(let z = 0; z<(2*x -1); z++){
            star += "*";
        }
        starTree += star + "\n";
    }
    console.log(starTree);
}
makeStarTree_2(10);




// 과제 역방향

// function makeStarTree_3(floor){
//     let starTree = "";
//     for(let x = floor; x>floor; x--){
//         let star = "";
//         for(let y = )
//     }
// }
let starTree = "";
for(let i = 10; i>0; i--){
    let star = "";

    for(let u = 0; u < i; u++){
        // star += " "; 
    }
    for(let v = 0; v < (2*i-1); v++){
        star +="*";
    }

    starTree += star + "\n";
}
console.log(starTree);

function makeStarTree_2(floor){
    let starTree = "";
    for(let i = floor; i<floor; i--){
        let star = "";
    
        for(let u = floor; u < i; u++){
            star += " "; 
        }
        for(let v = 0; v < (2*i-1); v++){
            star +="*";
        }
    
        starTree += star + "\n";
    }
    console.log(starTree);
}
makeStarTree_2(10);

// 시발 개어렵네시ㅏㅂ라

// let starTree = "";
function backStar(floor){
    let starTree = "";
    for(let i = (floor*2) -1; i>=1; i = i-2){
        for(let j = 1; j < ((floor*2)-i)/2; j++){
            starTree += " ";
        }
        for(let k = i; k>=1; k--){
            starTree += "*";
        }
       starTree += "\n";
    }
    console.log(starTree);
}
backStar(20);