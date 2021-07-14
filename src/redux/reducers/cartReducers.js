import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cartActions"
const initialState = {
    cart: [],
    products: [
        { name: 'Lenovo', id: 1 },
        { name: 'Asus', id: 2 },
        { name: 'Dell', id: 3 },
        { name: 'HP', id: 4 },
        { name: 'Toshiba', id: 5 },
        { name: 'Apple', id: 6 }
    ]
}


const cartReducers = (state = initialState, action) => {
    // console.log(action)
        switch(action.type) {
            case ADD_TO_CART: 
                // const newId = action.id;
                const newItem = {
                    productId: action.id, 
                    name: action.name, 
                    cartId: state.cart.length + 1
                
                }
                const newCart = [...state.cart, newItem];
                return {...state, cart: newCart}
                // return {
                //     cart: [...state.cart, action.id]
                // }

            case REMOVE_FROM_CART:
                const cartId = action.cartId;
                const remainingCart = state.cart.filter(item => item.cartId !== cartId);
                return {
                    ...state,
                    cart: remainingCart
                }
            
            
            default:
                return state;
        }
}

export default cartReducers;