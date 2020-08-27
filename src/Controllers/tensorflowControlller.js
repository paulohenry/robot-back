const knex = require('../Database/connection')

module.exports ={
   update:async(req,res)=>{
      const {
        ra,
        knn_model,
        dataset_model
      } = req.body
      try{
          const user = 
            await knex.select('*')
                  .from('aluno_dataset')
                  .where('ra',ra)
          if(user[0].ra===ra){

            const updated = await knex('aluno_dataset')
            .where('ra',ra)
            .update({
                  knn_model:knn_model,
                  dataset_model:dataset_model
                })

            console.log(updated)
              return res.status(202).json({
                message:'salvo com sucesso',
                data:updated
              })
          }else{
            return res.status(404).json({
              message:'você não pode alterar os dados de outro usuário',
              
            })
          }
          
          }catch(error){
        return res.status(500).json({
          message:'erro interno 500',
          error,
        })
      }
   }
}