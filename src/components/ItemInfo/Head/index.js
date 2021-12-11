import { Container } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"
import CoracaoEmpty from "../../../assets/heart_icon-icons.com_48290.png"
import CoracaoRed from "../../../assets/52771heartsuit_109411.png"
import CoracaoBroken from "../../../assets/heart-broken256_icon-icons.com_76062.png"
import { api_v1, controller } from "../../../services/api.js"
import { useUserContext } from "../../../context/useUserContent.js"


const Head = ({id, name, price, photo, isFavourite, setIsFavourite}) => {

    const { user } = useUserContext()

    const Favoritar = async () => {
        api_v1.defaults.headers.common[`X-User-Token`] = "JnUAkpoU2ymS1yZ4i3d3"
        api_v1.defaults.headers.common[`X-User-Email`] = "lucas@gmail.com"
        const response = await api_v1.post(`favourites/create`, {
            favourite: {
                product_id: id,
                user_id: 1
            }
            
        })
    }

    const desFavoritar = async () => {
        api_v1.defaults.headers.common[`X-User-Token`] = "JnUAkpoU2ymS1yZ4i3d3"
        api_v1.defaults.headers.common[`X-User-Email`] = "lucas@gmail.com"
        const response = await api_v1.delete(`favourites/delete/${id}`, {
        })
    }

    const Favouritou = () => {
        setIsFavourite(true)
        Favoritar()
    }

    const desFavouritou = () => {
        setIsFavourite(false)
        desFavoritar()
    }
  
  return (
        <Container isFavourite={isFavourite}>
            <h1>{name}</h1>
            <img className="item" src={photo? controller.defaults.baseURL+photo : ItemDefault} alt="foto do produto"/>
            <div>
                <img  className="crz E" src={CoracaoEmpty}/>
                <img onClick={() => (Favouritou())} className="crz R" src={CoracaoRed}/>
                <img  onClick={() => (desFavouritou())}className="crz B" src={CoracaoBroken}/>
            </div>
            <p>R$ {price?.toFixed(2)}</p>

        </Container>
    )
}

export default Head
