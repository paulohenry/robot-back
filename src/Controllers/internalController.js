const os = require('os');
let ifaces = os.networkInterfaces();
const wifi = require('node-wifi')
const exec = require('child_process').exec
const knex = require('../Database/connection')

wifi.init({
  iface:null
})

module.exports= {
    async ipConf(req,res){
      try{
      const result = JSON.stringify(ifaces)
      return res.status(200).json(result)
    }catch(error){
      return res.status(500).json('erro interno ao tentar localizar o IPV4') 
    }
    },

    async wifi(req,res){   
      try{  
    await  wifi.scan((error, networks)=>{
        if (error) {
          return res.status(400).json(error)
        } else {
          return res.status(200).json(networks)        
        }
      });    
    }catch(error){
      return res.status(500).json('erro interno ao tentar escanear redes próximas') 
    }
    },

    async disconnectWifi(req,res){
      try{
      await wifi.getCurrentConnections((error) => {
        if (error) {
          return res.status(400).json(error)
        } else {
          return res.status(200).json('desconectado com sucesso') 
        
        }
      });
    }catch(error){
      return res.status(500).json('erro interno ao tentar desconectar') 
    }
    },
   async deleteWifi(req,res){
      try{
     await wifi.deleteConnection({ ssid: req.body.ssid }, err=>{
        if (err) {
          console.log(err);
        }
        console.log("Deleted");
      });
    }catch(error){
      return res.status(500).json('erro interno ao tentar deletar') 
    }
    },
    async connectWifi(req,res){
      try{
        console.log(req.body)
      await wifi.connect({ ssid: req.body.ssid, password: req.body.password },error => {
        if (error) {
          console.log(error)
          return res.status(400).json({message:'falha'})
        }else {
          console.log('sucesso')
          return res.status(200).json({message:'conectado'})
        
        }
      });
    }catch(error){
      console.log('erro interno')
      return res.status(500).json('erro interno ao tentar conectar') 
    }
    },

    async currentWifi(req,res){
       try{
     await wifi.getCurrentConnections((error, currentConnections) => {
        if (error) {
          return res.status(400).json(error)
        } else {
          return res.status(200).json(currentConnections) 
        
        }
      });
    }catch(error){
      return res.status(500).json('erro interno ao tentar localizar rede conectada') 
    }
      
    },
    
    shutDown(req,res){    
      try{
      exec('shutdown now')
      return res.status(200).json('desligando')
      }catch(error){
        return res.status(500).json('erro interno ao tentar desligar o pc') 
      }
    },    
   updateTagMotors(req,res){

   },
   async updateTagImages(req,res){
      const {
        tag_camera,
        ra
      } = req.body
      
          await knex('aluno_dataset').where('ra',ra)
          .update({
            tag_camera: tag_camera
          })
          return res.status(202).json({
            message:'sucesso na alteracao do dado',
            data:tag_camera
          })
      
   }
}