const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'gameking_db'
});


const app = express();

app.get('/posts', function (req, res) {
    connection.connect();

    connection.query('SELECT user_id (snake+asteroids+racecar) AS Total from scores Order by total DESC', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});

app.listen(3000, () => {
 console.log('Go to http://localhost:3000/posts to see posts');
});