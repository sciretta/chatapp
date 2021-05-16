import React, { useEffect, useState } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import useStyles from './loby-styles'
import { useUserDisponibylity } from './loby-hooks'
import { useSocket } from '../../SocketContext'

const LobyView = () => {
  const [username, setUsername] = useState('')
  const [usersConnected, setUsersConnected] = useState(0)
  const socket = useSocket()
  const classes = useStyles()
  const { isUsernameAvailable, onCreateUser } = useUserDisponibylity(username)

  useEffect(() => {
    if (!socket) return
    socket.on('total-users', (totalUsers) => {
      setUsersConnected(totalUsers)
    })
  }, [socket])

  const handleUserName = (e) => {
    setUsername(e.target.value)
  }

  return (
    <Grid
      alignItems="center"
      className={classes.gridContainer}
      container
      spacing={4}
      direction="column"
      justify="center"
    >
      <Grid
        item
        xs={10}
        sm={6}
        md={4}
        lg={3}
        container
        direction="row"
        alignItems="center"
        justify="space-around"
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Users connected
          </Typography>
        </Grid>
        <Grid item>
          <Skeleton variant="circle" width={10} height={10} />
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h1" component="h2" style={{ borderRadius: '5px' }}>
          <Skeleton variant="rect">{usersConnected}</Skeleton>
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <TextField
            id="standard-name"
            label="Username"
            value={username}
            onChange={handleUserName}
            onE
          />
        </Grid>
        <Grid item>
          {isUsernameAvailable ? (
            <Button className={classes.button} onClick={() => onCreateUser()}>
              Create temporal user
            </Button>
          ) : (
            <Button className={classes.button} disabled>
              That name is busy
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LobyView
