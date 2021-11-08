import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from '@components'
import { Home } from '@pages'
import './styles/globals.css'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route component={NotFound} /> // ? Page not Found */}
        </Switch>
      </Layout>
    </Router>
  )
}

export { App }
