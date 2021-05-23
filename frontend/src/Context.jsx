import React, { useReducer, useContext, createContext } from 'react'

const storeContext = createContext()
const dispatchContext = createContext()

const initialState = {
  username: '',
  chattingWith: '',
  chats: [],
  messages: [
    {
      from: 'someuser',
      to: 'myuser',
      time: '22:04',
      text: 'some text sent',
    },
  ],
  currentChats: [
    {
      from: 'someuser',
      lastText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam exercitationem, vitae neque inventore veritatis atque earum sunt laboriosam placeat vel perferendis libero error beatae. Aperiam fugit similique a officia!',
      read: true,
      timeLastText: '22:22',
    },
    {
      from: 'anotheruser',
      lastText: 'hey man how are you ',
      read: true,
      timeLastText: '10:08',
    },
  ],
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
      return {
        ...state,
        messages: [...state.messages, payload.newMessage],
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
