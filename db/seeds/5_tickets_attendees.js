exports.seed = (knex) => {
  return knex('tickets_attendees').truncate()
    .then(() => {
      return knex('tickets_attendees').insert([
        {
          ticket_id: 1,
          attendee_id: 1
        },
        {
          ticket_id: 3,
          attendee_id: 1
        },
        {
          ticket_id: 5,
          attendee_id: 1
        },
        {
          ticket_id: 6,
          attendee_id: 1
        },
        {
          ticket_id: 7,
          attendee_id: 1
        },
        {
          ticket_id: 1,
          attendee_id: 2
        },
        {
          ticket_id: 3,
          attendee_id: 2
        },
        {
          ticket_id: 5,
          attendee_id: 2
        },
        {
          ticket_id: 6,
          attendee_id: 2
        },
        {
          ticket_id: 7,
          attendee_id: 2
        },
        {
          ticket_id: 1,
          attendee_id: 4
        },
        {
          ticket_id: 3,
          attendee_id: 4
        },
        {
          ticket_id: 5,
          attendee_id: 4
        },
        {
          ticket_id: 6,
          attendee_id: 4
        },
        {
          ticket_id: 7,
          attendee_id: 4
        },
        {
          ticket_id: 1,
          attendee_id: 3
        },
        {
          ticket_id: 3,
          attendee_id: 3
        },
        {
          ticket_id: 5,
          attendee_id: 5
        },
        {
          ticket_id: 6,
          attendee_id: 5
        },
        {
          ticket_id: 7,
          attendee_id: 6
        },
        {
          ticket_id: 1,
          attendee_id: 1
        },
        {
          ticket_id: 3,
          attendee_id: 1
        },
        {
          ticket_id: 5,
          attendee_id: 1
        },
        {
          ticket_id: 6,
          attendee_id: 1
        },
        {
          ticket_id: 7,
          attendee_id: 1
        },
        {
          ticket_id: 7,
          attendee_id: 1
        },
        {
          ticket_id: 7,
          attendee_id: 1
        }
      ])
    })
}
