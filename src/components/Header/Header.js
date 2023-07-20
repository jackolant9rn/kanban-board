import { useState } from 'react'
import './Header.css'
import UserProfile from '../UserProfile/UserProfile'

import userAvatar from '../../img/user-avatar.svg'
import arrowDown from '../../img/arrow-down.svg'
import arrowUp from '../../img/arrow-up.svg'

const Header = () => {
  const [menu, setMenu] = useState(true)

  const menuHandler = () => {
    setMenu(!menu)
  }
  
  return (
    <div className="header">
      <h1>Awesome Kanban Board</h1>
      <div className="user_menu" onClick={menuHandler}>
        {<img src={userAvatar} alt="userAvatar"></img>}
        {menu === true
        ? <img src={arrowDown} alt="open"></img>
        : <img src={arrowUp} alt="close"></img>
        }
        <UserProfile menu={menu} />
      </div>
    </div>
  )
}

export default Header