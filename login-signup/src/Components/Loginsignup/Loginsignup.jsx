import React, { useState } from 'react'
import './Loginsignup.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");


const Loginsignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text"></div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email ID"/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here</span></div>}
      <div className="submit-container">
        <div className="submit">SignUP</div>
        <div className="login">Login</div>
      </div>
    </div>
  )
}

export default Loginsignup;

