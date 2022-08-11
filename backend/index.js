'use strict';

//CONEXION A MONGO DB

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
        .then(()=>{
            console.log('Connected to MongoDB...');
        })
        .catch(err => console.log(err));
