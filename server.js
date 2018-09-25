var express = require('express');
var app = express();
var mysql = require('mysql');
var methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(express.static('public'));

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


// Initializes the connection variable to sync with a MySQL database
// var connection = mysql.createConnection({
//     host: "localhost",

//     // Your port; if not 3306
//     port: 3306,

//     // Your username
//     user: "root",

//     // Your password
//     password: "Oakland2",
//     database: "friend_db"
// });
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: "Oakland2",
	port: 3306,
	database: 'friend_db'
	});



app.get('/', function(req, res) {
    connection.query(
        "SELECT question FROM question GROUP BY id",
        function(err, response) {
            res.render('index', {
                question: response
            });

        });

});


//form, create a new record on submit
app.post('/submit', function(req, res) {
    // res.json(req.body);
    // req.body turns into an object
    connection.query(
        "INSERT INTO respond (user_name, question_id, likes) VALUES (?, ?, ?)", [req.body.name, 1, req.body.answer1],
        function(err, response) {
            if (err) throw err;
        }
    );
    connection.query(
        "INSERT INTO respond (user_name, question_id, likes) VALUES (?, ?, ?)", [req.body.name, 2, req.body.answer2],
        function(err, response) {
            if (err) throw err;
            res.redirect('/');
        }
    );
   
console.log(req.body);
});


app.listen(3000);
console.log('3000 is your port');