$(function(){
    // search box starts here
        $("#searchIcon").click(function(){
            $("#search").toggleClass('active');
        });
    // search box ends here

    // sidebar starts here
        $("#hamburgerMenu").click(function(){
            $("#slideBar").toggleClass('active');
        });
    // sidebar ends here

    // slider starts here
        $('.bannerSlider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            arrows: false,
        }); 
    // slider ends here

    // back to top starts here
    $(window).on('scroll', function(){
        var scrollsize = $(this).scrollTop()

        // To show/hide back to top button
        if(scrollsize > 500 ) {
            $('#backToTop').slideDown(400)
        }else {
            $('#backToTop').slideUp(400)
        }

        // Fixed menu
        if(scrollsize > 50){
            $('#nav').addClass('active')
        }else{
            $('#nav').removeClass('active')
        }
        
    })

    $('#backToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });
    // back to top ends here
    });
