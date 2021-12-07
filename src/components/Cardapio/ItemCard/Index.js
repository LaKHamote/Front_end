import { Containerzin } from "./styles.js"

const ItemCard = (props) => {

    return (
        <Containerzin>
            <a href="">
                <img src={"http://localhost:3000/"+props.photo} alt="imagem do produto"/>
            </a>
            <p>{props.name}</p>
            <p>R$ {props.price.toFixed(2)}</p>
        </Containerzin>
    )
}

export default ItemCard