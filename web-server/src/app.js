const path = require('path')
const express = require('express')
const { title } = require('process')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jane Foster'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jane Foster'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Jane Foster',
        msg: 'Help massage'
    })
})

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('*', (req, res) => {
    res.send('My 404 page')
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 34,
        location: 'Boston'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})