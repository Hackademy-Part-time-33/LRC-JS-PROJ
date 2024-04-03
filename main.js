let myNavbar = document.querySelector("#myNavbar");
let links = document.querySelectorAll(".nav-link");
let icon = document.querySelector(".navbar-toggler-icon");
let burger = document.querySelector(".btn-burger");

window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;
    if (scrolled > 0) {
        myNavbar.classList.add("nav-blur");
        icon.style.color = "var(--white)";

        links.forEach((links) => {
            links.style.color = "var(--white)";

        })

    } else {
        myNavbar.classList.remove("nav-blur");
        icon.style.color = "var(--white)";

        links.forEach((links) => {
            links.style.color = "var(--black)";

        })
    }
});


//CHiamata asincrona per aumento numero lead //

let firstNum = document.querySelector("#firstNum");
let secondNum = document.querySelector("#secondNum");
let thirdNum = document.querySelector("#thirdNum");
let count = 0;


// let interval = setInterval(() => {
//     if (count < 100) {
//         count++
//         firstNum.innerHTML = count
//     } else {
//         clearInterval(interval);
//     }

// }, 100)

//IntersectionOberserver()

function createInterval(number, element, timing) {
    let count = 0;

    let interval = setInterval(() => {
        if (count < number) {
            count++
            element.innerHTML = count
        } else {
            clearInterval(interval);
        }

    }, timing)
};

let confirm = false;

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting && confirm == false) {
            createInterval(400, firstNum, 30);
            createInterval(300, secondNum, 50);
            createInterval(1000, thirdNum, 10);
            confirm = true;

        }
    })
});

observer.observe(firstNum);
