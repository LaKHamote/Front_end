import {Container} from './styles'

const Home = () => {
    return (
    <Container>
        <section class="product" id='pizzas'>
            <div class="content">
                <div class="top">
                    <h1>Pizzas</h1>
                    <h3 id="sub-pizza">Feitas com carinho</h3>
                </div>

                <div class="bottom" id="B-pizza">
                    <button class="orange">Ver todas</button>
                </div>
            </div>
        </section>
        <section class="product" id='massas'>
            <div class="content">
                <div class="top">
                    <h1>Massas</h1>
                    <h3 id="sub-massa">Monte do jeito que preferir</h3>
                </div>

                <div class="bottom" id="B-massa">
                    <button class="orange">Ver todas</button>
                </div>
            </div>
        </section>
        <section class="product" id='sobremesa'>
            <div class="content">
                <div class="top">
                    <h1>Sobremesas</h1>
                    <h3 id="sub-sobremesa">Peça o seu favorito</h3>
                </div>

                <div class="bottom" id="B-sobremsa">
                    <button class="orange">Ver todas</button>
                </div>
            </div>
        </section>
    </Container>
    );
} 

export default Home;