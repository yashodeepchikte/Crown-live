export const addItemToCart = (cartItems, carItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === carItemToAdd.id
    );

    if  (existingCartItem){
        return cartItems.map( cartItem => 
            cartItem.id === carItemToAdd.id 
            ? {...cartItem, count: cartItem.count+1}
            : cartItem
            )
    }
    return [...cartItems, {...carItemToAdd, count:1} ]
}

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
    console.log("cart Item before filter = ", cartItems)
    cartItems = cartItems.filter( cartItem => cartItem.id != itemToBeRemoved.id)
    console.log("cart Item after filter = ", cartItems)
    return cartItems
}

export const decreaseItemCount = (cartItems, itemToBeReduced) => {
    if (itemToBeReduced.count === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToBeReduced.id)
    }
    else{
        return cartItems.map(cartItem => {
            if (cartItem.id  === itemToBeReduced.id){
                return {...cartItem, count: cartItem.count -1}
            }else{
                return cartItem
            }
        })
    }
}