const lightDarkBtn = document.getElementById("light-dark-btn");
const lightIcon = lightDarkBtn.querySelector(".light");
const darkIcon = lightDarkBtn.querySelector(".dark");

lightDarkBtn.addEventListener("click", () => {
    lightIcon.classList.toggle("hidden");
    darkIcon.classList.toggle("hidden");
    document.body.classList.toggle("dark");
});
