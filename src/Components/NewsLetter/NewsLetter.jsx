import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Email</h1>
        <p>Subscribe to our News Letter and Stay UPDATED</p>
   <div>
    <input type="email" placeholder='Your Email ID'/>
    <button>Subscribe</button>
   </div>
    </div>
  )
}
export default NewsLetter;