import { Container } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"
import CoracaoEmpty from "../../../assets/heart_icon-icons.com_48290.png"
import CoracaoRed from "../../../assets/52771heartsuit_109411.png"
import CoracaoBroken from "../../../assets/heart-broken256_icon-icons.com_76062.png"
import { api_v1, controller } from "../../../services/api.js"
import { useUserContext } from "../../../context/useUserContent.js"
import Lixeira from "../../../assets/lixeira.png"
import { useNavigate } from "react-router"


const Head = ({id, name, price, photo, isFavourite, setIsFavourite}) => {

    const { user } = useUserContext()
    const navigate = useNavigate()

    const Favoritar = async () => {
        const response = await api_v1.post(`favourites/create`, {
            favourite: {
                product_id: id,
                user_id: user.id
            }
            
        })
    }

    const desFavoritar = async () => {
        const response = await api_v1.delete(`favourites/delete/${id}`)
    }

    const Favouritou = () => {
        if(!user.authentication_token) {
            alert("Faça login para favoritar")
            return
        }
        setIsFavourite(true)
        Favoritar()
    }

    const desFavouritou = () => {
        if(!user.authentication_token) {
            alert("Faça login para favoritar")
            return
        }
        setIsFavourite(false)
        desFavoritar()
    }

    const deletar = async () => {
        const response = await api_v1.delete(`products/delete/${id}`)
        navigate("/cardapio/todos")
    }

    api_v1.defaults.headers.common[`X-Admin-Token`] = "AWTJAyYsdzw3eVXV1xhy"
    api_v1.defaults.headers.common[`X-Admin-Email`] = "boss@final"
  
  return (
        <Container isFavourite={isFavourite}>
            <h1>{name}</h1>
            <img className="item" src={photo? controller.defaults.baseURL+photo : ItemDefault} alt="foto do produto"/>
            <div className="icon" >
                <img onClick={() => (deletar())} className="lixeira" src={Lixeira}/>
                <div className="crz" >
                    <img className="crz E" src={CoracaoEmpty}/>
                    <img onClick={() => (Favouritou())} className="crz R" src={CoracaoRed}/>
                    <img onClick={() => (desFavouritou())}className="crz B" src={CoracaoBroken}/>
                </div>
            </div>
            <p>R$ {price?.toFixed(2)}</p>

        </Container>
    )
}

export default Head
