


// class Stacktype{
//     constructor(size){
//         const maxSize = size;
//         const stack = []; 
//         let top = -1;
//         this.push = function(){

//             if(maxSize === top+1){
//                 console.log("스택이 끝까지 찼습니다.");
//                 return;
//             }

//             for(let i =0; i<arguments.length; i++){
//                 stack[++top] = arguments[i];
//             }
//         };
//         this.pop = function(){
//             return top < 0 ? '스택이비었습니다.' : stack[top--];
//         };
//         this.peek = function(){
//             return top<0 ? "스택이 비어있습니다." : stack[top];
//         };
//     }
// }

function Stacktype(size) {
    const maxSize = size;
    const stack = [];
    let top = -1;
    this.push = function () {
        for (let i = 0; i < arguments.length; i++) {
            if (maxSize === top + 1) {
                console.log("스택이 끝까지 찼습니다.");
                return
            }
            stack[++top] = arguments[i];
        }
    };
    this.pop = function () {
        return top < 0 ? "스택이 비어있습니다." : stack[top--];
    };
    this.peek = function () {
        return top < 0 ? "스택이 비어있습니다." : stack[top--];
    };
}


const stack = new Stacktype(4);
stack.push(10, 20, 30); // 10 20 30 top:2
console.log(stack.pop());  // 내부:10 20 삭제:30 top:1
stack.push(50) //10 20 50 top:2
stack.push(6); //10 20 50 6 top:3
console.log(stack.pop()); //내부:10 20 50 삭제:6 top:2
console.log(stack.pop()); //내부 10 20 삭제:50 top:1
stack.push(20); //10 20 20 top:2
stack.push(30, 40, 1); //10 20 20 30 top:3
stack.push(2); //10 20 20 30  top:4
console.log(stack.pop()); //10 20 20 삭제 30 top:2
