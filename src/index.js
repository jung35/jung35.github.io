import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './sass/main.scss'
import { Home } from './script'

const App = () => {
  <Router>
    <Route exact path="/" component={ Home }/>
  </Router>
}

export default App