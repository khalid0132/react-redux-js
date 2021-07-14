import React from 'react';
import {connect} from 'react-redux';
import { removeFromCart} from '../../redux/actions/cartActions'

const Cart = (props) => {
    // console.log(props)
    const { cart, removeFromCart } = props;
    return (
        <div style={{border: '1px solid blue'}}>
            <h2>This is Cart</h2>
            <p style={{border: '1px solid green'}}>
            { 
                cart.map(pd => <p 
                    key = {pd.cartId}>{pd.name} <button
                    onClick={()=> removeFromCart(pd.cartId)}
                    >X</button></p>)
            }
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart,
}

// connect(mapStateToProps, mapDispatchToProps)(Cart)
export default connect(mapStateToProps, mapDispatchToProps)(Cart);