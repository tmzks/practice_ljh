
// function SmartPhone(model,number,manufacturer){
//     this.model = model;
//     this.number = number;
//     this.manufacturer = manufacturer;
//     this.myPhoneNumberPrint = function(){
//         console.log(`내 전화번호는 : ${this.number}입니다.`);
//     }
//     this.call = function(who){
//         console.log(`${who}에게 전화를 걸어봅시다.`);
//     };
//     this.friends = [];
//     this.showFriend = function(){
//         for(let i =0; i<this.friends.length; i++){
//             console.log(this.friends[i]);
//         }
//     }
//     function FriendInfo(name,number){
//         this.name = name;
//         this.number = number;
//     }
//     this.addFriends = function(friendsNumb,friendsName){
//         var newFriends = new FriendInfo(friendsNumb,friendsName);
//         this.friends[this.friends.length] = newFriends;
//     }
// };

// let newPhone = new SmartPhone("note", "01011112222", "samsung");
// console.log(newPhone);
// newPhone.myPhoneNumberPrint();
// console.log(newPhone);
// newPhone.call("김태현시바럼");
// console.log(newPhone)

// newPhone.addFriends("01011111111","김태현시바럼1");
// newPhone.addFriends("01011111112","김태현시바럼2");
// newPhone.addFriends("01011111113","김태현시바럼3");
// newPhone.addFriends("01011111114","김태현시바럼4");

// newPhone.showFriend();



function SmartPhone(model,number,manufacturer){

    function FriendInfo(name,number){
        return {
            name : name,
            number:number
        }
    }
    return{
        model:model,
        number:number,
        manufacturer : manufacturer,
        myPhoneNumberPrint : function(){
            console.log(`${this.number}는 내 전화번호입니다.`);
        },
        changeMyPhoneNumber : function(number){
            this.number = number;
            console.log(this.number);
        },
        call : function(who){
            console.log(`${who}에게 전화를 걸어봅시다.`);
        },
        friend : [],
        showFriend :function(){
            for(let i = 0; i<this.friend.length; i++){
                console.log(this.friend[i]);
            }
        },
        addFriends :function(friendsNumb,friendsName){
            var newFriends = FriendInfo(friendsNumb,friendsName);
            this.friend[this.friend.length] = newFriends;
        }
    }
}

let galaxy = SmartPhone("note9","112","samsung");
galaxy.myPhoneNumberPrint();
console.log(galaxy);
galaxy.changeMyPhoneNumber("01099999999");
console.log(galaxy);
galaxy.addFriends("01000000000","llll");
galaxy.addFriends("01000000001","llll2");
galaxy.addFriends("01000000002","llll3");
galaxy.showFriend();