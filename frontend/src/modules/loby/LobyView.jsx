import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(() => ({
  gridContainer: {
    minHeight: '100vh',
  },
  userForm: {
    width: 200,
  },
  button: {
    textTransform: 'capitalize',
  },
}))

const LobyView = () => {
  const classes = useStyles()
  return (
    <Grid
      alignItems="center"
      className={classes.gridContainer}
      container
      spacing={4}
      direction="column"
      justify="center"
    >
      <Grid
        item
        xs={10}
        sm={6}
        md={4}
        lg={3}
        container
        direction="row"
        alignItems="center"
        justify="space-around"
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Users connected
          </Typography>
        </Grid>
        <Grid item>
          <Skeleton variant="circle" width={10} height={10} />
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="h1" component="h2" stype={{ borderRadius: '5px' }}>
          <Skeleton variant="rect" border>
            12345
          </Skeleton>
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          {' '}
          <TextField
            id="standard-name"
            label="Name"
            // value={name}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button className={classes.button}>Create</Button>
          {/* <Button className={classes.button} disabled>
              That name is busy
            </Button> */}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LobyView
