//객체 리터럴을 변수에 직접 할당하여
//컴퓨터를 표현해보세요. 3가지 프로퍼티와 2가지 메서드를 만들어 
//보세요 

//User객체를 함수를 이용해서 만들어 보세요. User객체는 3가지 전달
//인자를 받는데, 아이디, 비밀번호,주소를 받아 프로퍼티에 할당하고
//또한 해당 객체의 비밀번호가 맞다면 주소를 출력하는 메서드를 만들어
//보세요 캡슐화 (x) 생성자 함수 , 객체리터럴 반환방식 2개로 

//위의 User함수를 클래스문법으로 작성하세요 . 

//함수로 만든 User클래스에서 모든 프로퍼티를 캡슐화 하고, 비밀번호를 인자로 받아 만약 
//해당객체의 비밀번호와 인자로 받은 비밀번호가 일치한다면 주소를 return 하는 
//getMyAddress 메서드를 만들어 보세요 .

//setMyPassword(prev,set)

// let computer ={
//     name:"apple",
//     price:1000000,
//     leader:"tim cook",
//     clickTheMouse:function(){
//         console.log("마우스를 클릭했습니다.");
//     },
//     breakMyMonitor:function(){
//         console.log("컴터존나느리네");
//     }
// }
// console.log(computer.name);
// console.log(computer.price);
// console.log(computer.leader);
// computer.clickTheMouse();
// computer.breakMyMonitor();



function User_1(id,pw,add){
    let userId = id;
    let userPw = pw;
    let userAdd = add;
    this.getMyAddress=function(password){
        if(password === userPw){
            return userAdd;
        }else{
            return "틀렸으니 주소안알려줌";
        }
    };
    this.setMyPassword=function(prev,set){
        if(prev === userPw){
            userPw = set;
            console.log("비밀번호가 변경되었음");
        }else{
            console.log("비밀번호가 틀렸습니다.");
        }
    }

}
let callUser = new User_1("ljw",1234,"대구");
console.log(callUser);
callUser.setMyPassword(1234,1111);

// callUser.pw = 10;
console.log(callUser.getMyAddress(1111));

// function User_2(id,pw,add){
//     let userId = id;
//     let userPw = pw;
//     let userAdd = add;
//     return{
//         getMyAddress:function(password){
//             if(password === userPw){
//                 return userAdd;
//             }else{
//                 return "시바러마";
//             }
//         }
//     }
// }
// let callUser_2 = User_2("kwk",1111,"부산");
// console.log(callUser_2);
// console.log(callUser_2.getMyAddress(1111));


// class User_3{
//     constructor(id,pw,add){
//         let userId = id;
//         let userPw = pw;
//         let userAdd = add;
//         this.getMyAddress = function(password){
//             if(password === userPw){
//                 return userAdd;
//             }else{
//                 return "ㅅㅂ..";
//             }
//         };
//         this.setMyPassword = function(prev,set){
//             if(prev === userPw){
//                 userPw = set;
//                 console.log("비밀번호가 변경되었습니다.");
//             }else{
//                 console.log("비밀번호가 다릅니다.")
//             }
//         }
//     }
// }
// let callUser_3 = new User_3("이종호",1234,"머구");
// console.log(callUser_3);
// console.log(callUser_3.getMyAddress(1234)); 
// callUser_3.setMyPassword(1234,1111);
// console.log(callUser_3.getMyAddress(1234));


//주의해야할점
//1. 변수명을 일관성있게 적어라
//2. 위치파악을 잘해라
//3. 원하는 결과가 나오지 않았다면 관련변수를 console.log로 다 찍어봐라.