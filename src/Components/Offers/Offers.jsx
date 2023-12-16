import React from 'react'
import './Offers.css'

export const Offers = () => {
  return (
    <div className='offers'>
<div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers for You</h1>
<p>Only on Best sellers Product</p>
<button>Check Now</button>
</div>
<div className="offers-right">
<img src={require('../Assests/jacket1.jpg')} alt='' />
</div>
    </div>
  )
}
export default Offers;
