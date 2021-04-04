import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LobyView from './modules/loby/LobyView'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/loby" exact>
          <LobyView />
        </Route>
        <Route path="/" exact>
          Chat view
        </Route>
      </Switch>
    </Router>
  )
}
export default App
