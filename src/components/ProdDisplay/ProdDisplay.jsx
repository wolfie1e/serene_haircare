
import React from 'react';
import './ProdDisplay.css';
import ProdItem from '../ProdItem/ProdItem';
import { product_list } from '../../assets/assets';
//from home
const ProdDisplay = ({ category, cartItems, addToCart, removeFromCart }) => {
    return (
        <div className='p-display' id='p-display'>
            <h2>Top Products in "{category}"</h2>
            <div className='p-display-list'>
                {product_list.map((item) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <ProdItem
                                key={item._id}
                                _id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                cartItems={cartItems}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default ProdDisplay;