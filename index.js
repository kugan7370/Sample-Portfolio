
// owl carousal
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        // autoplayHoverPause:true,
       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});
// end owl carousal




// Animation-for skills-Timeline
AOS.init();


// Scrollspy-navbar
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
});