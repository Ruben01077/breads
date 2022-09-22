const express = require("express");
const breads = express.Router();
const Bread = require("../models/breads")

breads.get("/:Index", (req, res) =>{
const arrayIndex = req.params.Index;

res.send(Bread[arrayIndex])

})



module.exports = breads;