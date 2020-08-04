//객체를 생성할때 사용하는 함수로 constructor 일컷는다 .
//객체를 생성할때 사용하는 함수 90 

// const dummy_array = [10,3,5,6,78];
// dummy_array.sort(function(left,right){
//     return left - right;
// });
// console.log(dummy_array);


// const prime = 21.123123123;
// const primeResult = prime.toFixed(1); //number타입의 메서드 
// console.log(primeResult); // 그냥 적을 수 있는 것들은 굳이 변수로 만들지 말자
// console.log(prime.toFixed(1));

// let today = new Date();
// console.log(today);


class Machine{
    constructor(){
        this.start = function(){
            console.log(`turn on 시작합니다.`);
        }
    }
}

class SmartPhone extends Machine{
    constructor(model,number){
        let friendList = [];
        super();
        this.model = model;
        this.number =number;
        this.call = function(numb){
            console.log(`${numb}로 전화 거는 중`);
        };
        this.addFriend = function(friendNumb,friendname){
            friendList.push({number : friendNumb,name : friendname});
            console.log(friendList);
        };
        this.searchFriend = function(friendName){
            for(let i = 0; i<friendList.length; i++){
                if(friendList[i].name === friendName){
                    return friendList[i].number;
                }
            }
            return "찾는번호가 없습니다.";
        }
    }
}
const myPhone = new SmartPhone("samsung","01012345678");
console.log(myPhone);
myPhone.call("01011112222");
myPhone.start();
myPhone.addFriend("01099990000","ljw");
myPhone.addFriend("01012390000","ljh");
console.log(myPhone.searchFriend("ljhj"));
