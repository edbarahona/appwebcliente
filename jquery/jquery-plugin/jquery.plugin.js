(function( $ ,w , undefined){
	$.fn.HolaMundo = function(){
		$( this ).each( function( index , li ){

			var html = $( li ).html();
			alert( html );
		});
	}
})(jQuery,window);