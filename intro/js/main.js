

var flag = true;
var onClickLink = function( e ){
	e.preventDefault();
	var url = $( this ).attr('href');
	var container = $('#page');
	container.show();
	container.load( url );
	console.log( container );
}
var onReady = function(){

	$("#menu a").on('click',onClickLink);
	$("#page").on('click',function(){ $(this).hide('slow')});
	var onClick = function( e ){
		var video = document.getElementById( "myvideo" );
		video.play();
		console.log( video );
	};
	$('#test').on('click',onClick);
};
$(document).on('ready',onReady);