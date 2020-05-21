import React from "react"

const CategoryPage = ({match}) => {
    return (
        <div className="category-page">
            <h1> Category = {match.params.category}</h1>
        </div>
    )
}

export default CategoryPage