var getId = function( id ){ 
	return document.getElementById(id );
}
var App = {
	count : 0,
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
		App.count++;
		console.log( App.count );
		var tr = '	' 		
			+ '<tr>'
			+	'<td id="rut_' + App.count +'">' + App.rutInput.value + '</td>'
			+	'<td id="nombre_' + App.count +'">' + App.nombreInput.value + '</td>'
			+	'<td id="apellido_' + App.count +'">' + App.apellidoInput.value + '</td>'
			+	'<td>'
			+		'<a href="#" onclick="javascript:App.eliminar(this,true)">Eliminar</a>&nbsp;'
			+		'<a href="#" onclick="javascript:App.modificar(' + App.count + ',this)">Modificar</a>'
			+	'</td>'
			+'</tr>';
		//insertar este tr dentro de tbody-id
		App.tbodyId.innerHTML += tr;
		//limpiar los inputs
		App.rutInput.value = '';
		App.nombreInput.value = '';
		App.apellidoInput.value = '';

	},
	eliminar: function(element, flag){
		if(flag){
			if( confirm('realmente quiere eliminar?')){		
				var tr = element.parentNode.parentNode;
				App.tbodyId.removeChild( tr );
			}
		}else{
				var tr = element.parentNode.parentNode;
				App.tbodyId.removeChild( tr );
		}
	},
	modificar: function( count, element ){
		var rut = getId( 'rut_' + count ).innerHTML;
		var nombre = getId( 'nombre_' + count ).innerHTML;
		var apellido = getId( 'apellido_' + count ).innerHTML;
		App.rutInput.value = rut;
		App.nombreInput.value = nombre;
		App.apellidoInput.value = apellido;
		App.eliminar( element ,false);
	}
}
window.onload = App.startup;