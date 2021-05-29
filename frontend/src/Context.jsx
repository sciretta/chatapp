import React, { useReducer, useContext, createContext } from 'react'

const storeContext = createContext()
const dispatchContext = createContext()

const initialState = {
  username: '',
  chattingWith: '',
  chats: [],
  messages: [],
  currentChats: [],
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_USERNAME':
      return { ...state, username: payload.username }
    case 'SET_CHATTING_WITH': {
      return { ...state, chattingWith: payload.chattingWith }
    }
    case 'NEW_MESSAGE':
      const { newMessage } = payload
      const existingChat = state.messages.find(
        (m) => m.from === newMessage.from || m.to === newMessage.from,
      )
      const isSending = newMessage.from === state.username

      if (isSending && !state.chattingWith) return state

      if (!existingChat)
        return {
          ...state,
          messages: [...state.messages, newMessage],
          currentChats: [
            ...state.currentChats,
            {
              from: isSending ? newMessage.to : newMessage.from,
              lastText: newMessage.text,
              read: false,
              timeLastText: newMessage.time,
            },
          ],
        }

      return {
        ...state,
        messages: [...state.messages, payload.newMessage],
        currentChats: [
          ...state.currentChats.filter(
            (cc) => !(cc.from === newMessage.to || cc.from === newMessage.from),
          ),
          {
            from: isSending ? newMessage.to : newMessage.from,
            lastText: newMessage.text,
            read: false,
            timeLastText: newMessage.time,
          },
        ].reverse(),
      }
    default:
      return state
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={state}>
        {children(state.username)}
      </storeContext.Provider>
    </dispatchContext.Provider>
  )
}

export const useStore = () => useContext(storeContext)

export const useDispatch = () => useContext(dispatchContext)

export default StoreProvider
