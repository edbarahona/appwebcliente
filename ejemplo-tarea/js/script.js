var getId = function( id ){ 
	return document.getElementById(id );
}
var App = {
	agregarButton 	: null,
	rutInput		:null,
	nombreInput		:null,
	apellidoInput	:null,
	tbodyId 		:null,
	startup			: function(){
		//enlazar los inputs y button con los atributos	
		App.agregarButton = getId('agregar');
		App.rutInput = getId('rut');
		App.nombreInput = getId('nombre');
		App.apellidoInput = getId('apellido');
		App.tbodyId = getId('tbody-id');
		//enlazo el boton de agregar con la function agregar en el onclick
		App.agregarButton.onclick = App.onClickAgregar;



	},
	onClickAgregar : function(){
		//capturar los valores de los input y generar tr de la tabla 
		var tr = '	' 		
			+ '<tr>'
			+	'<td>' + App.rutInput.value + '</td>'
			+	'<td>' + App.nombreInput.value + '</td>'
			+	'<td>' + App.apellidoInput.value + '</td>'
			+	'<td>'
			+		'<a href="#" onclick="javascript:App.eliminar(this)">Eliminar</a>&nbsp;'
			+		'<a href="#" onclick="javascript:App.modificar()">Modificar</a>'
			+	'</td>'
			+'</tr>';
		//insertar este tr dentro de tbody-id
		App.tbodyId.innerHTML += tr;
		//limpiar los inputs
		App.rutInput.value = '';
		App.nombreInput.value = '';
		App.apellidoInput.value = '';

	},
	eliminar: function(element){
		var tr = element.parentNode.parentNode;
		App.tbodyId.removeChild( tr );
		//console.log( tr );
	}
}
window.onload = App.startup;