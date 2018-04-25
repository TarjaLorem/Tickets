var doFullpage = document.documentElement.clientWidth;

$(document).ready(function() {
            if (doFullpage > 480) {
			$('.fullpage').fullpage({
				verticalCentered: false,
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage'],
                menu: '#main-menu',
                scrollingSpeed: 1800,
                responsiveWidth: 480,

			});
            } else {
                $('.seventh-container-icon').on('click', function() {
                    var scroll = $('#section0').offset().top;
                    console.log('1');
                    $('body').animate({
                        scrollTop: scroll
                    }, 1800);
                });
                $('.container-icon').on('click', function() {
                    var scroll2 = $('.seventh-container-icon').offset().top;
                    console.log('1');
                    $('body').animate({
                        scrollTop: scroll2
                    }, 1800);
                });
            }
    });
    
