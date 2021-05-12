const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

// app.use(express.static('build'))

let usernames = []
const isUsernameAvaliable = (username) =>
  !usernames.includes(username) && username.length >= 3

io.on('connection', (socket) => {
  socket.on('check-user', (username) => {
    if (isUsernameAvaliable(username)) {
      socket.emit('is-available', isUsernameAvaliable(username))
    }
  })

  socket.on('new-user', (username) => {
    if (isUsernameAvaliable(username)) {
      usernames = [...usernames, username]
      socket.emit('user-available', username)
    } else {
      socket.emit('user-available', false)
    }
    console.log({ usernames })
  })

  socket.on('disconnect', () => {
    /* eslint-disable-next-line no-console */
    console.log('user disconnected')
  })
})

server.listen(4000, () => {
  /* eslint-disable-next-line no-console */
  console.log('listening on 4000')
})
