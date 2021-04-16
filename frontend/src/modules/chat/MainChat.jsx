import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import useStyles from './chat-styles'
import MessageInput from './components/MessageInput'
import MessageChip from './components/MessageChip'

// global state
const messages = [
  {
    from: 'someuser',
    to: 'myuser',
    time: '22:04',
    text: 'some text sent',
  },
  {
    from: 'someuser',
    to: 'myuser',
    time: '22:05',
    text: 'some text sent again',
  },
  {
    from: 'myuser',
    to: 'someuser',
    time: '22:15',
    text: 'responding to the first message',
  },
  {
    from: 'someuser',
    to: 'myuser',
    time: '22:25',
    text:
      'some text sent again to see how much space we can put here  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officia, veniam repudiandae iste fugiat architecto est, distinctio harum eius dignissimos quis eligendi neque exercitationem, accusantium dolorem aliquam! Nostrum, quisquam illo!',
  },
  {
    from: 'myuser',
    to: 'someuser',
    time: '22:33',
    text: 'there is so much space here',
  },
  {
    from: 'someuser',
    to: 'myuser',
    time: '22:04',
    text: 'some text sent',
  },
  {
    from: 'someuser',
    to: 'myuser',
    time: '22:05',
    text: 'some text sent again',
  },
  {
    from: 'myuser',
    to: 'someuser',
    time: '22:15',
    text: 'responding to the first message',
  },
  {
    from: 'someuser',
    to: 'myuser',
    time: '22:25',
    text:
      'some text sent again to see how much space we can put here  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officia, veniam repudiandae iste fugiat architecto est, distinctio harum eius dignissimos quis eligendi neque exercitationem, accusantium dolorem aliquam! Nostrum, quisquam illo!',
  },
  {
    from: 'myuser',
    to: 'someuser',
    time: '22:33',
    text: 'there is so much space here',
  },
]

const MainChat = () => {
  const classes = useStyles()
  return (
    <Paper className={`${classes.paper} ${classes.mainChatPaper}`}>
      <Grid
        style={{ background: '#808B96' }} // delete
        container
        direction="column"
        className={` ${classes.mainChatContainer}`}
        justify="space-between"
      >
        <Grid item className={`${classes.messagesZone}`} id="scroll_reference">
          {messages && messages.map((message) => <MessageChip {...message} />)}
        </Grid>
        <Grid item>
          <MessageInput />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MainChat
