import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {GoChevronDown} from 'react-icons/go'
import '../Components/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <ul className='navbar-menu'>
            <li className='logo'>EDYODA</li>
            <div style={{display:'flex', gap:'64px', marginTop:'11px'}}>
            <li>Courses <GoChevronDown className='icon'/></li>
            <li>Programs <GoChevronDown className='icon'/></li>
            </div>
        </ul>
        <ul className='navbar-signup'>
            <li><AiOutlineSearch/></li>
            <li>Log in</li>
            <li><button>JOIN NOW</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
