import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import useStyles from './chat-styles'
/* eslint-disable-next-line import/no-cycle */
import Search from './components/Search'

const SearchUser = () => {
  const classes = useStyles()
  return (
    <Paper className={`${classes.paper} ${classes.chatsPaper}`}>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <Search
            placeholder="Search users"
            onSubmit={(value) => console.log(value)}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SearchUser
