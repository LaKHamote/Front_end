import { Containerzin } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"
import { Link } from "react-router-dom"

const ItemCard = ({id, name, price, photo}) => {

    return (
        <Containerzin>
            <Link to={`/iteminfo/${id}`}>
                <img src={photo? "http://localhost:3000/"+photo : ItemDefault} alt="foto do produto"/>
            </Link>
            <p>{name}</p>
            <p>R$ {price.toFixed(2)}</p>
        </Containerzin>
    )
}

export default ItemCard
