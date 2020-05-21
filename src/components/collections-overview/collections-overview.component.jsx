import React from "react"
import "./collections-overview.styles.scss"

import CollectionPreview from "../collection-preview/collection-preview.component"

import {connect} from "react-redux"
import {selectCollections} from "../../redux/shop/shop.selectors"



const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {collections.map(collection=> <CollectionPreview key={collection.id}    items={collection.items} title={collection.title}  />)}
        </div>
    )
}

const mapStateToProps = state =>({
    collections : selectCollections(state)
})


export default connect(mapStateToProps)(CollectionOverview)