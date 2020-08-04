//함수를 이용해서 스마트폰 클래스를 만들어 보라 
//프로퍼티는 제조사, 기종, 전화번호 (캡슐화 x)
//메서드는 전달인자로 들어온 번호로 전화를 거는 call메서드 


function SmartPhone(manufacturer,model,number){
    this.manufacturer = manufacturer;
    this.model = model;
    this.number = number;
    this.call =function(numb){
        console.log(`${numb}한테 전화를 거는중입니다.`);
    }
}
const myPhone = new SmartPhone("samsung","galaxyNote","01011111234");
console.log(myPhone);
myPhone.call("01044445555");


//클래스 문법을 이용해서 위의 스마트폰 클래스르 만들어 보시요 
//캡슐화를 이용하여,  model,phonenumb프로퍼티를 숨겨라

class SmartPhone{
    constructor(manufacturer,model,number){
        let phoneModel = model;
        let phoneNumb = number;
        this.manufacturer = manufacturer;
        this.call =function(numb){
            console.log(`${numb}한테 전화를 거는중입니다.`);
        }
    }
}
const myPhone = new SmartPhone("samsung","galaxyNote","01011111234");
console.log(myPhone);

//this 키워드란 무엇인가 ? 
//클래스 내에서 자기 자신(인스턴스)을 뜻하는 키워드다 . 

//상속이란 무엇인가 ? 
//부모클래스 프로퍼티와 메서드를 그대로 자식클래스에서 사용할 수 있게 하는 것 . 

//상속을 이용하여 포유류, 고양이, 러시안블루 
//클래스 문법
//러시안 블루는 프로퍼티가 하나 hairColor : "blue";
//고양이 메서드 하나 meow() => 야옹 출력 
//포유류 임신 pragnent() => 새끼를 배다 출력 
class Mamal{
    pragnant(){
        console.log('새끼를 베다');
    }
}

class Cat extends Mamal{
    meow(){
        console.log('야옹');
    }
}

class BlueEyeCat extends Cat{
    constructor(){
        super();
        this.hairColor = "blue";
    }
}

const mamalCute = new BlueEyeCat();
mamalCute.meow();
mamalCute.pragnant();