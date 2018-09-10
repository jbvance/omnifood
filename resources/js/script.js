$(document).ready(function () {

    // Sticky  Navigation
    let waypoint = new Waypoint({
        element: document.getElementsByClassName('js--section-features')[0],
        handler: function (direction) {        
            if (direction === 'down') {
                $('nav').addClass('sticky')
            } else {
                $('nav').removeClass('sticky')
            }
        },
        offset: 60
    })

    // Scroll on buttons
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000)
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000)
    })

    // Navigation scroll
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

        // Animations on scroll
        let waypoint1 = new Waypoint({
            element: $('.js--wp-1'),
            handler: function (direction) {              
               $(this.element).addClass('animated fadeIn')
            },
            offset: '50%'
        })

        
        let waypoint2 = new Waypoint({
            element: $('.js--wp-2'),
            handler: function (direction) {               
               $(this.element).addClass('animated fadeInUp')
            },
            offset: '50%'
        })
        
        let waypoint3 = new Waypoint({
            element: $('.js--wp-3'),
            handler: function (direction) {            
               $(this.element).addClass('animated fadeIn')
            },
            offset: '50%'
        })

        let waypoint4 = new Waypoint({
            element: $('.js--wp-4'),
            handler: function (direction) {  
               $(this.element).addClass('animated pulse')
            },
            offset: '50%'
        })

        // Mobile nav
        $('.js--nav-icon').click(function() {
            let nav = $('.js--main-nav')
            let icon = $('.js--nav-icon')

            nav.slideToggle(200)
            if (icon.attr('name') === 'menu') {
                icon.attr('name', 'close')                
            } else {
                icon.attr('name', 'menu')
            }
        })
})

