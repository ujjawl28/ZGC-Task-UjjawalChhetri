var count = 0;
var carCount = document.querySelector('.cartCount');

function increaseCount(){
    count += 1;
    carCount.innerText = count;
    alert("Item successfully added to cart");
}

let menu = document.querySelector(".hambargar");
let header = document.querySelector("header");
let colseBtn = document.querySelector(".closeBtn");
menu.addEventListener("click",()=>{
    header.classList.add("header__active");
    menu.style.display = "none";
})
colseBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    header.classList.remove("header__active");
    menu.style.display = "block";
})
