let username = document.getElementById("enterName")
let email = document.getElementById("enterEmail")
let password = document.getElementById("enterPassword")
let conPassword = document.getElementById("reenterPassword")
let phonNumber = document.getElementById("enterPhoneNumber")
let submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    localStorage.setItem("username" , username.value.trim() )
    localStorage.setItem("email" , email.value.trim())
    if(phonNumber.value!=""){
        localStorage.setItem("phonenumber" , phonNumber.value)
    }
    if(password.value == conPassword.value){
        localStorage.setItem("password" , password.value)
    }else {
        alert("rewrite your password right in the'confirm your password' field ")
    }
    
    setTimeout(()=>{
        window.location.assign("log-in.html")
    }, 1000)
    
    
    
})
