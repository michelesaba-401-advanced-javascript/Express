"use strict";

const express = require("express");

const app = express();
const requestTime = require("./lib/middleware/requestTime");
const notFound = require("./lib/middleware/notFound");
const errorLogger = require("./lib/middleware/error-logger");
const consoleLogger = require("./lib/middleware/console-log");
app.use(requestTime);
app.use(consoleLogger);



// const PORT = process.env.PORT || 8080;

app.get("/a", (req, res) => {
  res.status(200).send(req.time, 200);
  // console.log(timeLogger);
});

app.get("/b", (req, res) => {
  res.status(200).send("Route B");
});

app.get("/c", (req, res) => {
  res.status(200).send("Route C");
});

app.get("/d", (req, res) => {
  res.status(200).send("Route D");
});
app.use(errorLogger);
app.use(notFound);

module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || port || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};
