/*
|------------------------------------------------------------
| Script for navigation for mobile
|------------------------------------------------------------
*/$(document).ready(function() {
    $('[data-nav-button]').on('click', function () {
        $('[data-nav-button-span]').toggleClass('is-opened');
        $('[data-nav]').toggleClass('is-collapsed');
    });

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('nav').removeAttr('style');
        }
    });
 });

$(document).ready(function() {
    $('.navButton').on('click', function() {
        $('nav').fadeIn(700);
    })
});

