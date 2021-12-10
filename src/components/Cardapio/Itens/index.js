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

  const [newproducts, setnewproducts] = useState([])
  useEffect(() => {
    (categorie === "todos")? setnewproducts(products) : setnewproducts(products.filter((products) => (products.type_name === categorie)))
  }, [categorie])

    return (
        <Container>
            {  newproducts.map((item, index) => (
                <ItemCard key={index} id={item.id} name={item.name} price={item.price} photo={item.photo_url}/>
            ))}

        </Container>
    )
}

export default Itens


