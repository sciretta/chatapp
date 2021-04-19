const express = require('express')

const app = express()

// app.use(express.static('build'))

app.get('/users/', (req, res) => {
  res.json({
    users: ['user1', 'user 2'],
  })
})

app.listen(4000, () => {
  console.log('listening on 4000')
})
