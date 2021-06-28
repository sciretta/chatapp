const { createServer } = require('http')
const { Server } = require('socket.io')
const Client = require('socket.io-client')
const { isUsernameAvaliable, findUsername } = require('../utils')

describe('Utils functions', () => {
  test('Is username available', () => {
    const usernameInput = 'username'
    const available = isUsernameAvaliable(usernameInput, [])
    expect(available).toBe(true)

    const notAvailable = isUsernameAvaliable(usernameInput, [
      { username: usernameInput, id: 1 },
    ])
    expect(notAvailable).toBe(false)

    const notAvailable2 = isUsernameAvaliable(usernameInput)
    expect(notAvailable2).toBe(false)
  })
})

describe('Socket events', () => {
  let io
  let serverSocket
  let clientSocket

  beforeEach((done) => {
    const httpServer = createServer()
    io = new Server(httpServer)
    httpServer.listen(() => {
      const { port } = httpServer.address()
      clientSocket = new Client(`http://localhost:${port}`)
      io.on('connection', (socket) => {
        serverSocket = socket
      })
      clientSocket.on('connect', done)
    })
  })

  afterEach(() => {
    io.close()
    clientSocket.close()
  })

  test('Check user available', (done) => {
    const usernameInput = 'username'
    serverSocket.on('check-user', (username) => {
      expect(username).toBe(usernameInput)

      if (isUsernameAvaliable(username, [])) {
        serverSocket.emit('is-available', isUsernameAvaliable(username, []))
      }
    })

    clientSocket.on('is-available', (isAvailable) => {
      expect(isAvailable).toBe(true)
      done()
    })

    clientSocket.emit('check-user', usernameInput)
  })

  test('Create new user', (done) => {
    const usernameInput = 'username'
    let users = []
    const initialLength = users.length

    serverSocket.on('new-user', (username) => {
      expect(username).toBe(usernameInput)

      if (isUsernameAvaliable(username, users)) {
        users = [...users, { username, id: serverSocket.id }]

        serverSocket.emit('user-available', username)
        io.emit('total-users', users.length)
      } else {
        serverSocket.emit('user-available', false)
      }
    })

    clientSocket.on('user-available', (usernameCreated) => {
      if (!usernameCreated) return
      expect(usernameCreated).toBe(usernameInput)
      // done()
    })

    clientSocket.on('total-users', (totalUsers) => {
      expect(totalUsers).toBe(initialLength + 1)
      done()
    })

    clientSocket.emit('new-user', usernameInput)
  })

  test('Search user', (done) => {
    const usernameInput = 'username'
    const users = [{ username: usernameInput, id: 1 }]
    let usersFiltered = []

    serverSocket.on('search-user', (userInput) => {
      expect(userInput).toBe(usernameInput)
      usersFiltered = findUsername(
        userInput,
        users.map(({ username }) => username),
      )

      if (userInput) {
        serverSocket.emit('users-found', usersFiltered)
      }
    })

    clientSocket.on('users-found', (usersList) => {
      expect(usersList).toEqual(usersFiltered)
      done()
    })

    clientSocket.emit('search-user', usernameInput)
  })

  // test('Send messages', (done) => {
  //   const messageDataInput = {
  //     message: 'test',
  //     from: 'username',
  //     to: 'someone',
  //   }
  //   const users = [
  //     { username: 'username', id: clientSocket.id },
  //     { username: 'someone', id: clientSocket2.id },
  //   ]

  //   console.log({ users })

  //   serverSocket.on('send-message', (messageData) => {
  //     expect(messageData).toEqual(messageDataInput)
  //     const to = users.find((user) => user.username === messageData.to)
  //     done()

  //     serverSocket.to(to?.id).emit('recieve-message', {
  //       ...messageData,
  //       time: moment().format('HH:mm'),
  //     })
  //     serverSocket.emit('message-sent', {
  //       ...messageData,
  //       time: moment().format('HH:mm'),
  //     })
  //   })

  //   clientSocket.emit('send-message', messageDataInput)
  // })
})
