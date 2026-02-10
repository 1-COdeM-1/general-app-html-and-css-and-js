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




/////////////////////////////////////////////////////////////////////////////////////////

let products = [
    
    {
        id : "product1",
        name : "coco gold perfume", 
        image : "url(images/4.jpg)",
        category : "brown" , 
        price : 100
    },
    {
        id : "product2",
        name : "zara blue perfume" , 
        image : "url(images/5.jpg)",
        category : "blue" , 
        price : 100
    },
    {
        id : "product3",
        name : "lare gold perfume" ,
        image : "url(images/6.jpg)", 
        category : "gold" , 
        price : 100
    },
    {
        id : "product4",
        name : "varsace perfume" , 
        image : "url(images/7.jpg)",
        category : "blue" , 
        price : 100
    },
    {
        id : "product5",
        name : "coco yellow perfume" , 
        image : "url(images/8.jpg)",
        category : "gold" , 
        price : 100
    },
    {
        id : "product6",
        name : "CoCo black perfume ", 
        image : "url(images/9.jpg)",
        category : "black" , 
        price : 100
    },
    {
        id : "product7",
        name : "Allure perfume" , 
        image : "url(images/10.jpg)",
        category : "blue" , 
        price : 100
    },
    {
        id : "product8",
        name : "valantenu perfume" , 
        image : "url(images/11.jpg)",
        category : "red" , 
        price : 100
    }
]




let allproducts = document.querySelector(".allproducts")

let drawItems = function(theThing){
    let y = theThing.map((item) => {
       
      return  `
        <div class=" w-11/12 mx-auto vsm:w-[400px] sm:w-[500px]  md:w-[475px] min-920px:w-[405px] h-[550px]     rounded-[25px] border-2 border-pink-400 hover:scale-[1.03] hover:border-pink-500   product ${item.id}">
                <div class="w-11/12 mx-auto flex flex-col h-[540px] mt-[10px] justify-around">
                    <div class="bg-[${item.image}] bg-cover bg-center h-[280px] w-full rounded-[20px]"></div>
                    <div class="flex flex-col justify-around items-center h-[260px] w-full" >
                        <h1 class="fontinput text-2xl text-center  " >${item.name}
                            <p class="text-xl opacity-60">category :${item.category}</p>
                        </h1>
                        <div class="rounded-full h-[120px] w-[120px] border-2 border-pink-500 mx-auto text-center text-3xl py-[40px] ">${item.price} $</div>
                        <button class="bg-cyan-600 hover:bg-red-600 w-[180px] text-center rounded-[10px] h-[30px] text-xl fontinput text-white addButton">Add to Cart </button>
                    </div>
                </div>
            </div>
        `
    })
    allproducts.innerHTML = y.join('');
}
 drawItems (products)



let allClickButtons = document.querySelectorAll(".addButton")
let counterCart  = document.querySelectorAll(".counter-cart")
let counterForCart = 0 ;
let clickaddButton = function(){
    counterForCart +=1
    counterCart.forEach(item =>{
        item.textContent = counterForCart
    })
}
allClickButtons.forEach(item =>{
   item.addEventListener("click" , clickaddButton)
})




const chooseCategory = document.getElementById("chooseCategory")
let searchButton = document.getElementById("searchButton")
let searchInput = document.getElementById("searchInput")
let productclass = document.querySelector(".product")
let choosingbyName = function(){
const query = searchInput.value.trim().toLowerCase()
    if(query === ""){
        drawItems(products)
        return
    }
    const filteredproductnames = products.filter(item => item.name.toLowerCase().includes(query))
    if(filteredproductnames.length > 0){
        drawItems(filteredproductnames)
    } else {
        allproducts.innerHTML = `<p class="text-center text-2xl ">No products found</p>`
    }
}
if(chooseCategory.value.trim().toLowerCase() === "search by product name"){
    searchButton.addEventListener("click" , choosingbyName)
}



/////////////////////////////////////////////////////////////////////////////////////////////////


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

 