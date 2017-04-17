var express = require('express');
var router = express.Router();
var db = require('../db/connection.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  db.raw("select events.id, events.title, events.description, venues.capacity, count(tickets.id) from events inner join venues on events.venue_id = venues.id inner join tickets on events.id = tickets.event_id inner join tickets_attendees on tickets_attendees.ticket_id = tickets.id inner join attendees on attendees.id = tickets_attendees.attendee_id group by events.id, tickets.id, events.title, events.description, venues.capacity;")
  .then(results => {
    results.rows.map(element =>{
     if (element.count >= element.capacity) {
       element.full = true;
       return element;
     } else {
       element.full = false;
       return element;
     }
    return element;
    })
    return results;
  })
  .then(adjResults => {
    var eventResults = adjResults.rows;
    res.render('currEvents', {eventResults});
  })
});

router.get('/:index/register', (req, res, next) => {
  var id = req.params.index;
  db('events').select('events.title','events.description',
  'venues.name as venueName', 'venues.line_1', 'venues.city', 'venues.state', 'venues.zip',
  'tickets.name as ticketName', 'tickets.price as ticketPrice')
    .innerJoin('venues', 'events.venue_id', 'venues.id')
    .innerJoin('tickets', 'events.id', 'tickets.event_id')
    .where('events.id', id)
  .then(singleEvent => {
    res.render('oneEvent', {singleEvent})
  })
})

router.post('/', (req, res, next) =>{
  var id = req.params.index;
  var ticketType = req.body.ticketType;
  var ticketSale = {
    preferred_name: req.body.prefName,
    last_name: req.body.lastName,
    birthday: req.body.birthday,
    email: req.body.email
  }

  if (!ticketSale.preferred_name) {
    res.render('events/id/register', {error:'Name can not be blank', ticketSale})
  } else {
    db('attendees', 'id').insert
  }
})

module.exports = router;
