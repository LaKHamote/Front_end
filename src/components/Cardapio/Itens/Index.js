import { useEffect, useState } from "react"
import { api_v1 } from "../../../services/api"
import ItemCard from "../ItemCard/Index"
import { Container } from "./Styles"

const Itens = () => {

  const [products, setProducts] = useState([])

  useEffect (() => {
    api_v1.get('products').then((response) => {
      setProducts(response.data)
    }) 
  }, [])


    return (
        <Container>
            { products.map((item, index) => (
                <ItemCard key={index} name={item.name} price={item.price} photo={item.photo_url}/>
            ))}

        </Container>
    )
}

export default Itens


