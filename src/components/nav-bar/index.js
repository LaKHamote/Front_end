import {Container} from './styles'

const Nav = () => {
  return (
    <Container>
        <nav id="menu-h">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Cardapio</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#"> <img src="" alt="Foto de Perfil"/> </a></li>
          </ul>
        </nav>
    </Container>
  );
}

export default Nav;
