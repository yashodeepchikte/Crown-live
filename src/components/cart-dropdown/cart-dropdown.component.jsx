// importing the libraries
import React from "react"

// importing the component
import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
// importing the stylesheet
import "./cart-dropdown.styles.scss"

//  importing redux related files
import {connect} from "react-redux"

const CartDropdown = ({cartItems, itemCount})=>{
    return(
        <div className={`cart-dropdown ${itemCount === 0 ? "empty" : ""} `}>
            <div className="cart-items">
                {itemCount===0 ? "Cart is empty" : cartItems.map(cartItem=> <CartItem item={cartItem} key={cartItem.id} />)}
                
            </div>
            <CustomButton>Go To CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProp = ({cart:{cartItems}}) => {
    var itemCount = 0;
    cartItems.forEach(cartItem => {
        itemCount = itemCount + cartItem.count
    });       
    return {cartItems:cartItems, itemCount:itemCount }
}



export default connect(mapStateToProp)(CartDropdown)