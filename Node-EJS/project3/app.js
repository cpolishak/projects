const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/about", function (req, res) {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
   });