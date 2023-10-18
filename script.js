let dp1 = document.getElementById("dp1");

let dp2 = document.getElementById("dp2");
let featuresIcon = document.getElementById("features-icon");
let companyIcon = document.getElementById("company-icon");
let sideMenu = document.getElementById("side-menu");
function toggle1() {
  dp1.classList.toggle("open");
  featuresIcon.classList.toggle("down");
}

function toggle2() {
  dp2.classList.toggle("open");
  companyIcon.classList.toggle("down");
}

function showMobileMenu() {
  console.log("working");
}

function closeMobileMenu() {
  sideMenu.classList.toggle("close");
}
