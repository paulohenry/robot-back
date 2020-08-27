exports.up = knex => knex.schema.createTable('credentials_dataset', (table)=>{
  table.increments().primary()
  table.string('identifier').notNullable().unique()
  table.string('ibm_assistant_id').notNullable().unique()
  table.string('ibm_skill_id').notNullable().unique()
});

exports.down = knex => knex.schema.dropTable('credentials_dataset');
