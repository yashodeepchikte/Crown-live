// importing libraries
import React from "react"

// importing all the required components
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-cart.svg"
import { toggleCartHidden } from "../../redux/cart/cart.actions"


// importins related to redux
import {connect} from "react-redux"
// importing selectors
import {selectItemCount} from "../../redux/cart/cart.selectors"

// importing the stylesheet
import "./cart-icon.styles.scss"

function ShoppingCart({toggleCartHidden, itemsCount}){
    // console.log("itemcount=", itemsCount)
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

const mapDiapatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = state=>({
        itemsCount:selectItemCount(state)
    })


export default connect(mapStateToProps, mapDiapatchToProps)(ShoppingCart)