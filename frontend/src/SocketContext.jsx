import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const SocketContext = createContext()

export const SocketProvider = ({ username, children }) => {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io('', { query: { username } })
    setSocket(newSocket)
    return () => newSocket.close()
  }, [username])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export const useSocket = () => useContext(SocketContext)
