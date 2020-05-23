import React from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.component"
import "./shop-page.stylec.scss"

import {Route} from "react-router-dom"
import CollectionPage from "../collection/collection.component"

const ShopPage = ({match}) => {
    return(
        <div className="shop-page">
            <Route  exact path={`${match.path}`} component={CollectionOverview}  /> 
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage