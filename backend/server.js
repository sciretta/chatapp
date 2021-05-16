const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const { findUsername } = require('./utils')

// app.use(express.static('build'))

let users = []
const isUsernameAvaliable = (username) =>
  !users.map((user) => user.username).includes(username) && username.length >= 3

io.on('connection', (socket) => {
  io.emit('total-users', users.length)

  socket.on('check-user', (username) => {
    if (isUsernameAvaliable(username)) {
      socket.emit('is-available', isUsernameAvaliable(username))
    }
  })

  socket.on('new-user', (username) => {
    if (isUsernameAvaliable(username)) {
      users = [...users, { username, id: socket.id }]
      socket.emit('user-available', username)
    } else {
      socket.emit('user-available', false)
    }
  })

  socket.on('search-user', (userInput) => {
    const usersFiltered = findUsername(
      userInput,
      users.map(({ username }) => username),
    )
    if (userInput) {
      socket.emit('users-found', usersFiltered)
    }
  })

  socket.on('disconnect', () => {
    users = users.filter((user) => user.id !== socket.id)

    /* eslint-disable-next-line no-console */
    console.log('user disconnected')
    io.emit('total-users', users.length)
    console.log({ users })
  })
})

server.listen(4000, () => {
  /* eslint-disable-next-line no-console */
  console.log('listening on 4000')
})
