require("dotenv").config();
const express  = require("express");
const app = express();

// Route

app.get("/", (req, res) =>{

res.send("<h1>Welcome Awesome app about Breads</h1>")

})

// Breads 

const breadsController = require("./controllers/breads_controller")

app.use("/breads", breadsController)





app.listen(process.env.PORT)