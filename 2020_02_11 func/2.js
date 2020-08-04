async function login(){
    const userInfo = await loginRequest();
    const addArticle = await findArticle(userInfo);
    const addedMail =await findMail(addArticle);
    console.log(addedMail);
}
login().catch((err)=>{
    console.log(err);
});
// 동기적으로 사용하기위해서