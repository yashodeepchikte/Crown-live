// importing libraries
import React from "react"
import {connect} from "react-redux"
// importing all the required components
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-cart.svg"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

// importing the stylesheet
import "./cart-component.styles.scss"

function ShoppingCart({toggleCartHidden}){

    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDiapatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})


export default connect(null, mapDiapatchToProps)(ShoppingCart)