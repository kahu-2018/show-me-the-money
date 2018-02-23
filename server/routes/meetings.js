const express = require('express')
const app = express()
const server = require('../server')
const db = require('../db/meetings')
const router = express.Router()
const { decode } = require('../auth/token')


// Get / Get a Users Meeting Histroy
router.get('/', decode, (req, res) => {
  res.json([{id: 1, meeting_name: 'EDA Staff', time:'2018-02-28 09:14:07' , attendees: 6, cost: 12.0, duration: 30},
  {id: 2, meeting_name: 'EDA Students', time: '2018-02-28 11:14:07', attendees: 10, cost: 300.0, duration: 30},
  {id: 3, meeting_name: 'Kubo club', time: '2018-02-28 13:14:07', attendees: 20, cost: 1000.0, duration: 45},
  {id: 4, meeting_name: 'Tea with Harrison', time: '2018-02-28 15:14:07', attendees: 5, cost: 50.0, duration: 80},
  {id: 5, meeting_name: 'Ross talks coffee and code', time: '2018-02-28 17:14:07', attendees: 5, cost: 50.0, duration: 60},
  {id: 6, meeting_name: 'Joshua hour', time: '2018-02-28 19:14:07', attendees: 5, cost: 50.0, duration: 120}])
  // db.getUserHistory(req, req.app.get('db'))
  //   .then(userHistory => {
  //     res.json({userHistory: userHistory})
  //   })
  //   .catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

// Post	/ Save a completed meeting
router.post('/', decode, (req, res) => {
  db.saveMeeting(req.body, req.app.get('db'))
    .then(id => {
      res.json({id: id})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Get / Get the attendees of a Meeting	An Array of User objects
router.get('/:id/users', decode, (req, res) => {
  db.getAttendees(req.params.id, req.app.get('db'))
    .then(attendees => {
      res.json({attendees: attendees})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
