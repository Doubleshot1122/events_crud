exports.seed = (knex) => {
  return knex('venues').truncate()
    .then(() => {
      return knex('venues').insert([
        {
          name: 'WaMu Theater',
          capacity: 1000,
          line_1: '1000 Occidental Ave S',
          line_2: '',
          city: 'Seattle',
          state: 'WA',
          zip: 98134
        },
        {
          name: 'Washington Convention Center',
          capacity: 10000,
          line_1: '705 Pike St',
          line_2: '',
          city: 'Seattle',
          state: 'WA',
          zip: 98101
        },
        {
          name: 'The Raygun Lounge',
          capacity: 200,
          line_1: '501 E. Pine Stree',
          line_2: '',
          city: 'Seattle',
          state: 'WA',
          zip: 98122
        }
      ])
    })
}
