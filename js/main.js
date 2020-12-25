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