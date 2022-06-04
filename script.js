$(document).ready(function(){
    $(window).scroll(function(){
         if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
        } else{
             $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Coder", "Content Creator", "3D Artist", "YouTuber", "Developer", "Problem Solver"],
        typeSpeed:100, 
        backSpeed:40, 
        loop: true
    });
    // var typed = new Typed(".typing-2", {
    //     strings: ["Coder", "Dragonborn", "3D Artist", "YouTuber"],
    //     typeSpeed:100, 
    //     backSpeed:40, 
    //     loop: true
    // });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});