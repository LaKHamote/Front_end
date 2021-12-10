import { useEffect, useState } from "react"
import { api_v1 } from "../../services/api"
import React from 'react'
import Head from '../../components/ItemInfo/Head'
import { useParams } from "react-router"
import Description from "../../components/ItemInfo/Description"



const ItemInfo = () => {

    let { id } = useParams()
    const [product, setProduct] = useState({})
    const [IsFavourite, setIsFavourite] = useState(false)

    const fetchProducts = async () => {
        const response = await api_v1.get(`products/show/${id}`)
        setProduct(response.data)
    }

    const fetchIsFavourite = async () => {
        const response = await api_v1.get(`favourites/${id}`)
        setIsFavourite(response.data)
    }
    
    useEffect(() => {
        fetchProducts()
        fetchIsFavourite()
    }, [])


    return (
        <>
            <Head  key={product.id}
                    name={product.name} 
                    price={product.price}
                    photo={product.photo_url}
                    isFavourite={IsFavourite}
                    />
            <Description key={product.id}
                            description={product.description}
                            quantity={product.quantity}
            />
        </>
    )
}

export default ItemInfo
