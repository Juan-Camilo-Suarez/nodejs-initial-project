'use strict'

var controller = {
    home: function(req,res){
        return res.status(200).send({

        message: 'soy la home',

        });

    },
    tets:function(req, res){

        return res.status(200).send({

            message: 'soy el tes',
    
            });
    

    }

}

module.exports = controller;