//강아지라는 객체를 만들어 보세요 . 
//강아지 이름을 이진욱이라고 한뒤 메서드 bow라는 것을 만들어 위진욱 ! 하고 짖게 
//메서드도 ㅈ만들어 보세요 pee "졸졸졸 "

// let dog = {
//     name: "ljw",
//     bow : function(){
//         console.log("ljw!!!")
//     },
//     pee: function(){
//         console.log("졸졸졸");
//     }
// }//직접 객체를 만들었다. 변수에서 직접 객체를 꾸민 것이다. 

// console.log(dog.name);
// dog.bow();
// dog.pee();

//kimTaehyon 
// 프로퍼티 여자친구, 이름, 건강상태
// 메서드 여자 만나고 싶다 라고 출력하는 발정 

// let kimTaehyon = {
//     girfriend: null, //프로퍼티명 : 값 
//     name: "kimTaehyon", //프로퍼티에 값이 할당이 끝나면 ,를 찍는다. 
//     health : "death",
//     heWantGf:function(){ //메서드 키와 함수의 쌍으로 이루어져있다. 
//         console.log("he want sex!!");
//     }
// }
// console.log(kimTaehyon.girfriend); // .접근 연산자 
// console.log(kimTaehyon.name);
// console.log(kimTaehyon.health);
// kimTaehyon.heWantGf(); //

//클래스를 이용해서 dog이라는 클래스를 만드는데, 프로퍼티는 이름, 품종, 성별
//전달인자로 받아 이름, 품종, 성별을 처음부터 설정된 채로 만들어주세요 
//bow 라는 메서드를 만들어 월월 이라고 출력하는 메서드를 만드시고,
//컨스트럭터 바깥에서 roll 이라는 메서드를 만들어 구르는 중 이라고 춢력 하는 
//메서드를 만들어보세요 

class Dog{
    //생성자 함수로 들어온 전달인자를 관리하는 함수이다. 
    constructor(name,kind,gender){
        this.name = name; // 
        this.kind = kind; //
        this.gender = gender;//
        this.bow = function(){
            console.log(`bow bow`);
        };
        this.sayMyName = function(){
            console.log(this.name);
        }
    }
    roll(){
        console.log(`roll roll!!`);
    }
    showMyGender(){
        console.log(this.gender);
    }
}
// new 키워드 생성자 
let dog_2 = new Dog("ljw","bulldog","man");
let dog_3 = new Dog("김태현","dalmasian","girl");
console.log(dog_2);
dog_2.bow();
dog_2.roll();
console.log(dog_3);

dog_2.sayMyName();
dog_2.showMyGender();
dog_3.sayMyName();
dog_3.showMyGender();

