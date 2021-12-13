import React from 'react'
import { Category } from './styles'

const CategoryCard = ({id, name, selectedItem, setSelectedItem}) => {
    return (
        <Category onClick={() => setSelectedItem({
            id: id,
            name: name
        })} selectedItem={selectedItem}>{name?.toUpperCase()}</Category>
    )
}

export default CategoryCard
