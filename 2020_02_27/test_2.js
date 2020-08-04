let today = new Date();
console.log(today);

let nowDay = today.getDay(); //오늘 요일을 반환한다.
// console.log(nowDay);
switch(nowDay){
    case 0:
        console.log("오늘은 일요일입니다.");
        break;
    case 1:
        console.log("오늘은 월요일입니다.");
        break;
    case 2:
        console.log("오늘은 화요일입니다.");
        break;
    case 3:
        console.log("오늘은 수요일입니다.");
        break;
    case 4:
        console.log("오늘은 목요일입니다.");
        break;
    case 5:
        console.log("오늘은 금요일입니다.");
        break;
    case 6:
        console.log("오늘은 토요일입니다.");
        break;
}