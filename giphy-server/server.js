/**
 * Created by etay on 30/07/2017.
 */

const express = require('express');
const app = express();
const port = 3001;
const giphy = require('../src/index.js');
const apiKey = 'b6ea48d0a38349fc991b2818f94b8caf';

app.use(express.static('../'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/search', (request, response) => {
    let query = request.query.giphy_text;
    giphy.getGiphy(query, apiKey)
        .then(url => response.json({giphyurl: url}));
});

app.listen(port);
