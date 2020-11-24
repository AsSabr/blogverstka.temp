(() => {
  /**
   * Query elements
   */
  const width = 600,
    isActive = 'is__active';

  /**
   * Adding scroll class to nav
   */
  const header = document.querySelector('.header'),
    sticky = header.offsetTop;
  const navbarScroll = () => {
    if (window.pageYOffset > sticky) {
      header.classList.add('header_scroll');
    } else {
      header.classList.remove('header_scroll');
    }
  };
  document.addEventListener('scroll', navbarScroll);

  /**
   * Menu
   */
  const burger = document.querySelector('.burger'),
    menu = document.querySelector('.nav__menu'),
    submenu = document.querySelector('.has__submenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('nav__menu_active');
  });

  // Removing active classes from burger and menu
  // if window is more than 600px
  window.addEventListener('resize', () => {
    if (window.innerWidth > width) {
      burger.classList.remove('burger_active');
      menu.classList.remove('nav__menu_active');
    }
  });

  /**
   * Submenu
   */
  window.addEventListener('click', (e) => {
    let target = e.target;

    do {
      if (target == submenu && window.innerWidth < width) {
        submenu.classList.toggle('has__submenu_active');
        return;
      }
      target = target.parentNode;
    } while (target);
    submenu.classList.remove('has__submenu_active');
  });

  /**
   * Search Modal
   */
  const openEls = document.querySelectorAll('[data-open]'),
    closeEls = document.querySelectorAll('[data-close]'),
    isVisible = 'is__visible';

  for (const el of openEls) {
    el.addEventListener('click', function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  for (const el of closeEls) {
    el.addEventListener('click', function () {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
    });
  }

  // If click outside of modal
  document.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.nav__search__modal.is__visible')) {
      document
        .querySelector('.nav__search__modal.is__visible')
        .classList.remove(isVisible);
    }
  });

  document.addEventListener('keyup', (e) => {
    // If we press the ESC
    if (
      e.key == 'Escape' &&
      document.querySelector('.nav__search__modal.is__visible')
    ) {
      document
        .querySelector('.nav__search__modal.is__visible')
        .classList.remove(isVisible);
    }
  });

  /**
   * Scroll to top btn
   */
  const scrollToTopBtn = document.querySelector('.scroll__toTop__btn'),
    rootElement = document.documentElement,
    showBtnAt = 0.3;

  function handleScroll() {
    // do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > showBtnAt) {
      //show button
      scrollToTopBtn.classList.add('show__btn');
    } else {
      //hide button
      scrollToTopBtn.classList.remove('show__btn');
    }
  }

  function scrollToTop() {
    //scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  scrollToTopBtn.addEventListener('click', scrollToTop);
  document.addEventListener('scroll', handleScroll);
})();
