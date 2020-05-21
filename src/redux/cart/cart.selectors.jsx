import { createSelector } from "reselect"


const selectCart = state => state.cart;

export const  selectCartItems = createSelector (
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectItemCount = createSelector(
    [selectCartItems] ,
    (cartItems) => {
        var itemCount = 0;
        cartItems.forEach(cartItem=> {
            itemCount = itemCount + cartItem.count
        })
        return itemCount
    }
)

export const selectCartValue = createSelector(
    [selectCartItems],
    (cartItems) => {
        var cartValue = 0;
        cartItems.forEach(cartItem => {
            cartValue = cartValue + cartItem.count*cartItem.price*10
        })
        return cartValue
    }
)

export const selectCartHidden = createSelector(
    [selectCart], 
    (cart) => cart.hidden
)