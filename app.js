
console.log( "hello from sportdb.starter.node.js" );

var sqlite3 = require('sqlite3').verbose();

var db      = new sqlite3.Database('./football.db');


var sportdb = {};

sportdb.fetchEvents = function( callback )  {

  var query =
   "SELECT" +
   "   e.[key]                    AS event_key, " +
   "   l.title || ' ' || s.title  AS event_name " +
   "FROM events e " +
   "     INNER JOIN seasons s ON s.id = e.season_id " +
   "     INNER JOIN leagues l ON l.id = e.league_id";

  var events = [];
 
  db.each( query,
           function(err, row) {
        console.log( "each-row" );
    if(err !== null) {
      console.log( "error:" + err );
    }
    else {
      events.push( row );
    }},
      function(err,ctx) {
        console.log( "each-complete" );
        callback( events );
    }
  );
};

sportdb.fetchEvents( function( rows ) {
  console.log( "events:" );
  console.log( rows );
});


// db.close();

console.log( "bye" );
