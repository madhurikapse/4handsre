import React from 'react'
import { Link } from 'react-router-dom'
import "./Component.css"

const Nav = () => {
  return (
    <>
    <div className='links'>
    <Link to="/" className='link'>Home</Link>
    <Link to="/student" className='link'>Students</Link>
    <Link to="/contact" className='link'>Contact</Link>
    </div>
    </>
  )
}

export default Nav
