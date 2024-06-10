import React from 'react'
import './tryMain.css'
import ReUseChange from '../components/ReUseChange'
import LogBtn from '../components/LogBtn'
import ring from '../images/Others/ring.png'
import Circular from '../components/Circular'
import { FaCheckCircle } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import TryBtn from '../components/TryBtn'


import { FaChevronDown } from 'react-icons/fa'
function TryMain() {
  return (
    <div className='trymain'>
          <div className="features">
              <div className="activity">
              <div className="reuse">
                  <ReUseChange name='My activity' score='100' out='%' idea='My activity' />
                      <LogBtn name='Weekly &nbsp;' icon={ <FaChevronDown style={{ color: 'white' }}/>} />
                  </div>
                  <img src={ring} alt="ring" /><br />

                <p className='computing'><span>
                  <Circular id='purple'/> Cloud (computing)
                </span><span className='side'><FaCheckCircle style={{position:'relative'}} /><p>&nbsp;&nbsp; 87.5% &nbsp;&nbsp;&nbsp; </p><span className='Ellips'><FaEllipsisH /></span></span></p>
                 
          <hr />
          <p className='computing'><span>
                  <Circular id='yellow'/> Database (server)
                </span><span className='side'><FaCheckCircle style={{position:'relative'}} /><p>&nbsp;&nbsp; 87.5% &nbsp;&nbsp;&nbsp; </p><span className='Ellips'><FaEllipsisH /></span></span></p>
          <hr />
          <p className='computing'><span>
                  <Circular id='yellow'/> Database (server)
                </span><span className='side'><FaCheckCircle style={{position:'relative'}} /><p>&nbsp;&nbsp; 87.5% &nbsp;&nbsp;&nbsp; </p><span className='Ellips'><FaEllipsisH /></span></span></p>
        
          <TryBtn name='Scan system' id='scanfinal'/>
              </div>
              <div className="system">
                 
              </div>
              <div className="issues"></div>
              <div className="data"></div>
              <div className="cloud"></div>
              <div className="scan"></div>
          </div>
    </div>
  )
}

export default TryMain
