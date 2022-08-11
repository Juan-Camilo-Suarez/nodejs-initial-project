'use strict'

var express = require('express')
//carga el controlador 
var ProjectController = require('../controllers/project');

var router = express.Router();


router.get('/home', ProjectController.home);
router.post('/test', ProjectController.tets);
router.post('/save-project', ProjectController.saveProject);



module.exports = router;