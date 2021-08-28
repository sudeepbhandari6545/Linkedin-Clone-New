import React from 'react'
//icons
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'

//style
import './Feed.css'
//other
import InputOption from './InputOption'

function Feed() {
  return (
    <div className="feed">
      <div className="feed_container">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="input_option">
          <InputOption Icon={ImageIcon} title="Image" color="#70B5F9" />
          <InputOption Icon={ImageIcon} title="Image" color="#70B5F9" />
          <InputOption Icon={ImageIcon} title="Image" color="#70B5F9" />
          <InputOption Icon={ImageIcon} title="Image" color="#70B5F9" />
        </div>
      </div>
    </div>
  )
}

export default Feed
