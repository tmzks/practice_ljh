
console.log(x);
var x = 10;
x;

// console.log로 찍었을 때 x라는 변수를 찾지 못햤기때문에
//undefined로 출력이된다

var x;
console.log(x);
x =10;
x;

var a;
var b;
var c;

console.log(a);
a =20;
b;
c;


function foo(){
    console.log("foo");
}
foo();




var a;
var b;
function foo2(){
    console.log("a");
}
foo2();
console.log(a);
a = 20;

b;
function first(){
    console.log("first");
}

//객체를 직접 만드는 방법

let smartPhone ={
    model : "apple",
    number : "01023295462",
    call : function(string){
        console.log(`${string}에게 전화거는중`);
    }
};

console.log(smartPhone.model);
console.log(smartPhone.number);
smartPhone.call("ljh");
smartPhone.number = "123456789";
console.log(smartPhone.number);

class FriendInfo{
    constructor(name,number){
        this.name = name;
        this.number = number;
    }
}


class SmartPhone{
    constructor(model,number,manufacturer){
        this.model = model;
        this.number = number;
        this.manufacturer = manufacturer;
        this.myPhoneNumberPrint = function(){
            console.log(`내전화번호는 ${this.number} 입니다`)
        };
        this.friends = [];
        this.showMyFriend = function(){
            for(let i =0; i<this.friends.length; i++){
                console.log(this.friends[i]);
            }
        };
        this.addFriends = function(friendNumb, friendName){
            let newFriend = new FriendInfo(friendNumb,friendName);
            this.friends[this.friends.length] = newFriend; 
        }
    }

    call(who){
        console.log(`${who}에게 전화를 겁니다.`)
    }

    changeMyPhoneNumber(number){
        this.number = number;
        console.log(this.number);
    }
}


let myphone = new SmartPhone("galaxy","01012341234","samsung");
console.log(myphone);
myphone.myPhoneNumberPrint();
console.log(myphone);
myphone.changeMyPhoneNumber("01011112222");
console.log(myphone);
myphone.call("010 2052 2525");
myphone.showMyFriend();
myphone.addFriends("01023223331","hsy");
myphone.addFriends("01023223332","kth");
myphone.addFriends("01023223333","ljh");
myphone.addFriends("01023223334","ljw");
myphone.showMyFriend();
