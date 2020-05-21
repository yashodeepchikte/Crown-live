// importing the libraries
import React from "react"
import {withRouter} from "react-router-dom"

// importing the component
import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
// importing the stylesheet
import "./cart-dropdown.styles.scss"

//  importing redux related files
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

//  importing redux actions
import {toggleCartHidden} from "../../redux/cart/cart.actions"

//  Importing reselect component selectors
import {selectItemCount} from "../../redux/cart/cart.selectors"
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {selectCartValue} from "../../redux/cart/cart.selectors"

const CartDropdown = ({cartItems, itemCount, cartValue, history, dispatch})=>{
    return(
        <div className={`cart-dropdown`}>
            

            {itemCount==0 ? 
                <div className="empty-message">Your Cart Is Empty</div>
                    :
                    <div className="cart-items">
                    {cartItems.map(cartItem=> <CartItem item={cartItem} key={cartItem.id} />)} 
                    <hr />
                    <div className="cart-value">
                    TOTAL  = ₹{cartValue}
                    </div>
                    <CustomButton onClick={() =>{ 
                            history.push("/checkout")
                            dispatch(toggleCartHidden())
                            }
                        }
                    >Go To CHECKOUT</CustomButton>
                </div>
            }
        
        </div>
    )
}

const mapStateToProp = createStructuredSelector (
    {itemCount:selectItemCount,
    cartItems : selectCartItems,
    cartValue : selectCartValue})

export default withRouter(connect(mapStateToProp)(CartDropdown))