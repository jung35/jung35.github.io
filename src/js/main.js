import React from 'react'
import ReactDOM from 'react-dom'

import { Hero, Contact, Navbar } from './components'

const htmlApp = document.getElementById('app')

class Main extends React.Component {
  render() {
    return <div>
      <div className="header">
        <Contact />
        <Navbar />
        <Hero />
      </div>
    </div>
  }
}

ReactDOM.render(<Main />, htmlApp)