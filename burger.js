const burgerMenu = document.getElementById("burger-menu");

const overlay = document.getElementById("navbar-mobile--menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
