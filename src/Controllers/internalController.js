const os = require('os');
let ifaces = os.networkInterfaces();
const wifi = require('node-wifi')
const exec = require('child_process').exec


module.exports= {
 ipConf(req,res){
  const result = JSON.stringify(ifaces)
  return res.status(200).json(result)
},

wifi(req,res){
  let result = ''
  wifi.init({
    iface:null
  })
  wifi.scan()
  .then(networks=>{
    result=networks
  })
  .catch(error => result=error)
  console.log(result)
  return res.status(200).json(result)
},

conectWifi (req,res){

  
},

shutDown(req,res){    
  exec('shutdown now')
},

async imageTag(req,res){
  const image_tag = req.body.image_tag  
  console.log('global:', image_tag)
  return res.status(200).json({
    message:'salvo com sucesso',
    imagetag:global.image_tag
  })
 }
}