
var app = require( './app' );


var server = app.listen( 9292, function() {
    console.log( 'Listening on port %d', server.address().port );
});

