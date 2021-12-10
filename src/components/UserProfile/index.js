import { useEffect, useState } from "react"
import { api_v1 }from "../../services/api.js"
import { Container, FavouriteContainer, H2, Filter, Title } from "./styles";
import UserDefault from "../../assets/user_default.png"
import Favorite from "./Favorite";
import { useUserContext } from "../../context/useUserContent";


const UserProfile = () => {
    
    const {user} = useUserContext()
    const [Favourites, setFavourites] = useState([])
    const fetchFavourites = async () => {
        const response = await api_v1.get("favourites",{
            headers:{
                "X-User-Token": user.authentication_token,
                "X-User-Email": user.email
            }
        })
        setFavourites(response.data)
    }

    useEffect(() => {
        fetchFavourites()
    }, [])

    return (
        <>
            <Title>Bem Vindo</Title>
            <Container>
                <div className="photo">
                    <img src={UserDefault} alt="Imagem do usuário"/>
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
                    <Favorite key={index} id={item.product.id} name={item.product.name} price={item.product.price} photo={item.product.photo_url}/>
                ))}
            </FavouriteContainer>
        </>
    );
}

export default UserProfile;