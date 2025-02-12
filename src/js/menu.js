const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector("nav");

menuOpen.addEventListener("click", () => {
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
    nav.classList.add("show");

    console.log("test");
});

menuClose.addEventListener("click", () => {
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
    nav.classList.remove("show");

    console.log("test");
});
