exports.up = (knex) => {
  return knex.schema.createTable('events', table => {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.bool('over_21').notNullable()
    table.dateTime('start_datetime').notNullable()
    table.dateTime('end_datetime').notNullable()
    table.integer('venue_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('events')
}
