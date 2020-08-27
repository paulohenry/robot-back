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
                   
            ibm_api_key:"sdRf69T2iu9ME6XpQnnp0wOEdgYtDsA5HjCrIxReACtt",
            ibm_url:"https://api.us-south.assistant.watson.cloud.ibm.com/instances/671853fe-cf5b-4368-a811-fa173a2079c3",
            ibm_skill_id:"15f77cce-1577-4e60-ab66-6d9561cc35b7",
            ibm_assistant_id:"b5dd5ed3-044c-4d0e-9e97-92d4bbb0700a",
            ibm_session_id:"https://api.us-south.assistant.watson.cloud.ibm.com/instances/671853fe-cf5b-4368-a811-fa173a2079c3/v2/assistants/b5dd5ed3-044c-4d0e-9e97-92d4bbb0700a/sessions",
            knn_model:null,
            dataset_model:null,            
          }, 
                 
      ]);
    });
};
