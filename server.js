const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'gameking_db'
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const app = express();

app.get('/posts', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM posts LIMIT 0, 10', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});

app.listen(3000, () => {
 console.log('Go to http://localhost:3000/posts to see posts');
});