

import React, { useState } from 'react';
import ExploreCategories from '../../components/ExploreCategories/ExploreCategories';
import ProdDisplay from '../../components/ProdDisplay/ProdDisplay';
import Header from '../../components/Header/Header';

//from App.js as props
const Home = ({ cartItems, addToCart, removeFromCart }) => {
    // State for the selected category within Home
    const [category, setCategory] = useState("All");

    return (
        <div>
          <Header/>
            <ExploreCategories category={category} setCategory={setCategory} />
            <ProdDisplay
                category={category}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        </div>
    );
};

export default Home;