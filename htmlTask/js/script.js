/*=================
| |  | Preloader | 
=================*/
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*==============================
| |  | Navigation
===============================*/
/* show and hide white Navigation */
$(function(){

    //show/hide nav on page load
    showHideNav();
    
    $(window).scroll(function(){
        //show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav(){
        if($(window).scrollTop()>50){
            //show white navigation
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
        }else{
            //Hide white navigation
            $("nav").removeClass("white-nav-top");
            //show normal logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
        }
    }
});
