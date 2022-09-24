const React = require("react");
const Default = require("./layouts/default")


function error_404(){

return(
    <Default>
        <h1>Page is not available </h1>
        <li><a href="/">Go home</a></li>
  </Default>

)}


module.exports = error_404