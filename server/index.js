const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  },
});

app.use(cors());

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error('invalid username'));
  }
  socket.username = username;
  next();
});

io.on('connection', (socket) => {
  let users = [];
  for (let [id, socket] of io.of('/').sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  socket.emit('users', users);
  socket.broadcast.emit('user connected', {
    userID: socket.id,
    username: socket.username,
  });

  socket.on('disconnect', () => {
    users = users.filter((u) => u.userID !== socket.id);
    socket.broadcast.emit('logout', {
      userID: socket.id,
      username: socket.username,
    });
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
