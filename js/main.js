AOS.init();
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 5
      },
      1000: {
        items: 6
      }
    }
  });


  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("head_scroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("head_scroll");
        }
    });
});