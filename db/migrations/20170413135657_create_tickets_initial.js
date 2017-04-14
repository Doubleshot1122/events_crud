exports.up = (knex) => {
  return knex.schema.createTable('tickets', table => {
    table.increments()
    table.string('name').notNullable()
    table.decimal('price').notNullable()
    table.integer('event_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tickets')
}
