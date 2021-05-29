import React, { useEffect } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './chat-styles'
import MessageInput from './components/MessageInput'
import MessageChip from './components/MessageChip'
import { useSocket } from '../../SocketContext'
import { useDispatch, useStore } from '../../Context'

const MainChat = () => {
  const classes = useStyles()
  const socket = useSocket()
  const { messages, chattingWith } = useStore()
  const dispatch = useDispatch()

  useEffect(() => {
    socket.on('recieve-message', ({ message, from, to, time }) => {
      dispatch({
        type: 'NEW_MESSAGE',
        payload: { newMessage: { from, to, text: message, time } },
      })
    })
    socket.on('message-sent', ({ message, from, to, time }) => {
      dispatch({
        type: 'NEW_MESSAGE',
        payload: { newMessage: { from, to, text: message, time } },
      })
    })
  }, [socket])

  return (
    <Paper className={`${classes.paper} ${classes.mainChatPaper}`}>
      <Grid item className={`${classes.chattingWith}`}>
        <Typography variant="h6" className={classes.username}>
          {chattingWith}
        </Typography>
      </Grid>
      <Grid
        style={{ background: '#808B96' }} // delete
        container
        direction="column"
        className={` ${classes.mainChatContainer}`}
        justify="space-between"
      >
        <Grid item className={`${classes.messagesZone}`} id="scroll_reference">
          {messages &&
            messages
              .filter((m) => m.from === chattingWith || m.to === chattingWith)
              .map((message) => <MessageChip {...message} />)}
        </Grid>
        <Grid item>
          <MessageInput />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MainChat
