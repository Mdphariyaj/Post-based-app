const express = require('express')
const port = 8080;
const posts = require('./models/data');
const path = require('path');
const { title } = require('process');
const app = express();
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('server working well');
});

app.get('/posts', (req, res) => {
    res.render('index.ejs', {
        posts,
        title: 'All Posts'
    });
});

app.get('/posts/new', (req, res) => {
    res.render('new.ejs', { title: 'Add New Post' });

});
app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuid();
    posts.push({ username, content, id });

    res.redirect('/posts');
});
app.get('/posts/:id', (req, res) => {
    let { id } = req.params;;
    let post = posts.find((p) => p.id == id);
    res.render('show.ejs', { post, })
});
app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => p.id == id);
    res.render('edit.ejs', { post, title: "Update Post" });
});
app.patch('/posts/:id', (req, res) => {
    let newcontent = req.body.content;
    let { id } = req.params;
    let post = posts.find((p) => p.id == id);
    post.content = newcontent;
    res.redirect('/posts');
});
app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.findIndex((p) => p.id == id);

    if (post !== -1) {
        posts.splice(post, 1);
    }
    res.redirect('/posts')

})

app.listen(port, (req, res) => {
    console.log(`server running on http://localhost:${port}`);
})