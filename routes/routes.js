export default function routes(app, __dirname) {
  app.route("/").get((req, res) => {
    res.sendFile(__dirname + "/dist/views/index.html");
  });
}
