const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-mobile-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener(
  "click",
  () => (mobileMenu.style.transform = "translateY(0)")
);

closeBtn.addEventListener(
  "click",
  () => (mobileMenu.style.transform = "translateY(-100%)")
);
