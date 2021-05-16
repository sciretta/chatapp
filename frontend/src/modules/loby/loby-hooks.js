import { useEffect, useState } from 'react'
import { useDispatch } from '../../Context'
import { useSocket } from '../../SocketContext'

export const useUserDisponibylity = (username) => {
  const socket = useSocket()
  const dispatch = useDispatch()
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false)

  useEffect(() => {
    if (!socket) return
    socket.on('is-available', (isAvailable) =>
      setIsUsernameAvailable(isAvailable),
    )

    socket.on('user-available', (usernameCreated) => {
      if (!usernameCreated) return
      dispatch({
        type: 'SET_USERNAME',
        payload: { username: usernameCreated },
      })
    })
  }, [socket])

  useEffect(() => {
    if (!socket) return
    if (username.length < 3) {
      setIsUsernameAvailable(false)
      return
    }
    socket.emit('check-user', username)
  }, [username])

  const onCreateUser = () => {
    socket.emit('new-user', username)
  }

  return { isUsernameAvailable, onCreateUser }
}
