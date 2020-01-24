const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'ifsp@1234',
    database: 'agroecologia'
});

db.connect();

app.get('/data', function (req, res) {
    var sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/data', function (req, res) {
    // console.log(req);
    // console.log('Body');
    // console.log(req.body); 
    let data = {};
    data.nome = req.body.userName;
    data.email = req.body.userEmail;
    data.senha = req.body.userPassword;
    // console.log(data);
    let sql = 'INSERT INTO usuarios SET ?';
    db.query(sql, data, (err, result) => {
        if (err) {
            console.log(err);
            let errorMessage = 'Erro desconhecido.';
            if (err.code = 'ER_DUP_ENTRY') {
                //console.log('Já existe um registro armazenado com o mesmo e-mail.');
                errorMessage = 'E-mail duplicado.';
            }
            res.send({
                status: 'Erro ao armazenar os dados!',
                errorMessage: errorMessage
            });
        } else {
            console.log(result);
            console.log('Dados armazenados com sucesso.');
            res.send({
                status: 'Dados armazenados com sucesso !',
                errorMessage: null,
                no: null,
                nome: req.body.nome,
                email: req.body.email
            });
        }
    });
});

app.post('/login', function (req, res) {
    // console.log(req);
    // console.log('Body');
    console.log(req.body); 
    let data = {};
    data.email = req.body.userEmail;
    data.senha = req.body.userPassword;
    let sql = 'SELECT * FROM USUARIOS WHERE email="'+req.body.email+'" AND senha="'+req.body.password+'"';
    console.log(sql);
    // db.query(sql, data, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         let errorMessage = 'Erro desconhecido.';
    //         if (err.code = 'ER_DUP_ENTRY') {
    //             //console.log('Já existe um registro armazenado com o mesmo e-mail.');
    //             errorMessage = 'E-mail duplicado.';
    //         }
    //         res.send({
    //             status: 'Erro ao armazenar os dados!',
    //             errorMessage: errorMessage
    //         });
    //     } else {
    //         console.log(result);
    //         console.log('Dados armazenados com sucesso.');
    //         res.send({
    //             status: 'Dados armazenados com sucesso !',
    //             errorMessage: null,
    //             no: null,
    //             nome: req.body.nome,
    //             email: req.body.email
    //         });
    //     }
    // });
});

let port = 3210;

app.listen(3210, () => {
    console.log('Server atendendo na porta', port)
});