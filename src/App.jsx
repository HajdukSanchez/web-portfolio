import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// * Components
import { Home, NotFound, Layout } from './components'
// * Styles
import '../styles/globals.css'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} /> // Page not Found
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
