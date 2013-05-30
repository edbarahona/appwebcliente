var get = function( id ) {
	return document.getElementById( id );
}
window.onload = function(){
	get('agregar').onclick = onClickButton;	
}
function onClickButton(){
	//capturamos los input
	var nombre = get('nombre').value,
		apellido = get('apellido').value,
		f_nacimiento = get('f_nacimiento').value;
	//crear la estructura de un tr 
	var row = "<tr><td>" + apellido +", " + nombre + "</td><td>" + f_nacimiento + "</td></tr>";
	console.log( row );
	//agregar tr a la tabla.. (tbody)
	get('tbody').innerHTML =  get('tbody').innerHTML + row;
	//limpiar los input
	get('nombre').value = "";
	get('apellido').value ="";
	get('f_nacimiento').value = "";
}
