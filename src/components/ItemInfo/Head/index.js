import { Container } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"
import CoracaoEmpty from "../../../assets/heart_icon-icons.com_48290.png"
import CoracaoRed from "../../../assets/52771heartsuit_109411.png"
import CoracaoBroken from "../../../assets/heart-broken256_icon-icons.com_76062.png"
import { api_v1, controller } from "../../../services/api.js"
import { useUserContext } from "../../../context/useUserContent.js"
import Lixeira from "../../../assets/lixeira.png"
import { useNavigate } from "react-router"
import { useAdminContext } from "../../../context/useAdminContext.js"


const Head = ({id, name, price, photo, isFavourite, setIsFavourite}) => {

    const { user } = useUserContext()
    const { admin } = useAdminContext()
    const navigate = useNavigate()
    const isAdmin = admin.authentication_token && true

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
        let confirmacao = window.confirm("Tem certeza que deseja deletar esse item?")
        if (confirmacao){
            if(admin.authentication_token) {
                const response = await api_v1.delete(`products/delete/${id}`)
                navigate("/cardapio/todos")
            }
            else {
                alert("Você não está logado como admin")
            }
    }
    }
  
  return (
        <Container isAdmin={isAdmin} isFavourite={isFavourite}>
            <h1>{name}</h1>
            <img className="item" src={photo? controller.defaults.baseURL+photo : ItemDefault} alt="foto do produto"/>
            <div className="icon" >
                <img onClick={() => (deletar())} className="lixeira" src={Lixeira}/>
                <div className="crz" >
                    <img className="E" src={CoracaoEmpty}/>
                    <img onClick={() => (Favouritou())} className="R" src={CoracaoRed}/>
                    <img onClick={() => (desFavouritou())}className="B" src={CoracaoBroken}/>
                </div>
            </div>
            <p>R$ {price?.toFixed(2)}</p>
        </Container>
    )
}

export default Head
