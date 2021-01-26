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

// Tabs selectors

const buttons = document.querySelectorAll(".tab-btn");
const thetab = document.querySelector(".thetab");
const contents = document.querySelectorAll(".s-two");

thetab.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if(id) {
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active")
        });
        contents.forEach(function(content) {
            content.classList.remove("active")
        })
        const x = document.getElementById(id);
        x.classList.add("active")
    }
})