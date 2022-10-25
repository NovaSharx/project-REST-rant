const router = require('express').Router()
const places = require('../models/places')

// NEW PLACE FORM
router.get('/new', (req, res) => {
  res.render('places/new')
})

// PLACES INDEX
router.get('/', (req, res) => {  
    res.render('places/index', {places})
})

// CREATE NEW PLACE
router.post('/', (req, res) => {

  console.log(req.body)

  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// SHOW PLACE
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', {place: places[id], id})
  }
})

// EDIT PLACE
router.get('/:d/edit', (req, res) => {
  res.render('places/edit')
})

// DELETE PLACE
router.delete('/:d', (req, res) => {
  res.redirect('/places')
})

module.exports = router