import React from 'react'
import "./connect.scss"
import Button from '../../components/bannerButton/Button'
import connectImg from "../../image/connect.jpg"

const Connect = () => {
  return (
    <div className='container-connect'>
        <div className='left'>
            <img src={connectImg} alt="" />
        </div>
        <div className='right'>
            <div className='right-heading'>
                <h2>Let's Connect</h2>
            </div>
            <div className='form-div'>
                    <form action="">
                        <div className="input-start">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        </div>
                        <input type="email" placeholder='Your Email Address' />
                        <input type="text" placeholder='Your Phone Number' />
                        <textarea rows="8" cols="50" placeholder='Tell us a bit about your requirement' />
                        <input type="button" value={"Connect Us"}/>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Connect