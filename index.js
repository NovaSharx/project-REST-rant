// MODULES AND GLOBALS
require('dotenv').config()
const express = require('express')
const app = express()

// EXPRESS SETTINGS
// app.set('views', __dirname + '/views') // Express knows to look for a views folder
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// CONTROLLERS & ROUTES
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// LISTEN FOR CONNECTIONS
app.listen(process.env.PORT)