const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const posts = require('./data/posts.js');

app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

app.get('/bacheca', (req, res) => {
    let filteredPosts = posts.data;

    if (req.query.id) {
        const postId = parseInt(req.query.id, 10);
        filteredPosts = filteredPosts.filter(post => post.id === postId);
    }
    
    if (req.query.tag) {
        filteredPosts = filteredPosts.filter(post =>
            post.tags.includes(req.query.tag)
        );
    }

    if (req.query.titolo) {
        filteredPosts = filteredPosts.filter(post =>
            post.titolo.toLowerCase().includes(req.query.titolo.toLowerCase())
        );
    }

    res.json({
        totalCount: filteredPosts.length,
        data: filteredPosts});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
