// importing the libraries
import React from "react";

// importing the components
import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

// importing  redux related functions
import { connect } from "react-redux"
import {addItem} from "../../redux/cart/cart.actions"

function CollectionItem({item, addItem}){
    return (
        <div className="collection-item">
            <div className="image" 
                style={{backgroundImage: `url(${item.imageUrl})`}} >
            </div>
            <div className="collection-footer">
                <div className="name">{item.name}</div>
                <div className="price">{"₹" + item.price*10}</div>
            </div>
            <CustomButton inverted onClick={() =>addItem(item)} >Add To Cart</CustomButton>

        </div>
    )
}

const mapDispatchToProp = dispatch =>  ( {addItem : item => dispatch(addItem(item))} )




export default connect(null, mapDispatchToProp)(CollectionItem)