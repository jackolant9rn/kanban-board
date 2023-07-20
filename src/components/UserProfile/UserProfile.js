import React from 'react'
import './UserProfile.css'
import menuRect from '../../img/menu-rect.svg'

const UserProfile = props => {
  const { menu } = props
  return (
    <div className={menu ? "profile_hidden" : "profile_active"}>
      <img className={"menu_rect"} src={menuRect} alt=""></img>
      <ul className={"profile_ul"}>
        <li>Profile</li>
        <li>Log out</li>
      </ul>
    </div>
  )
}

export default UserProfile