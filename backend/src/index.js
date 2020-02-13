const { MONGO_URL } = require('../.env');
const ora = require('ora');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

var one = 1;

const app = express();

const dbAnimation = ora('Conectando MongoDB').start();

//Database Connection
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    dbAnimation.succeed('MongoDB Conectado');
  });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
