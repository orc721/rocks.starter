
var sportdb = require( './sportdb' );

// var events = [
//              {key: 'de.2014/15',
//               name: 'English Premier League 2014/15' } ];


sportdb.fetchEvents( function( events ) {
  console.log( "events:" );
  console.log( events );

  sportdb.fetchTeamsByEvent( events[0], function( teams ) {
    console.log( "teams:" );
    console.log( teams );
  });
});

