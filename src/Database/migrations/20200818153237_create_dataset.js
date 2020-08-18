exports.up = knex => knex.schema.createTable('aluno_dataset', (table)=>{
       table.increments().primary()
       table.string('nome_aluno').notNullable()
       table.string('ra').notNullable().unique()
       table.json('model_KNN')
       table.json('model_IBM')

       table.timestamp('created_at').defaultTo(knex.fn.now())
       table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('aluno_dataset')
