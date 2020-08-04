//원형 큐 
//front 0 rear 0 
//front 가 가리키고 있는 버킷은 항상 비어야 합니다. 

//is full 
//is empty 

class CircleQueueType{
    constructor(size){
        let front = 0;
        let rear = 0;
        const queue = [];
        const maxSize = size;

        this.enque = function(item){
            if(this.isFull()){
                console.log("queue가 가득 찼습니다.");
            }else{
                rear = (rear + 1) % maxSize;
                queue[rear] = item;
                console.log("아이템이 엔큐되었습니다.")
            }
        }

        this.deque = function(){
            if(this.isEmpty()){
                return "큐가 비었습니다.";
            }else{
                front = (front + 1) % maxSize;
                return queue[front];
            }
        }

        this.isFull = function(){
            return front === (rear + 1) % maxSize;
        }

        this.isEmpty = function(){
            return front === rear;
        }
    }
}

const queue = new CircleQueueType(5);
queue.enque(1) //front 0 rear 0  내부:1 => 1
queue.enque(2)//front 0 rear 1 내부 1 2 => 2
queue.enque(3)//front 0 rear 2 내부 1 2 3 => 3
queue.enque(4)//front 0 rear 3 내부 1 2 3 4 =>4
console.log(queue.deque());//front 0 rear 4 삭제 1 내부 2 3 4 => 1 
console.log(queue.deque());//front 1 rear 4 삭제 2 내부 3 4 => 2
console.log(queue.deque());//front 2 rear 4 삭제 3 내부 4 => 3
console.log(queue.deque());//front 3 rear 4 삭제 4 내부x =>4  
queue.enque(5);//front 4 rear 4 내부 5 => 0
queue.enque(6);//front 4 rear 0  내부 5 6 => 1
console.log(queue.deque());// front 4 rear 1 삭제 5 내부 6 =>0
console.log(queue.deque());//front 0 rear 1 삭제 6 내부x =>1
queue.enque(7);//front 1 rear 1 내부 7 =>2
queue.enque(8);//front 1 rear 2 내부 7 8 => 3
console.log(queue.deque());//front 1 rear 3 삭제 7 내부8 => 2
console.log(queue.deque());//front 2 rear 3 삭제 8 내부x => 3
console.log(queue.deque()); // 3 , 3 
queue.enque(9);//front 3 rear 3 내부 9 => 4
queue.enque(9);//front 3 rear 4 내부 9 9  => 0
