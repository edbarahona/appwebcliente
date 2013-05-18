##Esta es mi clase de aplicacion para internet por el lado del cliente


#javascript

numericos:
	enteros: 
	decimales:

booleanos:
	true | false
cadenas de textos:
	"cadena de texto" | 'cadena de texto'

#definicion de variables:
var identificador = valor;

#caracteres especiales:
\n nueva linea
\r retorno de carro
\t tabulador
\\ barra invertida

var variable = "hola \"mundo\"";
	variable = valor;

#ejemplo de los tipos de datos:

var bandera = true;
var	miEntero = 8;
var decimal = 3.8;
var nombre = "Carlos";

# operaciones aritmeticas:
	+ : suma
	- : resta
	* : multiplicacion
	/ : division
	% :resto
	-- : decremento
	++ : incremento.

#ejemplo
var var1 = 5 , var2 = 10;
var multiplicacion = var1 * var2;
console.log( multiplicacion ); //50

# operadores logicos:
	&& AND
	|| OR
	! negacion

# operadores relacionales:
	== : igual
	!= : distinto
	> :	mayor
	< : menor
	>= : mayor o igual
	<= : menor o igual

#operadores de asignacion
	= : asignacion
	+= : asignacion manteniendo el valor actual mas el valor de la derecha.
	-= : asignacion mantenido el valor actual menos el valor de la derecha.
	*= : asignacion mantenido el valor actual multiplicado el valor de la derecha.
	/= : asignacion mantenido el valor actual dividido el valor de la derecha.
	%= : asignacion mantenido el valor actual modulo segun el valor de la derecha.

# mensajes

	alert( cade_a_mostrar );
	prompt( text_mensaje, valor_por_defecto)
	confirm( texto_preguntar );

# estructuras condicionales:
 
if( expresion ){
	
}

if( expresion ){
	
}else{
	
}

if( expresion )
{
	
}else if( expresion2 ){
	
}else{
	//no sea expresion ni expresion 2
}

switch( expression )
{
	case caso1 : 
		//sentencias......
		break;
	case caso2 : 
		//sentencias......
		break;
	case caso3 : 
		//sentencias......
		break;
	case caso4 : 
		//sentencias......
		break;
	default: 
		//sentencias por defecto.
}

# sentencias de bucle

	do-while:
	do{
		//sentencias.
	}while( expression );

	while:
	while( expression ){
		//sentencias
	}

	for:
	for( inicializacion; comparacion; paso){
		//sentencias.
	}

	for( indice in objeto )
	{
		//sentencias.
	}

	controladores:
	continue;
	break;

# funciones

declaracion de una funcion:

function nombre( [para1,param2...paramN]){
	//sentencias.	
}

llamar una funcion

nombre_de_la_funcion([]);

#objectos

	function Persona( _nombre, _apellido, _edad)
	{
		this.nombre = _nombre;
		this.apellido = _apellido;
		this.edad = _edad;
		this.getNombreCompleto = function()
		{
			return this.apellido  +  ", " + this.nombre
		}
	}

	Persona.prototype.saluda = function()
	{
		return "nombre completo: " +this.getNombreCompleto() + ", edad: " + this.edad;
	}
	var persona = new Persona( "Carlos", "Gonzalez",30);
	alert(  persona.saluda() );


	
# funciones predeterminadas

alert( texto )
prompt( texto , texto_predetermindado )
confirm( texto )

eval( texto )
parseInt( text )
parseFloat( text )

typeof( value )
setTimeout( "fn", time)
setInterval( "fn" , time)

# metodos de cadena
String.toLowerCase();
String.toUpperCase();
String.substring( indice )
String.indexOf( subcadena )
String.length

# clase matematica
Math.min( n1, n2 );
Math.max( n1,n2 );
Math.random( )

# clase fecha
Date.getFullYear();
Date.getMonth();
Date.getDay();
Date.getHours();
Date.getMinutes();
Date.getSeconds();
Date.getTime(); 

# Arreglos
var vector = new Array();
var vectorPares = new Array( 2,4,6 );
alert( vectorPares[2]);

push( elemento )  //agrega al final
sort() 				// ordena
reverse() 			//invierte
concat( vector 	)	//pega un nuevo vector al final
join( union ) 		//devuelve un texto unido por union

# objetos del navegador
screen
	width: 
	height:
	availWidth:
	availHeight:

window
	closed:
	defaultStatus
	frames *
	history *
	location
		href

document
	write( texto_imprimir )
	writeln( texto )
	getElementById( id )
	close()



































































































































