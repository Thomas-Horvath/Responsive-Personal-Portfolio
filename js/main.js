let rootEle = document.querySelector(":root");

rootEle.classList.add("light-mode");


let toggleBtn = document.querySelector(".toggleBtn");
toggleBtn.children[1].classList.add("displayNone");



toggleBtn.addEventListener("click", () => {
    rootEle.classList.toggle("dark-mode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");
});

//portfolio

 let allProjectThumbnail = document.querySelectorAll(".thumbnail");
 function setProjectThumbnails(allProjectThumbnail, projectName, color){
    allProjectThumbnail.style =`
    background: url( ../Assets/ProjectThumbnails/${projectName}.png) no-repeat center;
    background-size: contain;
    background-color: ${color};
    `;
 } 
 setProjectThumbnails(allProjectThumbnail[0], "project1", "#27272c");
 setProjectThumbnails(allProjectThumbnail[1], "project2", "#27272c");
 setProjectThumbnails(allProjectThumbnail[2], "project3", "#863286");
 setProjectThumbnails(allProjectThumbnail[3], "project4", "#000");
 setProjectThumbnails(allProjectThumbnail[4], "project5", "#fff");
 setProjectThumbnails(allProjectThumbnail[5], "project6", "#202020");
 setProjectThumbnails(allProjectThumbnail[6], "project7", "#8339ec");
 setProjectThumbnails(allProjectThumbnail[7], "project8", "#272727");;
 setProjectThumbnails(allProjectThumbnail[8], "project9", "#272727");