import React, { props } from 'react'

import './navBtn.css'

function NavBtn(props) {
  return (
    <button className='button'><a href="">{props.name} { props.icon}</a></button>
  )
}

export default NavBtn
