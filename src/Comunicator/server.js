const express = require('express')
const app = express()
const server = require('http').Server(app)
const socketio = require('socket.io')(server)

const ibm  = require('../Service/ibmcloud')
const opencv = require('../Service/opencv')

const coletions_to_train=[]
let response = ''
let camera =false
let startVisionCamera=false
 
socketio.on('connection', (socket)=>{
   console.log(`client: ${socket.id} conectado via socket`)   
socket.on('message client' ,async(data)=>{        
           
    response=''
    try{         
       response = await ibm.chatMessage(data)
       console.log(response)
       if(response.result){
       if(response.result.output){
       if(response.result.output.intents[0] !== undefined){
       if(response.result.output.intents[0].intent){                 
          response.result.output.intents[0].intent==data.tagcamera?
           camera=true:camera=false                  
       }  
     }            
          
   }
  }
 }catch(err){
     response.result.output.generic[0].text='aconteceu um erro no meu sistema não vou poder lhe ajudar agora'
     console.log(`caiu no catch do comunicator/server.js --> ${err}`)
 }
socket.emit('message bot', {
   autor:'AmigoBot',
   fala: response.result.output.generic[0].text,
   respostaCompleta: response,
   camera: camera,         
}) 

})

socket.on('startVision', async(data)=>{
    if(data.startVisionCamera===true){
      startVisionCamera=true
    }else if(data.startVisionCamera===false){
      startVisionCamera=false
      opencv.stop()
    }
})

socket.on('submit_to_train', async(data)=>{
  
  coletions_to_train.push()

  socket.emit('take_picture',{
    colections:coletions_to_train
  })  
})



}) 



setInterval(async()=>{   
  if(camera===true){
    let data = opencv.cam(true)    
    socketio.emit('data', data)
  }else if(startVisionCamera===true){
    let data = opencv.cam()    
    socketio.emit('data', data)
  }
},1000/3)



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/list-intents', async(req,res)=>{
  try{
    const list = await ibm.listIntents()
    return res.send(list)
  }catch(err){
    return res.send(err)
  }  
})
app.get('/list-workspaces', async(req,res)=>{
  try{
    const list = await ibm.listWorkspaces()
    return res.send(list)
  }catch(err){
    return res.send(err)
  }  
})

server.listen(3001, ()=>{
  console.log('conexao aberta na porta 3001')
})

  