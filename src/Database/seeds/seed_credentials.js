exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credentials_dataset').del()
    .then(function () {
      // Inserts seed entries
      return knex('credentials_dataset').insert([
          {
            identifier:'aluno0001',
            ibm_assistant_id:'9922d936-5834-47b4-b16c-21adb10fd2b5',
            ibm_skill_id:'586044b8-c528-4dcc-8ce0-3934c48e4419'       
          }, 
          {
            identifier:'aluno0002',
            ibm_assistant_id:'e9c683e1-992d-453f-a76c-3760d2eed910',
            ibm_skill_id:'ed67c435-517e-4281-9baa-375f9be551c8'            
          },
          {
            identifier:'aluno0003',
            ibm_assistant_id:'01d2746e-c74b-44cc-abfa-15524cc6ccfe',
            ibm_skill_id:'aa62ca12-0265-4a17-b0ca-56387915e08b'            
          },
          {
            identifier:'aluno0004',
            ibm_assistant_id:'e2706d64-74e5-4072-9437-4559f8fd6c67',
            ibm_skill_id:'8f74f819-72da-4659-b9ec-44d09b43043a'
          },                
      ]);
    });
};
