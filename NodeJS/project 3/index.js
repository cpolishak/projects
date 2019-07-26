const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome to​ the​ Fruit​ home​ page!'));

app.get('/banana', (req, res) => res.send("I'm going bananas!"));

app.get('/kiwi', (req, res) => res.send("Kiwis are great. But i don't like how hairy they are. However, they taste darn good!"));

app.get('/strawberry', (req, res) => res.send("Strawberries are nature's perfect fruit."));

app.get('/fruit/:fruitName', function (req, res) {
    res.send('So, I take it your favorite fruit is ' + req.params.fruitName + '?')
});


var number = ":personNumber";

app.get('/bankaccount/:personName/:personNumber', function (req, res) {
    // res.send()
    if(req.params.personNumber >= 50) {
        res.send('So, ' + req.params.personName + ', I understand that you have $' + personNumber + ' in your bank account. Can you loan me some money?');
    } else {
        res.send(req.params.personName + ', do you enjoy living life dangerously on the edge?');
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
   });