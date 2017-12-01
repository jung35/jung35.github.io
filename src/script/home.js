import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log('home')

    return <div className='home'>
      <div className="home-introduction">
        <p>
          Hi there, I specialize in front-end web development using <span className="react">react</span>,
          but also proficient in back-end using <span className='ruby'>ruby</span>
          , <span className='node'>node</span>, and <span className='php'>php</span>.
        </p>
      </div>
      <div className='home-projects'>
        <h2>Projects</h2>
        <ul className='list'>
          <li><a href="#">VacStatus <div className="desc">2014-2016</div></a>
            <p>Web application to track cheaters for games that use Valve Anti-Cheat (VAC)</p>
            <ul className="tags">
              <li className='php'>laravel</li>
              <li className='html'>bootstrap</li>
              <li className='react'>react</li>
            </ul>
          </li>
          <li><a href="#">10 Man bot <div className="desc">2017</div></a>
            <p>Discord bot to help setup teams and map votes for private counter-strike match</p>
            <ul className="tags">
              <li className="node">node</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="home-work">
        <h2>Works</h2>
      </div>
      <div className="home-hackathon">
        <h2>Hackaton <small>(wikipedia on <a href="https://en.wikipedia.org/wiki/Hackathon" target="_blank">hackathon</a>)</small></h2>
        <ul className='list'>
          <li><a href="#">Subtle Scheme <div className="desc">Hack Illinois 2015</div></a>
            <p>Browser based game where players use phones as controllers to answer fill-in-the-blank trivia questions</p>
            <ul className="tags">
              <li className="react">react</li>
              <li className='html'>bootstrap</li>
              <li className="node">socket.io</li>
              <li className="node">express.js</li>
              <li className="mongodb">mongodb</li>
            </ul>
          </li>
          <li><a href="#">MechMania <div className="desc">MechMania 2017</div></a>
            <p>AI to compete in a 3v3 combat arena</p>
            <ul className="tags">
              <li className="csharp">C#</li>
              <li className="csharp">Unreal</li>
            </ul>
          </li>
          <li><a href="#">Electronic Trading Challenge <div className="desc">Jane Street ETC 2017</div></a>
            <p>AI to compete in a simulated market trading challenge</p>
            <ul className="tags">
              <li className="python">Python</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  }
}