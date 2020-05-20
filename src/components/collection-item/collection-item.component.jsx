import React from "react";

import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"

function CollectionItem(props){
    return (
        <div className="collection-item">
            <div className="image" 
                style={{backgroundImage: `url(${props.imageUrl})`}} >
            </div>
            <div className="collection-footer">
                <div className="name">{props.name}</div>
                <div className="price">{"₹" + props.price*10}</div>
            </div>
            <CustomButton inverted>Add To Cart</CustomButton>

        </div>
    )
}

export default CollectionItem