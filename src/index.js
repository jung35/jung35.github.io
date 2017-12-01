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
      <div className='container'>
        <div className='nav'>
          <Link to='/' className='logo'>Jung Oh</Link>
          <ul className='menu'>
            {/* <li><Link to='/'>Home</Link></li> */}
          </ul>
        </div>
        
        <div className='content'>
          <Route exact path='/' component={ Home }/>
        </div>
        
      </div>
    </Router>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))