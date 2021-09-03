import React from 'react'
//icons
import { Avatar } from '@material-ui/core'

//style
import './HeaderOption.css'

function HeaderOption({ Icon, title, avatar,onClick }) {
  return (
    <>
      <div onClick={onClick} className="header_option">
        {Icon && <Icon className="headeroption_icon" />}
        {avatar && <Avatar className="headeroption_icon" src={avatar} />}
        <h3 className="headeroption_title">{title}</h3>
      </div>
    </>
  )
}

export default HeaderOption
