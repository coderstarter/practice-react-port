import './Header.css';
import React from 'react'

function Header() {
  return (
    <div className='container'>
        <nav>
            <ul className='heading'>
                <li className="active">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Qualification</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header