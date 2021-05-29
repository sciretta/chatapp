import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import useStyles from './chat-styles'
import Search from './components/Search'
import UserTab from './components/UserTab'
import { useSearchUsers } from './chat-hooks'

const SearchUser = () => {
  const { users, setUserInput } = useSearchUsers()
  const classes = useStyles()

  return (
    <Paper className={`${classes.paper} ${classes.chatsPaper}`}>
      <Grid container direction="column" justify="flex-start">
        <Grid item className={classes.usernameGrid}>
          <Search
            placeholder="Search users"
            onSubmit={(value) => setUserInput(value)}
          />
        </Grid>
        <Grid item className={classes.currentChatsContainer}>
          {users.map((username) => (
            <UserTab username={username} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SearchUser
