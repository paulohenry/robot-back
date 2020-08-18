const ibm  = require('../Service/ibmcloud')

let response = ''
let camera =false
let tag_reconhecimento=''
let continu = false

module.exports = { 
  async chat(socket){
  console.log(`client: ${socket.id} conectado via socket`)   
socket.on('message client' ,async(data)=>{           
      if((data.fala === 'Sofia'||
          data.fala === ' Sofia'||
          data.fala === 'Sofia '||
          data.fala === ' Sofia ') && !continu){
           
       await socket.emit('message bot', {
         autor:'AmigoBot',
         fala: 'sim',                           
       })  
       continu=true         
      }else if(continu){
       tag_reconhecimento=''
       response=''
       camera=false        
     try{         
      response = await ibm.chatMessage(data)
      if(response.result){
      if(response.result.output){
      if(response.result.output.intents[0] !== undefined){
      if(response.result.output.intents[0].intent!==[]){   
         tag_reconhecimento =global.image_tag          
         if(tag_reconhecimento!== undefined && tag_reconhecimento!== []  ){
         response.result.output.intents[0].intent===tag_reconhecimento.imagetag?
           camera=true:camera=false     
         }else{
           camera=false
         }            
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
   continu=false
   }
  })
  },
  async chargeModal(socket){

  }
}