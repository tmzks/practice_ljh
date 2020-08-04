// console.log('before timeout: ' + new Date());
// function f(){
//     console.log("after timeout:" + new Date());
// }
// setTimeout(f,60*1000);
// console.log('I happen after setTimeout!');
// console.log('me tool');

// setTimeout(function(){
//     console.log('after timeout: ' +new Date());
// },60*1000);

// const start = new Date();
// let i = 0;
// const intervalid = setInterval(() => {
//     let now = new Date();
//     if(now.getMinutes() !== start.getMinutes() || ++i>10)
//     return clearInterval(intervalid);
//     console.log(`${i}:${now}`);
// }, 5*1000);




// function countdown(){
//     let i;
//     console.log('countdown: ');
//     for(i = 5; i>=0; i--){
//         setTimeout(function(){
//             console.log(i ===0 ? "Go!":i);
//         },(5-i)*1000);
//     }
// }
// countdown();


// function countdown(){
//     console.log("countdown : ");
//     for(let i = 5; i>=0; i--){
//         setTimeout(()=>{
//             console.log(i ===0 ? "Go":i);
//         },(5-i)*1000);
//     }
// }
// countdown();


// const fs = require('fs');

// const fname = 'may_or_may_not_exist.txt';
// fs.readFile(fname,function(err,data){
//     if(err) return console.error(`error reading file ${fname}: ${fname}: ${err.message}`);
//     console.log(`${fname} contents: ${data}`);
// });

//프라미스
function countdown(seconds){
    return new Promise(function(resolve,reject){
        for(let i=seconds; i>=0; i--){
            setTimeout(function(){
                if(i===13) return reject(
                    new Error('fuck!!'));
                                    if(i>0) console.log(i+'...');
                else resolve(console.log('go!!'));
            },(seconds-i)*1000);
        }
    });
}
countdown(14);