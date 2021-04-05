import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ChatView from './modules/chat/ChatView'
import LobyView from './modules/loby/LobyView'
import theme from './theme'

function App() {
  return (
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
  )
}
export default App
