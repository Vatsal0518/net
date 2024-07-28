import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Movies from './Movies'
function Header() {
  return (
    <div>
<div className="containe">
    <div className="elements">
        <Link to='/'>Home</Link>
        
    </div>
    <div className="elements">
        <Link to='/movies'>Movies</Link>
    </div>
    <div className="elements">
        <Link to='/movielist'>MoviesList</Link>
        
    </div>
    <div className="elements">
        <Link to='/userdetails'>Users_details</Link>
        
    </div>
</div>
    </div>
  )
}

export default Header