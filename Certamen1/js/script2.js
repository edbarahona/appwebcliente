window.onload = function(){
	document.getElementById('calcular').onclick = onClickButton;	
}
function onClickButton(){
	var f_nacimiento = document.getElementById('f_nacimiento').value;
	var fecha = new Date();
	var anioActual = fecha.getFullYear();
	var fecha2 = new Date( f_nacimiento );
	var anioNacimiento = fecha2.getFullYear();
	var edad = anioActual - anioNacimiento;
	document.getElementById('salida').innerHTML = "<font color='red'>edad :</font> " + edad;
	console.log( "edad: " + edad );
}
