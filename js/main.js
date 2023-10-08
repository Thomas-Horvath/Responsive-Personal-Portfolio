let rootEle = document.querySelector(":root");

rootEle.classList.add(".light-mode");


let toggleBtn = document.querySelector(".toggleBtn");
toggleBtn.children[1].classList.add("displayNone");



toggleBtn.addEventListener("click", () => {
    rootEle.classList.toggle("dark-mode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");
});

