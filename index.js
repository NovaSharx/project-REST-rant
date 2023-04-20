// MODULES AND GLOBALS
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// EXPRESS SETTINGS
// app.set('views', __dirname + '/views') // Express knows to look for a views folder
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// CONTROLLERS & ROUTES
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

const port = process.env.PORT || 5000

// LISTEN FOR CONNECTIONS
app.listen(port)