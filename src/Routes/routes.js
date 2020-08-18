const { Router } = require('express')

const intentController = require('../Controllers/intentsController')
const exampleController = require('../Controllers/examplesIntentsController')
const dialogController = require('../Controllers/dialogsController')
const internalController = require('../Controllers/internalController')
const tensorFlowController = require('../Controllers/tensorflowController')

const routes = new Router()

//-------------------crud intents-------------------
routes.get('/list-intents', intentController.listIntent)
routes.post('/create-intent', intentController.createIntent)
routes.post('/delete-intent', intentController.deleteintent)
//-------------------crud example-------------------
routes.post('/create-example', exampleController.createExample)
routes.post('/delete-example', exampleController.deleteExample)
//-------------------crud dialog robot-------------------
routes.get('/list-dialog', dialogController.listDialogNodes)
routes.post('/delete-dialog', dialogController.deleteDialogNodes)
routes.post('/create-dialog',dialogController.createDialogNodes)
routes.post('/update-dialog',dialogController.updateDialogNodes)
//-------------------crud dialog robot-------------------
routes.get('/ipconf', internalController.ipConf)
//-------------------methods fow wifi conect-------------------
routes.get('/listwifi',internalController.wifi)
routes.post('/conectwifi',internalController.conectWifi)
//-------------------shutdown method-------------------
routes.get('/shutdown', internalController.shutDown)
//-------------------method for camera-------------------
routes.post('/image_tag', internalController.imageTag)
routes.post('/savetensores', tensorFlowController.saveTensors)

module.exports.routes=routes
