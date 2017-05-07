const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

// Require the data json file OR do fs.readFile. Don't do both
// const data = require('./data.json')

function getData (filelocation, callback) {
  fs.readFile(filelocation, 'utf-8', (err, contents) => {
    if (err) {
      callback(err)
    }
    const data = JSON.parse(contents)
    callback(null, data)
  })
}

router.get('/', (req, res) => {
  getData('./data.json', (err, data) => {
    if (err) return err
    res.render('index', data)
  })
})

router.get('/about', (req, res) => {
  getData('./data.json', (err, data) => {
    // if (err) return err
    res.render('about', data)
  })
})

router.get('/askQuestions', (req, res) => {
  getData('./data.json', (err, data) => {
    if (err) return err
    res.render('askQuestions', data)
  })
})


// Need to edit post link to add the question
router.post('/viewAndVote', (req, res) => {
  getData('./data.json', (err, data) => {
    if (err) return err
    res.render('viewAndVote', data)
  })
})

router.get('/viewQuestions', (req, res) => {
  getData('./data.json', (err, data) => {
    if (err) return err
    res.render('viewQuestions', data)
  })
})

router.get('/viewAndVote/:id', (req, res) => {
  const id = Number(req.params.id)
  getData('./data.json', (err, data) => {
    if (err) return err
    res.render('viewAndVote', data.questions[id])
  })
})
