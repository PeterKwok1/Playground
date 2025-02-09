import * as path from "path"

export default function routes(app, __dirname) {
    app.route('/').get((req, res) => {
        res.sendFile(__dirname + '/dist/views/index.html')
    })

    app.route("/test").get((req, res) => {
        const file_path = path.resolve(__dirname, "..", "Test", "Black Sheep, Metric (Brie Larson, Cut).mp4")
        res.sendFile(file_path)
        console.log(file_path)
    })
}