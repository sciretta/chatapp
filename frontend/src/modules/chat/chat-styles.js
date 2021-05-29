import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  gridContainer: {
    minHeight: '95vh',
  },
  paper: {
    minHeight: '90vh',
  },
  chatsPaper: {
    minWidth: '100%',
  },
  currentChatsContainer: {
    overflowY: 'scroll',
    height: '80vh',
  },
  mainChatPaper: {
    minWidth: '100%',
  },
  mainChatContainer: {
    height: '100%',
    maxHeight: '85vh',
  },
  messagesZone: {
    overflowY: 'scroll',
    height: '100%',
    maxHeight: '75vh',
    scrollBehavior: 'smooth',
    paddingBottom: 10,
  },
  username: {
    textAlign: 'center',
  },
  usernameGrid: {
    height: '12vh',
  },
  chattingWith: {
    height: '6vh',
  },
}))

export default useStyles
