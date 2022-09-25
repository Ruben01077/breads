const express = require("express");
const breads = express.Router();
const Bread = require("../models/breads")


//New
breads.get("/new", (req, res) => {

res.render('new')

})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  let index = req.params.arrayIndex;

  if (Bread[index]) {
    res.render('show', {

      bread: Bread[index]
    })
  } else {

    res.render("error_404")

  }
})


// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true'
  } else {
    req.body.hasGluten = 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})


module.exports = breads;