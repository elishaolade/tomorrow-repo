var menuToggle = document.querySelector('.header__menu-toggle');
var mobileNav = document.querySelector('.mobile-nav');
console.log(mobileNav);
menuToggle.addEventListener('click', function(){
    mobileNav.classList.add('mobile-nav--open');
})