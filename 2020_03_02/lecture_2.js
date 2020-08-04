// class SmartPhone{
//     constructor(modelId,manufacturer,owner,password){
//         this.modelId = modelId;
//         this.manufacturer = manufacturer;
//         this.owner = owner;
//         this.password = password;
//     }

//     call(who){
//         console.log(`ring ring calling to ${who}`);
//     }

//     adminMode(password){
//         if(this.password === password){
//             console.log("관리자 모드가 실행됬습니다.");
//         }else{
//             console.log("비밀번호가 다릅니다.");
//         }
//     }
// }

// const apple = new SmartPhone("iphone pro","apple","lee","gozld");
// apple.call("010 9090 9922");
// apple.adminMode("gozld");
// apple.adminMode("g1");

// console.log(apple);
// apple.password= "1221";
// apple.adminMode("1221");
//보여선 안되는 것들이 보이고, 프로퍼티를 쉽게 변경 할 수 있다. 
//보안이 전혀 안되어 있다. 

//외부로 노출되어있고, 외부에서 변경이 가능한 프로퍼티와 메서드를 퍼블릭하다 라고 한다.
//c#이나 java같은 언어들은 프로퍼티의 접근을 제한 할 수 있도록 private
//한 특성을 메서드와 프로퍼티에 줄 수 있다. 

//캡슐화는 객체 내부에 있는 프로퍼티를 숨기고, 접근을 제한 하는 방법이다. 

//객체를 함수선언으로 만들어 캡슐화를 하는 방법 부터 알아 보도록 하겠습니다. 

function User(id,pw,phoneNumber){
    let password = pw;
    let phoneNumb = phoneNumber;
    let myArticle = [];
    // 객체 내부에 프라이베이트한 변수를 get과 set메서드를 이용해서
    //접근 하는 방식을 모듈 패턴이라고 한다. 
    return {
        id : id,
        setPassword : function(prev,set){
            if(prev === password){
                password = set;
                console.log("비밀번호가 변경되었습니다.");
            }else{
                console.log("비밀번호가 다릅니다.");
            }
        },getPhoneNumb : function(pw){
            if(pw === password){
                return phoneNumb;
            }else{
                return "비밀번호가 다릅니다."
            }
        },write : function(title){
            myArticle.push(title);
        },getMyArticle : function(){
            const clone = myArticle.slice();
            return clone;
        }
    }
}

let lee = User("zhtmah","gozld","010232323");
console.log(lee);
lee.setPassword("gozld","12");
lee.setPassword("gozld","123");
console.log(lee.getPhoneNumb('12'));
lee.write("러닝 리액트");
lee.write("러닝 자바스크립트");
console.log(lee.getMyArticle());
const hackingRoot = lee.getMyArticle();
hackingRoot[0] = "해킹 당함";
hackingRoot[1] = "해킹 당함";
console.log(lee.getMyArticle());



// function User(id, pw, phoneNumber) {
//     let password = pw;
//     let phoneNumb = phoneNumber;
//     let myArticle = [];
//     // 객체 내부에 프라이베이트한 변수를 get과 set메서드를 이용해서
//     //접근 하는 방식을 모듈 패턴이라고 한다. 

//     this.id = id;
//     this.setPassword = function (prev, set) {
//         if (prev === password) {
//             password = set;
//             console.log("비밀번호가 변경되었습니다.");
//         } else {
//             console.log("비밀번호가 다릅니다.");
//         }
//     }
//     this.getPhoneNumb = function (pw) {
//         if (pw === password) {
//             return phoneNumb;
//         } else {
//             return "비밀번호가 다릅니다."
//         }
//     }
//     this.write = function (title) {
//         myArticle.push(title);
//     }
//     this.getMyArticle = function () {
//         const clone = myArticle.slice();
//         return clone;
//     }
// }

// const newUser = new User("zhtmah1","go","1544");
// console.log(newUser);

// function Article(){
//     const articleNumb;
//     const articlePassword;
//     const articleOwner;
//     const articleText;
//     const see;


//     return {
//         getArticleNumb : function(){
//             return articleNumb;
//         }       
//     }
// }

// function addComment(articleNumb,string){
//     console.log(articleNumb + "로" +string+"을 전송");
// }

// const newArticle = Article();
// const articleList = [newArticle];

// addComment(newArticle.getArticleNumb(),"hello");

class User{
    constructor(){
        let apple = "apple";
        this.setApple = function(keword){
            apple = keword;
        }
        this.getApple = function(){
            return apple;
        }
    }
    func(){
        console.log(apple);
    }
}

const lee = new User();
console.log(lee.getApple());
lee.setApple("pee")
console.log(lee.getApple());
// lee.func()
let SimpleDate = (function(){
    let yearKey = Symbol();
    let monthKey = Symbol();
    let dayKey = Symbol();
    return function SimleDate(year,month,day){
        this[yearKey] = year;
        this[monthKey] = month;
        this[dayKey] = day;
    
        this.getDay = function(){
            return this[dayKey];
        }
    } 
    }
)();

const newDate = new SimpleDate(2020,03,02);
console.log(newDate);
console.log(newDate.getDay());