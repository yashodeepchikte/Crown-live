// importing the required libraries
import React from "react"

// importing the stylesheet
import "./checkoutItem.styles.scss"

//  importing redux related files
import {connect} from "react-redux"
//  importing redux  actions
import {removeItem} from "../../redux/cart/cart.actions"
import {addItem} from "../../redux/cart/cart.actions"
import {decreaseCartItem} from "../../redux/cart/cart.actions"



const CheckoutItem = ({cartItem, removeItem, addItem, decreaseCartItem}) => {
    return(
        <div className="checkout-item">
            <div className = "image-container">
            <img src={cartItem.imageUrl} alt="item"/>
            </div>
            <span className="name">{cartItem.name}</span>
            <div className="quantity">
                <button className="dec" onClick={() => decreaseCartItem(cartItem)}>-</button>
                <span >{cartItem.count}</span>
                <button className="add" onClick={() => addItem(cartItem)}>+</button>
            </div>
            <span className="price">{"₹"+cartItem.price*10}</span>
            
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}


const mapDispatchToProps = dispatch =>(
    {
        removeItem: item => dispatch(removeItem(item)),
        addItem: item => dispatch(addItem(item)),
        decreaseCartItem: item =>dispatch(decreaseCartItem(item))
    }
    )



export default connect(null,mapDispatchToProps)(CheckoutItem)