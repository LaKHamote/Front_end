import { Container, FavouriteContainer, H2, Filter, Title } from "./styles";
import UserDefault from "../../assets/user_default.png"
import Favorite from "./Favorite";
import { useUserContext } from "../../context/useUserContent";

const UserProfile = () => {
    const product = {
        photo: UserDefault,
        name: "item",
        price: "Preço"
    }

    const {user} = useUserContext()
    console.log(user)
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
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
            </FavouriteContainer>
        </>
    );
}

export default UserProfile;