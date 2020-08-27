const ibm = require('../Service/ibmcloud')
const knex =require('../Database/connection')



module.exports={
  interacao:async(req,res)=>{
      const { 
        ra,
        transcricao_robot,
        ibm_api_key,
        ibm_url,
        continu,
        ibm_assistant_id      
      } = req.body
      try{
        
        const datas = await knex.select('*').from('aluno_dataset').where('ra',ra)              
        
        if(datas.length > 0 && datas[0].toggle_name_robot){
                      
          const assistantV2 =  ibm.assistanteV2(ibm_api_key,ibm_url)
          const response = await ibm.chatMessage(transcricao_robot,assistantV2,ibm_assistant_id)
          
          if(response.result){
          if(response.result.output){
          if(response.result.output.intents[0] !== undefined){
          if(response.result.output.intents[0].intent.length > 0){ 
          if((response.result.output.intents[0].intent===datas[0].nome_robot && !continu)){
           
            return res.status(200).json({
                 transcricao_robot:response.result.output.generic[0].text,
                 camera:false,
                 motor:false,
                 continu:true           
              })          
            
          }else if(continu){
         
              if(response.result.output.intents[0].intent===datas[0].tag_camera){
                return res.status(200).json({
                  transcricao_robot:response.result.output.generic[0].text,
                  camera:true,
                  motor:false,
                  continu:false                
               }) 
              }else if(response.result.output.intents[0].intent===datas[0].nome_robot){
                return res.status(200).json({
                  transcricao_robot:response.result.output.generic[0].text,
                  camera:false,
                  motor:false,
                  continu:true                
               }) 
              }else{
                return res.status(200).json({
                  transcricao_robot:response.result.output.generic[0].text,
                  camera:false,
                  motor:false,
                  continu:false                
               }) 
              }

          }
        }
      }else if(continu){
        return res.status(200).json({
          transcricao_robot:response.result.output.generic[0].text,
          camera:false,
          motor:false,
          continu:false                  
       })
       }else if(!continu){
        return res.status(200).json({
          transcricao_robot:'',
          camera:false,
          motor:false,
          continu:false                  
       })
       }
    }
    
  }




  }else{
    const assistantV2 =  ibm.assistanteV2(ibm_api_key,ibm_url)
    const response = await ibm.chatMessage(transcricao_robot,assistantV2,ibm_assistant_id)
    if(response.result){
    if(response.result.output){
    if(response.result.output.intents[0] !== undefined){
    if(response.result.output.intents[0].intent.length > 0){ 
      if(response.result.output.intents[0].intent===datas[0].tag_camera){
       
        return res.status(200).json({
          transcricao_robot:response.result.output.generic[0].text,
          camera:true,
          motor:false,
          continu:false                  
       }) 
      }else{
        return res.status(200).json({
          transcricao_robot:response.result.output.generic[0].text,
          camera:false,
          motor:false ,
          continu:false                 
       })
      }
       }
      }else{
        return res.status(200).json({
          transcricao_robot:response.result.output.generic[0].text,
          camera:false,
          motor:false,
          continu:false                  
       })
       }
     }
    }
   }
  }catch(error){
    return res.status(500)
  }
    }
  }

