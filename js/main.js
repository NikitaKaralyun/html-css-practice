let btn = document.querySelector('.header__btn');

document.addEventListener('DOMContentLoaded', function () {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    Fancybox.show([{ src: '#dialog-content', type: 'inline' }]);
  });
});
