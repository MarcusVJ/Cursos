const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando db

mongoose.connect('mongodb://0.0.0.0:27017/node-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir('./src/models');

// rotas

app.use('/api', require('./src/routes'));

app.listen(8001);
