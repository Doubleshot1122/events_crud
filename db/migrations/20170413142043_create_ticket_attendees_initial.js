exports.up = (knex) => {
  return knex.schema.createTable('tickets_attendees', table => {
    table.increments()
    table.integer('ticket_id').notNullable()
    table.integer('attendee_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tickets_attendees')
}
