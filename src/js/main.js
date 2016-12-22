import React from 'react'
import ReactDOM from 'react-dom'

import { Hero, Contact } from './components'

const htmlApp = document.getElementById('app')

class Main extends React.Component {
  render() {
    return <div>
      <Contact />
      <Hero />
    </div>
  }
}

ReactDOM.render(<Main />, htmlApp)