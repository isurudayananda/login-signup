import './Loginsignup.css'
import React from 'react'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const Loginsignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text"></div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="text" placeholder=''/>
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="text" placeholder=''/>
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="text" placeholder=''/>
        </div>
      </div>

    </div>
  )
}

export default Loginsignup;

