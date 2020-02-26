//https://stackoverflow.com/questions/54180722/connecting-node-js-app-on-google-cloud-app-engine-to-a-google-cloud-sql-instance

const express = require('express');
const mysql = require('mysql');

const app = express();

var config = {
    user: process.env.SQL_USER,
    database: process.env.SQL_DATABASE,
    password: process.env.SQL_PASSWORD
}

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }

var connection = mysql.createConnection(config);

connection.connect();

app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM usuarios', function(err, result, fields){
            if (err) throw err;
            res.send(result);
        }
    );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});