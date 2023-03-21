//Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika squiggs menu di klik
document.querySelector("#squiggsmenu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan nav
const squiggs = document.querySelector("#squiggsmenu");

document.addEventListener("click", function (e) {
  if (!squiggs.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
