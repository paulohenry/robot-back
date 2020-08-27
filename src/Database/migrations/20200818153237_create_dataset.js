exports.up = knex => knex.schema.createTable('aluno_dataset', (table)=>{
       table.increments().primary()
       table.string('nome_aluno').notNullable()
       table.string('ra').notNullable().unique()

       table.string('ibm_api_key')
       table.string('ibm_url')
       table.string('ibm_assistant_id')
       table.string('ibm_skill_id')
       table.string('ibm_session_id')

       table.json('knn_model')
       table.json('dataset_model')

       table.string('image_aluno')
       table.string('image_robot')
       
       table.string('nome_robot')
       table.json('tag_camera')
       table.json('tags_motors')
       
       table.boolean('toggle_name_robot')

       table.timestamp(true, true)   
  })

exports.down = knex => knex.schema.dropTable('aluno_dataset')
//comentario