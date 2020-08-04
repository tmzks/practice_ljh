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