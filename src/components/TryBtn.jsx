import React from 'react'
import './tryBtn.css'
import { Link } from "react-router-dom";

function TryBtn(props) {
  return (
    <button className="try" id={props.id}><Link to='/try'>{props.name}</Link></button>
  )
}

export default TryBtn
