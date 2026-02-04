let email = document.getElementById("enterEmail")
let password = document.getElementById("enterPassword")
let submit = document.getElementById("submit")
submit.addEventListener("click" , (e)=>{
e.preventDefault()
if(email.value ===localStorage.getItem("email") && password.value === localStorage.getItem("password")){
    setTimeout(()=>{
        location.assign("index.html")
    },1000)
}else{
   alert("the password or the email is wrong") 
}
})
