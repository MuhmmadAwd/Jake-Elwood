let closeBtn = document.querySelector(".close-nav");
let openBtn = document.querySelector(".open-nav")
let navEl = document.querySelector("nav");

closeBtn.addEventListener("click",()=>{
    navEl.classList.remove('navigation-open');
    console.log("object");
})
openBtn.addEventListener("click",()=>{
    navEl.classList.add('navigation-open')
})