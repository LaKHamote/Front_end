import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api_v1 } from "../../../services/api"
import ItemCard from "../ItemCard"
import { Container } from "./styles.js"

const Itens = () => {

  let { categorie } = useParams()
  const [products, setProducts] = useState([])

  useEffect (() => {
    api_v1.get('products').then((response) => {
      setProducts(response.data)
  })}, [])

  let newproducts = []
  if (categorie === "todos"){
    newproducts = products
  }else {
    newproducts = products.filter((products) => (products.type_name === categorie))
  }

  const isAdmin = true

    return (
        <Container>
            {newproducts.map((item, index) => (
                <ItemCard key={index} id={item.id} name={item.name} price={item.price} photo={item.photo_url}/>
            ))}
            {isAdmin && <ItemCard></ItemCard>}
        </Container>
    )
}

export default Itens


