const express = require('express')
// require('dotenv').config()
const routes = require('./routes.js')

const app = express()

app.use('/', express.static('dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
