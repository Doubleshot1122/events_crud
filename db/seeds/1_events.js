exports.seed = (knex) => {
  return knex('events').truncate()
    .then(() => {
      return knex('events').insert([
        {
          title: 'Deadmau5',
          description: 'Dance/Electronic concert featuring Deadmau5 and Feed Me',
          over_21: true,
          start_datetime: '2017-04-21 20:30',
          end_datetime: '2017-04-22 01:30',
          venue_id: 1
        },
        {
          title: 'Bliss:Transcedence',
          description: 'Dance/Electronic experience featuring Markus Schulz, Ilan Bluestone, Andrew Bayer, Ace Ventura, Bryan Kearney, Sneijder, Menno De Jong, and Nifra',
          over_21: true,
          start_datetime: '2017-05-06 18:30',
          end_datetime: '2017-05-07 04:30',
          venue_id: 1
        },
        {
          title: 'Emerald City Comicon',
          description: 'A comic book conventions that caters to all walks of life from gamers, to cosplayers, to all geeks and fandoms',
          over_21: false,
          start_datetime: '2018-03-01 09:00',
          end_datetime: '2018-03-03 18:00',
          venue_id: 2
        },
        {
          title: 'Seattle Indies Meetup',
          description: 'Playtest new games from local game developers',
          over_21: true,
          start_datetime: '2017-04-18 19:00',
          end_datetime: '2017-04-18 22:00',
          venue_id: 3
        },
        {
          title: 'International Tabletop Day',
          description: 'Pull up a chair, meet some new friends and play some board games',
          over_21: false,
          start_datetime: '2017-04-29 09:00',
          end_datetime: '2017-04-29 17:00',
          venue_id: 3
        }
      ])
    })
}
