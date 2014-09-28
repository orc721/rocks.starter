
var http = require( 'http' ),
    app = require( './app' );


//////////////////////////////////////////
// add error handling middleware

// catch 404 and forward to error handler
app.use( function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// note: error handler will print stacktrace
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json( {
        error: {
            status:  err.status,
            message: err.message,
            // o: err
        }
    });
});




var port = 9292;

var server = http.createServer( app ).listen( port, function() {
    console.log( 'Listening on port %d; env is %s',  port, app.get('env'));
});

