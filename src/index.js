import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './sass/main.scss'
import { Home } from './script'

class App extends Component {
  render()  {
    return <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>

        <Route exact path="/" component={ Home }/>
      </div>
    </Router>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))