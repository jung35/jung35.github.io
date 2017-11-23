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

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bubblegum">Bubblegum</Link></li>
          <li><Link to="/shoelaces">Shoelaces</Link></li>
        </ul>
        
        <Route exact path="/" component={ Home }/>
        <Route exact path="/bubblegum" component={ Home }/>
        <Route exact path="/shoelaces" component={ Home }/>
      </div>
    </Router>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))