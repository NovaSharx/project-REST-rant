const router = require('express').Router()
const db = require('../models')

// PLACES INDEX
router.get('/', (req, res) => {
  db.Place.find()
    .then(places => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

// CREATE NEW PLACE
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = undefined
  }
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }

        res.render('places/new', { message: message })
      }
      else {
        console.log('err', err)
        res.render('error404')
      }
    })
})

// NEW PLACE FORM
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW PLACE
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// UPDATE PLACE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DELETE PLACE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => {
      res.status(303).redirect('/places')
    })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

// EDIT PLACE
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant ? true : false
  console.log(req.body)

  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.delete('/:id/comment/:commentId', (req, res) => {
  res.send('GET /places/:id/comment/:commentId stub')
})

module.exports = router