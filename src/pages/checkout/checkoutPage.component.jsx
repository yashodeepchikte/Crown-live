//  importing the required libraries
import React from "react"

// importing the required components
import CheckOutItem from "../../components/checkout-item/checkoutItem.component"
import StripePayment from "../../components/stripe-payment/stripe-payment.component"

//  importing the stylesheet
import "./checckoutPage.styles.scss"

//  imports related to redux
import { connect } from 'react-redux'
import {createStructuredSelector} from "reselect"


// importing redux selectors
import {selectCartItems} from "../../redux/cart/cart.selectors" 
import {selectCartValue} from "../../redux/cart/cart.selectors" 


// importing Stylesheet
import "./checckoutPage.styles.scss"

const CheckOutPage = ({cartItems, cartValue, dispatch}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block ">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantiety</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartitem => <CheckOutItem key={cartitem.id} cartItem={cartitem} />)}
            <div className="total">
                <span>Total = ₹{cartValue}</span>
            </div>
            <StripePayment amount={cartValue} />
            <h1 style={{color:"red"}}>Use the folllowing credit card details for Test payment</h1>
            <h1 style={{color:"red"}}>Card No - 4242 4242 4242 4242  MM/YY = 01/21  CVV = 123</h1>
            
        </div>
    )
}


const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        cartValue: selectCartValue
    }
)



export default connect(mapStateToProps)(CheckOutPage) 