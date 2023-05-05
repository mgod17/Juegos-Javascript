const menuToggle = document.querySelector(".menu-toggle button");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
