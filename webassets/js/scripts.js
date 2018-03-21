$(document).ready(function(){
	console.log("Jquery Running");

	
	window.addEventListener('resize', function () {
		var windowWidth = $(window).width();
		$('.screensize-tag').html(windowWidth + " px");
	});

	// Scroll - Agregar/Quitar Clase al Menu
	$(function (){
		$(window).scroll(function(){
			// if ($(this).scrollTop() > 400) {
			// 	$('.header-navigation').addClass("azul");
			// } else {
			// 	$(".header-navigation").removeClass("azul");
			// }


			if ($(".header-navigation").offset().top > 400) {
				$('.header-navigation').addClass("header-navigation-blue");
			} else {
				$(".header-navigation").removeClass("header-navigation-blue");
			}
		});
	});

	// Click - Open/Close "Menu"
	$("#btm-open-menu").on("click", function(){
		$('.btm-open-menu').toggleClass("btm-open-menu-toggle");
		$('#nav').slideToggle("slow");
		$('#nav').toggleClass("nav-toggle");
	});

	// Click - Animación de panels de Industrias
	const panels = document.querySelectorAll('.panel');

	function toggleOpen() {
		console.log('Hello');
		this.classList.toggle('open');
	}

	function toggleActive(e) {
		console.log(e.propertyName);
		if (e.propertyName.includes('flex')) {
			this.classList.toggle('open-active');
		}
	}

	panels.forEach(panel => panel.addEventListener('click', toggleOpen));
	panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


	
	// Mostrar/Ocultar Marcas secundarias
	$( "#marcas" ).on("click", function() {
		$( ".marcas-second" ).slideToggle( "slow");
	});


});