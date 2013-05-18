//Application
var App = 
{
	contendor: null,
	stopButton: null,
	interval: null,
	startup : function()
	{
		//capturo los elemntos
		App.stopButton = App.get( "stopButton");
		App.contendor = App.get( "message");
		App.interval = setInterval( function(){
			App.html( Clock.getDate() );
		},1000);
		//manejo los eventos.
		App.stopButton.onclick = App.onClickHandler;
	},
	get: function( id ){
		return document.getElementById( id );
	},
	onClickHandler : function( e ){
		clearInterval( App.interval );
	},
	html: function( html ){
		App.contendor.innerHTML = "<h1>" + html + "</h1>";
	}

}

var Clock = {
	format : function( num ){
		return ( num < 10 )?  "0" + num: num;
	},
	getDate: function(){
		var date = new Date();
		return Clock.format( date.getHours() )
			+ ":" + Clock.format( date.getMinutes() )
			+ ": " + Clock.format( date.getSeconds() );
	}
}