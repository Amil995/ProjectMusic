const btn = document.querySelector(".burger");
const men = document.querySelector(".burgerlinks");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    men.classList.toggle("active");
} );

const close = document.querySelector(".close-button");
const modal = document.querySelector(".window");
const show = document.querySelector(".text");
const send = document.querySelector(".send-button");

show.addEventListener("click", () => {
    modal.style.display = "flex";
    console.log("works")
} );

close.addEventListener("click", () => {
   modal.style.display = "none";
});

send.addEventListener("click", () => {
    modal.style.display = "none";
});

function myFunction() {
    alert("Error 404 Not Found!!!");
  };

