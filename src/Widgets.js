import React from 'react'

import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

//style
import './Widgets.css'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        'New Jobs are available here check it out',
        'Top - 9090 -readers',
      )}
      {newsArticle(
        'CoronaVirus: New update available across the world',
        'Top - 900  -readers',
      )}
      {newsArticle('New Brand lunch in united kindom', 'Top - 1000 readers')}
      {newsArticle('React is good or bad for learning?', 'Top - 200 -readers')}
      {newsArticle(
        'Phython is good or bad for learning?',
        'Top - 300 -readers',
      )}
      {newsArticle(
        'CoronaVirus: 550 were killed by corana last night',
        'Top - 900  -readers',
      )}
    </div>
  )
}

export default Widgets
