exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credentials_dataset').del()
    .then(function () {
      // Inserts seed entries
      return knex('credentials_dataset').insert([
          {
            identifier:'aluno0001',
            ibm_assistant_id:'',
            ibm_skill_id:''       
          }, 
          {
            identifier:'aluno0002',
            ibm_assistant_id:'',
            ibm_skill_id:''            
          },
          {
            identifier:'aluno0003',
            ibm_assistant_id:'',
            ibm_skill_id:''            
          },
          {
            identifier:'aluno0004',
            ibm_assistant_id:'',
            ibm_skill_id:''
          },                
      ]);
    });
};
