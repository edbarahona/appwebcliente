(function( $ ,w , undefined){
	$.fn.HolaMundo = function(){
		var msg = "Hola Mundo!";
		//recorremos los elementos asociados al plugin
		$( this ).each( function( index , li ){
			//por cada elemento le asocio que cuando me hagan click muestre el mensaje dentro del elemento.
			$(li).on('click',function(){
				$(this).text( msg );
			});
		});
	}
})(jQuery,window);