

module.exports = {
  async saveTensors(req,res){
  const tensor = req.body.tensor
     return res.status(200).json({message:'ok'})
  }
}

// const fs = require('fs');
// fs.writeFile('./Tensors/tensors.json', tensor, (err,result)=>{
  //    if(err){
  //  console.log('deu rim')
  //      }else if(result){
  //    console.log('sucesso')
  //      }
  //    })