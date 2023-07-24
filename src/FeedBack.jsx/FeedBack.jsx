import React, { useState } from 'react'
import './feedBack.css'

export default function FeedBack() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className='inp'>
      <div className='inp1'>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Ваше имя'/>
      </div>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
      </div>
      <div>
        <textarea placeholder="Напишите сообщение"></textarea>
      </div>
      <button className='bbb'>Отправить</button>
    </div>
  )
}
