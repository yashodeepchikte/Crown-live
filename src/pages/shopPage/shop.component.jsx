import React from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.component"

import {Route} from "react-router-dom"
import CategoryPage from "../../pages/category/category.component"

const ShopPage = ({match}) => {
    return(
        <div className="shop-page">
            <Route  exact path={`${match.path}`} component={CollectionOverview}  /> 
            <Route path={`${match.path}/:category`} component={CategoryPage} />
        </div>
    )
}

export default ShopPage