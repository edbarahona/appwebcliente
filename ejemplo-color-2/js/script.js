
var App = {
	colorP1:'#FF0000',
	colorP2:'#0000FF',
	control:false,
	elementSelected: null,
	windowOnLoad : function(){	
		//3. asignar un evento onclick para cada una de las celdas
		$('td').each(function(indice, celda){
			$( celda ).on('click', App.tdSelected );
		});
	},
	//3.1. toma la celda que hizo el click y se la asigna a elemento elegido.
	tdSelected : function( event ){
		//2. capturar todas las celdas (td)
		var $element = $(event.target);
		console.log( $element );		
		$element.css('background', (App.control)? App.colorP1:App.colorP2 );
		App.control = !App.control;
		App.elementSelected = $element;
		App.counter++;
	}
}
//1. hacer el metodo window.onload
$(document).on('ready', App.windowOnLoad );
