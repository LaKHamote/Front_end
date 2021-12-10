import { Container } from "./styles.js"
import ItemDefault from "../../../assets/item_default.png"
import CoracaoEmpty from "../../../assets/heart_icon-icons.com_48290.png"
import CoracaoRed from "../../../assets/52771heartsuit_109411.png"
import CoracaoBroken from "../../../assets/heart-broken256_icon-icons.com_76062.png"
const Head = ({name, price, photo, isFavourite}) => {
    

  
  return (
        <Container isFavourite={isFavourite}>
            <h1>{name}</h1>
            <img className="item" src={photo? "http://localhost:3000/"+photo : ItemDefault} alt="foto do produto"/>
            <div>
                <img  className="crz E" src={CoracaoEmpty}/>
                <img  className="crz R" src={CoracaoRed}/>
                <img  className="crz B" src={CoracaoBroken}/>
            </div>
            <p>R$ {price}</p>

        </Container>
    )
}

export default Head
