const navComputer = document.querySelector(".nav-computer")

let scrollhandler = ()=>{
    let wWindow = window.innerWidth
    if (scrollY > 50 && wWindow > 900) {
        
        navComputer.classList.add("opacity-80")
    }
    else if(wWindow <=900 && scrollY >80){
        navComputer.classList.add("opacity-80" , "top-[10px]")
    }
    else{
        navComputer.classList.remove("opacity-80", "top-[10px]" )
    }
}

window.addEventListener("scroll" ,scrollhandler)



const registration = document.querySelector(".registration")
const registrationComputerUl = document.querySelector(".registration-computer-ul")
const registphoneul = document.querySelector(".regist-phone-ul")
const registphone = document.querySelector(".regist-phone")
const registphoneSpan = document.querySelector(".registphoneSpan")
let textLogOutphone = document.querySelector(".regist-phone-p-logout")
let registrationspanname = document.querySelector(".registration-span-name")
let registrationplogout =document.querySelector(".registration-p-logout")
let computerCart = document.querySelector(".computer-cart")
let phoneCart = document.querySelector(".phone-cart")
if(localStorage.getItem("username") !== ""){
    (function (){
        registrationComputerUl.style.display = "none";
        registphoneul.style.display = "none";
        registrationspanname.textContent = localStorage.getItem("username")
        registration.style.fontSize = "20px"
        registration.style.textAlign = "center"
        registphoneSpan.textContent = localStorage.getItem("username")
        // registphoneSpan.style.fontSize = "20px"
        registphoneSpan.style.textAlign = "center"
        
        registrationplogout.style.display = "block"

        registphone.style.display = "flex"
        registphone.style.position = "relative"
        registphone.style.flexDirection = "column"
        textLogOutphone.style.display = "block"

        computerCart.style.display = "block"

        phoneCart.style.display = "block"
    })()
}

let hidecomputercart = ()=>{
    wWindow = window.innerWidth
    if(wWindow < 900){
        computerCart.style.display = "none"
    }else{
        (function () {
            if(localStorage.getItem("username") !== "") return computerCart.style.display = "block"
            else return computerCart.style.display = "none"
        }) ()
    }
}
window.addEventListener("resize" , hidecomputercart)

textLogOutphone.addEventListener("click" , ()=>{
    localStorage.clear()
    location.reload()
    localStorage.setItem("username","")
    textLogOutphone.style.display = "none"
})
registrationplogout.addEventListener("click" , ()=>{
    localStorage.clear()
    location.reload()
    localStorage.setItem("username","")
    registrationplogout.style.display = "none"
})

// localStorage.setItem ("Mahmoud" , "01155162065")
// console.log(localStorage.getItem("Mahmoud"))
// localStorage.removeItem("Mahmoud")

// localStorage.clear() 
// the last code clear all the data in the local storage 

tailwind.config = {
  theme: {
    extend : {
        screens: {
      'vsm' : '400px',
      'min-920px' : '920px' ,
      'min-1400px' : '1400px'
    },
    }
  }
}
