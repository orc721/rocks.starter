
var sportdb = require( './sportdb' );

// var events = [
//              {key: 'en.2014/15',
//               name: 'English Premier League 2014/15' } ];


sportdb.Event.findAll( function( err, events ) {
  console.log( "events:" );
  console.log( events );

  sportdb.Team.findByEvent( events[0], function( err, teams ) {
    console.log( "teams:" );
    console.log( teams );
  });

  sportdb.Event.findByKey( events[0].key, function( err, event ) {
    console.log( "event:" );
    console.log( event );
  });
});

