import React from 'react'
import { controller } from '../../../services/api'
import { Container } from './styles'
import ItemDefault from '../../../assets/item_default.png'

const ProductCard = ({id, name, photo, price, quantity, description, selectedItem, setSelectedItem}) => {
    return (
        <Container onClick={() => setSelectedItem({
            id: id,
            name: name,
            photo: photo,
            price: price,
            quantity: quantity,
            description: description
        })} selectedItem={selectedItem}>
            <img src={photo? controller.defaults.baseURL+photo : ItemDefault} alt="foto do produto"/>
            <p>{name}</p>
            <p>R$ {price.toFixed(2)}</p>
        </Container>
    )
}

export default ProductCard
