
const INITIAL_STATE = {
    hidden:true
}
const CartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...currentState,
                hidden: !currentState.hidden
            }
        default:
            return currentState
    } 
}

export default CartReducer;