var express = require('express');
var router = express.Router();
var db = require('../db/connection.js');

/* GET home page. */
router.get('/:index', function(req, res, next) {
  var id = req.params.index;
  db('attendees').select('attendees.preferred_name as fName', 'attendees.last_name as lName', 'events.title as title', 'events.start_datetime as start', 'events.description as description', 'tickets.name as tName')
    .innerJoin('tickets_attendees', 'attendees.id', 'tickets_attendees.attendee_id')
    .innerJoin('tickets', 'tickets.id', 'tickets_attendees.ticket_id')
    .innerJoin('events', 'events.id', 'tickets.event_id')
    .where('attendees.id', id)
  .then(attendeeEvents => {
    console.log(attendeeEvents[0]);
    console.log(attendeeEvents.length);
    res.render('currAttendee', {attendeeEvents})
  })
});

module.exports = router;
