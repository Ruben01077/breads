const express = require("express");
const breads = express.Router();
const Bread = require("../models/breads")





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


}
)


module.exports = breads;