import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  gridContainer: {
    minHeight: '100vh',
    border: '1px dashed black',
  },
  border: {
    border: '1px dashed black',
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
    maxHeight: '90vh',
  },
  messagesZone: {
    overflowY: 'scroll',
    maxHeight: '80vh',
    scrollBehavior: 'smooth',
    paddingBottom: 10,
  },
}))

export default useStyles
