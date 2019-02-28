const express = require('express')
const db = require('../db/cohorts')
const router = express.Router()

// This api gets the feke from the database
router.get('/', (req, res) => {
    db.getFeke()
      .then(feke => {
        res.json(feke)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })


module.exports = router