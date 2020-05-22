import React from "react"

import "./collection.styles.scss"
import {selectCollections} from "../../redux/shop/shop.selectors"
import CollectionItem from "../../components/collection-item/collection-item.component"
import {connect} from "react-redux"

const CollectionPage = ({match, collections}) => {
    var collectionId = match.params.collectionId
    const ids = {'hats':1, "sneakers":2, "jackets":3, "womens":4, "mens":5}
    collectionId = ids[collectionId]
    var [collection] = collections.filter(collection => collection.id === collectionId)
    collection = collection.items
    // const collection = collections.filter( collection => collection.id === collectionId)
  
    return (
        <div className="collection-page">
            <h1>  {match.params.collectionId.toUpperCase()}</h1>
            <div className="collection-items">
                {collection.map(item => (<CollectionItem  key={item.id}  item={item} />))}
           </div>
        </div>
    )
}

const mapStateToProps = state => ({
    collections :  selectCollections(state)
})

export default connect(mapStateToProps)(CollectionPage)