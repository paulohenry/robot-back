const knex = require('../Database/connection')

module.exports = {
  async store(req,res,next){
   
  },
  async getAll(req,res){   
    
  }, 
  async getUnique(req,res){
    const {identifier} = req.body
    console.log(identifier)  
    try{     
      const results = await knex.select('*').from('credentials_dataset')
        .where('identifier',identifier)
      if(results.length>0){
        const user = await knex.select('ibm_assistant_id').from('aluno_dataset')
        .where('ibm_assistant_id', results[0].ibm_assistant_id)
        if(user.length>0){
          return res.status(200).json({
            message:'Credencial já em uso',
            data:[]
          })
        }else{
          return res.status(201).json({
              message:'Credencial resgatada com sucesso',
              data:results
              })
        }
      }else{
        return res.status(200).json({
          message:'Credencial não existe',
          data:[]
        })
      }      
     }catch(error){
       console.log(error)
        return res.status(500).json({
              message:'erro interno',
             })  
     }
  },
  async delete(req,res){

  }  
}