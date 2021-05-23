import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import StoreProvider from './Context'
import ChatView from './modules/chat/ChatView'
import LobyView from './modules/loby/LobyView'
import theme from './theme'
import { SocketProvider } from './SocketContext'

function App() {
  return (
    <StoreProvider>
      {(username) => (
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
      )}
    </StoreProvider>
  )
}
export default App
