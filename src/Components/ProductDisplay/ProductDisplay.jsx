import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Contexts/ShopContext';


export const ProductDisplay = (props) => {
    const { product } = props;
const {addToCart} = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
          <img src={require('../Assests/star.png')} alt='' />
          <img src={require('../Assests/star.png')} alt='' />
          <img src={require('../Assests/star.png')} alt='' />
          <img src={require('../Assests/star.png')} alt='' />
          <img src={require('../Assests/dullstar.png')} alt='' />
          <p>(127)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, doloremque soluta! Voluptates, sit, maxime sint error voluptatem incidunt reiciendis neque, ducimus repudiandae ipsam quisquam! Eveniet, nisi consequatur maiores velit pariatur ullam! Quibusdam, culpa, quos sequi, minus quisquam ipsum fugiat ipsa accusantium placeat assumenda voluptas repudiandae itaque numquam cum! Itaque vero porro in, enim tenetur ipsam libero exercitationem consequuntur maiores recusandae expedita nisi? Voluptatum pariatur qui similique unde, nihil maxime blanditiis.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizesss">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>Add to Cart <img src={require('../Assests/cart3-icon.png')} alt='' /></button>
          <p className='productdisplay-right-category'><span>Category:</span>Men , T-shirt, Jeans</p>
          <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest</p>

            </div>
        </div>
    )
}
export default ProductDisplay;
