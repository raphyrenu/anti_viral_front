import React from 'react'
import './mainBtn.css'


function MainBtn(props) {
  return (
      <button className='acces'>{props.name} { props.arrow}</button>
  )
}

export default MainBtn
