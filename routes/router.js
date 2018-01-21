const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("../models/todoSchema");
const router = express.Router();
// LIST ALL TODOS
module.exports = router.get("/todos", function(req, res, next) {
  res.json({ Group_Name: "Bafana, Bafana" });
});

// CREATING A TODO
module.exports = router.post("/todos", function(req, res, next) {
  Todo.create(req.body).then(todo => {
    res.send(todo);
  });
});

// RETRIEVE A TODO
module.exports = router.get("/todos/:id", function(req, res, next) {
  res.json({ Group_Name: req.params.id });
});

// UPDATING A TODO
module.exports = router.put("/todos/:id", function(req, res, next) {
  res.json({ Group_Name: req.params.id });
});

// DELETING A TODO
module.exports = router.delete("/todos/:id", function(req, res, next) {
  res.json({ Group_Name: "Bafana, Bafana" });
});