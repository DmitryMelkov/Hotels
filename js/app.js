window.addEventListener("DOMContentLoaded", function () {

  //бургер меню
  let burger = document.querySelector('#burger');
  let menu =document.querySelector('#menu');

  burger.addEventListener('click', function (event) {
    event.preventDefault;
    burger.classList.toggle('active');
    menu.classList.toggle('active')
  })

  //прокрутка при клике
  const menuLinks = document.querySelectorAll('.nav-list__item-link[data-goto]');

  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    })

    function onMenuLinkClick(e) {
      const menuLink = e.target;

      //проверка есть ли такой атрибут
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }

    }
  }

});
