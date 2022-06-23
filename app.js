const goTopBtn = document.querySelector("#go-to-top");
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
      goTopBtn.classList.add("show");
   } else {
      goTopBtn.classList.remove("show");
   }
});

const menuIcon = document.querySelector("#menuIcon");
const dropdown = document.querySelector(".header__nav--mobile");
if (menuIcon) {
   menuIcon.onclick = function () {
      dropdown.classList.toggle("open");
   };
   const selectDropdowns = document.querySelectorAll(".header__nav--mobileList li");
   selectDropdowns.forEach(function (selectDropdown, index) {
      selectDropdown.onclick = function () {
         dropdown.classList.remove("open");
      };
   });
}
