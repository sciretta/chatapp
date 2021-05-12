import React, { useReducer, useContext, createContext } from 'react'

const storeContext = createContext()
const dispatchContext = createContext()

const initialState = {
  username: '',
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_USERNAME':
      return { ...state, username: payload.username }
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
