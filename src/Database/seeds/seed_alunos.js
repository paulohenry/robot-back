const magic = require('../../encoded/magic.json')
const avatar = require('../../encoded/avatar.json')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('aluno_dataset').del()
    .then(function () {
      // Inserts seed entries
      return knex('aluno_dataset').insert([
          {
            id: 1, 
            nome_aluno: 'versão de apresentação',
            ra:'MS000001',            
            image_aluno:magic,            
            image_robot:avatar,
            nome_robot:'sofhia',
            tag_camera:null,
            tags_motors:null,
            toggle_name_robot:true,
                   
            ibm_api_key:"",
            ibm_url:"",
            ibm_skill_id:"",
            ibm_assistant_id:"",
            ibm_session_id:"",
            knn_model:null,
            dataset_model:null,            
          }, 
                 
      ]);
    });
};
