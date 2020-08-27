const ibm  = require('../Service/ibmcloud')
const knex = require('../Database/connection')
module.exports = {
async listIntent(req,res,next){
    try{
      const {
        ibm_api_key, 
        ibm_url ,
        ibm_skill_id ,                   
      } = req.body
      const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
      const response = await ibm.listIntents(assistantV1,ibm_skill_id)
      if(response.status === 200){
      return res.status(200).json(response)
      }else if(response.status === 400){
        return res.status(400).json({
          message:'erro 400',
          error:response})
      }
    }catch(error){
      return res.status(400).json({
        message:'erro interno 500',
        error:error
      })
    }
  },
 async createIntent(req,res,next){ 
    try{
    const {
      ibm_api_key, 
      ibm_url ,
      intent ,
      description,
      ibm_skill_id     
    } = req.body
    const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.createIntents(intent,description,assistantV1,ibm_skill_id)
    if(response.status === 201){
      return res.status(201).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(error){
    next(error)
  }
},
 async deleteIntent(req,res,next){
   try{
      const {
        ibm_api_key, 
        ibm_url ,
        ibm_skill_id,
        intent           
      } = req.body
      console.log(req.body)
    const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.removeIntent(intent,assistantV1,ibm_skill_id)
    if(response.status === 200){
      return res.status(200).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(error){
    next(error)
  }  
}
  
}