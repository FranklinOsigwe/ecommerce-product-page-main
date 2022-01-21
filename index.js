const menu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".menu");
const btnClose = document.querySelector(".close");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const cartInfo = document.querySelector(".cart-info");
const cartbtn = document.querySelector(".cart-group");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const productCounter = document.querySelector(".counter");
const gallery = document.querySelectorAll(".pic");
const banner = document.querySelector(".banner");

let productCounterValue = 1;

hamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  menu.classList.add("hidden");
});

cartbtn.addEventListener("click", () => {
  cartInfo.classList.toggle("hidden");
});

minusBtn.addEventListener("click", () => {
  setProductCounter(-1);
});

plusBtn.addEventListener("click", () => {
  setProductCounter(1);
});

function setProductCounter(value) {
  if (productCounterValue + value > 0) {
    productCounterValue += value;
    productCounter.innerHTML = productCounterValue;
  }
  // console.log(value);
}

//------------------thumbnail section----------------
gallery.forEach((img) => {
  img.addEventListener("click", onThumbClick);
});

//to clear active state
 function onThumbClick(event) {
  gallery.forEach((img) => {
     img.classList.remove("active");
  });
  //set active thumbnail
  event.target.parentElement.classList.add("active");
  //set img action
   banner.src = event.target.src.replace(".thumb-gallary", "");
 }

//---------next amd previous buttons
nextBtn.addEventListener("click", btnNext);
previousBtn.addEventListener("click", btnPrevious);

function btnNext() {
let imageIndex = getCurrentImageIndex();
imageIndex++
if(imageIndex > 4){
  imageIndex = 1;
}
setMoreImage()
}

function btnPrevious() {

}

