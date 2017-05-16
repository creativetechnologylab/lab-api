var socket = io();

var path;

socket.on( 'connect', function() {
	console.log( 'connected' );
} );

jQuery( document ).ready( function() {
	path = jQuery( '.data' ).data( 'path' );
	console.log( 'listening to ' + path );
	socket.on( 'data', dataReceived );
} );

function dataReceived( msg ) {
	if ( msg.a == path ) {
		jQuery( '.data' ).prepend( "<li><strong>" + msg.b + ":</strong> " + JSON.stringify( msg.data ) + "</li>" )
		jQuery( jQuery( '.data li' ).splice( 5 ) ).remove();
	}
}
