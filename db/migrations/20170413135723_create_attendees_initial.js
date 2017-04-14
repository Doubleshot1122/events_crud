exports.up = (knex) => {
  return knex.schema.createTable('attendees', table => {
    table.increments()
    table.string('preferred_name').notNullable()
    table.string('last_name').notNullable()
    table.date('birthday').notNullable()
    table.string('email').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('attendees')
}
