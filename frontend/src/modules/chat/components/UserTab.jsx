import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './chat-components-styles'
import { useDispatch } from '../../../Context'

const UserTab = ({ ...props }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <ToggleButton
      className={classes.userGridTab}
      selected
      onClick={() =>
        dispatch({
          type: 'SET_CHATTING_WITH',
          payload: { chattingWith: props.username },
        })
      }
    >
      <Grid item container justify="center">
        <Typography variant="subtitle2" className={classes.textFrom}>
          {props.username}
        </Typography>
      </Grid>
    </ToggleButton>
  )
}

export default UserTab
