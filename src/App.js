import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My blog</h2>
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
