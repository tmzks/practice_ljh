//자료구조 
//개발자로 성공하기 위한 기조 지식들 
//네트워크, 알고리즘, 자료구조, 운영체제, OOP, 컴퓨터 구조

//동기 비동기 스택과 큐라는 자료구조의 이해가 필요하다. 

//자료구조란 우리가 알고 있는 배열과 객체를 이용하여 자료를 효율적으로 관리하기 위해서 만든 추상적인
//구조입니다. 

//스택, 큐 , 연결리스트 , 덱, 그래프 , 트리, 해쉬테이블, 버퍼 등 
//스택 과 큐 

//스택 접시를 쌓아놓은 형태의 자료구조이다. 

//입력 -> 출력 -> 수정 -> 삭제 
//클래스 
//push() 인자로 들어온 값들을 stack의 마지막에 넣어주는 기능 
//pop() 마지막에 들어온 엘리먼트를 반환하는 메서드
//top <- 마지막에 들어온 엘리먼트의 인덱스 번호를 저장하는 프로퍼티  
// [10, 20, 30]//top = 2 // pop -> top == 1 
// [10,20,40] //[top+1] = newElement; 

function StackType(){
    const stack = [];
    let top = -1;
    this.push = (element) => {
        stack[++top] = element;
    }

    this.pop = ()=>{
        //0미만으로 떨어졌을떄 실행 하면 안된다. 
        return top < 0 ? "스택이 비어있습니다." : stack[top--];
    }


    this.peek = ()=>{
        return top < 0 ? "스택이 비어있습니다." : stack[top];
    }
}

const stack = new StackType();
stack.push(10); // 10 top -> 0
stack.push(20); // 10 20 top -> 1
stack.push(30); // 10 20 30 top -> 2
console.log(stack.pop()); // 30 top -> 1
stack.push(50) // 10 20 50 top -> 2
stack.push(60) // 10 20 50 60 top -> 3
stack.push(70) // 10 20 50 60 70 top -> 4
console.log(stack.pop()) // 70 top -> 3 
console.log(stack.pop()); // 60 top -> 2  
console.log(stack.pop());  // 50 top -> 1 
console.log(stack.pop());  // 20 top -> 0 

//네이버 -> 카페 -> 중고나라 
//네이버 -> 카페 -> 중고나라 



class StackType{
    constructor(){
        const stack = [];
        let top = -1;
        this.push = function(){
            for(let i = 0; i < arguments.length; i++){
                stack[++top] = arguments[i];
            }
        };
        this.pop = function(){
            return top < 0 ? "스택이 비어있습니다." : stack[top--];
        };
        this.peek = function(){
            return top < 0 ? "스택이 비어있습니다." : stack[top];
        };
    }
}

const stack = new StackType();
stack.push(10,20,30,40,50);
console.log(stack.pop());
