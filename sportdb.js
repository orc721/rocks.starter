
console.log( "hello from sportdb.js" );

var sqlite3 = require('sqlite3');
sqlite3.verbose();

// fix/todo: add read_only mode
var db      = new sqlite3.Database('./football.db');


var sportdb = {
  Team:  {},
  Event: {}
};


sportdb.Team.findByEvent = function( event, callback )  {

 var query =
  "SELECT" +
  "  t.[key], " +
  "  t.title, " +
  "  t.code   " +
  "FROM teams t " +
  "  INNER JOIN events_teams et ON et.team_id = t.id " +
  "  INNER JOIN events e ON e.id = et.event_id " +
  "WHERE e.[key] = ?";

  db.all( query, event.key,
           function(err, rows) {
        console.log( "Team.findByEvent-complete" );
        callback( err, rows );
   });
};


sportdb.Event.findByKey = function( key, callback ) {

  var query =
    "SELECT" +
    "  e.[key] AS key, " +
    "  l.title || ' ' || s.title AS title " +
    "FROM events e " +
    "     INNER JOIN seasons s ON s.id = e.season_id " +
    "     INNER JOIN leagues l ON l.id = e.league_id " +
    "WHERE e.[key] = ?";

  db.get( query, key,
           function(err, row) {
        console.log( "Event.findByKey-complete" );
        callback( err, row );
  });
};

sportdb.Event.findAll = function( callback )  {

  var query =
   "SELECT" +
   "   e.[key]                    AS key, " +
   "   l.title || ' ' || s.title  AS title " +
   "FROM events e " +
   "     INNER JOIN seasons s ON s.id = e.season_id " +
   "     INNER JOIN leagues l ON l.id = e.league_id";

  db.all( query,
           function(err, rows) {
        console.log( "Event.findAll-complete" );
        callback( err, rows );
   });
};

// todo/fix: close db - possible? when? how?
// db.close();


module.exports = sportdb;

