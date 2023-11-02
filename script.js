const navBar = document.querySelector(".navBarUi")
const hamburger = document.querySelector(".hamburger");

let navOpen = false

function toggleNav() {
    console.log("hello world");
    if (navOpen === false) {
        navBar.classList= "showNav";
        hamburger.classList="fixedBurger"
        navOpen = true
    }
    else {
    navBar.classList = "navBarUi";
    hamburger.classList="hamburger"
    navOpen=false;
    }
}

const lightDarkToggle = document.querySelector("#btnTheme")

function themeToggle() {
    const body = document.querySelector("body");
    if (lightDarkToggle.innerHTML === "Light") {
        lightDarkToggle.innerHTML = "Dark";
    } else {
        lightDarkToggle.innerHTML = "Light";
    }
    lightDarkToggle.classList.toggle("theme_switch")
    body.classList.toggle("darkMode");
}
