import React from 'react'
import NavBtn from '../components/NavBtn'
import './header.css'
import LogBtn from '../components/LogBtn'
import { FaChevronDown } from 'react-icons/fa';

function Header() {
  return (
      <div className='header'>
          <div className='icon'></div>
          <div className="nav">
        <NavBtn name='Overview&nbsp;' icon={ <FaChevronDown style={{ color: 'white' }}/>} />
        <NavBtn name='Solutions&nbsp;' icon={<FaChevronDown style={{ color: 'white' }} />}/>
        <NavBtn name='Materials&nbsp;' icon={<FaChevronDown style={{ color: 'white' }}/>} /> 
        <NavBtn name='Pricing' /> 
        <NavBtn name='About'/>
        
              
          </div>
          <div className="auth">
              <LogBtn name='Login' />
              <LogBtn name='Sign up'/>
          </div>
    </div>
  )
}

export default Header
