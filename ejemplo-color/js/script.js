
var App = {
	colorP1:'#FF0000',
	colorP2:'#0000FF',
	control:false,
	elementSelected: null,
	windowOnLoad : function(){	
		var celdas = document.getElementsByTagName('td');
		//3. asignar un evento onclick para cada una de las celdas
		for( var i = 0 ; i < celdas.length; i++)
		{
			var celda =  celdas[i];
			celda.onclick = App.tdSelected;
		}
	},
	//3.1. toma la celda que hizo el click y se la asigna a elemento elegido.
	tdSelected : function( event ){
		//2. capturar todas las celdas (td)
		var element = event.target;		
		element.style.background = (App.control)? App.colorP1:App.colorP2;
		App.control = !App.control;
		App.elementSelected = element;
		App.counter++;
		console.log( App.counter );
	}
}
//1. hacer el metodo window.onload
window.onload = App.windowOnLoad;