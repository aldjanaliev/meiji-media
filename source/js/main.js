// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя
// const { on } = require("gulp");

$(document).ready(function(){

	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");

	$('.head_menu-wrap ').slideUp(0)

		$('.js-nav-btn ').on('click', function(){
			$(this).toggleClass('active')
			$('.head_menu-wrap ').slideToggle(300)
			if($(this).hasClass('active')){
				$('body').css('overflow', 'hidden')
				$('.head_icons').css('opacity','1')
			} else{
				$('body').css('overflow', 'visible')
				$('.head_icons').css('opacity','0')
			}
			
	})


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});
});
