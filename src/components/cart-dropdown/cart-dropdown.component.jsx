// importing the libraries
import React from "react"

// importing the component
import CustomButton from "../custom-button/custom-button.component"

// importing the stylesheet
import "./cart-dropdown.styles.scss"

const CartDropdown = (props)=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-item"></div>
            <CustomButton>Go To CHECKOUT</CustomButton>
        </div>
    )
}




export default CartDropdown