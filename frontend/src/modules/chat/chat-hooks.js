import { useEffect, useState } from 'react'
import { useSocket } from '../../SocketContext'

export const useSearchUsers = () => {
  const socket = useSocket()
  const [userInput, setUserInput] = useState('')
  const [users, setUsers] = useState([])
  useEffect(() => {
    // if (!socket) return
    socket.on('users-found', (usersList) => setUsers(usersList))
  }, [socket])

  useEffect(() => {
    // if (!socket) return
    socket.emit('search-user', userInput)
  }, [userInput])
  return { users, setUserInput }
}
