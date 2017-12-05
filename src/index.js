import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './sass/main.scss'
import { Home } from './script'

import githubIcon from './img/github.png'
import mailIcon from './img/mail.png'

class App extends Component {
  render()  {
    return <Router>
      <div className='container'>
        <div className="notice">Hi! Welcome to my webpage. If you're wondering why things that look clickable isn't clicking, it's because this website is still under development!</div>
        <div className='nav'>
          <Link to='/' className='logo'>Jung Oh</Link>
          <ul className='menu'>
            {/* <li><Link to='/'>Home</Link></li> */}
            <li>
              <a href="https://github.com/jung35" target="_blank">
                <img src={ githubIcon } alt="github profile"/>jung35
              </a>
            </li>
            <li>
              <a href="mailto:jung@jungoh.me">
                <img src={ mailIcon } alt="email"/>jung@jungoh.me
              </a>
            </li>
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