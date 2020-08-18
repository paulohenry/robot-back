const ibm  = require('../Service/ibmcloud')

module.exports = {
 async createExample(req,res){
  const data = req.body
  try{
    const response = await ibm.createExample(data)
    if(response.status === 201){
      return res.status(201).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(err){   
    return res.status(500).json({
      message:'erro ao criar um exemplo de intenções, erro interno 500',
      err
  })
 }
},

  async deleteExample(req,res){
  const data = req.body   
  try {
    const response = await ibm.removeExample(data)
    if(response.status===200){       
      return res.status(204).json(response)        
    }else if(response.status===400){
      return res.status(400).json(response)
    }    
  } catch (err) {   
    return res.status(500).json({
      message:'erro ao deletar exemplo de intenções, erro interno 500',
      err
  })
  }
  }
}