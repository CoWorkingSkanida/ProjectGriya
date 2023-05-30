// function myTest () {


// }

$(function () {
   // Open and Close Navbar Menu
   const navbarMenu = document.getElementById("menu");
   const burgerMenu = document.getElementById("burger");
   const bgOverlay = document.querySelector(".overlay");

   if (burgerMenu && bgOverlay) {
      burgerMenu.addEventListener("click", () => {
         navbarMenu.classList.add("is-active");
         bgOverlay.classList.toggle("is-active");
      });

      bgOverlay.addEventListener("click", () => {
         navbarMenu.classList.remove("is-active");
         bgOverlay.classList.toggle("is-active");
      });
   }

   // Close Navbar Menu on Links Click
   document.querySelectorAll(".hvr-float-shadow").forEach((link) => {
      link.addEventListener("click", () => {
         navbarMenu.classList.remove("is-active");
         bgOverlay.classList.remove("is-active");
      });
   });

   document.querySelectorAll(".btn ").forEach((link) => {
      link.addEventListener("click", () => {
         navbarMenu.classList.remove("is-active");
         bgOverlay.classList.remove("is-active");
      });
   });

   document.querySelectorAll(".list-item ").forEach((link) => {
      link.addEventListener("click", () => {
         navbarMenu.classList.remove("is-active");
         bgOverlay.classList.remove("is-active");
      });
   });

   // Open and Close Search Bar Toggle
   const searchBlock = document.querySelector(".search-block");
   const searchToggle = document.querySelector(".search-toggle");
   const searchCancel = document.querySelector(".search-cancel");

   if (searchToggle && searchCancel) {
      searchToggle.addEventListener("click", () => {
         searchBlock.classList.add("is-active");
      });

      searchCancel.addEventListener("click", () => {
         searchBlock.classList.remove("is-active");
      });
   }
})

$(function () {
   const dropdowns = document.querySelectorAll('.dropdown');

   dropdowns.forEach(dropdown => {
      const select = dropdown.querySelector('.select');
      const caret = dropdown.querySelector('.caret');
      const menu = dropdown.querySelector('.menu');
      const options = dropdown.querySelectorAll('.menu li');
      const selected = dropdown.querySelector('.selected');


      select.addEventListener('click', () => {
         select.classList.toggle('select-clicked');
         caret.classList.toggle('caret-rotate');
         menu.classList.toggle('menu-open');
      });

      options.forEach(option => {
         option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
               option.classList.remove('active');
            });
            option.classList.add('active');
         });
      });
   });

})