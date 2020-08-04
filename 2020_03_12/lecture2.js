//queue 

//queue 
//롤 큐를 돌리다 오버워치 큐가 잡혔다. 

//fifo first in first out 

// linier queue , circle queue 
//먼저 온 녀석이 먼저 나가는 구조

//컨베이어 벨트 , 줄 

//front rear 

//enque rear가 가리키고 있는 뒤 버킷에 엘리먼트를 추가하는 메서드 
//deque front가 가리키고 있는 녀석의 버킷의 엘리먼트르 제거하고 반환하는 메서드

class QueueType {
    constructor(count) {
        const queue = [];
        const maxCount = count;
        let front = -1;
        let rear = -1;


        this.enque = function (item) {
            if(isFull()){
                console.log("내부에 물건이 가득 찼습니다.");
            }else{
                queue[++rear] = item;
            }
            
        }

        this.deque = function () {
            if (!isEmpty()) {
                return queue[++front];
            } else {
                return "queue가 비어있습니다.";
            }

        }
        function isFull(){
            return rear +1 === maxCount;
        }

        function isEmpty() {
            return front === rear ;
        }
    }
}

const que = new QueueType(6)
console.log(que.deque()) //front -1 real -1 삭제x 
que.enque(4);// front -1 real -1 내부 4 => 0
que.enque(3);//front -1 real 0 내부 4 3 => 1
console.log(que.deque()) //front -1 real 1 삭제 4 내부 3 => 0
console.log(que.deque()) //front 0 real 1 삭세 3 내부 x => 1
que.enque(2); //front 1 real 1 내부 2 =>2
que.enque(5);  //front 1 real 2 내부 2 5 =>3
que.enque(6); //front 1 real 3 내부 2 5 6 =>4
que.enque(7);  //front 1 real 4 내부 2 5 6 7=> 5 
console.log(que.deque()) //front 1 rear 5 삭제 2 내부 5 6 7 => 2
console.log(que.deque()) //front 2 rear 5 삭제 5 soqn 6 7  => 3
console.log(que.deque()) //front 3 rear 5 삭제 6 내부 7 => 4
que.enque(6); //front 4 rear 5 큐가 가득찼습니다.
console.log(que.deque()) //front 4 rear 5 삭세 7 내부x  => 5
//front 5 rear 5 //큐가 비었ㅅ,ㅂ니디.
