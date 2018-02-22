const express = require('express')
const app = express()
var server = require('../server')
const db = require('../db/meetings')
const router = express.Router()
var { decode } = require('../auth/token')


// Get / Get a Users Meeting Histroy
router.get('/api/meetings', decode, (req, res) => {
  db.getUserHistory()
    .then(userHistory =>
      res.json({userHistory: userHistory})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Post	/ Save a completed meeting
router.post('/api/meetings', decode, (req, res) => {
  db.saveMeeting(req.body)
    .then(id =>
      res.json(id: id))
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Get / Get the attendees of a Meeting	An Array of User objects
router.get('/api/meetings/:id/users', decode, (req, res) => {
  db.getAttendees(req.params.id)
    .then(attendees =>
      res.json({attendees: attendees}))
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
