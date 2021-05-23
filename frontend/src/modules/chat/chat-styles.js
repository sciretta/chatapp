import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  gridContainer: {
    minHeight: '100vh',
  },
  paper: {
    minHeight: '90vh',
  },
  chatsPaper: {
    minWidth: '100%',
  },
  currentChatsContainer: {
    overflowY: 'scroll',
    height: '75vh',
  },
  mainChatPaper: {
    minWidth: '100%',
  },
  mainChatContainer: {
    height: '100%',
    maxHeight: '90vh',
  },
  messagesZone: {
    overflowY: 'scroll',
    height: '100%',
    maxHeight: '80vh',
    scrollBehavior: 'smooth',
    paddingBottom: 10,
  },
  username: {
    textAlign: 'center',
  },
}))

export default useStyles
