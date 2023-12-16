import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={require('../Assests/cart3-icon.png')} alt='' />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={require('../Assests/insta.png')} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={require('../Assests/pintrest.png')} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={require('../Assests/whatsap.png')} alt='' />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Cpoyright @ 2023 - ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Footer;
