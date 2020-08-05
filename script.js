const projects = document.querySelector(".projects div");
console.log(projects);
const hamburger = document.querySelector(".hamburger");
const navLinks  = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  })
  
});
// projects.addEventListener("mouseover", () => {
//   projects.style.background = "green";
// })

// projects.addEventListener("mouseout", () => {
//   projects.style.background = "white";
// })
