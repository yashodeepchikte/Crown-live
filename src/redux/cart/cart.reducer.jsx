
// importing utilities
import {addItemToCart} from "./cart.utils"
import {removeItemFromCart} from "./cart.utils" 
import {decreaseItemCount} from "./cart.utils"

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
        case "REMOVE_ITEM":
            return{
                ...currentState, 
                cartItems: removeItemFromCart(currentState.cartItems, action.payload)
            }
        case "DECREASE_CART_ITEM":
            return {
                ...currentState,
                cartItems : decreaseItemCount(currentState.cartItems, action.payload)
            }

        default:
            return currentState;
    } 
}

export default CartReducer;