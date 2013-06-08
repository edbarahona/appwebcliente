$( document ).on('ready',function(){
	//relacinamos un elemento al plugin
	$('li').HolaMundo(
	{ 
		'message':'cambiar texto',
		onClickEnd:function( element ){
				$(element).addClass("clicked");
		}
	});
});