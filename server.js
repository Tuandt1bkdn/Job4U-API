const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");

const corsOption = {
  origin: "*",
  credentials: true,
};

const app = express();

app.use(cors(corsOption));

app.use(body_parser.json());

app.use(
  body_parser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    hello: "hi",
  });
});

module.exports = app;

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));

const connection = require("./Back_End/API/connectdatabase");

connection.connect(function (err) {
  if (err) throw err;
  console.log("Ket noi MySQL thanh cong");
});

const route = require("./Back_End/API/routes");
route(app);
