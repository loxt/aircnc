const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const http = require('http');

const app = express();

const socketio = require('socket.io');
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-yfwep.mongodb.net/week9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(null);


io.on('connection', socket => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});


app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes);

server.listen(3333);













