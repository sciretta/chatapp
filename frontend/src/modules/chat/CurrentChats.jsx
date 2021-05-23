import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './chat-styles'
/* eslint-disable-next-line import/no-cycle */
import Search from './components/Search'
import CurrentChatTab from './components/CurrentChatTab'
import { textShortener } from '../utils'
import { useStore } from '../../Context'

const CurrentChats = () => {
  const [chatsFiltered, setChatsFiltered] = useState([])
  const { username, currentChats } = useStore()
  const classes = useStyles()

  return (
    <Paper className={`${classes.paper} ${classes.chatsPaper}`}>
      <Grid container direction="column" justify="flex-start">
        <Grid item justify="center">
          <Typography variant="h6" className={classes.username}>
            {username}
          </Typography>
        </Grid>
        <Grid item>
          <Search
            placeholder="Search chats"
            onSubmit={(value) => console.log(value, 'desde current chats')}
          />
        </Grid>
        <Grid item className={classes.currentChatsContainer}>
          {chatsFiltered.length === 0 && currentChats
            ? currentChats.map((currentChat) => {
                return (
                  <CurrentChatTab
                    text={textShortener(currentChat.lastText, 20)}
                    from={currentChat.from}
                    date={currentChat.timeLastText}
                  />
                )
              })
            : chatsFiltered.map((filteredCurrentChat) => {
                return (
                  <CurrentChatTab
                    text={textShortener(filteredCurrentChat.lastText, 20)}
                    from={filteredCurrentChat.from}
                    date={filteredCurrentChat.timeLastText}
                  />
                )
              })}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CurrentChats
