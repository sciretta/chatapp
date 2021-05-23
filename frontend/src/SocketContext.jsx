import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io('')
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
  }, [])

  return (
    <SocketContext.Provider value={socket}>
      {children(socket)}
    </SocketContext.Provider>
  )
}

export const useSocket = () => useContext(SocketContext)
