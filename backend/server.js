const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

// app.use(express.static('build'))

let usernames = []
io.on('connection', (socket) => {
  socket.on('check-user', ({ username }) => {
    const availableUsername = !usernames.includes(username)

    if (availableUsername) {
      usernames = [...usernames, username]
      socket.emit('is-available', availableUsername)
    }
    console.log('Username pasado', { username })
    console.log({ usernames })
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(4000, () => {
  console.log('listening on 4000')
})
