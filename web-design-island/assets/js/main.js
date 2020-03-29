const hamburgerHandler = function() {
  const hamburgerBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".navbar-menu");

  hamburgerBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });
};

const init = function() {
  console.log("Hello Perfect Island");
  hamburgerHandler();
};

init();
