import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component"

function CollectionPreview(props){
    return(
            <div className='collection-preview'>
                <h1>{props.title}</h1>
                <div className='preview'> 
                    {props.items.filter((item, idx) => idx < 4).map(item => 
                        <CollectionItem key={item.id}   item={item}/> 
                    )}
                </div>
            </div>
    )
}

//  name={item.name} price={item.price} imageUrl={item.imageUrl}

export default CollectionPreview;