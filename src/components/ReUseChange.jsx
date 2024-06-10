import React from 'react'
import './reUseChange.css'

function ReUseChange(props) {
  return (
    <div className='changes'>
          <p>{props.name}</p>
          <p className='score'>{props.score}<span>{props.out}</span></p>
          <p>{props.idea}</p>
    </div>
  )
}

export default ReUseChange
