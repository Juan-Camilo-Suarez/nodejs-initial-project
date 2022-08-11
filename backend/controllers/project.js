'use strict'
//importar el modelo
var Project = require('../models/project');


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
    

    },
    saveProject : function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        //guardar el modelo

        project.save((err, projectStored)=>{

            if (err)return res.status(500).send({
                menssage: 'error al guardar'
            }); 
            if (err)return res.status(404).send({
                menssage: 'no se puede guardar el project'
            }); 

            return res.status(200).send({
                project: projectStored,

            });

        })


        return res.status(200). send({
            project: project,
            message: 'metodo sabe project',
    
            });

    },

    getProject: function(req, res){
        var projectId = req.params.id;

        Project.findById(projectId, (err, project) => {
            if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});
            if (err)return res.status(500).send({
                menssage: 'error al devolver los datos'
            }); 
            if (err)return res.status(404).send({
                menssage: 'no se puede encontrar el projecto'
            });

            return res.status(200). send({
                project: project,
                
        
                });
    

        });



    }
}

module.exports = controller;