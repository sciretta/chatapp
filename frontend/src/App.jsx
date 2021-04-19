import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import StoreProvider from './Context'
import ChatView from './modules/chat/ChatView'
import LobyView from './modules/loby/LobyView'
import theme from './theme'

function App() {
  return (
    <StoreProvider>
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
    </StoreProvider>
  )
}
export default App
