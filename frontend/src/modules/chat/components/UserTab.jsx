import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './chat-components-styles'

const UserTab = ({ ...props }) => {
  const classes = useStyles()

  return (
    <ToggleButton className={classes.userGridTab} selected>
      <Grid item container justify="center">
        <Typography variant="subtitle2" className={classes.textFrom}>
          {props.username}
        </Typography>
      </Grid>
    </ToggleButton>
  )
}

export default UserTab
