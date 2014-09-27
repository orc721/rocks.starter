
var express = require('express');
var app = express();

var sportdb = require( './sportdb' );


app.get( '/events', function( req, res ) {
  sportdb.fetchEvents( function( events ) {
    console.log( events );
    res.json( events );
  });
});

app.get( '/event/:key/teams', function( req, res ) {
  // step 1: fetch records

  var eventKey = req.params.key.replace( "_", "/" );   // replace _ with / e.g. 2014_15 => 2014/15

  sportdb.fetchEventByKey( eventKey, function( event ) {
    console.log( event );
    sportdb.fetchTeamsByEvent( event, function( teams ) {
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

