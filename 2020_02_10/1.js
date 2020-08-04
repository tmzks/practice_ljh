// 정방향 트리반쪽
for(let i = 0; i<5; i++){
    let star = "";
    for(let u = 0; u<i+1; u++){
        star += "*";
    }
    console.log(star);
}
// 역방향 트리반쪽
for(let i = 5; i>0; i--){
    let star = "";
    for(let u = 0; u < i; u++){
        star += "*"; 
    }
    console.log(star);
}

// 트리트리트리
let starTree = "";
for(let i = 0; i < 10; i++){
    let star = "";
    for(let u = 10; u>i; u--){
        star += " "; //띄워쓰는게 중요함
    }
    for(let v = 0; v < (2*i-1); v++){
        star +="*";
    }
    starTree += star + "\n";
}
console.log(starTree);



function makeStarTree_2(floor){
    let starTree = "";
    for(let x =0; x<floor; x++){
        let star = "";
        for(let y = floor; y>x; y--){
            star += " ";
        }
        for(let z = 0; z<(2*x -1); z++){
            star += "*";
        }
        starTree += star + "\n";
    }
    console.log(starTree);
}
makeStarTree_2(10);





console.log("    *");
console.log("   * *");
console.log("  * * *");
console.log(" * * * *");
console.log("* * * * *");





