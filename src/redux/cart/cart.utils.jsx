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