// Selectors
const drop = document.querySelector("#ham");
const undrop = document.querySelector("#close");
const nav = document.querySelector("#drop-down");
const logo = document.querySelector("#ham-img")

drop.addEventListener('click', function() {
    nav.style.top = "0vh"
    drop.style.opacity = "0";
    logo.style.opacity = "0";
})

undrop.addEventListener('click', function() {
    nav.style.top = "-100vh"
    drop.style.opacity = "1";
    logo.style.opacity = "1";
})