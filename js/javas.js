const btn = document.querySelector(".burger");
const men = document.querySelector(".burgerlinks");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    men.classList.toggle("active");
} );

const cards = document.querySelector(".cards");
const header = document.querySelector(".header");
const close = document.querySelector(".close-button");
const modal = document.querySelector(".window");
const show = document.querySelector(".text");
const send = document.querySelector(".send-button");
const modal1 = document.querySelector(".modal");


show.addEventListener("click", () => {
    modal.style.display = "flex";
    console.log("works");
    cards.classList.toggle("active");
    header.classList.toggle("active");
    modal1.classList.toggle("active");
} );


close.addEventListener("click", () => {
   modal.style.display = "none";
   cards.classList.toggle("close");
   header.classList.toggle("close");
   modal1.classList.toggle("close");
});



send.addEventListener("click", () => {
    modal.style.display = "none";
    cards.classList.toggle("close");
    header.classList.toggle("close");
    modal1.classList.toggle("close");
});

function myFunction() {
    alert("Error 404 Not Found!!!");
  };

