import React from 'react'

//icons
import { Avatar } from '@material-ui/core'

//style
import './SideBar.css'

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_top">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MxwxMjA3fDB8MHxleHBsb3jlLWZLZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
            alt=""
          />
          <Avatar className="sidebar_avatar" />
          <h2>Sudeep Bhandari</h2>
          <h4>sudeepbhandari@gmail.com</h4>
        </div>
        <div className="sidebar-status_main">
          <div className="sidebar_status">
            <p>Who view you</p>
            <p>2,623</p>
          </div>
          <div className="sidebar_status">
            <p>View on posts</p>
            <p>3,623</p>
          </div>
        </div>
        <div className="sidebar_button">
          <p>Recent</p>
        </div>
      </div>
    </>
  )
}

export default SideBar
