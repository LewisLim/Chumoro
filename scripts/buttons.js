'use strict';

$(document).ready(function(){
    $("#submit").click(function(){
        $(".success-message").text("Your subscribtion is successful!"); 
    });

    $("#rent").click(function(){
        $(".store-message").text("Our store will open on Dec 2099!");
    });


    //To close the nav menu after clicking on a nav link
    const navlinks = document.querySelectorAll('.navigation__item');

    for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener('click', function () {
            document.getElementsByClassName("navigation__checkbox")[0].click();
        });
    }
});

