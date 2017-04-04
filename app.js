const twit = require('twitter');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

var util = require('util');
app.use(bodyParser.json());
app.set("view engine", "ejs");

var twitter = new twit({
    consumer_key:'4yWVSikhzIJfJVydMNtG0NvUu',
    consumer_secret: 'ptRb3W5QQBMqmIRek9c08FQZfRNbyKidyy3aaA0CD8GbYLv1kd',
    access_token_key: '86766301-3UN3BU4eNfM4bJC9ClFXNavKL4OZn0rMaA86XB72I',
    access_token_secret: 'PGQjMR98H6Xx00JuJniyaOYSIyJZHa6kyyuYvBBdwcS2d'
});

var params = {screen_name: 'nodejs'};



app.get('/', function(req, res) {
    twitter.get('statuses/retweets/847403321946021888.json', params, function(error, tweet, response) {
        if (!error) {
            res.render('index', { tweet: tweet });
      }
    });
});

app.listen("3000", function(){
    console.log("server started");
});
