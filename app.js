const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => res.render('index'))

app.get('/about', (req, res) => res.render('about'))

app.get('/contact', (req, res) => res.render('contact'))

app.get('/donation', (req, res) => res.render('donation'))

app.get('/join', (req, res) => res.render('join'))

app.get('/opportunities', (req, res) => res.render('opportunities'))

app.listen(3000, () => console.log('Server is running'))