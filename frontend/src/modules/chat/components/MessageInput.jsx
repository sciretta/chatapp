import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'
import useStyles from './chat-components-styles'

const MessageInput = () => {
  const classes = useStyles()

  useEffect(() => {
    const objDiv = document.getElementById('scroll_reference')
    objDiv.scrollTop = objDiv.scrollHeight
  }, [])

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
          />
          <IconButton
            type="submit"
            className={classes.inputIconButton}
            aria-label="write message"
            onClick={(e) => {
              e.preventDefault()
              console.log('submiting')
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
