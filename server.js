const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const posts = require('./data/posts.js');

app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

app.get('/bacheca', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});