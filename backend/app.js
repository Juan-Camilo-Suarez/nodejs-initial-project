'use strict'

//congif express

var express = require('express');

var bodyParser = require('body-parser');
const { get } = require('http');


var app = express();


//CARGAR ARCHIVOS DE RUTAS rutas

var project_routes = require('./routes/project');
// middleware ( acciones que se ejecutan antes de ejecutar un controlador)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//CORS


//RUTAS

app.use('/api', project_routes);

/*
app.get('/', (req, res)=>{
    res.status(200).send(
        'pagina de inicio'
    );
})


app.post('/test/:id', (req, res)=>{
    console.log(req.params.id);
    console.log(req.query.name);
    console.log(req.body.hola);
    res.status(200).send({
        message: 'hola mundo mi api'
    });
})
*/


//EXPORTAR EL MODULO

module.exports = app;