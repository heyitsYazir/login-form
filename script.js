const gmail=document.querySelector("#gmail")
const password=document.querySelector("#password")
const btn=document.querySelector("#btn_next")
const result=document.querySelector("#result")
btn.addEventListener("click",function(){
    if(gmail.value==="example@gmail.com" && password.value==="github"){
        result.innerHTML="Logging in..."
        result.style.color="green"
        result.style.fontFamily="sans-serif"
    }
    else if(gmail.value==="" && password.value===""){
        result.textContent="please enter both email and password"
        result.style.color="goldenrod"
        result.style.fontFamily="sans-serif"
    }
    else{
        result.textContent="incorrect email or/and password"
        result.style.color="crimson"
        result.style.fontFamily="sans-serif"
    }
})
//gmail is example@gmail.com
//password is github