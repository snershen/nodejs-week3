const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const postsRouter = require('./routes/posts');

const app = express();
require('./connections');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);

app.use(function(req, res, next){
  res.status(404).send('查無此路由')
})

app.use(function(err, req, res, next){
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
})

module.exports = app;
