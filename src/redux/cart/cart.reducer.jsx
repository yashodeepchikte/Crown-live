
// importing utilities
import {addItemToCart} from "./cart.utils"

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]     // [       {    item: {} ,  count: {}     }      ]
}
const CartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...currentState,
                hidden: !currentState.hidden
            };
        case "ADD_ITEM":       
            return {
                ...currentState,
                cartItems:addItemToCart(currentState.cartItems, action.payload)
            }

        default:
            return currentState;
    } 
}

export default CartReducer;