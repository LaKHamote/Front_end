import { Container } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"
import CoracaoEmpty from "../../../assets/heart_icon-icons.com_48290.png"
import CoracaoRed from "../../../assets/52771heartsuit_109411.png"
import CoracaoBroken from "../../../assets/heart-broken256_icon-icons.com_76062.png"
import { api_v1 } from "../../../services/api.js"
import { useUserContext } from "../../../context/useUserContent.js"


const Head = ({id, name, price, photo, isFavourite, setIsFavourite}) => {

    const { user } = useUserContext()

    const Favoritar = async () => {
        const response = await api_v1.post(`favourites/create`, {
            favourite: {
                product_id: id,
                user_id: user.id
            }
            
        })
    }
    
    const Favouritou = () => {
        setIsFavourite(true)
        Favoritar()
    }
  
  return (
        <Container isFavourite={isFavourite}>
            <h1>{name}</h1>
            <img className="item" src={photo? "http://localhost:3000/"+photo : ItemDefault} alt={`foto do produto ${name}`}/>
            <div>
                <img  className="crz E" src={CoracaoEmpty} alt="coração vazio"/>
                <img onClick={() => (Favouritou())} className="crz R" src={CoracaoRed} alt="favoritar"/>
                <img  className="crz B" src={CoracaoBroken} alt="desfavoritar"/>
            </div>
            <p>R$ {price}</p>

        </Container>
    )
}

export default Head
