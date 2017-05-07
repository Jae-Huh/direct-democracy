const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

const data = require('./data.json')

function getFileContents (file, callback) {
  fs.readFile(file, 'utf-8', (err, contents) => {
    if (err) {
      callback(err)
    }
    const data = JSON.parse(contents)
    callback(null, data)
  })
}



router.get('/', (req, res) => {
  getFileContents((data, contents) => {
    if (err) {
      return err
    }
    res.render('index', data)
  })
})

router.get('/about', (req, res) => {
  res.render('about', links)
})

router.get('/askQuestions', (req, res) => {
  res.render('askQuestions', links)
})


// Need to edit post link to add the question
router.post('/viewAndVote', (req, res) => {
  res.render('viewAndVote', req.body)
})

router.get('/viewQuestions', (req, res) => {
  res.render('viewQuestions', links)
})

// Need to edit post link to add the question
router.get('/viewAndVote', (req, res) => {
  res.render('viewAndVote', links)
})
