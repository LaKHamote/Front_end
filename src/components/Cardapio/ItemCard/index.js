import { Containerzin } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"
import { Link } from "react-router-dom"
import { controller } from "../../../services/api.js"


const ItemCard = ({id, name, price, photo}) => {

    return (
        <Containerzin>
            <Link to={id? `/iteminfo/${id}` : "/NewProduct"}>
                <img src={photo? controller.defaults.baseURL+photo : ItemDefault} alt="foto do produto"/>
            </Link>
            <p>{name || "Adicionar produto"}</p>
            <p>{price? ("R$"+price?.toFixed(2)) : null}</p>
        </Containerzin>
    )
}

export default ItemCard
