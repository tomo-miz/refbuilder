//methods to query MySQL database
//
var connection = require('../public/javascripts/db.js');

function queries() {
    //get all references
    this.getAll = function(callback) {   //res argument to getAll
        connection.init(); //initializing connection through db.js
        connection.acquire(function(err, con) {    //using err and con as arguments
            if (err) throw err;
            
            var query = `SELECT 
                title, date, pages, pub_name, city, journal, type, issue, GROUP_CONCAT(CONCAT(last_name, ', ', SUBSTRING(first_name, 1,1)) SEPARATOR '. ') AS name
                FROM book_table
                INNER JOIN book_author ON book_table.book_id = book_author.book_id
                INNER JOIN author_table ON author_table.author_id = book_author.author_id
                INNER JOIN book_pub ON book_pub.book_id = book_table.book_id
                INNER JOIN publisher_table ON publisher_table.pub_id = book_pub.pub_id
                INNER JOIN book_type ON book_type.book_id = book_table.book_id
                INNER JOIN type_table ON type_table.type_id = book_type.type_id
                GROUP BY title, date, pages, pub_name, city, journal, type, issue 
                ORDER BY name`; 
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
