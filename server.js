const __dirname = import.meta.dirname
import express from 'express'
import 'dotenv/config'

export const app = express()

import routes from './routes/routes.js'

app.use('/', express.static('dist'))
app.use('/public', express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app, __dirname) // static files (including index.html) preceed home route.

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})


