
var App = {
	colorSelected:null,
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
		//1. asociar el input color y guardarlo como color seleccionado.
		App.colorSelected = document.getElementById('color').value;
		//2. capturar todas las celdas (td)
		var element = event.target;
		element.style.background = App.colorSelected;
		App.elementSelected = element;
	}
}
//1. hacer el metodo window.onload
window.onload = App.windowOnLoad;