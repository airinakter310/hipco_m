
$(document).ready(function () {
	// start slider 
	// $('.banner-slider').slick({
	// 	infinite:true,
    //     autoplay:true,
    //     arrows: true,
    //     prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    //     nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    // });
	new WOW().init();  
	


//<!-- =============================================== -->
//<!-- ========== // Sticky Header // ========== -->
//<!-- =============================================== -->
      
	  var fixed_top = $(".header-section");
	  $(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
		  fixed_top.addClass("animated fadeInDown header-fixed");
		}
		else {
		  fixed_top.removeClass("animated fadeInDown header-fixed");
		}
	  });
	


	     // Sticky Header
		 var fixed_top = $(".header-section");
		 $(window).on("scroll", function () {
		   if ($(window).scrollTop() > 50) {
			 fixed_top.addClass("animated fadeInDown header-fixed");
		   }
		   else {
			 fixed_top.removeClass("animated fadeInDown header-fixed");
		   }
		 });

		 // Navbar Dropdown
		 
	//----------------Counter section ------------------>
	if (document.querySelector('.counterItem') !== null) {
		$('.counterItem').counterUp({
		  delay: 10,
		  disableOn: 0,
		  time: 2000
		});
	  }
//---------popup video---------------   --->
	// if (document.querySelector('.popupvideo') !== null) {
	// 	$('.popupvideo').magnificPopup({
	// 	disableOn: 300,
	// 	type: 'iframe',
	// 	mainClass: 'mfp-fade',
	// 	removalDelay: 160,
	// 	preloader: false,
	// 	fixedContentPos: false,
	// 	});
	// }
	
















});
 //<!-- =============================================== -->
//<!-- ========== animation.js ========== -->
//<!-- =============================================== --> 
 
 


//<!-- =============================================== -->
//<!-- ========== navbardown.js ========== -->
//<!-- =============================================== -->

// $('.nav a').bind('click', function () {
// $('html , body').stop().animate({
//     scrollTop: $($(this).attr('href')).offset().top - 80
// }, 1500, 'easeInOutExpo');
// event.preventDefault();
// });			
  


//ei tuko kn?


/* bottom 50% use koro */
/* image er niche pore gecilo tai z indez 1 kore dici ok */
/* // duita icon niche theke soman durotte takbe tai calc user kora hoice,,, got it? ok */