const express = require('express')
const app = express()


// const fs = require('fs')

// try {
//     const files = fs.readdirSync(__dirname + '/dist')
//     for (let file in files) {
//         console.log(files[file])
//     }
// } catch (err) {
//     console.error(err)
// }


app.use('/', express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/views/index.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
