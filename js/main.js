(function(){
	"use strict";

	document.addEventListener('DOMContentLoaded', function(){

	});//Espera que se cargue el HTML

})(); 

$(function(){
//Lettering
	//$('.nombre-sitio')	.lettering();

//Menu Fijo

var windowHeigth = $(window).height();
var barraAltura = $('.barra').innerHeight();

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll > windowHeigth){
		$('.barra').addClass('fixed');
		$('body').css({'margin-top': barraAltura+'px'});
	}else{
		$('.barra').removeClass('fixed');
		$('body').css({'margin-top':'0px'});
	}
}); 

//MENU RESPONSIVE
$('.menu-movil').on('click', function(){
	$('.navegacion-principal').slideToggle();
});

});

$(window).scroll(function(){

	var scroll = $(window).scrollTop();
	if (scroll == 2233) {
		$('.conocimientos').addClass('animatedParent');
	}else{
		$('.conocimientos').removeClass('animatedParent');
	}

});

//Plugin Slippry para slider de Fotos

jQuery('#pictures-demo').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager

  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  captions: false, // Position: overlay, below, custom, false

  // pager
  pager: false,
  
  // controls
  controls: false,
  autoHover: false,

  // transitions
  transition: 'kenburns', // fade, horizontal, kenburns, false
  kenZoom: 140,
  speed: 2000 // time the transition takes (ms)
});