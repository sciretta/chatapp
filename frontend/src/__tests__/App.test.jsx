import React, { useEffect } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import StoreProvider, { useDispatch, useStore } from '../Context'
import LobyView from '../modules/loby/LobyView'
import ChatView from '../modules/chat/ChatView'
import { SocketProvider } from '../SocketContext'
import theme from '../theme'

describe('App tests', () => {
  let AppWithoutContext
  let AppComponent

  beforeAll(() => {
    AppWithoutContext = ({ username }) => (
      <SocketProvider>
        {(socket) => (
          <ThemeProvider theme={theme('dark')}>
            <Container>
              <CssBaseline />
              <Router>
                <Switch>
                  <Route path="/loby" exact>
                    {username && socket ? <Redirect to="/" /> : <LobyView />}
                  </Route>
                  <Route path="/" exact>
                    {username && socket ? (
                      <ChatView />
                    ) : (
                      <Redirect to="/loby" />
                    )}
                  </Route>
                </Switch>
              </Router>
            </Container>
          </ThemeProvider>
        )}
      </SocketProvider>
    )

    AppComponent = ({ username, initialUsername }) => {
      const dispatch = useDispatch()
      useEffect(() => {
        dispatch({
          type: 'SET_USERNAME',
          payload: { username: initialUsername },
        })
      }, [])
      return <AppWithoutContext username={username} />
    }
  })

  test('Should render loby view', () => {
    const renderedAppComponent = render(
      <StoreProvider>
        {(username) => <AppComponent username={username} initialUsername="" />}
      </StoreProvider>,
    )

    // console.log(prettyDOM(renderedAppComponent.container))

    renderedAppComponent.getByText('Users connected')
    renderedAppComponent.getByText('Username')
    renderedAppComponent.getByText('That name is busy')
  })

  test('Should render chat view ', () => {
    const initialUsername = 'leonardo'
    const renderedAppComponent = render(
      <StoreProvider>
        {(username) => (
          <AppComponent username={username} initialUsername={initialUsername} />
        )}
      </StoreProvider>,
    )

    // console.log(prettyDOM(renderedAppComponent.container))

    renderedAppComponent.getByText(initialUsername)
  })

  test('Context dispatchs ', () => {
    const usernameCreated = 'username created'
    const chattingWith = 'someone'
    const newMessage = {
      from: usernameCreated,
      to: chattingWith,
      text: 'some text',
      time: '22:03',
    }
    const newMessageRecieved = {
      to: usernameCreated,
      from: chattingWith,
      text: 'some text',
      time: '22:03',
    }
    const initialState = {
      username: '',
      chattingWith: '',
      chats: [],
      messages: [],
      currentChats: [],
    }
    const ContextButtonsTestComponent = () => {
      const dispatch = useDispatch()
      const store = useStore()
      return (
        <>
          <button
            type="button"
            data-testid="SET_USERNAME"
            onClick={() =>
              dispatch({
                type: 'SET_USERNAME',
                payload: { username: usernameCreated },
              })
            }
          >
            {store.username}
          </button>
          <button
            type="button"
            data-testid="SET_CHATTING_WITH"
            onClick={() =>
              dispatch({
                type: 'SET_CHATTING_WITH',
                payload: { chattingWith },
              })
            }
          >
            {store.chattingWith}
          </button>
          <button
            type="button"
            data-testid="NEW_MESSAGE"
            onClick={() => {
              dispatch({
                type: 'NEW_MESSAGE',
                payload: { newMessage },
              })
              dispatch({
                type: 'NEW_MESSAGE',
                payload: { newMessage: newMessageRecieved },
              })
            }}
          >
            {JSON.stringify(store.messages)}
          </button>
          <button
            type="button"
            data-testid="DEFAULT"
            onClick={() =>
              dispatch({
                type: 'SOMETHING',
                payload: { username: usernameCreated },
              })
            }
          >
            {JSON.stringify(store)}
          </button>
        </>
      )
    }

    render(
      <StoreProvider>{() => <ContextButtonsTestComponent />}</StoreProvider>,
    )

    const DEFAULT_BUTTON = screen.getByTestId('DEFAULT')

    fireEvent.click(DEFAULT_BUTTON)

    screen.getByText(JSON.stringify(initialState))

    const SET_USERNAME_BUTTON = screen.getByTestId('SET_USERNAME')

    fireEvent.click(SET_USERNAME_BUTTON)

    screen.getByText(usernameCreated)

    const CHATTING_WITH_BUTTON = screen.getByTestId('SET_CHATTING_WITH')

    fireEvent.click(CHATTING_WITH_BUTTON)

    screen.getByText(chattingWith)

    const NEW_MESSAGE_BUTTON = screen.getByTestId('NEW_MESSAGE')

    fireEvent.click(NEW_MESSAGE_BUTTON)

    screen.getByText(JSON.stringify([newMessage, newMessageRecieved]))
  })
})
