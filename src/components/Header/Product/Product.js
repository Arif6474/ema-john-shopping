import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    
    const { name, img, price, ratings, seller, } = props.product;
    return (
        <div className="product">
           <img src= {img} alt="" />
           <div className="product-info">
           <p className= "product-name">{name}</p>
           <p className= "product-price">Price: ${price}</p>
           <p><small className= "product-seller">Seller: {seller}</small></p>
           <p className= "product-rating">Rating: {ratings} stars</p>
           </div>
           <button onClick={() => props.handleAddToCart(props.product)} className= "cart-btn">
               <p>Add to Cart</p> <FontAwesomeIcon icon ={ faShoppingCart } ></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;