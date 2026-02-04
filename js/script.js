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


// localStorage.setItem ("Mahmoud" , "01155162065")
// console.log(localStorage.getItem("Mahmoud"))
// localStorage.removeItem("Mahmoud")

// localStorage.clear() 
// the last code clear all the data in the local storage 


