$(document).ready(function () {
	
	/*SLIDE*/
	athenaSlide(
		athenaSlideId = 'slidecontent',
		athenaPreviousButtonId = 'slide-previous',
		athenaNextButtonId = 'slide-next',
		athenaDotButtonClass = 'slide-dot',
		athenaDotActiveClass = 'slide-active',
		athenaPlayButtonId = 'slide-play',
		athenaStopButtonId = 'slide-stop',
		/**MORE OPTIONS**/
		athenaSlideMode = 'sliding',
		athenaSlideTime = 500,
		athenaSlideDelay = 500,
		athenaSlideEffect = 'swing',
		athenaAutoStartLoop = true,
		athenaLoopTime = 5000
	);	
	demeterScroll(
		demeterScrollAnimateMinWidth = 1024,
		demeterScrollAnimateTime = 500,
		demeterScrollAnimateEffect = 'swing'
	)
	$(window).load(function () {
		
		/*MAIN MENU*/
		hermesMenu(
			hermesMenuId = 'mainmenu',
			hermesBarId = 'mainmenubar',
			hermesSynchroScroll = true,
			hermesExceptionClass = 'nobar'
		);
		/*ACCORDION MENU*/
		hermesMenu(
			hermesMenuId = 'navtabs_menu',
			hermesBarId = 'navtabs_menubar',			
			hermesSynchroScroll = false,
			hermesLinkColor = 'white'
		);
		
		
		$('#isotope_filters a').click(function(){
			//DYNAMIC MENU LABEL
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			return false;
		});
		
		$(window).resize(function() {
			if($(window).width() > 992) {
			t_current.css({display: ''});
			}
			else {
			t_current.css({display: ''});
			t_current.eq(0).show();
			}
			t_counter = 0;
		});
		/*SKILLS*/
		$('#skills').find('.progress-bar').css({width: 0});
		var s_windowHeight = $(window).height()*0.5;
		var s_target = $('#skills').offset().top;
		$(window).scroll(function(){
			var s_scrollHeight = $(window).scrollTop()+s_windowHeight;
			if (s_scrollHeight > s_target) {
				$('#skills').find('.progress-bar').each(function() {
					var current = $(this);
					var s_final = current.data('final');
					current.css({width: s_final+'%'});
				});
			}
		});
		/*CONTACUS*/
		/*
		var c_windowHeight = $(window).height()0.5;
		var c_target = $('#contactus').offset().top;
		$(window).scroll(function(){
			var c_scrollHeight = $(window).scrollTop()+c_windowHeight;
			if (c_scrollHeight > c_target) {
				$('#contactus').slideDown(500);
			}
		});
		*/
/*********************/	
	});//END LOAD
});//END READY


// ------------------------------
// http://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('.nav a').click(function(){  
     //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 85
    }, 700);
    return false;
  });
  
}
scrollNav();// JavaScript Document