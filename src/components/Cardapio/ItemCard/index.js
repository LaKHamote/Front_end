import { Containerzin } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"

const ItemCard = ({name, price, photo}) => {

    return (
        <Containerzin>
            <a href="">
                <img src={photo? "http://localhost:3000/"+photo : ItemDefault}/>
            </a>
            <p>{name}</p>
            <p>R$ {price.toFixed(2)}</p>
        </Containerzin>
    )
}

export default ItemCard
