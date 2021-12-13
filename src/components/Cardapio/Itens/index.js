import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useAdminContext } from "../../../context/useAdminContext"
import { api_v1 } from "../../../services/api"
import ItemCard from "../ItemCard"
import { Container } from "./styles.js"

const Itens = () => {

  const {admin} = useAdminContext()

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

    return (
        <Container>
            {newproducts.map((item, index) => (
                <ItemCard key={index} id={item.id} name={item.name} price={item.price} photo={item.photo_url}/>
            ))}
            {admin.authentication_token && <ItemCard></ItemCard>}
        </Container>
    )
}

export default Itens


