exports.seed = (knex) => {
  return knex('tickets').truncate()
    .then(() => {
      return knex('tickets').insert([
        {
          name: 'DM5 General Admission',
          price: 45.00,
          event_id: 1
        },
        {
          name: 'DM5 VIP Admission',
          price: 90.00,
          event_id: 2
        },
        {
          name: 'BT General Admission',
          price: 45.00,
          event_id: 2
        },
        {
          name: 'BT VIP Admission',
          price: 90.00,
          event_id: 1
        },
        {
          name: 'ECC Weekend Pass',
          price: 90.00,
          event_id: 3
        },
        {
          name: 'Free Seat',
          price: 0,
          event_id: 4
        },
        {
          name: 'Free Seat',
          price: 0,
          event_id: 5
        }
      ])
    })
}
