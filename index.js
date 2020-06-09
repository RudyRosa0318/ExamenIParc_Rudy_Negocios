const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());
app.set("view engine", "hbs");

app.listen(8001, () => {
  console.log("Servidor Ejecutandose en 8001");
});
