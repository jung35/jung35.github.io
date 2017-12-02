import React, { Component } from 'react'

import projectData from './data/projects'
import hackathonData from './data/hackathon'

export default class Home extends Component {
  render() {
    return <div className='home'>
      <div className="home-introduction">
        <p>
          Hi there, I'm a front-end developer that loves <span className="react">react</span>
          and also proficient in back-end with <span className='ruby'>ruby</span>
          , <span className='node'>node</span>, and <span className='php'>php</span>.
        </p>
      </div>
      <div className='home-projects'>
        <h2>Projects</h2>
        <ul className='list'>
          {
            projectData.map(project => {
              return <li key={ project.title }>
                <div className="list-header">
                  <div className="title">{ project.title }</div>
                  <div className="timeline">{ project.timeline }</div>
                </div>
                <p>{ project.description }</p>
                <ul className="tags">
                  {
                    project.tags.map(tag => {
                      const splitTag = tag.split('-')
                      if(splitTag.length == 1) {
                        return <li key={ splitTag[0] } className={ splitTag[0] }>{ splitTag[0] }</li>
                      }

                      return <li key={ splitTag[1] } className={ splitTag[0] }>{ splitTag[1] }</li>
                    })
                  }
                </ul>
              </li>
            })
          }
        </ul>
      </div>
      <div className="home-work">
        <h2>Works</h2>
        <p>...</p>
      </div>
      <div className="home-hackathon">
        <h2>Hackathon <small>&mdash; Coding competition held for 12 to 48 hours to create a software. (<a href="https://en.wikipedia.org/wiki/Hackathon" target="_blank">wikipedia</a>)</small></h2>
        <ul className='list'>
          {
            hackathonData.map(hackathon => {
              return <li key={ hackathon.title }>
                <div className="list-header">
                  <div className="title">{ hackathon.title }</div>
                  <div className="timeline">{ hackathon.timeline }</div>
                </div>
                <p>{ hackathon.description }</p>
                <ul className="tags">
                  {
                    hackathon.tags.map(tag => {
                      const splitTag = tag.split('-')
                      if(splitTag.length == 1) {
                        return <li key={ splitTag[0] } className={ splitTag[0] }>{ splitTag[0] }</li>
                      }

                      return <li key={ splitTag[1] } className={ splitTag[0] }>{ splitTag[1] }</li>
                    })
                  }
                </ul>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  }
}