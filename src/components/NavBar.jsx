import React from 'react'
import Logo from '../asset-components/Logo.jsx'
import '../components/navBar.scss'

const NavBar = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='navWrapper'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='navBarItems'>
            <a href='#' className='navItem'>
              Collections
            </a>
            <a href='#' className='navItem'>
              Men
            </a>
            <a href='#' className='navItem'>
              Women
            </a>
            <a href='#' className='navItem'>
              About
            </a>
            <a href='#' className='navItem'>
              Contact
            </a>
          </div>
        </div>
        <hr className='lineBreak'></hr>
      </nav>
    </div>
  )
}

export default NavBar
