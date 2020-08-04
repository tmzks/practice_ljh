let seedMoney = 5000;
let money;

//배팅
Betting = function(){
    input = prompt('얼마를 거시겠습니까?');

    if((seedMoney - parseInt(input))<0){
        alert('남은 돈보다 많은금액을 걸 수 없습니다.');
        Betting();
    }else{
        log = input + ' 원을 배팅했습니다.';
        console.log('남은돈은'+ left_money + '원 입니다.');
    }
}
slot_number = [];
slot_arr = [0,1,2,3,4,5,6,7];

roll = function(){
    for(let i = 0; i<3; i++){
        let turn = (Math.random()*10);

        if(turn<8){
            turn = Math.floor(turn);
        }else{
            turn = Math.floor(turn/8);
        }
        console.log('몇 번을 굴릴까요? ' + turn+' 번');

        slot_number.push(slot_arr[turn]);
        console.log(slot_number);
    }
    log = log + '나온숫자는' + slot_number[0] + slot_number[1] + slot_number[2] + '입니다.';

}
play = function(){
    Betting();
    roll();
    console.log(log);
}