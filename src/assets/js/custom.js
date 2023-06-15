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

// $(function () {
//    const dropdowns = document.querySelectorAll('.dropdown');

//    dropdowns.forEach(dropdown => {
//       const select = dropdown.querySelector('.select');
//       const caret = dropdown.querySelector('.caret');
//       const menu = dropdown.querySelector('.menu');
//       const options = dropdown.querySelectorAll('.menu li');
//       const selected = dropdown.querySelector('.selected');


//       select.addEventListener('click', () => {
//          select.classList.toggle('select-clicked');
//          caret.classList.toggle('caret-rotate');
//          menu.classList.toggle('menu-open');
//       });

//       options.forEach(option => {
//          option.addEventListener('click', () => {
//             selected.innerText = option.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('menu-open');

//             options.forEach(option => {
//                option.classList.remove('active');
//             });
//             option.classList.add('active');
//          });
//       });
//    });

// })

// $(document).ready(function(){
//    // Add class on parent which 'li' children has submenu
//    $('ul.submenu').parents('li').addClass('megamenu');
   
//    //Menu ICon Append prepend for responsive
//    $(window).on('resize', function(){
//      if ($(window).width() < 1024) {
//        if(!$('#menu_trigger').length){
//          $('#mainmenu').prepend('<a href="#" id="menu_trigger" class="menulines-button"><span class="menulines"></span></a>');
//        }
//        if(!$('.navtrigger').length){
//          $('.megamenu > a').append('<span class="navtrigger"></span>')
//        }
//        if(!$('.mobile-menu').length){
//          $('.menu').wrap('<div class="mobile-menu"></div>')
//        }
//        if(!$('.submenu > .backmenu-row').length){
//          $('.submenu').each(function(){
//            var subvalue = $(this).prev('a').text();
//            //$(this).prepend('<a href="#" class="back-trigger">'+subvalue+'</a>');
//            $(this).prepend('<div class="backmenu-row"><a href="#" class="back-trigger"></a><em>'+subvalue+'</em></div>');
//          });
//        }
//      } else {
//        $("#menu_trigger").remove();
//        $('.navtrigger').remove();
//        $('.menu').unwrap('.mobile-menu');
//        $('.back-trigger').remove();
//        $('.back-trigger').remove();
//      }
//    }).resize();
   
   
//    // Mobile menu on click open
//    $(document).on('click',"#menu_trigger", function(){
//      if($('.megamenu').hasClass("sub-open")){
//        $('.megamenu ').removeClass('sub-open');
//        $('.mobile-menu').delay(350).slideToggle();
//        $(this).toggleClass('menuopen');
//      } else {
//        $(this).toggleClass('menuopen');
//        $(this).next('.mobile-menu').slideToggle();
//      }
//      return false;
//    });
   
//    // While open submenu add class
//    $(document).on('click', '.navtrigger', function(){
//      $(this).parents('li').addClass('sub-open');
//      return false;
//    })
   
//    // Back to menu in mobile
//    $(document).on('click', '.back-trigger', function(){
//      $(this).closest('li').removeClass('sub-open');
//      return false;
//    })
   
   
//  })