
export   const   toggleCartHidden= () => {
    return{ type: 'TOGGLE_CART_HIDDEN'}
};

export const addItem = item=> ({
        type: "ADD_ITEM",
        payload: item
});

export const removeItem = item => ({
    type: "REMOVE_ITEM",
    payload:item
})

export const decreaseCartItem = item => ({
    type : "DECREASE_CART_ITEM",
    payload :  item
})




