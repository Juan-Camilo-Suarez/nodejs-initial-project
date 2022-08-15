'use strict'

//congif express

var express = require('express');

var bodyParser = require('body-parser');


var app = express();


//CARGAR ARCHIVOS DE RUTAS rutas

var project_routes = require('./routes/project');
// middleware ( acciones que se ejecutan antes de ejecutar un controlador)

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


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