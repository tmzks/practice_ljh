function QueueType(count){
    const queue = [];
    const maxCount = count;
    let front = -1;
    let rear = -1;
    this.enque = function(item){
        if(isFull()){
            console.log('내부에 물건이 가득찼습니다.');
        }else{
            queue[++rear] = item;
        }
    }
    this.deque = function(){
        if(!isEmpty()){
            return queue[++frint];
        }else{
            return "queue가 비어있습니다.";
        }
    }
    function isFull(){
        return rear + 1 === maxCount;
    }
    function isEmpty(){
        return front === rear;
    }
}

