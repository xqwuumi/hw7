import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'

export default function Main() {
  return (
    <>
      <div className='sides'>
        <div className='leftside'>
         <img src="https://www.guild-manga.ru/images/Srisovki_-_statya_s_klyuchevymi_slovami.jpg" alt="none" width='600'/>
        </div>

        <div className='rightside'>
          <h1>Создание манги на основе ваших сюжетов с уникальной рисовкой</h1>
          <h6 className='text'>Партнёрство</h6>
          <button className='btn'><Link to='feedback'>Написать мне</Link></button>
        </div>
      </div>
    </>
  )
}
