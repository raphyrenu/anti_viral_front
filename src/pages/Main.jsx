import React from 'react'
import './main.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import MainBtn from '../components/MainBtn';
import TryBtn from '../components/TryBtn';

function Main() {
  return (
      <div className='main'>
        <MainBtn name='ClosedX access &nbsp;' arrow={ <FaArrowRight/>} />
          
      <h1>Protect your systems <br />
              securely with ClosedX</h1>
          <p>Helping you to protect all your digital activity and data <br />from unwanted third party by using &nbsp; <span><a href=""> ClosedX</a></span></p>
          <TryBtn onClick={() => {
              
          }} name='Try ClosedX for free'/>
    </div>
  )
}

export default Main
