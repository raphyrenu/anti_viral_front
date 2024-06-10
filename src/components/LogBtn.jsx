import React from 'react'
import './logBtn.css'


function LogBtn(props) {
  return (
    <button className='auth'>{props.name} {props.icon}</button>
  )
}

export default LogBtn
