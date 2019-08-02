import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import BlogHome from './BlogHome'
import BlogPost from './BlogPost'

const Routes = props => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/p/:page" component={BlogHome} />
      <Route path="/post/:slug" component={BlogPost} />
    </Switch>
  </Router>
)

export default Routes
