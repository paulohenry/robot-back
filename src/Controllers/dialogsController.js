const ibm  = require('../Service/ibmcloud')

module.exports = {

async listDialogNodes(req,res,next){
  try{
    const {
      ibm_api_key, 
      ibm_url ,
      ibm_skill_id     
    } = req.body
  const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.listDialog(assistantV1,ibm_skill_id)
    if(response.status === 200){
    return res.status(200).json(response)
    }else if(response.status === 400){
      return res.status(400).json(response)
    }
  }catch(error){
    next()
  } 
},
 async deleteDialogNodes(req,res,next){
  try{
    const {
      ibm_api_key, 
      ibm_url ,
      ibm_skill_id,
      dialog_node   
    } = req.body
    const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.removeDialog(dialog_node,assistantV1,ibm_skill_id)
    if(response.status===200){
      console.log('removeDialog', response)       
      return res.status(204).json(response)        
    }else if(response.status===400){
      console.log(response)      
      return res.status(400).json(response)
    }    
  } catch(error){
    next()
  }
},
 async createDialogNodes(req,res,next){
  try{
    const {
      ibm_api_key, 
      ibm_url ,
      ibm_skill_id,
      request   
    } = req.body
    const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.createDialog(request,assistantV1,ibm_skill_id)
    if(response.status===201){
      console.log('createDialog', response)       
      return res.status(201).json(response)        
    }else if(response.status===400){
      console.log(response)      
      return res.status(400).json(response)
    }    
  } catch(error){
    next()
  }
},
 
 async updateDialogNodes(req,res,next){
  try{
    const {
      ibm_api_key, 
      ibm_url ,
      ibm_skill_id,
      request   
    } = req.body
    const assistantV1 = ibm.assistanteV1(ibm_api_key,ibm_url)
    const response = await ibm.updateDialog(request,assistantV1,ibm_skill_id)
    if(response.status===200){
      console.log('updateDialog', response)       
      return res.status(200).json(response)        
    }else if(response.status===400){
      console.log(response)      
      return res.status(400).json(response)
    }    
  } catch(error){
    next(error)
  }
 }
}