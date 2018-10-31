//methods to query MySQL database
//
var connection = require('../public/javascripts/db.js');

function queries() {
    //get all references
    this.getAll = function(callback) {   //res argument to getAll
        connection.init(); //initializing connection through db.js
        connection.acquire(function(err, con) {    //using err and con as arguments
            var query = `SELECT 
                title, last_name, first_name, year 
                FROM book_author
                INNER JOIN book_table ON book_table.book_id = book_author.book_id
                INNER JOIN author_table ON author_table.author_id = book_author.author_id`; 
            return con.query(query, callback)
            con.release();
        });
    }

    this.getOnlyReference = function(callback) {
        connection.init();

        connection.acquire(function(err, con) {
            var query = "SELECT * FROM ref"
            return con.query(query, callback)
            con.release();
        });
    }
}

module.exports = new queries();
