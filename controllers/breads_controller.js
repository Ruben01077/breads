const express = require("express");
const breads = express.Router();
const Bread = require("../models/breads")

breads.get("/", (req, res) =>{

    res.render("index",
    
    {
        breads: Bread

    }
    
    )


})



module.exports = breads;