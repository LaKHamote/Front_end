import { Container } from "./styles";

const Favorite = ({product}) => {

    return (
        <Container>
            <img src={product.photo} alt="imagem do produto"/>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </Container>
    );
}

export default Favorite;