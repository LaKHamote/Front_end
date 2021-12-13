import { useEffect, useState } from "react"
import { api_v1 } from "../../services/api"
import React from 'react'
import Head from '../../components/ItemInfo/Head'
import { useParams } from "react-router"
import Description from "../../components/ItemInfo/Description"
import { useUserContext } from "../../context/useUserContent"



const ItemInfo = () => {

    const {user} = useUserContext()

    const { id } = useParams()
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
        if (user.authentication_token) {
            fetchIsFavourite()
        }
    },[user])


    return (
        <>
            <Head  key={`h${product.id}`}
                    id={product.id}
                    name={product.name} 
                    price={product.price}
                    photo={product.photo_url}
                    isFavourite={IsFavourite}
                    setIsFavourite={setIsFavourite}
                    />
            <Description key={`d${product.id}`}
                            description={product.description}
                            quantity={product.quantity}
            />
        </>
    )
}

export default ItemInfo
