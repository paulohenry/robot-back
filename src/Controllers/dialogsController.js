const ibm  = require('../Service/ibmcloud')

module.exports = {

async listDialogNodes(req,res){
  try{
    const response = await ibm.listResponse()
    if(response.status === 200){
    return res.status(200).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(err){
    return res.status(500).json({
      message:'erro ao listar resposta do robô erro interno 500',
      err
    })
  } 
},
 async deleteDialogNodes(req,res){
  const data = req.body   
  try {
    const response = await ibm.removeDialog(data)
    if(response.status===200){
      console.log('removeDialog', response)       
      return res.status(204).json(response)        
    }else if(response.status===400){
      console.log(response)      
      return res.status(400).json(response)
    }    
  } catch (err) {   
    console.log(err)      
    return res.status(500).json({
      message:'erro ao deletar dialogo, erro interno 500',
      err
  })
 }
},
 async createDialogNodes(req,res){
  const data = req.body   
  try {
    const response = await ibm.createDialog(data)
    if(response.status===201){
      console.log('createDialog', response)       
      return res.status(201).json(response)        
    }else if(response.status===400){
      console.log(response)      
      return res.status(400).json(response)
    }    
  } catch (err) {   
    console.log(err)      
    return res.status(500).json({
      message:'erro ao criar dialogo, erro interno 500',
      err
  })
 }
},

 async updateDialogNodes(req,res){
  const data = req.body   
  try {
    const response = await ibm.updateDialog(data)
    if(response.status===200){
      console.log('updateDialog', response)       
      return res.status(200).json(response)        
    }else if(response.status===400){
      console.log(response)      
      return res.status(400).json(response)
    }    
  } catch (err) {   
    console.log(err)      
    return res.status(500).json({
      message:'erro ao atualizar dialogo, erro interno 500',
      err
  })
  }
 }
}