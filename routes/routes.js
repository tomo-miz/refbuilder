//custom route for fetching data
var fs = require('fs')
var queries = require('../data_access/queries.js');

//import formatter for reference page
var formatter = require('../public/javascripts/formatter.js');
var arrayBuilder = require('../public/javascripts/arrayBuilder.js');

module.exports = {
    index: function(app) {
        app.get('/catalog', function(req, res) {
            queries.getAll(function (err, result) {
                res.render('index', {title: 'Homepage'
                   ,reference: result})
            });    
        });
    },

    create: function(app) {
        app.get('/catalog/create', function(req, res) {
            res.render('create', {title: 'New Reference'})
        });
    },

    output: function(app) {
        app.get('/catalog/build', function(req, res) {
            queries.getAll(function(err, result) {
                res.render('output', {title: 'Builder'
                    ,reference: result})
            });
        });
        app.post('/catalog/build/', function(req, res) {
            queries.getAll(function(err, result) {
                res.render('output', {title: 'Builder'
                    ,reference: result})
            })
            var values = req.body.mycheckbox;
            endResult = arrayBuilder(values);
            console.log(endResult);
        });
    }
}
