const express = require('express');
const app = express(); 
const request = require('request');
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('index.ejs', {price: {}});
})


app.post('/', function(req, res) {

    var formResponse = req.body

    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
        
            var rate;
            if(formResponse.currency === 'usd'){
                rate = data.bpi.USD
            }
            else if(formResponse.currency === 'gbp'){
                rate = data.bpi.GBP
            }
            else if(formResponse.currency === 'eur'){
                rate = data.bpi.EUR
            }

            res.render('index.ejs', {price: rate});
        }
    })
});

var port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});