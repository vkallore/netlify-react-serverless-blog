import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import BlogHome from './BlogHome'
import BlogPost from './BlogPost'

const Routes = props => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/p" component={BlogHome} />
        <Route path="/p/:page" component={BlogHome} />
        <Route path="/post/:slug" component={BlogPost} />
      </Switch>
    </Router>
  )
}

export default Routes
