'use strict';

//CONEXION A MONGO DB

var mongoose = require('mongoose');

// CARGAR  LA CONFIGURACION
var app = require('./app')
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
        .then(()=>{
            console.log('Connected to MongoDB...');


            //CREACION DEL SERVIDOR 
            
            app.listen(port, ()=>{
                console.log('servidor corriendo por la url: localhost:3700');
            });

        })
        .catch(err => console.log(err));
