function get( id ){
	var object = 
		document.getElementById( id );
	return object;
}
function onSubmitJs(){
	var password = getId('password');
	if( password.value == "") alert( "llena password" )
	return false;
}
var valid = function(){
	var flag = true;
	var required = [];
	required.push( get('username'));
	required.push( get('password'));
	required.push( get('birthdate'));
	for( var i in required){
		var input = required[i];
		if( input.value == "" ){
			flag = false;
			input.focus();
			break;
		}
	}
	if( flag == false) 
		alert( "llene los campos obligatorios" )
	else return valid2();
	return flag;		
}
function valid2(){
	var flag = true;
	var checkbox = get('agree');
	if( !checkbox.checked ){
		flag = false;
		alert( "tiene que aceptar los terminos de uso" );
	}
	return flag;
}
var test = valid2;
