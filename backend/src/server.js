const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mmongodb+srv://omnistack:omnistack@cluster0-yfwep.mongodb.net/week9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(null);

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(express.json());
app.use(routes);

app.listen(3333);













