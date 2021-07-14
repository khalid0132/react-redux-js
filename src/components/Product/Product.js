import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props 
    // const {name, id} = props.product;
    return (
        <div style = {{border: '1px solid tomato', margin: '10px', padding: '10px', width: '25%', float: 'left'}}>
            <h5>{product.name}</h5>
            <button 
                onClick={() => addToCart(product.id, product.name)}
            >Add to cart</button>
        </div>
    );
};

export default Product;