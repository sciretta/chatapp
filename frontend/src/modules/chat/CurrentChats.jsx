import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './chat-styles'
import CurrentChatTab from './components/CurrentChatTab'
import { textShortener } from '../utils'
import { useStore } from '../../Context'

const CurrentChats = () => {
  const { username, currentChats } = useStore()
  const classes = useStyles()

  return (
    <Paper className={`${classes.paper} ${classes.chatsPaper}`}>
      <Grid container direction="column" justify="flex-start">
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          className={classes.usernameGrid}
        >
          <Typography variant="h6" className={classes.username}>
            {username}
          </Typography>
        </Grid>
        <Grid item className={classes.currentChatsContainer}>
          {currentChats.map((currentChat) => {
            return (
              <CurrentChatTab
                text={textShortener(currentChat.lastText, 20)}
                from={currentChat.from}
                date={currentChat.timeLastText}
              />
            )
          })}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CurrentChats
