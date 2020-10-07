function animateMenu() {
    var menu = $('.menuBg');
    var nav = $('.mobileNav');

    if (menu.hasClass('showMenu')) { // Hide menu if it's open
        menu.removeClass('showMenu').addClass('hideMenu');
        nav.removeClass('fadeIn');
        $('html').removeClass('overflow_hide');
    } else if (menu.hasClass('hideMenu')) { // Show menu and remove hideMenu
        menu.removeClass('hideMenu').addClass('showMenu');
        $('html').addClass('overflow_hide');
        nav.addClass('fadeIn')
    } else {
        menu.addClass('showMenu'); // Initial show menu
        nav.addClass('fadeIn');
    }
};

$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $(this).toggleClass('open');
        $('html').addClass('overflow_hide');
        animateMenu();
    });
    $('.mobileNav a').on('click', function(){
        $('.hamburger').toggleClass('open');
        animateMenu();
    });
});