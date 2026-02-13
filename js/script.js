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
hidecomputercart()
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
        name : "coco gold", 
        image : "url(images/4.jpg)",
        category : "brown" , 
        price : 100
    },
    {
        id : "product2",
        name : "zara blue" , 
        image : "url(images/5.jpg)",
        category : "blue" , 
        price : 100
    },
    {
        id : "product3",
        name : "lare gold" ,
        image : "url(images/6.jpg)", 
        category : "gold" , 
        price : 100
    },
    {
        id : "product4",
        name : "varsace" , 
        image : "url(images/7.jpg)",
        category : "blue" , 
        price : 100
    },
    {
        id : "product5",
        name : "coco yellow" , 
        image : "url(images/8.jpg)",
        category : "gold" , 
        price : 100
    },
    {
        id : "product6",
        name : "CoCo black", 
        image : "url(images/9.jpg)",
        category : "black" , 
        price : 100
    },
    {
        id : "product7",
        name : "Allure" , 
        image : "url(images/10.jpg)",
        category : "blue" , 
        price : 100
    },
    {
        id : "product8",
        name : "valantenu" , 
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
                        <button class="bg-cyan-600 hover:bg-red-600 w-[180px] text-center rounded-[10px] h-[30px] text-xl fontinput text-white addButton" data-product-id="${item.id}">Add to Cart </button>
                    </div>
                </div>
            </div>
        `
    })
    allproducts.innerHTML = y.join('');
}
 drawItems (products)







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

let choosingbycategory = function(){
    const query = searchInput.value.trim().toLowerCase()
    if(query === ""){
        drawItems(products)
        return
    }else if(products.some((item)=>item.category.toLowerCase().includes(query))){
        let filteredproductbycategory = products.filter((item)=>item.category.toLowerCase().includes(query))
        drawItems(filteredproductbycategory)
    }else{
        allproducts.innerHTML = `<p class="text-center text-2xl ">No products found</p>`
    }
}
let searchingproducts = function(){
    if(chooseCategory.value.trim().toLowerCase() === "search by product name"){
    choosingbycategory()
}else if(chooseCategory.value.trim().toLowerCase() === "search by product category"){
    choosingbycategory()
}

}
searchButton.addEventListener("click" , searchingproducts)


let counterCart  = document.querySelectorAll(".counter-cart")
let counterForCart = 0 ;
let addedprducts = document.querySelectorAll(".addedprducts")  // Changed to querySelectorAll to get ALL carts
// persistent array to collect HTML for all clicked products
let collectionsofclickdiproducts = []
let numberoftheproduct =1

// Use event delegation on the parent container

// the e.target   this indicates to the element that had been clicked

/////////////////////////////////////////////////////////////////////////////////////////////////


allproducts.addEventListener("click", function(e){
    if(localStorage.getItem("username")===""){
        location.assign("log-in.html")
    }
    else if(e.target.classList.contains("addButton")){
        // (function addedprductsbutton (){
        //     e.target.style.backgroundColor = "red"
        //     e.target.style.color = "white"
        //     e.target.textContent = "added to cart "
        // }) ()
        
        const productId = e.target.getAttribute("data-product-id");
        
        
        const product = products.filter(item => item.id === productId);
        
        if(product) {
         let producthtml = product.map((item)=>{
            return `<div class="h-[170px] w-full bg-neutral-400 opacity-90 mb-[17px]  px-[15px] py-[15px] flex flex-col justify-between">
                        <div class="flex justify-around">
                            <p class="text-2xl text-black  ">${item.name} <br> perfume</p>
                            <p class="text-2xl">price : <br>${item.price}</p>
                        </div>
                        <div class="flex justify-start mb-[10px]">
                            <div class="h-[45px] w-[45px] border-[1px] hover:bg-blue-500 text-center py-[5px] text-2xl ml-[10px] +">+</div>
                            <div class = "text-3xl text-center px-[3px] py-[3px] numofProduct">1</div>
                            <div class="h-[45px] w-[45px] border-[1px] hover:bg-red-500 text-center py-[5px] text-2xl ml-[10px] -">-</div>
                        </div>
                    </div>`;
         })
            
            collectionsofclickdiproducts.push(...producthtml)

            const nonrepeatedProducts = [...new Set(collectionsofclickdiproducts)];
            
            // Add to cart - add to ALL carts (phone and desktop)
            addedprducts.forEach(cart => {
                cart.innerHTML = nonrepeatedProducts.join("");
                
                // Add event listeners to the actual DOM elements
                cart.addEventListener("click", function(e) {
                    if(e.target.classList.contains("+")) {
                        const numofProductforplus = e.target.nextElementSibling;
                        numofProductforplus.textContent = parseInt(numofProductforplus.textContent) + 1;
                    }
                    else if(e.target.classList.contains("-")) {
                        const numofProductforminus = e.target.previousElementSibling;
                        let current = parseInt(numofProductforminus.textContent);
                        if(current > 1) numofProductforminus.textContent = current - 1;
                        else if(current ===1){
                            numofProductforminus.textContent =0
                            numofProductforminus.parentElement.parentElement.style.display = "none"
                        }
                    }
                    
                }
            
            );
            });
            
            // Update counter
            counterForCart += 1;
            counterCart.forEach(item => {
                item.textContent = counterForCart;
            });
        }
    }
})






//////////////////////////////////////////////////////////////////////////////////
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

 