import { Link } from "react-router-dom"
import { BarraLateral } from "./styles.js"

const Categories = () => {

    return (
        <BarraLateral>
            <div>
                <Link to="../cardapio/todos">Todos</Link>
                <Link to="../cardapio/entrada">Entradas</Link>
                <Link to="../cardapio/pizza">Pizzas</Link>
                <Link to="../cardapio/lasanha">Lasanhas</Link>
                <Link to="../cardapio/macarrao">Macarrões</Link>
                <Link to="../cardapio/bebida">Bebidas</Link>
            </div>
        </BarraLateral>
    )
}

export default Categories
