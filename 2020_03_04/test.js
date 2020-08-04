//프로토 타입 

//생성자 함수 클래스 로 강아지를 표현 해보세요 . 프로퍼티 2개 메서드 1개 
//이를 통해 인스턴스 2개 만드세요 

//클래스문법으로 Tv를 표현하는데 chanel이라는 프로퍼티는 캡슐화되어있다. 
// upChanel은 현재 chanel이라는 프로퍼티를 1증가 시키고, 몇번으로 이동했는지
//알려준다.

//downChanel또한 1감소 시키고 몇번으로 이동했는지 알려준다.
//presentChanel 메서드는  현재 몇 채널인지 알려준다. 
//moveChanel 메서드는 전달인자로 받은 숫자값으로 채널 프로퍼티를 변경한다. 
//chanel의 기본값은 7이다. 





// function Dog(name,age){
//     this.name = name;
//     this.age = age;
//     this.shakeTail = function(){
//         console.log('꼬리를 흔들다');
//     }
// }
// let newDog = new Dog("김태현",4);
// let getDog = new Dog("lll",40);
// console.log(newDog);
// console.log(newDog.name);
// console.log(newDog.age);
// newDog.shakeTail();
// console.log(getDog);


// class Tv{
//     constructor(){
//         let chanel = 7;
//         this.upchanel = function(){
//             chanel += 1;
//             console.log(`채널은 ${chanel}로 이동했습니다.`);
//         }
//         this.downchanel = function(){
//             chanel -= 1;
//             console.log(`채널은 ${chanel}로 이동했습니다.`);
//         }
//         this.presentChanel = function(){
//             console.log(`현재채널은 ${chanel}입니다.`);
//         }
//         this.moveChanel = function(numb){
//             chanel = numb;
//             console.log(chanel)
//         }
//     }
// }

// const apple = new Tv();
// apple.upchanel();
// apple.moveChanel(10);

function Tv(){
    let chanel = 7;
    
    this.upChanel = function(){
        chanel +=1;
        console.log(`${chanel}로 변경되었습니다.`);
    };
    this.downChanel = function(){
        chanel -=1;
        console.log(`${chanel}로 변경되었습니다.`);
    };
    this.presentChanel =function(){
        console.log(`현재 채널은${chanel} 입니다.`);
    };
    this.moveChanel = function(numb){
        chanel = numb;//넘브에 채널을 할당한다. 
        //채널이 전달받은 값으로 할당된다. 
        console.log(chanel);
    }
}

let changeChanel = new Tv(12);
console.log(changeChanel);
changeChanel.upChanel();
changeChanel.moveChanel(10);
changeChanel.presentChanel();