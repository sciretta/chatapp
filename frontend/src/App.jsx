import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StoreProvider from './Context'
import ChatView from './modules/chat/ChatView'
import LobyView from './modules/loby/LobyView'
import theme from './theme'
import { SocketProvider } from './SocketContext'

function App() {
  return (
    <StoreProvider>
      {() => (
        <SocketProvider username="username por props">
          <ThemeProvider theme={theme('dark')}>
            <Container>
              <CssBaseline />
              <Router>
                <Switch>
                  <Route path="/loby" exact>
                    <LobyView />
                  </Route>
                  <Route path="/" exact>
                    <ChatView />
                  </Route>
                </Switch>
              </Router>
            </Container>
          </ThemeProvider>
        </SocketProvider>
      )}
    </StoreProvider>
  )
}
export default App
