function action() {
    alert("Yinkies!")

}
function closeMenu() {
    var menu = document.getElementById("nav-menu");
    var body = document.getElementById("body");
    var icon = document.getElementById("openMenuBtn")

        menu.style.visibility = "hidden";
        body.style.overflow = "visible";
        swapIcon(icon)
        console.log("Menu closed on mouse leave...")
}
function poke() {
    alert("Ouch!")

}
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    var body = document.getElementById("body");

    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
        body.style.overflow = "visible";
    } else {
        menu.style.visibility = "visible";
        body.style.overflow = "hidden";
    }
}
function swapIcon(element) {
    element.classList.toggle("bi-list");
    element.classList.toggle("bi-x");
}

let menu = document.querySelector("#nav-menu");
let joinBtn = document.getElementById("mainBtn");
let logo = document.getElementById("logo");

menu.addEventListener('click', ()=> {
    console.log("Menu Clicked no function!")
})

joinBtn.addEventListener("click", () => {
    action()
})

logo.addEventListener("click", () => {
    poke()
})