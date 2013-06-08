(function( $ ,w , undefined){
	$.fn.HolaMundo = function( options ){
		var _defaults ={
			message : 'Hola Mundo!!!',
			onClickEnd:function(){}
		}
		console.log( _defaults , options);
		options = $.extend({}, _defaults, options)
		console.log( _defaults , options);
		if( options == undefined)
		options = _defaults;
		//recorremos los elementos asociados al plugin
		$( this ).each( function( index , li ){
			//por cada elemento le asocio que cuando me hagan click muestre el mensaje dentro del elemento.
			$(li).on('click',function(){

				$(this).text( options.message );
				options.onClickEnd( $(this) );
			});
		});
	}
})(jQuery,window);