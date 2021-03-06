function throttle(callback, limit) {
	var waiting = false; // Initially, we're not waiting
	return function () {
		// We return a throttled function
		if (!waiting) {
			// If we're not waiting
			callback.apply(this, arguments); // Execute users function
			waiting = true; // Prevent future invocations
			setTimeout(function () {
				// After a period of time
				waiting = false; // And allow future invocations
			}, limit);
		}
	};
}
$(window).on('load', function () {
	'use strict';

	/* ===================================
            Loading Timeout
     ====================================== */
	$('.side-menu').removeClass('hidden');

	setTimeout(function () {
		$('.preloader').fadeOut();
	}, 500);
});

jQuery(function ($) {
	'use strict';
	/* ===================================
       Navbar smooth Scroll
   ====================================== */
	// $(".scroll").on("click", function (event) {
	//     event.preventDefault();
	//     $("html,body").animate({
	//         scrollTop: $(this.hash).offset().top - 50}, 1200);
	// });
	/* ===================================
        Side Menu
    ====================================== */
	if ($('#sidemenu_toggle').length) {
		$('#sidemenu_toggle').on('click', function () {
			$('.side-menu').removeClass('side-menu-opacity');
			$('.pushwrap').toggleClass('active');
			$('.side-menu').addClass('side-menu-active'),
				$('#close_side_menu').fadeIn(700);
		}),
			$('#close_side_menu').on('click', function () {
				$('.side-menu').removeClass('side-menu-active'),
					$(this).fadeOut(200),
					$('.pushwrap').removeClass('active');
				setTimeout(function () {
					$('.side-menu').addClass('side-menu-opacity');
				}, 500);
			}),
			$('.side-menu .navbar-nav .nav-link').on('click', function () {
				$('.side-menu').removeClass('side-menu-active'),
					$('#close_side_menu').fadeOut(200),
					$('.pushwrap').removeClass('active');
				setTimeout(function () {
					$('.side-menu').addClass('side-menu-opacity');
				}, 500);
			}),
			$('#btn_sideNavClose').on('click', function () {
				$('.side-menu').removeClass('side-menu-active'),
					$('#close_side_menu').fadeOut(200),
					$('.pushwrap').removeClass('active');
				setTimeout(function () {
					$('.side-menu').addClass('side-menu-opacity');
				}, 500);
			});
	}
	// ===========================
	//    bottom nav appear
	// ===========================
	$(function () {
		var $win = $(window);

		function socialScroll() {
			if (
				$(window).scrollTop() + $(window).height() <
					$(document).height() - 300 &&
				$(window).scrollTop() + $(window).height() > $(document).height() - 400
			) {
				$('.sidenav-bottom').css('opacity', '0');
				$('.sidenav-bottom').removeClass('sidenav-bottom-fixed');
			}
		}

		jQuery(function ($) {
			$(window).scroll(throttle(socialScroll, 500));
		});
	});

	// ===========================
	//    header appear
	// ===========================
	function headerScroll() {
		if ($(this).scrollTop() > 260) {
			// Set position from top to add class
			$('.sidenav-bottom').css('opacity', '0');
			$('header .inner-header').addClass('header-appear');
		}
		if ($(this).scrollTop() < 260) {
			$('.sidenav-bottom').css('opacity', '1');
			$('header .inner-header').removeClass('header-appear');
		}
	}

	$(window).on('scroll', throttle(headerScroll, 500));

	// ===========================
	//     portfolio carousel
	// ===========================
	function handleImageResize(el) {
		var containerHeight = $(el).height();
		$(el)
			.find('img')
			.each(function (index, img) {
				var w = $(img).prop('naturalWidth');
				var h = $(img).prop('naturalHeight');
				$(img).css({
					width: Math.round((containerHeight * w) / h) + 'px',
					height: containerHeight + 'px',
				});
			});
	}
	$('.owl-carousel').each(function (index, el) {
		handleImageResize(el);
		window.addEventListener('resize', () => {
			handleImageResize(el);
		});

		$(this).owlCarousel({
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoWidth: false,
			loop: true,
			margin: 10,
			slideSpeed: 1000,
			slideTransition: 'linear',
			nav: false,
			dots: false,
			autoplay: false,
			autoplayTimeout: 8000,
			autoplayHoverPause: true,
			lazyLoad: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 1,
				},
			},
		});
		$(this).on('loaded.owl.lazy', () => {
			handleImageResize(el);
		});
	});
	// Custom Navigation Events
	$('.portfolio-right-arr').each(function () {
		$(this).click(function () {
			$(this)
				.closest('.col-12')
				.find('.owl-carousel')
				.trigger('next.owl.carousel');
		});
	});
	$('.portfolio-left-arr').each(function () {
		$(this).click(function () {
			$(this)
				.closest('.col-12')
				.find('.owl-carousel')
				.trigger('prev.owl.carousel');
		});
	});

	// $('.portfolio-carousel').owlCarousel({

	//     loop:true,
	//     margin:10,
	//     slideSpeed: 5000,
	//     slideTransition:'linear',
	//     nav:false,
	//     dots:false,
	//     autoplay:false,
	//     autoplayTimeout:8000,
	//     autoplayHoverPause:true,
	//     lazyLoad:true,
	//     responsive:{
	//         0:{

	//             items:1
	//         },
	//         600:{
	//             items:1
	//         },
	//         1000:{
	//             items:1
	//         },
	//     }

	// });

	// document.querySelectorAll('.portfolio-right-arr').forEach(arrow => {
	//     arrow.addEventListener('click', function(e) {
	//         console.log(e.target.closest('.col-12'));
	//         var owlParent = e.target.closest('.col-12');
	//         var owl = owlParent.querySelector('.portfolio-carousel');
	//         // owl.owlCarousel();
	//         owl.trigger('next.owl.carousel');
	//     });
	// });

	// $('.portfolio-left-arr').click(function() {
	//     var owl = $('.portfolio-carousel');
	//     owl.owlCarousel();
	//     owl.trigger('prev.owl.carousel');
	// });

	// ===========================
	//     Testimonial carousel
	// ===========================
	$('.review-carousel').owlCarousel({
		loop: true,
		margin: 10,
		slideSpeed: 5000,
		slideTransition: 'linear',
		nav: false,
		dots: false,
		autoplay: false,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	/* ===================================
             Wow Effects
   ======================================*/
	var wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: false, // default
		live: true, // default
	});
	wow.init();

	/* ===================================
        FancyBox Open on Content Loaded
   ======================================*/
   Fancybox.bind(
    'a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]',
    {
      groupAll: true,
    }
  );
   $('#announcement').trigger('click');
});
