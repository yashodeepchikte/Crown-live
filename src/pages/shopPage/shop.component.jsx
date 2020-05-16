import React from "react";
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"


class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render()
    {
        return(
            <div>
                {SHOP_DATA.map(collection=> <CollectionPreview key={collection.id}    items={collection.items} title={collection.title}  />)}
            </div>
        )
    }

}

export default ShopPage