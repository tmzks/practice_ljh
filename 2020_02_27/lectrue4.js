//클래스는 어떤 형태를 담고 있어, 객체를 복사하여 생성 할 떄 쓰이는 틀이다. 

//클래스를 이용하는 방법 
// 1. 함수를 이용하는 방법 (es5);

// 2. 클래스 키워드를 사용하는 방법 (es5이후);

class FishBread{
    constructor(소,반죽){
        // this. = "park"; //이 객체의 name 프로퍼티는 park이다. 
        // this.age = 0;
        this.소  = 소;
        this.반죽 = 반죽;
        this.dummy = function(){
            console.log(this.소);
        } //컨스트럭터 에서 함수를 쓰고 싶으면 this키워드를 이용해서 프로퍼티에
        //함수를 할당한다.
    }

    //컨스트럭터 바깥에서 함수를 작성할때는 function키워드 없이 함수를 정의하면된다.
    moracMorac(){
        console.log("김이 납니다.");
    }
}

let bread = new FishBread("피자","밀가루");
let anotherBread = new FishBread("팥","쌀가루");

console.log(anotherBread == bread); //false 
bread.moracMorac();
bread.dummy()
// bread.소 = "피자";
console.log(bread);
console.log(anotherBread)

