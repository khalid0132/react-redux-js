import React from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';
import { connect } from 'react-redux'

const Shop = (props) => {
    console.log(props)
    const {products, addToCart} = props;
    return (
        <div>
            <h5>This is Shop</h5>
            { 
                products.map(pd => <Product 
                    product = {pd}
                    key = {pd.id}
                    addToCart = {addToCart}
                ></Product>)
            }
        </div>
    );
};


const mapStateToProps = (state) =>{
    return {
        // cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart,
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop);

// connect(mapStateToProps, mapDispatchToProps)(Shop)
export default connect(mapStateToProps, mapDispatchToProps)(Shop);