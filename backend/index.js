import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import moment from 'moment'
import { isUsernameAvaliable, findUsername } from './utils.js'
const app = express()
const server = http.createServer(app)
const io = new Server(server)

// app.use(express.static('build'))

let users = []
// const isUsernameAvaliable = (username,users) =>
//   !users.map((user) => user.username).includes(username) && username.length >= 3

io.on('connection', (socket) => {
  io.to(socket.id).emit('total-users', users.length)

  socket.on('check-user', (username) => {
    if (isUsernameAvaliable(username, users)) {
      socket.emit('is-available', isUsernameAvaliable(username, users))
    }
  })

  socket.on('new-user', (username) => {
    if (isUsernameAvaliable(username, users)) {
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
  console.log('listening on port 4000')
})
