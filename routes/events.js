var express = require('express');
var router = express.Router();
var db = require('../db/connection.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.raw("select events.id, events.title, events.description, venues.capacity, count(tickets.id) from events inner join venues on events.venue_id = venues.id inner join tickets on events.id = tickets.event_id inner join tickets_attendees on tickets_attendees.ticket_id = tickets.id inner join attendees on attendees.id = tickets_attendees.attendee_id group by events.id, tickets.id, events.title, events.description, venues.capacity;")
  .then(results => {
    var eventResults = results.rows;
    // if (!eventResults.count < eventResults.capacity) {
      eventResults.full = true;
    // }
    console.log(eventResults);
    res.render('currEvents', {eventResults});
  })
});

module.exports = router;
