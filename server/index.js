const express = require('express');
const mysql = require('mysql2');

const app = express();

const conexao = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Ve26022003+',
    database: 'solucaonetwork'
});

conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('database conectado')
});

app.get('/', function(req,res){
    res.write('utilizando o Nodemon');
    res.end();
})

app.listen(8080)