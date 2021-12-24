const menu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".menu");
const btnClose = document.querySelector(".close");
const previousBtn = document.querySelector("previous-btn");
const nextBtn = document.querySelector("next-btn");
const cartInfo = document.querySelector(".cart-info");
const cartbtn = document.querySelector(".cart-group");
let deletebtn = document.querySelector("#delete-logo");
const msgEmpty = document.querySelector(".msg-empty");

// deletebtn.addEventListener("click", () => {
//   msgEmpty.classList.remove("hidden");
//   cartinfo.classList.add("hidden");
// });

hamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  menu.classList.add("hidden");
});

cartbtn.addEventListener("click", () => {
  cartInfo.classList.toggle("hidden");
});

previousBtn.addEventListener("click", () => {});

nextBtn.addEventListener("click", () => {});
