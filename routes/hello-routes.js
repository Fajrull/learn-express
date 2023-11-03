const express = require("express");
const Routes = express.Router();

Routes.get("/", (req, res) => {
  res.status(200).send("Hello from hello.js");
});

Routes.get("/products", (req, res) => {
  const { id, search } = req.query;
  console.log(id, search);
  res.status(200).send({
    data: [
      { name: "fajrul", age: 21, isMarried: true },
      { name: "vonzy", age: 21, isMarried: true },
      { name: "vior", age: 21, isMarried: true },
    ],
  });
});

Routes.post("/products", (req, res) => {
  if (req.body.username === "" || req.body.password === "") {
    res.status(400).send({
      message: "Username or Password is not match!",
    });
  } else {
    res.status(200).send({
      message: "Successfull to create data",
    });
  }
});

Routes.put("/products", (req, res) => {
  console.log(req.body);
  res.status(200).send({
    message: "Successfull to update data",
  });
});

Routes.delete("/products", (req, res) => {
  console.log(req.body);
  res.status(200).send({
    message: "Successfull to delete data",
  });
});

module.exports = Routes;
