import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './chat-styles'
import CurrentChats from './CurrentChats'
import MainChat from './MainChat'
import SearchUser from './SearchUser'

const ChatView = () => {
  const classes = useStyles()
  return (
    <Grid
      alignItems="center"
      className={classes.gridContainer}
      container
      spacing={1}
      direction="row"
      justify="center"
    >
      <Grid item container sm={3} md={3} lg={3} justify="center">
        <CurrentChats />
      </Grid>
      <Grid item container sm={6} md={6} lg={6} justify="center">
        <MainChat />
      </Grid>
      <Grid className={classes.border} item container sm={3} md={3} lg={3}>
        <SearchUser />
      </Grid>
    </Grid>
  )
}

export default ChatView
