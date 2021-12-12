import { useEffect, useState } from "react"
import { api_v1 }from "../../services/api.js"
import { Container, FavouriteContainer, H2, Filter, Title } from "./styles";
import UserDefault from "../../assets/user_default.png"
import ItemCard from "../Cardapio/ItemCard"
import { useUserContext } from "../../context/useUserContent";


const UserProfile = () => {
    
    const {user} = useUserContext()
    const [Favourites, setFavourites] = useState([])
    const fetchFavourites = async () => {
        const response = await api_v1.get("favourites")
        setFavourites(response.data)
    }

    useEffect(() => {
        if(user.authentication_token) {
            fetchFavourites()
        }
    }, [user])

    return (
        <>
            <Title>Bem Vindo</Title>
            <Container>
                <div className="photo">
                    <img src={user.profile_picture_url?  "http://localhost:3000"+user.profile_picture_url : UserDefault} alt="Imagem do usuário"/>
                    <button>Trocar Foto</button>
                </div>
                <div className="info">
                    <p id="email">Email: {user && user.email}</p>
                    <p>Nome: {user && user.name}</p>
                </div>
            </Container>
            <H2>Meus Favoritos</H2>
            <Filter>
                <label>Ordenar por:</label>
                <select>
                    <option>Preço(ordem crescente)</option>
                    <option>Preço(ordem crescente)</option>
                    <option>Alfabética(normal)</option>
                    <option>Alfabética(ao contrário)</option>
                </select>
            </Filter>
            <FavouriteContainer>
                {Favourites.map((item, index) => (
                    <ItemCard key={index} id={item.product.id} name={item.product.name} price={item.product.price} photo={item.product.photo_url}/>
                ))}
            </FavouriteContainer>
        </>
    );
}

export default UserProfile;