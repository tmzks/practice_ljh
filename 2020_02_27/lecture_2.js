//Date 객체 날짜와 시간에 대한 기능과 정보를 가지고 있는 객체 이다.

// let today = new Date(); //데이트 객체는 생성당시 시간과 날짜의 정보를 가지고 있다. 
// console.log(today);

// console.log(today.getFullYear()); //date객체가 가지고 있는 연도를 반환한다. 
// console.log(today.getMonth() +1); //월을 반환한다.
// console.log(today.getDate()); //일을 반환한다. 
// console.log(today.getDay()) //요일을 반환한다. 0 1 2 3 4 5 6 

// let day = new Date("2020-03-01");
// 0 1 2 3 4 5 6 7 8 9 10 11

// const newFormat = new Date().format("yyyy");
// console.log(newFormat);

setInterval(()=>{
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDay();

    let hour = today.getHours();
    let minutes = today.getMinutes();
    let second = today.getSeconds();

    let string = `${year}-${month}-${day} ${hour} : ${minutes} : ${second}`;
    console.log(string);
},1000)