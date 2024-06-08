import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
import express from 'express'
import 'dotenv/config'

export const app = express()

import routes from './routes/routes.js'
import { threadId } from 'worker_threads'

app.use('/', express.static('dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app, __dirname)

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})


