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
