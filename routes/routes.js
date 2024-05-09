export default function routes(app, __dirname) {
    app.route('/').get((req, res) => {
        console.log('hi')
        res.sendFile(__dirname + '/dist/views/index.html')
    })
    // app.set('view engine', 'pug') // server.js
    // app.set('views', './dist/views') 
    // 
    // app.route('/').get((req, res) => {
    //     res.render('index')
    // });


    app.route('/img/:src').get((req, res) => {
        const src = req.params.src
        res.sendFile(__dirname + `./src/assets/${src}`)
    })
}