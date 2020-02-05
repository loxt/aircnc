const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mmongodb+srv://omnistack:omnistack@cluster0-yfwep.mongodb.net/week9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(null);

app.use(express.json());
app.use(routes);

app.listen(3333);













