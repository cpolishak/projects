const express = require('express');
const app = express();
const request = require('request');
let weatherRequest = 'https://www.metaweather.com/api/location/2487956/';

var port = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.render('home.ejs');
})

app.get('/results', (req, res) => {
    request(weatherRequest, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body);
            res.render("results.ejs", {data: parsedData});
            console.log(body);
        }
    })
});


app.listen(port, function(){
    console.log(`Started ToDo API on port ${port}`)
})
 