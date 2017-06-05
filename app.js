'use strict';

let express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('I Love Treehouse!');
})

app.listen(3000);