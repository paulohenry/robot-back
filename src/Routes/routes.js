const { Router } = require('express')
const ibm  = require('../Service/ibmcloud')


const routes = new Router()

routes.get('/list-intents', async(req,res)=>{
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
})

routes.post('/create-intent',async(req,res)=>{
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
})
routes.post('/delete-intent',async(req,res)=>{
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
})

routes.post('/create-example',async(req,res)=>{
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
})


routes.post('/delete-example',async(req,res)=>{
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
})

routes.get('/list-dialog', async (req,res)=>{
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
})
routes.post('/delete-dialog',async(req,res)=>{
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
})

routes.post('/create-dialog',async(req,res)=>{
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
})
routes.post('/update-dialog',async(req,res)=>{
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
})



module.exports.routes=routes
