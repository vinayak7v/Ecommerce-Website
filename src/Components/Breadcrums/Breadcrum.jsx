import React from 'react'
import './Breadcrum.css'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={require('../Assests/arrow.png')} alt='' /> SHOP <img src={require('../Assests/arrow.png')} alt='' /> {product.category} <img src={require('../Assests/arrow.png')} alt='' /> {product.name}

    </div>
  )
}

export default Breadcrum;