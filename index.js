const express = require('express')
const app = express();
const port = process.envPORT || 5000;
const cors = require('cors')
const categories = require('./Data/categories.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send("News API Running");
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Dragon News Server port', port)
})