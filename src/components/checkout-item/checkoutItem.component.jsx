// importing the required libraries
import React from "react"

// importing the stylesheet
import "./checkoutItem.styles.scss"

const CheckoutItem = ({cartItem}) => {
    return(
        <div className="checkout-item">
            <div className = "image-container">
            <img src={cartItem.imageUrl} alt="item"/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">{cartItem.count}</span>
            <span className="price">{cartItem.price*10}</span>
            
            <div className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem