let ljw = {
    name:"ljw",
    age:26,
    hair : "short",
    shoutMyName : function(string){
        console.log(`${string}으로 소리치다.`);
    }
}

console.log(ljw.name);
ljw.shoutMyName("ljw");

function SmartPhone(model,agency,number){
    this.model = model;
    this.agency = agency;
    this.number = number;
    this.call = function(who){
        console.log(`${this.number}는 ${who}에게 전화를 거는중입니다`);
    }
}
let callPhone = new SmartPhone("note9","LGU+","01011112222");
console.log(callPhone);
callPhone.call("ljh");

function SmartPhone2(model,agency,number){
    return{
        model:model,
        agency : agency,
        number:number,
        call : function(who){
            console.log(`${this.number}는 ${who}에게 전화를 거는중입니다.`);
        }
    }
}
let smartCall = SmartPhone2("note9","lg","01000001111");
console.log(smartCall);
smartCall.call("kth");
smartCall.number = "01023232323";
smartCall.call("qweh");
smartCall.a = "123";
console.log(smartCall)


class SmartPhone4{
    constructor(model,agency,number){
        this.model = model;
        this.agency = agency;
        this.number = number;
        this.showinfo = function(){
            console.log(`${this.model}은 모델명 ${this.agency}는 통신사 ${this.number}는 본인번호`);
        }
    }
    call(who){
        console.log(`${this.number}는 ${who}에게 전화를 거는중입니다`);
    }
}
let smartCall2 = new SmartPhone4("samsung","lg","01033334444");
console.log(smartCall);
smartCall2.showinfo();
smartCall2.call("lll");
smartCall2.number = "01055556666";
console.log(smartCall2);