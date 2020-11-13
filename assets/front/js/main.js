(() => {
  const navbar = document.querySelector('.nav');
  const sticky = navbar.offsetTop;
  const width = 576;
  const navbarScroll = () => {
    if (window.pageYOffset > sticky && window.innerWidth >= width) {
      navbar.classList.add('nav_scroll');
    } else {
      navbar.classList.remove('nav_scroll');
    }
  };

  window.onscroll = navbarScroll;

  // Adding/Removing class to navbar section on scroll
  // window.addEventListener('scroll', () => {

  //     const scrollable = 100;
  //     const scrolled = window.scrollY;

  //     console.log(scrolled);
  //     const navSec = document.getElementById('nav__section');

  //     if (scrolled > scrollable) {
  //         navSec.classList.add('has__scroll_nav');
  //     } else {

  //         navSec.classList.remove('has__scroll_nav');
  //     }
  // });

  //Burger
  const burger = document.querySelector('.burger');
  const navItems = document.querySelector('.navbar__menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navItems.classList.toggle('is__active');
  });

  // Handle click on toggle search button
  // const searchBtn = document.getElementById('search-btn');
  // const searchForm = document.getElementById('search-form');
  // searchBtn.addEventListener('click', () => {
  //   searchForm.classList.toggle('open');
  //   searchBtn.classList.toggle('open');
  //   return false;
  // });

  // Handle click on search submit button

  // Clicking outside the search form closes it

})();

(function($) {
  // Handle click on toggle search button
  $("#search-btn").click(function () {
    $("#search-form, #search-btn").toggleClass("open");
    return false;
  });

  // Handle click on search submit button
  $("#search-form input[type=submit]").click(function () {
    $("#search-form, #search-btn").toggleClass("open");
    return true;
  });
		// Clicking outside the search form closes it
		$(document).click(function(event) {
			var target = $(event.target);
      
			if (!target.is('#search-btn') && !target.closest('#search-form').size()) {
				$('#search-form, #search-btn').removeClass('open');
			}
		});

})(jQuery);