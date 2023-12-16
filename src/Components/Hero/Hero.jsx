import React from 'react'
import './Hero.css'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={require('../Assests/hand1.png')} alt='' />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                </div>
            </div>
            <div className="hero-right">
            <img src={require('../Assests/model1.jpg')} alt='' />


            </div>
        </div>
    )
}

export default Hero