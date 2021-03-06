import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'
import useStyles from './chat-components-styles'
import { useSocket } from '../../../SocketContext'
import { useStore } from '../../../Context'

const MessageInput = () => {
  const classes = useStyles()
  const [message, setMessage] = useState('')
  const socket = useSocket()
  const { username, chattingWith } = useStore()

  useEffect(() => {
    const objDiv = document.getElementById('scroll_reference')
    objDiv.scrollTop = objDiv.scrollHeight
  }, [])

  const sendMessage = () => {
    if (!message) return
    socket.emit('send-message', { message, from: username, to: chattingWith })
    setMessage('')
  }

  return (
    <Grid
      container
      className={`${classes.messageInputContainer}`}
      alignContent="center"
    >
      <Grid item sm={11} md={11} lg={11}>
        <Paper component="form" className={classes.inputPaper}>
          <InputBase
            className={classes.input}
            placeholder="Write something ..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          <IconButton
            type="submit"
            className={classes.inputIconButton}
            aria-label="write message"
            onClick={(e) => {
              e.preventDefault()
              sendMessage()
            }}
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item sm={1} md={1} lg={1} justify="center" container>
        <IconButton
          type="submit"
          className={classes.inputIconButton}
          aria-label="search"
          onClick={(e) => {
            e.preventDefault()
            console.log('voice')
          }}
        >
          <MicIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default MessageInput
