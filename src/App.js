import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Home - Blog</title>
          <meta
            name="description"
            content="Home page of blog using ButterCMS for netlify"
          />
        </Helmet>
        <div className="App-header">
          <h2>My blog - Home</h2>
          <Link to="/p">
            <h2>Blog</h2>
          </Link>
          <div>This is the home page.</div>
        </div>

        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default App
