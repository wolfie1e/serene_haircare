

import React from 'react';
import './ProdItem.css';
import { assets } from '../../assets/assets';
//taken care by app and passed down
const ProdItem = ({ _id, name, price, description, image, cartItems, addToCart, removeFromCart }) => {   
    const itemCount = cartItems[_id] || 0; 
    return (
        <div className='p-item'>
            <div className='p-item-img-container'>
                <img className='p-item-image' src={image} alt={name} />
                {
                    itemCount === 0
                        ? <img className='add' onClick={() => addToCart(_id)} src={assets.add} alt="Add to cart" />
                        : <div className="p-item-counter">
                            <img src={assets.minus} onClick={() => removeFromCart(_id)} alt="Remove from cart" />
                            <p>{itemCount}</p>
                            <img src={assets.add} onClick={() => addToCart(_id)} alt="Add one more" />
                        </div>
                }
            </div>
            <div className="p-item-info">
                <p>{name}</p>
                <p className="p-item-desc">{description}</p>
                <p className="p-item-price">₹{price}</p>
            </div>
        </div>
    );
}

export default ProdItem;