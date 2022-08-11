'use strict'

//congif express

var express = require('express');

var bodyParser = require('body-parser');
const { get } = require('http');


var app = express();


//CARGAR ARCHIVOS DE RUTAS rutas


// middleware ( acciones que se ejecutan antes de ejecutar un controlador)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//CORS


//RUTAS
app.get('/', (req, res)=>{
    res.status(200).send(
        'pagina de inicio'
    );
})


app.get('/test', (req, res)=>{
    res.status(200).send({
        message: 'hola mundo mi api'
    });
})


//EXPORTAR EL MODULO

module.exports = app;