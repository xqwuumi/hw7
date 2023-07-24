import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

export default function Header() {
  return (
    <>
        <ul className='header navbar navbar-light'> 
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/about'>Обо мне</Link></li>
            <li><Link to='feedback'>Обратная связь</Link></li>
        </ul>
    </>
  )
}
