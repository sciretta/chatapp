import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './chat-components-styles'
import { useDispatch, useStore } from '../../../Context'

const CurrentChatTab = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { chattingWith } = useStore()

  return (
    <ToggleButton
      selected={props.from === chattingWith}
      className={classes.chatGridTab}
      onClick={() =>
        dispatch({
          type: 'SET_CHATTING_WITH',
          payload: { chattingWith: props.from },
        })
      }
    >
      <Grid item container direction="column">
        <Grid item container justify="flex-start">
          <Typography variant="subtitle2" className={classes.textFrom}>
            {props.from}
          </Typography>
        </Grid>
        <Grid item container justify="space-between" alignItems="center">
          <Grid item sm={9} md={9} lg={9}>
            <Typography variant="body2" className={classes.text}>
              {props.text}
            </Typography>
          </Grid>
          <Grid item sm={3} md={3} lg={3}>
            <Typography variant="caption" className={classes.textDate}>
              {props.date}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ToggleButton>
  )
}

export default CurrentChatTab
