const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log("listening for requests");
});

app.get("/", (req, res) => {
  res.send("It works");
});