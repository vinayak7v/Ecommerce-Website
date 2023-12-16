import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contexts/ShopContext';

export const Navbar = () => {
const [menu, setMenu] = useState("shop");
const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={require('../Assests/bag-logo.jpg')} alt='' />
                <p>SHOPPER</p>

            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Aadmi")}}><Link style={{textDecoration: 'none'}} to='/Aadmi'>Aadmi</Link>{menu==="Aadmi"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Aurat")}}><Link style={{textDecoration: 'none'}} to='/Aurat'>Aurat</Link>{menu==="Aurat"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Baalak")}}><Link style={{textDecoration: 'none'}} to='/Baalak'>Baalak</Link>{menu==="Baalak"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={require('../Assests/cart3-icon.png')} alt='' /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>

    );
}

export default Navbar;