const ibm  = require('../Service/ibmcloud')

module.exports = {
 async createExample(req,res,next){
  try{
    const {
      ibm_api_key, 
      ibm_url ,
      intent,
      text,
      ibm_skill_id   
    } = req.body
  const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.createExample(intent,text,assistantV1,ibm_skill_id)
    if(response.status === 201){
      return res.status(201).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(error){
    next(error)
  }
},

  async deleteExample(req,res,next){
    try{
      const {
        ibm_api_key, 
        ibm_url ,
        intent,
        text,
        ibm_skill_id,      
      } = req.body
    const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.removeExample(intent,text,assistantV1,ibm_skill_id)
    if(response.status===200){       
      return res.status(204).json(response)        
    }else if(response.status===400){
      return res.status(400).json(response)
    }    
  } catch(error){
    next(error)
  }
  }
}