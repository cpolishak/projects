const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/about", function (req, res) {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});


app.listen(PORT, function () {
    console.log('Example app listening on port 5000!');
   });