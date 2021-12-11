import{ Container } from "./styles.js"

const Description = ({description, quantity}) => {
    

  
  return (
      <Container>
        <div>
          <p>{description}</p>
          <p>{quantity}</p>
        </div>
      </Container>
    )
}

export default Description
