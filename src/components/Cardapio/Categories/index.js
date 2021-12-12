import { Link } from "react-router-dom"
import { useUserContext } from "../../../context/useUserContent.js"
import { BarraLateral } from "./styles.js"

const Categories = () => {

    const isAdmin = true 

    return (
        <BarraLateral isAdmin={isAdmin}>
            <div>
                <Link to="/cardapio/todos">Todos</Link>
                <Link to="/cardapio/entrada">Entradas</Link>
                <Link to="/cardapio/pizza">Pizzas</Link>
                <Link to="/cardapio/lasanha">Lasanhas</Link>
                <Link to="/cardapio/macarrao">Macarrões</Link>
                <Link to="/cardapio/bebida">Bebidas</Link>
                <Link className="edicao" to="/admin">Editar</Link>
            </div>
        </BarraLateral>
    )
}

export default Categories
