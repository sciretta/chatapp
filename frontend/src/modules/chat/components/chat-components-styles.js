import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  messageInputContainer: {
    height: 65,
  },
  inputPaper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '0 5px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  inputIconButton: {
    padding: 10,
  },
  chatSnack: {
    margin: '5px 5px 0 5px',
    minWidth: 50,
  },
  chatGridTab: {
    padding: 5,
    width: '100%',
    height: 65,
    borderRadius: 0,
  },
  textFrom: {
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'start',
    fontSize: 11,
  },
  textDate: {
    textAlign: 'end',
  },
  userGridTab: {
    width: '100%',
    padding: 5,
    height: 45,
    marginTop: 1,
  },
}))

export default useStyles
