import React from 'react'
import { Grid, SnackbarContent } from '@material-ui/core'
import useStyles from './chat-components-styles'
import { useStore } from '../../../Context'

const MessageChip = ({ text, ...props }) => {
  const { username: myUser } = useStore()
  const classes = useStyles()
  return (
    <Grid container justify={props.from === myUser ? 'flex-end' : 'flex-start'}>
      <Grid item md={10}>
        <SnackbarContent message={text} className={`${classes.chatSnack}`} />
      </Grid>
    </Grid>
  )
}

export default MessageChip
