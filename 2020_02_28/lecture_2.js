//함수로 클래스를 만드는 방법은 

//function키워드를 이용하는 방법 
//클래스 키워드를 이용하는 방법 

//생성자 함수를 호출하여 함수로 객체를 만드는 방법 

function Tv(model,display) {
    this.chanel = 7;
    this.model = model;
    this.display = display;   
    this.phoneModelPrint = function(){
        console.log(`모델명 : ${this.model}`);
    }
}

let apple = new Tv("apple","letina");
console.log(apple)
apple.phoneModelPrint();
function SmartPhone(model, number, manufacturer){
    

    return {
        model : model,
        number : number,
        manufacturer : manufacturer,
        myPhoneNumbPrint : function(){
            console.log(`내 전화번호 : ${this.number}`);
        }
    }
}

let iphone = SmartPhone("iphone 8","1544","foxcon")
iphone.myPhoneNumbPrint();
console.log(iphone);
