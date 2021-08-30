import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// * Components
import { Home, NotFound } from './components'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} /> // Page not Found
      </Switch>
    </Router>
  )
}

export default App
