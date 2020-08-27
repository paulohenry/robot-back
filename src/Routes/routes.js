const { Router } = require('express')

const intentController = require('../Controllers/intentsController')
const exampleController = require('../Controllers/examplesIntentsController')
const dialogController = require('../Controllers/dialogsController')
const internalController = require('../Controllers/internalController')
const interacaoController = require('../Controllers/interacaoController')
const tensorflowController = require('../Controllers/tensorflowControlller')
const userController = require('../Controllers/userController')
const adminController = require('../Controllers/adminController')

const routes = new Router()

//-------------------crud intents--------------------------//
routes.post('/list-intents', intentController.listIntent)
routes.post('/create-intent', intentController.createIntent)
routes.post('/delete-intent', intentController.deleteIntent)
//-------------------crud example--------------------------//
routes.post('/create-example', exampleController.createExample)
routes.post('/delete-example', exampleController.deleteExample)
//-------------------crud dialog robot----------------------//
routes.post('/list-dialog', dialogController.listDialogNodes)
routes.post('/delete-dialog', dialogController.deleteDialogNodes)
routes.post('/create-dialog',dialogController.createDialogNodes)
routes.post('/update-dialog',dialogController.updateDialogNodes)
//-------------------internals----------------------//
routes.get('/ip-conf', internalController.ipConf)
//-------------------methods fow wifi conect-----------------//
routes.put('/motorsTags', internalController.updateTagMotors)
routes.put('/imagesTags', internalController.updateTagImages)
routes.get('/list-wifi',internalController.wifi)
routes.get('/current-wifi',internalController.currentWifi)
routes.post('/connect',internalController.connectWifi)
routes.get('/disc',internalController.disconnectWifi)
routes.post('/delete',internalController.deleteWifi)
//-------------------shutdown method-------------------------//
routes.get('/shut-down', internalController.shutDown)
//---------------------methods tensorflow----------------------//
routes.put('/update-tensor', tensorflowController.update)
//---------------------methods interacao----------------------//
routes.post('/interacao', interacaoController.interacao)
//-----------------------methods--user------------------------//
routes.post('/users', userController.store)
routes.get('/all-users', userController.getAll)
routes.post('/unique-user', userController.getUniqueUser)
routes.put('/update-user', userController.updateUser)
//----------------------admin routes -------------------------//
routes.post('/admin/consult', adminController.getUnique)
module.exports.routes=routes
