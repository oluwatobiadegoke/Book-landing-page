// Selectors
const drop = document.querySelector("#ham");
const undrop = document.querySelector("#close");
const nav = document.querySelector("#drop-down");
const logo = document.querySelector("#ham-img");

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

// A copy of the logo image was made. The color of one was set to white while the other remains. The function below switches the two images as the media query changes

const navLogo = document.querySelector("#nav-logo");
const mediaQuery = window.matchMedia("(min-width: 768px)");

mediaQuery.addEventListener("change", function(e) {
    if(e.matches) {
        navLogo.src = "./images/logo-bookmark.svg";
    } else {
        navLogo.src = "./images/logo-bookmark-nav.svg";
    }
});

// Functionality for the frequently asked questions

const faqbtns = document.querySelectorAll(".faq-btn");
faqbtns.forEach(function(faqbtn) {
    faqbtn.addEventListener('click', function(e) {
        const quest = e.currentTarget.parentElement.parentElement;
        const svg = e.currentTarget.firstElementChild.firstElementChild;
        quest.classList.toggle('show-text');
        svg.classList.toggle('newsvg')
    });
});

// Funcitonality for email validation

const emailError = document.querySelector('.email-error');
const theinput = document.querySelector('.e-input');
const emailbtn = document.querySelector('.email-btn');

emailbtn.addEventListener('click', validateEmail);


function validateEmail(e) {
    e.preventDefault();
    const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  //rfc 5322 email validation regex
    if (theinput.value.match(mailFormat)) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        theinput.style.border = "2px solid  hsl(0, 94%, 66%)";
        theinput.style.backgroundImage = "url(./images/icon-error.svg)";
        theinput.style.backgroundRepeat = "no-repeat";
        theinput.style.backgroundPosition = "top 50% right 5%";
        setTimeout(function() {
            emailError.style.display = "none";
            theinput.style.border = "none"
            theinput.style.backgroundImage = "none";
        }, 3000)
        return false;
    }
}

