const expres = require("express");
const hbs = require("hbs");

const app = expres();

const path = require("path");
const publicPath = path.join(__dirname, "../public");

const port = process.env.PORT || 3000;

app.use(expres.static(publicPath));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("server is on port " + port);
});
