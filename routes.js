const express = require('express')
const router = express.Router()

module.exports = router

const links = {
  home: '/',
  about: '/about',
  askQuestions: '/askQuestions',
  viewQuestions: '/viewQuestions',
  viewAndVote: '/viewAndVote'
}

router.get('/', (req, res) => {
  res.render('index', links)
})

router.get('/about', (req, res) => {
  res.render('about', links)
})

router.get('/askQuestions', (req, res) => {
  res.render('askQuestions', links)
})

router.get('/viewQuestions', (req, res) => {
  res.render('viewQuestions', links)
})

router.get('/viewAndVote', (req, res) => {
  res.render('viewAndVote', links)
})
