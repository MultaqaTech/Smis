
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:postgres@localhost:5432/simsdb')

db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
  
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const cors = require('cors')
var path = require('path');

const accountRouter = require('./routes/auth')

const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(express.static('upload'));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/', accountRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
module.exports = app;