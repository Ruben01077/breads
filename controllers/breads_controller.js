const express = require("express");
const breads = express.Router();
const Bread = require("../models/breads")





   // SHOW
breads.get('/:arrayIndex', (req, res) => {
  let index = req.params.arrayIndex;
   
  if (Bread[req.params.arrayIndex]){
  res.render('show', {
     
      bread: Bread[index]
    })
  } else {

res.send("404 error")

  }
  
  
  
}
  )
  





module.exports = breads;