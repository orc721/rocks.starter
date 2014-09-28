# sport.db.starter (Node.js Edition)

The sportdb web service starter sample let's build your own HTTP JSON API using the
`football.db`, `worldcup.db`, `ski.db`, `formulal1.db`, etc.



## Getting Started

Step 0: Install node modules via the node package manager (`npm`). Type:

    npm install


Step 1: Copy an SQLite database e.g. `football.db` into your folder.

Step 2: Startup the web service (HTTP JSON API). Type:

    $ node ./server

That's it. Open your web browser and try some services
running on your machine on port 9292 (e.g. `localhost:9292`). Example:


List all events:

- `http://localhost:9292/events`

List all English Premier League 2014/15 teams:

- `http://localhost:9292/event/en.2014_15/teams`


And so on. Now change the sources to fit your needs. Be bold. Enjoy.


## License

The `sportdb.db.starter` scripts are dedicated to the public domain.
Use it as you please with no restrictions whatsoever.


## Questions? Comments?

Send them along to the
[Open Sports & Friends Forum/Mailing List](http://groups.google.com/group/opensport).
Thanks!
