// 버블정렬


// function bubbleSort(array){
//     for(let i =0; i<array.length; i++){
//         let swap;
//         for(let j=0; j<array.length-1-i; j++){
//             if(array[j]>array[j + 1]){
//                 swap = array[j];

//             }
//             if(!swap){
//                 break;
//             }
//         }
//         return array;
//     }
// }
// console.log(bubbleSort([5,4,3,2,1]));

function bubbleSort(array){
    for(let i= 0; i<array.length; i++){
        let swap;
        for(let j = 0; j<array.length -1-i; j++){
            if(array[j] > array[j + 1]){
                swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap; 
            }
        }
        console.log(`${i}회전 : ${array}`);
        if(!swap){
            break;
        }
    }
    return array;
}
console.log(bubbleSort([5,4,3,2,1]));


    



//삽입정렬
function insertSort(array){
    for(let i =1; i<array.length; i++){
        let cur = array[i];
        let left = i-1;

        while(left>=0 && array[left]>cur){
            array[left + 1] = array[left];
            left--;
        }
        array[left +1] = cur;
        console.log(`${i}회전 : ${array}`);
    }
    return array;
}
console.log(insertSort([5,4,3,2,1]));


//선택정렬
function selectionSort(array){
    for(let i =0; i<array.length; i++ ){
        let minIndex = i;
        for(let j =i+1; j<array.length; j++){
            if(array[minIndex] > array[j]){
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let swap = array[minIndex];
            array[minIndex] = array[i];
            array[i] = swap;
            }
            console.log(`${i}회전: ${array}`);
            }
            return array;
            }
            console.log(selectionSort([5, 4, 3, 2, 1]));
            
            
//오름차순 내림차순

var sort = [33,22,11,55,44];
var temp = 0,
        i = 0,
        j;

for(; i < sort.length-1; i++) {
    for(j = i + 1; j < sort.length; j++) {
        if(sort[i] > sort[j]) {
            temp = sort[i]; // 큰 값을 잠시 임시변수에 저장
            sort[i] = sort[j]; // 작은 값을 앞으로 옮김
            sort[j] = temp; // 임시변수에 넣어둔 것을 뒤로 옮김
        }
    }
}

// 0번째와 그 이후로 비교후 정렬
// 1번째와 그 이후로 비교후 정렬...
console.log(sort);


