// importing the libraties
import React from "react"

// importing the stylesheet
import "./cart-item.styles.scss"

const CartItem = (props) => {
    return(
        <div className="cartItem">
            <img src={props.item.imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{props.item.name}</span>
                <span className="price">
                    {props.item.count} X ₹{props.item.price*10} = ₹{props.item.price*props.item.count*10}
                </span>
            </div>
        </div>
    )
}

export default CartItem