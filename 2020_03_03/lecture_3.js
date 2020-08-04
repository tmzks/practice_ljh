//다중 상속 믹스인 
//extends라는 키워드를 이용해서 상속을 받았어요 

//달마시안 <- 개 <- 포유류 


// 나 <- 인간 <- 포유류 
// 나 <- 엄마 , 아빠 <- 남성 , 여성 <- 인간 <- 포유류

class Man{
    constructor(){
        this.생식기 = "자지"
    }
}

class Woman{
    constructor(){
        this.생식기 = "보지"
    }
}

//다중 상속은  병렬적으로 두개 이상의 클래스의 특성을 상속 받는 것을 말한다. 
// 다중 상속은 프로그래밍 언어로 표현하기 난감한 부분이 존재 한다. 

//믹스인 방법을 통해서 해결하였다. 
//동시 상속 받는 클래스를 필요한 기능들만 가진 클래스를 만들어 다중 상속 처럼 보이게 하는 기법 

//플라잉 카 . <-자동차(운전,핸들), 비행기(운전,핸들)

//운전하는 기능을 가진 클래스
//날수있는 기능을 가진 클래스 
//플라잉카 (핸들, 엔진)

const flyMixIN = (superClass) =>{
    return class extends superClass{
        fly(){
            console.log("it's fly");
        }
        tiltTheFuselage(){
            console.log("기울이는 중");
        }
    }
}

const driveMixIn = (superClass)=>{
    return class extends superClass{
        drive(){
            console.log("it's drive");
        }
        leftDriveTurn(){
            console.log("좌회전");
        }
        rightDriveTurn(){
            console.log("우회전");
        }
    }
}

class Machine{
    makeEnergyFromFule(){
        console.log(`${this.fuel}로써 엔진을 구동 시키는 중입니다.`);
    }
}

class FlingCar extends flyMixIN(driveMixIn(Machine)){
    constructor(fuel){
        super();
        this.fuel = fuel;
    }
    turnOnSwitch(){
        console.log("시동을 킵니다.");
        this.tiltTheFuselage();
    }
}

const zero = new FlingCar("gas");
zero.turnOnSwitch();
zero.drive();
zero.fly();

