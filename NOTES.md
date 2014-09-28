# Notes


## Dev

### Sqlite

- add mode sqlite3.OPEN_READONLY to new sqlite3.Database; defaults to OPEN_READWRITE | OPEN_CREATE

### Error Handling

- use `if( err !== null)` instead of `if( err )`  - needed? why? why not?

- what to HTTP status to use for record (key) not found ???

### Debug

use

    $ DEBUG=express:* node ./server

for debug messages

