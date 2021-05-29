const express = require('express')
const app = express()
const http = require('http')
const moment = require('moment')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const { findUsername } = require('./utils')

// app.use(express.static('build'))

let users = []
const isUsernameAvaliable = (username) =>
  !users.map((user) => user.username).includes(username) && username.length >= 3

io.on('connection', (socket) => {
  io.to(socket.id).emit('total-users', users.length)

  socket.on('check-user', (username) => {
    if (isUsernameAvaliable(username)) {
      socket.emit('is-available', isUsernameAvaliable(username))
    }
  })

  socket.on('new-user', (username) => {
    if (isUsernameAvaliable(username)) {
      users = [...users, { username, id: socket.id }]
      socket.emit('user-available', username)
      io.emit('total-users', users.length)
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

  socket.on('send-message', (messageData) => {
    const to = users.find((user) => user.username === messageData.to)

    socket.to(to?.id).emit('recieve-message', {
      ...messageData,
      time: moment().format('HH:mm'),
    })
    socket.emit('message-sent', {
      ...messageData,
      time: moment().format('HH:mm'),
    })
  })

  socket.on('disconnect', () => {
    users = users.filter((user) => user.id !== socket.id)

    io.emit('total-users', users.length)
    console.log({ users })
  })
})

server.listen(4000, () => {
  /* eslint-disable-next-line no-console */
  console.log('listening on 4000')
})
