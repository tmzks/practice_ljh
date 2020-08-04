//상속 
//객체지향언어(oop Oriented object Programing language);
//상속과 다형성이다. 상속은 inheritance es5이전에는 클래스 문법 x 
//prototype 상속을 진행했고 꽤나 내용이 복잡해요. 
//클래스형 -> 함수형(프로토타입) 

//상속 : 부모의 특징까지 물려 받는 것을 상속이라 한다. 
//톰과제리 ? 
//불독 -> 아버지 불독에 대한 특성을 받았다. 
//불독 -> 개의 특성을 물려받았다. -> 포유류
//상속은 불필요한 중복코드를 없애주고 객체지향 프로그래밍을 할 수 있도록 도와준다. 

//클래스
//클래스는 호이스팅이 되지 않는다. 
class Dog{
    constructor(name,sex){
        this.gender = sex;
        this.name = name;
        this.legs = 4;
        this.molar = "good";
        this.bow = function(){
            console.log("월 월");
        }
    }
    pooping(){
        console.log("poofing now");
    }
    eat(){
        console.log("주둥이를 앞 세워 먹이를 먹는다.");
    }
}


class Dalmasian extends Dog{
    // constructor(name,sex){
    //     super(name,sex); //슈퍼 함수는 상속받는 클래스의 생성자 함수를 말한다. 
    //     this.size = "big";
    //     this.skin = "polka dots";
    //     this.tail = "short";
    // }

    sayMyName(){
        console.log(`hello my name is ${this.name}`);
    }
}


let dummy_1 = new Dalmasian("toi","man");
dummy_1.pooping();
console.log(dummy_1)


//KoreanShortHair 
//프로퍼티로 color : 전달인자로 받은 색상 
//hair : "short",
//name : 전달인자로 받은 이름


//cat
//프로퍼티로 jump : "good",
//gender : 전달인자로 받은 성별
//메서드 meow : console.log("미야우")


//mamal
//pregnant : 새끼를 배다를 출력하는 함수 
class Mamal{
    pregnant(){
        console.log("새끼를 배다");
    }
}


class Cat extends Mamal{
    constructor(name,gender){
        super();
        this.jump = "good";
        this.gender = gender;
        this.meow = function(){
            console.log("미아우");
        }
        this.name = name;
    }
}

class KoreanShortHair extends Cat{
    constructor(name,gender){
        super(name,gender);
        this.color = "red";
        this.hair = "short";
    }
}

let newCat = new KoreanShortHair("김태현","man");
newCat.meow();
console.log(newCat);
newCat.pregnant();