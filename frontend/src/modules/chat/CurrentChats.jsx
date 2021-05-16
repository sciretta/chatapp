import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './chat-styles'
/* eslint-disable-next-line import/no-cycle */
import Search from './components/Search'
import CurrentChatTab from './components/CurrentChatTab'
import { textShortener } from '../utils'
import { useStore } from '../../Context'

// global state
export const currentChats = [
  {
    from: 'someuser',
    lastText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam exercitationem, vitae neque inventore veritatis atque earum sunt laboriosam placeat vel perferendis libero error beatae. Aperiam fugit similique a officia!',
    read: true,
    timeLastText: '22:22',
  },
  {
    from: 'anotheruser',
    lastText: 'hey man how are you ',
    read: true,
    timeLastText: '10:08',
  },
  {
    from: 'otheruser',
    lastText: 'give me my money ',
    read: true,
    timeLastText: '12:50',
  },
]

const CurrentChats = () => {
  const [chatsFiltered, setChatsFiltered] = useState([])
  const { username } = useStore()
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
