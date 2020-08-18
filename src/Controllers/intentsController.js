const ibm  = require('../Service/ibmcloud')

module.exports = {
async listIntent(req,res){
    try{
      const response = await ibm.listIntents()
      if(response.status === 200){
      return res.status(200).json(response)
      }else if(response.status === 400){
        return res.status(400).json(response)
      }
    }catch(err){
      return res.status(500).json({
        message:'erro ao listar intencoes erro interno 500',
        err
      })
    }  
  },
 async createIntent(req,res){
  const data = req.body
    try{
    const response = await ibm.createIntents(data)
    if(response.status === 201){
      return res.status(201).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(err){
    return res.status(500).json({
      message:'erro ao cadastrar intencoes erro interno 500',
      err
    })
  }  
},
 async deleteintent(req,res){
  const data = req.body
    try{
    const response = await ibm.removeIntent(data)
    if(response.status === 200){
      return res.status(200).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(err){
    return res.status(500).json({
      message:'erro ao remover intencoes erro interno 500',
      err
    })
  }  
}
  
}