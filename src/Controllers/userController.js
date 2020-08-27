const knex = require('../Database/connection')

module.exports = {
  async store(req,res,next){
    try{
      const { 
        nome_aluno,
        ra,            
        image_aluno,        
        image_robot,
        nome_robot,
        tag_camera,
        tags_motors,
        toggle_name_robot,                    
        ibm_api_key,
        ibm_url,
        ibm_skill_id,
        ibm_assistant_id,
        ibm_session_id,        
        knn_model,
        dataset_model, 
      } = req.body.data
      
    const result = await knex.select('ra').from('aluno_dataset').where('ra',ra)              
         if(result.length>0){
              return res.status(200).json({
                 message:'usuário já existe',
                })  
              }
                 
      await knex('aluno_dataset').insert({
          nome_aluno,
          ra,            
          image_aluno,        
          image_robot,
          nome_robot,
          tag_camera,
          tags_motors,
          toggle_name_robot,                    
          ibm_api_key,
          ibm_url,
          ibm_skill_id,
          ibm_assistant_id,
          ibm_session_id,        
          knn_model,
          dataset_model, 
      })
        return res.status(201).json({
          message:'Usuário salvo com sucesso',
          data: {
            nome_aluno,
            ra,            
            image_aluno,        
            image_robot,
            nome_robot,
            tag_camera,
            tags_motors,
            toggle_name_robot,                    
            ibm_api_key,
            ibm_url,
            ibm_skill_id,
            ibm_assistant_id,
            ibm_session_id,  
            knn_model,
            dataset_model, 
          }
        })        
        }catch(error){
          console.log(error)
          return res.status(500).json({
            message:'erro interno',
           })  
        }
  },
  async getAll(req,res,next){   
    try{ 
    const results = await knex.select(
      'nome_aluno',
      'ra',            
      'image_aluno',        
      'image_robot',
      'nome_robot',
      'tag_camera',
      'tags_motors',
      'toggle_name_robot',                    
      'ibm_api_key',
      'ibm_url',
      'ibm_skill_id',
      'ibm_assistant_id',
      'ibm_session_id',        
      ).from('aluno_dataset')
    return res.status(200).json({
      message:'Resgatado com sucesso',
      data:results
    })
   }catch(error){
      return res.status(500).json({
            message:'erro interno',
           })  
   }
  },  
  async getUniqueUser(req,res){
    const {ra} = req.body
    try{ 
      const results = await knex.select(
        'nome_aluno',
        'ra',            
        'image_aluno',        
        'image_robot',
        'nome_robot',
        'tag_camera',
        'tags_motors',
        'toggle_name_robot',                    
        'ibm_api_key',
        'ibm_url',
        'ibm_skill_id',
        'ibm_assistant_id',
        'ibm_session_id',        
        'knn_model',
        'dataset_model',).from('aluno_dataset').where('ra',ra)
      return res.status(200).json({
        message:'Resgatado com sucesso',
        data:results
      })
     }catch(error){
        return res.status(500).json({
              message:'erro interno',
             })  
     }
  },
  async updateUser(req,res){
      const ra = req.body
      // try{
      //     const response=await knex.select('*')
      //     .from('aluno_dataset').where('ra',ra)

      //     return res.status(200).json(response) 
      // }catch(error){
      //   return res.status(500).json({
      //     message:'erro interno',
      //    })  
      // }
  }
}