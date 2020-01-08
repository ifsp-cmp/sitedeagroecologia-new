const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : 'ifsp@1234',
    database : 'agroecologia'
});

db.connect();

app.get('/data', function(req,res){
var sql = 'SELECT * FROM usuarios';
db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result);
});
});

app.post('/data', function(req, res){
    console.log(req);
    console.log('Body');
	console.log(req.body); 
    var data = {nome:req.body.nome, email:req.body.email};
    // var sql = 'INSERT INTO usuarios SET ?';
    // db.query(sql, data, (err, result)=>{
    // if(err) throw err;
    // console.log(result);
    // res.send({
    //     status: 'Dados armazenados com sucesso !',
    //     no: null,
	// 	nome: req.body.nome,
	// 	email: req.body.email
	// });
// });
});

let port = 3210;

app.listen(3210, ()=>{
    console.log('Server atendendo na porta', port)
});