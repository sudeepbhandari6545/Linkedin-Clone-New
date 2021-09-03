import React from 'react'
//icons
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

//style
import './Header.css'
//other
import HeaderOption from './HeaderOption'
import { logout } from './features/counter/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'

function Header() {
  const dispatch = useDispatch()

  const logoutofApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <>
      <div className="header">
        <div className="header_left">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="logo"
          />
          <div className="header_search">
            <SearchIcon />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notification" />
          <HeaderOption
            avatar="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
            title="Me"
            onClick={logoutofApp}
          />
        </div>
      </div>
    </>
  )
}

export default Header
