exports.seed = (knex) => {
  return knex('attendees').truncate()
    .then(() => {
      return knex('attendees').insert([
        {
          preferred_name: 'Amporo',
          last_name: "Roob",
          birthday: '1990-04-21',
          email: "amporo_roob@hotmail.com"
        },
        {
          preferred_name: 'Rosina',
          last_name: "Steidemann",
          birthday: '1990-05-21',
          email: "rosina_stiedman@hotmail.com"
        },
        {
          preferred_name: 'Ramon',
          last_name: "Metz",
          birthday: '1990-06-21',
          email: "Ramon6868@gmail.com"
        },
        {
          preferred_name: 'Trevor',
          last_name: "Morissette",
          birthday: '1989-07-21',
          email: "trevor11234@msn.com"
        },
        {
          preferred_name: 'Marlon',
          last_name: "Cummings",
          birthday: '1990-08-21',
          email: "marlon68@yahoo.com"
        },
        {
          preferred_name: 'Leann',
          last_name: "Orn",
          birthday: '1995-12-21',
          email: "Leann53@gmail.com"
        }
      ])
    })
}
