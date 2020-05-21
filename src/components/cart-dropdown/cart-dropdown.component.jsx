// importing the libraries
import React from "react"

// importing the component
import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
// importing the stylesheet
import "./cart-dropdown.styles.scss"

//  importing redux related files
import {connect} from "react-redux"

//  Importing reselect component selectors
import {selectItemCount} from "../../redux/cart/cart.selectors"
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {selectCartValue} from "../../redux/cart/cart.selectors"

const CartDropdown = ({cartItems, itemCount, cartValue})=>{
    return(
        <div className={`cart-dropdown ${itemCount === 0 ? "empty" : ""} `}>
            <div className="cart-items">
                {itemCount===0 ? "Cart is empty" : cartItems.map(cartItem=> <CartItem item={cartItem} key={cartItem.id} />)}
            </div>
            <hr />
            <div className="cart-value">
                TOTAL  = ₹{cartValue}
            </div>
            <CustomButton>Go To CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProp = (state) => {
    const itemCount=selectItemCount(state);
    const cartItems = selectCartItems(state);
    const cartValue = selectCartValue(state)

    return { cartItems, itemCount, cartValue }
}

export default connect(mapStateToProp)(CartDropdown)