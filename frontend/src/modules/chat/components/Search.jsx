import React, { useState } from 'react'
import { Grid, IconButton, InputBase, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './chat-components-styles'

/* eslint-disable-next-line import/no-cycle */

const Search = ({ placeholder, onSubmit, initialValue = '', ...props }) => {
  const [value, setValue] = useState(initialValue)
  const classes = useStyles()

  return (
    <Grid
      container
      className={`${classes.messageInputContainer}`}
      alignContent="center"
    >
      <Paper component="form" className={classes.inputPaper}>
        <InputBase
          {...props}
          className={classes.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <IconButton
          type="submit"
          className={classes.inputIconButton}
          aria-label="search"
          onClick={(e) => {
            e.preventDefault()
            onSubmit(value)
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  )
}

export default Search
