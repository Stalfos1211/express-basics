'use strict';

let express = require('express'),
    posts = require('./mock/post.json'),
    jade = require('jade')

const app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', (req, res) => {
  res.render('index');
  //res.send('I Love Treehouse!');
})

app.get('/blog/:title?', (req, res) => {
  let title = req.params.title
  if (title === undefined) {
    res.status(503);
    res.send('this page is under construction');
  }
  else {
    var post = posts['post' + title];
    //res.send(post)
    res.render('post', {post: post});
  }
})

app.listen(3000);

