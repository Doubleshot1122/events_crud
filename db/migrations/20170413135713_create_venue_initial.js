exports.up = (knex) => {
  return knex.schema.createTable('venues', table => {
    table.increments()
    table.string('name').notNullable()
    table.integer('capacity').notNullable()
    table.string('line_1').notNullable()
    table.string('line_2')
    table.string('city').notNullable()
    table.string('state', 2).notNullable()
    table.integer('zip').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('venue')
}
