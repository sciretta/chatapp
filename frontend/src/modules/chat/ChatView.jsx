import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import useStyles from './styles'

const ChatView = () => {
  const classes = useStyles()
  return (
    <Grid
      alignItems="center"
      className={classes.gridContainer}
      container
      spacing={1}
      direction="row"
      justify="center"
    >
      <Grid className={classes.border} item container md={3} justify="center">
        <Paper className={classes.paper}>chat users</Paper>
      </Grid>
      <Grid className={classes.border} item container md={3} justify="center">
        <Paper className={classes.paper}>chat</Paper>
      </Grid>
      <Grid className={classes.border} item container md={3}>
        search user
      </Grid>
    </Grid>
  )
}

export default ChatView
