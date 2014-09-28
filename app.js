
var express = require('express');
var app = express();

var sportdb = require( './sportdb' );


app.get( '/events', function( req, res, next ) {
  sportdb.Event.findAll( function( err, events ) {
    if( err )
      return next( err );
    
    console.log( events );
    res.json( events );
  });
});

app.get( '/event/:key/teams', function( req, res, next ) {
  // step 1: fetch records

  var eventKey = req.params.key.replace( "_", "/" );   // replace _ with / e.g. 2014_15 => 2014/15

  sportdb.Event.findByKey( eventKey, function( err, event ) {
    if( err )
      return next( err );
    if( event === undefined )
      return next( new Error( "Event Not Found w/ Key >" + eventKey + "<" ) );

    console.log( event );
    sportdb.Team.findByEvent( event, function( err, teams ) {
      if( err )
        return next( err );

      console.log( teams );
      // step 2: map to json structs for serialization/marshalling
      var data = {
        key:   event.key,
        title: event.title,
        teams: teams
      };

      res.json( data );
    });
  });
});


module.exports = app;

